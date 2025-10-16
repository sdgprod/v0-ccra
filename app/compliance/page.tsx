"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  Search,
  Filter,
  Download,
  FileText,
  Calendar,
  TrendingUp,
  XCircle,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function CompliancePage() {
  const complianceOverview = [
    { label: "Total Customers", value: "75", status: "neutral" },
    { label: "Fully Compliant", value: "68", status: "success" },
    { label: "Pending Review", value: "4", status: "warning" },
    { label: "Action Required", value: "3", status: "error" },
  ]

  const certifications = [
    {
      name: "RSPO Certification",
      description: "Roundtable on Sustainable Palm Oil",
      compliant: 72,
      pending: 2,
      expired: 1,
      total: 75,
    },
    {
      name: "ISCC Certification",
      description: "International Sustainability & Carbon",
      compliant: 68,
      pending: 4,
      expired: 3,
      total: 75,
    },
    {
      name: "AML/KYC Verification",
      description: "Anti-Money Laundering & Know Your Customer",
      compliant: 73,
      pending: 2,
      expired: 0,
      total: 75,
    },
    {
      name: "Sanctions Screening",
      description: "International sanctions list verification",
      compliant: 70,
      pending: 5,
      expired: 0,
      total: 75,
    },
  ]

  const alerts = [
    {
      id: 1,
      customer: "Pacific Palm Industries",
      issue: "ISCC Certification Expired",
      severity: "High",
      date: "2024-01-15",
      daysOverdue: 5,
      status: "Action Required",
    },
    {
      id: 2,
      customer: "Eastern Commodities",
      issue: "AML Review Pending",
      severity: "Medium",
      date: "2024-01-14",
      daysOverdue: 0,
      status: "Pending",
    },
    {
      id: 3,
      customer: "Tropical Oils Ltd",
      issue: "RSPO Renewal Due Soon",
      severity: "Low",
      date: "2024-01-12",
      daysOverdue: 0,
      status: "Upcoming",
    },
    {
      id: 4,
      customer: "Asia Pacific Oils",
      issue: "Sanctions Screening Incomplete",
      severity: "High",
      date: "2024-01-10",
      daysOverdue: 10,
      status: "Action Required",
    },
    {
      id: 5,
      customer: "Green Valley Exports",
      issue: "Document Upload Required",
      severity: "Medium",
      date: "2024-01-09",
      daysOverdue: 0,
      status: "Pending",
    },
  ]

  const upcomingRenewals = [
    {
      customer: "Golden Harvest Trading",
      certification: "RSPO",
      currentExpiry: "2025-12-15",
      daysUntilExpiry: 334,
      status: "On Track",
    },
    {
      customer: "Royal Palm Corporation",
      certification: "ISCC",
      currentExpiry: "2025-11-20",
      daysUntilExpiry: 309,
      status: "On Track",
    },
    {
      customer: "Sunrise Palm Trading",
      certification: "AML/KYC",
      currentExpiry: "2025-01-05",
      daysUntilExpiry: 0,
      status: "Renewal Started",
    },
    {
      customer: "Tropical Oils Ltd",
      certification: "RSPO",
      currentExpiry: "2024-03-20",
      daysUntilExpiry: 68,
      status: "Action Needed",
    },
    {
      customer: "Green Valley Exports",
      certification: "Sanctions",
      currentExpiry: "2024-07-10",
      daysUntilExpiry: 180,
      status: "On Track",
    },
  ]

  const auditTrail = [
    {
      id: 1,
      action: "Compliance Check Completed",
      customer: "Golden Harvest Trading",
      user: "Sarah Chen",
      timestamp: "2024-01-15 14:30",
      result: "Passed",
    },
    {
      id: 2,
      action: "Certificate Uploaded",
      customer: "Royal Palm Corporation",
      user: "Ahmad Ibrahim",
      timestamp: "2024-01-15 11:20",
      result: "Verified",
    },
    {
      id: 3,
      action: "Compliance Alert Resolved",
      customer: "Sunrise Palm Trading",
      user: "Sarah Chen",
      timestamp: "2024-01-14 16:45",
      result: "Resolved",
    },
    {
      id: 4,
      action: "AML Screening Initiated",
      customer: "Eastern Commodities",
      user: "System",
      timestamp: "2024-01-14 09:15",
      result: "In Progress",
    },
    {
      id: 5,
      action: "Compliance Review Scheduled",
      customer: "Tropical Oils Ltd",
      user: "Sarah Chen",
      timestamp: "2024-01-13 13:00",
      result: "Scheduled",
    },
  ]

  return (
    <main className="container px-6 py-8">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-foreground text-balance">Compliance Monitoring</h2>
            <p className="text-muted-foreground mt-2">Track certifications, regulations, and compliance status</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button>
              <FileText className="h-4 w-4 mr-2" />
              Compliance Summary
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid gap-6 md:grid-cols-4">
          {complianceOverview.map((item) => (
            <Card key={item.label}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                    <p className="text-3xl font-bold text-foreground mt-2">{item.value}</p>
                  </div>
                  <div
                    className={`rounded-lg p-3 ${
                      item.status === "success"
                        ? "bg-success/10"
                        : item.status === "warning"
                          ? "bg-warning/10"
                          : item.status === "error"
                            ? "bg-destructive/10"
                            : "bg-primary/10"
                    }`}
                  >
                    {item.status === "success" && <CheckCircle className="h-6 w-6 text-success" />}
                    {item.status === "warning" && <Clock className="h-6 w-6 text-warning" />}
                    {item.status === "error" && <AlertTriangle className="h-6 w-6 text-destructive" />}
                    {item.status === "neutral" && <Shield className="h-6 w-6 text-primary" />}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certification Status */}
        <Card>
          <CardHeader>
            <CardTitle>Certification Status Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {certifications.map((cert) => {
                const complianceRate = Math.round((cert.compliant / cert.total) * 100)
                return (
                  <div key={cert.name} className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-foreground">{cert.name}</p>
                        <p className="text-sm text-muted-foreground">{cert.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-foreground">{complianceRate}%</p>
                        <p className="text-sm text-muted-foreground">Compliance Rate</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Progress value={complianceRate} className="h-2" />
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4">
                          <span className="text-success">
                            <CheckCircle className="h-4 w-4 inline mr-1" />
                            {cert.compliant} Compliant
                          </span>
                          <span className="text-warning">
                            <Clock className="h-4 w-4 inline mr-1" />
                            {cert.pending} Pending
                          </span>
                          {cert.expired > 0 && (
                            <span className="text-destructive">
                              <XCircle className="h-4 w-4 inline mr-1" />
                              {cert.expired} Expired
                            </span>
                          )}
                        </div>
                        <span className="text-muted-foreground">{cert.total} Total</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Tabs Section */}
        <Tabs defaultValue="alerts" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="alerts">Active Alerts</TabsTrigger>
            <TabsTrigger value="renewals">Upcoming Renewals</TabsTrigger>
            <TabsTrigger value="audit">Audit Trail</TabsTrigger>
          </TabsList>

          {/* Active Alerts Tab */}
          <TabsContent value="alerts" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Compliance Alerts</CardTitle>
                  <div className="flex gap-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search alerts..." className="pl-10 w-64" />
                    </div>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-40">
                        <Filter className="h-4 w-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Severity</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {alerts.map((alert) => (
                    <div
                      key={alert.id}
                      className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`h-10 w-10 rounded-full flex items-center justify-center ${
                            alert.severity === "High"
                              ? "bg-destructive/10"
                              : alert.severity === "Medium"
                                ? "bg-warning/10"
                                : "bg-primary/10"
                          }`}
                        >
                          {alert.severity === "High" ? (
                            <AlertTriangle className="h-5 w-5 text-destructive" />
                          ) : alert.severity === "Medium" ? (
                            <Clock className="h-5 w-5 text-warning" />
                          ) : (
                            <Shield className="h-5 w-5 text-primary" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{alert.customer}</p>
                          <p className="text-sm text-muted-foreground">{alert.issue}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {alert.date}
                            {alert.daysOverdue > 0 && ` • ${alert.daysOverdue} days overdue`}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge
                          variant={
                            alert.severity === "High"
                              ? "destructive"
                              : alert.severity === "Medium"
                                ? "secondary"
                                : "default"
                          }
                          className={
                            alert.severity === "Medium"
                              ? "bg-warning text-warning-foreground"
                              : alert.severity === "Low"
                                ? "bg-primary text-primary-foreground"
                                : ""
                          }
                        >
                          {alert.severity}
                        </Badge>
                        <Badge variant="outline">{alert.status}</Badge>
                        <Button size="sm">Resolve</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Upcoming Renewals Tab */}
          <TabsContent value="renewals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Certification Renewals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingRenewals.map((renewal, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`h-10 w-10 rounded-full flex items-center justify-center ${
                            renewal.daysUntilExpiry < 90
                              ? "bg-warning/10"
                              : renewal.status === "Renewal Started"
                                ? "bg-primary/10"
                                : "bg-success/10"
                          }`}
                        >
                          <Calendar
                            className={`h-5 w-5 ${
                              renewal.daysUntilExpiry < 90
                                ? "text-warning"
                                : renewal.status === "Renewal Started"
                                  ? "text-primary"
                                  : "text-success"
                            }`}
                          />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{renewal.customer}</p>
                          <p className="text-sm text-muted-foreground">{renewal.certification} Certification</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Expires: {renewal.currentExpiry}
                            {renewal.daysUntilExpiry > 0 && ` (${renewal.daysUntilExpiry} days)`}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge
                          variant={
                            renewal.daysUntilExpiry < 90
                              ? "secondary"
                              : renewal.status === "Renewal Started"
                                ? "default"
                                : "outline"
                          }
                          className={
                            renewal.daysUntilExpiry < 90
                              ? "bg-warning text-warning-foreground"
                              : renewal.status === "Renewal Started"
                                ? "bg-primary text-primary-foreground"
                                : ""
                          }
                        >
                          {renewal.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          Initiate Renewal
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm font-medium text-muted-foreground">Expiring This Quarter</p>
                  <p className="text-3xl font-bold text-warning mt-2">8</p>
                  <p className="text-sm text-muted-foreground mt-2">Certifications</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm font-medium text-muted-foreground">Renewal In Progress</p>
                  <p className="text-3xl font-bold text-primary mt-2">5</p>
                  <p className="text-sm text-muted-foreground mt-2">Applications</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm font-medium text-muted-foreground">Completed This Month</p>
                  <p className="text-3xl font-bold text-success mt-2">12</p>
                  <p className="text-sm text-muted-foreground mt-2">Renewals</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Audit Trail Tab */}
          <TabsContent value="audit" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Compliance Audit Trail</CardTitle>
                  <div className="flex gap-3">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Filter by action" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Actions</SelectItem>
                        <SelectItem value="check">Compliance Checks</SelectItem>
                        <SelectItem value="upload">Document Uploads</SelectItem>
                        <SelectItem value="alert">Alert Management</SelectItem>
                        <SelectItem value="screening">Screenings</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export Log
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {auditTrail.map((entry) => (
                    <div
                      key={entry.id}
                      className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{entry.action}</p>
                          <p className="text-sm text-muted-foreground">{entry.customer}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {entry.timestamp} • by {entry.user}
                          </p>
                        </div>
                      </div>
                      <Badge
                        variant={
                          entry.result === "Passed" || entry.result === "Verified" || entry.result === "Resolved"
                            ? "default"
                            : "outline"
                        }
                        className={
                          entry.result === "Passed" || entry.result === "Verified" || entry.result === "Resolved"
                            ? "bg-success text-success-foreground"
                            : ""
                        }
                      >
                        {entry.result}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Audit Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Total Actions</p>
                    <p className="text-2xl font-bold text-foreground">1,247</p>
                    <div className="flex items-center gap-1 text-success text-sm">
                      <TrendingUp className="h-4 w-4" />
                      <span>+18% this month</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Checks Completed</p>
                    <p className="text-2xl font-bold text-foreground">856</p>
                    <p className="text-sm text-muted-foreground">This month</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Documents Verified</p>
                    <p className="text-2xl font-bold text-foreground">234</p>
                    <p className="text-sm text-muted-foreground">This month</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Alerts Resolved</p>
                    <p className="text-2xl font-bold text-foreground">45</p>
                    <p className="text-sm text-muted-foreground">This month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
