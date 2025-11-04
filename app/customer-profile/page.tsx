"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  CreditCard,
  Package,
  TrendingUp,
  User,
  MapPin,
  Mail,
  Phone,
  FileText,
  CheckCircle2,
  Clock,
  BarChart3,
  Check,
  DollarSign,
  FileCheck,
  CheckSquare,
  Activity,
} from "lucide-react"

export default function CustomerProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [overviewSubTab, setOverviewSubTab] = useState<"assessment" | "sanction" | "transactions" | "dunn" | "bureau">(
    "assessment",
  )

  const [assessmentData, setAssessmentData] = useState({
    customerName: "Global Foods Ltd",
    evaluationDate: "2025-10-27",
    currentCreditLimit: "2500000",
    paymentTerms: "NET 30",
    strategicImportance: "High",
    strategicImportanceScore: 15,
    sectionATotal: 15,
    independentRating: "Low",
    independentRatingScore: 85,
    externalRating: "Moderate",
    externalRatingScore: 55,
    sectionBTotal: 140,
    digitalFootprint: "Very Good",
    digitalFootprintScore: 7,
    sectionCTotal: 7,
    businessEntity: "Public Ltd",
    businessEntityScore: 12,
    businessHistory: ">10",
    businessHistoryScore: 10,
    yearsInOperation: ">10",
    yearsInOperationScore: 8,
    countryRisk: "Low",
    countryRiskScore: 15,
    paymentBehaviour: "Usually",
    paymentBehaviourScore: 10,
    sanctionCheck: "No",
    sanctionCheckScore: 0,
    esgViolation: "No",
    esgViolationScore: 0,
    sectionDTotal: 55,
    reviewerName: "Bruce Lee",
    reviewDate: "2025-10-27",
    assessmentNotes:
      "Customer demonstrates strong financial performance with consistent payment history. The company has maintained excellent credit standing over the past 8 years of business relationship. Financial ratios indicate healthy liquidity and manageable debt levels. Recommended for credit upgrade based on solid fundamentals and growth trajectory.",
  })

  const transactionData = {
    orderHistory: [
      {
        date: "15/11/2024",
        orderNo: "ORD-2024-156",
        product: "Palm Oil RBD",
        quantity: 500,
        value: 600000,
        status: "Delivered",
      },
      {
        date: "28/10/2024",
        orderNo: "ORD-2024-142",
        product: "Soybean Oil",
        quantity: 750,
        value: 712500,
        status: "Delivered",
      },
      {
        date: "12/10/2024",
        orderNo: "ORD-2024-128",
        product: "Palm Oil RBD",
        quantity: 300,
        value: 420000,
        status: "Delivered",
      },
      {
        date: "25/09/2024",
        orderNo: "ORD-2024-115",
        product: "Sunflower Oil",
        quantity: 600,
        value: 576000,
        status: "Delivered",
      },
      {
        date: "08/09/2024",
        orderNo: "ORD-2024-098",
        product: "Palm Oil RBD",
        quantity: 400,
        value: 500000,
        status: "Delivered",
      },
    ],
    agingReport: {
      current: 0,
      days31to60: 0,
      days61to90: 0,
      days91to120: 0,
      over120: 0,
      paymentRecord: "Excellent Payment Record",
      message: "Customer consistently pays within terms. No overdue amounts in the past 12 months.",
    },
    paymentHistory: [
      {
        date: "20/11/2024",
        invoiceNo: "INV-2024-156",
        amount: 600000,
        method: "Bank Transfer",
        daysToPay: 28,
        status: "On Time",
      },
      {
        date: "05/11/2024",
        invoiceNo: "INV-2024-142",
        amount: 712500,
        method: "Bank Transfer",
        daysToPay: 27,
        status: "On Time",
      },
      {
        date: "18/10/2024",
        invoiceNo: "INV-2024-128",
        amount: 420000,
        method: "Bank Transfer",
        daysToPay: 29,
        status: "On Time",
      },
      {
        date: "30/09/2024",
        invoiceNo: "INV-2024-115",
        amount: 576000,
        method: "Bank Transfer",
        daysToPay: 26,
        status: "On Time",
      },
      {
        date: "15/09/2024",
        invoiceNo: "INV-2024-098",
        amount: 500000,
        method: "Bank Transfer",
        daysToPay: 30,
        status: "On Time",
      },
      {
        date: "28/08/2024",
        invoiceNo: "INV-2024-082",
        amount: 450000,
        method: "Bank Transfer",
        daysToPay: 28,
        status: "On Time",
      },
      {
        date: "12/08/2024",
        invoiceNo: "INV-2024-068",
        amount: 380000,
        method: "Bank Transfer",
        daysToPay: 29,
        status: "On Time",
      },
      {
        date: "25/07/2024",
        invoiceNo: "INV-2024-055",
        amount: 520000,
        method: "Bank Transfer",
        daysToPay: 27,
        status: "On Time",
      },
      {
        date: "08/07/2024",
        invoiceNo: "INV-2024-042",
        amount: 610000,
        method: "Bank Transfer",
        daysToPay: 30,
        status: "On Time",
      },
      {
        date: "20/06/2024",
        invoiceNo: "INV-2024-028",
        amount: 490000,
        method: "Bank Transfer",
        daysToPay: 28,
        status: "On Time",
      },
    ],
    avgDaysToPay: 28,
    onTimeRate: 100,
    totalPaid: 5758500,
    preferredMethod: "Bank Transfer",
  }

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "credit-details", label: "Credit Details" },
    { id: "recent-activity", label: "Recent Activity" },
  ]

  return (
    <div className="p-6 space-y-6">
      <Card className="p-4 bg-gray-50">
        <div className="grid grid-cols-5 gap-6">
          <div>
            <div className="text-xs text-muted-foreground mb-1">Customer</div>
            <div className="font-semibold">Global Foods Ltd</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">Country</div>
            <div className="font-semibold">Malaysia</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">Type</div>
            <div className="font-semibold">MNC</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">Tier</div>
            <div className="font-semibold">1</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">Sales PIC</div>
            <div className="font-semibold">Ahmad Rahman</div>
          </div>
        </div>
      </Card>

      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="text-sm text-muted-foreground">Credit Utilization</div>
            <CreditCard className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="text-3xl font-bold mb-2">74.0%</div>
          <Progress value={74} className="h-2 mb-2" />
          <div className="text-xs text-muted-foreground">MYR 1,850,000 of MYR 2,500,000</div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="text-sm text-muted-foreground">Total Order Value</div>
            <Package className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="text-3xl font-bold mb-2">RM 2,808,500</div>
          <div className="text-xs text-muted-foreground">Last 6 months</div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="text-sm text-muted-foreground">Average Order</div>
            <TrendingUp className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="text-3xl font-bold mb-2">RM 561,700</div>
          <div className="text-xs text-muted-foreground">Per order</div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="text-sm text-muted-foreground">Risk Rating</div>
            <User className="h-5 w-5 text-muted-foreground" />
          </div>
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Medium</Badge>
          <div className="text-xs text-muted-foreground">Based on payment history</div>
        </Card>
      </div>

      {/* Credit Increase Recommendation */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            <div>
              <h2 className="text-lg font-semibold">Credit Increase Recommendation</h2>
              <p className="text-xs text-muted-foreground">AI-powered credit limit analysis</p>
            </div>
          </div>
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">High Confidence</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-6 bg-green-50 border-green-200">
            <div className="text-sm text-muted-foreground mb-2">Recommended Increase</div>
            <div className="text-3xl font-bold text-green-600 mb-1">MYR 1,300,000</div>
            <div className="text-xs text-muted-foreground">50% of current limit</div>
          </Card>

          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-2">New Credit Limit</div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg font-semibold text-muted-foreground">MYR 2,500,000</span>
              <span className="text-muted-foreground">→</span>
            </div>
            <div className="text-2xl font-bold text-green-600">MYR 3,800,000</div>
          </Card>

          <Card className="p-6 bg-purple-50 border-purple-200">
            <div className="text-sm text-muted-foreground mb-2">Overall Score</div>
            <div className="text-3xl font-bold text-purple-600 mb-1">91/100</div>
            <div className="text-xs text-muted-foreground">Excellent rating</div>
          </Card>

          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-3">Key Positive Factors</div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-medium">Payment History:</span>
                  <span className="text-muted-foreground ml-1">Perfect</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-medium">Utilization:</span>
                  <span className="text-muted-foreground ml-1">74%</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-medium">Order Growth:</span>
                  <span className="text-muted-foreground ml-1">61%</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-0.5">
            <Check className="h-4 w-4 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-base mb-1">RECOMMEND APPROVAL</h3>
            <p className="text-sm text-muted-foreground">
              Based on the credit assessment, Global Foods Ltd demonstrates strong financial position with excellent
              payment history.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>Last updated: 07/10/2025</span>
          <span className="underline cursor-pointer">Algorithm v1.0</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b">
        <div className="flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Information</CardTitle>
              <p className="text-sm text-muted-foreground">Basic customer details and contact information</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <Label className="text-muted-foreground text-sm">Company Name</Label>
                      <p className="font-semibold">Global Foods Ltd</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <Label className="text-muted-foreground text-sm">Email</Label>
                      <p className="font-medium">procurement@globalfoods.my</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <Label className="text-muted-foreground text-sm">Location</Label>
                      <p className="font-medium">Kuala Lumpur, Malaysia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <Label className="text-muted-foreground text-sm">Phone</Label>
                      <p className="font-medium">+60-3-2161-8888</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <Label className="text-muted-foreground text-sm">Account Manager</Label>
                      <p className="font-medium">Sarah Chen</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <Label className="text-muted-foreground text-sm">Payment Terms</Label>
                      <p className="font-medium">NET 30</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                <p className="text-sm font-medium text-blue-900">
                  Explore detailed customer information across different sections
                </p>
              </div>
              <div className="flex items-center gap-1 border-b bg-white rounded-t-lg">
                <button
                  onClick={() => setOverviewSubTab("assessment")}
                  className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    overviewSubTab === "assessment"
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Assessment
                </button>
                <button
                  onClick={() => setOverviewSubTab("sanction")}
                  className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    overviewSubTab === "sanction"
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Sanction & KYC
                </button>
                <button
                  onClick={() => setOverviewSubTab("transactions")}
                  className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    overviewSubTab === "transactions"
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Transaction History
                </button>
                <button
                  onClick={() => setOverviewSubTab("dunn")}
                  className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    overviewSubTab === "dunn"
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Dunn and Bradstreet
                </button>
                <button
                  onClick={() => setOverviewSubTab("bureau")}
                  className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    overviewSubTab === "bureau"
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Credit Bureau
                </button>
              </div>
            </CardContent>
          </Card>

          {overviewSubTab === "assessment" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold">Credit Assessment Matrix</h2>
                <p className="text-muted-foreground mt-1">
                  Comprehensive credit evaluation based on multiple risk factors
                </p>
              </div>

              {/* Header Information */}
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-4 gap-6">
                    <div className="space-y-2">
                      <Label>Customer Name</Label>
                      <Input value={assessmentData.customerName} readOnly className="bg-muted" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="evaluationDate">Evaluation Date</Label>
                      <Input
                        id="evaluationDate"
                        type="date"
                        value={assessmentData.evaluationDate}
                        onChange={(e) => setAssessmentData({ ...assessmentData, evaluationDate: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Current Credit Limit</Label>
                      <Input value={assessmentData.currentCreditLimit} readOnly className="bg-muted" />
                    </div>
                    <div className="space-y-2">
                      <Label>Payment Terms</Label>
                      <Input value={assessmentData.paymentTerms} readOnly className="bg-muted" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Credit Assessment Summary */}
              <Card className="border-2 border-blue-500">
                <CardHeader className="bg-blue-50">
                  <CardTitle>Credit Assessment Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-5 gap-4 mb-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="text-sm text-muted-foreground mb-1">Section A: Strategic Importance</div>
                      <div className="text-2xl font-bold text-blue-600">{assessmentData.sectionATotal}</div>
                      <div className="text-xs text-muted-foreground">/ 20</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="text-sm text-muted-foreground mb-1">Section B: Financial Strength</div>
                      <div className="text-2xl font-bold text-green-600">{assessmentData.sectionBTotal}</div>
                      <div className="text-xs text-muted-foreground">/ 200</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="text-sm text-muted-foreground mb-1">Section C: Digital Footprint</div>
                      <div className="text-2xl font-bold text-purple-600">{assessmentData.sectionCTotal}</div>
                      <div className="text-xs text-muted-foreground">/ 10</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <div className="text-sm text-muted-foreground mb-1">Section D: Overall Risk</div>
                      <div className="text-2xl font-bold text-orange-600">{assessmentData.sectionDTotal}</div>
                      <div className="text-xs text-muted-foreground">/ 80</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white">
                      <div className="text-sm mb-1">Total Score</div>
                      <div className="text-3xl font-bold">
                        {assessmentData.sectionATotal +
                          assessmentData.sectionBTotal +
                          assessmentData.sectionCTotal +
                          assessmentData.sectionDTotal}
                      </div>
                      <div className="text-xs">/ 310</div>
                    </div>
                  </div>

                  {/* Credit Matrix Tiers */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">Credit Matrix - Recommended Tier</h3>
                    <div className="grid grid-cols-4 gap-3">
                      <div
                        className={`p-4 rounded-lg border-2 ${
                          assessmentData.sectionATotal +
                            assessmentData.sectionBTotal +
                            assessmentData.sectionCTotal +
                            assessmentData.sectionDTotal >=
                          120
                            ? "border-green-500 bg-green-50"
                            : "border-gray-200 bg-gray-50"
                        }`}
                      >
                        <div className="font-bold text-lg mb-2">Tier 1</div>
                        <div className="text-sm space-y-1">
                          <div className="font-semibold">Score: ≥120</div>
                          <div className="text-xs text-muted-foreground">1-5% unsecured, up to 10% secured</div>
                          <div className="text-xs text-muted-foreground">5-10% of gross profit</div>
                          <div className="text-xs text-muted-foreground">5-15% of net worth</div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg border-2 border-gray-200 bg-gray-50">
                        <div className="font-bold text-lg mb-2">Tier 2</div>
                        <div className="text-sm space-y-1">
                          <div className="font-semibold">Score: ≥75</div>
                          <div className="text-xs text-muted-foreground">1-5% unsecured, up to 10% secured</div>
                          <div className="text-xs text-muted-foreground">5-10% of gross profit</div>
                          <div className="text-xs text-muted-foreground">5-15% of net worth</div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg border-2 border-gray-200 bg-gray-50">
                        <div className="font-bold text-lg mb-2">Tier 3</div>
                        <div className="text-sm space-y-1">
                          <div className="font-semibold">Score: 50-74</div>
                          <div className="text-xs text-muted-foreground">1-3% unsecured, up to 5% secured</div>
                          <div className="text-xs text-muted-foreground">3-5% of gross profit</div>
                          <div className="text-xs text-muted-foreground">5-10% of net worth</div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg border-2 border-gray-200 bg-gray-50">
                        <div className="font-bold text-lg mb-2">Tier 4</div>
                        <div className="text-sm space-y-1">
                          <div className="font-semibold">Score: &lt;50</div>
                          <div className="text-xs text-muted-foreground">10% of net or 0% until track record</div>
                          <div className="text-xs text-muted-foreground">3-5% of gross profit</div>
                          <div className="text-xs text-muted-foreground">Advance ≥15 days with collateral</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section A: Strategic Importance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Section A: Strategic Importance</span>
                    <span className="text-sm font-normal text-muted-foreground">Weight: 20%</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="space-y-2 col-span-2">
                      <Label htmlFor="strategicImportance">1. Strategic Importance</Label>
                      <div className="flex h-10 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm items-center">
                        High (20 points)
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Score Achieved</Label>
                      <Input
                        value={assessmentData.strategicImportanceScore}
                        readOnly
                        className="bg-muted text-lg font-semibold"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="font-semibold">Section A Total</span>
                    <span className="text-2xl font-bold text-blue-600">{assessmentData.sectionATotal} / 20</span>
                  </div>
                </CardContent>
              </Card>

              {/* Section B: Financial Strength */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Section B: Financial Strength</span>
                    <span className="text-sm font-normal text-muted-foreground">Weight: 30%</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="space-y-2 col-span-2">
                      <Label htmlFor="independentRating">1. Independent Rating (IR)</Label>
                      <div className="flex h-10 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm items-center">
                        Low - AAA/AA/AA (100 points)
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Score Achieved</Label>
                      <Input
                        value={assessmentData.independentRatingScore}
                        readOnly
                        className="bg-muted text-lg font-semibold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="space-y-2 col-span-2">
                      <Label htmlFor="externalRating">2. External Ratings</Label>
                      <div className="flex h-10 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm items-center">
                        Moderate - BBB/BB/BB (80 points)
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Score Achieved</Label>
                      <Input
                        value={assessmentData.externalRatingScore}
                        readOnly
                        className="bg-muted text-lg font-semibold"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="font-semibold">Section B Total</span>
                    <span className="text-2xl font-bold text-blue-600">{assessmentData.sectionBTotal} / 200</span>
                  </div>
                </CardContent>
              </Card>

              {/* Section C: Digital Footprint */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Section C: Digital Footprint</span>
                    <span className="text-sm font-normal text-muted-foreground">Weight: 10%</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="space-y-2 col-span-2">
                      <Label htmlFor="digitalFootprint">3. Digital Footprint & Certification</Label>
                      <div className="flex h-10 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm items-center">
                        Very Good (10 points)
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Score Achieved</Label>
                      <Input
                        value={assessmentData.digitalFootprintScore}
                        readOnly
                        className="bg-muted text-lg font-semibold"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="font-semibold">Section C Total</span>
                    <span className="text-2xl font-bold text-blue-600">{assessmentData.sectionCTotal} / 10</span>
                  </div>
                </CardContent>
              </Card>

              {/* Section D: Overall Risk */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Section D: Overall Risk</span>
                    <span className="text-sm font-normal text-muted-foreground">Weight: 40%</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* 1. Type of Business Entity */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="space-y-2 col-span-2">
                      <Label htmlFor="businessEntity">1. Type of Business Entity</Label>
                      <div className="flex h-10 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm items-center">
                        Public Ltd (10 points)
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Score</Label>
                      <Input
                        value={assessmentData.businessEntityScore}
                        readOnly
                        className="bg-muted text-lg font-semibold"
                      />
                    </div>
                  </div>

                  {/* 2. Business History with SDPB */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="space-y-2 col-span-2">
                      <Label htmlFor="businessHistory">2. Business History (years) with SDPB</Label>
                      <div className="flex h-10 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm items-center">
                        &gt;10 years (10 points)
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Score</Label>
                      <Input
                        value={assessmentData.businessHistoryScore}
                        readOnly
                        className="bg-muted text-lg font-semibold"
                      />
                    </div>
                  </div>

                  {/* 3. Years in Operation */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="space-y-2 col-span-2">
                      <Label htmlFor="yearsInOperation">3. Years in Operation</Label>
                      <div className="flex h-10 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm items-center">
                        &gt;10 years (10 points)
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Score</Label>
                      <Input
                        value={assessmentData.yearsInOperationScore}
                        readOnly
                        className="bg-muted text-lg font-semibold"
                      />
                    </div>
                  </div>

                  {/* 4. Country Risk */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="space-y-2 col-span-2">
                      <Label htmlFor="countryRisk">4. Country Risk</Label>
                      <div className="flex h-10 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm items-center">
                        Low (10 points)
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Score</Label>
                      <Input
                        value={assessmentData.countryRiskScore}
                        readOnly
                        className="bg-muted text-lg font-semibold"
                      />
                    </div>
                  </div>

                  {/* 5. Payment Behaviour Trend */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="space-y-2 col-span-2">
                      <Label htmlFor="paymentBehaviour">5. Payment Behaviour Trend</Label>
                      <div className="flex h-10 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm items-center">
                        Usually (75% - 89%) - 25 points
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Score</Label>
                      <Input
                        value={assessmentData.paymentBehaviourScore}
                        readOnly
                        className="bg-muted text-lg font-semibold"
                      />
                    </div>
                  </div>

                  {/* 6. Sanction Check */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="space-y-2 col-span-2">
                      <Label htmlFor="sanctionCheck">6. Sanction Check</Label>
                      <div className="flex h-10 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm items-center">
                        No (5 points)
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Score</Label>
                      <Input
                        value={assessmentData.sanctionCheckScore}
                        readOnly
                        className="bg-muted text-lg font-semibold"
                      />
                    </div>
                  </div>

                  {/* 7. ESG Violation */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="space-y-2 col-span-2">
                      <Label htmlFor="esgViolation">7. ESG Violation</Label>
                      <div className="flex h-10 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm items-center">
                        No (0 points)
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Score</Label>
                      <Input
                        value={assessmentData.esgViolationScore}
                        readOnly
                        className="bg-muted text-lg font-semibold"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="font-semibold">Section D Total</span>
                    <span className="text-2xl font-bold text-blue-600">{assessmentData.sectionDTotal} / 80</span>
                  </div>
                </CardContent>
              </Card>

              {/* Finance Review Section */}
              <Card>
                <CardHeader>
                  <CardTitle>Finance Review</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="reviewerName">Reviewed By (Name)</Label>
                      <Input id="reviewerName" value={assessmentData.reviewerName} readOnly className="bg-muted" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reviewDate">Review Date</Label>
                      <Input
                        id="reviewDate"
                        type="date"
                        value={assessmentData.reviewDate}
                        readOnly
                        className="bg-muted"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="assessmentNotes">Additional Notes</Label>
                    <Textarea
                      id="assessmentNotes"
                      rows={4}
                      value={assessmentData.assessmentNotes}
                      onChange={(e) => setAssessmentData({ ...assessmentData, assessmentNotes: e.target.value })}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {overviewSubTab === "sanction" && (
            <div className="space-y-8">
              {/* Two Column Layout for Sanctions and KYC */}
              <div className="grid grid-cols-2 gap-6">
                {/* Left Column - Sanctions Screening */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold">Sanctions Screening</h2>
                    <p className="text-sm text-muted-foreground">Automated sanctions and watchlist screening results</p>
                  </div>

                  {/* Status Card */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-green-600" />
                        <div>
                          <div className="font-bold text-green-900">Clear</div>
                          <div className="text-sm text-green-700">No sanctions matches found</div>
                        </div>
                      </div>
                      <Badge className="bg-green-600 text-white hover:bg-green-700">Verified</Badge>
                    </div>
                  </div>

                  {/* Screening Details */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-muted-foreground">Last Screening:</span>
                      <span className="font-semibold">2024-11-28</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-muted-foreground">Screening Provider:</span>
                      <span className="font-semibold">World-Check</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-muted-foreground">Risk Level:</span>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        Low
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-muted-foreground">Next Review:</span>
                      <span className="font-semibold">2024-12-28</span>
                    </div>
                  </div>

                  {/* Screening Coverage */}
                  <div className="pt-4">
                    <h3 className="font-semibold mb-3">Screening Coverage</h3>
                    <div className="space-y-2">
                      {["OFAC SDN List", "EU Sanctions", "UN Sanctions", "PEP Database"].map((item) => (
                        <div key={item} className="flex items-center justify-between py-2">
                          <span className="text-sm">{item}</span>
                          <div className="flex items-center gap-2 text-green-600">
                            <Check className="h-4 w-4" />
                            <span className="text-sm font-medium">Clear</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - KYC Documentation */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold">KYC Documentation</h2>
                    <p className="text-sm text-muted-foreground">Know Your Customer compliance status</p>
                  </div>

                  {/* Status Card */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-green-600" />
                        <div>
                          <div className="font-bold text-green-900">Complete</div>
                          <div className="text-sm text-green-700">All required documents verified</div>
                        </div>
                      </div>
                      <Badge className="bg-green-600 text-white hover:bg-green-700">Approved</Badge>
                    </div>
                  </div>

                  {/* Required Documents */}
                  <div>
                    <h3 className="font-semibold mb-3">Required Documents</h3>
                    <div className="space-y-2">
                      {[
                        "Certificate of Incorporation",
                        "Business License",
                        "Financial Statements",
                        "Beneficial Ownership",
                        "Director Identification",
                      ].map((doc) => (
                        <div key={doc} className="flex items-center justify-between py-2">
                          <span className="text-sm">{doc}</span>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            <Check className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* KYC Status Details */}
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-muted-foreground">KYC Status:</span>
                      <Badge className="bg-green-600 text-white hover:bg-green-700">Approved</Badge>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-muted-foreground">Approval Date:</span>
                      <span className="font-semibold">2024-01-15</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-muted-foreground">Next Review:</span>
                      <span className="font-semibold">2025-01-15</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-muted-foreground">Risk Rating:</span>
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                        Medium
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compliance History Table */}
              <div className="border rounded-lg p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold">Compliance History</h3>
                  <p className="text-sm text-muted-foreground">Historical compliance checks and updates</p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Date</th>
                        <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Type</th>
                        <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Status</th>
                        <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Performed By</th>
                        <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-2 text-sm">2024-11-28</td>
                        <td className="py-3 px-2 text-sm">Sanctions Screening</td>
                        <td className="py-3 px-2">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Clear
                          </Badge>
                        </td>
                        <td className="py-3 px-2 text-sm">System Automated</td>
                        <td className="py-3 px-2 text-sm">Monthly automated screening</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-2 text-sm">2024-10-28</td>
                        <td className="py-3 px-2 text-sm">Sanctions Screening</td>
                        <td className="py-3 px-2">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Clear
                          </Badge>
                        </td>
                        <td className="py-3 px-2 text-sm">System Automated</td>
                        <td className="py-3 px-2 text-sm">Monthly automated screening</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-2 text-sm">2024-07-15</td>
                        <td className="py-3 px-2 text-sm">KYC Review</td>
                        <td className="py-3 px-2">
                          <Badge className="bg-green-600 text-white hover:bg-green-700">Approved</Badge>
                        </td>
                        <td className="py-3 px-2 text-sm">Sarah Johnson</td>
                        <td className="py-3 px-2 text-sm">Semi-annual KYC review completed</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-2 text-sm">2024-01-15</td>
                        <td className="py-3 px-2 text-sm">Initial KYC</td>
                        <td className="py-3 px-2">
                          <Badge className="bg-green-600 text-white hover:bg-green-700">Approved</Badge>
                        </td>
                        <td className="py-3 px-2 text-sm">Michael Chen</td>
                        <td className="py-3 px-2 text-sm">Initial customer onboarding</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {overviewSubTab === "transactions" && (
            <div className="space-y-6">
              {/* Order History Section */}
              <div className="border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Order History (Last 12 Months)</h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Date</th>
                        <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Order No.</th>
                        <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Product</th>
                        <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">
                          Quantity (MT)
                        </th>
                        <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">Value (MYR)</th>
                        <th className="text-center py-3 px-2 text-sm font-medium text-muted-foreground">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactionData.orderHistory.map((order, index) => (
                        <tr key={index} className="border-b last:border-0">
                          <td className="py-3 px-2 text-sm">{order.date}</td>
                          <td className="py-3 px-2 text-sm">{order.orderNo}</td>
                          <td className="py-3 px-2 text-sm">{order.product}</td>
                          <td className="py-3 px-2 text-sm text-right">{order.quantity.toLocaleString()}</td>
                          <td className="py-3 px-2 text-sm text-right">{order.value.toLocaleString()}</td>
                          <td className="py-3 px-2 text-center">
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              {order.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t text-sm">
                  <span className="font-medium">
                    Total Orders: <span className="text-foreground">{transactionData.orderHistory.length}</span>
                  </span>
                  <span className="font-medium">
                    Total Quantity:{" "}
                    <span className="text-foreground">
                      {transactionData.orderHistory.reduce((sum, order) => sum + order.quantity, 0).toLocaleString()} MT
                    </span>
                  </span>
                  <span className="font-medium">
                    Total Value:{" "}
                    <span className="text-foreground">
                      MYR {transactionData.orderHistory.reduce((sum, order) => sum + order.value, 0).toLocaleString()}
                    </span>
                  </span>
                </div>
              </div>

              {/* Aging Report Section */}
              <div className="border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Aging Report</h3>
                </div>

                <div className="grid grid-cols-5 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      MYR {transactionData.agingReport.current.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Current (0-30 days)</div>
                    <div className="text-xs font-medium mt-1">0.0%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">
                      MYR {transactionData.agingReport.days31to60.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">31-60 days</div>
                    <div className="text-xs font-medium mt-1">0.0%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">
                      MYR {transactionData.agingReport.days61to90.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">61-90 days</div>
                    <div className="text-xs font-medium mt-1">0.0%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">
                      MYR {transactionData.agingReport.days91to120.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">91-120 days</div>
                    <div className="text-xs font-medium mt-1">0.0%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-700">
                      MYR {transactionData.agingReport.over120.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Over 120 days</div>
                    <div className="text-xs font-medium mt-1">0.0%</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                  <CheckSquare className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-semibold text-green-900">{transactionData.agingReport.paymentRecord}</div>
                    <div className="text-sm text-green-700 mt-1">{transactionData.agingReport.message}</div>
                  </div>
                </div>
              </div>

              {/* Payment History Section */}
              <div className="border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FileCheck className="h-5 w-5" />
                  <h3 className="text-lg font-semibold">Payment History (Last 10 Transactions)</h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Payment Date</th>
                        <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Invoice No.</th>
                        <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">Amount (MYR)</th>
                        <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
                          Payment Method
                        </th>
                        <th className="text-center py-3 px-2 text-sm font-medium text-muted-foreground">Days to Pay</th>
                        <th className="text-center py-3 px-2 text-sm font-medium text-muted-foreground">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactionData.paymentHistory.map((payment, index) => (
                        <tr key={index} className="border-b last:border-0">
                          <td className="py-3 px-2 text-sm">{payment.date}</td>
                          <td className="py-3 px-2 text-sm">{payment.invoiceNo}</td>
                          <td className="py-3 px-2 text-sm text-right">{payment.amount.toLocaleString()}</td>
                          <td className="py-3 px-2 text-sm">{payment.method}</td>
                          <td className="py-3 px-2 text-center">
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              {payment.daysToPay}
                            </Badge>
                          </td>
                          <td className="py-3 px-2 text-center">
                            <Badge
                              variant="outline"
                              className={
                                payment.status === "On Time"
                                  ? "bg-green-50 text-green-700 border-green-200"
                                  : payment.status === "Slightly Late"
                                    ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                                    : "bg-red-50 text-red-700 border-red-200"
                              }
                            >
                              {payment.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{transactionData.avgDaysToPay}</div>
                    <div className="text-sm text-muted-foreground mt-1">Avg Days to Pay</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{transactionData.onTimeRate}%</div>
                    <div className="text-sm text-muted-foreground mt-1">On-Time Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      MYR {(transactionData.totalPaid / 1000000).toFixed(1)}M
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">Total Paid</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-orange-600">{transactionData.preferredMethod}</div>
                    <div className="text-sm text-muted-foreground mt-1">Preferred Method</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {overviewSubTab === "dunn" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold">D&B European Comprehensive Report</h2>
                <p className="text-muted-foreground mt-1">
                  Report viewed{" "}
                  {new Date().toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>

              {/* Identification & Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Identification & Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">Global Foods Ltd</h3>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label className="text-muted-foreground">Main Trading Address</Label>
                          <p className="font-medium">
                            Level 7, Menara Milenium
                            <br />
                            Jalan Damanlela
                            <br />
                            50490 Kuala Lumpur
                            <br />
                            MALAYSIA
                          </p>
                        </div>
                        <div>
                          <Label className="text-muted-foreground">Telephone Number</Label>
                          <p className="font-medium">+60-3-2161-8888</p>
                        </div>
                        <div>
                          <Label className="text-muted-foreground">Web Address</Label>
                          <p className="font-medium text-primary">www.globalfoods.my</p>
                        </div>
                        <div>
                          <Label className="text-muted-foreground">Email</Label>
                          <p className="font-medium">procurement@globalfoods.my</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label className="text-muted-foreground">D-U-N-S® Number</Label>
                          <p className="font-medium">40-217-3306</p>
                        </div>
                        <div>
                          <Label className="text-muted-foreground">VAT Number</Label>
                          <p className="font-medium">MY 001836936B01</p>
                        </div>
                        <div>
                          <Label className="text-muted-foreground">Line of Business (SIC)</Label>
                          <p className="font-medium">Food products manufacturing (5149)</p>
                        </div>
                        <div>
                          <Label className="text-muted-foreground">Date Started</Label>
                          <p className="font-medium">15 Jan 1995</p>
                        </div>
                        <div>
                          <Label className="text-muted-foreground">Legal Form</Label>
                          <p className="font-medium">Private Limited Company</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Risk Evaluation */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Risk Evaluation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="font-semibold text-blue-900 dark:text-blue-100">
                      D&B Analysis: Low credit risk, pays within terms.
                    </p>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    <Card className="bg-muted/50">
                      <CardContent className="pt-6 text-center">
                        <Label className="text-muted-foreground text-sm">D&B Rating</Label>
                        <p className="text-3xl font-bold mt-2">A 2</p>
                        <p className="text-xs text-muted-foreground mt-1">Financial Strength: A</p>
                        <p className="text-xs text-muted-foreground">Risk Indicator: 2</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/50">
                      <CardContent className="pt-6 text-center">
                        <Label className="text-muted-foreground text-sm">Risk Indicator</Label>
                        <div className="flex justify-center gap-1 mt-3">
                          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm">
                            1
                          </div>
                          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm">
                            2
                          </div>
                          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold text-sm">
                            3
                          </div>
                          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold text-sm">
                            4
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">Low credit risk</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/50">
                      <CardContent className="pt-6 text-center">
                        <Label className="text-muted-foreground text-sm">D&B Failure Score</Label>
                        <p className="text-3xl font-bold mt-2">73</p>
                        <p className="text-xs text-muted-foreground mt-1">out of 100</p>
                        <p className="text-xs text-green-600 dark:text-green-400 mt-2">
                          27% of businesses have lower risk
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/50">
                      <CardContent className="pt-6 text-center">
                        <Label className="text-muted-foreground text-sm">D&B Maximum Credit</Label>
                        <p className="text-3xl font-bold mt-2">MYR 4M</p>
                        <p className="text-xs text-muted-foreground mt-1">Monthly open credit terms</p>
                        <Badge className="mt-2 bg-green-500">Continue delivery</Badge>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Comments related to the risk for this business</h4>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Collections: no claims have been received for this company.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Year started: statistics have established high expectations of continuity.</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>
                          Trend in Tangible Net Worth is flat or increasing compared to the previous accounts.
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>This company has a parent or liability taker with a Group Net Worth of MYR 70.5M</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>
                          On average this company pays its accounts within terms and shows similar or better payment
                          behaviour than 12 months ago.
                        </span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Payment Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                      <CardContent className="pt-6 text-center">
                        <Label className="text-muted-foreground text-sm text-center block">
                          Average Days Beyond Terms
                        </Label>
                        <p className="text-4xl font-bold text-green-600 dark:text-green-400 mt-2">0</p>
                        <p className="text-xs text-muted-foreground mt-1">Pays within terms</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                      <CardContent className="pt-6 text-center">
                        <Label className="text-muted-foreground text-sm text-center block">Paydex Score</Label>
                        <p className="text-4xl font-bold text-green-600 dark:text-green-400 mt-2">80</p>
                        <p className="text-xs text-muted-foreground mt-1">out of 100</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/50">
                      <CardContent className="pt-6 text-center">
                        <Label className="text-muted-foreground text-sm text-center block">Payment Experiences</Label>
                        <p className="text-4xl font-bold mt-2">10</p>
                        <p className="text-xs text-muted-foreground mt-1">Last 24 months (~95 invoices)</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Payment Experiences Summary</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 px-3">Value Bands</th>
                            <th className="text-center py-2 px-3">Number of Experiences</th>
                            <th className="text-center py-2 px-3">Total Value (MYR)</th>
                            <th className="text-center py-2 px-3">% Paid Within Terms</th>
                            <th className="text-center py-2 px-3">1-30 days</th>
                            <th className="text-center py-2 px-3">31-60 days</th>
                            <th className="text-center py-2 px-3">61-90 days</th>
                            <th className="text-center py-2 px-3">91-120 days</th>
                            <th className="text-center py-2 px-3">121+ days</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2 px-3">&lt; 1,000</td>
                            <td className="text-center py-2 px-3">10</td>
                            <td className="text-center py-2 px-3">1,103</td>
                            <td className="text-center py-2 px-3 text-green-600 font-semibold">100%</td>
                            <td className="text-center py-2 px-3">0</td>
                            <td className="text-center py-2 px-3">0</td>
                            <td className="text-center py-2 px-3">0</td>
                            <td className="text-center py-2 px-3">0</td>
                            <td className="text-center py-2 px-3">0</td>
                          </tr>
                          <tr className="font-semibold bg-muted/50">
                            <td className="py-2 px-3">Total</td>
                            <td className="text-center py-2 px-3">10</td>
                            <td className="text-center py-2 px-3">1,103</td>
                            <td className="text-center py-2 px-3 text-green-600">100%</td>
                            <td className="text-center py-2 px-3">0</td>
                            <td className="text-center py-2 px-3">0</td>
                            <td className="text-center py-2 px-3">0</td>
                            <td className="text-center py-2 px-3">0</td>
                            <td className="text-center py-2 px-3">0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold mb-2">Commentary</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>
                          Global Foods Ltd pays within terms - This is 9 days better than the national average of 9 days
                          beyond terms.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>The Company pays to industry average when compared to similar businesses.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>
                          The D&B failure score of 73 predicts that the risk of failure within the next 12 months is
                          lower than average.
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Financial Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Financial Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <Label className="text-muted-foreground">Latest Accounts Date</Label>
                      <p className="text-lg font-semibold">31 Jul 2024</p>
                    </div>
                    <div>
                      <Label className="text-muted-foreground">Tangible Net Worth</Label>
                      <p className="text-lg font-semibold">MYR 70,496,442</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Balance Sheet Summary (MYR)</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 px-3">Item</th>
                            <th className="text-right py-2 px-3">31 Jul 2024</th>
                            <th className="text-right py-2 px-3">31 Jul 2023</th>
                            <th className="text-right py-2 px-3">31 Jul 2022</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2 px-3 font-medium">Tangible Net Worth</td>
                            <td className="text-right py-2 px-3">70,496,442</td>
                            <td className="text-right py-2 px-3">66,707,857</td>
                            <td className="text-right py-2 px-3">64,705,578</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-3">Total Fixed Assets</td>
                            <td className="text-right py-2 px-3">56,397,906</td>
                            <td className="text-right py-2 px-3">59,079,277</td>
                            <td className="text-right py-2 px-3">63,821,389</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-3">Total Assets</td>
                            <td className="text-right py-2 px-3">115,337,364</td>
                            <td className="text-right py-2 px-3">146,913,677</td>
                            <td className="text-right py-2 px-3">142,606,732</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-3">Total Current Assets</td>
                            <td className="text-right py-2 px-3">58,939,458</td>
                            <td className="text-right py-2 px-3">87,834,400</td>
                            <td className="text-right py-2 px-3">78,785,343</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-3">Current Liabilities</td>
                            <td className="text-right py-2 px-3">43,867,565</td>
                            <td className="text-right py-2 px-3">39,427,161</td>
                            <td className="text-right py-2 px-3">37,384,756</td>
                          </tr>
                          <tr className="border-b bg-muted/50">
                            <td className="py-2 px-3 font-medium">Working Capital</td>
                            <td className="py-2 px-3 font-semibold">15,071,893</td>
                            <td className="py-2 px-3">48,407,239</td>
                            <td className="py-2 px-3">41,400,587</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Financial Ratios */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Key Financial Ratios</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 px-3">Ratio</th>
                          <th className="text-center py-2 px-3">Lowest Quartile</th>
                          <th className="text-center py-2 px-3">Median</th>
                          <th className="text-center py-2 px-3">Highest Quartile</th>
                          <th className="text-center py-2 px-3 bg-blue-50 dark:bg-blue-950/20">2024</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 px-3 font-medium">Acid Test (x)</td>
                          <td className="text-center py-2 px-3">0.9</td>
                          <td className="text-center py-2 px-3">1.2</td>
                          <td className="text-center py-2 px-3">1.5</td>
                          <td className="text-center py-2 px-3 bg-blue-50 dark:bg-blue-950/20 font-semibold">1.3</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-3 font-medium">Current Ratio (x)</td>
                          <td className="text-center py-2 px-3">1.2</td>
                          <td className="text-center py-2 px-3">1.7</td>
                          <td className="text-center py-2 px-3">2.5</td>
                          <td className="text-center py-2 px-3 bg-blue-50 dark:bg-blue-950/20 font-semibold">1.3</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-3 font-medium">Fixed Assets/Net Worth (%)</td>
                          <td className="text-center py-2 px-3">60.6</td>
                          <td className="text-center py-2 px-3">20.5</td>
                          <td className="text-center py-2 px-3">1.3</td>
                          <td className="text-center py-2 px-3 bg-blue-50 dark:bg-blue-950/20 font-semibold">80.0</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-3 font-medium">Current Liabilities/Net Worth (%)</td>
                          <td className="text-center py-2 px-3">161.2</td>
                          <td className="text-center py-2 px-3">78.9</td>
                          <td className="text-center py-2 px-3">51.7</td>
                          <td className="text-center py-2 px-3 bg-blue-50 dark:bg-blue-950/20 font-semibold">62.2</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-3 font-medium">Degree of Indebtedness (%)</td>
                          <td className="text-center py-2 px-3">66.1</td>
                          <td className="text-center py-2 px-3">51.3</td>
                          <td className="text-center py-2 px-3">39.7</td>
                          <td className="text-center py-2 px-3 bg-blue-50 dark:bg-blue-950/20 font-semibold">38.9</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Report Footer */}
              <div className="text-xs text-muted-foreground p-4 bg-muted/30 rounded-lg">
                <p className="mb-2">
                  Whilst D&B attempts to ensure that the information provided is accurate and complete, by reason of the
                  immense quantity of detailed matter dealt with in compiling the information and the fact that some of
                  the data are supplied from sources not controlled by D&B which cannot always be verified, including
                  information provided direct from the subject of enquiry, as well as the possibility of negligence and
                  mistake, D&B does not guarantee the correctness or the effective delivery of the information and will
                  not be held responsible for any errors therein or omissions therefrom.
                </p>
                <p>© Dun & Bradstreet Inc., {new Date().getFullYear()}.</p>
              </div>
            </div>
          )}

          {overviewSubTab === "bureau" && (
            <div className="space-y-6">
              {/* Report Header */}
              <div className="bg-muted border-l-4 border-primary p-6 rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">Business Information Report Premium</h2>
                    <p className="text-sm text-muted-foreground">Credit Bureau Malaysia (CBM)</p>
                    <p className="text-xs text-red-600 font-semibold mt-2">STRICTLY CONFIDENTIAL</p>
                  </div>
                  <div className="text-right text-sm space-y-1">
                    <p>
                      <span className="font-medium">Enquiry No:</span> 202505207533704
                    </p>
                    <p>
                      <span className="font-medium">User ID:</span> PCP95370009
                    </p>
                    <p>
                      <span className="font-medium">Report Date:</span> {new Date().toLocaleDateString("en-GB")}
                    </p>
                    <p>
                      <span className="font-medium">Report Type:</span> BIR-P
                    </p>
                  </div>
                </div>
              </div>

              {/* SME Profile */}
              <Card>
                <CardHeader>
                  <CardTitle>SME Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label className="text-muted-foreground">Name</Label>
                        <p className="font-semibold text-lg">Global Foods Ltd</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground">Registration No</Label>
                        <p className="font-medium">343295T</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground">New Registration No</Label>
                        <p className="font-medium">199501014094</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label className="text-muted-foreground">Registration Date</Label>
                        <p className="font-medium">13/05/1995</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground">Type Of Constitution</Label>
                        <p className="font-medium">COMPANY</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground">Country Of Registration</Label>
                        <p className="font-medium">MALAYSIA</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 1: Corporation and Financial Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold">SECTION 1: CORPORATION AND FINANCIAL INFORMATION</h3>

                {/* Company Profile */}
                <Card>
                  <CardHeader>
                    <CardTitle>Company Profile</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <Label className="text-muted-foreground">Previous Name Change</Label>
                        <p className="font-medium">PEDOMAN HARAPAN SDN. BHD.</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground">Type</Label>
                        <p className="font-medium">Limited By Shares - PRIVATE LIMITED</p>
                      </div>
                    </div>

                    <div>
                      <Label className="text-muted-foreground">Registered Address</Label>
                      <p className="font-medium">
                        LEVEL 7, MENARA MILENIUM
                        <br />
                        JALAN DAMANLELA
                        <br />
                        PUSAT BANDAR DAMANSARA
                        <br />
                        KUALA LUMPUR, WP KUALA LUMPUR
                        <br />
                        50490 MALAYSIA
                      </p>
                    </div>

                    <div>
                      <Label className="text-muted-foreground">Business Address</Label>
                      <p className="font-medium">
                        3 LORONG KILANG A, OFF JALAN KILANG
                        <br />
                        PETALING JAYA, SELANGOR
                        <br />
                        46050 MALAYSIA
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <Label className="text-muted-foreground">Status</Label>
                        <Badge variant="default" className="bg-green-600">
                          Existing
                        </Badge>
                      </div>
                      <div>
                        <Label className="text-muted-foreground">BIR Indicator</Label>
                        <p className="font-medium">Nil</p>
                      </div>
                    </div>

                    <div>
                      <Label className="text-muted-foreground">Business Sector</Label>
                      <p className="font-medium">Manufacture of other food products n.e.c.</p>
                    </div>

                    <div>
                      <Label className="text-muted-foreground">Nature Of Business</Label>
                      <p className="font-medium">
                        MANUFACTURE AND SALE OF FOOD PRODUCTS, PROCESSED GOODS AND OTHER CANNED FOOD.
                      </p>
                    </div>

                    <div>
                      <Label className="text-muted-foreground">Last Updated</Label>
                      <p className="font-medium">{new Date().toLocaleDateString("en-GB")}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Directors and Officers */}
                <Card>
                  <CardHeader>
                    <CardTitle>Company Owner(s)/Partner(s)/Director(s)/Officer(s)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-semibold">Name</th>
                            <th className="text-left py-3 px-4 font-semibold">Designation</th>
                            <th className="text-left py-3 px-4 font-semibold">IC/Passport No</th>
                            <th className="text-left py-3 px-4 font-semibold">Date Of Appointment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b hover:bg-muted/50">
                            <td className="py-3 px-4">
                              <p className="font-medium">VINAYAK SASITHARAN</p>
                              <p className="text-sm text-muted-foreground">
                                B-10-1, SERAI BUKIT BANDARAYA, JALAN MEDANG SERAI, BANGSAR
                              </p>
                            </td>
                            <td className="py-3 px-4">Director</td>
                            <td className="py-3 px-4">RA6284305</td>
                            <td className="py-3 px-4">22/05/2020</td>
                          </tr>
                          <tr className="border-b hover:bg-muted/50">
                            <td className="py-3 px-4">
                              <p className="font-medium">CHENG CHIA PING</p>
                              <p className="text-sm text-muted-foreground">
                                B-13-4, SRI INTAN 2 CONDOMINIUM, NO. 2, JALAN TEROLAK 6
                              </p>
                            </td>
                            <td className="py-3 px-4">Secretary</td>
                            <td className="py-3 px-4">760816025385</td>
                            <td className="py-3 px-4">04/04/2017</td>
                          </tr>
                          <tr className="border-b hover:bg-muted/50">
                            <td className="py-3 px-4">
                              <p className="font-medium">CHUA SIEW CHUAN</p>
                              <p className="text-sm text-muted-foreground">3 JALAN SS 19/3C, SUBANG JAYA</p>
                            </td>
                            <td className="py-3 px-4">Secretary</td>
                            <td className="py-3 px-4">580826055408</td>
                            <td className="py-3 px-4">01/12/1998</td>
                          </tr>
                          <tr className="border-b hover:bg-muted/50">
                            <td className="py-3 px-4">
                              <p className="font-medium">LIM MOOI CHENG</p>
                              <p className="text-sm text-muted-foreground">
                                64 JALAN TR 2/1, TROPICANA GOLF & COUNTRY RESORT
                              </p>
                            </td>
                            <td className="py-3 px-4">Director</td>
                            <td className="py-3 px-4">660603075030</td>
                            <td className="py-3 px-4">17/09/2018</td>
                          </tr>
                          <tr className="border-b hover:bg-muted/50">
                            <td className="py-3 px-4">
                              <p className="font-medium">ANDREW JAMES RIDLER</p>
                              <p className="text-sm text-muted-foreground">
                                1 GERTRUDE STREET, BALGOWLAH HEIGHTS, NSW 2093, AUSTRALIA
                              </p>
                            </td>
                            <td className="py-3 px-4">Director</td>
                            <td className="py-3 px-4">PE0409674</td>
                            <td className="py-3 px-4">22/05/2020</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                {/* Share Capital */}
                <Card>
                  <CardHeader>
                    <CardTitle>Share Capital</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Authorized Capital</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b bg-muted/50">
                              <th className="text-left py-2 px-4 font-semibold">Type</th>
                              <th className="text-right py-2 px-4 font-semibold">Amount (RM)</th>
                              <th className="text-right py-2 px-4 font-semibold">Divided Into</th>
                              <th className="text-right py-2 px-4 font-semibold">Nominal Value (sen)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="py-2 px-4">Ordinary</td>
                              <td className="py-2 px-4 text-right">1,000,000.00</td>
                              <td className="py-2 px-4 text-right">1,000,000</td>
                              <td className="py-2 px-4 text-right">100.00</td>
                            </tr>
                            <tr className="border-b font-semibold bg-muted/30">
                              <td className="py-2 px-4">Total Authorized</td>
                              <td className="py-2 px-4 text-right">1,000,000.00</td>
                              <td className="py-2 px-4 text-right">-</td>
                              <td className="py-2 px-4 text-right">-</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Issued Capital</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b bg-muted/50">
                              <th className="text-left py-2 px-4 font-semibold">Type</th>
                              <th className="text-right py-2 px-4 font-semibold">Cash</th>
                              <th className="text-right py-2 px-4 font-semibold">Otherwise Than Cash</th>
                              <th className="text-right py-2 px-4 font-semibold">Nominal Value (sen)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="py-2 px-4">Ordinary</td>
                              <td className="py-2 px-4 text-right">500,000</td>
                              <td className="py-2 px-4 text-right">-</td>
                              <td className="py-2 px-4 text-right">100.00</td>
                            </tr>
                            <tr className="border-b font-semibold bg-muted/30">
                              <td className="py-2 px-4">Total Issued (RM)</td>
                              <td className="py-2 px-4 text-right">14,000,000.00</td>
                              <td className="py-2 px-4 text-right">-</td>
                              <td className="py-2 px-4 text-right">-</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Shareholders */}
                <Card>
                  <CardHeader>
                    <CardTitle>Shareholder(s)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b bg-muted/50">
                            <th className="text-left py-3 px-4 font-semibold">Name/Company Name</th>
                            <th className="text-right py-3 px-4 font-semibold">Total No of Share</th>
                            <th className="text-right py-3 px-4 font-semibold">Percentage (%)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b hover:bg-muted/50">
                            <td className="py-3 px-4 font-medium">GLOBAL FOODS HK LIMITED</td>
                            <td className="py-3 px-4 text-right">500,100.00</td>
                            <td className="py-3 px-4 text-right">100.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                {/* Financial Statement */}
                <Card>
                  <CardHeader>
                    <CardTitle>Financial Statement Summary</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">5-Year Financial Overview</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Auditor Information */}
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <Label className="text-muted-foreground">Auditor</Label>
                      <p className="font-medium">KPMG PLT (LLP0010081-LCA)</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        LEVEL 10, KPMG TOWER, 8 FIRST AVENUE, BANDAR UTAMA, 47800 PETALING JAYA
                      </p>
                    </div>

                    {/* Balance Sheet */}
                    <div>
                      <h4 className="font-semibold mb-3">Balance Sheet Items (RM)</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b bg-muted/50">
                              <th className="text-left py-2 px-3 font-semibold">Financial Year End</th>
                              <th className="text-right py-2 px-3 font-semibold">31/07/2024</th>
                              <th className="text-right py-2 px-3 font-semibold">31/07/2023</th>
                              <th className="text-right py-2 px-3 font-semibold">31/07/2022</th>
                              <th className="text-right py-2 px-3 font-semibold">31/07/2021</th>
                              <th className="text-right py-2 px-3 font-semibold">31/07/2020</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b hover:bg-muted/30">
                              <td className="py-2 px-3 font-medium">Non-current assets</td>
                              <td className="py-2 px-3 text-right">56,397,906</td>
                              <td className="py-2 px-3 text-right">59,079,277</td>
                              <td className="py-2 px-3 text-right">63,821,389</td>
                              <td className="py-2 px-3 text-right">62,672,582</td>
                              <td className="py-2 px-3 text-right">64,675,899</td>
                            </tr>
                            <tr className="border-b hover:bg-muted/30">
                              <td className="py-2 px-3 font-medium">Current assets</td>
                              <td className="py-2 px-3 text-right">58,939,458</td>
                              <td className="py-2 px-3 text-right">87,834,400</td>
                              <td className="py-2 px-3 text-right">78,785,343</td>
                              <td className="py-2 px-3 text-right">73,137,212</td>
                              <td className="py-2 px-3 text-right">62,434,693</td>
                            </tr>
                            <tr className="border-b bg-blue-50 dark:bg-blue-950/30">
                              <td className="py-2 px-3 font-semibold">Total assets</td>
                              <td className="py-2 px-3 text-right font-semibold">115,337,364</td>
                              <td className="py-2 px-3 text-right font-semibold">146,913,677</td>
                              <td className="py-2 px-3 text-right font-semibold">142,606,732</td>
                              <td className="py-2 px-3 text-right font-semibold">135,809,794</td>
                              <td className="py-2 px-3 text-right font-semibold">127,110,592</td>
                            </tr>
                            <tr className="border-b hover:bg-muted/30">
                              <td className="py-2 px-3 font-medium">Non-current liabilities</td>
                              <td className="py-2 px-3 text-right">973,357</td>
                              <td className="py-2 px-3 text-right">40,778,659</td>
                              <td className="py-2 px-3 text-right">40,516,398</td>
                              <td className="py-2 px-3 text-right">40,553,820</td>
                              <td className="py-2 px-3 text-right">40,531,455</td>
                            </tr>
                            <tr className="border-b hover:bg-muted/30">
                              <td className="py-2 px-3 font-medium">Current liabilities</td>
                              <td className="py-2 px-3 text-right">43,867,565</td>
                              <td className="py-2 px-3 text-right">39,427,161</td>
                              <td className="py-2 px-3 text-right">37,384,756</td>
                              <td className="py-2 px-3 text-right">32,806,278</td>
                              <td className="py-2 px-3 text-right">25,860,502</td>
                            </tr>
                            <tr className="border-b bg-orange-50 dark:bg-orange-950/30">
                              <td className="py-2 px-3 font-semibold">Total liabilities</td>
                              <td className="py-2 px-3 text-right font-semibold">44,840,922</td>
                              <td className="py-2 px-3 text-right font-semibold">80,205,820</td>
                              <td className="py-2 px-3 text-right font-semibold">77,901,154</td>
                              <td className="py-2 px-3 text-right font-semibold">73,360,098</td>
                              <td className="py-2 px-3 text-right font-semibold">66,391,957</td>
                            </tr>
                            <tr className="border-b hover:bg-muted/30">
                              <td className="py-2 px-3 font-medium">Share capital</td>
                              <td className="py-2 px-3 text-right">14,000,000</td>
                              <td className="py-2 px-3 text-right">14,000,000</td>
                              <td className="py-2 px-3 text-right">14,000,000</td>
                              <td className="py-2 px-3 text-right">14,000,000</td>
                              <td className="py-2 px-3 text-right">14,000,000</td>
                            </tr>
                            <tr className="border-b hover:bg-muted/30">
                              <td className="py-2 px-3 font-medium">Retained earning</td>
                              <td className="py-2 px-3 text-right">56,496,442</td>
                              <td className="py-2 px-3 text-right">52,707,857</td>
                              <td className="py-2 px-3 text-right">50,705,578</td>
                              <td className="py-2 px-3 text-right">48,449,696</td>
                              <td className="py-2 px-3 text-right">46,718,635</td>
                            </tr>
                            <tr className="border-b bg-green-50 dark:bg-green-950/30">
                              <td className="py-2 px-3 font-semibold">Total Equity</td>
                              <td className="py-2 px-3 text-right font-semibold">70,496,442</td>
                              <td className="py-2 px-3 text-right font-semibold">66,707,857</td>
                              <td className="py-2 px-3 text-right font-semibold">64,705,578</td>
                              <td className="py-2 px-3 text-right font-semibold">62,449,696</td>
                              <td className="py-2 px-3 text-right font-semibold">60,718,635</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Key Financial Ratios */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Key Financial Ratios</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 px-3">Ratio</th>
                            <th className="text-center py-2 px-3">Lowest Quartile</th>
                            <th className="text-center py-2 px-3">Median</th>
                            <th className="text-center py-2 px-3">Highest Quartile</th>
                            <th className="text-center py-2 px-3 bg-blue-50 dark:bg-blue-950/20">2024</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2 px-3 font-medium">Acid Test (x)</td>
                            <td className="text-center py-2 px-3">0.9</td>
                            <td className="text-center py-2 px-3">1.2</td>
                            <td className="text-center py-2 px-3">1.5</td>
                            <td className="text-center py-2 px-3 bg-blue-50 dark:bg-blue-950/20 font-semibold">1.3</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-3 font-medium">Current Ratio (x)</td>
                            <td className="text-center py-2 px-3">1.2</td>
                            <td className="text-center py-2 px-3">1.7</td>
                            <td className="text-center py-2 px-3">2.5</td>
                            <td className="text-center py-2 px-3 bg-blue-50 dark:bg-blue-950/20 font-semibold">1.3</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-3 font-medium">Fixed Assets/Net Worth (%)</td>
                            <td className="text-center py-2 px-3">60.6</td>
                            <td className="text-center py-2 px-3">20.5</td>
                            <td className="text-center py-2 px-3">1.3</td>
                            <td className="text-center py-2 px-3 bg-blue-50 dark:bg-blue-950/20 font-semibold">80.0</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-3 font-medium">Current Liabilities/Net Worth (%)</td>
                            <td className="text-center py-2 px-3">161.2</td>
                            <td className="text-center py-2 px-3">78.9</td>
                            <td className="text-center py-2 px-3">51.7</td>
                            <td className="text-center py-2 px-3 bg-blue-50 dark:bg-blue-950/20 font-semibold">62.2</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-3 font-medium">Degree of Indebtedness (%)</td>
                            <td className="text-center py-2 px-3">66.1</td>
                            <td className="text-center py-2 px-3">51.3</td>
                            <td className="text-center py-2 px-3">39.7</td>
                            <td className="text-center py-2 px-3 bg-blue-50 dark:bg-blue-950/20 font-semibold">38.9</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                {/* Report Footer */}
                <div className="text-xs text-muted-foreground p-4 bg-muted/30 rounded-lg">
                  <p className="mb-2">
                    Whilst D&B attempts to ensure that the information provided is accurate and complete, by reason of
                    the immense quantity of detailed matter dealt with in compiling the information and the fact that
                    some of the data are supplied from sources not controlled by D&B which cannot always be verified,
                    including information provided direct from the subject of enquiry, as well as the possibility of
                    negligence and mistake, D&B does not guarantee the correctness or the effective delivery of the
                    information and will not be held responsible for any errors therein or omissions therefrom.
                  </p>
                  <p>© Dun & Bradstreet Inc., {new Date().getFullYear()}.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === "credit-details" && (
        <div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-6">Credit Rating Calculation</h3>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <Card className="p-6 border-green-200">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <h4 className="font-semibold">1. AI Profitability Analysis</h4>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Profit Before Tax (RM)</label>
                    <div className="border rounded-lg px-3 py-2 bg-white">
                      <span className="text-sm">1,850,000</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Turnover (RM)</label>
                    <div className="border rounded-lg px-3 py-2 bg-white">
                      <span className="text-sm">12,500,000</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h5 className="font-semibold text-sm mb-4 text-green-900">AI Profitability Results</h5>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-green-800">Assessment (%):</span>
                    <span className="text-lg font-bold text-green-600">14.80%</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-green-800">Score:</span>
                    <span className="text-lg font-bold text-green-600">80</span>
                  </div>
                  <Progress value={80} className="h-2 mb-3 bg-green-200 [&>div]:bg-green-600" />
                  <p className="text-xs italic text-green-700">Formula: (Profit Before Tax ÷ Turnover) × 100</p>
                </div>
              </Card>

              <Card className="p-6 border-blue-200">
                <div className="flex items-center gap-2 mb-6">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                  <h4 className="font-semibold">2. AI Current Ratio Analysis</h4>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Current Assets (RM)</label>
                    <div className="border rounded-lg px-3 py-2 bg-white">
                      <span className="text-sm">8,750,000</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Current Liabilities (RM)</label>
                    <div className="border rounded-lg px-3 py-2 bg-white">
                      <span className="text-sm">4,200,000</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h5 className="font-semibold text-sm mb-4 text-blue-900">AI Current Ratio Results</h5>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-blue-800">Assessment (Ratio):</span>
                    <span className="text-lg font-bold text-blue-600">2.08</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-blue-800">Score:</span>
                    <span className="text-lg font-bold text-blue-600">90</span>
                  </div>
                  <Progress value={90} className="h-2 mb-3 bg-blue-200 [&>div]:bg-blue-600" />
                  <p className="text-xs italic text-blue-700">Formula: Current Assets ÷ Current Liabilities</p>
                </div>
              </Card>

              <Card className="p-6 border-purple-200">
                <div className="flex items-center gap-2 mb-6">
                  <BarChart3 className="h-5 w-5 text-purple-600" />
                  <h4 className="font-semibold">3. AI Gearing Analysis</h4>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Total Liability (RM)</label>
                    <div className="border rounded-lg px-3 py-2 bg-white">
                      <span className="text-sm">24,673,558</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Shareholder's Fund (RM)</label>
                    <div className="border rounded-lg px-3 py-2 bg-white">
                      <span className="text-sm">70,496,442</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Intangible Assets (RM)</label>
                    <div className="border rounded-lg px-3 py-2 bg-white">
                      <span className="text-sm">0</span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h5 className="font-semibold text-sm mb-4 text-purple-900">AI Gearing Results</h5>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-purple-800">Assessment (Ratio):</span>
                    <span className="text-lg font-bold text-purple-600">0.35</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-purple-800">Score:</span>
                    <span className="text-lg font-bold text-purple-600">90</span>
                  </div>
                  <Progress value={90} className="h-2 mb-3 bg-purple-200 [&>div]:bg-purple-600" />
                  <p className="text-xs italic text-purple-700">
                    Formula: Total Liability ÷ (Shareholder's Fund - Intangible Assets)
                  </p>
                </div>
              </Card>

              <Card className="p-6 border-orange-200">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="h-5 w-5 text-orange-600" />
                  <h4 className="font-semibold">4. Shareholder Funds / Net Worth</h4>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h5 className="font-semibold text-sm mb-4 text-orange-900">Net Worth Results</h5>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-orange-800">Assessment (RM):</span>
                    <span className="text-lg font-bold text-orange-600">70,496,442.00</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-orange-800">Score:</span>
                    <span className="text-lg font-bold text-orange-600">10</span>
                  </div>
                  <Progress value={10} className="h-2 bg-orange-200 [&>div]:bg-orange-600" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      )}

      {activeTab === "recent-activity" && (
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="h-6 w-6 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              <p className="text-sm text-muted-foreground">Timeline of recent customer interactions and updates</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
              </div>
              <div className="flex-1 pb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">New Order Placed</span>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Order</Badge>
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  Order #ORD-1000 for Crude Palm Oil - MYR 556,218
                </div>
                <div className="text-xs text-muted-foreground">29/10/2025</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-green-600 mt-2"></div>
                <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
              </div>
              <div className="flex-1 pb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">Payment Received</span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Payment</Badge>
                </div>
                <div className="text-sm text-muted-foreground mb-2">Payment #PAY-2000 - MYR 604,144</div>
                <div className="text-xs text-muted-foreground">29/10/2025</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-purple-600 mt-2"></div>
                <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
              </div>
              <div className="flex-1 pb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">Credit Review Completed</span>
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Credit</Badge>
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  Annual credit assessment completed - Credit score: 785
                </div>
                <div className="text-xs text-muted-foreground">01/10/2025</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-orange-600 mt-2"></div>
                <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
              </div>
              <div className="flex-1 pb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">Invoice Generated</span>
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Invoice</Badge>
                </div>
                <div className="text-sm text-muted-foreground mb-2">Invoice #INV-3000 - Due: 18/11/2025</div>
                <div className="text-xs text-muted-foreground">18/10/2025</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-teal-600 mt-2"></div>
                <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
              </div>
              <div className="flex-1 pb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">KYC Documents Updated</span>
                  <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-100">Compliance</Badge>
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  Financial statements for 2024 uploaded and verified
                </div>
                <div className="text-xs text-muted-foreground">20/01/2025</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
              </div>
              <div className="flex-1 pb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">Meeting Scheduled</span>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Meeting</Badge>
                </div>
                <div className="text-sm text-muted-foreground mb-2">Quarterly business review with Sarah Chen</div>
                <div className="text-xs text-muted-foreground">15/12/2024</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-green-600 mt-2"></div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">Account Activated</span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Account</Badge>
                </div>
                <div className="text-sm text-muted-foreground mb-2">Customer account successfully activated</div>
                <div className="text-xs text-muted-foreground">10/01/2020</div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
