export default function AdSlot({ position }: { position: 'top' | 'sidebar' | 'inline' }) {
  return (
    <div className={`border border-dashed border-gray-700 rounded-lg p-4 text-center ${
      position === 'sidebar' ? 'w-full max-w-xs' : 'w-full'
    }`}>
      <div className="text-gray-500 text-sm">
        Ad Space - {position.charAt(0).toUpperCase() + position.slice(1)}
      </div>
      <div className="mt-2 text-xs text-gray-600">
        Premium Content • Zero Ads
      </div>
    </div>
  );
}
