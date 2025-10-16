"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Plus,
  FileText,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  BarChart3,
  Shield,
  CheckCircle2,
  Building2,
  Eye,
  Search,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

const tabs = ["portfolio", "customers", "analytics"]

const customerPortfolio = [
  {
    id: 1,
    name: "Golden Dragon Trading Pte Ltd",
    country: "Singapore",
    type: "MNC",
    tier: "1",
    creditScore: 785,
    creditLimit: 8500000,
    outstanding: 6200000,
    overdue: 0,
    utilization: 73,
    riskRating: "Low",
    paymentHistory: "Excellent",
  },
  {
    id: 2,
    name: "Sunrise Foods Malaysia Sdn Bhd",
    country: "Malaysia",
    type: "Est Corp",
    tier: "1",
    creditScore: 650,
    creditLimit: 12000000,
    outstanding: 9800000,
    overdue: 1200000,
    utilization: 82,
    riskRating: "Medium",
    paymentHistory: "Good",
  },
  {
    id: 3,
    name: "Pacific Oil Industries Ltd",
    country: "Thailand",
    type: "SME",
    tier: "2",
    creditScore: 820,
    creditLimit: 15000000,
    outstanding: 11200000,
    overdue: 0,
    utilization: 75,
    riskRating: "Low",
    paymentHistory: "Excellent",
  },
  {
    id: 4,
    name: "Metro Commodities Vietnam Co",
    country: "Vietnam",
    type: "MNC",
    tier: "1",
    creditScore: 580,
    creditLimit: 6500000,
    outstanding: 5800000,
    overdue: 850000,
    utilization: 89,
    riskRating: "High",
    paymentHistory: "Fair",
  },
  {
    id: 5,
    name: "Royal Palm Industries Pte Ltd",
    country: "Singapore",
    type: "Est Corp",
    tier: "2",
    creditScore: 795,
    creditLimit: 20000000,
    outstanding: 14500000,
    overdue: 0,
    utilization: 73,
    riskRating: "Low",
    paymentHistory: "Excellent",
  },
  {
    id: 6,
    name: "Dragon Oil Refinery Co Ltd",
    country: "Malaysia",
    type: "MNC",
    tier: "1",
    creditScore: 520,
    creditLimit: 18000000,
    outstanding: 16200000,
    overdue: 2100000,
    utilization: 90,
    riskRating: "High",
    paymentHistory: "Poor",
  },
  {
    id: 7,
    name: "Southeast Trading House Ltd",
    country: "Indonesia",
    type: "SME",
    tier: "2",
    creditScore: 680,
    creditLimit: 9500000,
    outstanding: 6800000,
    overdue: 0,
    utilization: 72,
    riskRating: "Medium",
    paymentHistory: "Good",
  },
  {
    id: 8,
    name: "Phoenix Palm Solutions Ltd",
    country: "Philippines",
    type: "Est Corp",
    tier: "1",
    creditScore: 625,
    creditLimit: 7200000,
    outstanding: 5900000,
    overdue: 450000,
    utilization: 82,
    riskRating: "Medium",
    paymentHistory: "Good",
  },
  {
    id: 9,
    name: "Emerald Foods Trading Pte Ltd",
    country: "Singapore",
    type: "MNC",
    tier: "2",
    creditScore: 750,
    creditLimit: 11000000,
    outstanding: 7800000,
    overdue: 0,
    utilization: 71,
    riskRating: "Low",
    paymentHistory: "Excellent",
  },
]

const getCreditScoreColor = (score: number) => {
  if (score >= 750) return "text-green-600"
  if (score >= 650) return "text-orange-600"
  return "text-red-600"
}

const getRiskBadgeClass = (rating: string) => {
  if (rating === "Low") return "bg-green-100 text-green-700 hover:bg-green-100"
  if (rating === "Medium") return "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
  return "bg-red-100 text-red-700 hover:bg-red-100"
}

const getPaymentBadgeClass = (history: string) => {
  if (history === "Excellent") return "bg-green-100 text-green-700 hover:bg-green-100"
  if (history === "Good") return "bg-blue-100 text-blue-700 hover:bg-blue-100"
  if (history === "Fair") return "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
  return "bg-red-100 text-red-700 hover:bg-red-100"
}

