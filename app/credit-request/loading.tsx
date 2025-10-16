export default function CreditRequestLoading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="h-16 bg-muted animate-pulse rounded" />
        </div>
      </div>
      <div className="container mx-auto px-6 py-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="h-96 bg-muted animate-pulse rounded" />
          <div className="h-96 bg-muted animate-pulse rounded" />
        </div>
      </div>
    </div>
  )
}
