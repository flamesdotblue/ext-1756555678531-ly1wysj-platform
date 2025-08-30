import { Shield, Zap, Users } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Secure by default',
    desc: 'Industry-standard encryption and privacy controls keep your data safe.'
  },
  {
    icon: Zap,
    title: 'Fast onboarding',
    desc: 'Create an account in seconds with smooth, modern UX and sensible defaults.'
  },
  {
    icon: Users,
    title: 'Team ready',
    desc: 'Invite teammates, set roles, and collaborate from day one.'
  }
];

export default function Features() {
  return (
    <div id="features" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ icon: Icon, title, desc }) => (
        <div key={title} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 text-white">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
          <p className="mt-1 text-neutral-600">{desc}</p>
        </div>
      ))}
    </div>
  );
}
