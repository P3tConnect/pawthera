"use client"

import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"
import { cn } from "@/src/lib/utils"
import { useUploadThing } from "@/src/lib/uploadthing"
import { toast } from "sonner"
import { zodResolver } from "@hookform/resolvers/zod"
import { proDocumentsSchema } from "../../types/onboarding-schemas"
import { useStepper } from "../../hooks/useStepper"
import { createDocumentsStepAction } from "@/src/actions"
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks"
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ACCEPTED_FILE_TYPES = {
    "application/pdf": [".pdf"],
    "image/jpeg": [".jpg", ".jpeg"],
    "image/png": [".png"]
}

export function DocumentsForm() {
    const stepper = useStepper();
    const { form, handleSubmitWithAction, resetFormAndAction } = useHookFormAction(createDocumentsStepAction, zodResolver(proDocumentsSchema), {
        formProps: {
            defaultValues: {
                documents: [],
                siren: "",
                siret: "",
            }
        },
        actionProps: {
            onSuccess: () => {
                resetFormAndAction();
                stepper.next();
            },
            onExecute: () => {
                toast.loading("Création des documents...");
            },
            onError: ({ error }) => {
                toast.error(error.serverError);
            },
        },
    });

    const { control, setValue } = form;


    return (
        <Form {...form}>
            <form className="space-y-6" onSubmit={handleSubmitWithAction}>
                <FormField
                    control={control}
                    name="documents"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Documents justificatifs</FormLabel>
                            <DropzoneInput
                                onFilesChanged={(files) => setValue("documents", files)}
                                value={field.value ?? []}
                            />
                            <FormDescription>
                                Ajoutez votre extrait Kbis ou tout autre document prouvant l&apos;identité de votre entreprise (PDF, JPEG, PNG - 5MB max)
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={control}
                    name="siren"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Numéro SIREN/SIRET</FormLabel>
                            <FormControl>
                                <Input placeholder="123456789" {...field} value={field.value ?? ""} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={control}
                    name="siret"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Numéro SIREN/SIRET</FormLabel>
                            <FormControl>
                                <Input placeholder="123456789" {...field} value={field.value ?? ""} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}

interface DropzoneInputProps {
    onFilesChanged: (files: string[]) => void
    value: string[]
}

function DropzoneInput({ onFilesChanged, value }: DropzoneInputProps) {
    const { startUpload, isUploading } = useUploadThing("documentsUploader", {
        onClientUploadComplete: (res) => {
            if (!res) return
            const uploadedUrls = res.map((file) => file.url)
            onFilesChanged(uploadedUrls)
            toast.success("Documents téléchargés avec succès")
        },
        onUploadError: (error: { message: string }) => {
            toast.error("Erreur lors du téléchargement: " + error.message)
        },
    })

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: ACCEPTED_FILE_TYPES,
        maxSize: MAX_FILE_SIZE,
        onDrop: async (acceptedFiles) => {
            if (acceptedFiles.length === 0) return
            await startUpload(acceptedFiles)
        },
    })

    const removeFile = (fileToRemove: string) => {
        onFilesChanged(value.filter(file => file !== fileToRemove))
    }

    return (
        <div className="space-y-4">
            <div
                {...getRootProps()}
                className={cn(
                    "border-2 border-dashed rounded-lg p-6 cursor-pointer",
                    "hover:border-primary/50 transition-colors",
                    isDragActive && "border-primary bg-primary/5",
                    isUploading && "opacity-50 cursor-not-allowed"
                )}
            >
                <input {...getInputProps()} disabled={isUploading} />
                <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                        {isDragActive
                            ? "Déposez les fichiers ici"
                            : isUploading
                                ? "Téléchargement en cours..."
                                : "Glissez-déposez vos fichiers ici, ou cliquez pour sélectionner"}
                    </p>
                </div>
            </div>

            {value.length > 0 && (
                <ul className="space-y-2">
                    {value.map((fileUrl, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-between p-2 bg-muted rounded-md"
                        >
                            <span className="text-sm truncate">
                                Document {index + 1}
                            </span>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => removeFile(fileUrl)}
                                disabled={isUploading}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
