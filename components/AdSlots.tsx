export default function AdSlots({ position = 'sidebar' }: { position?: 'sidebar' | 'inline' | 'footer' }) {
  const adConfig = {
    sidebar: {
      width: 'w-full',
      height: 'h-[600px]',
      title: 'Financial Tools',
    },
    inline: {
      width: 'w-full',
      height: 'h-[250px]',
      title: 'Sponsored',
    },
    footer: {
      width: 'w-full',
      height: 'h-[90px]',
      title: 'Partner Offers',
    },
  };

  const config = adConfig[position];

  return (
    <div className={`${config.width} ${config.height} bg-slate-800/30 border border-purple-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm`}>
      <div className="text-center text-gray-500">
        <div className="text-xs uppercase tracking-wider mb-2 text-purple-400/60">{config.title}</div>
        <div className="text-sm">Ad Space</div>
        <div className="text-xs mt-1 text-gray-600">Privacy-focused server-side analytics</div>
      </div>
    </div>
  );
}
