import {
  BarChart3,
  Building2,
  CalendarDays,
  MonitorSmartphone,
  Receipt,
  ShieldCheck,
  Smile,
  Stethoscope,
  Users,
} from 'lucide-react'

// Content files refer to icons by name so translations never import components.
const registry = {
  users: Users,
  calendar: CalendarDays,
  receipt: Receipt,
  chart: BarChart3,
  shield: ShieldCheck,
  devices: MonitorSmartphone,
  stethoscope: Stethoscope,
  building: Building2,
  smile: Smile,
}

export function Icon({ name, className = 'h-5 w-5' }) {
  const Component = registry[name] ?? Users
  return <Component className={className} strokeWidth={1.8} aria-hidden="true" />
}

export default Icon
