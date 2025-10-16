"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Filter,
  Download,
  TrendingUp,
  TrendingDown,
  Minus,
  MoreVertical,
  Eye,
  FileText,
  AlertCircle,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function PortfolioPage() {
  const customers = [
    {
      id: 1,
      name: "Golden Harvest Trading",
      country: "Malaysia",
      creditScore: 85,
      creditLimit: 2500000,
      utilized: 1800000,
      risk: "Low",
      trend: "up",
      lastReview: "2024-01-10",
      status: "Active",
      compliance: "Compliant",
    },
    {
      id: 2,
      name: "Tropical Oils Ltd",
      country: "Indonesia",
      creditScore: 72,
      creditLimit: 1500000,
      utilized: 1200000,
      risk: "Medium",
      trend: "stable",
      lastReview: "2024-01-08",
      status: "Active",
      compliance: "Compliant",
    },
    {
      id: 3,
      name: "Pacific Palm Industries",
      country: "Thailand",
      creditScore: 58,
      creditLimit: 800000,
      utilized: 750000,
      risk: "High",
      trend: "down",
      lastReview: "2024-01-05",
      status: "Under Review",
      compliance: "Action Required",
    },
    {
      id: 4,
      name: "Green Valley Exports",
      country: "Malaysia",
      creditScore: 91,
      creditLimit: 3000000,
      utilized: 1500000,
      risk: "Low",
      trend: "up",
      lastReview: "2024-01-12",
      status: "Active",
      compliance: "Compliant",
    },
    {
      id: 5,
      name: "Sunrise Palm Trading",
      country: "Singapore",
      creditScore: 78,
      creditLimit: 2000000,
      utilized: 1600000,
      risk: "Low",
      trend: "stable",
      lastReview: "2024-01-09",
      status: "Active",
      compliance: "Compliant",
    },
    {
      id: 6,
      name: "Eastern Commodities",
      country: "Indonesia",
      creditScore: 65,
      creditLimit: 1200000,
      utilized: 1100000,
      risk: "Medium",
      trend: "down",
      lastReview: "2024-01-07",
      status: "Active",
      compliance: "Pending Review",
    },
    {
      id: 7,
      name: "Royal Palm Corporation",
      country: "Malaysia",
      creditScore: 88,
      creditLimit: 2800000,
      utilized: 1400000,
      risk: "Low",
      trend: "up",
      lastReview: "2024-01-11",
      status: "Active",
      compliance: "Compliant",
    },
    {
      id: 8,
      name: "Asia Pacific Oils",
      country: "Thailand",
      creditScore: 70,
      creditLimit: 1800000,
      utilized: 1300000,
      risk: "Medium",
      trend: "stable",
      lastReview: "2024-01-06",
      status: "Active",
      compliance: "Compliant",
    },
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getUtilizationPercentage = (utilized: number, limit: number) => {
    return Math.round((utilized / limit) * 100)
  }

  return (
    <div className="p-8">
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground text-balance">Customer Portfolio</h2>
            <p className="text-muted-foreground mt-1 text-sm">Manage and monitor all customer credit accounts</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button size="sm">
              <FileText className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <p className="text-sm font-medium text-muted-foreground">Total Customers</p>
              <p className="text-3xl font-bold text-foreground mt-2">75</p>
              <p className="text-xs text-success mt-2">↑ 8 this month</p>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <p className="text-sm font-medium text-muted-foreground">Total Credit Exposure</p>
              <p className="text-3xl font-bold text-foreground mt-2">$45.2M</p>
              <p className="text-xs text-muted-foreground mt-2">72% utilized</p>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <p className="text-sm font-medium text-muted-foreground">Avg Credit Score</p>
              <p className="text-3xl font-bold text-foreground mt-2">78</p>
              <p className="text-xs text-success mt-2">↑ 3 points</p>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <p className="text-sm font-medium text-muted-foreground">Compliance Issues</p>
              <p className="text-3xl font-bold text-warning mt-2">3</p>
              <p className="text-xs text-muted-foreground mt-2">Require attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="shadow-sm">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search customers..." className="pl-10 h-9" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-full md:w-40 h-9">
                  <SelectValue placeholder="Risk Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Risk Levels</SelectItem>
                  <SelectItem value="low">Low Risk</SelectItem>
                  <SelectItem value="medium">Medium Risk</SelectItem>
                  <SelectItem value="high">High Risk</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-full md:w-40 h-9">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  <SelectItem value="malaysia">Malaysia</SelectItem>
                  <SelectItem value="indonesia">Indonesia</SelectItem>
                  <SelectItem value="thailand">Thailand</SelectItem>
                  <SelectItem value="singapore">Singapore</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm" className="h-9 bg-transparent">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Customer Table */}
        <Card className="shadow-sm">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b bg-muted/30">
                  <tr>
                    <th className="text-left p-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="text-left p-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider">
                      Credit Score
                    </th>
                    <th className="text-left p-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider">
                      Credit Limit
                    </th>
                    <th className="text-left p-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider">
                      Utilization
                    </th>
                    <th className="text-left p-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider">
                      Risk Level
                    </th>
                    <th className="text-left p-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider">
                      Compliance
                    </th>
                    <th className="text-left p-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider">
                      Status
                    </th>
                    <th className="text-right p-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => {
                    const utilization = getUtilizationPercentage(customer.utilized, customer.creditLimit)
                    return (
                      <tr key={customer.id} className="border-b hover:bg-muted/20 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="text-sm font-semibold text-primary">{customer.name.charAt(0)}</span>
                            </div>
                            <div>
                              <p className="font-medium text-foreground text-sm">{customer.name}</p>
                              <p className="text-xs text-muted-foreground">{customer.country}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <span className="text-base font-bold text-foreground">{customer.creditScore}</span>
                            {customer.trend === "up" && <TrendingUp className="h-4 w-4 text-success" />}
                            {customer.trend === "down" && <TrendingDown className="h-4 w-4 text-destructive" />}
                            {customer.trend === "stable" && <Minus className="h-4 w-4 text-muted-foreground" />}
                          </div>
                        </td>
                        <td className="p-4">
                          <p className="font-medium text-foreground text-sm">{formatCurrency(customer.creditLimit)}</p>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-muted-foreground">{utilization}%</span>
                              <span className="text-foreground font-medium">{formatCurrency(customer.utilized)}</span>
                            </div>
                            <div className="h-1.5 w-32 rounded-full bg-secondary">
                              <div
                                className={`h-full rounded-full ${
                                  utilization > 90 ? "bg-destructive" : utilization > 75 ? "bg-warning" : "bg-success"
                                }`}
                                style={{ width: `${utilization}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge
                            variant="secondary"
                            className={
                              customer.risk === "Low"
                                ? "bg-success/10 text-success border-success/20"
                                : customer.risk === "Medium"
                                  ? "bg-warning/10 text-warning border-warning/20"
                                  : "bg-destructive/10 text-destructive border-destructive/20"
                            }
                          >
                            {customer.risk}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            {customer.compliance === "Action Required" && (
                              <AlertCircle className="h-4 w-4 text-destructive" />
                            )}
                            <span
                              className={`text-xs font-medium ${
                                customer.compliance === "Compliant"
                                  ? "text-success"
                                  : customer.compliance === "Action Required"
                                    ? "text-destructive"
                                    : "text-warning"
                              }`}
                            >
                              {customer.compliance}
                            </span>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge variant="outline" className="text-xs">
                            {customer.status}
                          </Badge>
                        </td>
                        <td className="p-4 text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="h-4 w-4 mr-2" />
                                View Profile
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <FileText className="h-4 w-4 mr-2" />
                                Generate Report
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <TrendingUp className="h-4 w-4 mr-2" />
                                Update Assessment
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Showing 8 of 75 customers</p>
          <div className="flex gap-1">
            <Button variant="outline" size="sm">
              Previous
            </Button>
            <Button variant="outline" size="sm">
              1
            </Button>
            <Button variant="default" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
