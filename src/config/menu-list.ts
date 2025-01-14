import {
  Calendar,
  Contact2,
  Eye,
  FolderOpen,
  LayoutGrid,
  LineChart,
  LucideIcon,
  LucideMessageCircleQuestion,
  PawPrint,
  Settings,
  Ticket,
  Timer,
  UsersRound,
  FileText,
  Receipt,
  PieChart,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
};

export type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function proMenuList(pathname: string, companyId: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: `/dashboard/organization/${companyId}`,
          label: "dashboard.sidebar.dashboard",
          active: pathname == `/dashboard/organization/${companyId}`,
          icon: LayoutGrid,
          submenus: [],
        },
        {
          href: `/dashboard/organization/${companyId}/timetable`,
          label: "dashboard.sidebar.calendar",
          active: pathname == `/dashboard/organization/${companyId}/timetable`,
          icon: Calendar,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "dashboard.sidebar.groupLabels.management",
      menus: [
        {
          href: `/dashboard/organization/${companyId}/accounting`,
          label: "dashboard.sidebar.accounting",
          active: pathname.startsWith(
            `/dashboard/organization/${companyId}/accounting`,
          ),
          icon: FolderOpen,
          submenus: [
            {
              href: `/dashboard/organization/${companyId}/accounting`,
              label: "dashboard.sidebar.home",
              active:
                pathname === `/dashboard/organization/${companyId}/accounting`,
              icon: Contact2,
            },
            {
              href: `/dashboard/organization/${companyId}/accounting/estimates`,
              label: "dashboard.sidebar.estimates",
              active:
                pathname ===
                `/dashboard/organization/${companyId}/accounting/estimates`,
              icon: FileText,
            },
            {
              href: `/dashboard/organization/${companyId}/accounting/invoices`,
              label: "dashboard.sidebar.invoices",
              active:
                pathname ===
                `/dashboard/organization/${companyId}/accounting/invoices`,
              icon: Receipt,
            },
            {
              href: `/dashboard/organization/${companyId}/accounting/reports`,
              label: "dashboard.sidebar.financialReports",
              active:
                pathname ===
                `/dashboard/organization/${companyId}/accounting/reports`,
              icon: PieChart,
            },
          ],
        },
        {
          href: `/dashboard/organization/${companyId}/reminders`,
          label: "dashboard.sidebar.reminders",
          active: pathname == `/dashboard/organization/${companyId}/reminders`,
          icon: Timer,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "dashboard.sidebar.groupLabels.services",
      menus: [
        {
          href: `/dashboard/organization/${companyId}/clients`,
          label: "dashboard.sidebar.clients",
          active: pathname == `/dashboard/organization/${companyId}/clients`,
          icon: Contact2,
          submenus: [],
        },
        {
          href: `/dashboard/organization/${companyId}/patients`,
          label: "dashboard.sidebar.patients",
          active: pathname == `/dashboard/organization/${companyId}/patients`,
          icon: PawPrint,
          submenus: [],
        },
        {
          href: `/dashboard/organization/${companyId}/reports`,
          label: "dashboard.sidebar.reports",
          active: pathname == `/dashboard/organization/${companyId}/reports`,
          icon: LineChart,
          submenus: [],
        },
        {
          href: `/dashboard/organization/${companyId}/observations`,
          label: "dashboard.sidebar.observations",
          active:
            pathname == `/dashboard/organization/${companyId}/observations`,
          icon: Eye,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "dashboard.sidebar.groupLabels.other",
      menus: [
        {
          href: `/dashboard/organization/${companyId}/settings`,
          label: "dashboard.sidebar.settings",
          active: pathname == `/dashboard/organization/${companyId}/settings`,
          icon: Settings,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "dashboard.sidebar.groupLabels.informations",
      menus: [
        {
          href: `/help`,
          label: "dashboard.sidebar.help",
          active: pathname == `/help`,
          icon: LucideMessageCircleQuestion,
          submenus: [],
        },
      ],
    },
  ];
}

export function clientMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: `/dashboard`,
          label: "dashboard.sidebar.dashboard",
          active: pathname == `/dashboard`,
          icon: LayoutGrid,
          submenus: [],
        },
        {
          href: `/dashboard/timetable`,
          label: "dashboard.sidebar.calendar",
          active: pathname == `/dashboard/timetable`,
          icon: Calendar,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "dashboard.sidebar.groupLabels.account",
      menus: [
        {
          href: `/dashboard/reservations`,
          label: "dashboard.sidebar.reservations",
          active: pathname == `/dashboard/reservations`,
          icon: Ticket,
          submenus: [],
        },
        {
          href: `/dashboard/pets`,
          label: "dashboard.sidebar.animals",
          active: pathname == `/dashboard/pets`,
          icon: PawPrint,
          submenus: [],
        },
        {
          href: "/dashboard/settings",
          label: "dashboard.sidebar.settings",
          active: pathname == "/dashboard/settings",
          icon: UsersRound,
          submenus: [],
        },
      ],
    },
  ];
}