const getTierBadgeClass = (tier: string) => {
  return "bg-muted text-foreground hover:bg-muted"
}

export default function SalesProfilePage() {
  const [activeTab, setActiveTab] = useState("portfolio")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold">Sales Profile Dashboard</h1>
              <p className="text-sm text-muted-foreground">Personal credit portfolio management</p>
            </div>
            <div className="flex items-center gap-3">
              {/* Changed Export Report to New Customer */}
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Customer
              </Button>
              <Link href="/credit-request">
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  New Credit Req
                </Button>
              </Link>
              <Button size="sm">
                <FileText className="h-4 w-4 mr-2" />
                Generate Statement
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        {/* Profile Card */}
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="relative">
                <Avatar className="h-20 w-20">
                  <AvatarFallback className="bg-muted text-2xl font-semibold">BL</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-green-500 border-2 border-card flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold">Bruce Lee</h2>
                  <Badge className="bg-blue-500 hover:bg-blue-600">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Top Performer
                  </Badge>
                  <Badge variant="outline" className="border-green-500 text-green-600">
                    <Shield className="h-3 w-3 mr-1" />
                    Certified
                  </Badge>
                </div>
                <div className="flex items-center gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>bruce.lee@palmtrading.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>+65-9123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Singapore</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Since 2019</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="font-normal">
                    Sales - Asia Pacific
                  </Badge>
                  <Badge variant="secondary" className="font-normal">
                    Southeast Asia
                  </Badge>
                  <Badge variant="secondary" className="font-normal">
                    Palm Oil Trading
                  </Badge>
                </div>
              </div>
            </div>
            <div className="text-right space-y-2">
              <div>
                <p className="text-sm text-muted-foreground">Employee ID</p>
                <p className="text-lg font-semibold">EMP-2019-045</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Reports to</p>
                <p className="text-lg font-semibold">Sarah Chen</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4">
          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Portfolio Value</p>
                <p className="text-3xl font-bold">$355,900,000</p>
                <p className="text-sm text-green-600 mt-1">+15.2% YoY</p>
              </div>
              <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Active Customers</p>
                <p className="text-3xl font-bold">10</p>
                <p className="text-sm text-blue-600 mt-1">Across 6 countries</p>
              </div>
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Avg Credit Score</p>
                <p className="text-3xl font-bold text-orange-600">685</p>
                <p className="text-sm text-green-600 mt-1">+12 points</p>
              </div>
              <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">YTD Orders</p>
                <p className="text-3xl font-bold">213</p>
                <p className="text-sm text-green-600 mt-1">+8.5% vs target</p>
              </div>
              <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 border-b">
          <button
            onClick={() => setActiveTab("portfolio")}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "portfolio"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Portfolio Overview
          </button>
          <button
            onClick={() => setActiveTab("customers")}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "customers"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Customer Details
          </button>
          <button
            onClick={() => setActiveTab("analytics")}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "analytics"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Credit Analytics
          </button>
        </div>

        {/* Content Area */}
        {activeTab === "portfolio" && (
          <div className="grid grid-cols-3 gap-6">
            {/* Left Column - Credit Health Summary */}
            <div className="col-span-2 space-y-6">
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <h3 className="text-xl font-bold">Credit Health Summary</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6">Overall portfolio credit analysis</p>

                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <p className="text-3xl font-bold text-green-600 mb-1">$121,200,000</p>
                    <p className="text-sm text-muted-foreground mb-2">Total Credit Limit</p>
                    <div className="h-2 bg-muted rounded-full overflow-hidden mb-1">
                      <div className="h-full bg-green-600" style={{ width: "85%" }} />
                    </div>
                    <p className="text-xs text-muted-foreground">85% utilization</p>
                  </div>

                  <div>
                    <p className="text-3xl font-bold text-blue-600 mb-1">$95,000,000</p>
                    <p className="text-sm text-muted-foreground mb-2">Outstanding Balance</p>
                    <div className="h-2 bg-muted rounded-full overflow-hidden mb-1">
                      <div className="h-full bg-blue-600" style={{ width: "72%" }} />
                    </div>
                    <p className="text-xs text-muted-foreground">72% of limit</p>
                  </div>

                  <div>
                    <p className="text-3xl font-bold text-red-600 mb-1">$5,280,000</p>
                    <p className="text-sm text-muted-foreground mb-2">Overdue Amount</p>
                    <div className="h-2 bg-muted rounded-full overflow-hidden mb-1">
                      <div className="h-full bg-red-600" style={{ width: "15%" }} />
                    </div>
                    <p className="text-xs text-muted-foreground">15% of outstanding</p>
                  </div>
                </div>
              </Card>

              {/* Risk Distribution */}
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4">Risk Distribution</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                      <span className="text-sm">Low Risk</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium">4 customers</span>
                      <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: "40%" }} />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-orange-500" />
                      <span className="text-sm">Medium Risk</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium">4 customers</span>
                      <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-orange-500" style={{ width: "40%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Key Metrics */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4">Key Metrics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Avg Payment Days</span>
                    <span className="text-lg font-semibold">48 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Collection Rate</span>
                    <span className="text-lg font-semibold text-green-600">94.2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Credit Utilization</span>
                    <span className="text-lg font-semibold">72.8%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Default Rate</span>
                    <span className="text-lg font-semibold text-red-600">2.1%</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4">Recent Alerts</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm font-medium text-red-900">Payment Overdue</p>
                    <p className="text-xs text-red-700 mt-1">Customer #205 - 15 days</p>
                  </div>
                  <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                    <p className="text-sm font-medium text-orange-900">Credit Limit Warning</p>
                    <p className="text-xs text-orange-700 mt-1">Customer #203 - 95% utilized</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "customers" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-1">Customer Portfolio</h2>
              <p className="text-sm text-muted-foreground">Detailed view of all customers under your management</p>
            </div>

            {/* Filters */}
            <div className="flex items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search customers..." className="pl-9" />
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" className="gap-2 bg-transparent">
                  All Risk
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="gap-2 bg-transparent">
                  All Countries
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Customer Table */}
            <Card>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-medium text-sm text-muted-foreground">Customer</th>
                      <th className="text-left p-4 font-medium text-sm text-muted-foreground">Type</th>
                      <th className="text-left p-4 font-medium text-sm text-muted-foreground">Tier</th>
                      <th className="text-left p-4 font-medium text-sm text-muted-foreground">Credit Score</th>
                      <th className="text-left p-4 font-medium text-sm text-muted-foreground">Credit Limit</th>
                      <th className="text-left p-4 font-medium text-sm text-muted-foreground">Outstanding</th>
                      <th className="text-left p-4 font-medium text-sm text-muted-foreground">Utilization</th>
                      <th className="text-left p-4 font-medium text-sm text-muted-foreground">Risk Rating</th>
                      <th className="text-left p-4 font-medium text-sm text-muted-foreground">Payment History</th>
                      <th className="text-left p-4 font-medium text-sm text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customerPortfolio.map((customer) => (
                      <tr key={customer.id} className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                              <Building2 className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium text-sm">{customer.name}</p>
                              <p className="text-xs text-muted-foreground flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {customer.country}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge variant="outline" className="font-normal">
                            {customer.type}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">{customer.tier}</span>
                        </td>
                        <td className="p-4">
                          <span className={`text-lg font-bold ${getCreditScoreColor(customer.creditScore)}`}>
                            {customer.creditScore}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">${customer.creditLimit.toLocaleString()}</span>
                        </td>
                        <td className="p-4">
                          <div>
                            <p className="text-sm font-medium">${customer.outstanding.toLocaleString()}</p>
                            {customer.overdue > 0 && (
                              <p className="text-xs text-red-600 font-medium">
                                Overdue: ${customer.overdue.toLocaleString()}
                              </p>
                            )}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-20 bg-muted rounded-full overflow-hidden">
                              <div className="h-full bg-blue-600" style={{ width: `${customer.utilization}%` }} />
                            </div>
                            <span className="text-sm font-medium">{customer.utilization}%</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className={getRiskBadgeClass(customer.riskRating)}>{customer.riskRating}</Badge>
                        </td>
                        <td className="p-4">
                          <Badge className={getPaymentBadgeClass(customer.paymentHistory)}>
                            {customer.paymentHistory}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="gap-2"
                            onClick={() => (window.location.href = `/customer-profile/${customer.id}`)}
                          >
                            <Eye className="h-4 w-4" />
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
