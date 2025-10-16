"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Building2, FileText, DollarSign, Shield, CheckCircle } from "lucide-react"

export default function OnboardingPage() {
  return (
    <main className="container px-6 py-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold text-foreground text-balance">New Customer Assessment</h2>
          <p className="text-muted-foreground mt-2">Complete credit risk and compliance evaluation</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-between">
          {[
            { step: 1, label: "Company Info", icon: Building2, active: true },
            { step: 2, label: "Financial Data", icon: DollarSign, active: false },
            { step: 3, label: "Compliance", icon: Shield, active: false },
            { step: 4, label: "Review", icon: CheckCircle, active: false },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <div key={item.step} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center ${
                      item.active ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium mt-2 text-foreground">{item.label}</span>
                </div>
                {index < 3 && <div className={`h-0.5 flex-1 ${item.active ? "bg-primary" : "bg-border"}`} />}
              </div>
            )
          })}
        </div>

        {/* Form Tabs */}
        <Tabs defaultValue="company" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="company">Company Info</TabsTrigger>
            <TabsTrigger value="financial">Financial Data</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="review">Review</TabsTrigger>
          </TabsList>

          {/* Company Information Tab */}
          <TabsContent value="company" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Company Information</CardTitle>
                <CardDescription>Basic details about the customer company</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Company Name *</Label>
                    <Input id="company-name" placeholder="Enter company name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registration">Registration Number *</Label>
                    <Input id="registration" placeholder="Enter registration number" />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country of Operation *</Label>
                    <Select>
                      <SelectTrigger id="country">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="malaysia">Malaysia</SelectItem>
                        <SelectItem value="indonesia">Indonesia</SelectItem>
                        <SelectItem value="thailand">Thailand</SelectItem>
                        <SelectItem value="singapore">Singapore</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry Sector *</Label>
                    <Select>
                      <SelectTrigger id="industry">
                        <SelectValue placeholder="Select sector" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="trading">Trading</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="distribution">Distribution</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Business Address *</Label>
                  <Textarea id="address" placeholder="Enter complete business address" rows={3} />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contact-person">Contact Person *</Label>
                    <Input id="contact-person" placeholder="Enter contact name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="contact@company.com" />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" placeholder="+60 12 345 6789" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="years">Years in Business *</Label>
                    <Input id="years" type="number" placeholder="Enter years" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end gap-4">
              <Button variant="outline">Save Draft</Button>
              <Button>Continue to Financial Data</Button>
            </div>
          </TabsContent>

          {/* Financial Data Tab */}
          <TabsContent value="financial" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Financial Information</CardTitle>
                <CardDescription>Revenue, assets, and credit requirements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="annual-revenue">Annual Revenue (USD) *</Label>
                    <Input id="annual-revenue" type="number" placeholder="0.00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="total-assets">Total Assets (USD) *</Label>
                    <Input id="total-assets" type="number" placeholder="0.00" />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="current-liabilities">Current Liabilities (USD) *</Label>
                    <Input id="current-liabilities" type="number" placeholder="0.00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="net-profit">Net Profit Margin (%) *</Label>
                    <Input id="net-profit" type="number" placeholder="0.0" />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="credit-limit">Requested Credit Limit (USD) *</Label>
                    <Input id="credit-limit" type="number" placeholder="0.00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="payment-terms">Preferred Payment Terms *</Label>
                    <Select>
                      <SelectTrigger id="payment-terms">
                        <SelectValue placeholder="Select terms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="net30">Net 30</SelectItem>
                        <SelectItem value="net60">Net 60</SelectItem>
                        <SelectItem value="net90">Net 90</SelectItem>
                        <SelectItem value="custom">Custom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bank-references">Bank References</Label>
                  <Textarea
                    id="bank-references"
                    placeholder="Enter bank name, account details, and contact information"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="trade-references">Trade References</Label>
                  <Textarea id="trade-references" placeholder="Enter existing supplier/customer references" rows={3} />
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button variant="outline">Back</Button>
              <div className="flex gap-4">
                <Button variant="outline">Save Draft</Button>
                <Button>Continue to Compliance</Button>
              </div>
            </div>
          </TabsContent>

          {/* Compliance Tab */}
          <TabsContent value="compliance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Compliance & Risk Assessment</CardTitle>
                <CardDescription>Regulatory compliance and risk factors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg border">
                    <div>
                      <p className="font-medium text-foreground">RSPO Certification</p>
                      <p className="text-sm text-muted-foreground">Roundtable on Sustainable Palm Oil</p>
                    </div>
                    <Select defaultValue="yes">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border">
                    <div>
                      <p className="font-medium text-foreground">ISCC Certification</p>
                      <p className="text-sm text-muted-foreground">International Sustainability & Carbon</p>
                    </div>
                    <Select defaultValue="yes">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border">
                    <div>
                      <p className="font-medium text-foreground">Anti-Money Laundering Check</p>
                      <p className="text-sm text-muted-foreground">AML/KYC verification</p>
                    </div>
                    <Select defaultValue="pending">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="passed">Passed</SelectItem>
                        <SelectItem value="failed">Failed</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border">
                    <div>
                      <p className="font-medium text-foreground">Sanctions Screening</p>
                      <p className="text-sm text-muted-foreground">International sanctions list check</p>
                    </div>
                    <Select defaultValue="pending">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="clear">Clear</SelectItem>
                        <SelectItem value="flagged">Flagged</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="risk-notes">Risk Assessment Notes</Label>
                  <Textarea id="risk-notes" placeholder="Enter any additional risk factors or concerns" rows={4} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="documents">Supporting Documents</Label>
                  <div className="border-2 border-dashed rounded-lg p-8 text-center">
                    <FileText className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Upload financial statements, certificates, and other documents
                    </p>
                    <Button variant="outline" className="mt-4 bg-transparent">
                      Choose Files
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button variant="outline">Back</Button>
              <div className="flex gap-4">
                <Button variant="outline">Save Draft</Button>
                <Button>Continue to Review</Button>
              </div>
            </div>
          </TabsContent>

          {/* Review Tab */}
          <TabsContent value="review" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Assessment Summary</CardTitle>
                <CardDescription>Review all information before submission</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Calculated Credit Score</p>
                    <p className="text-3xl font-bold text-success">82</p>
                    <Badge className="mt-2 bg-success text-success-foreground">Low Risk</Badge>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Recommended Credit Limit</p>
                    <p className="text-3xl font-bold text-primary">$2.5M</p>
                    <p className="text-sm text-muted-foreground mt-2">Based on financials</p>
                  </div>
                  <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Compliance Status</p>
                    <p className="text-3xl font-bold text-warning">3/4</p>
                    <p className="text-sm text-muted-foreground mt-2">Checks completed</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg border">
                    <h4 className="font-semibold text-foreground mb-3">Company Details</h4>
                    <div className="grid gap-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Company Name:</span>
                        <span className="font-medium text-foreground">Golden Harvest Trading</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Country:</span>
                        <span className="font-medium text-foreground">Malaysia</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Years in Business:</span>
                        <span className="font-medium text-foreground">12 years</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border">
                    <h4 className="font-semibold text-foreground mb-3">Financial Summary</h4>
                    <div className="grid gap-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Annual Revenue:</span>
                        <span className="font-medium text-foreground">$15.5M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Assets:</span>
                        <span className="font-medium text-foreground">$8.2M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Requested Credit:</span>
                        <span className="font-medium text-foreground">$3.0M</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border">
                    <h4 className="font-semibold text-foreground mb-3">Compliance Checklist</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm text-foreground">RSPO Certification - Verified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm text-foreground">ISCC Certification - Verified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm text-foreground">AML Check - Passed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full border-2 border-warning" />
                        <span className="text-sm text-foreground">Sanctions Screening - Pending</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button variant="outline">Back</Button>
              <div className="flex gap-4">
                <Button variant="outline">Save Draft</Button>
                <Button>Submit for Approval</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
