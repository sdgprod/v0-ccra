"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  CheckCircle,
  AlertTriangle,
  Building2,
  DollarSign,
  FileText,
  Scale,
  Users,
  Phone,
  Mail,
  Globe,
  TrendingUp,
  BarChart3,
  Activity,
  User,
} from "lucide-react"

export default function ProspectSearchResultPage() {
  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="space-y-6">
        {/* Progress Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Overall Risk - LOW */}
          <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
            <CardContent className="pt-3 pb-3 text-center">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400 mx-auto mb-1" />
              <p className="text-xs text-green-700 dark:text-green-300 mb-0.5">Overall Risk</p>
              <p className="text-xl font-bold text-green-600 dark:text-green-400">LOW</p>
            </CardContent>
          </Card>

          {/* Compliance - CLEAR */}
          <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="pt-3 pb-3 text-center">
              <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mx-auto mb-1" />
              <p className="text-xs text-blue-700 dark:text-blue-300 mb-0.5">Compliance</p>
              <p className="text-xl font-bold text-blue-600 dark:text-blue-400">CLEAR</p>
            </CardContent>
          </Card>

          {/* Sanctions Check - PENDING */}
          <Card className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
            <CardContent className="pt-3 pb-3 text-center">
              <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 mx-auto mb-1" />
              <p className="text-xs text-red-700 dark:text-red-300 mb-0.5">Sanctions Check</p>
              <p className="text-xl font-bold text-red-600 dark:text-red-400">PENDING</p>
            </CardContent>
          </Card>

          {/* Order Commercial - PENDING */}
          <Card className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
            <CardContent className="pt-3 pb-3 text-center">
              <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 mx-auto mb-1" />
              <p className="text-xs text-red-700 dark:text-red-300 mb-0.5">Order Commercial</p>
              <p className="text-xl font-bold text-red-600 dark:text-red-400">PENDING</p>
            </CardContent>
          </Card>

          {/* Credit Rating - PENDING */}
          <Card className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
            <CardContent className="pt-3 pb-3 text-center">
              <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 mx-auto mb-1" />
              <p className="text-xs text-red-700 dark:text-red-300 mb-0.5">Credit Rating</p>
              <p className="text-xl font-bold text-red-600 dark:text-red-400">PENDING</p>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Source : D&B Comprehensive Report</h2>
          <p className="text-muted-foreground mt-1">
            Generated :{" "}
            {new Date().toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
            {", "}
            {new Date().toLocaleTimeString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
        </div>

        {/* Identification & Summary */}
        <Card>
          <CardContent className="pt-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-6">
                <TabsTrigger value="overview" className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Company Overview
                </TabsTrigger>
                <TabsTrigger value="financial" className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Financial Details
                </TabsTrigger>
                <TabsTrigger value="operations" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Operations
                </TabsTrigger>
                <TabsTrigger value="legal" className="flex items-center gap-2">
                  <Scale className="w-4 h-4" />
                  Legal & Compliance
                </TabsTrigger>
                <TabsTrigger value="contacts" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Key Contacts
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <div className="grid grid-cols-2 gap-8">
                  {/* Company Identification */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Company Identification</h3>

                    <div>
                      <Label className="text-muted-foreground text-sm">Company Name</Label>
                      <p className="font-medium mt-1 bg-gray-50 dark:bg-gray-900/50 p-2 rounded-md">Global Foods Ltd</p>
                    </div>

                    <div>
                      <Label className="text-muted-foreground text-sm">Main Trading Address</Label>
                      <div className="mt-1 space-y-0.5 bg-gray-50 dark:bg-gray-900/50 p-3 rounded-md">
                        <p className="font-medium">Level 7, Menara Milenium</p>
                        <p className="font-medium">Jalan Damanlela</p>
                        <p className="font-medium">50490 Kuala Lumpur</p>
                        <p className="font-medium">MALAYSIA</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-muted-foreground text-sm">D-U-N-S® Number</Label>
                        <p className="font-medium mt-1 bg-gray-50 dark:bg-gray-900/50 p-2 rounded-md">40-217-3306</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground text-sm">VAT Number</Label>
                        <p className="font-medium mt-1 bg-gray-50 dark:bg-gray-900/50 p-2 rounded-md">
                          MY 001836936B01
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-muted-foreground text-sm">Date Started</Label>
                        <p className="font-medium mt-1 bg-gray-50 dark:bg-gray-900/50 p-2 rounded-md">15 Jan 1995</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground text-sm">Legal Form</Label>
                        <p className="font-medium mt-1 bg-gray-50 dark:bg-gray-900/50 p-2 rounded-md">
                          Private Limited Company
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Business Information */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Business Information</h3>

                    <div>
                      <Label className="text-muted-foreground text-sm">Line of Business (SIC)</Label>
                      <p className="font-medium mt-1 bg-gray-50 dark:bg-gray-900/50 p-2 rounded-md">
                        Food products manufacturing (5149)
                      </p>
                    </div>

                    <div>
                      <Label className="text-muted-foreground text-sm">Business Description</Label>
                      <p className="font-medium mt-1 bg-gray-50 dark:bg-gray-900/50 p-3 rounded-md">
                        Food products manufacturing and distribution across Southeast Asia, specializing in packaged
                        goods and beverages.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-muted-foreground text-sm">Employee Count</Label>
                        <p className="font-medium mt-1 bg-gray-50 dark:bg-gray-900/50 p-2 rounded-md">450 employees</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground text-sm">Annual Sales</Label>
                        <p className="font-medium mt-1 bg-gray-50 dark:bg-gray-900/50 p-2 rounded-md">MYR 85,000,000</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Contact Information</h3>

                  <div className="grid grid-cols-3 gap-4">
                    <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                      <CardContent className="pt-4 pb-4">
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <div>
                            <Label className="text-muted-foreground text-xs">Phone</Label>
                            <p className="font-medium text-sm">+60-3-2161-8888</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                      <CardContent className="pt-4 pb-4">
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <div>
                            <Label className="text-muted-foreground text-xs">Email</Label>
                            <p className="font-medium text-sm text-primary">procurement@globalfoods.my</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                      <CardContent className="pt-4 pb-4">
                        <div className="flex items-center gap-3">
                          <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <div>
                            <Label className="text-muted-foreground text-xs">Website</Label>
                            <p className="font-medium text-sm text-primary">www.globalfoods.my</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="financial">
                {/* Financial Performance Header */}
                <div className="space-y-6">
                  {/* Financial Performance Header */}
                  <h3 className="text-xl font-semibold">Financial Performance</h3>

                  {/* Key Metrics Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Annual Revenue */}
                    <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                      <CardContent className="pt-4 pb-4">
                        <div className="flex items-start justify-between mb-1">
                          <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <span className="text-sm font-medium text-green-600 dark:text-green-400">+12.5%</span>
                        </div>
                        <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">€850M</p>
                        <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">Annual Revenue</p>
                      </CardContent>
                    </Card>

                    {/* Net Worth */}
                    <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                      <CardContent className="pt-4 pb-4">
                        <div className="flex items-start justify-between mb-1">
                          <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                          <span className="text-sm font-medium text-green-600 dark:text-green-400">Stable</span>
                        </div>
                        <p className="text-2xl font-bold text-green-900 dark:text-green-100">€45.75M</p>
                        <p className="text-sm text-green-700 dark:text-green-300 mt-1">Net Worth</p>
                      </CardContent>
                    </Card>

                    {/* Working Capital */}
                    <Card className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
                      <CardContent className="pt-4 pb-4">
                        <div className="flex items-start justify-between mb-1">
                          <BarChart3 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                          <span className="text-sm font-medium text-green-600 dark:text-green-400">Healthy</span>
                        </div>
                        <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">€125M</p>
                        <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">Working Capital</p>
                      </CardContent>
                    </Card>

                    {/* Profit Margin */}
                    <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
                      <CardContent className="pt-4 pb-4">
                        <div className="flex items-start justify-between mb-1">
                          <Activity className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                          <span className="text-sm font-medium text-green-600 dark:text-green-400">Strong</span>
                        </div>
                        <p className="text-2xl font-bold text-orange-900 dark:text-orange-100">11.2%</p>
                        <p className="text-sm text-orange-700 dark:text-orange-300 mt-1">Profit Margin</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Balance Sheet Summary and Financial Ratios */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Balance Sheet Summary */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Balance Sheet Summary</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between py-3 border-b">
                          <span className="text-muted-foreground">Total Assets</span>
                          <span className="font-semibold">€2,850,000,000</span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b">
                          <span className="text-muted-foreground">Total Liabilities</span>
                          <span className="font-semibold">€1,420,000,000</span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b">
                          <span className="text-muted-foreground">Shareholders' Equity</span>
                          <span className="font-semibold">€1,430,000,000</span>
                        </div>
                        <div className="flex items-center justify-between py-3 bg-green-50 dark:bg-green-950/20 px-4 rounded-lg">
                          <span className="font-medium">Debt-to-Equity Ratio</span>
                          <span className="font-bold text-green-600 dark:text-green-400">0.99</span>
                        </div>
                      </div>
                    </div>

                    {/* Financial Ratios */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Financial Ratios</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between py-3 border-b">
                          <span className="text-muted-foreground">Current Ratio</span>
                          <span className="font-semibold text-blue-600 dark:text-blue-400">1.49</span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b">
                          <span className="text-muted-foreground">Return on Assets</span>
                          <span className="font-semibold text-green-600 dark:text-green-400">3.33%</span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b">
                          <span className="text-muted-foreground">Return on Equity</span>
                          <span className="font-semibold text-purple-600 dark:text-purple-400">6.64%</span>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b">
                          <span className="text-muted-foreground">Interest Coverage</span>
                          <span className="font-semibold text-orange-600 dark:text-orange-400">8.5x</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="operations">
                {/* Operations Overview Header */}
                <div className="space-y-6">
                  {/* Operations Overview Header */}
                  <h3 className="text-xl font-semibold">Operations Overview</h3>

                  {/* Two Column Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Business Operations - Left Column */}
                    <div className="space-y-6">
                      <h4 className="text-lg font-semibold">Business Operations</h4>

                      <div className="space-y-4">
                        {/* Primary Business */}
                        <div>
                          <Label className="text-muted-foreground text-sm">Primary Business</Label>
                          <p className="font-medium mt-1 bg-gray-50 dark:bg-gray-900/50 p-3 rounded-md">
                            Crude oil exploration, extraction, and refining operations across Southeast Asia and Middle
                            East
                          </p>
                        </div>

                        {/* Key Markets */}
                        <div>
                          <Label className="text-muted-foreground text-sm">Key Markets</Label>
                          <p className="font-medium mt-1 bg-gray-50 dark:bg-gray-900/50 p-2 rounded-md">
                            Singapore, Malaysia, Thailand, UAE, Qatar
                          </p>
                        </div>

                        {/* Production Capacity */}
                        <div>
                          <Label className="text-muted-foreground text-sm">Production Capacity</Label>
                          <p className="font-medium mt-1 bg-gray-50 dark:bg-gray-900/50 p-2 rounded-md">
                            450,000 barrels per day
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Operational Metrics - Right Column */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Operational Metrics</h4>

                      <div className="grid grid-cols-2 gap-4">
                        {/* Daily Production */}
                        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                          <CardContent className="pt-6 pb-6 text-center">
                            <p className="text-3xl font-bold text-blue-900 dark:text-blue-100">450K</p>
                            <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">Daily Production (bpd)</p>
                          </CardContent>
                        </Card>

                        {/* Operational Efficiency */}
                        <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                          <CardContent className="pt-6 pb-6 text-center">
                            <p className="text-3xl font-bold text-green-900 dark:text-green-100">94.5%</p>
                            <p className="text-sm text-green-700 dark:text-green-300 mt-1">Operational Efficiency</p>
                          </CardContent>
                        </Card>

                        {/* Safety Rating */}
                        <Card className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
                          <CardContent className="pt-6 pb-6 text-center">
                            <p className="text-3xl font-bold text-purple-900 dark:text-purple-100">A+</p>
                            <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">Safety Rating</p>
                          </CardContent>
                        </Card>

                        {/* Environmental Cert */}
                        <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
                          <CardContent className="pt-6 pb-6 text-center">
                            <p className="text-3xl font-bold text-orange-900 dark:text-orange-100">ISO</p>
                            <p className="text-sm text-orange-700 dark:text-orange-300 mt-1">Environmental Cert</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="legal">
                {/* Legal & Compliance Status Header */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Legal & Compliance Status</h3>

                  {/* Two Column Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Regulatory Compliance - Left Column */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Regulatory Compliance</h4>

                      <div className="space-y-3">
                        {/* ACRA Registration */}
                        <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                          <CardContent className="pt-4 pb-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                                <span className="font-medium">ACRA Registration</span>
                              </div>
                              <span className="text-green-600 dark:text-green-400 font-medium">Active</span>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Tax Compliance */}
                        <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                          <CardContent className="pt-4 pb-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                                <span className="font-medium">Tax Compliance</span>
                              </div>
                              <span className="text-green-600 dark:text-green-400 font-medium">Current</span>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Environmental License */}
                        <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                          <CardContent className="pt-4 pb-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                                <span className="font-medium">Environmental License</span>
                              </div>
                              <span className="text-green-600 dark:text-green-400 font-medium">Valid</span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Legal Standing - Right Column */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Legal Standing</h4>

                      <div className="space-y-3">
                        {/* Legal Proceedings */}
                        <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                          <CardContent className="pt-4 pb-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                                <span className="font-medium">Legal Proceedings</span>
                              </div>
                              <span className="text-green-600 dark:text-green-400 font-medium">None</span>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Bankruptcy Filings */}
                        <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                          <CardContent className="pt-4 pb-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                                <span className="font-medium">Bankruptcy Filings</span>
                              </div>
                              <span className="text-green-600 dark:text-green-400 font-medium">None</span>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Liens & Judgments */}
                        <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                          <CardContent className="pt-4 pb-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                                <span className="font-medium">Liens & Judgments</span>
                              </div>
                              <span className="text-green-600 dark:text-green-400 font-medium">None</span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="contacts">
                <div className="space-y-6">
                  {/* Key Contacts & Management Header */}
                  <h3 className="text-xl font-semibold">Key Contacts & Management</h3>

                  {/* Two Column Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Executive Management - Left Column */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Executive Management</h4>

                      <div className="space-y-4 flex flex-col">
                        {/* Sarah Chen - CEO */}
                        <Card className="border-2 h-[200px] flex flex-col">
                          <CardContent className="pt-6 pb-6 flex-1 flex flex-col justify-between">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-start gap-3">
                                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center">
                                  <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                  <p className="font-semibold text-lg">Sarah Chen</p>
                                  <p className="text-sm text-muted-foreground">Chief Executive Officer</p>
                                </div>
                              </div>
                              <Badge className="bg-blue-500 hover:bg-blue-600">CEO</Badge>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Mail className="w-4 h-4 text-muted-foreground" />
                              <a href="mailto:s.chen@globalfoods.com" className="text-primary hover:underline">
                                s.chen@globalfoods.com
                              </a>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Michael Rodriguez - CFO */}
                        <Card className="border-2 h-[200px] flex flex-col">
                          <CardContent className="pt-6 pb-6 flex-1 flex flex-col justify-between">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-start gap-3">
                                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-950/30 flex items-center justify-center">
                                  <User className="w-6 h-6 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                  <p className="font-semibold text-lg">Michael Rodriguez</p>
                                  <p className="text-sm text-muted-foreground">Chief Financial Officer</p>
                                </div>
                              </div>
                              <Badge className="bg-green-500 hover:bg-green-600">CFO</Badge>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Mail className="w-4 h-4 text-muted-foreground" />
                              <a href="mailto:m.rodriguez@globalfoods.com" className="text-primary hover:underline">
                                m.rodriguez@globalfoods.com
                              </a>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Department Contacts - Right Column */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Department Contacts</h4>

                      <div className="space-y-4 flex flex-col">
                        {/* Finance Department */}
                        <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800 h-[200px] flex flex-col">
                          <CardContent className="pt-6 pb-6 flex-1 flex flex-col justify-between">
                            <h5 className="font-semibold text-lg mb-4">Finance Department</h5>
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 text-sm">
                                <Phone className="w-4 h-4 text-muted-foreground" />
                                <span>+65 6789-5433</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Mail className="w-4 h-4 text-muted-foreground" />
                                <a href="mailto:finance@globalfoods.com" className="text-primary hover:underline">
                                  finance@globalfoods.com
                                </a>
                              </div>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Trading Department */}
                        <Card className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800 h-[200px] flex flex-col">
                          <CardContent className="pt-6 pb-6 flex-1 flex flex-col justify-between">
                            <h5 className="font-semibold text-lg mb-4">Trading Department</h5>
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 text-sm">
                                <Phone className="w-4 h-4 text-muted-foreground" />
                                <span>+65 6789-5434</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Mail className="w-4 h-4 text-muted-foreground" />
                                <a href="mailto:trading@globalfoods.com" className="text-primary hover:underline">
                                  trading@globalfoods.com
                                </a>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
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
                  <Label className="text-muted-foreground text-sm block text-center">D&B Rating</Label>
                  <p className="text-3xl font-bold mt-2">A 2</p>
                  <p className="text-xs text-muted-foreground mt-1">Financial Strength: A</p>
                  <p className="text-xs text-muted-foreground">Risk Indicator: 2</p>
                </CardContent>
              </Card>

              <Card className="bg-muted/50">
                <CardContent className="pt-6 text-center">
                  <Label className="text-muted-foreground text-sm block text-center">Risk Indicator</Label>
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
                  <Label className="text-muted-foreground text-sm block text-center">D&B Failure Score</Label>
                  <p className="text-3xl font-bold mt-2">73</p>
                  <p className="text-xs text-muted-foreground mt-1">out of 100</p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-2">27% of businesses have lower risk</p>
                </CardContent>
              </Card>

              <Card className="bg-muted/50">
                <CardContent className="pt-6 text-center">
                  <Label className="text-muted-foreground text-sm block text-center">D&B Maximum Credit</Label>
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
                  <span>Trend in Tangible Net Worth is flat or increasing compared to the previous accounts.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>This company has a parent or liability taker with a Group Net Worth of MYR 70.5M</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>
                    On average this company pays its accounts within terms and shows similar or better payment behaviour
                    than 12 months ago.
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
                  <Label className="text-muted-foreground text-sm text-center block">Average Days Beyond Terms</Label>
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
                    The D&B failure score of 73 predicts that the risk of failure within the next 12 months is lower
                    than average.
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
              <h4 className="text-lg font-semibold mb-3">Balance Sheet Summary (MYR)</h4>
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
                      <td className="text-right py-2 px-3 font-semibold">15,071,893</td>
                      <td className="text-right py-2 px-3">48,407,239</td>
                      <td className="text-right py-2 px-3">41,400,587</td>
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
            immense quantity of detailed matter dealt with in compiling the information and the fact that some of the
            data are supplied from sources not controlled by D&B which cannot always be verified, including information
            provided direct from the subject of enquiry, as well as the possibility of negligence and mistake, D&B does
            not guarantee the correctness or the effective delivery of the information and will not be held responsible
            for any errors therein or omissions therefrom.
          </p>
          <p>© Dun & Bradstreet Inc., {new Date().getFullYear()}.</p>
        </div>
      </div>
    </div>
  )
}
