"use client"

import { useState, useEffect, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  Search,
  Plus,
  CheckCircle2,
  Clock,
  Calendar,
  User,
  Briefcase,
  Globe,
  Clock4,
  Target,
  FileText,
  TrendingDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

type Portfolio2Data = {
  "Customer No": number
  "Customer Name": string
  Country: string
  "Strategic Importance": string
  "Digital Footprint": string
  "External Rating": string
  "Independent Credit Rating": string
  Profitability: number
  "Current Ratio": number
  "Gearing Ratios": number
  "Shareholder Funds / Net Worth": string
  Currency: string
  "Shareholder Funds / Net Worth (MYR)": string
  "Type of Business Entity": string
  "Years in Operation": number
  "Business History with SDG": number
  "Country Risk": string
  "Contract frequency and volume trends": string
  "Default History": string
  Sanction: string
  Governance: string
  "Sustainability Goals": string
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("portfolio2")
  const [portfolio2Data, setPortfolio2Data] = useState<Portfolio2Data[]>([])
  const [portfolio2Loading, setPortfolio2Loading] = useState(false)
  const [portfolio2CurrentPage, setPortfolio2CurrentPage] = useState(1)
  const portfolio2RowsPerPage = 20

  const dashboardStats = useMemo(() => {
    if (portfolio2Data.length === 0) {
      return {
        activeCustomers: 0,
        totalCountries: 0,
        totalExposure: 0,
        averageScore: 0,
        defaultRate: 0,
        highRiskCount: 0,
        mediumRiskCount: 0,
        lowRiskCount: 0,
        sanctionPassRate: 0,
        governanceCompliance: 0,
        sustainabilityCompliance: 0,
      }
    }

    const activeCustomers = portfolio2Data.length

    // Count unique countries
    const uniqueCountries = new Set(portfolio2Data.map((d) => d.Country))
    const totalCountries = uniqueCountries.size

    // Calculate total exposure (sum of Shareholder Funds in MYR)
    const totalExposure = portfolio2Data.reduce((sum, customer) => {
      const value = customer["Shareholder Funds / Net Worth (MYR)"]
      const numValue = typeof value === "string" ? Number.parseFloat(value.replace(/[^0-9.-]/g, "")) : 0
      return sum + (isNaN(numValue) ? 0 : numValue)
    }, 0)

    // Calculate average credit score based on ratings
    // Convert ratings to numeric scores: High=800, Medium=650, Low=500
    const ratingToScore = (rating: string | undefined) => {
      if (!rating) return 500
      const r = rating.toLowerCase()
      if (r.includes("high")) return 800
      if (r.includes("medium")) return 650
      return 500
    }

    const totalScore = portfolio2Data.reduce((sum, customer) => {
      return sum + ratingToScore(customer["External Rating"])
    }, 0)
    const averageScore = Math.round(totalScore / activeCustomers)

    // Calculate default rate
    const customersWithDefaults = portfolio2Data.filter(
      (d) => d["Default History"] && d["Default History"].toLowerCase() !== "none",
    ).length
    const defaultRate = (customersWithDefaults / activeCustomers) * 100

    // Calculate risk distribution based on Strategic Importance
    const highRiskCount = portfolio2Data.filter((d) => d["Strategic Importance"]?.toLowerCase().includes("high")).length
    const mediumRiskCount = portfolio2Data.filter((d) =>
      d["Strategic Importance"]?.toLowerCase().includes("medium"),
    ).length
    const lowRiskCount = portfolio2Data.filter(
      (d) =>
        d["Strategic Importance"]?.toLowerCase().includes("low") ||
        d["Strategic Importance"]?.toLowerCase().includes("new"),
    ).length

    // Calculate compliance metrics
    const sanctionPass = portfolio2Data.filter((d) => d.Sanction?.toLowerCase() === "pass").length
    const sanctionPassRate = (sanctionPass / activeCustomers) * 100

    const governanceYes = portfolio2Data.filter((d) => d.Governance?.toLowerCase() === "yes").length
    const governanceCompliance = (governanceYes / activeCustomers) * 100

    const sustainabilityYes = portfolio2Data.filter((d) => d["Sustainability Goals"]?.toLowerCase() === "yes").length
    const sustainabilityCompliance = (sustainabilityYes / activeCustomers) * 100

    return {
      activeCustomers,
      totalCountries,
      totalExposure,
      averageScore,
      defaultRate,
      highRiskCount,
      mediumRiskCount,
      lowRiskCount,
      sanctionPassRate,
      governanceCompliance,
      sustainabilityCompliance,
    }
  }, [portfolio2Data])

  const tabs = [
    { id: "portfolio2", label: "Portfolio 2" },
    { id: "portfolio", label: "Customer Portfolio" },
    { id: "onboarding", label: "Onboarding" },
    { id: "requests", label: "Credit Requests" },
    { id: "invoices", label: "Outstanding Invoices" },
    { id: "tracking", label: "Payment Tracking" },
  ]

  useEffect(() => {
    if (activeTab === "portfolio2" && portfolio2Data.length === 0) {
      fetchPortfolio2Data()
    }
  }, [activeTab])

  const fetchPortfolio2Data = async () => {
    setPortfolio2Loading(true)
    try {
      const response = await fetch(
        "/images/cm-dummy-csv.csv",
      )
      const csvText = await response.text()

      const parseCSVLine = (line: string): string[] => {
        const result: string[] = []
        let current = ""
        let inQuotes = false

        for (let i = 0; i < line.length; i++) {
          const char = line[i]
          const nextChar = line[i + 1]

          if (char === '"') {
            if (inQuotes && nextChar === '"') {
              // Escaped quote
              current += '"'
              i++
            } else {
              // Toggle quote state
              inQuotes = !inQuotes
            }
          } else if (char === "," && !inQuotes) {
            // End of field
            result.push(current.trim())
            current = ""
          } else {
            current += char
          }
        }
        result.push(current.trim())
        return result
      }

      // Parse CSV
      const lines = csvText.split("\n").filter((line) => line.trim())
      const headers = parseCSVLine(lines[0])

      const data: Portfolio2Data[] = []
      for (let i = 1; i < lines.length; i++) {
        const values = parseCSVLine(lines[i])
        const row: any = {}
        headers.forEach((header, index) => {
          const value = values[index] || ""
          // Convert numeric fields
          if (
            header === "Customer No" ||
            header === "Profitability" ||
            header === "Current Ratio" ||
            header === "Gearing Ratios" ||
            header === "Years in Operation" ||
            header === "Business History with SDG"
          ) {
            row[header] = value ? Number.parseFloat(value) : 0
          } else {
            row[header] = value
          }
        })
        data.push(row as Portfolio2Data)
      }

      console.log("[v0] Parsed Portfolio 2 data:", data.length, "rows")
      setPortfolio2Data(data)
    } catch (error) {
      console.error("[v0] Error fetching Portfolio 2 data:", error)
    } finally {
      setPortfolio2Loading(false)
    }
  }

  const portfolio2TotalPages = Math.ceil(portfolio2Data.length / portfolio2RowsPerPage)
  const portfolio2StartIndex = (portfolio2CurrentPage - 1) * portfolio2RowsPerPage
  const portfolio2EndIndex = portfolio2StartIndex + portfolio2RowsPerPage
  const portfolio2CurrentData = portfolio2Data.slice(portfolio2StartIndex, portfolio2EndIndex)

  const customers = [
    {
      name: "Global Foods Ltd",
      country: "Malaysia",
      type: "MNC",
      tier: "1",
      salesPic: "Ahmad Rahman",
      segment: "Bulk",
      totalSales: "RM 35,700,000",
      creditLimit: "RM 10,500,000",
      outstanding: "RM 7,770,000",
      overdue: "RM 1,428,000",
      utilization: 74,
      risk: "Medium",
    },
    {
      name: "Euro Palm Industries",
      country: "Netherlands",
      type: "Est Corp",
      tier: "1",
      salesPic: "Sarah Lim",
      segment: "Diff",
      totalSales: "RM 58,425,000",
      creditLimit: "RM 14,250,000",
      outstanding: "RM 9,975,000",
      overdue: "-",
      utilization: 70,
      risk: "Low",
    },
    {
      name: "Pacific Trading Co",
      country: "Singapore",
      type: "SME",
      tier: "2",
      salesPic: "David Tan",
      segment: "Bulk",
      totalSales: "RM 21,080,000",
      creditLimit: "RM 6,120,000",
      outstanding: "RM 5,610,000",
      overdue: "RM 1,530,000",
      utilization: 92,
      risk: "High",
    },
    {
      name: "American Palm Corp",
      country: "United States",
      type: "MNC",
      tier: "1",
      salesPic: "John Martinez",
      segment: "Diff",
      totalSales: "RM 66,360,000",
      creditLimit: "RM 16,800,000",
      outstanding: "RM 11,760,000",
      overdue: "-",
      utilization: 70,
      risk: "Low",
    },
    {
      name: "Asian Commodities Ltd",
      country: "Thailand",
      type: "Est Corp",
      tier: "2",
      salesPic: "Lisa Wong",
      segment: "Bulk",
      totalSales: "RM 33,600,000",
      creditLimit: "RM 10,200,000",
      outstanding: "RM 8,160,000",
      overdue: "RM 1,440,000",
      utilization: 80,
      risk: "Medium",
    },
    {
      name: "Nordic Trade Group",
      country: "Sweden",
      type: "MNC",
      tier: "1",
      salesPic: "Erik Andersson",
      segment: "Diff",
      totalSales: "RM 42,750,000",
      creditLimit: "RM 12,600,000",
      outstanding: "RM 6,300,000",
      overdue: "-",
      utilization: 50,
      risk: "Low",
    },
    {
      name: "Indo Palm Resources",
      country: "Indonesia",
      type: "SME",
      tier: "3",
      salesPic: "Siti Nurhaliza",
      segment: "Bulk",
      totalSales: "RM 16,740,000",
      creditLimit: "RM 4,995,000",
      outstanding: "RM 4,645,500",
      overdue: "RM 1,026,000",
      utilization: 93,
      risk: "High",
    },
    {
      name: "Deutsche Handel GmbH",
      country: "Germany",
      type: "Est Corp",
      tier: "2",
      salesPic: "Klaus Weber",
      segment: "Diff",
      totalSales: "RM 44,650,000",
      creditLimit: "RM 10,450,000",
      outstanding: "RM 7,315,000",
      overdue: "-",
      utilization: 70,
      risk: "Low",
    },
    {
      name: "Africa Trade Partners",
      country: "South Africa",
      type: "Others",
      tier: "4",
      salesPic: "Thabo Mbeki",
      segment: "B2C",
      totalSales: "RM 31,250,000",
      creditLimit: "RM 10,500,000",
      outstanding: "RM 9,500,000",
      overdue: "RM 2,125,000",
      utilization: 90,
      risk: "High",
    },
    {
      name: "Australia Exports Pty",
      country: "Australia",
      type: "SME",
      tier: "3",
      salesPic: "Emma Thompson",
      segment: "B2C",
      totalSales: "RM 33,600,000",
      creditLimit: "RM 10,500,000",
      outstanding: "RM 6,300,000",
      overdue: "-",
      utilization: 60,
      risk: "Medium",
    },
  ]

  const invoices = [
    {
      id: "INV-2024-001",
      customer: "Global Foods Ltd",
      salesPic: "Ahmad Rahman",
      segment: "Bulk",
      amount: "RM 1,890,000",
      dueDate: "2024-12-15",
      status: "Overdue",
      daysOverdue: 18,
    },
    {
      id: "INV-2024-002",
      customer: "Euro Palm Industries",
      salesPic: "Sarah Lim",
      segment: "Diff",
      amount: "RM 3,230,000",
      dueDate: "2024-12-20",
      status: "Due Soon",
      daysOverdue: null,
    },
    {
      id: "INV-2024-003",
      customer: "Pacific Trading Co",
      salesPic: "David Tan",
      segment: "Bulk",
      amount: "RM 1,088,000",
      dueDate: "2024-11-30",
      status: "Overdue",
      daysOverdue: 33,
    },
    {
      id: "INV-2024-004",
      customer: "American Palm Corp",
      salesPic: "John Martinez",
      segment: "Diff",
      amount: "RM 2,520,000",
      dueDate: "2024-10-22",
      status: "Overdue",
      daysOverdue: 65,
    },
    {
      id: "INV-2024-005",
      customer: "Asian Commodities Ltd",
      salesPic: "Lisa Wong",
      segment: "Bulk",
      amount: "RM 1,680,000",
      dueDate: "2024-11-25",
      status: "Overdue",
      daysOverdue: 38,
    },
    {
      id: "INV-2024-006",
      customer: "Nordic Trade Group",
      salesPic: "Erik Andersson",
      segment: "Diff",
      amount: "RM 1,260,000",
      dueDate: "2024-12-28",
      status: "Due Soon",
      daysOverdue: null,
    },
    {
      id: "INV-2024-007",
      customer: "Indo Palm Resources",
      salesPic: "Siti Nurhaliza",
      segment: "Bulk",
      amount: "RM 945,000",
      dueDate: "2024-11-20",
      status: "Overdue",
      daysOverdue: 43,
    },
    {
      id: "INV-2024-008",
      customer: "Deutsche Handel GmbH",
      salesPic: "Klaus Weber",
      segment: "Diff",
      amount: "RM 2,100,000",
      dueDate: "2024-12-22",
      status: "Due Soon",
      daysOverdue: null,
    },
    {
      id: "INV-2024-009",
      customer: "Africa Trade Partners",
      salesPic: "Thabo Mbeki",
      segment: "B2C",
      amount: "RM 1,575,000",
      dueDate: "2024-11-18",
      status: "Overdue",
      daysOverdue: 45,
    },
    {
      id: "INV-2024-010",
      customer: "Australia Exports Pty",
      salesPic: "Emma Thompson",
      segment: "B2C",
      amount: "RM 1,890,000",
      dueDate: "2024-12-30",
      status: "Due Soon",
      daysOverdue: null,
    },
  ]

  const creditRequests = [
    {
      id: "CR-2024-001",
      customer: "Global Foods Ltd",
      currentLimit: "RM 10,500,000",
      requestedLimit: "RM 14,700,000",
      increase: "+RM 4,200,000",
      requestedBy: "Sarah Chen",
      priority: "High",
      status: "Pending",
    },
    {
      id: "CR-2024-002",
      customer: "Pacific Trading Co",
      currentLimit: "RM 7,560,000",
      requestedLimit: "RM 9,240,000",
      increase: "+RM 1,680,000",
      requestedBy: "Li Wei",
      priority: "Medium",
      status: "Under Review",
    },
    {
      id: "CR-2024-003",
      customer: "American Palm Corp",
      currentLimit: "RM 16,800,000",
      requestedLimit: "RM 21,000,000",
      increase: "+RM 4,200,000",
      requestedBy: "John Martinez",
      priority: "Low",
      status: "Approved",
    },
  ]

  const onboardingApplications = [
    {
      date: "May 15, 2025",
      salesPic: "Ahmad Rahman",
      customer: "ONBOARD ONE (MALAYSIA) SDN. BHD.",
      country: "Malaysia",
      stage: "Approval",
      status: "In Progress",
      time: "5 days",
    },
    {
      date: "May 18, 2025",
      salesPic: "Sarah Lim",
      customer: "GLOBAL TRADING ENTERPRISES PTE LTD",
      country: "Singapore",
      stage: "Credit Rating",
      status: "In Progress",
      time: "2 days",
    },
    {
      date: "May 12, 2025",
      salesPic: "David Tan",
      customer: "PACIFIC PALM OIL CORPORATION",
      country: "Indonesia",
      stage: "Order Commercial",
      status: "On Hold",
      time: "8 days",
    },
    {
      date: "May 10, 2025",
      salesPic: "Lisa Wong",
      customer: "ASIAN COMMODITIES LIMITED",
      country: "Thailand",
      stage: "Approval",
      status: "Completed",
      time: "10 days",
    },
    {
      date: "May 20, 2025",
      salesPic: "Michael Chen",
      customer: "EURO PALM TRADING GMBH",
      country: "Germany",
      stage: "KYC",
      status: "In Progress",
      time: "0 days",
    },
  ]

  return (
    <div className="p-8 space-y-6">
      {/* First Row: Active Customers, Total Exposure, Average Score, Default Rate */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-sm border">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Customers</p>
                <p className="text-4xl font-bold text-foreground mt-2">{dashboardStats.activeCustomers}</p>
                <p className="text-sm text-muted-foreground mt-2">Across {dashboardStats.totalCountries} countries</p>
              </div>
              <div className="rounded-lg bg-muted p-2.5">
                <Users className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border bg-slate-800 text-white">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-300">Total Exposure</p>
                <p className="text-4xl font-bold mt-2">
                  MYR {dashboardStats.totalExposure.toLocaleString("en-MY", { maximumFractionDigits: 0 })}
                </p>
              </div>
              <div className="rounded-lg bg-slate-700 p-2.5">
                <DollarSign className="h-5 w-5 text-slate-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Average Score</p>
                <p className="text-4xl font-bold text-orange-600 mt-2">{dashboardStats.averageScore}</p>
                <p className="text-sm text-muted-foreground mt-2">Credit rating</p>
              </div>
              <div className="rounded-lg bg-muted p-2.5">
                <Target className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-red-700">Default Rate</p>
                <p className="text-4xl font-bold text-red-600 mt-2">{dashboardStats.defaultRate.toFixed(1)}%</p>
                <p className="text-sm text-red-700 mt-2">Risk indicator</p>
              </div>
              <div className="rounded-lg bg-red-100 p-2.5">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Second Row: Pending Invoices, Credit Requests, Avg Payment Days, Onboarding Requests */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-sm border">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Invoices</p>
                <p className="text-4xl font-bold text-foreground mt-2">3</p>
                <p className="text-sm text-muted-foreground mt-2">Requiring attention</p>
              </div>
              <div className="rounded-lg bg-muted p-2.5">
                <FileText className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Credit Requests</p>
                <p className="text-4xl font-bold text-foreground mt-2">3</p>
                <p className="text-sm text-muted-foreground mt-2">In review process</p>
              </div>
              <div className="rounded-lg bg-muted p-2.5">
                <TrendingUp className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Payment Days</p>
                <p className="text-4xl font-bold text-foreground mt-2">42</p>
                <p className="text-sm text-muted-foreground mt-2">+3 days from last month</p>
              </div>
              <div className="rounded-lg bg-muted p-2.5">
                <Clock className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Onboarding Requests</p>
                <p className="text-4xl font-bold text-foreground mt-2">6</p>
                <p className="text-sm text-muted-foreground mt-2">Active applications</p>
              </div>
              <div className="rounded-lg bg-muted p-2.5">
                <User className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Credit Utilization Analysis Section */}
      <Card className="shadow-sm border">
        <CardContent className="p-6 space-y-6">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-red-600" />
            <h3 className="text-xl font-bold text-foreground">Credit Utilization Analysis</h3>
          </div>
          <p className="text-sm text-muted-foreground">Overall credit usage and capacity metrics</p>

          {/* Overall Utilization Section */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Left: Circular Chart */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                  {/* Progress circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#dc2626"
                    strokeWidth="12"
                    strokeDasharray={`${63 * 2.51} ${100 * 2.51}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-red-600">63%</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-foreground">Overall Utilization</p>
                <p className="text-sm text-muted-foreground">Credit capacity used</p>
              </div>
            </div>

            {/* Middle: Utilization Breakdown */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">Low Utilization (&lt;50%)</span>
                  <span className="text-lg font-bold text-green-600">42%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: "42%" }} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">Medium Utilization (50-80%)</span>
                  <span className="text-lg font-bold text-orange-600">38%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: "38%" }} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">High Utilization (&gt;80%)</span>
                  <span className="text-lg font-bold text-red-600">20%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: "20%" }} />
                </div>
              </div>
            </div>

            {/* Right: Key Insights */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-foreground">Key Insights</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-600 mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-foreground">58% of customers maintain healthy utilization levels</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-600 mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-foreground">Credit demand increasing in Asia Pacific region</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-600 mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-foreground">Monitor high-utilization accounts for risk</p>
                </div>
              </div>
            </div>
          </div>

          {/* Utilization by Business Segment section */}
          <div className="pt-6 border-t">
            <h4 className="text-lg font-bold text-foreground mb-6">Utilization by Business Segment</h4>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Bulk Segment */}
              <Card className="shadow-sm border border-blue-200 bg-blue-50/30">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h5 className="text-lg font-bold text-foreground">Bulk</h5>
                    <Badge className="bg-blue-100 text-blue-700 border-blue-200 font-medium">45 customers</Badge>
                  </div>

                  <div className="flex flex-col items-center justify-center space-y-3">
                    <div className="relative w-32 h-32">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="35" fill="none" stroke="#e5e7eb" strokeWidth="10" />
                        <circle
                          cx="50"
                          cy="50"
                          r="35"
                          fill="none"
                          stroke="#2563eb"
                          strokeWidth="10"
                          strokeDasharray={`${68 * 2.2} ${100 * 2.2}`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-blue-600">68%</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground text-center">Average utilization</p>
                  </div>

                  <div className="space-y-3 pt-3 border-t">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Low (&lt;50%)</span>
                      <span className="font-medium text-blue-700">35%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Medium (50-80%)</span>
                      <span className="font-medium text-blue-700">42%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">High (&gt;80%)</span>
                      <span className="font-medium text-blue-700">23%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Diff Segment */}
              <Card className="shadow-sm border border-green-200 bg-green-50/30">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h5 className="text-lg font-bold text-foreground">Diff</h5>
                    <Badge className="bg-green-100 text-green-700 border-green-200 font-medium">38 customers</Badge>
                  </div>

                  <div className="flex flex-col items-center justify-center space-y-3">
                    <div className="relative w-32 h-32">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="35" fill="none" stroke="#e5e7eb" strokeWidth="10" />
                        <circle
                          cx="50"
                          cy="50"
                          r="35"
                          fill="none"
                          stroke="#16a34a"
                          strokeWidth="10"
                          strokeDasharray={`${55 * 2.2} ${100 * 2.2}`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-green-600">55%</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground text-center">Average utilization</p>
                  </div>

                  <div className="space-y-3 pt-3 border-t">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Low (&lt;50%)</span>
                      <span className="font-medium text-green-700">52%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Medium (50-80%)</span>
                      <span className="font-medium text-green-700">38%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">High (&gt;80%)</span>
                      <span className="font-medium text-green-700">10%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* B2C Segment */}
              <Card className="shadow-sm border border-pink-200 bg-pink-50/30">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h5 className="text-lg font-bold text-foreground">B2C</h5>
                    <Badge className="bg-pink-100 text-pink-700 border-pink-200 font-medium">22 customers</Badge>
                  </div>

                  <div className="flex flex-col items-center justify-center space-y-3">
                    <div className="relative w-32 h-32">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="35" fill="none" stroke="#e5e7eb" strokeWidth="10" />
                        <circle
                          cx="50"
                          cy="50"
                          r="35"
                          fill="none"
                          stroke="#ec4899"
                          strokeWidth="10"
                          strokeDasharray={`${72 * 2.2} ${100 * 2.2}`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-pink-600">72%</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground text-center">Average utilization</p>
                  </div>

                  <div className="space-y-3 pt-3 border-t">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Low (&lt;50%)</span>
                      <span className="font-medium text-pink-700">28%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Medium (50-80%)</span>
                      <span className="font-medium text-pink-700">45%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">High (&gt;80%)</span>
                      <span className="font-medium text-pink-700">27%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sales PIC Performance Dashboard Section */}

      <div className="grid gap-6 md:grid-cols-2">
        {/* Risk Distribution Card */}
        <Card className="shadow-sm border">
          <CardContent className="p-6 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-foreground">Risk Distribution</h3>
              <p className="text-sm text-muted-foreground mt-1">Customer risk profile breakdown</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm bg-green-500" />
                    <span className="text-sm font-medium text-foreground">Low Risk</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-green-600">
                      {(dashboardStats.lowRiskCount / dashboardStats.activeCustomers) * 100 > 0
                        ? ((dashboardStats.lowRiskCount / dashboardStats.activeCustomers) * 100).toFixed(0)
                        : 0}
                      %
                    </span>
                    <span className="text-sm text-muted-foreground">({dashboardStats.lowRiskCount} customers)</span>
                  </div>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${(dashboardStats.lowRiskCount / dashboardStats.activeCustomers) * 100}%` }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm bg-yellow-500" />
                    <span className="text-sm font-medium text-foreground">Medium Risk</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-yellow-600">
                      {(dashboardStats.mediumRiskCount / dashboardStats.activeCustomers) * 100 > 0
                        ? ((dashboardStats.mediumRiskCount / dashboardStats.activeCustomers) * 100).toFixed(0)
                        : 0}
                      %
                    </span>
                    <span className="text-sm text-muted-foreground">({dashboardStats.mediumRiskCount} customers)</span>
                  </div>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${(dashboardStats.mediumRiskCount / dashboardStats.activeCustomers) * 100}%` }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm bg-red-500" />
                    <span className="text-sm font-medium text-foreground">High Risk</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-red-600">
                      {(dashboardStats.highRiskCount / dashboardStats.activeCustomers) * 100 > 0
                        ? ((dashboardStats.highRiskCount / dashboardStats.activeCustomers) * 100).toFixed(0)
                        : 0}
                      %
                    </span>
                    <span className="text-sm text-muted-foreground">({dashboardStats.highRiskCount} customers)</span>
                  </div>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${(dashboardStats.highRiskCount / dashboardStats.activeCustomers) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Performance Card */}
        <Card className="shadow-sm border">
          <CardContent className="p-6 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-foreground">Payment Performance</h3>
              <p className="text-sm text-muted-foreground mt-1">Payment behavior analysis</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-foreground">On Time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-green-600">78%</span>
                    <span className="text-sm text-muted-foreground">Excellent</span>
                  </div>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: "78%" }} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm font-medium text-foreground">Late (1-30 days)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-yellow-600">15%</span>
                    <span className="text-sm text-muted-foreground">Acceptable</span>
                  </div>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: "15%" }} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-medium text-foreground">Overdue (30+ days)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-red-600">7%</span>
                    <span className="text-sm text-muted-foreground">Concerning</span>
                  </div>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: "7%" }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Regional Breakdown Section */}
      <Card className="shadow-sm border">
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-foreground">Regional Breakdown</h3>
            <p className="text-sm text-muted-foreground mt-1">Detailed view of regional performance metrics</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Asia Pacific */}
            <Card className="shadow-sm border">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h4 className="text-lg font-bold text-foreground">Asia Pacific</h4>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 border-yellow-200 font-medium">
                    Medium
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Customers:</span>
                    <span className="text-sm font-bold text-foreground">68</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Exposure:</span>
                    <span className="text-sm font-bold text-foreground">RM 8,200,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Avg Score:</span>
                    <span className="text-sm font-bold text-orange-600">695</span>
                  </div>
                </div>

                <div className="pt-3 border-t space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Market Share</span>
                    <span className="text-xs font-bold text-foreground">52.1%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: "52.1%" }} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Europe */}
            <Card className="shadow-sm border">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h4 className="text-lg font-bold text-foreground">Europe</h4>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 font-medium">
                    Low
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Customers:</span>
                    <span className="text-sm font-bold text-foreground">42</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Exposure:</span>
                    <span className="text-sm font-bold text-foreground">RM 4,100,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Avg Score:</span>
                    <span className="text-sm font-bold text-green-600">720</span>
                  </div>
                </div>

                <div className="pt-3 border-t space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Market Share</span>
                    <span className="text-xs font-bold text-foreground">26.0%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: "26%" }} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Americas */}
            <Card className="shadow-sm border">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h4 className="text-lg font-bold text-foreground">Americas</h4>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 font-medium">
                    Low
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Customers:</span>
                    <span className="text-sm font-bold text-foreground">28</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Exposure:</span>
                    <span className="text-sm font-bold text-foreground">RM 2,800,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Avg Score:</span>
                    <span className="text-sm font-bold text-green-600">710</span>
                  </div>
                </div>

                <div className="pt-3 border-t space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Market Share</span>
                    <span className="text-xs font-bold text-foreground">17.8%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: "17.8%" }} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Africa */}
            <Card className="shadow-sm border">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h4 className="text-lg font-bold text-foreground">Africa</h4>
                  <Badge variant="secondary" className="bg-red-100 text-red-700 border-red-200 font-medium">
                    High
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Customers:</span>
                    <span className="text-sm font-bold text-foreground">18</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Exposure:</span>
                    <span className="text-sm font-bold text-foreground">RM 650,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Avg Score:</span>
                    <span className="text-sm font-bold text-red-600">620</span>
                  </div>
                </div>

                <div className="pt-3 border-t space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Market Share</span>
                    <span className="text-xs font-bold text-foreground">4.1%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: "4.1%" }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <div className="border-b">
        <div className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "pb-3 text-sm font-medium transition-colors relative",
                activeTab === tab.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {tab.label}
              {activeTab === tab.id && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "portfolio" && (
        <Card className="shadow-sm border">
          <CardContent className="p-6 space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Customer Credit Portfolio</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Comprehensive view of customer credit limits and utilization
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search customers..." className="pl-9 w-64" />
                </div>
                <Select defaultValue="all-countries">
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="All Countries" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-countries">All Countries</SelectItem>
                    <SelectItem value="malaysia">Malaysia</SelectItem>
                    <SelectItem value="netherlands">Netherlands</SelectItem>
                    <SelectItem value="singapore">Singapore</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all-risk">
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="All Risk" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-risk">All Risk</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="border rounded-lg overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                      Customer
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                      Country
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                      Type
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                      Tier
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                      Sales PIC
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                      Segment
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                      Total Sales
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                      Credit Limit
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                      Outstanding
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                      Overdue
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                      Utilization
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                      Risk Rating
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {customers.map((customer, index) => (
                    <tr key={index} className="hover:bg-muted/30 transition-colors">
                      <td className="px-3 py-3">
                        <p className="font-medium text-foreground text-sm whitespace-nowrap">{customer.name}</p>
                      </td>
                      <td className="px-3 py-3">
                        <p className="text-sm text-foreground whitespace-nowrap">{customer.country}</p>
                      </td>
                      <td className="px-3 py-3">
                        <p className="text-sm text-foreground whitespace-nowrap">{customer.type}</p>
                      </td>
                      <td className="px-3 py-3">
                        <p className="text-sm text-foreground text-center">{customer.tier}</p>
                      </td>
                      <td className="px-3 py-3">
                        <p className="text-sm text-foreground whitespace-nowrap">{customer.salesPic}</p>
                      </td>
                      <td className="px-3 py-3">
                        <Badge
                          variant="secondary"
                          className={cn(
                            "font-medium text-xs whitespace-nowrap",
                            customer.segment === "Bulk" && "bg-blue-100 text-blue-700 border-blue-200",
                            customer.segment === "Diff" && "bg-green-100 text-green-700 border-green-200",
                            customer.segment === "B2C" && "bg-pink-100 text-pink-700 border-pink-200",
                          )}
                        >
                          {customer.segment}
                        </Badge>
                      </td>
                      <td className="px-3 py-3">
                        <p
                          className={cn(
                            "text-sm font-medium whitespace-nowrap",
                            customer.segment === "Bulk" && "text-blue-700",
                            customer.segment === "Diff" && "text-green-700",
                            customer.segment === "B2C" && "text-pink-700",
                          )}
                        >
                          {customer.totalSales}
                        </p>
                      </td>
                      <td className="px-3 py-3">
                        <p className="text-sm text-foreground whitespace-nowrap">{customer.creditLimit}</p>
                      </td>
                      <td className="px-3 py-3">
                        <p className="text-sm text-foreground whitespace-nowrap">{customer.outstanding}</p>
                      </td>
                      <td className="px-3 py-3">
                        <p
                          className={cn(
                            "text-sm font-medium whitespace-nowrap",
                            customer.overdue !== "-" ? "text-destructive" : "text-muted-foreground",
                          )}
                        >
                          {customer.overdue}
                        </p>
                      </td>
                      <td className="px-3 py-3">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden w-16">
                            <div
                              className="h-full bg-primary rounded-full"
                              style={{ width: `${customer.utilization}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-foreground whitespace-nowrap">
                            {customer.utilization}%
                          </span>
                        </div>
                      </td>
                      <td className="px-3 py-3">
                        <Badge
                          variant="secondary"
                          className={cn(
                            "font-medium text-xs whitespace-nowrap",
                            customer.risk === "Low" && "bg-success/10 text-success border-success/20",
                            customer.risk === "Medium" && "bg-warning/10 text-warning border-warning/20",
                            customer.risk === "High" && "bg-destructive/10 text-destructive border-destructive/20",
                          )}
                        >
                          {customer.risk}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === "onboarding" && (
        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="shadow-sm border">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Applications</p>
                    <p className="text-4xl font-bold text-foreground mt-2">6</p>
                  </div>
                  <div className="rounded-lg bg-blue-100 p-2.5">
                    <User className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm border">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Completed</p>
                    <p className="text-4xl font-bold text-foreground mt-2">1</p>
                  </div>
                  <div className="rounded-lg bg-green-100 p-2.5">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm border">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">In Progress</p>
                    <p className="text-4xl font-bold text-foreground mt-2">3</p>
                  </div>
                  <div className="rounded-lg bg-yellow-100 p-2.5">
                    <Clock className="h-5 w-5 text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm border">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Avg. Time</p>
                    <p className="text-4xl font-bold text-foreground mt-2">6 days</p>
                  </div>
                  <div className="rounded-lg bg-purple-100 p-2.5">
                    <Calendar className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-sm border">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search by customer name or country..." className="pl-9" />
                </div>
                <Select defaultValue="all-stages">
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="All Stages" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-stages">All Stages</SelectItem>
                    <SelectItem value="kyc">KYC</SelectItem>
                    <SelectItem value="approval">Approval</SelectItem>
                    <SelectItem value="credit-rating">Credit Rating</SelectItem>
                    <SelectItem value="order-commercial">Order Commercial</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all-status">
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-status">All Status</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="on-hold">On Hold</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          DATE
                        </div>
                      </th>
                      <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          SALES PIC
                        </div>
                      </th>
                      <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4" />
                          CUSTOMER
                        </div>
                      </th>
                      <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4" />
                          COUNTRY
                        </div>
                      </th>
                      <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4" />
                          STAGE
                        </div>
                      </th>
                      <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">STATUS</th>
                      <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">
                        <div className="flex items-center gap-2">
                          <Clock4 className="h-4 w-4" />
                          TIME
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {onboardingApplications.map((app, index) => (
                      <tr key={index} className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-4">
                          <p className="text-sm text-foreground">{app.date}</p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm font-medium text-foreground">{app.salesPic}</p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm font-medium text-foreground">{app.customer}</p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm text-foreground">{app.country}</p>
                        </td>
                        <td className="px-6 py-4">
                          <Badge
                            variant="secondary"
                            className={cn(
                              "font-medium",
                              app.stage === "Approval" && "bg-green-100 text-green-700 border-green-200",
                              app.stage === "Credit Rating" && "bg-purple-100 text-purple-700 border-purple-200",
                              app.stage === "Order Commercial" && "bg-yellow-100 text-yellow-700 border-yellow-200",
                              app.stage === "KYC" && "bg-blue-100 text-blue-700 border-blue-200",
                            )}
                          >
                            {app.stage}
                          </Badge>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            {app.status === "In Progress" && (
                              <>
                                <Clock className="h-4 w-4 text-blue-600" />
                                <span className="text-sm font-medium text-blue-600">In Progress</span>
                              </>
                            )}
                            {app.status === "Completed" && (
                              <>
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span className="text-sm font-medium text-green-600">Completed</span>
                              </>
                            )}
                            {app.status === "On Hold" && (
                              <>
                                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                                <span className="text-sm font-medium text-yellow-600">On Hold</span>
                              </>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Clock4 className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-foreground">{app.time}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "requests" && (
        <Card className="shadow-sm border">
          <CardContent className="p-6 space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Credit Requests</h2>
                <p className="text-sm text-muted-foreground mt-1">Manage credit limit requests</p>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                New Credit Request
              </Button>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Request ID</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Customer</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Current Limit</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Requested Limit</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Increase</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Requested By</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Priority</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Status</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {creditRequests.map((request) => (
                    <tr key={request.id} className="hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4">
                        <p className="text-sm font-medium text-foreground">{request.id}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-foreground">{request.customer}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-foreground">{request.currentLimit}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-foreground">{request.requestedLimit}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-medium text-success">{request.increase}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-foreground">{request.requestedBy}</p>
                      </td>
                      <td className="px-6 py-4">
                        <Badge
                          variant="secondary"
                          className={cn(
                            "font-medium",
                            request.priority === "Low" && "bg-success/10 text-success border-success/20",
                            request.priority === "Medium" && "bg-warning/10 text-warning border-warning/20",
                            request.priority === "High" && "bg-destructive/10 text-destructive border-destructive/20",
                          )}
                        >
                          {request.priority}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <Badge
                          variant="secondary"
                          className={cn(
                            "font-medium",
                            request.status === "Approved" && "bg-success/10 text-success border-success/20",
                            request.status === "Pending" && "bg-warning/10 text-warning border-warning/20",
                            request.status === "Under Review" && "bg-info/10 text-info border-info/20",
                          )}
                        >
                          {request.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="h-8 text-muted-foreground hover:text-foreground">
                            Review
                          </Button>
                          {request.status === "Pending" && (
                            <>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 text-muted-foreground hover:text-foreground"
                              >
                                Approve
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 text-muted-foreground hover:text-foreground"
                              >
                                Reject
                              </Button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === "invoices" && (
        <Card className="shadow-sm border">
          <CardContent className="p-6 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Outstanding Invoices</h2>
              <p className="text-sm text-muted-foreground mt-1">Monitor pending payments and overdue invoices</p>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Invoice ID</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Customer</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Sales PIC</th>
                    {/* </CHANGE> */}
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Segment</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Amount</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Due Date</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Status</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Days Overdue</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Remark</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {invoices.map((invoice) => (
                    <tr key={invoice.id} className="hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4">
                        <p className="text-sm font-medium text-foreground">{invoice.id}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-foreground">{invoice.customer}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-foreground">{invoice.salesPic}</p>
                      </td>
                      {/* </CHANGE> */}
                      <td className="px-6 py-4">
                        <Badge
                          variant="secondary"
                          className={cn(
                            "font-medium text-xs whitespace-nowrap",
                            invoice.segment === "Bulk" && "bg-blue-100 text-blue-700 border-blue-200",
                            invoice.segment === "Diff" && "bg-green-100 text-green-700 border-green-200",
                            invoice.segment === "B2C" && "bg-pink-100 text-pink-700 border-pink-200",
                          )}
                        >
                          {invoice.segment}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-foreground">{invoice.amount}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-foreground">{invoice.dueDate}</p>
                      </td>
                      <td className="px-6 py-4">
                        <Badge
                          variant="secondary"
                          className={cn(
                            "font-medium",
                            invoice.status === "Overdue" && "bg-destructive/10 text-destructive border-destructive/20",
                            invoice.status === "Due Soon" && "bg-warning/10 text-warning border-warning/20",
                          )}
                        >
                          {invoice.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <p
                          className={cn(
                            "text-sm font-medium",
                            invoice.daysOverdue ? "text-destructive" : "text-muted-foreground",
                          )}
                        >
                          {invoice.daysOverdue || "-"}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-muted-foreground">
                          {invoice.daysOverdue
                            ? invoice.daysOverdue > 60
                              ? "Legal Action"
                              : invoice.daysOverdue <= 30
                                ? "First Reminder Sent"
                                : "Second Reminder Sent"
                            : "-"}
                        </p>
                        {/* </CHANGE> */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === "tracking" && (
        <Card className="shadow-sm border">
          <CardContent className="p-6 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Payment History</h2>
              <p className="text-sm text-muted-foreground mt-1">Track all payments and transaction details</p>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Payment ID</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Customer Name</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Sales PIC</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Segment</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Date</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Amount</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Method</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Reference</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Order ID</th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-foreground">PAY-2024-001</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Sunrise Foods Malaysia Sdn Bhd</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Bruce Lee</p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 font-medium">
                        Bulk
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">2024-11-28</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">RM 2,520,000</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Wire Transfer</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">WT-2024-1128-001</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">ORD-2024-001</p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 font-medium">
                        Completed
                      </Badge>
                    </td>
                  </tr>

                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-foreground">PAY-2024-002</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Golden Palm Industries Ltd</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Sarah Chen</p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 font-medium">
                        Diff
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">2024-10-30</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">RM 1,764,000</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Letter of Credit</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">LC-2024-1030-002</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">ORD-2024-003</p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 font-medium">
                        Completed
                      </Badge>
                    </td>
                  </tr>

                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-foreground">PAY-2024-003</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Pacific Trading Corporation</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Michael Wong</p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-200 font-medium">
                        B2C
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">2024-09-28</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">RM 1,545,600</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Wire Transfer</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">WT-2024-0928-003</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">ORD-2024-005</p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 font-medium">
                        Completed
                      </Badge>
                    </td>
                  </tr>

                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-foreground">PAY-2024-004</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Asia Commodities Group</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Bruce Lee</p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 font-medium">
                        Bulk
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">2024-09-15</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">RM 3,360,000</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Letter of Credit</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">LC-2024-0915-004</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">ORD-2024-007</p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 font-medium">
                        Completed
                      </Badge>
                    </td>
                  </tr>

                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-foreground">PAY-2024-005</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Southeast Oil Refineries</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Sarah Chen</p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 font-medium">
                        Diff
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">2024-08-22</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">RM 2,100,000</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Wire Transfer</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">WT-2024-0822-005</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">ORD-2024-009</p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 font-medium">
                        Completed
                      </Badge>
                    </td>
                  </tr>

                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-foreground">PAY-2024-006</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Metro Foods Distribution</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Michael Wong</p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-200 font-medium">
                        B2C
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">2024-08-10</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">RM 1,890,000</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Bank Transfer</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">BT-2024-0810-006</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">ORD-2024-011</p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 font-medium">
                        Completed
                      </Badge>
                    </td>
                  </tr>

                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-foreground">PAY-2024-007</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Global Agri Solutions</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Bruce Lee</p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 font-medium">
                        Bulk
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">2024-07-25</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">RM 2,940,000</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Letter of Credit</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">LC-2024-0725-007</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">ORD-2024-013</p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 font-medium">
                        Completed
                      </Badge>
                    </td>
                  </tr>

                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-foreground">PAY-2024-008</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Premier Trading House</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Sarah Chen</p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 font-medium">
                        Diff
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">2024-07-12</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">RM 1,680,000</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Wire Transfer</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">WT-2024-0712-008</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">ORD-2024-015</p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 font-medium">
                        Completed
                      </Badge>
                    </td>
                  </tr>

                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-foreground">PAY-2024-009</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Oceanic Resources Ltd</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Michael Wong</p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-200 font-medium">
                        B2C
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">2024-06-28</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">RM 3,150,000</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Bank Transfer</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">BT-2024-0628-009</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">ORD-2024-017</p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 font-medium">
                        Completed
                      </Badge>
                    </td>
                  </tr>

                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-foreground">PAY-2024-010</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Continental Palm Exports</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Bruce Lee</p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 font-medium">
                        Bulk
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">2024-06-15</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">RM 2,310,000</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">Letter of Credit</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">LC-2024-0615-010</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-foreground">ORD-2024-019</p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 font-medium">
                        Completed
                      </Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === "portfolio2" && (
        <Card className="shadow-sm border">
          <CardContent className="p-6 space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Portfolio 2 - Customer Data</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Comprehensive customer assessment and credit analysis
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search customers..." className="pl-9 w-64" />
                </div>
              </div>
            </div>

            {portfolio2Loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-center space-y-3">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
                  <p className="text-sm text-muted-foreground">Loading portfolio data...</p>
                </div>
              </div>
            ) : (
              <>
                <div className="border rounded-lg overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                          Customer No
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                          Customer Name
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                          Country
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                          Strategic Importance
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                          Digital Footprint
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                          External Rating
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                          Credit Rating
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                          Profitability
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                          Current Ratio
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                          Gearing Ratios
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                          Net Worth (MYR)
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                          Business Entity
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                          Years in Operation
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                          History with SDG
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                          Country Risk
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                          Volume Trends
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                          Default History
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                          Sanction
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                          Governance
                        </th>
                        <th className="text-left text-xs font-medium text-muted-foreground px-3 py-2.5 whitespace-nowrap">
                          Sustainability
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {portfolio2CurrentData.map((row, index) => (
                        <tr key={index} className="hover:bg-muted/30 transition-colors">
                          <td className="px-3 py-3">
                            <p className="text-sm font-medium text-foreground whitespace-nowrap">
                              {row["Customer No"]}
                            </p>
                          </td>
                          <td className="px-3 py-3">
                            <p className="text-sm font-medium text-foreground whitespace-nowrap">
                              {row["Customer Name"]}
                            </p>
                          </td>
                          <td className="px-3 py-3">
                            <p className="text-sm text-foreground whitespace-nowrap">{row.Country}</p>
                          </td>
                          <td className="px-3 py-3">
                            <Badge
                              variant="secondary"
                              className={cn(
                                "font-medium text-xs whitespace-nowrap",
                                row["Strategic Importance"]?.toLowerCase().includes("high") &&
                                  "bg-green-100 text-green-700 border-green-200",
                                row["Strategic Importance"]?.toLowerCase().includes("medium") &&
                                  "bg-yellow-100 text-yellow-700 border-yellow-200",
                                row["Strategic Importance"]?.toLowerCase().includes("low") &&
                                  "bg-red-100 text-red-700 border-red-200",
                              )}
                            >
                              {row["Strategic Importance"]}
                            </Badge>
                          </td>
                          <td className="px-3 py-3">
                            <p className="text-sm text-foreground whitespace-nowrap">{row["Digital Footprint"]}</p>
                          </td>
                          <td className="px-3 py-3">
                            <p className="text-sm text-foreground whitespace-nowrap">{row["External Rating"]}</p>
                          </td>
                          <td className="px-3 py-3">
                            <p className="text-sm text-foreground whitespace-nowrap">
                              {row["Independent Credit Rating"]}
                            </p>
                          </td>
                          <td className="px-3 py-3">
                            <p
                              className={cn(
                                "text-sm font-medium whitespace-nowrap",
                                Number(row.Profitability) >= 0 ? "text-green-600" : "text-red-600",
                              )}
                            >
                              {row.Profitability}
                            </p>
                          </td>
                          <td className="px-3 py-3">
                            <p className="text-sm text-foreground whitespace-nowrap">{row["Current Ratio"]}</p>
                          </td>
                          <td className="px-3 py-3">
                            <p className="text-sm text-foreground whitespace-nowrap">{row["Gearing Ratios"]}</p>
                          </td>
                          <td className="px-3 py-3">
                            <p className="text-sm text-foreground whitespace-nowrap">
                              {row["Shareholder Funds / Net Worth (MYR)"]}
                            </p>
                          </td>
                          <td className="px-3 py-3">
                            <p className="text-sm text-foreground whitespace-nowrap">
                              {row["Type of Business Entity"]}
                            </p>
                          </td>
                          <td className="px-3 py-3">
                            <p className="text-sm text-foreground text-center">{row["Years in Operation"]}</p>
                          </td>
                          <td className="px-3 py-3">
                            <p className="text-sm text-foreground text-center">{row["Business History with SDG"]}</p>
                          </td>
                          <td className="px-3 py-3">
                            <Badge
                              variant="secondary"
                              className={cn(
                                "font-medium text-xs whitespace-nowrap",
                                row["Country Risk"]?.toLowerCase() === "low" &&
                                  "bg-green-100 text-green-700 border-green-200",
                                row["Country Risk"]?.toLowerCase() === "medium" &&
                                  "bg-yellow-100 text-yellow-700 border-yellow-200",
                                row["Country Risk"]?.toLowerCase() === "high" &&
                                  "bg-red-100 text-red-700 border-red-200",
                              )}
                            >
                              {row["Country Risk"]}
                            </Badge>
                          </td>
                          <td className="px-3 py-3">
                            <p className="text-sm text-foreground whitespace-nowrap">
                              {row["Contract frequency and volume trends"]}
                            </p>
                          </td>
                          <td className="px-3 py-3">
                            <Badge
                              variant="secondary"
                              className={cn(
                                "font-medium text-xs whitespace-nowrap",
                                row["Default History"]?.toLowerCase() === "none" &&
                                  "bg-green-100 text-green-700 border-green-200",
                                row["Default History"]?.toLowerCase() !== "none" &&
                                  "bg-red-100 text-red-700 border-red-200",
                              )}
                            >
                              {row["Default History"]}
                            </Badge>
                          </td>
                          <td className="px-3 py-3">
                            <Badge
                              variant="secondary"
                              className={cn(
                                "font-medium text-xs whitespace-nowrap",
                                row.Sanction?.toLowerCase() === "pass" &&
                                  "bg-green-100 text-green-700 border-green-200",
                                row.Sanction?.toLowerCase() === "fail" && "bg-red-100 text-red-700 border-red-200",
                              )}
                            >
                              {row.Sanction}
                            </Badge>
                          </td>
                          <td className="px-3 py-3">
                            <Badge
                              variant="secondary"
                              className={cn(
                                "font-medium text-xs whitespace-nowrap",
                                row.Governance?.toLowerCase() === "yes" &&
                                  "bg-green-100 text-green-700 border-green-200",
                                row.Governance?.toLowerCase() === "no" && "bg-gray-100 text-gray-700 border-gray-200",
                              )}
                            >
                              {row.Governance}
                            </Badge>
                          </td>
                          <td className="px-3 py-3">
                            <Badge
                              variant="secondary"
                              className={cn(
                                "font-medium text-xs whitespace-nowrap",
                                row["Sustainability Goals"]?.toLowerCase() === "yes" &&
                                  "bg-green-100 text-green-700 border-green-200",
                                row["Sustainability Goals"]?.toLowerCase() === "no" &&
                                  "bg-gray-100 text-gray-700 border-gray-200",
                              )}
                            >
                              {row["Sustainability Goals"]}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination Controls */}
                <div className="flex items-center justify-between pt-4">
                  <p className="text-sm text-muted-foreground">
                    Showing {portfolio2StartIndex + 1} to {Math.min(portfolio2EndIndex, portfolio2Data.length)} of{" "}
                    {portfolio2Data.length} entries
                  </p>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPortfolio2CurrentPage((prev) => Math.max(1, prev - 1))}
                      disabled={portfolio2CurrentPage === 1}
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </Button>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: portfolio2TotalPages }, (_, i) => i + 1).map((page) => (
                        <Button
                          key={page}
                          variant={portfolio2CurrentPage === page ? "default" : "outline"}
                          size="sm"
                          onClick={() => setPortfolio2CurrentPage(page)}
                          className="w-10"
                        >
                          {page}
                        </Button>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPortfolio2CurrentPage((prev) => Math.min(portfolio2TotalPages, prev + 1))}
                      disabled={portfolio2CurrentPage === portfolio2TotalPages}
                    >
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
