import { Suspense } from "react"
import { ApprovalPageContent } from "./approval-content"

export default function ApprovalPage() {
  return (
    <Suspense fallback={null}>
      <ApprovalPageContent />
    </Suspense>
  )
}
