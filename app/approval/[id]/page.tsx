"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  MessageSquare,
  Building2,
  DollarSign,
  FileText,
  Send,
  Clock,
  Shield,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const requestData = {
  "CR-2025-001": {
    id: "CR-2025-001",
    customer: "Golden Dragon Trading Pte Ltd",
    country: "Singapore",
    requestedBy: "Bruce Lee",
    requestedDate: "2025-01-10",
    currentLimit: 1500000,
    requestedLimit: 2500000,
    currentPaymentTerms: "NET 30",
    requestedPaymentTerms: "NET 45",
    status: "pending",
    priority: "high",
    tier: "Tier 1",
    justification:
      "Customer has demonstrated excellent payment history over 8 years of business relationship. Recent order volumes have increased significantly, and the current credit limit is insufficient to support their growing business needs.",
    riskRating: "Low",
    creditScore: 217,
    maxCreditScore: 310,
    assessmentScores: {
      sectionA: { score: 15, max: 20, label: "Strategic Importance" },
      sectionB: { score: 140, max: 200, label: "Financial Strength" },
      sectionC: { score: 7, max: 10, label: "Digital Footprint" },
      sectionD: { score: 55, max: 80, label: "Overall Risk" },
    },
    orderHistory: [
      { date: "2024-01-15", orderNo: "PO-2024-001", product: "RBD Palm Olein", value: 11250000, status: "Completed" },
      { date: "2023-11-22", orderNo: "PO-2023-089", product: "Crude Palm Oil", value: 7920000, status: "Completed" },
      { date: "2023-09-08", orderNo: "PO-2023-067", product: "RBD Palm Olein", value: 14400000, status: "Completed" },
    ],
    agingReport: {
      current: 0,
      days31to60: 0,
      days61to90: 0,
      days91to120: 0,
      over120: 0,
      paymentRecord: "Excellent Payment Record",
    },
    avgDaysToPay: 25,
    onTimeRate: 100,
    clarificationHistory: [],
  },
  "CR-2025-002": {
    id: "CR-2025-002",
    customer: "Sunrise Foods Malaysia Sdn Bhd",
    country: "Malaysia",
    requestedBy: "Sarah Chen",
    requestedDate: "2025-01-12",
    currentLimit: 1200000,
    requestedLimit: 1800000,
    currentPaymentTerms: "NET 45",
    requestedPaymentTerms: "NET 45",
    status: "pending",
    priority: "medium",
    tier: "Tier 2",
    justification:
      "Customer has been a reliable partner for 6 years. Recent expansion into new markets requires additional credit support. Payment history shows consistent on-time payments.",
    riskRating: "Medium",
    creditScore: 185,
    maxCreditScore: 310,
    assessmentScores: {
      sectionA: { score: 12, max: 20, label: "Strategic Importance" },
      sectionB: { score: 120, max: 200, label: "Financial Strength" },
      sectionC: { score: 6, max: 10, label: "Digital Footprint" },
      sectionD: { score: 47, max: 80, label: "Overall Risk" },
    },
    orderHistory: [
      { date: "2024-01-20", orderNo: "PO-2024-005", product: "Crude Palm Oil", value: 9680000, status: "Completed" },
      { date: "2023-11-15", orderNo: "PO-2023-078", product: "RBD Palm Olein", value: 6750000, status: "Completed" },
    ],
    agingReport: {
      current: 8480000,
      days31to60: 1200000,
      days61to90: 0,
      days91to120: 0,
      over120: 0,
      paymentRecord: "Good Payment Record",
    },
    avgDaysToPay: 30,
    onTimeRate: 60,
    clarificationHistory: [],
  },
  "CR-2025-003": {
    id: "CR-2025-003",
    customer: "Pacific Oil Industries Ltd",
    country: "Thailand",
    requestedBy: "Michael Wong",
    requestedDate: "2025-01-14",
    currentLimit: 2000000,
    requestedLimit: 3000000,
    currentPaymentTerms: "NET 30",
    requestedPaymentTerms: "NET 30",
    status: "clarification",
    priority: "high",
    tier: "Tier 1",
    justification:
      "Long-standing customer with 10 years relationship. Excellent payment track record. Significant volume increase expected due to new contract with major retailer.",
    riskRating: "Low",
    creditScore: 245,
    maxCreditScore: 310,
    assessmentScores: {
      sectionA: { score: 18, max: 20, label: "Strategic Importance" },
      sectionB: { score: 160, max: 200, label: "Financial Strength" },
      sectionC: { score: 9, max: 10, label: "Digital Footprint" },
      sectionD: { score: 58, max: 80, label: "Overall Risk" },
    },
    orderHistory: [
      { date: "2024-01-25", orderNo: "PO-2024-008", product: "RBD Palm Olein", value: 13500000, status: "Completed" },
      { date: "2023-11-30", orderNo: "PO-2023-092", product: "Crude Palm Oil", value: 11000000, status: "Completed" },
    ],
    agingReport: {
      current: 0,
      days31to60: 0,
      days61to90: 0,
      days91to120: 0,
      over120: 0,
      paymentRecord: "Excellent Payment Record",
    },
    avgDaysToPay: 25,
    onTimeRate: 100,
    clarificationHistory: [
      {
        date: "2025-01-15",
        from: "Finance Director",
        message: "Please provide the contract documentation with the major retailer mentioned in the justification.",
        response: null,
      },
    ],
  },
  "CR-2025-004": {
    id: "CR-2025-004",
    customer: "Metro Commodities Vietnam Co",
    country: "Vietnam",
    requestedBy: "Jennifer Tan",
    requestedDate: "2025-01-15",
    currentLimit: 800000,
    requestedLimit: 1200000,
    currentPaymentTerms: "NET 60",
    requestedPaymentTerms: "NET 60",
    status: "pending",
    priority: "low",
    tier: "Tier 3",
    justification:
      "Customer has shown improvement in payment behavior over the past 6 months. Business volumes are increasing steadily.",
    riskRating: "High",
    creditScore: 145,
    maxCreditScore: 310,
    assessmentScores: {
      sectionA: { score: 8, max: 20, label: "Strategic Importance" },
      sectionB: { score: 90, max: 200, label: "Financial Strength" },
      sectionC: { score: 5, max: 10, label: "Digital Footprint" },
      sectionD: { score: 42, max: 80, label: "Overall Risk" },
    },
    orderHistory: [
      { date: "2024-01-10", orderNo: "PO-2024-003", product: "Crude Palm Oil", value: 7920000, status: "Completed" },
      { date: "2023-11-05", orderNo: "PO-2023-082", product: "RBD Palm Olein", value: 5400000, status: "Completed" },
    ],
    agingReport: {
      current: 6920000,
      days31to60: 850000,
      days61to90: 0,
      days91to120: 0,
      over120: 0,
      paymentRecord: "Fair Payment Record",
    },
    avgDaysToPay: 34,
    onTimeRate: 20,
    clarificationHistory: [],
  },
}

