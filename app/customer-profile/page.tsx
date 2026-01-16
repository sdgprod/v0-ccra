"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
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
} from "lucide-react"

export default function CustomerProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "order-history", label: "Order History" },
    { id: "payment-history", label: "Payment History" },
    { id: "outstanding-invoices", label: "Outstanding Invoices" },
    { id: "sanction-kyc", label: "Sanction & KYC" },
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
        {/* Credit Utilization */}
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="text-sm text-muted-foreground">Credit Utilization</div>
            <CreditCard className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="text-3xl font-bold mb-2">74.0%</div>
          <Progress value={74} className="h-2 mb-2" />
          <div className="text-xs text-muted-foreground">MYR 1,850,000 of MYR 2,500,000</div>
        </Card>

        {/* Total Order Value */}
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="text-sm text-muted-foreground">Total Order Value</div>
            <Package className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="text-3xl font-bold mb-2">RM 2,808,500</div>
          <div className="text-xs text-muted-foreground">Last 6 months</div>
        </Card>

        {/* Average Order */}
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="text-sm text-muted-foreground">Average Order</div>
            <TrendingUp className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="text-3xl font-bold mb-2">RM 561,700</div>
          <div className="text-xs text-muted-foreground">Per order</div>
        </Card>

        {/* Risk Rating */}
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="text-sm text-muted-foreground">Risk Rating</div>
            <User className="h-5 w-5 text-muted-foreground" />
          </div>
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 mb-2">Medium</Badge>
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
          {/* Recommended Increase */}
          <Card className="p-6 bg-green-50 border-green-200">
            <div className="text-sm text-muted-foreground mb-2">Recommended Increase</div>
            <div className="text-3xl font-bold text-green-600 mb-1">MYR 1,300,000</div>
            <div className="text-xs text-muted-foreground">50% of current limit</div>
          </Card>

          {/* New Credit Limit */}
          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-2">New Credit Limit</div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg font-semibold text-muted-foreground">MYR 2,500,000</span>
              <span className="text-muted-foreground">→</span>
            </div>
            <div className="text-2xl font-bold text-green-600">MYR 3,800,000</div>
          </Card>

          {/* Overall Score */}
          <Card className="p-6 bg-purple-50 border-purple-200">
            <div className="text-sm text-muted-foreground mb-2">Overall Score</div>
            <div className="text-3xl font-bold text-purple-600 mb-1">91/100</div>
            <div className="text-xs text-muted-foreground">Excellent rating</div>
          </Card>

          {/* Key Positive Factors */}
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
          <div className="space-y-6">
            {/* Customer Information - Full Width */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Customer Information</h3>
              <p className="text-sm text-muted-foreground mb-6">Basic customer details and contact information</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Company Name</div>
                    <div className="font-medium">Global Foods Ltd</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Location</div>
                    <div className="font-medium">Kuala Lumpur, Malaysia</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Account Manager</div>
                    <div className="font-medium">Sarah Chen</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Email</div>
                    <div className="font-medium">procurement@globalfoods.my</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Phone</div>
                    <div className="font-medium">+60-3-2161-8888</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Payment Terms</div>
                    <div className="font-medium">NET 30</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Customer's Segment - Full Width */}
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6">Customer's Segment</h3>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-teal-700 text-white">
                      <th className="text-left px-4 py-3 text-sm font-medium">Description</th>
                      <th className="text-left px-4 py-3 text-sm font-medium">Score</th>
                      <th className="text-left px-4 py-3 text-sm font-medium">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-100">
                      <td className="px-4 py-3 text-sm">Strategic Importance</td>
                      <td className="px-4 py-3 text-sm">High</td>
                      <td className="px-4 py-3 text-sm">
                        Indicates alignment with the Groups long-term business goals. Assessed via contract value,
                        duration, and strategic role.
                      </td>
                    </tr>
                    <tr className="bg-gray-200">
                      <td className="px-4 py-3 text-sm">Digital Footprint</td>
                      <td className="px-4 py-3 text-sm">Very Good</td>
                      <td className="px-4 py-3 text-sm">
                        Complete financial and certification data from third party sources.
                      </td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="px-4 py-3 text-sm">External Rating</td>
                      <td className="px-4 py-3 text-sm">Very High</td>
                      <td className="px-4 py-3 text-sm"></td>
                    </tr>
                    <tr className="bg-gray-200">
                      <td className="px-4 py-3 text-sm">Independent Credit Rating</td>
                      <td className="px-4 py-3 text-sm">Low Risk - AAA</td>
                      <td className="px-4 py-3 text-sm">Sourced from Dunn & Bradstreet Report</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="px-4 py-3 text-sm">Entity Type</td>
                      <td className="px-4 py-3 text-sm">Public Limited</td>
                      <td className="px-4 py-3 text-sm"></td>
                    </tr>
                    <tr className="bg-gray-200">
                      <td className="px-4 py-3 text-sm">Years in Operation</td>
                      <td className="px-4 py-3 text-sm">15 Years</td>
                      <td className="px-4 py-3 text-sm"></td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="px-4 py-3 text-sm">Business History with SDG/SDPB</td>
                      <td className="px-4 py-3 text-sm">10 Years</td>
                      <td className="px-4 py-3 text-sm"></td>
                    </tr>
                    <tr className="bg-gray-200">
                      <td className="px-4 py-3 text-sm">Country Risk</td>
                      <td className="px-4 py-3 text-sm">12</td>
                      <td className="px-4 py-3 text-sm"></td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="px-4 py-3 text-sm">Contract frequency and volume trends</td>
                      <td className="px-4 py-3 text-sm">Stable / Growing</td>
                      <td className="px-4 py-3 text-sm"></td>
                    </tr>
                    <tr className="bg-gray-200">
                      <td className="px-4 py-3 text-sm">Default History</td>
                      <td className="px-4 py-3 text-sm">None</td>
                      <td className="px-4 py-3 text-sm"></td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="px-4 py-3 text-sm">Sanction</td>
                      <td className="px-4 py-3 text-sm">Pass</td>
                      <td className="px-4 py-3 text-sm"></td>
                    </tr>
                    <tr className="bg-gray-200">
                      <td className="px-4 py-3 text-sm">Governance</td>
                      <td className="px-4 py-3 text-sm">Yes</td>
                      <td className="px-4 py-3 text-sm"></td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="px-4 py-3 text-sm">Sustainability Goals</td>
                      <td className="px-4 py-3 text-sm">Not Applicable</td>
                      <td className="px-4 py-3 text-sm"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Credit Rating Calculation</h3>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* AI Profitability Analysis */}
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

              {/* AI Current Ratio Analysis */}
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

              {/* AI Gearing Analysis */}
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

              {/* Shareholder Funds / Net Worth */}
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

      {/* Order History Tab Content */}
      {activeTab === "order-history" && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Order History</h3>
          <p className="text-sm text-muted-foreground mb-6">Complete order history for Global Foods Ltd</p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Order ID</th>
                  <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Date</th>
                  <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Amount</th>
                  <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Quantity</th>
                  <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Product</th>
                  <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Status</th>
                  <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Delivery Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-3 py-3 text-sm font-medium">ORD-2024-001</td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-11-28</td>
                  <td className="px-3 py-3 text-sm font-medium">RM 600,000</td>
                  <td className="px-3 py-3 text-sm">500 MT</td>
                  <td className="px-3 py-3 text-sm">Palm Oil</td>
                  <td className="px-3 py-3">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Delivered</Badge>
                  </td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-12-05</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-3 py-3 text-sm font-medium">ORD-2024-002</td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-11-15</td>
                  <td className="px-3 py-3 text-sm font-medium">RM 712,500</td>
                  <td className="px-3 py-3 text-sm">750 MT</td>
                  <td className="px-3 py-3 text-sm">Coconut Oil</td>
                  <td className="px-3 py-3">
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 text-xs">In Transit</Badge>
                  </td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-12-20</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-3 py-3 text-sm font-medium">ORD-2024-003</td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-10-30</td>
                  <td className="px-3 py-3 text-sm font-medium">RM 420,000</td>
                  <td className="px-3 py-3 text-sm">300 MT</td>
                  <td className="px-3 py-3 text-sm">Soybean Oil</td>
                  <td className="px-3 py-3">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Delivered</Badge>
                  </td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-11-08</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-3 py-3 text-sm font-medium">ORD-2024-004</td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-10-15</td>
                  <td className="px-3 py-3 text-sm font-medium">RM 890,000</td>
                  <td className="px-3 py-3 text-sm">800 MT</td>
                  <td className="px-3 py-3 text-sm">Palm Oil</td>
                  <td className="px-3 py-3">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Delivered</Badge>
                  </td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-10-25</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-3 py-3 text-sm font-medium">ORD-2024-005</td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-09-28</td>
                  <td className="px-3 py-3 text-sm font-medium">RM 525,000</td>
                  <td className="px-3 py-3 text-sm">450 MT</td>
                  <td className="px-3 py-3 text-sm">Sunflower Oil</td>
                  <td className="px-3 py-3">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Delivered</Badge>
                  </td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-10-05</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-3 py-3 text-sm font-medium">ORD-2024-006</td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-09-10</td>
                  <td className="px-3 py-3 text-sm font-medium">RM 680,000</td>
                  <td className="px-3 py-3 text-sm">600 MT</td>
                  <td className="px-3 py-3 text-sm">Coconut Oil</td>
                  <td className="px-3 py-3">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Delivered</Badge>
                  </td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-09-20</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-3 py-3 text-sm font-medium">ORD-2024-007</td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-08-25</td>
                  <td className="px-3 py-3 text-sm font-medium">RM 445,000</td>
                  <td className="px-3 py-3 text-sm">350 MT</td>
                  <td className="px-3 py-3 text-sm">Palm Oil</td>
                  <td className="px-3 py-3">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Delivered</Badge>
                  </td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-09-02</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-3 py-3 text-sm font-medium">ORD-2024-008</td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-08-05</td>
                  <td className="px-3 py-3 text-sm font-medium">RM 795,000</td>
                  <td className="px-3 py-3 text-sm">700 MT</td>
                  <td className="px-3 py-3 text-sm">Soybean Oil</td>
                  <td className="px-3 py-3">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Delivered</Badge>
                  </td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-08-15</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-3 py-3 text-sm font-medium">ORD-2024-009</td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-07-20</td>
                  <td className="px-3 py-3 text-sm font-medium">RM 560,000</td>
                  <td className="px-3 py-3 text-sm">500 MT</td>
                  <td className="px-3 py-3 text-sm">Sunflower Oil</td>
                  <td className="px-3 py-3">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Delivered</Badge>
                  </td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-07-28</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-3 py-3 text-sm font-medium">ORD-2024-010</td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-07-05</td>
                  <td className="px-3 py-3 text-sm font-medium">RM 630,000</td>
                  <td className="px-3 py-3 text-sm">550 MT</td>
                  <td className="px-3 py-3 text-sm">Palm Oil</td>
                  <td className="px-3 py-3">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Delivered</Badge>
                  </td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-07-15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* Payment History Tab Content */}
      {activeTab === "payment-history" && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Payment History</h3>
          <p className="text-sm text-muted-foreground mb-6">Track all payments and transaction details</p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Payment ID</th>
                  <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Date</th>
                  <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Amount</th>
                  <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Method</th>
                  <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Reference</th>
                  <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Order ID</th>
                  <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-3 py-3 text-sm font-medium">PAY-2024-001</td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-11-28</td>
                  <td className="px-3 py-3 text-sm font-medium">RM 600,000</td>
                  <td className="px-3 py-3 text-sm">Wire Transfer</td>
                  <td className="px-3 py-3 text-sm">WT-2024-1128-001</td>
                  <td className="px-3 py-3 text-sm">ORD-2024-001</td>
                  <td className="px-3 py-3">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Completed</Badge>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-3 py-3 text-sm font-medium">PAY-2024-002</td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-10-30</td>
                  <td className="px-3 py-3 text-sm font-medium">RM 420,000</td>
                  <td className="px-3 py-3 text-sm">Letter of Credit</td>
                  <td className="px-3 py-3 text-sm">LC-2024-1030-002</td>
                  <td className="px-3 py-3 text-sm">ORD-2024-003</td>
                  <td className="px-3 py-3">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Completed</Badge>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-3 py-3 text-sm font-medium">PAY-2024-003</td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-10-15</td>
                  <td className="px-3 py-3 text-sm font-medium">RM 890,000</td>
                  <td className="px-3 py-3 text-sm">Wire Transfer</td>
                  <td className="px-3 py-3 text-sm">WT-2024-1015-003</td>
                  <td className="px-3 py-3 text-sm">ORD-2024-004</td>
                  <td className="px-3 py-3">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Completed</Badge>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-3 py-3 text-sm font-medium">PAY-2024-004</td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-09-28</td>
                  <td className="px-3 py-3 text-sm font-medium">RM 525,000</td>
                  <td className="px-3 py-3 text-sm">Bank Transfer</td>
                  <td className="px-3 py-3 text-sm">BT-2024-0928-004</td>
                  <td className="px-3 py-3 text-sm">ORD-2024-005</td>
                  <td className="px-3 py-3">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Completed</Badge>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-3 py-3 text-sm font-medium">PAY-2024-005</td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-09-10</td>
                  <td className="px-3 py-3 text-sm font-medium">RM 680,000</td>
                  <td className="px-3 py-3 text-sm">Letter of Credit</td>
                  <td className="px-3 py-3 text-sm">LC-2024-0910-005</td>
                  <td className="px-3 py-3 text-sm">ORD-2024-006</td>
                  <td className="px-3 py-3">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Completed</Badge>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-3 py-3 text-sm font-medium">PAY-2024-006</td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-08-25</td>
                  <td className="px-3 py-3 text-sm font-medium">RM 445,000</td>
                  <td className="px-3 py-3 text-sm">Wire Transfer</td>
                  <td className="px-3 py-3 text-sm">WT-2024-0825-006</td>
                  <td className="px-3 py-3 text-sm">ORD-2024-007</td>
                  <td className="px-3 py-3">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Completed</Badge>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-3 py-3 text-sm font-medium">PAY-2024-007</td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-08-05</td>
                  <td className="px-3 py-3 text-sm font-medium">RM 795,000</td>
                  <td className="px-3 py-3 text-sm">Bank Transfer</td>
                  <td className="px-3 py-3 text-sm">BT-2024-0805-007</td>
                  <td className="px-3 py-3 text-sm">ORD-2024-008</td>
                  <td className="px-3 py-3">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Completed</Badge>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-3 py-3 text-sm font-medium">PAY-2024-008</td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-07-20</td>
                  <td className="px-3 py-3 text-sm font-medium">RM 560,000</td>
                  <td className="px-3 py-3 text-sm">Wire Transfer</td>
                  <td className="px-3 py-3 text-sm">WT-2024-0720-008</td>
                  <td className="px-3 py-3 text-sm">ORD-2024-009</td>
                  <td className="px-3 py-3">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Completed</Badge>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-3 py-3 text-sm font-medium">PAY-2024-009</td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-07-05</td>
                  <td className="px-3 py-3 text-sm font-medium">RM 630,000</td>
                  <td className="px-3 py-3 text-sm">Letter of Credit</td>
                  <td className="px-3 py-3 text-sm">LC-2024-0705-009</td>
                  <td className="px-3 py-3 text-sm">ORD-2024-010</td>
                  <td className="px-3 py-3">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Completed</Badge>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-3 py-3 text-sm font-medium">PAY-2024-010</td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-06-18</td>
                  <td className="px-3 py-3 text-sm font-medium">RM 485,000</td>
                  <td className="px-3 py-3 text-sm">Bank Transfer</td>
                  <td className="px-3 py-3 text-sm">BT-2024-0618-010</td>
                  <td className="px-3 py-3 text-sm">ORD-2024-011</td>
                  <td className="px-3 py-3">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Completed</Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* Outstanding Invoices Tab Content */}
      {activeTab === "outstanding-invoices" && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Outstanding Invoices</h3>
          <p className="text-sm text-muted-foreground mb-6">Pending invoices for Global Foods Ltd</p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Invoice ID</th>
                  <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Customer</th>
                  <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Sales PIC</th>
                  <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Segment</th>
                  <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Amount</th>
                  <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Due Date</th>
                  <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Status</th>
                  <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Days Overdue</th>
                  <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Remark</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-3 py-3 text-sm font-medium">INV-2024-015</td>
                  <td className="px-3 py-3 text-sm">Global Foods Ltd</td>
                  <td className="px-3 py-3 text-sm">Ahmad Rahman</td>
                  <td className="px-3 py-3">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Diff</Badge>
                  </td>
                  <td className="px-3 py-3 text-sm font-medium">RM 450,000</td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-12-15</td>
                  <td className="px-3 py-3">
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100 text-xs">Overdue</Badge>
                  </td>
                  <td className="px-3 py-3 text-sm">18</td>
                  <td className="px-3 py-3 text-sm text-muted-foreground">First Reminder Sent</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-3 py-3 text-sm font-medium">INV-2024-018</td>
                  <td className="px-3 py-3 text-sm">Global Foods Ltd</td>
                  <td className="px-3 py-3 text-sm">Ahmad Rahman</td>
                  <td className="px-3 py-3">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Diff</Badge>
                  </td>
                  <td className="px-3 py-3 text-sm font-medium">RM 320,000</td>
                  <td className="px-3 py-3 text-sm whitespace-nowrap">2024-12-25</td>
                  <td className="px-3 py-3">
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 text-xs">Due Soon</Badge>
                  </td>
                  <td className="px-3 py-3 text-sm">-</td>
                  <td className="px-3 py-3 text-sm text-muted-foreground">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* Sanction & KYC Tab Content */}
      {activeTab === "sanction-kyc" && (
        <div className="space-y-6">
          {/* Top Section - Sanctions Screening and KYC Documentation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sanctions Screening */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Sanctions Screening</h3>
              <p className="text-sm text-muted-foreground mb-6">Automated sanctions and watchlist screening results</p>

              {/* Status Box */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-600"></div>
                    <span className="font-semibold">Clear</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Verified</Badge>
                </div>
                <p className="text-sm text-green-700">No sanctions matches found</p>
              </div>

              {/* Screening Details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Last Screening:</span>
                  <span className="font-medium">2024-11-28</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Screening Provider:</span>
                  <span className="font-medium">World-Check</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Risk Level:</span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Low</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Next Review:</span>
                  <span className="font-medium">2024-12-28</span>
                </div>
              </div>

              {/* Screening Coverage */}
              <div>
                <h4 className="text-sm font-semibold mb-3">Screening Coverage</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>OFAC SDN List</span>
                    <div className="flex items-center gap-1 text-green-600">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-xs font-medium">Clear</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>EU Sanctions</span>
                    <div className="flex items-center gap-1 text-green-600">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-xs font-medium">Clear</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>UN Sanctions</span>
                    <div className="flex items-center gap-1 text-green-600">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-xs font-medium">Clear</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>PEP Database</span>
                    <div className="flex items-center gap-1 text-green-600">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-xs font-medium">Clear</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* KYC Documentation */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">KYC Documentation</h3>
              <p className="text-sm text-muted-foreground mb-6">Know Your Customer compliance status</p>

              {/* Status Box */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-600"></div>
                    <span className="font-semibold">Complete</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Approved</Badge>
                </div>
                <p className="text-sm text-green-700">All required documents verified</p>
              </div>

              {/* Required Documents */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-3">Required Documents</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Certificate of Incorporation</span>
                    <div className="flex items-center gap-1 text-green-600">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Business License</span>
                    <div className="flex items-center gap-1 text-green-600">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Financial Statements</span>
                    <div className="flex items-center gap-1 text-green-600">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Beneficial Ownership</span>
                    <div className="flex items-center gap-1 text-green-600">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Director Identification</span>
                    <div className="flex items-center gap-1 text-green-600">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* KYC Status Details */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">KYC Status:</span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Approved</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Approval Date:</span>
                  <span className="font-medium">2024-01-15</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Next Review:</span>
                  <span className="font-medium">2025-01-15</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Risk Rating:</span>
                  <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 text-xs">Medium</Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* Compliance History Table */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Compliance History</h3>
            <p className="text-sm text-muted-foreground mb-6">Historical compliance checks and updates</p>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Date</th>
                    <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Type</th>
                    <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Status</th>
                    <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Performed By</th>
                    <th className="text-left px-3 py-3 text-xs font-medium text-muted-foreground">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-3 py-3 text-sm whitespace-nowrap">2024-11-28</td>
                    <td className="px-3 py-3 text-sm">Sanctions Screening</td>
                    <td className="px-3 py-3">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Clear</Badge>
                    </td>
                    <td className="px-3 py-3 text-sm">System Automated</td>
                    <td className="px-3 py-3 text-sm text-muted-foreground">Monthly automated screening</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-3 py-3 text-sm whitespace-nowrap">2024-10-28</td>
                    <td className="px-3 py-3 text-sm">Sanctions Screening</td>
                    <td className="px-3 py-3">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Clear</Badge>
                    </td>
                    <td className="px-3 py-3 text-sm">System Automated</td>
                    <td className="px-3 py-3 text-sm text-muted-foreground">Monthly automated screening</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-3 py-3 text-sm whitespace-nowrap">2024-07-15</td>
                    <td className="px-3 py-3 text-sm">KYC Review</td>
                    <td className="px-3 py-3">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Approved</Badge>
                    </td>
                    <td className="px-3 py-3 text-sm">Sarah Johnson</td>
                    <td className="px-3 py-3 text-sm text-muted-foreground">Semi-annual KYC review completed</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-3 py-3 text-sm whitespace-nowrap">2024-01-15</td>
                    <td className="px-3 py-3 text-sm">Initial KYC</td>
                    <td className="px-3 py-3">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">Approved</Badge>
                    </td>
                    <td className="px-3 py-3 text-sm">Michael Chen</td>
                    <td className="px-3 py-3 text-sm text-muted-foreground">Initial customer onboarding</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}

      {activeTab === "credit-details" && (
        <div>
          {/* Placeholder for Credit Details Tab Content */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Credit Details</h3>
            <p className="text-sm text-muted-foreground mb-6">Details about the customer's credit</p>
            {/* Add actual credit details here */}
          </Card>
        </div>
      )}

      {activeTab === "recent-activity" && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
          <p className="text-sm text-muted-foreground mb-6">Latest orders and payments</p>

          <div className="space-y-4">
            {/* Order 1 */}
            <div className="flex items-start justify-between p-4 rounded-lg border">
              <div>
                <div className="font-semibold mb-1">ORD-2024-001</div>
                <div className="text-sm text-muted-foreground mb-2">2024-11-28</div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Delivered</Badge>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold">RM 600,000</div>
              </div>
            </div>

            {/* Order 2 */}
            <div className="flex items-start justify-between p-4 rounded-lg border">
              <div>
                <div className="font-semibold mb-1">ORD-2024-002</div>
                <div className="text-sm text-muted-foreground mb-2">2024-11-15</div>
                <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">In Transit</Badge>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold">RM 712,500</div>
                <div className="text-xs text-muted-foreground">750 MT</div>
              </div>
            </div>

            {/* Order 3 */}
            <div className="flex items-start justify-between p-4 rounded-lg border">
              <div>
                <div className="font-semibold mb-1">ORD-2024-003</div>
                <div className="text-sm text-muted-foreground mb-2">2024-10-30</div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Delivered</Badge>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold">RM 420,000</div>
                <div className="text-xs text-muted-foreground">300 MT</div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
