"use client";

import {
  BellIcon,
  BrainCircuit,
  CalendarIcon,
  ReceiptEuro,
  ScrollText,
} from "lucide-react";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";

import React from "react";
import { useScopedI18n } from "@/src/locales";
import Section from "./section";
import { FeatureScroll1, FeatureScrollContainer } from "../feature_scroll";
import { cn } from "@/src/lib";
import { motion } from "framer-motion";
import Safari from "../safari";

export default function FeaturesSection() {
  const t = useScopedI18n("landingPage");

  const features = [
    {
      Icon: BrainCircuit,
      name: t("features.ia.title"),
      description: t("features.ia.description"),
      href: "/",
      cta: t("features.more"),
      direction: "ltr" as "rtl" | "ltr",
      points: [
        t("features.ia.points.point1"),
        t("features.ia.points.point2"),
        t("features.ia.points.point3"),
        t("features.ia.points.point4"),
        t("features.ia.points.point5"),
      ],
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: ScrollText,
      name: t("features.accounting.title"),
      description: t("features.accounting.description"),
      href: "/",
      cta: t("features.more"),
      direction: "rtl" as "rtl" | "ltr",
      points: [
        t("features.accounting.points.point1"),
        t("features.accounting.points.point2"),
        t("features.accounting.points.point3"),
        t("features.accounting.points.point4"),
        t("features.accounting.points.point5"),
      ],
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className:
        "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: ReceiptEuro,
      name: t("features.reservations.title"),
      description: t("features.reservations.description"),
      href: "/",
      cta: t("features.more"),
      direction: "ltr" as "rtl" | "ltr",
      points: [
        t("features.reservations.points.point1"),
        t("features.reservations.points.point2"),
        t("features.reservations.points.point3"),
      ],
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className:
        "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: CalendarIcon,
      name: t("features.calendar.title"),
      description: t("features.calendar.description"),
      href: "/",
      cta: t("features.more"),
      direction: "rtl" as "rtl" | "ltr",
      points: [
        t("features.calendar.points.point1"),
        t("features.calendar.points.point2"),
      ],
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className:
        "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: BellIcon,
      name: t("features.notifications.title"),
      description: t("features.notifications.description"),
      href: "/",
      cta: t("features.more"),
      direction: "ltr" as "rtl" | "ltr",
      points: [
        t("features.notifications.points.point1"),
        t("features.notifications.points.point2"),
      ],
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className:
        "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];

  return (
    <Section title="Solution" subtitle="Voice notre réponse à vos problèmes">
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </Section>
  );
}
