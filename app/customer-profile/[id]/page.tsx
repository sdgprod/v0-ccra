"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
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
  Shield,
  Activity,
  LayoutDashboard,
  BarChart3,
} from "lucide-react"
import { useParams } from "next/navigation"
import Link from "next/link"

// Customer data mapping
const customerData: Record<string, any> = {
  "1": {
    name: "Golden Dragon Trading Pte Ltd",
    country: "Singapore",
    type: "MNC",
    tier: "1",
    salesPIC: "Bruce Lee",
    creditScore: 785,
    creditLimit: 8500000,
    outstanding: 6200000,
    utilization: 73,
    riskRating: "Low",
    email: "contact@goldendragon.sg",
    phone: "+65-6234-5678",
    paymentTerms: "NET 30",
    accountManager: "Sarah Chen",
    totalOrderValue: 5200000,
    avgOrder: 650000,
  },
  "2": {
    name: "Sunrise Foods Malaysia Sdn Bhd",
    country: "Malaysia",
    type: "Local",
    tier: "2",
    salesPIC: "Bruce Lee",
    creditScore: 650,
    creditLimit: 12000000,
    outstanding: 9800000,
    utilization: 82,
    riskRating: "Medium",
    email: "procurement@sunrisefoods.my",
    phone: "+60-3-2161-8888",
    paymentTerms: "NET 45",
    accountManager: "Sarah Chen",
    totalOrderValue: 7800000,
    avgOrder: 975000,
  },
  "3": {
    name: "Pacific Oil Industries Ltd",
    country: "Thailand",
    type: "MNC",
    tier: "1",
    salesPIC: "Bruce Lee",
    creditScore: 820,
    creditLimit: 15000000,
    outstanding: 11200000,
    utilization: 75,
    riskRating: "Low",
    email: "info@pacificoil.th",
    phone: "+66-2-123-4567",
    paymentTerms: "NET 30",
    accountManager: "Sarah Chen",
    totalOrderValue: 9200000,
    avgOrder: 1150000,
  },
  "4": {
    name: "Metro Commodities Vietnam Co",
    country: "Vietnam",
    type: "Local",
    tier: "3",
    salesPIC: "Bruce Lee",
    creditScore: 580,
    creditLimit: 6500000,
    outstanding: 5800000,
    utilization: 89,
    riskRating: "High",
    email: "sales@metrocommodities.vn",
    phone: "+84-28-3456-7890",
    paymentTerms: "NET 60",
    accountManager: "Sarah Chen",
    totalOrderValue: 4200000,
    avgOrder: 525000,
  },
  "5": {
    name: "Royal Palm Industries Pte Ltd",
    country: "Singapore",
    type: "MNC",
    tier: "1",
    salesPIC: "Bruce Lee",
    creditScore: 795,
    creditLimit: 20000000,
    outstanding: 14500000,
    utilization: 73,
    riskRating: "Low",
    email: "contact@royalpalm.sg",
    phone: "+65-6789-0123",
    paymentTerms: "NET 30",
    accountManager: "Sarah Chen",
    totalOrderValue: 12500000,
    avgOrder: 1562500,
  },
  "6": {
    name: "Dragon Oil Refinery Co Ltd",
    country: "Malaysia",
    type: "Local",
    tier: "2",
    salesPIC: "Bruce Lee",
    creditScore: 520,
    creditLimit: 18000000,
    outstanding: 16200000,
    utilization: 90,
    riskRating: "High",
    email: "info@dragonoil.my",
    phone: "+60-3-8765-4321",
    paymentTerms: "NET 45",
    accountManager: "Sarah Chen",
    totalOrderValue: 13800000,
    avgOrder: 1725000,
  },
  "7": {
    name: "Southeast Trading House Ltd",
    country: "Indonesia",
    type: "Local",
    tier: "2",
    salesPIC: "Bruce Lee",
    creditScore: 680,
    creditLimit: 9500000,
    outstanding: 6800000,
    utilization: 72,
    riskRating: "Medium",
    email: "trading@southeast.id",
    phone: "+62-21-5678-9012",
    paymentTerms: "NET 30",
    accountManager: "Sarah Chen",
    totalOrderValue: 5600000,
    avgOrder: 700000,
  },
  "8": {
    name: "Phoenix Palm Solutions Ltd",
    country: "Philippines",
    type: "Local",
    tier: "3",
    salesPIC: "Bruce Lee",
    creditScore: 625,
    creditLimit: 7200000,
    outstanding: 5900000,
    utilization: 82,
    riskRating: "Medium",
    email: "solutions@phoenixpalm.ph",
    phone: "+63-2-8901-2345",
    paymentTerms: "NET 45",
    accountManager: "Sarah Chen",
    totalOrderValue: 4800000,
    avgOrder: 600000,
  },
  "9": {
    name: "Emerald Foods Trading Pte Ltd",
    country: "Singapore",
    type: "MNC",
    tier: "1",
    salesPIC: "Bruce Lee",
    creditScore: 750,
    creditLimit: 11000000,
    outstanding: 7800000,
    utilization: 71,
    riskRating: "Low",
    email: "contact@emeraldfoods.sg",
    phone: "+65-6345-6789",
    paymentTerms: "NET 30",
    accountManager: "Sarah Chen",
    totalOrderValue: 6400000,
    avgOrder: 800000,
  },
}

