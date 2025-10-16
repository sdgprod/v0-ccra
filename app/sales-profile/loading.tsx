export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="h-16 bg-muted animate-pulse rounded" />
        </div>
      </div>
      <div className="container mx-auto px-6 py-6 space-y-6">
        <div className="h-32 bg-muted animate-pulse rounded" />
        <div className="grid grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-32 bg-muted animate-pulse rounded" />
          ))}
        </div>
        <div className="h-96 bg-muted animate-pulse rounded" />
      </div>
    </div>
  )
}
