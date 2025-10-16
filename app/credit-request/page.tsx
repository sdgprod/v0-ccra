"use client"

import { useState } from "react"
import Link from "next/link"
import {
  FileText,
  User,
  Star,
  DollarSign,
  FileCheck,
  Target,
  Calculator,
  CheckSquare,
  Upload,
  EyeIcon,
  Send,
  ArrowLeft,
  Package,
  Truck,
  StickyNote,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const formSteps = [
  { id: "basic", label: "Basic Info" },
  { id: "order", label: "Order Info" },
  { id: "credit", label: "Credit Details" },
  { id: "preview", label: "Preview" },
]

const completionItems = [
  { id: "customer", label: "Customer Selected", icon: User },
  { id: "requestedBy", label: "Requested By", icon: Star },
  { id: "creditAmount", label: "Credit Amount", icon: DollarSign },
  { id: "paymentTerms", label: "Payment Terms", icon: FileCheck },
  { id: "orderVolume", label: "Order Volume", icon: Target },
  { id: "creditCalc", label: "Credit Calculation", icon: Calculator },
]

const nextSteps = [
  { id: 1, label: "Complete all required fields", icon: CheckSquare, color: "bg-red-100 text-red-600" },
  { id: 2, label: "Upload supporting documents", icon: Upload, color: "bg-yellow-100 text-yellow-600" },
  { id: 3, label: "Review email preview", icon: EyeIcon, color: "bg-yellow-100 text-yellow-600" },
  { id: 4, label: "Submit for approval", icon: Send, color: "bg-blue-100 text-blue-600" },
]

const customerData = {
  "golden-dragon": {
    name: "Golden Dragon Trading Pte Ltd",
    country: "Singapore",
    type: "MNC",
    tier: "1",
    strategicImportance: "High",
    businessRelationship: "8",
    yearsInOperation: 35,
    creditRating: "Moderate",
    countryRisk: "Low",
    currentCreditLimit: "1500000",
    currentPaymentTerms: "NET 30",
    outstandingBalance: 1200000,
    availableCredit: 300000,
    riskRating: "Low",
    creditUtilization: 80.0,
    orderHistory: [
      {
        date: "2024-01-15",
        orderNo: "PO-2024-001",
        product: "RBD Palm Olein",
        quantity: 2500,
        value: 11250000,
        status: "Completed",
      },
      {
        date: "2023-11-22",
        orderNo: "PO-2023-089",
        product: "Crude Palm Oil",
        quantity: 1800,
        value: 7920000,
        status: "Completed",
      },
      {
        date: "2023-09-08",
        orderNo: "PO-2023-067",
        product: "RBD Palm Olein",
        quantity: 3200,
        value: 14400000,
        status: "Completed",
      },
      {
        date: "2023-07-12",
        orderNo: "PO-2023-045",
        product: "Palm Kernel Oil",
        quantity: 1200,
        value: 6600000,
        status: "Completed",
      },
      {
        date: "2023-05-18",
        orderNo: "PO-2023-032",
        product: "RBD Palm Olein",
        quantity: 2100,
        value: 9450000,
        status: "Completed",
      },
    ],
    agingReport: {
      current: 0,
      days31to60: 0,
      days61to90: 0,
      days91to120: 0,
      over120: 0,
      paymentRecord: "Excellent Payment Record",
      message: "No overdue amounts. All payments received within agreed terms over the past 12 months.",
    },
    paymentHistory: [
      {
        date: "2024-02-10",
        invoiceNo: "INV-2024-0156",
        amount: 11250000,
        method: "Wire Transfer",
        daysToPay: 25,
        status: "On Time",
      },
      {
        date: "2023-12-18",
        invoiceNo: "INV-2023-0892",
        amount: 7920000,
        method: "Wire Transfer",
        daysToPay: 22,
        status: "On Time",
      },
      {
        date: "2023-10-05",
        invoiceNo: "INV-2023-0678",
        amount: 14400000,
        method: "Wire Transfer",
        daysToPay: 27,
        status: "On Time",
      },
      {
        date: "2023-08-08",
        invoiceNo: "INV-2023-0456",
        amount: 6600000,
        method: "Wire Transfer",
        daysToPay: 24,
        status: "On Time",
      },
      {
        date: "2023-06-15",
        invoiceNo: "INV-2023-0234",
        amount: 9450000,
        method: "Wire Transfer",
        daysToPay: 28,
        status: "On Time",
      },
      {
        date: "2023-04-20",
        invoiceNo: "INV-2023-0123",
        amount: 8750000,
        method: "Wire Transfer",
        daysToPay: 26,
        status: "On Time",
      },
      {
        date: "2023-02-28",
        invoiceNo: "INV-2023-0089",
        amount: 12300000,
        method: "Wire Transfer",
        daysToPay: 23,
        status: "On Time",
      },
      {
        date: "2023-01-12",
        invoiceNo: "INV-2023-0012",
        amount: 5680000,
        method: "Wire Transfer",
        daysToPay: 29,
        status: "On Time",
      },
      {
        date: "2022-11-25",
        invoiceNo: "INV-2022-0987",
        amount: 10200000,
        method: "Wire Transfer",
        daysToPay: 25,
        status: "On Time",
      },
      {
        date: "2022-09-18",
        invoiceNo: "INV-2022-0765",
        amount: 7890000,
        method: "Wire Transfer",
        daysToPay: 21,
        status: "On Time",
      },
    ],
    avgDaysToPay: 25,
    onTimeRate: 100,
    totalPaid: 57370000,
    preferredMethod: "Wire Transfer",
  },
  "sunrise-foods": {
    name: "Sunrise Foods Malaysia Sdn Bhd",
    country: "Malaysia",
    type: "Private Ltd",
    tier: "2",
    strategicImportance: "Medium",
    businessRelationship: "5",
    yearsInOperation: 22,
    creditRating: "Good",
    countryRisk: "Low",
    currentCreditLimit: "2000000",
    currentPaymentTerms: "NET 45",
    outstandingBalance: 1500000,
    availableCredit: 500000,
    riskRating: "Medium",
    creditUtilization: 75.0,
    orderHistory: [
      {
        date: "2024-01-20",
        orderNo: "PO-2024-005",
        product: "Crude Palm Oil",
        quantity: 2200,
        value: 9680000,
        status: "Completed",
      },
      {
        date: "2023-11-15",
        orderNo: "PO-2023-078",
        product: "RBD Palm Olein",
        quantity: 1500,
        value: 6750000,
        status: "Completed",
      },
      {
        date: "2023-09-22",
        orderNo: "PO-2023-056",
        product: "Palm Kernel Oil",
        quantity: 2800,
        value: 12320000,
        status: "Completed",
      },
      {
        date: "2023-07-08",
        orderNo: "PO-2023-034",
        product: "Crude Palm Oil",
        quantity: 1900,
        value: 8360000,
        status: "Completed",
      },
      {
        date: "2023-05-12",
        orderNo: "PO-2023-021",
        product: "RBD Palm Olein",
        quantity: 2400,
        value: 10800000,
        status: "Completed",
      },
    ],
    agingReport: {
      current: 8480000,
      days31to60: 1200000,
      days61to90: 0,
      days91to120: 0,
      over120: 0,
      paymentRecord: "Good Payment Record",
      message: "Minor overdue amounts. Most payments received within agreed terms.",
    },
    paymentHistory: [
      {
        date: "2024-02-15",
        invoiceNo: "INV-2024-0178",
        amount: 9680000,
        method: "Wire Transfer",
        daysToPay: 32,
        status: "Slightly Late",
      },
      {
        date: "2023-12-10",
        invoiceNo: "INV-2023-0845",
        amount: 6750000,
        method: "Wire Transfer",
        daysToPay: 28,
        status: "On Time",
      },
      {
        date: "2023-10-18",
        invoiceNo: "INV-2023-0623",
        amount: 12320000,
        method: "Wire Transfer",
        daysToPay: 35,
        status: "Slightly Late",
      },
      {
        date: "2023-08-05",
        invoiceNo: "INV-2023-0412",
        amount: 8360000,
        method: "Wire Transfer",
        daysToPay: 29,
        status: "On Time",
      },
      {
        date: "2023-06-08",
        invoiceNo: "INV-2023-0289",
        amount: 10800000,
        method: "Wire Transfer",
        daysToPay: 27,
        status: "On Time",
      },
      {
        date: "2023-04-15",
        invoiceNo: "INV-2023-0156",
        amount: 7200000,
        method: "Wire Transfer",
        daysToPay: 31,
        status: "Slightly Late",
      },
      {
        date: "2023-02-22",
        invoiceNo: "INV-2023-0098",
        amount: 9500000,
        method: "Wire Transfer",
        daysToPay: 26,
        status: "On Time",
      },
      {
        date: "2023-01-10",
        invoiceNo: "INV-2023-0023",
        amount: 6800000,
        method: "Wire Transfer",
        daysToPay: 30,
        status: "On Time",
      },
      {
        date: "2022-11-18",
        invoiceNo: "INV-2022-0934",
        amount: 8900000,
        method: "Wire Transfer",
        daysToPay: 33,
        status: "Slightly Late",
      },
      {
        date: "2022-09-25",
        invoiceNo: "INV-2022-0712",
        amount: 7500000,
        method: "Wire Transfer",
        daysToPay: 28,
        status: "On Time",
      },
    ],
    avgDaysToPay: 32,
    onTimeRate: 95,
    totalPaid: 45000000,
    preferredMethod: "Wire Transfer",
  },
  "pacific-oil": {
    name: "Pacific Oil Industries Ltd",
    country: "Thailand",
    type: "Public Ltd",
    tier: "1",
    strategicImportance: "High",
    businessRelationship: "12",
    yearsInOperation: 28,
    creditRating: "High",
    countryRisk: "Medium",
    currentCreditLimit: "3000000",
    currentPaymentTerms: "NET 60",
    outstandingBalance: 2400000,
    availableCredit: 600000,
    riskRating: "Low",
    creditUtilization: 80.0,
    orderHistory: [
      {
        date: "2024-01-25",
        orderNo: "PO-2024-008",
        product: "RBD Palm Olein",
        quantity: 3000,
        value: 13500000,
        status: "Completed",
      },
      {
        date: "2023-11-30",
        orderNo: "PO-2023-092",
        product: "Crude Palm Oil",
        quantity: 2500,
        value: 11000000,
        status: "Completed",
      },
      {
        date: "2023-09-15",
        orderNo: "PO-2023-071",
        product: "Palm Kernel Oil",
        quantity: 3500,
        value: 15400000,
        status: "Completed",
      },
      {
        date: "2023-07-20",
        orderNo: "PO-2023-048",
        product: "RBD Palm Olein",
        quantity: 2800,
        value: 12600000,
        status: "Completed",
      },
      {
        date: "2023-05-25",
        orderNo: "PO-2023-029",
        product: "Crude Palm Oil",
        quantity: 3200,
        value: 14080000,
        status: "Completed",
      },
    ],
    agingReport: {
      current: 0,
      days31to60: 0,
      days61to90: 0,
      days91to120: 0,
      over120: 0,
      paymentRecord: "Excellent Payment Record",
      message: "No overdue amounts. All payments received within agreed terms over the past 12 months.",
    },
    paymentHistory: [
      {
        date: "2024-02-18",
        invoiceNo: "INV-2024-0189",
        amount: 13500000,
        method: "Wire Transfer",
        daysToPay: 24,
        status: "On Time",
      },
      {
        date: "2023-12-22",
        invoiceNo: "INV-2023-0901",
        amount: 11000000,
        method: "Wire Transfer",
        daysToPay: 22,
        status: "On Time",
      },
      {
        date: "2023-10-12",
        invoiceNo: "INV-2023-0689",
        amount: 15400000,
        method: "Wire Transfer",
        daysToPay: 27,
        status: "On Time",
      },
      {
        date: "2023-08-15",
        invoiceNo: "INV-2023-0478",
        amount: 12600000,
        method: "Wire Transfer",
        daysToPay: 26,
        status: "On Time",
      },
      {
        date: "2023-06-20",
        invoiceNo: "INV-2023-0301",
        amount: 14080000,
        method: "Wire Transfer",
        daysToPay: 25,
        status: "On Time",
      },
      {
        date: "2023-04-28",
        invoiceNo: "INV-2023-0178",
        amount: 10500000,
        method: "Wire Transfer",
        daysToPay: 23,
        status: "On Time",
      },
      {
        date: "2023-03-05",
        invoiceNo: "INV-2023-0112",
        amount: 13200000,
        method: "Wire Transfer",
        daysToPay: 24,
        status: "On Time",
      },
      {
        date: "2023-01-18",
        invoiceNo: "INV-2023-0034",
        amount: 9800000,
        method: "Wire Transfer",
        daysToPay: 28,
        status: "On Time",
      },
      {
        date: "2022-11-30",
        invoiceNo: "INV-2022-0956",
        amount: 11700000,
        method: "Wire Transfer",
        daysToPay: 25,
        status: "On Time",
      },
      {
        date: "2022-10-05",
        invoiceNo: "INV-2022-0789",
        amount: 10200000,
        method: "Wire Transfer",
        daysToPay: 26,
        status: "On Time",
      },
    ],
    avgDaysToPay: 28,
    onTimeRate: 98,
    totalPaid: 82000000,
    preferredMethod: "Wire Transfer",
  },
  "metro-commodities": {
    name: "Metro Commodities Vietnam Co",
    country: "Vietnam",
    type: "Private Ltd",
    tier: "2",
    strategicImportance: "Medium",
    businessRelationship: "3",
    yearsInOperation: 15,
    creditRating: "Moderate",
    countryRisk: "Medium",
    currentCreditLimit: "1000000",
    currentPaymentTerms: "NET 30",
    outstandingBalance: 750000,
    availableCredit: 250000,
    riskRating: "Medium",
    creditUtilization: 75.0,
    orderHistory: [
      {
        date: "2024-01-10",
        orderNo: "PO-2024-003",
        product: "Crude Palm Oil",
        quantity: 1800,
        value: 7920000,
        status: "Completed",
      },
      {
        date: "2023-11-05",
        orderNo: "PO-2023-082",
        product: "RBD Palm Olein",
        quantity: 1200,
        value: 5400000,
        status: "Completed",
      },
      {
        date: "2023-09-12",
        orderNo: "PO-2023-061",
        product: "Palm Kernel Oil",
        quantity: 2000,
        value: 8800000,
        status: "Completed",
      },
      {
        date: "2023-07-18",
        orderNo: "PO-2023-041",
        product: "Crude Palm Oil",
        quantity: 1500,
        value: 6600000,
        status: "Completed",
      },
      {
        date: "2023-05-22",
        orderNo: "PO-2023-026",
        product: "RBD Palm Olein",
        quantity: 1700,
        value: 7650000,
        status: "Completed",
      },
    ],
    agingReport: {
      current: 6920000,
      days31to60: 850000,
      days61to90: 0,
      days91to120: 0,
      over120: 0,
      paymentRecord: "Fair Payment Record",
      message: "Some overdue amounts. Payment delays occasionally exceed agreed terms.",
    },
    paymentHistory: [
      {
        date: "2024-02-08",
        invoiceNo: "INV-2024-0145",
        amount: 7920000,
        method: "Wire Transfer",
        daysToPay: 38,
        status: "Late",
      },
      {
        date: "2023-12-05",
        invoiceNo: "INV-2023-0823",
        amount: 5400000,
        method: "Wire Transfer",
        daysToPay: 32,
        status: "Slightly Late",
      },
      {
        date: "2023-10-10",
        invoiceNo: "INV-2023-0645",
        amount: 8800000,
        method: "Wire Transfer",
        daysToPay: 35,
        status: "Slightly Late",
      },
      {
        date: "2023-08-18",
        invoiceNo: "INV-2023-0434",
        amount: 6600000,
        method: "Wire Transfer",
        daysToPay: 42,
        status: "Late",
      },
      {
        date: "2023-06-22",
        invoiceNo: "INV-2023-0278",
        amount: 7650000,
        method: "Wire Transfer",
        daysToPay: 29,
        status: "On Time",
      },
      {
        date: "2023-04-25",
        invoiceNo: "INV-2023-0167",
        amount: 5800000,
        method: "Wire Transfer",
        daysToPay: 36,
        status: "Slightly Late",
      },
      {
        date: "2023-03-08",
        invoiceNo: "INV-2023-0101",
        amount: 6900000,
        method: "Wire Transfer",
        daysToPay: 31,
        status: "Slightly Late",
      },
      {
        date: "2023-01-15",
        invoiceNo: "INV-2023-0028",
        amount: 4500000,
        method: "Wire Transfer",
        daysToPay: 28,
        status: "On Time",
      },
      {
        date: "2022-11-22",
        invoiceNo: "INV-2022-0945",
        amount: 7200000,
        method: "Wire Transfer",
        daysToPay: 40,
        status: "Late",
      },
      {
        date: "2022-09-28",
        invoiceNo: "INV-2022-0734",
        amount: 5300000,
        method: "Wire Transfer",
        daysToPay: 33,
        status: "Slightly Late",
      },
    ],
    avgDaysToPay: 30,
    onTimeRate: 92,
    totalPaid: 28000000,
    preferredMethod: "Wire Transfer",
  },
}

export default function CreditRequestPage() {
  const [activeStep, setActiveStep] = useState("basic")
  const [orderInfoTab, setOrderInfoTab] = useState("product")
  const [basicInfoTab, setBasicInfoTab] = useState<"assessment" | "sanction" | "transactions" | "dunn" | "bureau">(
    "assessment",
  )
  const [formData, setFormData] = useState({
    customer: "",
    requestedBy: "Bruce Lee",
    businessRelationship: "",
    tradingCurrency: "",
    refinery: "",
    productName: "",
    productPacking: "",
    productRequirement: "",
    productApplication: "",
    volumeMT: "",
    spotMonth: "",
    forwardMonth: "",
    volumeCapped: "",
    incoterm: "",
    destination: "",
    supplierCountry: "",
    portOfDestination: "",
    shipToPartyName: "",
    rawMaterialCost: "",
    processingCost: "",
    margin: "",
    financingCost: "",
    sellingCost: "",
    financePercentage: "",
    interestRate: "",
    creditLimitCalc: "",
    proposedCreditLimit: "",
    additionalNotes: "",
    // Updated assessment fields to match credit matrix form
    // Section A: Customer Segmentation (20%)
    strategicImportance: "",
    strategicImportanceScore: 0,

    // Section B: Financial Strength (30%)
    independentRating: "",
    independentRatingScore: 0,
    externalRating: "",
    externalRatingScore: 0,

    // Section C: Digital Footprint (10%)
    digitalFootprint: "",
    digitalFootprintScore: 0,

    // Section D: Overall Counterparty / Credit Risk (40%)
    businessEntity: "",
    businessEntityScore: 0,
    businessHistory: "",
    businessHistoryScore: 0,
    yearsInOperation: "",
    yearsInOperationScore: 0,
    countryRisk: "",
    countryRiskScore: 0,
    paymentBehaviour: "",
    paymentBehaviourScore: 0,
    sanctionCheck: "",
    sanctionCheckScore: 0,
    esgViolation: "",
    esgViolationScore: 0,

    // Calculated fields
    sectionATotal: 0,
    sectionBTotal: 0,
    sectionCTotal: 0,
    sectionDTotal: 0,
    totalScore: 0,
    creditRating: "",
    creditTier: "",

    // Header fields
    evaluationDate: new Date().toISOString().split("T")[0],

    creditScore: "85",
    riskRating: "B+",
    profitabilityRatio: "6.2",
    currentRatio: "1.45",
    gearingRatio: "1.2",
    assessmentNotes: "",
    supportingDocuments: [] as File[],

    requestedCreditLimit: "",
    currentCreditLimit: "",
    requestedPaymentTerms: "",
    currentPaymentTerms: "",
    justificationForUpgrade: "",
    // Added fields for customer data display
    type: "",
    tier: "",
    // strategicImportance: "", // Duplicate field, removed
    yearsInOperation: 0,
    creditRating: "",
    countryRisk: "",
  })

  const selectedCustomerData = formData.customer ? customerData[formData.customer as keyof typeof customerData] : null

  const getTabCompletionStatus = () => {
    const completedTabs = {
      basic: formData.customer && formData.requestedBy && formData.businessRelationship && formData.tradingCurrency,
      order: formData.productName && formData.volumeMT && formData.incoterm, // Added volumeMT and incoterm for order completion
      credit: formData.requestedCreditLimit && formData.requestedPaymentTerms && formData.justificationForUpgrade, // Added justification for credit completion
      sanction: true, // Auto-populated from customer data
      assessment: formData.creditScore && formData.riskRating, // assessmentNotes and supportingDocuments are not strictly required for basic completion
    }

    const totalTabs = 5
    const completed = Object.values(completedTabs).filter(Boolean).length
    const percentage = Math.round((completed / totalTabs) * 100)

    return { completedTabs, percentage }
  }

  const { completedTabs, percentage } = getTabCompletionStatus()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/sales-profile">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div className="flex-1">
              <h1 className="text-2xl font-bold">Credit Upgrade Request Form</h1>
              <p className="text-sm text-muted-foreground">
                Complete all sections for professional credit upgrade request
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 gap-6">
          {/* Left Column - Form Content */}
          <div className="space-y-6">
            {/* Status Cards */}

            {/* Customer Summary, Form Progress, and Next Steps in horizontal layout */}
            {selectedCustomerData && (
              <Card className="p-6">
                <div className="mb-4">
                  <div className="font-bold text-lg">{selectedCustomerData.name}</div>
                  <div className="text-sm text-muted-foreground">{selectedCustomerData.country}</div>
                </div>

                <div className="grid grid-cols-5 gap-6">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground mb-1">Current Credit Limit</span>
                    <span className="font-bold text-sm">
                      RM {Number(selectedCustomerData.currentCreditLimit).toLocaleString()}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground mb-1">Outstanding Balance</span>
                    <span className="font-bold text-sm">
                      RM {selectedCustomerData.outstandingBalance.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground mb-1">Available Credit</span>
                    <span className="font-bold text-sm text-green-600">
                      RM {selectedCustomerData.availableCredit.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground mb-1">Payment Terms</span>
                    <span className="font-bold text-sm">{selectedCustomerData.currentPaymentTerms}</span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground mb-1">Risk Rating</span>
                    <Badge
                      variant="outline"
                      className={
                        selectedCustomerData.riskRating === "Low"
                          ? "bg-green-50 text-green-700 border-green-200"
                          : selectedCustomerData.riskRating === "Medium"
                            ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                            : "bg-red-50 text-red-700 border-red-200"
                      }
                    >
                      {selectedCustomerData.riskRating}
                    </Badge>
                  </div>
                </div>
              </Card>
            )}

            {/* Information Availability Progress */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Information Availability</h3>
                <span className="text-2xl font-bold text-blue-600">{percentage}%</span>
              </div>
              <Progress value={percentage} className="h-3 mb-4" />
              <div className="grid grid-cols-5 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${completedTabs.basic ? "bg-green-600" : "bg-gray-300"}`} />
                  <span className="text-muted-foreground text-xs">
                    Basic Info: {completedTabs.basic ? "Complete" : "Pending"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${completedTabs.order ? "bg-green-600" : "bg-gray-300"}`} />
                  <span className="text-muted-foreground text-xs">
                    Order Info: {completedTabs.order ? "Complete" : "Pending"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${completedTabs.credit ? "bg-green-600" : "bg-gray-300"}`} />
                  <span className="text-muted-foreground text-xs">
                    Credit Details: {completedTabs.credit ? "Complete" : "Pending"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${completedTabs.sanction ? "bg-green-600" : "bg-gray-300"}`} />
                  <span className="text-muted-foreground text-xs">
                    Sanction & KYC: {completedTabs.sanction ? "Complete" : "Pending"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className={`h-2 w-2 rounded-full ${completedTabs.assessment ? "bg-green-600" : "bg-gray-300"}`}
                  />
                  <span className="text-muted-foreground text-xs">
                    Assessment: {completedTabs.assessment ? "Complete" : "Pending"}
                  </span>
                </div>
              </div>
            </Card>

            {/* Form Sections */}
            <Card className="p-6">
              {/* Step Tabs */}
              <div className="flex items-center gap-1 border-b mb-6">
                {formSteps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                      activeStep === step.id
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {step.label}
                  </button>
                ))}
              </div>

              {/* Form Content */}
              {activeStep === "basic" && (
                <div className="space-y-6">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="requestedBy">
                        Requested By <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="requestedBy"
                        placeholder="Enter your name"
                        value={formData.requestedBy}
                        onChange={(e) => setFormData({ ...formData, requestedBy: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="customer">
                        Customer <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.customer}
                        onValueChange={(value) => {
                          const customer = customerData[value as keyof typeof customerData]
                          setFormData({
                            ...formData,
                            customer: value,
                            businessRelationship: customer?.businessRelationship || "",
                            currentCreditLimit: customer?.currentCreditLimit || "",
                            currentPaymentTerms: customer?.currentPaymentTerms || "",
                            tradingCurrency:
                              customer?.country === "Singapore"
                                ? "SGD"
                                : customer?.country === "Malaysia"
                                  ? "MYR"
                                  : customer?.country === "Thailand"
                                    ? "THB"
                                    : "USD",
                            // Set new fields
                            type: customer?.type || "",
                            tier: customer?.tier || "",
                            strategicImportance: customer?.strategicImportance || "",
                            yearsInOperation: customer?.yearsInOperation || 0,
                            creditRating: customer?.creditRating || "",
                            countryRisk: customer?.countryRisk || "",
                          })
                        }}
                      >
                        <SelectTrigger id="customer">
                          <SelectValue placeholder="Select customer" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="golden-dragon">Golden Dragon Trading Pte Ltd - Singapore</SelectItem>
                          <SelectItem value="sunrise-foods">Sunrise Foods Malaysia Sdn Bhd - Malaysia</SelectItem>
                          <SelectItem value="pacific-oil">Pacific Oil Industries Ltd - Thailand</SelectItem>
                          <SelectItem value="metro-commodities">Metro Commodities Vietnam Co - Vietnam</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {selectedCustomerData && (
                    <Card className="p-6 bg-muted border-border">
                      <div className="grid grid-cols-4 gap-6">
                        <div className="space-y-1">
                          <Label className="text-xs text-muted-foreground">Type</Label>
                          <p className="text-sm font-medium">{selectedCustomerData.type}</p>
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs text-muted-foreground">Tier</Label>
                          <p className="text-sm font-medium">{selectedCustomerData.tier}</p>
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs text-muted-foreground">Strategic Importance</Label>
                          <Badge
                            variant="secondary"
                            className={
                              selectedCustomerData.strategicImportance === "High"
                                ? "bg-green-100 text-green-700 border-green-200"
                                : selectedCustomerData.strategicImportance === "Medium"
                                  ? "bg-yellow-100 text-yellow-700 border-yellow-200"
                                  : "bg-red-100 text-red-700 border-red-200"
                            }
                          >
                            {selectedCustomerData.strategicImportance}
                          </Badge>
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs text-muted-foreground">Business Relationship (Years)</Label>
                          <p className="text-sm font-medium">{selectedCustomerData.businessRelationship}</p>
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs text-muted-foreground">Years In Operation</Label>
                          <p className="text-sm font-medium">{selectedCustomerData.yearsInOperation}</p>
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs text-muted-foreground">Credit Rating</Label>
                          <p className="text-sm font-medium">{selectedCustomerData.creditRating}</p>
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs text-muted-foreground">Country Risk</Label>
                          <Badge
                            variant="secondary"
                            className={
                              selectedCustomerData.countryRisk === "Low"
                                ? "bg-green-100 text-green-700 border-green-200"
                                : selectedCustomerData.countryRisk === "Medium"
                                  ? "bg-yellow-100 text-yellow-700 border-yellow-200"
                                  : "bg-red-100 text-red-700 border-red-200"
                            }
                          >
                            {selectedCustomerData.countryRisk}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  )}

                  {/* Customer Details Sections */}
                  {formData.customer && selectedCustomerData && (
                    <div className="space-y-6">
                      <div className="space-y-6">
                        {/* Sub-tabs Navigation */}
                        <div className="flex items-center gap-1 border-b">
                          <button
                            onClick={() => setBasicInfoTab("assessment")}
                            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                              basicInfoTab === "assessment"
                                ? "border-primary text-primary"
                                : "border-transparent text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            Assessment
                          </button>
                          <button
                            onClick={() => setBasicInfoTab("sanction")}
                            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                              basicInfoTab === "sanction"
                                ? "border-primary text-primary"
                                : "border-transparent text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            Sanction & KYC
                          </button>
                          <button
                            onClick={() => setBasicInfoTab("transactions")}
                            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                              basicInfoTab === "transactions"
                                ? "border-primary text-primary"
                                : "border-transparent text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            Transaction History
                          </button>
                          <button
                            onClick={() => setBasicInfoTab("dunn")}
                            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                              basicInfoTab === "dunn"
                                ? "border-primary text-primary"
                                : "border-transparent text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            Dunn and Bradstreet
                          </button>
                          <button
                            onClick={() => setBasicInfoTab("bureau")}
                            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                              basicInfoTab === "bureau"
                                ? "border-primary text-primary"
                                : "border-transparent text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            Credit Bureau
                          </button>
                        </div>

                        {/* Assessment Tab Content */}
                        {basicInfoTab === "assessment" && (
                          <div className="space-y-8">
                            <div>
                              <h2 className="text-2xl font-bold">Credit Assessment Matrix</h2>
                              <p className="text-muted-foreground mt-1">
                                Comprehensive credit evaluation based on multiple risk factors
                              </p>
                            </div>

                            {/* Header Information */}
                            <Card>
                              <CardContent className="pt-6">
                                <div className="grid grid-cols-4 gap-6">
                                  <div className="space-y-2">
                                    <Label>Customer Name</Label>
                                    <Input
                                      value={selectedCustomerData?.name || "Not selected"}
                                      readOnly
                                      className="bg-muted"
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="evaluationDate">Evaluation Date</Label>
                                    <Input
                                      id="evaluationDate"
                                      type="date"
                                      value={formData.evaluationDate}
                                      onChange={(e) => setFormData({ ...formData, evaluationDate: e.target.value })}
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label>Current Credit Limit</Label>
                                    <Input
                                      value={selectedCustomerData?.currentCreditLimit || "N/A"}
                                      readOnly
                                      className="bg-muted"
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label>Payment Terms</Label>
                                    <Input
                                      value={selectedCustomerData?.currentPaymentTerms || "N/A"}
                                      readOnly
                                      className="bg-muted"
                                    />
                                  </div>
                                </div>
                              </CardContent>
                            </Card>

                            {/* Credit Assessment Summary */}
                            <Card className="border-2 border-blue-500">
                              <CardHeader className="bg-blue-50">
                                <CardTitle>Credit Assessment Summary</CardTitle>
                              </CardHeader>
                              <CardContent className="pt-6">
                                <div className="grid grid-cols-5 gap-4 mb-6">
                                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <div className="text-sm text-muted-foreground mb-1">Section A</div>
                                    <div className="text-2xl font-bold text-blue-600">{formData.sectionATotal}</div>
                                    <div className="text-xs text-muted-foreground">/ 20</div>
                                  </div>
                                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="text-sm text-muted-foreground mb-1">Section B</div>
                                    <div className="text-2xl font-bold text-green-600">{formData.sectionBTotal}</div>
                                    <div className="text-xs text-muted-foreground">/ 200</div>
                                  </div>
                                  <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                                    <div className="text-sm text-muted-foreground mb-1">Section C</div>
                                    <div className="text-2xl font-bold text-purple-600">{formData.sectionCTotal}</div>
                                    <div className="text-xs text-muted-foreground">/ 10</div>
                                  </div>
                                  <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                                    <div className="text-sm text-muted-foreground mb-1">Section D</div>
                                    <div className="text-2xl font-bold text-orange-600">{formData.sectionDTotal}</div>
                                    <div className="text-xs text-muted-foreground">/ 80</div>
                                  </div>
                                  <div className="text-center p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white">
                                    <div className="text-sm mb-1">Total Score</div>
                                    <div className="text-3xl font-bold">
                                      {formData.sectionATotal +
                                        formData.sectionBTotal +
                                        formData.sectionCTotal +
                                        formData.sectionDTotal}
                                    </div>
                                    <div className="text-xs">/ 310</div>
                                  </div>
                                </div>

                                {/* Credit Matrix Tiers */}
                                <div className="space-y-3">
                                  <h3 className="font-semibold text-lg">Credit Matrix - Recommended Tier</h3>
                                  <div className="grid grid-cols-4 gap-3">
                                    <div
                                      className={`p-4 rounded-lg border-2 ${
                                        (
                                          formData.sectionATotal +
                                            formData.sectionBTotal +
                                            formData.sectionCTotal +
                                            formData.sectionDTotal
                                        ) >= 120
                                          ? "border-green-500 bg-green-50"
                                          : "border-gray-200 bg-gray-50"
                                      }`}
                                    >
                                      <div className="font-bold text-lg mb-2">Tier 1</div>
                                      <div className="text-sm space-y-1">
                                        <div className="font-semibold">Score: ≥120</div>
                                        <div className="text-xs text-muted-foreground">
                                          1-5% unsecured, up to 10% secured
                                        </div>
                                        <div className="text-xs text-muted-foreground">5-10% of gross profit</div>
                                        <div className="text-xs text-muted-foreground">5-15% of net worth</div>
                                      </div>
                                    </div>

                                    <div
                                      className={`p-4 rounded-lg border-2 ${
                                        formData.sectionATotal +
                                          formData.sectionBTotal +
                                          formData.sectionCTotal +
                                          formData.sectionDTotal >=
                                          75 &&
                                        formData.sectionATotal +
                                          formData.sectionBTotal +
                                          formData.sectionCTotal +
                                          formData.sectionDTotal <
                                          120
                                          ? "border-blue-500 bg-blue-50"
                                          : "border-gray-200 bg-gray-50"
                                      }`}
                                    >
                                      <div className="font-bold text-lg mb-2">Tier 2</div>
                                      <div className="text-sm space-y-1">
                                        <div className="font-semibold">Score: ≥75</div>
                                        <div className="text-xs text-muted-foreground">
                                          1-5% unsecured, up to 10% secured
                                        </div>
                                        <div className="text-xs text-muted-foreground">5-10% of gross profit</div>
                                        <div className="text-xs text-muted-foreground">5-15% of net worth</div>
                                      </div>
                                    </div>

                                    <div
                                      className={`p-4 rounded-lg border-2 ${
                                        formData.sectionATotal +
                                          formData.sectionBTotal +
                                          formData.sectionCTotal +
                                          formData.sectionDTotal >=
                                          50 &&
                                        formData.sectionATotal +
                                          formData.sectionBTotal +
                                          formData.sectionCTotal +
                                          formData.sectionDTotal <
                                          75
                                          ? "border-yellow-500 bg-yellow-50"
                                          : "border-gray-200 bg-gray-50"
                                      }`}
                                    >
                                      <div className="font-bold text-lg mb-2">Tier 3</div>
                                      <div className="text-sm space-y-1">
                                        <div className="font-semibold">Score: 50-74</div>
                                        <div className="text-xs text-muted-foreground">
                                          1-3% unsecured, up to 5% secured
                                        </div>
                                        <div className="text-xs text-muted-foreground">3-5% of gross profit</div>
                                        <div className="text-xs text-muted-foreground">5-10% of net worth</div>
                                      </div>
                                    </div>

                                    <div
                                      className={`p-4 rounded-lg border-2 ${
                                        (
                                          formData.sectionATotal +
                                            formData.sectionBTotal +
                                            formData.sectionCTotal +
                                            formData.sectionDTotal
                                        ) < 50
                                          ? "border-red-500 bg-red-50"
                                          : "border-gray-200 bg-gray-50"
                                      }`}
                                    >
                                      <div className="font-bold text-lg mb-2">Tier 4</div>
                                      <div className="text-sm space-y-1">
                                        <div className="font-semibold">Score: &lt;50</div>
                                        <div className="text-xs text-muted-foreground">
                                          10% of net or 0% until track record
                                        </div>
                                        <div className="text-xs text-muted-foreground">3-5% of gross profit</div>
                                        <div className="text-xs text-muted-foreground">
                                          Advance ≥15 days with collateral
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>

                            {/* Section A: Customer Segmentation (20%) */}
                            <Card>
                              <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                  <span>Section A: Customer Segmentation</span>
                                  <span className="text-sm font-normal text-muted-foreground">Weight: 20%</span>
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-4">
                                <div className="grid grid-cols-3 gap-6">
                                  <div className="space-y-2 col-span-2">
                                    <Label htmlFor="strategicImportance">1. Strategic Importance</Label>
                                    <select
                                      id="strategicImportance"
                                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                      value={formData.strategicImportance}
                                      onChange={(e) => {
                                        const value = e.target.value
                                        let score = 0
                                        if (value === "Very High") score = 20
                                        else if (value === "High") score = 20
                                        else if (value === "Moderate") score = 10
                                        else if (value === "Low") score = 5

                                        setFormData({
                                          ...formData,
                                          strategicImportance: value,
                                          strategicImportanceScore: score,
                                          sectionATotal: score,
                                        })
                                      }}
                                    >
                                      <option value="">Select...</option>
                                      <option value="Very High">Very High - D (20 points)</option>
                                      <option value="High">High (20 points)</option>
                                      <option value="Moderate">Moderate (10 points)</option>
                                      <option value="Low">Low (5 points)</option>
                                    </select>
                                  </div>
                                  <div className="space-y-2">
                                    <Label>Score Achieved</Label>
                                    <Input
                                      value={formData.strategicImportanceScore}
                                      readOnly
                                      className="bg-muted text-lg font-semibold"
                                    />
                                  </div>
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t">
                                  <span className="font-semibold">Section A Total</span>
                                  <span className="text-2xl font-bold text-blue-600">
                                    {formData.sectionATotal} / 20
                                  </span>
                                </div>
                              </CardContent>
                            </Card>

                            {/* Section B: Financial Strength (30%) */}
                            <Card>
                              <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                  <span>Section B: Financial Strength</span>
                                  <span className="text-sm font-normal text-muted-foreground">Weight: 30%</span>
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-4">
                                <div className="grid grid-cols-3 gap-6">
                                  <div className="space-y-2 col-span-2">
                                    <Label htmlFor="independentRating">1. Independent Rating (IR)</Label>
                                    <select
                                      id="independentRating"
                                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                      value={formData.independentRating}
                                      onChange={(e) => {
                                        const value = e.target.value
                                        let score = 0
                                        if (value === "Low") score = 100
                                        else if (value === "Moderate") score = 80
                                        else if (value === "High") score = 50
                                        else if (value === "Very High") score = 20

                                        const newSectionBTotal = score + formData.externalRatingScore
                                        setFormData({
                                          ...formData,
                                          independentRating: value,
                                          independentRatingScore: score,
                                          sectionBTotal: newSectionBTotal,
                                        })
                                      }}
                                    >
                                      <option value="">Select...</option>
                                      <option value="Low">Low - AAA/AA/AA (100 points)</option>
                                      <option value="Moderate">Moderate - BBB/BB/BB (80 points)</option>
                                      <option value="High">High - CCC/CC/C (50 points)</option>
                                      <option value="Very High">Very High - D (20 points)</option>
                                    </select>
                                  </div>
                                  <div className="space-y-2">
                                    <Label>Score Achieved</Label>
                                    <Input
                                      value={formData.independentRatingScore}
                                      readOnly
                                      className="bg-muted text-lg font-semibold"
                                    />
                                  </div>
                                </div>

                                <div className="grid grid-cols-3 gap-6">
                                  <div className="space-y-2 col-span-2">
                                    <Label htmlFor="externalRating">2. External Ratings</Label>
                                    <select
                                      id="externalRating"
                                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                      value={formData.externalRating}
                                      onChange={(e) => {
                                        const value = e.target.value
                                        let score = 0
                                        if (value === "Low") score = 100
                                        else if (value === "Moderate") score = 80
                                        else if (value === "High") score = 50
                                        else if (value === "Very High") score = 0

                                        const newSectionBTotal = formData.independentRatingScore + score
                                        setFormData({
                                          ...formData,
                                          externalRating: value,
                                          externalRatingScore: score,
                                          sectionBTotal: newSectionBTotal,
                                        })
                                      }}
                                    >
                                      <option value="">Select...</option>
                                      <option value="Low">Low - AAA/AA/AA (100 points)</option>
                                      <option value="Moderate">Moderate - BBB/BB/BB (80 points)</option>
                                      <option value="High">High - CCC/CC/C (50 points)</option>
                                      <option value="Very High">Very High - &lt;D (0 points)</option>
                                    </select>
                                  </div>
                                  <div className="space-y-2">
                                    <Label>Score Achieved</Label>
                                    <Input
                                      value={formData.externalRatingScore}
                                      readOnly
                                      className="bg-muted text-lg font-semibold"
                                    />
                                  </div>
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t">
                                  <span className="font-semibold">Section B Total</span>
                                  <span className="text-2xl font-bold text-blue-600">
                                    {formData.sectionBTotal} / 200
                                  </span>
                                </div>
                              </CardContent>
                            </Card>

                            {/* Section C: Digital Footprint (10%) */}
                            <Card>
                              <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                  <span>Section C: Digital Footprint</span>
                                  <span className="text-sm font-normal text-muted-foreground">Weight: 10%</span>
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-4">
                                <div className="grid grid-cols-3 gap-6">
                                  <div className="space-y-2 col-span-2">
                                    <Label htmlFor="digitalFootprint">3. Digital Footprint & Certification</Label>
                                    <select
                                      id="digitalFootprint"
                                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                      value={formData.digitalFootprint}
                                      onChange={(e) => {
                                        const value = e.target.value
                                        let score = 0
                                        if (value === "Very Good") score = 10
                                        else if (value === "Good") score = 8
                                        else if (value === "Moderate") score = 5
                                        else if (value === "Low") score = 2

                                        setFormData({
                                          ...formData,
                                          digitalFootprint: value,
                                          digitalFootprintScore: score,
                                          sectionCTotal: score,
                                        })
                                      }}
                                    >
                                      <option value="">Select...</option>
                                      <option value="Very Good">Very Good (10 points)</option>
                                      <option value="Good">Good (8 points)</option>
                                      <option value="Moderate">Moderate (5 points)</option>
                                      <option value="Low">Low (2 points)</option>
                                    </select>
                                  </div>
                                  <div className="space-y-2">
                                    <Label>Score Achieved</Label>
                                    <Input
                                      value={formData.digitalFootprintScore}
                                      readOnly
                                      className="bg-muted text-lg font-semibold"
                                    />
                                  </div>
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t">
                                  <span className="font-semibold">Section C Total</span>
                                  <span className="text-2xl font-bold text-blue-600">
                                    {formData.sectionCTotal} / 10
                                  </span>
                                </div>
                              </CardContent>
                            </Card>

                            {/* Section D: Overall Counterparty / Credit Risk (40%) */}
                            <Card>
                              <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                  <span>Section D: Overall Counterparty / Credit Risk</span>
                                  <span className="text-sm font-normal text-muted-foreground">Weight: 40%</span>
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-4">
                                {/* 1. Type of Business Entity */}
                                <div className="grid grid-cols-3 gap-6">
                                  <div className="space-y-2 col-span-2">
                                    <Label htmlFor="businessEntity">1. Type of Business Entity</Label>
                                    <select
                                      id="businessEntity"
                                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                      value={formData.businessEntity}
                                      onChange={(e) => {
                                        const value = e.target.value
                                        let score = 0
                                        if (value === "Public Ltd") score = 10
                                        else if (value === "Sub. Of Public Ltd and Private Ltd") score = 5
                                        else if (value === "Sole Proprietor and Partnership") score = 3

                                        const newSectionDTotal =
                                          score +
                                          formData.businessHistoryScore +
                                          formData.yearsInOperationScore +
                                          formData.countryRiskScore +
                                          formData.paymentBehaviourScore +
                                          formData.sanctionCheckScore +
                                          formData.esgViolationScore
                                        setFormData({
                                          ...formData,
                                          businessEntity: value,
                                          businessEntityScore: score,
                                          sectionDTotal: newSectionDTotal,
                                        })
                                      }}
                                    >
                                      <option value="">Select...</option>
                                      <option value="Public Ltd">Public Ltd (10 points)</option>
                                      <option value="Sub. Of Public Ltd and Private Ltd">
                                        Sub. Of Public Ltd and Private Ltd (5 points)
                                      </option>
                                      <option value="Sole Proprietor and Partnership">
                                        Sole Proprietor and Partnership (3 points)
                                      </option>
                                    </select>
                                  </div>
                                  <div className="space-y-2">
                                    <Label>Score</Label>
                                    <Input
                                      value={formData.businessEntityScore}
                                      readOnly
                                      className="bg-muted text-lg font-semibold"
                                    />
                                  </div>
                                </div>

                                {/* 2. Business History with SDPB */}
                                <div className="grid grid-cols-3 gap-6">
                                  <div className="space-y-2 col-span-2">
                                    <Label htmlFor="businessHistory">2. Business History (years) with SDPB</Label>
                                    <select
                                      id="businessHistory"
                                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                      value={formData.businessHistory}
                                      onChange={(e) => {
                                        const value = e.target.value
                                        let score = 0
                                        if (value === ">10") score = 10
                                        else if (value === "4-10") score = 5
                                        else if (value === "≤3") score = 3

                                        const newSectionDTotal =
                                          formData.businessEntityScore +
                                          score +
                                          formData.yearsInOperationScore +
                                          formData.countryRiskScore +
                                          formData.paymentBehaviourScore +
                                          formData.sanctionCheckScore +
                                          formData.esgViolationScore
                                        setFormData({
                                          ...formData,
                                          businessHistory: value,
                                          businessHistoryScore: score,
                                          sectionDTotal: newSectionDTotal,
                                        })
                                      }}
                                    >
                                      <option value="">Select...</option>
                                      <option value=">10">&gt;10 years (10 points)</option>
                                      <option value="4-10">4-10 years (5 points)</option>
                                      <option value="≤3">≤3 years (3 points)</option>
                                    </select>
                                  </div>
                                  <div className="space-y-2">
                                    <Label>Score</Label>
                                    <Input
                                      value={formData.businessHistoryScore}
                                      readOnly
                                      className="bg-muted text-lg font-semibold"
                                    />
                                  </div>
                                </div>

                                {/* 3. Years in Operation */}
                                <div className="grid grid-cols-3 gap-6">
                                  <div className="space-y-2 col-span-2">
                                    <Label htmlFor="yearsInOperation">3. Years in Operation</Label>
                                    <select
                                      id="yearsInOperation"
                                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                      value={formData.yearsInOperation}
                                      onChange={(e) => {
                                        const value = e.target.value
                                        let score = 0
                                        if (value === ">10") score = 10
                                        else if (value === "4-10") score = 5
                                        else if (value === "≤3") score = 3

                                        const newSectionDTotal =
                                          formData.businessEntityScore +
                                          formData.businessHistoryScore +
                                          score +
                                          formData.countryRiskScore +
                                          formData.paymentBehaviourScore +
                                          formData.sanctionCheckScore +
                                          formData.esgViolationScore
                                        setFormData({
                                          ...formData,
                                          yearsInOperation: value,
                                          yearsInOperationScore: score,
                                          sectionDTotal: newSectionDTotal,
                                        })
                                      }}
                                    >
                                      <option value="">Select...</option>
                                      <option value=">10">&gt;10 years (10 points)</option>
                                      <option value="4-10">4-10 years (5 points)</option>
                                      <option value="≤3">≤3 years (3 points)</option>
                                    </select>
                                  </div>
                                  <div className="space-y-2">
                                    <Label>Score</Label>
                                    <Input
                                      value={formData.yearsInOperationScore}
                                      readOnly
                                      className="bg-muted text-lg font-semibold"
                                    />
                                  </div>
                                </div>

                                {/* 4. Country Risk */}
                                <div className="grid grid-cols-3 gap-6">
                                  <div className="space-y-2 col-span-2">
                                    <Label htmlFor="countryRisk">4. Country Risk</Label>
                                    <select
                                      id="countryRisk"
                                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                      value={formData.countryRisk}
                                      onChange={(e) => {
                                        const value = e.target.value
                                        let score = 0
                                        if (value === "Low") score = 10
                                        else if (value === "Medium") score = 5
                                        else if (value === "Sensitive") score = 3
                                        else if (value === "High") score = 0

                                        const newSectionDTotal =
                                          formData.businessEntityScore +
                                          formData.businessHistoryScore +
                                          formData.yearsInOperationScore +
                                          score +
                                          formData.paymentBehaviourScore +
                                          formData.sanctionCheckScore +
                                          formData.esgViolationScore
                                        setFormData({
                                          ...formData,
                                          countryRisk: value,
                                          countryRiskScore: score,
                                          sectionDTotal: newSectionDTotal,
                                        })
                                      }}
                                    >
                                      <option value="">Select...</option>
                                      <option value="Low">Low (10 points)</option>
                                      <option value="Medium">Medium (5 points)</option>
                                      <option value="Sensitive">Sensitive (3 points)</option>
                                      <option value="High">High (0 points)</option>
                                    </select>
                                  </div>
                                  <div className="space-y-2">
                                    <Label>Score</Label>
                                    <Input
                                      value={formData.countryRiskScore}
                                      readOnly
                                      className="bg-muted text-lg font-semibold"
                                    />
                                  </div>
                                </div>

                                {/* 5. Payment Behaviour Trend */}
                                <div className="grid grid-cols-3 gap-6">
                                  <div className="space-y-2 col-span-2">
                                    <Label htmlFor="paymentBehaviour">5. Payment Behaviour Trend</Label>
                                    <select
                                      id="paymentBehaviour"
                                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                      value={formData.paymentBehaviour}
                                      onChange={(e) => {
                                        const value = e.target.value
                                        let score = 0
                                        if (value === "Always") score = 30
                                        else if (value === "Usually") score = 25
                                        else if (value === "Sometimes") score = 20
                                        else if (value === "Rarely") score = 15
                                        else if (value === "Never") score = 5

                                        const newSectionDTotal =
                                          formData.businessEntityScore +
                                          formData.businessHistoryScore +
                                          formData.yearsInOperationScore +
                                          formData.countryRiskScore +
                                          score +
                                          formData.sanctionCheckScore +
                                          formData.esgViolationScore
                                        setFormData({
                                          ...formData,
                                          paymentBehaviour: value,
                                          paymentBehaviourScore: score,
                                          sectionDTotal: newSectionDTotal,
                                        })
                                      }}
                                    >
                                      <option value="">Select...</option>
                                      <option value="Always">Always (90% - 100%) - 30 points</option>
                                      <option value="Usually">Usually (75% - 89%) - 25 points</option>
                                      <option value="Sometimes">Sometimes (50% - 74%) - 20 points</option>
                                      <option value="Rarely">Rarely (20% - 50%) - 15 points</option>
                                      <option value="Never">Never (0-19%) - 5 points</option>
                                    </select>
                                  </div>
                                  <div className="space-y-2">
                                    <Label>Score</Label>
                                    <Input
                                      value={formData.paymentBehaviourScore}
                                      readOnly
                                      className="bg-muted text-lg font-semibold"
                                    />
                                  </div>
                                </div>

                                {/* 6. Sanction Check */}
                                <div className="grid grid-cols-3 gap-6">
                                  <div className="space-y-2 col-span-2">
                                    <Label htmlFor="sanctionCheck">6. Sanction Check</Label>
                                    <select
                                      id="sanctionCheck"
                                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                      value={formData.sanctionCheck}
                                      onChange={(e) => {
                                        const value = e.target.value
                                        let score = 0
                                        if (value === "No") score = 5
                                        else if (value === "Detected") score = 0

                                        const newSectionDTotal =
                                          formData.businessEntityScore +
                                          formData.businessHistoryScore +
                                          formData.yearsInOperationScore +
                                          formData.countryRiskScore +
                                          formData.paymentBehaviourScore +
                                          score +
                                          formData.esgViolationScore
                                        setFormData({
                                          ...formData,
                                          sanctionCheck: value,
                                          sanctionCheckScore: score,
                                          sectionDTotal: newSectionDTotal,
                                        })
                                      }}
                                    >
                                      <option value="">Select...</option>
                                      <option value="No">No (5 points)</option>
                                      <option value="Detected">Detected (0 points)</option>
                                    </select>
                                  </div>
                                  <div className="space-y-2">
                                    <Label>Score</Label>
                                    <Input
                                      value={formData.sanctionCheckScore}
                                      readOnly
                                      className="bg-muted text-lg font-semibold"
                                    />
                                  </div>
                                </div>

                                {/* 7. ESG Violation */}
                                <div className="grid grid-cols-3 gap-6">
                                  <div className="space-y-2 col-span-2">
                                    <Label htmlFor="esgViolation">7. ESG Violation</Label>
                                    <select
                                      id="esgViolation"
                                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                      value={formData.esgViolation}
                                      onChange={(e) => {
                                        const value = e.target.value
                                        let score = 0
                                        if (value === "No") score = 0
                                        else if (value === "Detected") score = 0

                                        const newSectionDTotal =
                                          formData.businessEntityScore +
                                          formData.businessHistoryScore +
                                          formData.yearsInOperationScore +
                                          formData.countryRiskScore +
                                          formData.paymentBehaviourScore +
                                          formData.sanctionCheckScore +
                                          score
                                        setFormData({
                                          ...formData,
                                          esgViolation: value,
                                          esgViolationScore: score,
                                          sectionDTotal: newSectionDTotal,
                                        })
                                      }}
                                    >
                                      <option value="">Select...</option>
                                      <option value="No">No (0 points)</option>
                                      <option value="Detected">Detected (0 points)</option>
                                    </select>
                                  </div>
                                  <div className="space-y-2">
                                    <Label>Score</Label>
                                    <Input
                                      value={formData.esgViolationScore}
                                      readOnly
                                      className="bg-muted text-lg font-semibold"
                                    />
                                  </div>
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t">
                                  <span className="font-semibold">Section D Total</span>
                                  <span className="text-2xl font-bold text-blue-600">
                                    {formData.sectionDTotal} / 80
                                  </span>
                                </div>
                              </CardContent>
                            </Card>

                            {/* Finance Review Section */}
                            <Card>
                              <CardHeader>
                                <CardTitle>Finance Review</CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-6">
                                  <div className="space-y-2">
                                    <Label htmlFor="reviewerName">Reviewed By (Name)</Label>
                                    <Input
                                      id="reviewerName"
                                      placeholder="Enter reviewer name"
                                      value={formData.requestedBy}
                                      readOnly
                                      className="bg-muted"
                                    />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="reviewDate">Review Date</Label>
                                    <Input
                                      id="reviewDate"
                                      type="date"
                                      value={formData.evaluationDate}
                                      readOnly
                                      className="bg-muted"
                                    />
                                  </div>
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor="assessmentNotes">Additional Notes</Label>
                                  <Textarea
                                    id="assessmentNotes"
                                    placeholder="Add any additional assessment notes, observations, or risk factors..."
                                    rows={4}
                                    value={formData.assessmentNotes}
                                    onChange={(e) => setFormData({ ...formData, assessmentNotes: e.target.value })}
                                  />
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        )}

                        {/* Sanction & KYC Tab Content */}
                        {basicInfoTab === "sanction" && (
                          <div className="space-y-8">
                            {/* Two Column Layout for Sanctions and KYC */}
                            <div className="grid grid-cols-2 gap-6">
                              {/* Left Column - Sanctions Screening */}
                              <div className="space-y-6">
                                <div>
                                  <h2 className="text-xl font-bold">Sanctions Screening</h2>
                                  <p className="text-sm text-muted-foreground">
                                    Automated sanctions and watchlist screening results
                                  </p>
                                </div>

                                {/* Status Card */}
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                  <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                      <div className="h-3 w-3 rounded-full bg-green-600" />
                                      <div>
                                        <div className="font-bold text-green-900">Clear</div>
                                        <div className="text-sm text-green-700">No sanctions matches found</div>
                                      </div>
                                    </div>
                                    <Badge className="bg-green-600 text-white hover:bg-green-700">Verified</Badge>
                                  </div>
                                </div>

                                {/* Screening Details */}
                                <div className="space-y-3">
                                  <div className="flex items-center justify-between py-2">
                                    <span className="text-sm text-muted-foreground">Last Screening:</span>
                                    <span className="font-semibold">2024-11-28</span>
                                  </div>
                                  <div className="flex items-center justify-between py-2">
                                    <span className="text-sm text-muted-foreground">Screening Provider:</span>
                                    <span className="font-semibold">World-Check</span>
                                  </div>
                                  <div className="flex items-center justify-between py-2">
                                    <span className="text-sm text-muted-foreground">Risk Level:</span>
                                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                      Low
                                    </Badge>
                                  </div>
                                  <div className="flex items-center justify-between py-2">
                                    <span className="text-sm text-muted-foreground">Next Review:</span>
                                    <span className="font-semibold">2024-12-28</span>
                                  </div>
                                </div>

                                {/* Screening Coverage */}
                                <div className="pt-4">
                                  <h3 className="font-semibold mb-3">Screening Coverage</h3>
                                  <div className="space-y-2">
                                    {["OFAC SDN List", "EU Sanctions", "UN Sanctions", "PEP Database"].map((item) => (
                                      <div key={item} className="flex items-center justify-between py-2">
                                        <span className="text-sm">{item}</span>
                                        <div className="flex items-center gap-2 text-green-600">
                                          <Check className="h-4 w-4" />
                                          <span className="text-sm font-medium">Clear</span>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              {/* Right Column - KYC Documentation */}
                              <div className="space-y-6">
                                <div>
                                  <h2 className="text-xl font-bold">KYC Documentation</h2>
                                  <p className="text-sm text-muted-foreground">Know Your Customer compliance status</p>
                                </div>

                                {/* Status Card */}
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                  <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                      <div className="h-3 w-3 rounded-full bg-green-600" />
                                      <div>
                                        <div className="font-bold text-green-900">Complete</div>
                                        <div className="text-sm text-green-700">All required documents verified</div>
                                      </div>
                                    </div>
                                    <Badge className="bg-green-600 text-white hover:bg-green-700">Approved</Badge>
                                  </div>
                                </div>

                                {/* Required Documents */}
                                <div>
                                  <h3 className="font-semibold mb-3">Required Documents</h3>
                                  <div className="space-y-2">
                                    {[
                                      "Certificate of Incorporation",
                                      "Business License",
                                      "Financial Statements",
                                      "Beneficial Ownership",
                                      "Director Identification",
                                    ].map((doc) => (
                                      <div key={doc} className="flex items-center justify-between py-2">
                                        <span className="text-sm">{doc}</span>
                                        <Badge
                                          variant="outline"
                                          className="bg-green-50 text-green-700 border-green-200"
                                        >
                                          <Check className="h-3 w-3 mr-1" />
                                          Verified
                                        </Badge>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* KYC Status Details */}
                                <div className="space-y-3 pt-4">
                                  <div className="flex items-center justify-between py-2">
                                    <span className="text-sm text-muted-foreground">KYC Status:</span>
                                    <Badge className="bg-green-600 text-white hover:bg-green-700">Approved</Badge>
                                  </div>
                                  <div className="flex items-center justify-between py-2">
                                    <span className="text-sm text-muted-foreground">Approval Date:</span>
                                    <span className="font-semibold">2024-01-15</span>
                                  </div>
                                  <div className="flex items-center justify-between py-2">
                                    <span className="text-sm text-muted-foreground">Next Review:</span>
                                    <span className="font-semibold">2025-01-15</span>
                                  </div>
                                  <div className="flex items-center justify-between py-2">
                                    <span className="text-sm text-muted-foreground">Risk Rating:</span>
                                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                                      Medium
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Compliance History Table */}
                            <div className="border rounded-lg p-6">
                              <div className="mb-4">
                                <h3 className="text-lg font-bold">Compliance History</h3>
                                <p className="text-sm text-muted-foreground">
                                  Historical compliance checks and updates
                                </p>
                              </div>

                              <div className="overflow-x-auto">
                                <table className="w-full">
                                  <thead>
                                    <tr className="border-b">
                                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
                                        Date
                                      </th>
                                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
                                        Type
                                      </th>
                                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
                                        Status
                                      </th>
                                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
                                        Performed By
                                      </th>
                                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
                                        Notes
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="border-b">
                                      <td className="py-3 px-2 text-sm">2024-11-28</td>
                                      <td className="py-3 px-2 text-sm">Sanctions Screening</td>
                                      <td className="py-3 px-2">
                                        <Badge
                                          variant="outline"
                                          className="bg-green-50 text-green-700 border-green-200"
                                        >
                                          Clear
                                        </Badge>
                                      </td>
                                      <td className="py-3 px-2 text-sm">System Automated</td>
                                      <td className="py-3 px-2 text-sm">Monthly automated screening</td>
                                    </tr>
                                    <tr className="border-b">
                                      <td className="py-3 px-2 text-sm">2024-10-28</td>
                                      <td className="py-3 px-2 text-sm">Sanctions Screening</td>
                                      <td className="py-3 px-2">
                                        <Badge
                                          variant="outline"
                                          className="bg-green-50 text-green-700 border-green-200"
                                        >
                                          Clear
                                        </Badge>
                                      </td>
                                      <td className="py-3 px-2 text-sm">System Automated</td>
                                      <td className="py-3 px-2 text-sm">Monthly automated screening</td>
                                    </tr>
                                    <tr className="border-b">
                                      <td className="py-3 px-2 text-sm">2024-07-15</td>
                                      <td className="py-3 px-2 text-sm">KYC Review</td>
                                      <td className="py-3 px-2">
                                        <Badge className="bg-green-600 text-white hover:bg-green-700">Approved</Badge>
                                      </td>
                                      <td className="py-3 px-2 text-sm">Sarah Johnson</td>
                                      <td className="py-3 px-2 text-sm">Semi-annual KYC review completed</td>
                                    </tr>
                                    <tr>
                                      <td className="py-3 px-2 text-sm">2024-01-15</td>
                                      <td className="py-3 px-2 text-sm">Initial KYC</td>
                                      <td className="py-3 px-2">
                                        <Badge className="bg-green-600 text-white hover:bg-green-700">Approved</Badge>
                                      </td>
                                      <td className="py-3 px-2 text-sm">Michael Chen</td>
                                      <td className="py-3 px-2 text-sm">Initial customer onboarding</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Transaction History Tab Content */}
                        {basicInfoTab === "transactions" && (
                          <div className="space-y-6">
                            {/* Order History Section */}
                            <div className="border rounded-lg p-6">
                              <div className="flex items-center gap-2 mb-4">
                                <FileText className="h-5 w-5" />
                                <h3 className="text-lg font-semibold">Order History (Last 12 Months)</h3>
                              </div>

                              <div className="overflow-x-auto">
                                <table className="w-full">
                                  <thead>
                                    <tr className="border-b">
                                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
                                        Date
                                      </th>
                                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
                                        Order No.
                                      </th>
                                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
                                        Product
                                      </th>
                                      <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">
                                        Quantity (MT)
                                      </th>
                                      <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">
                                        Value (MYR)
                                      </th>
                                      <th className="text-center py-3 px-2 text-sm font-medium text-muted-foreground">
                                        Status
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {selectedCustomerData.orderHistory.map((order, index) => (
                                      <tr key={index} className="border-b last:border-0">
                                        <td className="py-3 px-2 text-sm">{order.date}</td>
                                        <td className="py-3 px-2 text-sm">{order.orderNo}</td>
                                        <td className="py-3 px-2 text-sm">{order.product}</td>
                                        <td className="py-3 px-2 text-sm text-right">
                                          {order.quantity.toLocaleString()}
                                        </td>
                                        <td className="py-3 px-2 text-sm text-right">{order.value.toLocaleString()}</td>
                                        <td className="py-3 px-2 text-center">
                                          <Badge
                                            variant="outline"
                                            className="bg-green-50 text-green-700 border-green-200"
                                          >
                                            {order.status}
                                          </Badge>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>

                              <div className="flex items-center justify-between mt-4 pt-4 border-t text-sm">
                                <span className="font-medium">
                                  Total Orders:{" "}
                                  <span className="text-foreground">{selectedCustomerData.orderHistory.length}</span>
                                </span>
                                <span className="font-medium">
                                  Total Quantity:{" "}
                                  <span className="text-foreground">
                                    {selectedCustomerData.orderHistory
                                      .reduce((sum, order) => sum + order.quantity, 0)
                                      .toLocaleString()}{" "}
                                    MT
                                  </span>
                                </span>
                                <span className="font-medium">
                                  Total Value:{" "}
                                  <span className="text-foreground">
                                    MYR{" "}
                                    {selectedCustomerData.orderHistory
                                      .reduce((sum, order) => sum + order.value, 0)
                                      .toLocaleString()}
                                  </span>
                                </span>
                              </div>
                            </div>

                            {/* Aging Report Section */}
                            <div className="border rounded-lg p-6">
                              <div className="flex items-center gap-2 mb-4">
                                <DollarSign className="h-5 w-5" />
                                <h3 className="text-lg font-semibold">Aging Report</h3>
                              </div>

                              <div className="grid grid-cols-5 gap-4 mb-6">
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-green-600">
                                    MYR {selectedCustomerData.agingReport.current.toLocaleString()}
                                  </div>
                                  <div className="text-xs text-muted-foreground mt-1">Current (0-30 days)</div>
                                  <div className="text-xs font-medium mt-1">0.0%</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-orange-600">
                                    MYR {selectedCustomerData.agingReport.days31to60.toLocaleString()}
                                  </div>
                                  <div className="text-xs text-muted-foreground mt-1">31-60 days</div>
                                  <div className="text-xs font-medium mt-1">0.0%</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-orange-600">
                                    MYR {selectedCustomerData.agingReport.days61to90.toLocaleString()}
                                  </div>
                                  <div className="text-xs text-muted-foreground mt-1">61-90 days</div>
                                  <div className="text-xs font-medium mt-1">0.0%</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-red-600">
                                    MYR {selectedCustomerData.agingReport.days91to120.toLocaleString()}
                                  </div>
                                  <div className="text-xs text-muted-foreground mt-1">91-120 days</div>
                                  <div className="text-xs font-medium mt-1">0.0%</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-red-700">
                                    MYR {selectedCustomerData.agingReport.over120.toLocaleString()}
                                  </div>
                                  <div className="text-xs text-muted-foreground mt-1">Over 120 days</div>
                                  <div className="text-xs font-medium mt-1">0.0%</div>
                                </div>
                              </div>

                              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                                <CheckSquare className="h-5 w-5 text-green-600 mt-0.5" />
                                <div>
                                  <div className="font-semibold text-green-900">
                                    {selectedCustomerData.agingReport.paymentRecord}
                                  </div>
                                  <div className="text-sm text-green-700 mt-1">
                                    {selectedCustomerData.agingReport.message}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Payment History Section */}
                            <div className="border rounded-lg p-6">
                              <div className="flex items-center gap-2 mb-4">
                                <FileCheck className="h-5 w-5" />
                                <h3 className="text-lg font-semibold">Payment History (Last 10 Transactions)</h3>
                              </div>

                              <div className="overflow-x-auto">
                                <table className="w-full">
                                  <thead>
                                    <tr className="border-b">
                                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
                                        Payment Date
                                      </th>
                                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
                                        Invoice No.
                                      </th>
                                      <th className="text-right py-3 px-2 text-sm font-medium text-muted-foreground">
                                        Amount (MYR)
                                      </th>
                                      <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">
                                        Payment Method
                                      </th>
                                      <th className="text-center py-3 px-2 text-sm font-medium text-muted-foreground">
                                        Days to Pay
                                      </th>
                                      <th className="text-center py-3 px-2 text-sm font-medium text-muted-foreground">
                                        Status
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {selectedCustomerData.paymentHistory.map((payment, index) => (
                                      <tr key={index} className="border-b last:border-0">
                                        <td className="py-3 px-2 text-sm">{payment.date}</td>
                                        <td className="py-3 px-2 text-sm">{payment.invoiceNo}</td>
                                        <td className="py-3 px-2 text-sm text-right">
                                          {payment.amount.toLocaleString()}
                                        </td>
                                        <td className="py-3 px-2 text-sm">{payment.method}</td>
                                        <td className="py-3 px-2 text-center">
                                          <Badge
                                            variant="outline"
                                            className="bg-green-50 text-green-700 border-green-200"
                                          >
                                            {payment.daysToPay}
                                          </Badge>
                                        </td>
                                        <td className="py-3 px-2 text-center">
                                          <Badge
                                            variant="outline"
                                            className={
                                              payment.status === "On Time"
                                                ? "bg-green-50 text-green-700 border-green-200"
                                                : payment.status === "Slightly Late"
                                                  ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                                                  : "bg-red-50 text-red-700 border-red-200"
                                            }
                                          >
                                            {payment.status}
                                          </Badge>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>

                              <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t">
                                <div className="text-center">
                                  <div className="text-2xl font-bold">{selectedCustomerData.avgDaysToPay}</div>
                                  <div className="text-sm text-muted-foreground mt-1">Avg Days to Pay</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-green-600">
                                    {selectedCustomerData.onTimeRate}%
                                  </div>
                                  <div className="text-sm text-muted-foreground mt-1">On-Time Rate</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-blue-600">
                                    MYR {(selectedCustomerData.totalPaid / 1000000).toFixed(1)}M
                                  </div>
                                  <div className="text-sm text-muted-foreground mt-1">Total Paid</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-sm font-semibold text-orange-600">
                                    {selectedCustomerData.preferredMethod}
                                  </div>
                                  <div className="text-sm text-muted-foreground mt-1">Preferred Method</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {basicInfoTab === "dunn" && (
                          <div className="space-y-6">
                            <div className="text-center py-12 text-muted-foreground">
                              <p>Dunn and Bradstreet data will be displayed here</p>
                            </div>
                          </div>
                        )}

                        {basicInfoTab === "bureau" && (
                          <div className="space-y-6">
                            <div className="text-center py-12 text-muted-foreground">
                              <p>Credit Bureau data will be displayed here</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeStep === "order" && (
                <div className="space-y-6">
                  {/* Order Info Sub-tabs */}
                  <div className="flex items-center gap-1 border-b">
                    <button
                      onClick={() => setOrderInfoTab("product")}
                      className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                        orderInfoTab === "product"
                          ? "border-primary text-primary"
                          : "border-transparent text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Package className="h-4 w-4" />
                      Product Information
                    </button>
                    <button
                      onClick={() => setOrderInfoTab("shipping")}
                      className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                        orderInfoTab === "shipping"
                          ? "border-primary text-primary"
                          : "border-transparent text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Truck className="h-4 w-4" />
                      Shipping Information
                    </button>
                    <button
                      onClick={() => setOrderInfoTab("costing")}
                      className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                        orderInfoTab === "costing"
                          ? "border-primary text-primary"
                          : "border-transparent text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Calculator className="h-4 w-4" />
                      Product Costing
                    </button>
                    <button
                      onClick={() => setOrderInfoTab("notes")}
                      className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                        orderInfoTab === "notes"
                          ? "border-primary text-primary"
                          : "border-transparent text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <StickyNote className="h-4 w-4" />
                      Additional Notes
                    </button>
                  </div>

                  {/* Product Information Section */}
                  {orderInfoTab === "product" && (
                    <div className="space-y-6 pt-6">
                      <h2 className="text-xl font-bold">Product Information</h2>

                      <div className="space-y-2">
                        <Label htmlFor="tradingCurrency">Trading Currency</Label>
                        <Select
                          value={formData.tradingCurrency}
                          onValueChange={(value) => setFormData({ ...formData, tradingCurrency: value })}
                        >
                          <SelectTrigger id="tradingCurrency" className="w-full">
                            <SelectValue placeholder="Select currency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="myr">MYR - Malaysian Ringgit</SelectItem>
                            <SelectItem value="usd">USD - US Dollar</SelectItem>
                            <SelectItem value="sgd">SGD - Singapore Dollar</SelectItem>
                            <SelectItem value="thb">THB - Thai Baht</SelectItem>
                            <SelectItem value="vnd">VND - Vietnamese Dong</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="refinery">Select Refinery</Label>
                        <Select
                          value={formData.refinery}
                          onValueChange={(value) => setFormData({ ...formData, refinery: value })}
                        >
                          <SelectTrigger id="refinery" className="w-full">
                            <SelectValue placeholder="Select Refinery" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="refinery-a">Refinery A - Port Klang</SelectItem>
                            <SelectItem value="refinery-b">Refinery B - Pasir Gudang</SelectItem>
                            <SelectItem value="refinery-c">Refinery C - Penang</SelectItem>
                            <SelectItem value="refinery-d">Refinery D - Kuantan</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="productName">Product Name</Label>
                        <Select
                          value={formData.productName}
                          onValueChange={(value) => setFormData({ ...formData, productName: value })}
                        >
                          <SelectTrigger id="productName" className="w-full">
                            <SelectValue placeholder="Select Product Code" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="rbd-palm-olein">RBD Palm Olein</SelectItem>
                            <SelectItem value="crude-palm-oil">Crude Palm Oil</SelectItem>
                            <SelectItem value="palm-kernel-oil">Palm Kernel Oil</SelectItem>
                            <SelectItem value="palm-fatty-acid">Palm Fatty Acid Distillate</SelectItem>
                            <SelectItem value="palm-stearin">RBD Palm Stearin</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="productPacking">Product Packing</Label>
                        <Select
                          value={formData.productPacking}
                          onValueChange={(value) => setFormData({ ...formData, productPacking: value })}
                        >
                          <SelectTrigger id="productPacking" className="w-full">
                            <SelectValue placeholder="Product Packing Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bulk">Bulk - Flexitank</SelectItem>
                            <SelectItem value="iso-tank">ISO Tank Container</SelectItem>
                            <SelectItem value="drums">Steel Drums (200L)</SelectItem>
                            <SelectItem value="ibc">IBC Totes (1000L)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="productRequirement">Product Requirement</Label>
                        <Textarea
                          id="productRequirement"
                          placeholder="Enter specific product requirements, quality standards, certifications needed, etc."
                          rows={4}
                          value={formData.productRequirement}
                          onChange={(e) => setFormData({ ...formData, productRequirement: e.target.value })}
                          className="w-full"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="productApplication">Product Application</Label>
                        <Textarea
                          id="productApplication"
                          placeholder="Describe the intended application or use case for this product..."
                          rows={4}
                          value={formData.productApplication}
                          onChange={(e) => setFormData({ ...formData, productApplication: e.target.value })}
                          className="w-full"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="volumeMT">Volume (MT)</Label>
                          <Input
                            id="volumeMT"
                            type="number"
                            placeholder="Enter volume in metric tons"
                            value={formData.volumeMT}
                            onChange={(e) => setFormData({ ...formData, volumeMT: e.target.value })}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="spotMonth">Spot Month</Label>
                          <Input
                            id="spotMonth"
                            placeholder="Enter spot month"
                            value={formData.spotMonth}
                            onChange={(e) => setFormData({ ...formData, spotMonth: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="forwardMonth">Forward Month</Label>
                          <Input
                            id="forwardMonth"
                            placeholder="Enter forward month"
                            value={formData.forwardMonth}
                            onChange={(e) => setFormData({ ...formData, forwardMonth: e.target.value })}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="volumeCapped">Volume Capped</Label>
                          <Input
                            id="volumeCapped"
                            type="number"
                            placeholder="Enter volume capped"
                            value={formData.volumeCapped}
                            onChange={(e) => setFormData({ ...formData, volumeCapped: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="incoterm">Incoterm</Label>
                        <Select
                          value={formData.incoterm}
                          onValueChange={(value) => setFormData({ ...formData, incoterm: value })}
                        >
                          <SelectTrigger id="incoterm" className="w-full">
                            <SelectValue placeholder="Select Incoterm" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fob">FOB - Free On Board</SelectItem>
                            <SelectItem value="cif">CIF - Cost, Insurance and Freight</SelectItem>
                            <SelectItem value="cfr">CFR - Cost and Freight</SelectItem>
                            <SelectItem value="exw">EXW - Ex Works</SelectItem>
                            <SelectItem value="dap">DAP - Delivered At Place</SelectItem>
                            <SelectItem value="ddp">DDP - Delivered Duty Paid</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {/* Shipping Information Section */}
                  {orderInfoTab === "shipping" && (
                    <div className="space-y-6 pt-6">
                      <h2 className="text-xl font-bold">Shipping Information</h2>

                      <div className="space-y-2">
                        <Label htmlFor="destination">Destination</Label>
                        <Input
                          id="destination"
                          placeholder="Enter destination"
                          value={formData.destination}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                          className="w-full"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="supplierCountry">Supplier's Country</Label>
                        <Input
                          id="supplierCountry"
                          placeholder="Enter supplier's country"
                          value={formData.supplierCountry}
                          onChange={(e) => setFormData({ ...formData, supplierCountry: e.target.value })}
                          className="w-full"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="portOfDestination">Port of Destination</Label>
                        <Input
                          id="portOfDestination"
                          placeholder="Enter port of destination"
                          value={formData.portOfDestination}
                          onChange={(e) => setFormData({ ...formData, portOfDestination: e.target.value })}
                          className="w-full"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="shipToPartyName">Ship to Party Name</Label>
                        <Input
                          id="shipToPartyName"
                          placeholder="Enter ship to party name"
                          value={formData.shipToPartyName}
                          onChange={(e) => setFormData({ ...formData, shipToPartyName: e.target.value })}
                          className="w-full"
                        />
                      </div>
                    </div>
                  )}

                  {/* Product Costing Section */}
                  {orderInfoTab === "costing" && (
                    <div className="space-y-6 pt-6">
                      <h2 className="text-xl font-bold">Product Costing</h2>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="rawMaterialCost">Raw Material Cost (MYR)</Label>
                          <Input
                            id="rawMaterialCost"
                            type="number"
                            placeholder="Enter raw material cost in MYR"
                            value={formData.rawMaterialCost}
                            onChange={(e) => setFormData({ ...formData, rawMaterialCost: e.target.value })}
                            className="w-full"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="financePercentage">% of Finance Cost vs Price (MYR)</Label>
                          <Input
                            id="financePercentage"
                            type="number"
                            placeholder="Enter percentage of finance cost vs price"
                            value={formData.financePercentage}
                            onChange={(e) => setFormData({ ...formData, financePercentage: e.target.value })}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="processingCost">Processing & Others (MYR)</Label>
                          <Input
                            id="processingCost"
                            type="number"
                            placeholder="Enter processing and other costs in MYR"
                            value={formData.processingCost}
                            onChange={(e) => setFormData({ ...formData, processingCost: e.target.value })}
                            className="w-full"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="interestRate">Interest Rate (%)</Label>
                          <Input
                            id="interestRate"
                            type="number"
                            placeholder="Enter interest rate percentage"
                            value={formData.interestRate}
                            onChange={(e) => setFormData({ ...formData, interestRate: e.target.value })}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="margin">Margin (MYR)</Label>
                          <Input
                            id="margin"
                            type="number"
                            placeholder="Enter margin in MYR"
                            value={formData.margin}
                            onChange={(e) => setFormData({ ...formData, margin: e.target.value })}
                            className="w-full"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="creditLimitCalc">Credit Limit Calculation (MYR)</Label>
                          <Input
                            id="creditLimitCalc"
                            type="number"
                            placeholder="Enter credit limit calculation in MYR"
                            value={formData.creditLimitCalc}
                            onChange={(e) => setFormData({ ...formData, creditLimitCalc: e.target.value })}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="financingCost">Financing Cost (MYR)</Label>
                          <Input
                            id="financingCost"
                            type="number"
                            placeholder="Enter financing cost in MYR"
                            value={formData.financingCost}
                            onChange={(e) => setFormData({ ...formData, financingCost: e.target.value })}
                            className="w-full"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="proposedCreditLimit">Proposed Credit Limit (MYR)</Label>
                          <Input
                            id="proposedCreditLimit"
                            type="number"
                            placeholder="Enter proposed credit limit in MYR"
                            value={formData.proposedCreditLimit}
                            onChange={(e) => setFormData({ ...formData, proposedCreditLimit: e.target.value })}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="sellingCost">Selling Cost (MYR)</Label>
                          <Input
                            id="sellingCost"
                            type="number"
                            placeholder="Enter selling cost in MYR"
                            value={formData.sellingCost}
                            onChange={(e) => setFormData({ ...formData, sellingCost: e.target.value })}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Additional Notes Section */}
                  {orderInfoTab === "notes" && (
                    <div className="space-y-6 pt-6">
                      <h2 className="text-xl font-bold">Additional Notes / Justification</h2>

                      <div className="space-y-2">
                        <Label htmlFor="additionalNotes">Additional Notes / Justification (Max 300 words)</Label>
                        <Textarea
                          id="additionalNotes"
                          placeholder="Enter any additional notes, justifications, special requirements, or comments regarding this order..."
                          rows={8}
                          value={formData.additionalNotes}
                          onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                          className="w-full"
                        />
                        <p className="text-sm text-muted-foreground">
                          Maximum 300 words (approximately 2000 characters)
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeStep === "credit" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="requestedCreditLimit">
                        Requested Credit Limit (MYR) <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="requestedCreditLimit"
                          type="number"
                          placeholder="Enter requested amount"
                          value={formData.requestedCreditLimit}
                          onChange={(e) => setFormData({ ...formData, requestedCreditLimit: e.target.value })}
                          className="pl-9"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentCreditLimit">
                        Current Limit (MYR) <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="currentCreditLimit"
                          type="number"
                          value={formData.currentCreditLimit}
                          onChange={(e) => setFormData({ ...formData, currentCreditLimit: e.target.value })}
                          className="pl-9 bg-muted"
                          readOnly
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">Auto-populated from customer record</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="requestedPaymentTerms">
                        Requested Payment Terms <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="requestedPaymentTerms"
                        placeholder="e.g., 30% Advance, 70% Cash Against Documents"
                        value={formData.requestedPaymentTerms}
                        onChange={(e) => setFormData({ ...formData, requestedPaymentTerms: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentPaymentTerms">Current Payment Terms</Label>
                      <Input
                        id="currentPaymentTerms"
                        placeholder="e.g., NET 30"
                        value={formData.currentPaymentTerms}
                        onChange={(e) => setFormData({ ...formData, currentPaymentTerms: e.target.value })}
                        className="bg-muted"
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="justificationForUpgrade">
                      Justification for Credit Upgrade <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="justificationForUpgrade"
                      placeholder="Provide detailed justification for the credit upgrade and payment terms change..."
                      rows={6}
                      value={formData.justificationForUpgrade}
                      onChange={(e) => setFormData({ ...formData, justificationForUpgrade: e.target.value })}
                      className="w-full"
                    />
                  </div>

                  {/* Current Credit Information Section */}
                  {selectedCustomerData && (
                    <div className="mt-8 border rounded-lg p-6 bg-muted/30">
                      <h3 className="text-lg font-bold mb-6">Current Credit Information</h3>

                      <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Current Credit Limit:</span>
                          <span className="text-lg font-bold">
                            RM {Number(selectedCustomerData.currentCreditLimit).toLocaleString()}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Payment Terms:</span>
                          <span className="text-lg font-bold">{selectedCustomerData.currentPaymentTerms}</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Outstanding Balance:</span>
                          <span className="text-lg font-bold">
                            RM {selectedCustomerData.outstandingBalance.toLocaleString()}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Risk Rating:</span>
                          <Badge
                            variant="outline"
                            className={
                              selectedCustomerData.riskRating === "Low"
                                ? "bg-green-50 text-green-700 border-green-200"
                                : selectedCustomerData.riskRating === "Medium"
                                  ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                                  : "bg-red-50 text-red-700 border-red-200"
                            }
                          >
                            {selectedCustomerData.riskRating}
                          </Badge>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Available Credit:</span>
                          <span className="text-lg font-bold text-green-600">
                            RM {selectedCustomerData.availableCredit.toLocaleString()}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Credit Utilization:</span>
                          <span className="text-lg font-bold">{selectedCustomerData.creditUtilization}%</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeStep === "preview" && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">Credit Upgrade Request Preview</h2>
                    <p className="text-muted-foreground">
                      Review all information before submitting your credit upgrade request
                    </p>
                  </div>

                  {/* 1. Basic Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Basic Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-muted-foreground">Customer</Label>
                          <p className="font-medium mt-1">{selectedCustomerData?.name || formData.customer}</p>
                          <p className="text-sm text-muted-foreground">{selectedCustomerData?.country}</p>
                        </div>
                        <div>
                          <Label className="text-muted-foreground">Requested By</Label>
                          <p className="font-medium mt-1">{formData.requestedBy}</p>
                        </div>
                        <div>
                          <Label className="text-muted-foreground">Business Relationship</Label>
                          <p className="font-medium mt-1">{formData.businessRelationship} years</p>
                        </div>
                        <div>
                          <Label className="text-muted-foreground">Trading Currency</Label>
                          <p className="font-medium mt-1">{formData.tradingCurrency || "MYR"}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 2. Credit Details */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Credit Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <Label className="text-muted-foreground">Requested Credit Limit</Label>
                          <p className="text-2xl font-bold mt-1">
                            MYR{" "}
                            {formData.requestedCreditLimit
                              ? Number(formData.requestedCreditLimit).toLocaleString()
                              : "3,000,000"}
                          </p>
                        </div>
                        <div>
                          <Label className="text-muted-foreground">Current Credit Limit</Label>
                          <p className="text-2xl font-bold mt-1">
                            MYR{" "}
                            {formData.currentCreditLimit
                              ? Number(formData.currentCreditLimit).toLocaleString()
                              : selectedCustomerData?.currentCreditLimit
                                ? Number(selectedCustomerData.currentCreditLimit).toLocaleString()
                                : "0"}
                          </p>
                        </div>
                        <div>
                          <Label className="text-muted-foreground">Requested Payment Terms</Label>
                          <p className="font-medium mt-1">
                            {formData.requestedPaymentTerms || "30% Advance, 70% Cash Against Documents"}
                          </p>
                        </div>
                        <div>
                          <Label className="text-muted-foreground">Current Payment Terms</Label>
                          <p className="font-medium mt-1">
                            {formData.currentPaymentTerms || selectedCustomerData?.currentPaymentTerms || "N/A"}
                          </p>
                        </div>
                      </div>
                      <div>
                        <Label className="text-muted-foreground">Justification for Credit Upgrade</Label>
                        <p className="mt-2 p-4 bg-muted rounded-lg">
                          {formData.justificationForUpgrade ||
                            "The customer has demonstrated consistent payment behavior over the past 6 years with a strong order history. The requested credit increase is justified by anticipated business growth and increased order volumes in the upcoming quarter. The customer maintains excellent financial ratios and has no overdue payments."}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 3. Credit Assessment & Risk Analysis */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Credit Assessment & Risk Analysis</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-4 gap-4">
                        <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                          <p className="text-3xl font-bold text-blue-600">{formData.creditScore}/100</p>
                          <p className="text-sm text-muted-foreground mt-1">Credit Score</p>
                        </div>
                        <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                          <p className="text-3xl font-bold text-green-600">{formData.riskRating}</p>
                          <p className="text-sm text-muted-foreground mt-1">Risk Rating</p>
                        </div>
                        <div className="p-4 rounded-lg bg-purple-50 border border-purple-200">
                          <p className="text-3xl font-bold text-purple-600">{formData.profitabilityRatio}%</p>
                          <p className="text-sm text-muted-foreground mt-1">Profitability</p>
                        </div>
                        <div className="p-4 rounded-lg bg-orange-50 border border-orange-200">
                          <p className="text-3xl font-bold text-orange-600">{formData.currentRatio}</p>
                          <p className="text-sm text-muted-foreground mt-1">Current Ratio</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Financial Ratios</h3>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="p-3 border rounded-lg">
                            <p className="text-sm text-muted-foreground">Profitability Ratio</p>
                            <p className="text-xl font-semibold mt-1">{formData.profitabilityRatio}%</p>
                          </div>
                          <div className="p-3 border rounded-lg">
                            <p className="text-sm text-muted-foreground">Current Ratio</p>
                            <p className="text-xl font-semibold mt-1">{formData.currentRatio}</p>
                          </div>
                          <div className="p-3 border rounded-lg">
                            <p className="text-sm text-muted-foreground">Gearing Ratio</p>
                            <p className="text-xl font-semibold mt-1">{formData.gearingRatio}</p>
                          </div>
                        </div>
                      </div>

                      {formData.assessmentNotes && (
                        <div>
                          <Label className="text-muted-foreground">Assessment Notes</Label>
                          <p className="mt-2 p-4 bg-muted rounded-lg">{formData.assessmentNotes}</p>
                        </div>
                      )}

                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-green-900">RECOMMEND APPROVAL</p>
                            <p className="text-sm text-blue-900">
                              Based on the credit assessment, {selectedCustomerData?.name || "the customer"}{" "}
                              demonstrates strong financial position with excellent payment history. The requested
                              credit increase is justified by business growth and order requirements.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 4. Order Commercial Info */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Order Commercial Info</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <Label className="text-muted-foreground">Trading Currency</Label>
                          <p className="font-medium mt-1">{formData.tradingCurrency || "MYR"}</p>
                        </div>
                        <div>
                          <Label className="text-muted-foreground">Refinery</Label>
                          <p className="font-medium mt-1">{formData.refinery || "Sime Darby Refinery - Port Klang"}</p>
                        </div>
                        <div>
                          <Label className="text-muted-foreground">Product Name</Label>
                          <p className="font-medium mt-1">{formData.productName || "RBD Palm Olein (CP10)"}</p>
                        </div>
                        <div>
                          <Label className="text-muted-foreground">Product Packing</Label>
                          <p className="font-medium mt-1">
                            {formData.productPacking || "Flexitank (24MT per container)"}
                          </p>
                        </div>
                        <div>
                          <Label className="text-muted-foreground">Incoterm</Label>
                          <p className="font-medium mt-1">{formData.incoterm || "FOB Port Klang"}</p>
                        </div>
                        <div>
                          <Label className="text-muted-foreground">Volume Capped</Label>
                          <p className="font-medium mt-1">{formData.volumeCapped || "5,000 MT per month"}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 rounded-lg border bg-muted/30">
                          <p className="text-sm text-muted-foreground">Volume (MT)</p>
                          <p className="text-2xl font-bold mt-1">{formData.volumeMT || "2,400"}</p>
                        </div>
                        <div className="p-4 rounded-lg border bg-muted/30">
                          <p className="text-sm text-muted-foreground">Spot Month</p>
                          <p className="text-2xl font-bold mt-1">{formData.spotMonth || "January 2025"}</p>
                        </div>
                        <div className="p-4 rounded-lg border bg-muted/30">
                          <p className="text-sm text-muted-foreground">Forward Month</p>
                          <p className="text-2xl font-bold mt-1">{formData.forwardMonth || "February 2025"}</p>
                        </div>
                      </div>

                      <div>
                        <Label className="text-muted-foreground">Product Requirement</Label>
                        <p className="mt-2 p-4 bg-muted rounded-lg text-sm">
                          {formData.productRequirement ||
                            "Product must meet MPOB (Malaysian Palm Oil Board) standards with FFA max 0.1%, moisture content max 0.1%, and iodine value 56-58. Required certifications: MSPO (Malaysian Sustainable Palm Oil), Halal certification, and ISO 22000 food safety management. Product must be stored in clean, temperature-controlled tanks and transported in food-grade flexitanks."}
                        </p>
                      </div>

                      <div>
                        <Label className="text-muted-foreground">Product Application</Label>
                        <p className="mt-2 p-4 bg-muted rounded-lg text-sm">
                          {formData.productApplication ||
                            "The RBD Palm Olein will be used primarily for cooking oil production and food manufacturing applications. The product is intended for the domestic Malaysian market and regional export to Singapore and Indonesia. End-use applications include bottled cooking oil, industrial frying for food processing plants, and as an ingredient in margarine and shortening production."}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 5. Order History and Aging Report */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Order History and Aging Report</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="font-semibold mb-3">Order History (Last 12 Months)</h3>
                        <div className="rounded-lg border">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Order No.</TableHead>
                                <TableHead>Product</TableHead>
                                <TableHead>Quantity (MT)</TableHead>
                                <TableHead>Value (MYR)</TableHead>
                                <TableHead>Status</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {selectedCustomerData?.orderHistory.map((order, index) => (
                                <TableRow key={index}>
                                  <TableCell>{order.date}</TableCell>
                                  <TableCell className="font-medium">{order.orderNo}</TableCell>
                                  <TableCell>{order.product}</TableCell>
                                  <TableCell>{order.quantity.toLocaleString()}</TableCell>
                                  <TableCell>{order.value.toLocaleString()}</TableCell>
                                  <TableCell>
                                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                                      {order.status}
                                    </Badge>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-4 p-4 bg-muted rounded-lg">
                          <div>
                            <p className="text-sm text-muted-foreground">Total Orders</p>
                            <p className="text-lg font-semibold">{selectedCustomerData?.orderHistory.length || 0}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Total Quantity</p>
                            <p className="text-lg font-semibold">
                              {selectedCustomerData?.orderHistory
                                .reduce((sum, order) => sum + order.quantity, 0)
                                .toLocaleString()}{" "}
                              MT
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Total Value</p>
                            <p className="text-lg font-semibold">
                              MYR{" "}
                              {selectedCustomerData?.orderHistory
                                .reduce((sum, order) => sum + order.value, 0)
                                .toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Aging Report</h3>
                        <div className="grid grid-cols-5 gap-4">
                          <div className="p-4 rounded-lg border">
                            <p className="text-2xl font-bold text-green-600">
                              MYR {selectedCustomerData?.agingReport.current.toLocaleString()}
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">Current (0-30 days)</p>
                            <p className="text-xs text-muted-foreground mt-1">0.0%</p>
                          </div>
                          <div className="p-4 rounded-lg border">
                            <p className="text-2xl font-bold text-orange-600">
                              MYR {selectedCustomerData?.agingReport.days31to60.toLocaleString()}
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">31-60 days</p>
                            <p className="text-xs text-muted-foreground mt-1">0.0%</p>
                          </div>
                          <div className="p-4 rounded-lg border">
                            <p className="text-2xl font-bold text-red-600">MYR 0</p>
                            <p className="text-sm text-muted-foreground mt-1">61-90 days</p>
                            <p className="text-xs text-muted-foreground mt-1">0.0%</p>
                          </div>
                          <div className="p-4 rounded-lg border">
                            <p className="text-2xl font-bold text-red-600">MYR 0</p>
                            <p className="text-sm text-muted-foreground mt-1">91-120 days</p>
                            <p className="text-xs text-muted-foreground mt-1">0.0%</p>
                          </div>
                          <div className="p-4 rounded-lg border">
                            <p className="text-2xl font-bold text-red-600">MYR 0</p>
                            <p className="text-sm text-muted-foreground mt-1">Over 120 days</p>
                            <p className="text-xs text-muted-foreground mt-1">0.0%</p>
                          </div>
                        </div>
                        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                          <Check className="h-5 w-5 text-green-600 mt-0.5" />
                          <div>
                            <p className="font-semibold text-green-900">Good Payment Record</p>
                            <p className="text-sm text-green-700 mt-1">
                              Minor overdue amounts. Most payments received within agreed terms.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 6. Sanction & KYC Status */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Sanction & KYC Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-semibold mb-3">Sanctions Screening</h3>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                              <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-green-600" />
                                <span className="font-medium">Clear</span>
                              </div>
                              <Badge className="bg-green-600">Verified</Badge>
                            </div>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Last Screening:</span>
                                <span className="font-medium">2024-11-28</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Risk Level:</span>
                                <Badge variant="secondary" className="bg-green-100 text-green-800">
                                  Low
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-3">KYC Documentation</h3>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                              <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-green-600" />
                                <span className="font-medium">Complete</span>
                              </div>
                              <Badge className="bg-green-600">Approved</Badge>
                            </div>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">KYC Status:</span>
                                <Badge className="bg-green-600">Approved</Badge>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Risk Rating:</span>
                                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                                  Medium
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <p className="text-sm text-muted-foreground">
                      Please review all information carefully before submitting
                    </p>
                    <div className="flex gap-3">
                      <Button variant="outline" size="lg">
                        Edit Information
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Form Actions */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t">
                <Button variant="outline">Cancel</Button>
                <Button>
                  <FileText className="h-4 w-4 mr-2" />
                  Submit Credit Upgrade Request
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