export default function ApprovalDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [decision, setDecision] = useState<"approved" | "rejected" | "clarification" | null>(null)
  const [comments, setComments] = useState("")
  const [clarificationQuestion, setClarificationQuestion] = useState("")
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [activeTab, setActiveTab] = useState("summary")

  const request = requestData[params.id as keyof typeof requestData]

  if (!request) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8">
          <p className="text-lg">Request not found</p>
          <Link href="/approval">
            <Button className="mt-4">Back to Approval Queue</Button>
          </Link>
        </Card>
      </div>
    )
  }

  const handleSubmitDecision = () => {
    // In a real app, this would submit to an API
    console.log("[v0] Decision submitted:", { decision, comments, clarificationQuestion })
    setShowConfirmDialog(false)
    router.push("/approval")
  }

  const getRecommendedTier = (score: number) => {
    if (score >= 120) return { tier: "Tier 1", color: "bg-green-500" }
    if (score >= 75) return { tier: "Tier 2", color: "bg-blue-500" }
    if (score >= 50) return { tier: "Tier 3", color: "bg-yellow-500" }
    return { tier: "Tier 4", color: "bg-red-500" }
  }

  const recommendedTier = getRecommendedTier(request.creditScore)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/approval">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Queue
              </Button>
            </Link>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold">Credit Upgrade Request - {request.id}</h1>
                <Badge
                  className={
                    request.status === "pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : request.status === "clarification"
                        ? "bg-orange-100 text-orange-700"
                        : ""
                  }
                >
                  {request.status === "pending" ? "Pending Review" : "Requires Clarification"}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Submitted by {request.requestedBy} on {request.requestedDate}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Request Summary Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Request Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-muted-foreground">Customer</Label>
                      <p className="font-medium text-lg">{request.customer}</p>
                      <p className="text-sm text-muted-foreground">{request.country}</p>
                    </div>
                    <div>
                      <Label className="text-muted-foreground">Requested By</Label>
                      <p className="font-medium">{request.requestedBy}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-muted-foreground">Current Limit</Label>
                        <p className="font-medium">MYR {request.currentLimit.toLocaleString()}</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground">Requested Limit</Label>
                        <p className="font-medium text-blue-600 text-lg">
                          MYR {request.requestedLimit.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-muted-foreground">Current Payment Terms</Label>
                        <p className="font-medium">{request.currentPaymentTerms}</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground">Requested Payment Terms</Label>
                        <p className="font-medium">{request.requestedPaymentTerms}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <Label className="text-muted-foreground">Justification for Upgrade</Label>
                  <p className="mt-2 text-sm bg-muted/50 p-4 rounded-lg">{request.justification}</p>
                </div>
              </CardContent>
            </Card>

            {/* Credit Assessment Matrix */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Credit Assessment Matrix
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Score Summary */}
                <div className="grid grid-cols-5 gap-4 mb-6">
                  <div className="border rounded-lg p-3 text-center bg-blue-50">
                    <p className="text-xs text-muted-foreground mb-1">
                      Section A: {request.assessmentScores.sectionA.label}
                    </p>
                    <p className="text-xl font-bold text-blue-600">{request.assessmentScores.sectionA.score}</p>
                    <p className="text-xs text-muted-foreground">/ {request.assessmentScores.sectionA.max}</p>
                  </div>
                  <div className="border rounded-lg p-3 text-center bg-green-50">
                    <p className="text-xs text-muted-foreground mb-1">
                      Section B: {request.assessmentScores.sectionB.label}
                    </p>
                    <p className="text-xl font-bold text-green-600">{request.assessmentScores.sectionB.score}</p>
                    <p className="text-xs text-muted-foreground">/ {request.assessmentScores.sectionB.max}</p>
                  </div>
                  <div className="border rounded-lg p-3 text-center bg-purple-50">
                    <p className="text-xs text-muted-foreground mb-1">
                      Section C: {request.assessmentScores.sectionC.label}
                    </p>
                    <p className="text-xl font-bold text-purple-600">{request.assessmentScores.sectionC.score}</p>
                    <p className="text-xs text-muted-foreground">/ {request.assessmentScores.sectionC.max}</p>
                  </div>
                  <div className="border rounded-lg p-3 text-center bg-orange-50">
                    <p className="text-xs text-muted-foreground mb-1">
                      Section D: {request.assessmentScores.sectionD.label}
                    </p>
                    <p className="text-xl font-bold text-orange-600">{request.assessmentScores.sectionD.score}</p>
                    <p className="text-xs text-muted-foreground">/ {request.assessmentScores.sectionD.max}</p>
                  </div>
                  <div className={`border rounded-lg p-3 text-center ${recommendedTier.color} text-white`}>
                    <p className="text-xs mb-1">Total Score</p>
                    <p className="text-xl font-bold">{request.creditScore}</p>
                    <p className="text-xs">/ {request.maxCreditScore}</p>
                  </div>
                </div>

                {/* Recommended Tier */}
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { tier: "Tier 1", score: "≥120", desc: "1-5% unsecured, up to 10% secured", color: "bg-green-500" },
                    { tier: "Tier 2", score: "≥75", desc: "1-5% unsecured, up to 10% secured", color: "bg-blue-500" },
                    {
                      tier: "Tier 3",
                      score: "50-74",
                      desc: "1-3% unsecured, up to 5% secured",
                      color: "bg-yellow-500",
                    },
                    { tier: "Tier 4", score: "<50", desc: "10% of net or 0% until track record", color: "bg-red-500" },
                  ].map((t) => (
                    <div
                      key={t.tier}
                      className={`rounded-lg p-3 border-2 ${recommendedTier.tier === t.tier ? `border-${t.color.replace("bg-", "")} ${t.color} text-white` : "border-gray-200"}`}
                    >
                      <p className="font-bold">{t.tier}</p>
                      <p className="text-sm">Score: {t.score}</p>
                      <p className="text-xs mt-1">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Payment History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Payment Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">{request.avgDaysToPay}</p>
                    <p className="text-sm text-muted-foreground">Avg. Days to Pay</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">{request.onTimeRate}%</p>
                    <p className="text-sm text-muted-foreground">On-Time Rate</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Badge
                      className={
                        request.agingReport.paymentRecord.includes("Excellent")
                          ? "bg-green-100 text-green-700"
                          : request.agingReport.paymentRecord.includes("Good")
                            ? "bg-blue-100 text-blue-700"
                            : "bg-yellow-100 text-yellow-700"
                      }
                    >
                      {request.agingReport.paymentRecord}
                    </Badge>
                  </div>
                </div>

                {/* Aging Report */}
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Current</TableHead>
                      <TableHead>31-60 Days</TableHead>
                      <TableHead>61-90 Days</TableHead>
                      <TableHead>91-120 Days</TableHead>
                      <TableHead>Over 120 Days</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>MYR {request.agingReport.current.toLocaleString()}</TableCell>
                      <TableCell>MYR {request.agingReport.days31to60.toLocaleString()}</TableCell>
                      <TableCell>MYR {request.agingReport.days61to90.toLocaleString()}</TableCell>
                      <TableCell>MYR {request.agingReport.days91to120.toLocaleString()}</TableCell>
                      <TableCell>MYR {request.agingReport.over120.toLocaleString()}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Order History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Recent Order History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Order No</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead className="text-right">Value (MYR)</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {request.orderHistory.map((order, idx) => (
                      <TableRow key={idx}>
                        <TableCell>{order.date}</TableCell>
                        <TableCell className="font-medium">{order.orderNo}</TableCell>
                        <TableCell>{order.product}</TableCell>
                        <TableCell className="text-right">{order.value.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-700">{order.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Order Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Order Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Product Information */}
                <div>
                  <h4 className="font-semibold mb-4">Product Information</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label className="text-muted-foreground text-sm">Trading Currency</Label>
                      <p className="font-medium">MYR - Malaysian Ringgit</p>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-muted-foreground text-sm">Select Refinery</Label>
                      <p className="font-medium">Pasir Gudang Refinery</p>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-muted-foreground text-sm">Product Name</Label>
                      <p className="font-medium">RBD Palm Olein - IV64</p>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-muted-foreground text-sm">Product Packing</Label>
                      <p className="font-medium">Flexibag (20MT)</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1">
                    <Label className="text-muted-foreground text-sm">Product Requirement</Label>
                    <p className="text-sm bg-muted/50 p-3 rounded-lg">
                      Product must comply with RSPO certification standards. Quality parameters: FFA max 0.1%, M&I max
                      0.1%, IV 56-64.
                    </p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-4">Shipping Information</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <Label className="text-muted-foreground text-sm">Destination Country</Label>
                      <p className="font-medium">{request.country}</p>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-muted-foreground text-sm">Supplier Country</Label>
                      <p className="font-medium">Malaysia</p>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-muted-foreground text-sm">Loading Port</Label>
                      <p className="font-medium">Port Klang, Malaysia</p>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-muted-foreground text-sm">Destination Port</Label>
                      <p className="font-medium">
                        {request.country === "Singapore"
                          ? "Singapore Port"
                          : request.country === "Thailand"
                            ? "Laem Chabang Port"
                            : request.country === "Vietnam"
                              ? "Ho Chi Minh Port"
                              : "Port of Destination"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-4">Product Costing</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <Label className="text-muted-foreground text-sm">Estimated Volume</Label>
                      <p className="font-medium">500 MT</p>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-muted-foreground text-sm">Unit Price (per MT)</Label>
                      <p className="font-medium">MYR 4,200</p>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-muted-foreground text-sm">Total Estimated Value</Label>
                      <p className="font-medium text-blue-600">MYR 2,100,000</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sanction & KYC Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Sanction & KYC Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-8">
                  {/* Sanctions Screening */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg">Sanctions Screening</h4>
                      <p className="text-sm text-muted-foreground">
                        Automated sanctions and watchlist screening results
                      </p>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div>
                          <p className="font-semibold text-green-700">Clear</p>
                          <p className="text-sm text-green-600">No sanctions matches found</p>
                        </div>
                      </div>
                      <Badge className="bg-green-500 text-white">Verified</Badge>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Last Screening:</span>
                        <span className="font-medium">2024-11-28</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Screening Provider:</span>
                        <span className="font-medium">World-Check</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Risk Level:</span>
                        <Badge variant="outline" className="text-blue-600 border-blue-600">
                          Low
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Next Review:</span>
                        <span className="font-medium">2024-12-28</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h5 className="font-semibold mb-3">Screening Coverage</h5>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span>OFAC SDN List</span>
                          <span className="flex items-center gap-1 text-green-600">
                            <CheckCircle className="h-4 w-4" /> Clear
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>EU Sanctions</span>
                          <span className="flex items-center gap-1 text-green-600">
                            <CheckCircle className="h-4 w-4" /> Clear
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>UN Sanctions</span>
                          <span className="flex items-center gap-1 text-green-600">
                            <CheckCircle className="h-4 w-4" /> Clear
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* KYC Documentation */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg">KYC Documentation</h4>
                      <p className="text-sm text-muted-foreground">Know Your Customer compliance status</p>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div>
                          <p className="font-semibold text-green-700">Complete</p>
                          <p className="text-sm text-green-600">All required documents verified</p>
                        </div>
                      </div>
                      <Badge className="bg-green-500 text-white">Approved</Badge>
                    </div>

                    <div className="pt-2">
                      <h5 className="font-semibold mb-3">Required Documents</h5>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span>Certificate of Incorporation</span>
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            <CheckCircle className="h-3 w-3 mr-1" /> Verified
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Business License</span>
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            <CheckCircle className="h-3 w-3 mr-1" /> Verified
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Financial Statements</span>
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            <CheckCircle className="h-3 w-3 mr-1" /> Verified
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Beneficial Ownership</span>
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            <CheckCircle className="h-3 w-3 mr-1" /> Verified
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Director Identification</span>
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            <CheckCircle className="h-3 w-3 mr-1" /> Verified
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">KYC Status:</span>
                        <Badge className="bg-green-500 text-white">Approved</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Approval Date:</span>
                        <span className="font-medium">2024-01-15</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Clarification History - if exists */}
            {request.clarificationHistory.length > 0 && (
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-700">
                    <MessageSquare className="h-5 w-5" />
                    Clarification History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {request.clarificationHistory.map((item, idx) => (
                      <div key={idx} className="border rounded-lg p-4 bg-orange-50">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{item.from}</Badge>
                          <span className="text-sm text-muted-foreground">{item.date}</span>
                        </div>
                        <p className="text-sm font-medium mb-2">Question:</p>
                        <p className="text-sm bg-white p-3 rounded">{item.message}</p>
                        {item.response ? (
                          <>
                            <p className="text-sm font-medium mt-3 mb-2">Response:</p>
                            <p className="text-sm bg-white p-3 rounded">{item.response}</p>
                          </>
                        ) : (
                          <p className="text-sm text-orange-600 mt-2 italic">Awaiting response from requester...</p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column - Decision Panel */}
          <div className="space-y-6">
            {/* Risk Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Risk Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Risk Rating</span>
                    <Badge
                      className={
                        request.riskRating === "Low"
                          ? "bg-green-100 text-green-700"
                          : request.riskRating === "Medium"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                      }
                    >
                      {request.riskRating}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Credit Score</span>
                    <span className="font-bold">
                      {request.creditScore} / {request.maxCreditScore}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Recommended Tier</span>
                    <Badge className={`${recommendedTier.color} text-white`}>{recommendedTier.tier}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Priority</span>
                    <Badge
                      variant={
                        request.priority === "high"
                          ? "destructive"
                          : request.priority === "medium"
                            ? "default"
                            : "secondary"
                      }
                    >
                      {request.priority.charAt(0).toUpperCase() + request.priority.slice(1)}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Decision Panel */}
            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle>Make Decision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  <Button
                    variant={decision === "approved" ? "default" : "outline"}
                    className={`w-full justify-start ${decision === "approved" ? "bg-green-600 hover:bg-green-700" : ""}`}
                    onClick={() => setDecision("approved")}
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Approve Request
                  </Button>
                  <Button
                    variant={decision === "rejected" ? "default" : "outline"}
                    className={`w-full justify-start ${decision === "rejected" ? "bg-red-600 hover:bg-red-700" : ""}`}
                    onClick={() => setDecision("rejected")}
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Reject Request
                  </Button>
                  <Button
                    variant={decision === "clarification" ? "default" : "outline"}
                    className={`w-full justify-start ${decision === "clarification" ? "bg-orange-600 hover:bg-orange-700" : ""}`}
                    onClick={() => setDecision("clarification")}
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Request Clarification
                  </Button>
                </div>

                {decision && (
                  <div className="space-y-4 pt-4 border-t">
                    {decision === "clarification" ? (
                      <div>
                        <Label>Clarification Question</Label>
                        <Textarea
                          placeholder="Enter your question for the requester..."
                          value={clarificationQuestion}
                          onChange={(e) => setClarificationQuestion(e.target.value)}
                          className="mt-2"
                          rows={4}
                        />
                      </div>
                    ) : (
                      <div>
                        <Label>Comments {decision === "rejected" && <span className="text-red-500">*</span>}</Label>
                        <Textarea
                          placeholder={
                            decision === "approved"
                              ? "Optional comments for approval..."
                              : "Please provide reason for rejection (required)..."
                          }
                          value={comments}
                          onChange={(e) => setComments(e.target.value)}
                          className="mt-2"
                          rows={4}
                        />
                      </div>
                    )}

                    <Button
                      className="w-full"
                      onClick={() => setShowConfirmDialog(true)}
                      disabled={decision === "rejected" && !comments}
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Submit Decision
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Audit Trail */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Audit Trail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                    <div>
                      <p className="text-sm font-medium">Request Submitted</p>
                      <p className="text-xs text-muted-foreground">
                        {request.requestedDate} by {request.requestedBy}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2" />
                    <div>
                      <p className="text-sm font-medium">Routed for Approval</p>
                      <p className="text-xs text-muted-foreground">
                        {request.requestedDate} - Auto-routed based on LOA
                      </p>
                    </div>
                  </div>
                  {request.status === "clarification" && (
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                      <div>
                        <p className="text-sm font-medium">Clarification Requested</p>
                        <p className="text-xs text-muted-foreground">2025-01-15 by Finance Director</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Confirm{" "}
              {decision === "approved" ? "Approval" : decision === "rejected" ? "Rejection" : "Clarification Request"}
            </DialogTitle>
            <DialogDescription>
              {decision === "approved" &&
                `You are about to approve credit upgrade request ${request.id} for ${request.customer}. The new credit limit will be MYR ${request.requestedLimit.toLocaleString()}.`}
              {decision === "rejected" &&
                `You are about to reject credit upgrade request ${request.id}. This action will be logged and the requester will be notified.`}
              {decision === "clarification" &&
                `You are requesting clarification for ${request.id}. The requester will be notified and must respond before the request can be processed.`}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleSubmitDecision}
              className={
                decision === "approved"
                  ? "bg-green-600 hover:bg-green-700"
                  : decision === "rejected"
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-orange-600 hover:bg-orange-700"
              }
            >
              Confirm{" "}
              {decision === "approved" ? "Approval" : decision === "rejected" ? "Rejection" : "Clarification Request"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