export default function CustomerProfilePage() {
  const params = useParams()
  const customerId = params.id as string
  const customer = customerData[customerId] || customerData["1"]

  const [activeTab, setActiveTab] = useState("overview")

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "credit-details", label: "Credit Details" },
    { id: "order-history", label: "Order History" },
    { id: "payment-history", label: "Payment History" },
    { id: "outstanding-invoices", label: "Outstanding Invoices" },
    { id: "sanction-kyc", label: "Sanction & KYC" },
    { id: "recent-activity", label: "Recent Activity" },
  ]

  const generateOrderHistory = () => {
    const orders = []
    const numOrders = customer.riskRating === "Low" ? 12 : customer.riskRating === "Medium" ? 10 : 8
    const baseDate = new Date()

    for (let i = 0; i < numOrders; i++) {
      const orderDate = new Date(baseDate)
      orderDate.setDate(orderDate.getDate() - i * 15)

      orders.push({
        id: `ORD-${String(1000 + i).padStart(4, "0")}`,
        date: orderDate.toLocaleDateString("en-GB"),
        product: i % 3 === 0 ? "Crude Palm Oil" : i % 3 === 1 ? "Refined Palm Oil" : "Palm Kernel Oil",
        quantity: `${(Math.random() * 500 + 100).toFixed(0)} MT`,
        amount: customer.avgOrder * (0.8 + Math.random() * 0.4),
        status: i === 0 ? "Processing" : i === 1 ? "Shipped" : "Delivered",
      })
    }
    return orders
  }

  const generatePaymentHistory = () => {
    const payments = []
    const numPayments = customer.riskRating === "Low" ? 15 : customer.riskRating === "Medium" ? 12 : 10
    const baseDate = new Date()

    for (let i = 0; i < numPayments; i++) {
      const paymentDate = new Date(baseDate)
      paymentDate.setDate(paymentDate.getDate() - i * 12)

      const isLate = customer.riskRating === "High" && i % 3 === 0
      const paymentStatus = isLate ? "Late" : "On Time"

      payments.push({
        id: `PAY-${String(2000 + i).padStart(4, "0")}`,
        invoiceId: `INV-${String(3000 + i).padStart(4, "0")}`,
        date: paymentDate.toLocaleDateString("en-GB"),
        amount: customer.avgOrder * (0.7 + Math.random() * 0.6),
        method: i % 2 === 0 ? "Bank Transfer" : "Letter of Credit",
        status: paymentStatus,
        daysToPayment: isLate ? Math.floor(Math.random() * 15 + 35) : Math.floor(Math.random() * 25 + 5),
      })
    }
    return payments
  }

  const generateOutstandingInvoices = () => {
    const invoices = []
    const numInvoices = customer.riskRating === "High" ? 8 : customer.riskRating === "Medium" ? 5 : 3
    const baseDate = new Date()
    let totalOutstanding = 0

    for (let i = 0; i < numInvoices; i++) {
      const invoiceDate = new Date(baseDate)
      invoiceDate.setDate(invoiceDate.getDate() - (i * 20 + 10))

      const dueDate = new Date(invoiceDate)
      const paymentTermDays = customer.paymentTerms === "NET 30" ? 30 : customer.paymentTerms === "NET 45" ? 45 : 60
      dueDate.setDate(dueDate.getDate() + paymentTermDays)

      const isOverdue = dueDate < baseDate
      const amount = (customer.outstanding / numInvoices) * (0.8 + Math.random() * 0.4)
      totalOutstanding += amount

      const daysOverdue = isOverdue ? Math.floor((baseDate.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24)) : 0

      invoices.push({
        id: `INV-${String(3000 + i).padStart(4, "0")}`,
        date: invoiceDate.toLocaleDateString("en-GB"),
        dueDate: dueDate.toLocaleDateString("en-GB"),
        amount: amount,
        status: isOverdue ? "Overdue" : "Pending",
        daysOverdue: daysOverdue,
      })
    }
    return invoices
  }

  const orderHistory = generateOrderHistory()
  const paymentHistory = generatePaymentHistory()
  const outstandingInvoices = generateOutstandingInvoices()

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{customer.name}</h1>
          <p className="text-sm text-muted-foreground">Customer Profile</p>
        </div>
        <Link href="/sales-profile">
          <Button className="gap-2">
            <LayoutDashboard className="h-4 w-4" />
            My Dashboard
          </Button>
        </Link>
      </div>

      <Card className="p-4 bg-gray-50">
        <div className="grid grid-cols-5 gap-6">
          <div>
            <div className="text-xs text-muted-foreground mb-1">Customer</div>
            <div className="font-semibold">{customer.name}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">Country</div>
            <div className="font-semibold">{customer.country}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">Type</div>
            <div className="font-semibold">{customer.type}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">Tier</div>
            <div className="font-semibold">{customer.tier}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">Sales PIC</div>
            <div className="font-semibold">{customer.salesPIC}</div>
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
          <div className="text-3xl font-bold mb-2">{customer.utilization}%</div>
          <Progress value={customer.utilization} className="h-2 mb-2" />
          <div className="text-xs text-muted-foreground">
            MYR {customer.outstanding.toLocaleString()} of MYR {customer.creditLimit.toLocaleString()}
          </div>
        </Card>

        {/* Total Order Value */}
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="text-sm text-muted-foreground">Total Order Value</div>
            <Package className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="text-3xl font-bold mb-2">MYR {customer.totalOrderValue.toLocaleString()}</div>
          <div className="text-xs text-muted-foreground">Last 6 months</div>
        </Card>

        {/* Average Order */}
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="text-sm text-muted-foreground">Average Order</div>
            <TrendingUp className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="text-3xl font-bold mb-2">MYR {customer.avgOrder.toLocaleString()}</div>
          <div className="text-xs text-muted-foreground">Per order</div>
        </Card>

        {/* Risk Rating */}
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="text-sm text-muted-foreground">Risk Rating</div>
            <User className="h-5 w-5 text-muted-foreground" />
          </div>
          <Badge
            className={`mb-2 ${
              customer.riskRating === "Low"
                ? "bg-green-100 text-green-800 hover:bg-green-100"
                : customer.riskRating === "Medium"
                  ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                  : "bg-red-100 text-red-800 hover:bg-red-100"
            }`}
          >
            {customer.riskRating}
          </Badge>
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
            <div className="text-3xl font-bold text-green-600 mb-1">
              MYR {(customer.creditLimit * 0.5).toLocaleString()}
            </div>
            <div className="text-xs text-muted-foreground">50% of current limit</div>
          </Card>

          {/* New Credit Limit */}
          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-2">New Credit Limit</div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg font-semibold text-muted-foreground">
                MYR {customer.creditLimit.toLocaleString()}
              </span>
              <span className="text-muted-foreground">→</span>
            </div>
            <div className="text-2xl font-bold text-green-600">MYR {(customer.creditLimit * 1.5).toLocaleString()}</div>
          </Card>

          {/* Overall Score */}
          <Card className="p-6 bg-purple-50 border-purple-200">
            <div className="text-sm text-muted-foreground mb-2">Overall Score</div>
            <div className="text-3xl font-bold text-purple-600 mb-1">{Math.floor(customer.creditScore / 10)}/100</div>
            <div className="text-xs text-muted-foreground">
              {customer.creditScore >= 750 ? "Excellent" : customer.creditScore >= 650 ? "Good" : "Fair"} rating
            </div>
          </Card>

          {/* Key Positive Factors */}
          <Card className="p-6">
            <div className="text-sm text-muted-foreground mb-3">Key Positive Factors</div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-medium">Payment History:</span>
                  <span className="text-muted-foreground ml-1">
                    {customer.riskRating === "Low" ? "Perfect" : "Good"}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-medium">Utilization:</span>
                  <span className="text-muted-foreground ml-1">{customer.utilization}%</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-medium">Order Growth:</span>
                  <span className="text-muted-foreground ml-1">{customer.riskRating === "Low" ? "61%" : "45%"}</span>
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
                    <div className="font-medium">{customer.name}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Location</div>
                    <div className="font-medium">{customer.country}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Account Manager</div>
                    <div className="font-medium">{customer.accountManager}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Email</div>
                    <div className="font-medium">{customer.email}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Phone</div>
                    <div className="font-medium">{customer.phone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Payment Terms</div>
                    <div className="font-medium">{customer.paymentTerms}</div>
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
                      <td className="px-4 py-3 text-sm">
                        {customer.tier === "1" ? "High" : customer.tier === "2" ? "Medium" : "Low"}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        Indicates alignment with the Groups long-term business goals. Assessed via contract value,
                        duration, and strategic role.
                      </td>
                    </tr>
                    <tr className="bg-gray-200">
                      <td className="px-4 py-3 text-sm">Digital Footprint</td>
                      <td className="px-4 py-3 text-sm">{customer.type === "MNC" ? "Very Good" : "Good"}</td>
                      <td className="px-4 py-3 text-sm">
                        Complete financial and certification data from third party sources.
                      </td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="px-4 py-3 text-sm">External Rating</td>
                      <td className="px-4 py-3 text-sm">
                        {customer.creditScore >= 750 ? "Very High" : customer.creditScore >= 650 ? "High" : "Medium"}
                      </td>
                      <td className="px-4 py-3 text-sm"></td>
                    </tr>
                    <tr className="bg-gray-200">
                      <td className="px-4 py-3 text-sm">Independent Credit Rating</td>
                      <td className="px-4 py-3 text-sm">
                        {customer.riskRating === "Low"
                          ? "Low Risk - AAA"
                          : customer.riskRating === "Medium"
                            ? "Medium Risk - BBB"
                            : "High Risk - BB"}
                      </td>
                      <td className="px-4 py-3 text-sm">Sourced from Dunn & Bradstreet Report</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="px-4 py-3 text-sm">Entity Type</td>
                      <td className="px-4 py-3 text-sm">
                        {customer.type === "MNC" ? "Public Limited" : "Private Limited"}
                      </td>
                      <td className="px-4 py-3 text-sm"></td>
                    </tr>
                    <tr className="bg-gray-200">
                      <td className="px-4 py-3 text-sm">Years in Operation</td>
                      <td className="px-4 py-3 text-sm">
                        {customer.tier === "1" ? "15 Years" : customer.tier === "2" ? "10 Years" : "5 Years"}
                      </td>
                      <td className="px-4 py-3 text-sm"></td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="px-4 py-3 text-sm">Business History with SDG/SDPB</td>
                      <td className="px-4 py-3 text-sm">
                        {customer.tier === "1" ? "10 Years" : customer.tier === "2" ? "7 Years" : "3 Years"}
                      </td>
                      <td className="px-4 py-3 text-sm"></td>
                    </tr>
                    <tr className="bg-gray-200">
                      <td className="px-4 py-3 text-sm">Country Risk</td>
                      <td className="px-4 py-3 text-sm">
                        {customer.country === "Singapore" ? "12" : customer.country === "Malaysia" ? "15" : "18"}
                      </td>
                      <td className="px-4 py-3 text-sm"></td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="px-4 py-3 text-sm">Contract frequency and volume trends</td>
                      <td className="px-4 py-3 text-sm">
                        {customer.riskRating === "Low" ? "Stable / Growing" : "Stable"}
                      </td>
                      <td className="px-4 py-3 text-sm"></td>
                    </tr>
                    <tr className="bg-gray-200">
                      <td className="px-4 py-3 text-sm">Default History</td>
                      <td className="px-4 py-3 text-sm">{customer.riskRating === "High" ? "Minor" : "None"}</td>
                      <td className="px-4 py-3 text-sm"></td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="px-4 py-3 text-sm">Sanction</td>
                      <td className="px-4 py-3 text-sm">Pass</td>
                      <td className="px-4 py-3 text-sm"></td>
                    </tr>
                    <tr className="bg-gray-200">
                      <td className="px-4 py-3 text-sm">Governance</td>
                      <td className="px-4 py-3 text-sm">{customer.type === "MNC" ? "Yes" : "Partial"}</td>
                      <td className="px-4 py-3 text-sm"></td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="px-4 py-3 text-sm">Sustainability Goals</td>
                      <td className="px-4 py-3 text-sm">{customer.tier === "1" ? "Yes" : "Not Applicable"}</td>
                      <td className="px-4 py-3 text-sm"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      )}

      {activeTab === "credit-details" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-6">
              <div className="text-sm text-muted-foreground mb-2">Credit Score</div>
              <div className="text-3xl font-bold mb-2">{customer.creditScore}</div>
              <Badge
                className={`${
                  customer.creditScore >= 750
                    ? "bg-green-100 text-green-800 hover:bg-green-100"
                    : customer.creditScore >= 650
                      ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                      : "bg-red-100 text-red-800 hover:bg-red-100"
                }`}
              >
                {customer.creditScore >= 750 ? "Excellent" : customer.creditScore >= 650 ? "Good" : "Fair"}
              </Badge>
            </Card>

            <Card className="p-6">
              <div className="text-sm text-muted-foreground mb-2">Credit Limit</div>
              <div className="text-3xl font-bold mb-2">MYR {(customer.creditLimit / 1000000).toFixed(1)}M</div>
              <div className="text-xs text-muted-foreground">Approved limit</div>
            </Card>

            <Card className="p-6">
              <div className="text-sm text-muted-foreground mb-2">Available Credit</div>
              <div className="text-3xl font-bold mb-2">
                MYR {((customer.creditLimit - customer.outstanding) / 1000000).toFixed(1)}M
              </div>
              <div className="text-xs text-muted-foreground">
                {Math.round((1 - customer.utilization / 100) * 100)}% available
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Credit Terms</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Payment Terms</div>
                <div className="font-medium">{customer.paymentTerms}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Credit Period</div>
                <div className="font-medium">
                  {customer.paymentTerms === "NET 30"
                    ? "30 days"
                    : customer.paymentTerms === "NET 45"
                      ? "45 days"
                      : "60 days"}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Interest Rate</div>
                <div className="font-medium">
                  {customer.riskRating === "Low" ? "2.5%" : customer.riskRating === "Medium" ? "3.5%" : "4.5%"} p.a.
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Late Payment Fee</div>
                <div className="font-medium">1.5% per month</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Credit History</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <div className="font-medium">Credit Limit Increase</div>
                  <div className="text-sm text-muted-foreground">
                    MYR {(customer.creditLimit * 0.67).toLocaleString()} → MYR {customer.creditLimit.toLocaleString()}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">15/06/2024</div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <div className="font-medium">Credit Review Completed</div>
                  <div className="text-sm text-muted-foreground">Annual credit assessment</div>
                </div>
                <div className="text-sm text-muted-foreground">01/03/2024</div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <div className="font-medium">Initial Credit Approval</div>
                  <div className="text-sm text-muted-foreground">
                    MYR {(customer.creditLimit * 0.5).toLocaleString()}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {customer.tier === "1" ? "10/01/2020" : customer.tier === "2" ? "15/03/2021" : "20/06/2022"}
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Credit Utilization Trend</h3>
            <div className="space-y-3">
              {[
                { month: "October 2025", utilization: customer.utilization },
                { month: "September 2025", utilization: Math.max(customer.utilization - 5, 50) },
                { month: "August 2025", utilization: Math.max(customer.utilization - 8, 45) },
                { month: "July 2025", utilization: Math.max(customer.utilization - 12, 40) },
                { month: "June 2025", utilization: Math.max(customer.utilization - 15, 35) },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-32 text-sm text-muted-foreground">{item.month}</div>
                  <div className="flex-1">
                    <Progress value={item.utilization} className="h-3" />
                  </div>
                  <div className="w-16 text-sm font-medium text-right">{item.utilization}%</div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-6">Credit Rating Calculation</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* AI Profitability Analysis */}
              <Card className="p-6 border-2">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <h4 className="font-semibold text-sm">1. AI Profitability Analysis</h4>
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Profit Before Tax (RM)</div>
                    <div className="p-2 bg-gray-50 rounded text-sm font-medium">
                      {(() => {
                        const profitBeforeTax =
                          customer.riskRating === "Low"
                            ? Math.floor(customer.totalOrderValue * 0.15)
                            : customer.riskRating === "Medium"
                              ? Math.floor(customer.totalOrderValue * 0.1)
                              : Math.floor(customer.totalOrderValue * 0.05)
                        return profitBeforeTax.toLocaleString()
                      })()}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Turnover (RM)</div>
                    <div className="p-2 bg-gray-50 rounded text-sm font-medium">
                      {customer.totalOrderValue.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-green-50 rounded-lg mb-3">
                  <div className="text-xs text-muted-foreground mb-1">AI Profitability Results</div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-xs text-muted-foreground">Assessment (%):</span>
                    <span className="text-lg font-bold text-green-600">
                      {(() => {
                        const profitBeforeTax =
                          customer.riskRating === "Low"
                            ? customer.totalOrderValue * 0.15
                            : customer.riskRating === "Medium"
                              ? customer.totalOrderValue * 0.1
                              : customer.totalOrderValue * 0.05
                        return ((profitBeforeTax / customer.totalOrderValue) * 100).toFixed(2)
                      })()}%
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-muted-foreground">Score:</span>
                    <span className="text-2xl font-bold text-green-600">
                      {customer.riskRating === "Low" ? 80 : customer.riskRating === "Medium" ? 65 : 45}
                    </span>
                  </div>
                  <Progress
                    value={customer.riskRating === "Low" ? 80 : customer.riskRating === "Medium" ? 65 : 45}
                    className="h-2 mt-2 bg-green-200 [&>div]:bg-green-600"
                  />
                </div>

                <div className="text-xs text-muted-foreground italic">
                  Formula: (Profit Before Tax ÷ Turnover) × 100
                </div>
              </Card>

              {/* AI Current Ratio Analysis */}
              <Card className="p-6 border-2">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                  <h4 className="font-semibold text-sm">2. AI Current Ratio Analysis</h4>
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Current Assets (RM)</div>
                    <div className="p-2 bg-gray-50 rounded text-sm font-medium">
                      {(() => {
                        const currentAssets =
                          customer.riskRating === "Low"
                            ? Math.floor(customer.creditLimit * 1.8)
                            : customer.riskRating === "Medium"
                              ? Math.floor(customer.creditLimit * 1.5)
                              : Math.floor(customer.creditLimit * 1.2)
                        return currentAssets.toLocaleString()
                      })()}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Current Liabilities (RM)</div>
                    <div className="p-2 bg-gray-50 rounded text-sm font-medium">
                      {(() => {
                        const currentAssets =
                          customer.riskRating === "Low"
                            ? customer.creditLimit * 1.8
                            : customer.riskRating === "Medium"
                              ? customer.creditLimit * 1.5
                              : customer.creditLimit * 1.2
                        const currentLiabilities =
                          customer.riskRating === "Low"
                            ? Math.floor(currentAssets / 2.1)
                            : customer.riskRating === "Medium"
                              ? Math.floor(currentAssets / 1.6)
                              : Math.floor(currentAssets / 1.3)
                        return currentLiabilities.toLocaleString()
                      })()}
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 rounded-lg mb-3">
                  <div className="text-xs text-muted-foreground mb-1">AI Current Ratio Results</div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-xs text-muted-foreground">Assessment (Ratio):</span>
                    <span className="text-lg font-bold text-blue-600">
                      {customer.riskRating === "Low" ? "2.08" : customer.riskRating === "Medium" ? "1.58" : "1.28"}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-muted-foreground">Score:</span>
                    <span className="text-2xl font-bold text-blue-600">
                      {customer.riskRating === "Low" ? 90 : customer.riskRating === "Medium" ? 70 : 50}
                    </span>
                  </div>
                  <Progress
                    value={customer.riskRating === "Low" ? 90 : customer.riskRating === "Medium" ? 70 : 50}
                    className="h-2 mt-2 bg-blue-200 [&>div]:bg-blue-600"
                  />
                </div>

                <div className="text-xs text-muted-foreground italic">
                  Formula: Current Assets ÷ Current Liabilities
                </div>
              </Card>

              {/* AI Gearing Analysis */}
              <Card className="p-6 border-2">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="h-5 w-5 text-purple-600" />
                  <h4 className="font-semibold text-sm">3. AI Gearing Analysis</h4>
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Total Liability (RM)</div>
                    <div className="p-2 bg-gray-50 rounded text-sm font-medium">
                      {(() => {
                        const shareholderFund =
                          customer.riskRating === "Low"
                            ? customer.creditLimit * 8.3
                            : customer.riskRating === "Medium"
                              ? customer.creditLimit * 5.5
                              : customer.creditLimit * 3.2
                        const totalLiability =
                          customer.riskRating === "Low"
                            ? Math.floor(shareholderFund * 0.35)
                            : customer.riskRating === "Medium"
                              ? Math.floor(shareholderFund * 0.55)
                              : Math.floor(shareholderFund * 0.75)
                        return totalLiability.toLocaleString()
                      })()}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Shareholder's Fund (RM)</div>
                    <div className="p-2 bg-gray-50 rounded text-sm font-medium">
                      {(() => {
                        const shareholderFund =
                          customer.riskRating === "Low"
                            ? Math.floor(customer.creditLimit * 8.3)
                            : customer.riskRating === "Medium"
                              ? Math.floor(customer.creditLimit * 5.5)
                              : Math.floor(customer.creditLimit * 3.2)
                        return shareholderFund.toLocaleString()
                      })()}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Intangible Assets (RM)</div>
                    <div className="p-2 bg-gray-50 rounded text-sm font-medium">0</div>
                  </div>
                </div>

                <div className="p-3 bg-purple-50 rounded-lg mb-3">
                  <div className="text-xs text-muted-foreground mb-1">AI Gearing Results</div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-xs text-muted-foreground">Assessment (Ratio):</span>
                    <span className="text-lg font-bold text-purple-600">
                      {customer.riskRating === "Low" ? "0.35" : customer.riskRating === "Medium" ? "0.55" : "0.75"}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-muted-foreground">Score:</span>
                    <span className="text-2xl font-bold text-purple-600">
                      {customer.riskRating === "Low" ? 90 : customer.riskRating === "Medium" ? 70 : 50}
                    </span>
                  </div>
                  <Progress
                    value={customer.riskRating === "Low" ? 90 : customer.riskRating === "Medium" ? 70 : 50}
                    className="h-2 mt-2 bg-purple-200 [&>div]:bg-purple-600"
                  />
                </div>

                <div className="text-xs text-muted-foreground italic">
                  Formula: Total Liability ÷ (Shareholder's Fund - Intangible Assets)
                </div>
              </Card>

              {/* Shareholder Funds / Net Worth */}
              <Card className="p-6 border-2">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-orange-600" />
                  <h4 className="font-semibold text-sm">4. Shareholder Funds / Net Worth</h4>
                </div>

                <div className="flex-1 flex items-center justify-center py-8">
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground mb-2">Net Worth Assessment</div>
                    <div className="text-3xl font-bold text-orange-600 mb-1">
                      {(() => {
                        const shareholderFund =
                          customer.riskRating === "Low"
                            ? customer.creditLimit * 8.3
                            : customer.riskRating === "Medium"
                              ? customer.creditLimit * 5.5
                              : customer.creditLimit * 3.2
                        return shareholderFund.toLocaleString(undefined, { maximumFractionDigits: 0 })
                      })()}
                    </div>
                    <div className="text-xs text-muted-foreground mb-4">MYR</div>
                  </div>
                </div>

                <div className="p-3 bg-orange-50 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">Net Worth Results</div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-xs text-muted-foreground">Assessment (RM):</span>
                    <span className="text-lg font-bold text-orange-600">
                      {(() => {
                        const shareholderFund =
                          customer.riskRating === "Low"
                            ? customer.creditLimit * 8.3
                            : customer.riskRating === "Medium"
                              ? customer.creditLimit * 5.5
                              : customer.creditLimit * 3.2
                        return shareholderFund.toLocaleString(undefined, { maximumFractionDigits: 2 })
                      })()}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-muted-foreground">Score:</span>
                    <span className="text-2xl font-bold text-orange-600">
                      {customer.tier === "1" ? 10 : customer.tier === "2" ? 8 : 6}
                    </span>
                  </div>
                  <Progress
                    value={(customer.tier === "1" ? 10 : customer.tier === "2" ? 8 : 6) * 10}
                    className="h-2 mt-2 bg-orange-200 [&>div]:bg-orange-600"
                  />
                </div>
              </Card>
            </div>
          </Card>
        </div>
      )}

      {activeTab === "order-history" && (
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold">Order History</h3>
              <p className="text-sm text-muted-foreground">Complete history of orders placed by this customer</p>
            </div>
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">{orderHistory.length} Orders</Badge>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Order ID</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Product</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Quantity</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Amount</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {orderHistory.map((order, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm font-medium">{order.id}</td>
                    <td className="py-3 px-4 text-sm">{order.date}</td>
                    <td className="py-3 px-4 text-sm">{order.product}</td>
                    <td className="py-3 px-4 text-sm">{order.quantity}</td>
                    <td className="py-3 px-4 text-sm text-right font-medium">
                      MYR {order.amount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </td>
                    <td className="py-3 px-4">
                      <Badge
                        className={`${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : order.status === "Shipped"
                              ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                              : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                        }`}
                      >
                        {order.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {activeTab === "payment-history" && (
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold">Payment History</h3>
              <p className="text-sm text-muted-foreground">Track record of all payments received from this customer</p>
            </div>
            <div className="flex gap-2">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                {paymentHistory.filter((p) => p.status === "On Time").length} On Time
              </Badge>
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                {paymentHistory.filter((p) => p.status === "Late").length} Late
              </Badge>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Payment ID</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Invoice ID</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Amount</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Method</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Days to Pay</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.map((payment, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm font-medium">{payment.id}</td>
                    <td className="py-3 px-4 text-sm">{payment.invoiceId}</td>
                    <td className="py-3 px-4 text-sm">{payment.date}</td>
                    <td className="py-3 px-4 text-sm text-right font-medium">
                      MYR {payment.amount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </td>
                    <td className="py-3 px-4 text-sm">{payment.method}</td>
                    <td className="py-3 px-4 text-sm text-center">{payment.daysToPayment} days</td>
                    <td className="py-3 px-4">
                      <Badge
                        className={`${
                          payment.status === "On Time"
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : "bg-red-100 text-red-800 hover:bg-red-100"
                        }`}
                      >
                        {payment.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {activeTab === "outstanding-invoices" && (
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold">Outstanding Invoices</h3>
              <p className="text-sm text-muted-foreground">Unpaid invoices requiring attention</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">MYR {customer.outstanding.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Total Outstanding</div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Invoice ID</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Invoice Date</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Due Date</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Amount</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Days Overdue</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {outstandingInvoices.map((invoice, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm font-medium">{invoice.id}</td>
                    <td className="py-3 px-4 text-sm">{invoice.date}</td>
                    <td className="py-3 px-4 text-sm">{invoice.dueDate}</td>
                    <td className="py-3 px-4 text-sm text-right font-medium">
                      MYR {invoice.amount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </td>
                    <td className="py-3 px-4 text-sm text-center">
                      {invoice.status === "Overdue" ? (
                        <span className="text-red-600 font-medium">{invoice.daysOverdue} days</span>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <Badge
                        className={`${
                          invoice.status === "Overdue"
                            ? "bg-red-100 text-red-800 hover:bg-red-100"
                            : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                        }`}
                      >
                        {invoice.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {activeTab === "sanction-kyc" && (
        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-green-600" />
              <div>
                <h3 className="text-lg font-semibold">Sanctions Screening</h3>
                <p className="text-sm text-muted-foreground">Compliance check against global sanctions lists</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card className="p-4 bg-green-50 border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <div className="font-semibold">OFAC</div>
                </div>
                <div className="text-sm text-muted-foreground">No matches found</div>
                <div className="text-xs text-muted-foreground mt-1">Last checked: 05/10/2025</div>
              </Card>

              <Card className="p-4 bg-green-50 border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <div className="font-semibold">UN Sanctions</div>
                </div>
                <div className="text-sm text-muted-foreground">No matches found</div>
                <div className="text-xs text-muted-foreground mt-1">Last checked: 05/10/2025</div>
              </Card>

              <Card className="p-4 bg-green-50 border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <div className="font-semibold">EU Sanctions</div>
                </div>
                <div className="text-sm text-muted-foreground">No matches found</div>
                <div className="text-xs text-muted-foreground mt-1">Last checked: 05/10/2025</div>
              </Card>
            </div>

            <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium text-green-800">All sanctions checks passed</span>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold">KYC Documentation</h3>
                <p className="text-sm text-muted-foreground">Know Your Customer compliance documents</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Business Registration Certificate</div>
                    <div className="text-sm text-muted-foreground">Uploaded: 15/03/2024</div>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Verified</Badge>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Tax Identification Number</div>
                    <div className="text-sm text-muted-foreground">Uploaded: 15/03/2024</div>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Verified</Badge>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Bank Account Details</div>
                    <div className="text-sm text-muted-foreground">Uploaded: 15/03/2024</div>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Verified</Badge>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Director Identification</div>
                    <div className="text-sm text-muted-foreground">Uploaded: 15/03/2024</div>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Verified</Badge>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Financial Statements (2024)</div>
                    <div className="text-sm text-muted-foreground">Uploaded: 20/01/2025</div>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Verified</Badge>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Compliance Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <span className="text-sm font-medium">AML Screening</span>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Passed</Badge>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <span className="text-sm font-medium">PEP Screening</span>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Passed</Badge>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <span className="text-sm font-medium">Adverse Media Check</span>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Clear</Badge>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <span className="text-sm font-medium">Risk Assessment</span>
                <Badge
                  className={`${
                    customer.riskRating === "Low"
                      ? "bg-green-100 text-green-800 hover:bg-green-100"
                      : customer.riskRating === "Medium"
                        ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                        : "bg-red-100 text-red-800 hover:bg-red-100"
                  }`}
                >
                  {customer.riskRating} Risk
                </Badge>
              </div>
            </div>
          </Card>
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
                  Order #{orderHistory[0]?.id} for {orderHistory[0]?.product} - MYR{" "}
                  {orderHistory[0]?.amount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
                <div className="text-xs text-muted-foreground">{orderHistory[0]?.date}</div>
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
                <div className="text-sm text-muted-foreground mb-2">
                  Payment #{paymentHistory[0]?.id} - MYR{" "}
                  {paymentHistory[0]?.amount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
                <div className="text-xs text-muted-foreground">{paymentHistory[0]?.date}</div>
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
                  Annual credit assessment completed - Credit score: {customer.creditScore}
                </div>
                <div className="text-xs text-muted-foreground">01/10/2025</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-yellow-600 mt-2"></div>
                <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
              </div>
              <div className="flex-1 pb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">Invoice Generated</span>
                  <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Invoice</Badge>
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  Invoice #{outstandingInvoices[0]?.id} - Due: {outstandingInvoices[0]?.dueDate}
                </div>
                <div className="text-xs text-muted-foreground">{outstandingInvoices[0]?.date}</div>
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
                <div className="text-sm text-muted-foreground mb-2">
                  Quarterly business review with {customer.accountManager}
                </div>
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
                <div className="text-xs text-muted-foreground">
                  {customer.tier === "1" ? "10/01/2020" : customer.tier === "2" ? "15/03/2021" : "20/06/2022"}
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
