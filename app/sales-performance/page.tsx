"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, TrendingUp, Building2, BarChart3, ArrowUp, ArrowDown } from "lucide-react"

export default function SalesPerformancePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="px-8 py-6">
          <h1 className="text-2xl font-bold mb-1">Sales PIC Performance Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Track sales team performance across regions and business segments
          </p>
        </div>
      </div>

      <div className="p-8 space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6">
          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Sales Team</p>
                <p className="text-4xl font-bold mb-1">12</p>
                <p className="text-sm text-muted-foreground">Active members</p>
              </div>
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Portfolio Value</p>
                <p className="text-4xl font-bold mb-1">RM 2.8B</p>
                <p className="text-sm text-green-600">+18.5% YoY</p>
              </div>
              <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Customers</p>
                <p className="text-4xl font-bold mb-1">201</p>
                <p className="text-sm text-muted-foreground">Across 47 countries</p>
              </div>
              <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Avg Performance</p>
                <p className="text-4xl font-bold mb-1">87%</p>
                <p className="text-sm text-green-600">+5.2% vs target</p>
              </div>
              <div className="h-12 w-12 rounded-lg bg-yellow-100 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Performance by Business Segment */}
        <div>
          <h2 className="text-xl font-bold mb-4">Performance by Business Segment</h2>
          <div className="grid grid-cols-3 gap-6">
            {/* Bulk Segment */}
            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Bulk</Badge>
                  <p className="text-sm text-muted-foreground">Large volume orders</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Sales Team:</span>
                    <span className="text-sm font-semibold">5 members</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Customers:</span>
                    <span className="text-sm font-semibold">85</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Portfolio Value:</span>
                    <span className="text-sm font-semibold text-blue-600">RM 1.2B</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">YTD Revenue:</span>
                    <span className="text-sm font-semibold text-blue-600">RM 890M</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Target Achievement</span>
                    <span className="text-sm font-semibold">92%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600" style={{ width: "92%" }} />
                  </div>
                </div>
              </div>
            </Card>

            {/* Diff Segment */}
            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Diff</Badge>
                  <p className="text-sm text-muted-foreground">Differentiated products</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Sales Team:</span>
                    <span className="text-sm font-semibold">4 members</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Customers:</span>
                    <span className="text-sm font-semibold">68</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Portfolio Value:</span>
                    <span className="text-sm font-semibold text-green-600">RM 950M</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">YTD Revenue:</span>
                    <span className="text-sm font-semibold text-green-600">RM 720M</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Target Achievement</span>
                    <span className="text-sm font-semibold">88%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-green-600" style={{ width: "88%" }} />
                  </div>
                </div>
              </div>
            </Card>

            {/* B2C Segment */}
            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-100">B2C</Badge>
                  <p className="text-sm text-muted-foreground">Direct to consumer</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Sales Team:</span>
                    <span className="text-sm font-semibold">3 members</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Customers:</span>
                    <span className="text-sm font-semibold">48</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Portfolio Value:</span>
                    <span className="text-sm font-semibold text-pink-600">RM 650M</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">YTD Revenue:</span>
                    <span className="text-sm font-semibold text-pink-600">RM 485M</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Target Achievement</span>
                    <span className="text-sm font-semibold">82%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-pink-600" style={{ width: "82%" }} />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Individual Performance Metrics */}
        <div>
          <h2 className="text-xl font-bold mb-4">Individual Performance Metrics</h2>
          <Card>
            <Tabs defaultValue="yearly" className="w-full">
              <div className="border-b px-6 pt-4 flex items-center justify-between">
                <TabsList className="h-10">
                  <TabsTrigger value="yearly" className="px-6">
                    Yearly
                  </TabsTrigger>
                  <TabsTrigger value="monthly" className="px-6">
                    Monthly
                  </TabsTrigger>
                  <TabsTrigger value="weekly" className="px-6">
                    Weekly
                  </TabsTrigger>
                </TabsList>
                <p className="text-sm font-medium text-muted-foreground pb-2">Current Week: Oct 8-14, 2025</p>
              </div>

              {/* Yearly Performance */}
              <TabsContent value="yearly" className="m-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b bg-muted/50">
                      <tr>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">Sales Person</th>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">Region</th>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">Customers</th>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">Portfolio Value</th>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">YTD Revenue</th>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">Annual Target</th>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">Achievement</th>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">Segment</th>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">Performance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">BL</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">Bruce Lee</p>
                              <p className="text-xs text-muted-foreground">EMP-2019-045</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm">Asia Pacific</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">42</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">RM 580M</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium text-green-600">RM 425M</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">RM 450M</span>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-green-600" style={{ width: "95%" }} />
                              </div>
                              <span className="text-sm font-medium">95%</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Bulk</Badge>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Excellent</Badge>
                        </td>
                      </tr>

                      <tr className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback className="bg-purple-100 text-purple-600 font-semibold">
                                SC
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">Sarah Chen</p>
                              <p className="text-xs text-muted-foreground">EMP-2020-112</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm">Asia Pacific</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">38</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">RM 485M</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium text-green-600">RM 368M</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">RM 405M</span>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-green-600" style={{ width: "91%" }} />
                              </div>
                              <span className="text-sm font-medium">91%</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Diff</Badge>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Excellent</Badge>
                        </td>
                      </tr>

                      <tr className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback className="bg-green-100 text-green-600 font-semibold">MW</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">Michael Wong</p>
                              <p className="text-xs text-muted-foreground">EMP-2018-087</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm">Europe</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">28</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">RM 320M</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium text-green-600">RM 245M</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">RM 315M</span>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-orange-600" style={{ width: "78%" }} />
                              </div>
                              <span className="text-sm font-medium">78%</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-100">B2C</Badge>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Good</Badge>
                        </td>
                      </tr>

                      <tr className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback className="bg-pink-100 text-pink-600 font-semibold">JT</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">Jennifer Tan</p>
                              <p className="text-xs text-muted-foreground">EMP-2021-156</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm">Americas</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">25</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">RM 410M</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium text-green-600">RM 325M</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">RM 365M</span>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-green-600" style={{ width: "89%" }} />
                              </div>
                              <span className="text-sm font-medium">89%</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Bulk</Badge>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Excellent</Badge>
                        </td>
                      </tr>

                      <tr className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback className="bg-orange-100 text-orange-600 font-semibold">
                                DK
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">David Kumar</p>
                              <p className="text-xs text-muted-foreground">EMP-2022-203</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm">Asia Pacific</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">22</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">RM 295M</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium text-green-600">RM 218M</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">RM 295M</span>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-orange-600" style={{ width: "74%" }} />
                              </div>
                              <span className="text-sm font-medium">74%</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Bulk</Badge>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Good</Badge>
                        </td>
                      </tr>

                      <tr className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback className="bg-indigo-100 text-indigo-600 font-semibold">
                                LA
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">Lisa Anderson</p>
                              <p className="text-xs text-muted-foreground">EMP-2019-098</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm">Europe</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">35</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">RM 520M</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium text-green-600">RM 395M</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">RM 425M</span>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-green-600" style={{ width: "93%" }} />
                              </div>
                              <span className="text-sm font-medium">93%</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Bulk</Badge>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Excellent</Badge>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              {/* Monthly Performance */}
              <TabsContent value="monthly" className="m-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b bg-muted/50">
                      <tr>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">Sales Person</th>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">Region</th>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">New Customers</th>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">Monthly Revenue</th>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">vs Last Month</th>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">Monthly Target</th>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">Achievement</th>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">Segment</th>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">Performance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">BL</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">Bruce Lee</p>
                              <p className="text-xs text-muted-foreground">EMP-2019-045</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm">Asia Pacific</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">3</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium text-green-600">RM 42M</span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <ArrowUp className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-medium text-green-600">+8.5%</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">RM 38M</span>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-green-600" style={{ width: "110%" }} />
                              </div>
                              <span className="text-sm font-medium">110%</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Bulk</Badge>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Excellent</Badge>
                        </td>
                      </tr>

                      <tr className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback className="bg-purple-100 text-purple-600 font-semibold">
                                SC
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">Sarah Chen</p>
                              <p className="text-xs text-muted-foreground">EMP-2020-112</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm">Asia Pacific</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">2</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium text-green-600">RM 35M</span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <ArrowUp className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-medium text-green-600">+5.2%</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">RM 34M</span>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-green-600" style={{ width: "103%" }} />
                              </div>
                              <span className="text-sm font-medium">103%</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Diff</Badge>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Excellent</Badge>
                        </td>
                      </tr>

                      <tr className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback className="bg-green-100 text-green-600 font-semibold">MW</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">Michael Wong</p>
                              <p className="text-xs text-muted-foreground">EMP-2018-087</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm">Europe</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">1</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium text-green-600">RM 22M</span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <ArrowDown className="h-4 w-4 text-red-600" />
                            <span className="text-sm font-medium text-red-600">-3.2%</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">RM 26M</span>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-orange-600" style={{ width: "85%" }} />
                              </div>
                              <span className="text-sm font-medium">85%</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-100">B2C</Badge>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Good</Badge>
                        </td>
                      </tr>

                      <tr className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback className="bg-pink-100 text-pink-600 font-semibold">JT</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">Jennifer Tan</p>
                              <p className="text-xs text-muted-foreground">EMP-2021-156</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm">Americas</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">2</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium text-green-600">RM 31M</span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <ArrowUp className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-medium text-green-600">+6.8%</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">RM 30M</span>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-green-600" style={{ width: "103%" }} />
                              </div>
                              <span className="text-sm font-medium">103%</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Bulk</Badge>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Excellent</Badge>
                        </td>
                      </tr>

                      <tr className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback className="bg-orange-100 text-orange-600 font-semibold">
                                DK
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">David Kumar</p>
                              <p className="text-xs text-muted-foreground">EMP-2022-203</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm">Asia Pacific</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">1</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium text-green-600">RM 19M</span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <ArrowUp className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-medium text-green-600">+2.1%</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">RM 25M</span>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-orange-600" style={{ width: "76%" }} />
                              </div>
                              <span className="text-sm font-medium">76%</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Bulk</Badge>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Good</Badge>
                        </td>
                      </tr>

                      <tr className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback className="bg-indigo-100 text-indigo-600 font-semibold">
                                LA
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">Lisa Anderson</p>
                              <p className="text-xs text-muted-foreground">EMP-2019-098</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm">Europe</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">3</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium text-green-600">RM 38M</span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <ArrowUp className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-medium text-green-600">+7.3%</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">RM 35M</span>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-green-600" style={{ width: "109%" }} />
                              </div>
                              <span className="text-sm font-medium">109%</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Bulk</Badge>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Excellent</Badge>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              {/* Weekly Performance */}
              <TabsContent value="weekly" className="m-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b bg-muted/50">
                      <tr>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">Sales Person</th>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">Region</th>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">Meetings</th>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">Deals Closed</th>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">Weekly Revenue</th>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">vs Last Week</th>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">Weekly Target</th>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">Achievement</th>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">Segment</th>
                        <th className="text-left p-4 font-medium text-sm text-muted-foreground">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">BL</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">Bruce Lee</p>
                              <p className="text-xs text-muted-foreground">EMP-2019-045</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm">Asia Pacific</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">12</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">2</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium text-green-600">RM 11.5M</span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <ArrowUp className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-medium text-green-600">+12%</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">RM 9.5M</span>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-green-600" style={{ width: "121%" }} />
                              </div>
                              <span className="text-sm font-medium">121%</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Bulk</Badge>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">On Track</Badge>
                        </td>
                      </tr>

                      <tr className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback className="bg-purple-100 text-purple-600 font-semibold">
                                SC
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">Sarah Chen</p>
                              <p className="text-xs text-muted-foreground">EMP-2020-112</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm">Asia Pacific</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">10</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">1</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium text-green-600">RM 9.2M</span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <ArrowUp className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-medium text-green-600">+8%</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">RM 8.5M</span>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-green-600" style={{ width: "108%" }} />
                              </div>
                              <span className="text-sm font-medium">108%</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Diff</Badge>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">On Track</Badge>
                        </td>
                      </tr>

                      <tr className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback className="bg-green-100 text-green-600 font-semibold">MW</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">Michael Wong</p>
                              <p className="text-xs text-muted-foreground">EMP-2018-087</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm">Europe</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">8</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">1</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium text-green-600">RM 4.8M</span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <ArrowDown className="h-4 w-4 text-red-600" />
                            <span className="text-sm font-medium text-red-600">-5%</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">RM 6.5M</span>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-red-600" style={{ width: "74%" }} />
                              </div>
                              <span className="text-sm font-medium">74%</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-100">B2C</Badge>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Needs Attention</Badge>
                        </td>
                      </tr>

                      <tr className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback className="bg-pink-100 text-pink-600 font-semibold">JT</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">Jennifer Tan</p>
                              <p className="text-xs text-muted-foreground">EMP-2021-156</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm">Americas</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">9</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">1</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium text-green-600">RM 7.8M</span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <ArrowUp className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-medium text-green-600">+10%</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">RM 7.5M</span>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-green-600" style={{ width: "104%" }} />
                              </div>
                              <span className="text-sm font-medium">104%</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Bulk</Badge>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">On Track</Badge>
                        </td>
                      </tr>

                      <tr className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback className="bg-orange-100 text-orange-600 font-semibold">
                                DK
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">David Kumar</p>
                              <p className="text-xs text-muted-foreground">EMP-2022-203</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm">Asia Pacific</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">7</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">0</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium text-green-600">RM 4.2M</span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <ArrowUp className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-medium text-green-600">+3%</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">RM 6.2M</span>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-orange-600" style={{ width: "68%" }} />
                              </div>
                              <span className="text-sm font-medium">68%</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Bulk</Badge>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Monitor</Badge>
                        </td>
                      </tr>

                      <tr className="border-b hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback className="bg-indigo-100 text-indigo-600 font-semibold">
                                LA
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">Lisa Anderson</p>
                              <p className="text-xs text-muted-foreground">EMP-2019-098</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm">Europe</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">11</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">2</span>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium text-green-600">RM 10.2M</span>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <ArrowUp className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-medium text-green-600">+9%</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm font-medium">RM 8.8M</span>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-green-600" style={{ width: "116%" }} />
                              </div>
                              <span className="text-sm font-medium">116%</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Bulk</Badge>
                        </td>
                        <td className="p-4">
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">On Track</Badge>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  )
}
