"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  TrendingUp,
  TrendingDown,
  Building2,
  DollarSign,
  Calendar,
  MapPin,
  Mail,
  Phone,
  FileText,
  CheckCircle,
  Clock,
  Download,
  Edit,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function RiskProfilePage() {
  const customerData = {
    name: "Golden Harvest Trading",
    registrationNumber: "201801234567",
    country: "Malaysia",
    industry: "Trading",
    yearsInBusiness: 12,
    address: "123 Palm Avenue, Kuala Lumpur, Malaysia",
    contactPerson: "Ahmad Ibrahim",
    email: "ahmad@goldenharvesttrading.com",
    phone: "+60 12 345 6789",
    creditScore: 85,
    creditLimit: 2500000,
    utilized: 1800000,
    available: 700000,
    risk: "Low",
    status: "Active",
    lastReview: "2024-01-10",
    nextReview: "2024-04-10",
  }

  const financialMetrics = [
    { label: "Annual Revenue", value: "$15.5M", change: "+12%", trend: "up" },
    { label: "Total Assets", value: "$8.2M", change: "+8%", trend: "up" },
    { label: "Current Liabilities", value: "$2.1M", change: "-5%", trend: "down" },
    { label: "Net Profit Margin", value: "18.5%", change: "+2.3%", trend: "up" },
    { label: "Debt-to-Equity Ratio", value: "0.42", change: "-0.08", trend: "down" },
    { label: "Current Ratio", value: "2.8", change: "+0.3", trend: "up" },
  ]

  const paymentHistory = [
    { month: "Dec 2023", amount: 450000, status: "On Time", days: 0 },
    { month: "Nov 2023", amount: 380000, status: "On Time", days: 0 },
    { month: "Oct 2023", amount: 520000, status: "On Time", days: 0 },
    { month: "Sep 2023", amount: 410000, status: "Early", days: -3 },
    { month: "Aug 2023", amount: 390000, status: "On Time", days: 0 },
    { month: "Jul 2023", amount: 460000, status: "On Time", days: 0 },
  ]

  const complianceChecks = [
    { name: "RSPO Certification", status: "Verified", date: "2023-12-15", expiry: "2025-12-15" },
    { name: "ISCC Certification", status: "Verified", date: "2023-11-20", expiry: "2025-11-20" },
    { name: "AML/KYC Check", status: "Passed", date: "2024-01-05", expiry: "2025-01-05" },
    { name: "Sanctions Screening", status: "Clear", date: "2024-01-10", expiry: "2024-07-10" },
  ]

  const riskFactors = [
    { category: "Financial Health", score: 90, weight: 35, status: "Low" },
    { category: "Payment History", score: 95, weight: 30, status: "Low" },
    { category: "Industry Risk", score: 75, weight: 15, status: "Medium" },
    { category: "Geographic Risk", score: 80, weight: 10, status: "Low" },
    { category: "Compliance", score: 85, weight: 10, status: "Low" },
  ]

  const documents = [
    { name: "Financial Statements 2023", type: "PDF", date: "2024-01-05", size: "2.4 MB" },
    { name: "RSPO Certificate", type: "PDF", date: "2023-12-15", size: "856 KB" },
    { name: "ISCC Certificate", type: "PDF", date: "2023-11-20", size: "1.1 MB" },
    { name: "Bank Reference Letter", type: "PDF", date: "2023-10-10", size: "645 KB" },
    { name: "Trade References", type: "PDF", date: "2023-10-10", size: "512 KB" },
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const utilization = Math.round((customerData.utilized / customerData.creditLimit) * 100)

  return (
    <main className="container px-6 py-8">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-6">
            <div className="h-20 w-20 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="text-3xl font-bold text-primary">{customerData.name.charAt(0)}</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground text-balance">{customerData.name}</h2>
              <p className="text-muted-foreground mt-1">{customerData.registrationNumber}</p>
              <div className="flex items-center gap-4 mt-3">
                <Badge variant="default" className="bg-success text-success-foreground">
                  {customerData.risk} Risk
                </Badge>
                <Badge variant="outline">{customerData.status}</Badge>
                <span className="text-sm text-muted-foreground">Last reviewed: {customerData.lastReview}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button>
              <Edit className="h-4 w-4 mr-2" />
              Update Assessment
            </Button>
          </div>
        </div>

        {/* Credit Score Card */}
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Credit Score</p>
                <p className="text-5xl font-bold text-primary">{customerData.creditScore}</p>
                <div className="flex items-center gap-2 text-success">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">+3 points this quarter</span>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Credit Utilization</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground font-medium">{utilization}%</span>
                      <span className="text-muted-foreground">
                        {formatCurrency(customerData.utilized)} / {formatCurrency(customerData.creditLimit)}
                      </span>
                    </div>
                    <Progress value={utilization} className="h-2" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Available Credit</p>
                  <p className="text-2xl font-bold text-foreground">{formatCurrency(customerData.available)}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Next Review Date</p>
                  <p className="text-lg font-semibold text-foreground">{customerData.nextReview}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Payment Terms</p>
                  <p className="text-lg font-semibold text-foreground">Net 60</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs Section */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="payment">Payment History</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    Company Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground">Address</p>
                        <p className="text-sm font-medium text-foreground">{customerData.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Building2 className="h-4 w-4 text-muted-foreground mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground">Industry</p>
                        <p className="text-sm font-medium text-foreground">{customerData.industry}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="h-4 w-4 text-muted-foreground mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground">Years in Business</p>
                        <p className="text-sm font-medium text-foreground">{customerData.yearsInBusiness} years</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Contact Person</p>
                      <p className="text-sm font-medium text-foreground">{customerData.contactPerson}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="text-sm font-medium text-foreground">{customerData.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="text-sm font-medium text-foreground">{customerData.phone}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Risk Factor Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {riskFactors.map((factor) => (
                    <div key={factor.category} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="font-medium text-foreground">{factor.category}</span>
                          <Badge
                            variant={factor.status === "Low" ? "default" : "secondary"}
                            className={
                              factor.status === "Low"
                                ? "bg-success text-success-foreground"
                                : "bg-warning text-warning-foreground"
                            }
                          >
                            {factor.status}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-muted-foreground">Weight: {factor.weight}%</span>
                          <span className="ml-4 text-lg font-bold text-foreground">{factor.score}</span>
                        </div>
                      </div>
                      <Progress value={factor.score} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Financial Tab */}
          <TabsContent value="financial" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              {financialMetrics.map((metric) => (
                <Card key={metric.label}>
                  <CardContent className="p-6">
                    <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                    <p className="text-3xl font-bold text-foreground mt-2">{metric.value}</p>
                    <div className="flex items-center gap-2 mt-2">
                      {metric.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-success" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-success" />
                      )}
                      <span className="text-sm font-medium text-success">{metric.change}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Financial Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Strong Financial Position</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Company demonstrates healthy revenue growth and improving profitability metrics. Current ratio
                        indicates strong liquidity position.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Credit Capacity</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Based on current financial metrics, customer has capacity for credit limit increase up to $3.5M.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payment History Tab */}
          <TabsContent value="payment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {paymentHistory.map((payment) => (
                    <div
                      key={payment.month}
                      className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`h-10 w-10 rounded-full flex items-center justify-center ${
                            payment.status === "On Time" || payment.status === "Early"
                              ? "bg-success/10"
                              : "bg-warning/10"
                          }`}
                        >
                          {payment.status === "On Time" || payment.status === "Early" ? (
                            <CheckCircle className="h-5 w-5 text-success" />
                          ) : (
                            <Clock className="h-5 w-5 text-warning" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{payment.month}</p>
                          <p className="text-sm text-muted-foreground">{formatCurrency(payment.amount)}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={payment.status === "On Time" || payment.status === "Early" ? "default" : "secondary"}
                          className={
                            payment.status === "On Time" || payment.status === "Early"
                              ? "bg-success text-success-foreground"
                              : "bg-warning text-warning-foreground"
                          }
                        >
                          {payment.status}
                        </Badge>
                        {payment.days !== 0 && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {payment.days > 0 ? `+${payment.days}` : payment.days} days
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm font-medium text-muted-foreground">Payment Score</p>
                  <p className="text-3xl font-bold text-success mt-2">95/100</p>
                  <p className="text-sm text-muted-foreground mt-2">Excellent payment history</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm font-medium text-muted-foreground">Avg Payment Time</p>
                  <p className="text-3xl font-bold text-foreground mt-2">58 days</p>
                  <p className="text-sm text-success mt-2">2 days early on average</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm font-medium text-muted-foreground">Late Payments</p>
                  <p className="text-3xl font-bold text-foreground mt-2">0</p>
                  <p className="text-sm text-muted-foreground mt-2">Last 12 months</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Compliance Tab */}
          <TabsContent value="compliance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Compliance Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {complianceChecks.map((check) => (
                    <div
                      key={check.name}
                      className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-success/10 flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-success" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{check.name}</p>
                          <p className="text-sm text-muted-foreground">Verified on {check.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-success text-success-foreground">{check.status}</Badge>
                        <p className="text-sm text-muted-foreground mt-1">Expires: {check.expiry}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Compliance Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">All Certifications Current</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Customer maintains all required sustainability and compliance certifications. Next renewal
                          scheduled for RSPO in December 2025.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Document Repository</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {documents.map((doc) => (
                    <div
                      key={doc.name}
                      className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-destructive" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{doc.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {doc.type} • {doc.size} • Uploaded {doc.date}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
