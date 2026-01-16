"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { FileText, Clock, CheckCircle, XCircle, AlertCircle, ChevronRight, Filter, Search } from "lucide-react"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const pendingApprovals = [
  {
    id: "CR-2025-001",
    customer: "Golden Dragon Trading Pte Ltd",
    country: "Singapore",
    requestedBy: "Bruce Lee",
    currentLimit: 1500000,
    requestedLimit: 2500000,
    requestedDate: "2025-01-10",
    status: "pending",
    priority: "high",
    tier: "Tier 1",
  },
  {
    id: "CR-2025-002",
    customer: "Sunrise Foods Malaysia Sdn Bhd",
    country: "Malaysia",
    requestedBy: "Sarah Chen",
    currentLimit: 1200000,
    requestedLimit: 1800000,
    requestedDate: "2025-01-12",
    status: "pending",
    priority: "medium",
    tier: "Tier 2",
  },
  {
    id: "CR-2025-003",
    customer: "Pacific Oil Industries Ltd",
    country: "Thailand",
    requestedBy: "Michael Wong",
    currentLimit: 2000000,
    requestedLimit: 3000000,
    requestedDate: "2025-01-14",
    status: "clarification",
    priority: "high",
    tier: "Tier 1",
  },
  {
    id: "CR-2025-004",
    customer: "Metro Commodities Vietnam Co",
    country: "Vietnam",
    requestedBy: "Jennifer Tan",
    currentLimit: 800000,
    requestedLimit: 1200000,
    requestedDate: "2025-01-15",
    status: "pending",
    priority: "low",
    tier: "Tier 3",
  },
]

const recentlyProcessed = [
  {
    id: "CR-2024-098",
    customer: "Asian Palm Products Co",
    requestedBy: "David Kumar",
    decision: "approved",
    processedDate: "2025-01-08",
    approvedBy: "Finance Director",
  },
  {
    id: "CR-2024-097",
    customer: "Indo Oils Trading Ltd",
    requestedBy: "Lisa Anderson",
    decision: "rejected",
    processedDate: "2025-01-05",
    approvedBy: "Credit Committee",
  },
  {
    id: "CR-2024-096",
    customer: "Thai Commodities Export",
    requestedBy: "Bruce Lee",
    decision: "approved",
    processedDate: "2025-01-03",
    approvedBy: "Regional Manager",
  },
]

export function ApprovalPageContent() {
  const [statusFilter, setStatusFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const filteredApprovals = pendingApprovals.filter((item) => {
    const matchesStatus = statusFilter === "all" || item.status === statusFilter
    const matchesSearch =
      item.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.requestedBy.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesStatus && matchesSearch
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Pending Review</Badge>
      case "clarification":
        return <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">Requires Clarification</Badge>
      case "approved":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Approved</Badge>
      case "rejected":
        return <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Rejected</Badge>
      default:
        return <Badge>{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">High</Badge>
      case "medium":
        return <Badge className="bg-yellow-500 hover:bg-yellow-500">Medium</Badge>
      case "low":
        return <Badge variant="secondary">Low</Badge>
      default:
        return <Badge>{priority}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Credit Approval Queue</h1>
              <p className="text-sm text-muted-foreground">Review and process credit upgrade requests</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="border-l-4 border-l-yellow-500">
            <CardContent className="pt-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Clock className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{pendingApprovals.filter((a) => a.status === "pending").length}</p>
                  <p className="text-sm text-muted-foreground">Pending Review</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500">
            <CardContent className="pt-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {pendingApprovals.filter((a) => a.status === "clarification").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Needs Clarification</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="pt-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {recentlyProcessed.filter((a) => a.decision === "approved").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Approved (This Week)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardContent className="pt-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <XCircle className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {recentlyProcessed.filter((a) => a.decision === "rejected").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Rejected (This Week)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="pt-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by request ID, customer, or requester..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[200px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending Review</SelectItem>
                  <SelectItem value="clarification">Requires Clarification</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Pending Approvals Table */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Pending Approvals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Request ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Requested By</TableHead>
                  <TableHead>Current Limit</TableHead>
                  <TableHead>Requested Limit</TableHead>
                  <TableHead>Tier</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredApprovals.map((item) => (
                  <TableRow
                    key={item.id}
                    className="cursor-pointer hover:bg-muted/50"
                    onClick={() => router.push(`/approval/${item.id}`)}
                  >
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{item.customer}</p>
                        <p className="text-sm text-muted-foreground">{item.country}</p>
                      </div>
                    </TableCell>
                    <TableCell>{item.requestedBy}</TableCell>
                    <TableCell>MYR {item.currentLimit.toLocaleString()}</TableCell>
                    <TableCell className="font-medium text-blue-600">
                      MYR {item.requestedLimit.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{item.tier}</Badge>
                    </TableCell>
                    <TableCell>{getPriorityBadge(item.priority)}</TableCell>
                    <TableCell>{getStatusBadge(item.status)}</TableCell>
                    <TableCell>{item.requestedDate}</TableCell>
                    <TableCell>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Recently Processed */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Recently Processed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Request ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Requested By</TableHead>
                  <TableHead>Decision</TableHead>
                  <TableHead>Approved By</TableHead>
                  <TableHead>Processed Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentlyProcessed.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell>{item.customer}</TableCell>
                    <TableCell>{item.requestedBy}</TableCell>
                    <TableCell>{getStatusBadge(item.decision)}</TableCell>
                    <TableCell>{item.approvedBy}</TableCell>
                    <TableCell>{item.processedDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
