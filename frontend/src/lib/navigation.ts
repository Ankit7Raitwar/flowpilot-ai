
import {
  LayoutDashboard,
  Workflow,
  History,
  Settings,
} from "lucide-react";
// my change
export const dashboardNavigation = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Workflows",
    href: "/dashboard/workflows",
    icon: Workflow,
  },
  {
    label: "Executions",
    href: "/dashboard/executions",
    icon: History,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];
