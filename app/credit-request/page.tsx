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
    // Updated assessment fields to match credit matrix form with dummy data
    // Section A: Customer Segmentation (20%)
    strategicImportance: "High",
    strategicImportanceScore: 15,

    // Section B: Financial Strength (200%)
    independentRating: "BBB+",
    independentRatingScore: 85,
    externalRating: "Good",
    externalRatingScore: 55,

    // Section C: Digital Footprint (10%)
    digitalFootprint: "Strong online presence with certifications",
    digitalFootprintScore: 7,

    // Section D: Overall Counterparty / Credit Risk (80%)
    businessEntity: "Public Limited Company",
    businessEntityScore: 12,
    businessHistory: "Established with strong track record",
    businessHistoryScore: 10,
    yearsInOperation: "15-20 years",
    yearsInOperationScore: 8,
    countryRisk: "Low",
    countryRiskScore: 15,
    paymentBehaviour: "Excellent - Always on time",
    paymentBehaviourScore: 10,
    sanctionCheck: "Clear",
    sanctionCheckScore: 0,
    esgViolation: "No violations",
    esgViolationScore: 0,

    // Calculated fields with dummy totals
    sectionATotal: 15,
    sectionBTotal: 140,
    sectionCTotal: 7,
    sectionDTotal: 55,
    totalScore: 217,
    creditRating: "A-",
    creditTier: "Tier 1",

    // Header fields
    evaluationDate: new Date().toISOString().split("T")[0],

    creditScore: "85",
    riskRating: "B+",
    profitabilityRatio: "6.2",
    currentRatio: "1.45",
    gearingRatio: "1.2",
    assessmentNotes:
      "Customer demonstrates strong financial performance with consistent payment history. The company has maintained excellent credit standing over the past 8 years of business relationship. Financial ratios indicate healthy liquidity and manageable debt levels. Recommended for credit upgrade based on solid fundamentals and growth trajectory.",
    supportingDocuments: [] as File[],

    requestedCreditLimit: "",
    currentCreditLimit: "",
    requestedPaymentTerms: "",
    currentPaymentTerms: "",
    justificationForUpgrade: "",
    // Added fields for customer data display
    type: "",
    tier: "",
    // yearsInOperation: 0, // This was duplicated, removed one instance

    // Fields for Section B for preview
    externalRatings: "Good",

    // Fields for Section D for preview
    industryRisk: "Low",
    managementQuality: "Good",
    paymentHistory: "Always", // Placeholder, will be updated based on actual payment behaviour
  })

  const selectedCustomerData = formData.customer ? customerData[formData.customer as keyof typeof customerData] : null

  console.log("[v0] Current tab:", basicInfoTab)
  console.log("[v0] Selected customer:", formData.customer)
  console.log("[v0] Customer data available:", !!selectedCustomerData)

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
                  <div
                    className={`h-2 w-2 rounded-full ${completedTabs.assessment ? "bg-green-600" : "bg-gray-300"}`}
                  />
                  <span className="text-muted-foreground text-xs">
                    Assessment: {completedTabs.assessment ? "Complete" : "Pending"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${completedTabs.sanction ? "bg-green-600" : "bg-gray-300"}`} />
                  <span className="text-muted-foreground text-xs">
                    Sanction & KYC: {completedTabs.sanction ? "Complete" : "Pending"}
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

                  <Card className="p-6 bg-muted border-border">
                    <div className="grid grid-cols-4 gap-6">
                      <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground">Type</Label>
                        <p className="text-sm font-medium">{selectedCustomerData?.type}</p>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground">Tier</Label>
                        <p className="text-sm font-medium">{selectedCustomerData?.tier}</p>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground">Strategic Importance</Label>
                        <Badge
                          variant="secondary"
                          className={
                            selectedCustomerData?.strategicImportance === "High"
                              ? "bg-green-100 text-green-700 border-green-200"
                              : selectedCustomerData?.strategicImportance === "Medium"
                                ? "bg-yellow-100 text-yellow-700 border-yellow-200"
                                : "bg-red-100 text-red-700 border-red-200"
                          }
                        >
                          {selectedCustomerData?.strategicImportance}
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground">Business Relationship (Years)</Label>
                        <p className="text-sm font-medium">{selectedCustomerData?.businessRelationship}</p>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground">Years In Operation</Label>
                        <p className="text-sm font-medium">{selectedCustomerData?.yearsInOperation}</p>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground">Credit Rating</Label>
                        <p className="text-sm font-medium">{selectedCustomerData?.creditRating}</p>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs text-muted-foreground">Country Risk</Label>
                        <Badge
                          variant="secondary"
                          className={
                            selectedCustomerData?.countryRisk === "Low"
                              ? "bg-green-100 text-green-700 border-green-200"
                              : selectedCustomerData?.countryRisk === "Medium"
                                ? "bg-yellow-100 text-yellow-700 border-yellow-200"
                                : "bg-red-100 text-red-700 border-red-200"
                          }
                        >
                          {selectedCustomerData?.countryRisk}
                        </Badge>
                      </div>
                    </div>
                  </Card>

                  {/* Customer Details Sections */}
                  {formData.customer && selectedCustomerData && (
                    <div className="space-y-6">
                      <div className="space-y-6">
                        {/* Sub-tabs Navigation */}
                        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-6">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                            <p className="text-sm font-medium text-blue-900">
                              Explore detailed customer information across different sections
                            </p>
                          </div>
                          <div className="flex items-center gap-1 border-b bg-white rounded-t-lg">
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
                              <CardContent className="space-y-4">
                                <div className="grid grid-cols-5 gap-4 mb-6">
                                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <div className="text-sm text-muted-foreground mb-1">
                                      Section A: Strategic Importance
                                    </div>
                                    <div className="text-2xl font-bold text-blue-600">{formData.sectionATotal}</div>
                                    <div className="text-xs text-muted-foreground">/ 20</div>
                                  </div>
                                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                                    <div className="text-sm text-muted-foreground mb-1">
                                      Section B: Financial Strength
                                    </div>
                                    <div className="text-2xl font-bold text-green-600">{formData.sectionBTotal}</div>
                                    <div className="text-xs text-muted-foreground">/ 200</div>
                                  </div>
                                  <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                                    <div className="text-sm text-muted-foreground mb-1">
                                      Section C: Digital Footprint
                                    </div>
                                    <div className="text-2xl font-bold text-purple-600">{formData.sectionCTotal}</div>
                                    <div className="text-xs text-muted-foreground">/ 10</div>
                                  </div>
                                  <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                                    <div className="text-sm text-muted-foreground mb-1">Section D: Overall Risk</div>
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
                                  <span>Section A: Strategic Importance</span>
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
                                  <span>Section D: Overall Risk</span>
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
                            <div>
                              <h2 className="text-2xl font-bold">D&B European Comprehensive Report</h2>
                              <p className="text-muted-foreground mt-1">
                                Report viewed{" "}
                                {new Date().toLocaleDateString("en-GB", {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                })}
                              </p>
                            </div>

                            {/* Identification & Summary */}
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-xl">Identification & Summary</CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-6">
                                <div>
                                  <h3 className="text-2xl font-bold text-primary mb-4">{selectedCustomerData?.name}</h3>

                                  <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                      <div>
                                        <Label className="text-muted-foreground">Main Trading Address</Label>
                                        <p className="font-medium">
                                          Oostzeedijk 236
                                          <br />
                                          3063 BP Rotterdam
                                          <br />
                                          NETHERLANDS
                                        </p>
                                      </div>
                                      <div>
                                        <Label className="text-muted-foreground">Telephone Number</Label>
                                        <p className="font-medium">+31 010-2800000</p>
                                      </div>
                                      <div>
                                        <Label className="text-muted-foreground">Web Address</Label>
                                        <p className="font-medium text-primary">www.argolanda.nl</p>
                                      </div>
                                      <div>
                                        <Label className="text-muted-foreground">Email</Label>
                                        <p className="font-medium">argolanda6@gmail.com</p>
                                      </div>
                                    </div>

                                    <div className="space-y-4">
                                      <div>
                                        <Label className="text-muted-foreground">D-U-N-S® Number</Label>
                                        <p className="font-medium">40-217-3306</p>
                                      </div>
                                      <div>
                                        <Label className="text-muted-foreground">VAT Number</Label>
                                        <p className="font-medium">NL 001836936B01</p>
                                      </div>
                                      <div>
                                        <Label className="text-muted-foreground">Line of Business (SIC)</Label>
                                        <p className="font-medium">Feathers hides and pelts (5159)</p>
                                      </div>
                                      <div>
                                        <Label className="text-muted-foreground">Date Started</Label>
                                        <p className="font-medium">29 Jun 1926</p>
                                      </div>
                                      <div>
                                        <Label className="text-muted-foreground">Legal Form</Label>
                                        <p className="font-medium">BV Normal Structure</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
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
                                      <Label className="text-muted-foreground text-sm">D&B Rating</Label>
                                      <p className="text-3xl font-bold mt-2">A 2</p>
                                      <p className="text-xs text-muted-foreground mt-1">Financial Strength: A</p>
                                      <p className="text-xs text-muted-foreground">Risk Indicator: 2</p>
                                    </CardContent>
                                  </Card>

                                  <Card className="bg-muted/50">
                                    <CardContent className="pt-6 text-center">
                                      <Label className="text-muted-foreground text-sm">Risk Indicator</Label>
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
                                      <Label className="text-muted-foreground text-sm">D&B Failure Score</Label>
                                      <p className="text-3xl font-bold mt-2">73</p>
                                      <p className="text-xs text-muted-foreground mt-1">out of 100</p>
                                      <p className="text-xs text-green-600 dark:text-green-400 mt-2">
                                        27% of businesses have lower risk
                                      </p>
                                    </CardContent>
                                  </Card>

                                  <Card className="bg-muted/50">
                                    <CardContent className="pt-6 text-center">
                                      <Label className="text-muted-foreground text-sm">D&B Maximum Credit</Label>
                                      <p className="text-3xl font-bold mt-2">€400,000</p>
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
                                      <span>
                                        Year started: statistics have established high expectations of continuity.
                                      </span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                      <span className="text-green-500 mt-1">✓</span>
                                      <span>
                                        Trend in Tangible Net Worth is flat or increasing compared to the previous
                                        accounts.
                                      </span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                      <span className="text-green-500 mt-1">✓</span>
                                      <span>
                                        This company has a parent or liability taker with a Group Net Worth of
                                        €1,081,169
                                      </span>
                                    </p>
                                    <p className="flex items-start gap-2">
                                      <span className="text-green-500 mt-1">✓</span>
                                      <span>
                                        On average this company pays its accounts within terms and shows similar or
                                        better payment behaviour than 12 months ago.
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
                                      <Label className="text-muted-foreground text-sm text-center block">
                                        Average Days Beyond Terms
                                      </Label>
                                      <p className="text-4xl font-bold text-green-600 dark:text-green-400 mt-2">0</p>
                                      <p className="text-xs text-muted-foreground mt-1">Pays within terms</p>
                                    </CardContent>
                                  </Card>

                                  <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                                    <CardContent className="pt-6 text-center">
                                      <Label className="text-muted-foreground text-sm text-center block">
                                        Paydex Score
                                      </Label>
                                      <p className="text-4xl font-bold text-green-600 dark:text-green-400 mt-2">80</p>
                                      <p className="text-xs text-muted-foreground mt-1">out of 100</p>
                                    </CardContent>
                                  </Card>

                                  <Card className="bg-muted/50">
                                    <CardContent className="pt-6 text-center">
                                      <Label className="text-muted-foreground text-sm text-center block">
                                        Payment Experiences
                                      </Label>
                                      <p className="text-4xl font-bold mt-2">10</p>
                                      <p className="text-xs text-muted-foreground mt-1">
                                        Last 24 months (~95 invoices)
                                      </p>
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
                                          <th className="text-center py-2 px-3">Total Value (€)</th>
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
                                          <td className="py-2 px-3"> &lt; 1,000</td>
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
                                        {selectedCustomerData?.name} pays within terms - This is 9 days better than the
                                        national average of 9 days beyond terms.
                                      </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                      <span>
                                        The Company pays to industry average when compared to similar businesses.
                                      </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                      <span>
                                        The D&B failure score of 73 predicts that the risk of failure within the next 12
                                        months is lower than average.
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </CardContent>
                            </Card>

                            {/* Current Principals */}
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-xl">Current Principals</CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-4">
                                <div className="border rounded-lg p-4">
                                  <div className="flex justify-between items-start mb-3">
                                    <div>
                                      <h4 className="font-semibold">A.L. Granneman Holding B.V.</h4>
                                      <p className="text-sm text-muted-foreground">Director, Appointed 30 Dec 2021</p>
                                    </div>
                                    <Badge variant="outline">Sole Signing Authority</Badge>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                      <Label className="text-muted-foreground">Address</Label>
                                      <p>Annie Romein-Verschoorhof 15, 3045 NW Rotterdam, NETHERLANDS</p>
                                    </div>
                                    <div>
                                      <Label className="text-muted-foreground">Registered Principal</Label>
                                      <p>A. L. Granneman</p>
                                    </div>
                                  </div>
                                </div>

                                <div className="border rounded-lg p-4">
                                  <div className="flex justify-between items-start mb-3">
                                    <div>
                                      <h4 className="font-semibold">A.J.L. Granneman Holding B.V.</h4>
                                      <p className="text-sm text-muted-foreground">Director, Appointed 30 Dec 2021</p>
                                    </div>
                                    <Badge variant="outline">Sole Signing Authority</Badge>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                      <Label className="text-muted-foreground">Address</Label>
                                      <p>Oostzeedijk 236, 3063 BP Rotterdam, NETHERLANDS</p>
                                    </div>
                                    <div>
                                      <Label className="text-muted-foreground">Registered Principal</Label>
                                      <p>A. J. L. Granneman</p>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>

                            {/* Parent Company & Liability */}
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-xl">Parent Company & Liability</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="space-y-4">
                                  <div>
                                    <Label className="text-muted-foreground">
                                      Immediate and Global Ultimate Parent
                                    </Label>
                                    <div className="mt-2 p-4 bg-muted rounded-lg">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <p className="font-semibold">Argolanda Beheer B.V.</p>
                                          <p className="text-sm text-muted-foreground">Rotterdam, NETHERLANDS</p>
                                        </div>
                                        <div className="space-y-2 text-sm">
                                          <div className="flex justify-between">
                                            <span className="text-muted-foreground">D-U-N-S® Number:</span>
                                            <span className="font-medium">41-011-5547</span>
                                          </div>
                                          <div className="flex justify-between">
                                            <span className="text-muted-foreground">Interest:</span>
                                            <span className="font-medium">100.0%</span>
                                          </div>
                                          <div className="flex justify-between">
                                            <span className="text-muted-foreground">D&B Rating:</span>
                                            <span className="font-medium">1A 1</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    There are currently 2 member(s) in the Global Family Tree.
                                  </p>
                                </div>
                              </CardContent>
                            </Card>

                            {/* Activity and Employees */}
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-xl">Activity and Employees</CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-6">
                                  <div>
                                    <Label className="text-muted-foreground">Number of Employees</Label>
                                    <p className="text-2xl font-semibold">13</p>
                                    <p className="text-xs text-muted-foreground">
                                      As registered with Chamber of Commerce
                                    </p>
                                  </div>
                                  <div>
                                    <Label className="text-muted-foreground">Economically Active</Label>
                                    <Badge className="mt-2 bg-green-500">Yes</Badge>
                                  </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                  <div>
                                    <Label className="text-muted-foreground">Imports</Label>
                                    <p className="text-sm mt-2">Yes</p>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                      <Badge variant="outline">Argentina</Badge>
                                      <Badge variant="outline">Brazil</Badge>
                                      <Badge variant="outline">Chile</Badge>
                                      <Badge variant="outline">Ecuador</Badge>
                                      <Badge variant="outline">Paraguay</Badge>
                                      <Badge variant="outline">Uruguay</Badge>
                                    </div>
                                  </div>
                                  <div>
                                    <Label className="text-muted-foreground">Exports</Label>
                                    <p className="text-sm mt-2">Yes</p>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                      <Badge variant="outline">Indonesia</Badge>
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <Label className="text-muted-foreground">Primary Activities</Label>
                                  <div className="mt-2 space-y-2">
                                    <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                                      <span className="text-sm">Feathers hides and pelts</span>
                                      <Badge variant="outline">SIC 51590300</Badge>
                                    </div>
                                    <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                                      <span className="text-sm">Chemicals industrial and heavy</span>
                                      <Badge variant="outline">SIC 51699904</Badge>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>

                            {/* Report Footer */}
                            <div className="text-xs text-muted-foreground p-4 bg-muted/30 rounded-lg">
                              <p className="mb-2">
                                Whilst D&B attempts to ensure that the information provided is accurate and complete, by
                                reason of the immense quantity of detailed matter dealt with in compiling the
                                information and the fact that some of the data are supplied from sources not controlled
                                by D&B which cannot always be verified, including information provided direct from the
                                subject of enquiry, as well as the possibility of negligence and mistake, D&B does not
                                guarantee the correctness or the effective delivery of the information and will not be
                                held responsible for any errors therein or omissions therefrom.
                              </p>
                              <p>© Dun & Bradstreet Inc., {new Date().getFullYear()}.</p>
                            </div>
                          </div>
                        )}

                        {basicInfoTab === "bureau" && (
                          <div className="space-y-6">
                            {/* Report Header */}
                            <div className="bg-muted border-l-4 border-primary p-6 rounded-lg">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h2 className="text-2xl font-bold">Business Information Report Premium</h2>
                                  <p className="text-sm text-muted-foreground">Credit Bureau Malaysia (CBM)</p>
                                  <p className="text-xs text-red-600 font-semibold mt-2">STRICTLY CONFIDENTIAL</p>
                                </div>
                                <div className="text-right text-sm space-y-1">
                                  <p>
                                    <span className="font-medium">Enquiry No:</span> 202505207533704
                                  </p>
                                  <p>
                                    <span className="font-medium">User ID:</span> PCP95370009
                                  </p>
                                  <p>
                                    <span className="font-medium">Report Date:</span>{" "}
                                    {new Date().toLocaleDateString("en-GB")}
                                  </p>
                                  <p>
                                    <span className="font-medium">Report Type:</span> BIR-P
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* SME Profile */}
                            <Card>
                              <CardHeader>
                                <CardTitle>SME Profile</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="grid grid-cols-2 gap-6">
                                  <div className="space-y-4">
                                    <div>
                                      <Label className="text-muted-foreground">Name</Label>
                                      <p className="font-semibold text-lg">
                                        {selectedCustomerData?.name || "Not selected"}
                                      </p>
                                    </div>
                                    <div>
                                      <Label className="text-muted-foreground">Registration No</Label>
                                      <p className="font-medium">343295T</p>
                                    </div>
                                    <div>
                                      <Label className="text-muted-foreground">New Registration No</Label>
                                      <p className="font-medium">199501014094</p>
                                    </div>
                                  </div>
                                  <div className="space-y-4">
                                    <div>
                                      <Label className="text-muted-foreground">Registration Date</Label>
                                      <p className="font-medium">13/05/1995</p>
                                    </div>
                                    <div>
                                      <Label className="text-muted-foreground">Type Of Constitution</Label>
                                      <p className="font-medium">COMPANY</p>
                                    </div>
                                    <div>
                                      <Label className="text-muted-foreground">Country Of Registration</Label>
                                      <p className="font-medium">MALAYSIA</p>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>

                            {/* Section 1: Corporation and Financial Information */}
                            <div className="space-y-6">
                              <h3 className="text-xl font-bold">SECTION 1: CORPORATION AND FINANCIAL INFORMATION</h3>

                              {/* Company Profile */}
                              <Card>
                                <CardHeader>
                                  <CardTitle>Company Profile</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                  <div className="grid grid-cols-2 gap-6">
                                    <div>
                                      <Label className="text-muted-foreground">Previous Name Change</Label>
                                      <p className="font-medium">PEDOMAN HARAPAN SDN. BHD.</p>
                                    </div>
                                    <div>
                                      <Label className="text-muted-foreground">Type</Label>
                                      <p className="font-medium">Limited By Shares - PRIVATE LIMITED</p>
                                    </div>
                                  </div>

                                  <div>
                                    <Label className="text-muted-foreground">Registered Address</Label>
                                    <p className="font-medium">
                                      LEVEL 7, MENARA MILENIUM
                                      <br />
                                      JALAN DAMANLELA
                                      <br />
                                      PUSAT BANDAR DAMANSARA
                                      <br />
                                      KUALA LUMPUR, WP KUALA LUMPUR
                                      <br />
                                      50490 MALAYSIA
                                    </p>
                                  </div>

                                  <div>
                                    <Label className="text-muted-foreground">Business Address</Label>
                                    <p className="font-medium">
                                      3 LORONG KILANG A, OFF JALAN KILANG
                                      <br />
                                      PETALING JAYA, SELANGOR
                                      <br />
                                      46050 MALAYSIA
                                    </p>
                                  </div>

                                  <div className="grid grid-cols-2 gap-6">
                                    <div>
                                      <Label className="text-muted-foreground">Status</Label>
                                      <Badge variant="default" className="bg-green-600">
                                        Existing
                                      </Badge>
                                    </div>
                                    <div>
                                      <Label className="text-muted-foreground">BIR Indicator</Label>
                                      <p className="font-medium">Nil</p>
                                    </div>
                                  </div>

                                  <div>
                                    <Label className="text-muted-foreground">Business Sector</Label>
                                    <p className="font-medium">Manufacture of other food products n.e.c.</p>
                                  </div>

                                  <div>
                                    <Label className="text-muted-foreground">Nature Of Business</Label>
                                    <p className="font-medium">
                                      MANUFACTURE AND SALE OF SOYA SAUCE, PROCESSED PEAS AND OTHER CANNED FOOD.
                                    </p>
                                  </div>

                                  <div>
                                    <Label className="text-muted-foreground">Last Updated</Label>
                                    <p className="font-medium">{new Date().toLocaleDateString("en-GB")}</p>
                                  </div>
                                </CardContent>
                              </Card>

                              {/* Directors and Officers */}
                              <Card>
                                <CardHeader>
                                  <CardTitle>Company Owner(s)/Partner(s)/Director(s)/Officer(s)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <div className="overflow-x-auto">
                                    <table className="w-full">
                                      <thead>
                                        <tr className="border-b">
                                          <th className="text-left py-3 px-4 font-semibold">Name</th>
                                          <th className="text-left py-3 px-4 font-semibold">Designation</th>
                                          <th className="text-left py-3 px-4 font-semibold">IC/Passport No</th>
                                          <th className="text-left py-3 px-4 font-semibold">Date Of Appointment</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr className="border-b hover:bg-muted/50">
                                          <td className="py-3 px-4">
                                            <p className="font-medium">VINAYAK SASITHARAN</p>
                                            <p className="text-sm text-muted-foreground">
                                              B-10-1, SERAI BUKIT BANDARAYA, JALAN MEDANG SERAI, BANGSAR
                                            </p>
                                          </td>
                                          <td className="py-3 px-4">Director</td>
                                          <td className="py-3 px-4">RA6284305</td>
                                          <td className="py-3 px-4">22/05/2020</td>
                                        </tr>
                                        <tr className="border-b hover:bg-muted/50">
                                          <td className="py-3 px-4">
                                            <p className="font-medium">CHENG CHIA PING</p>
                                            <p className="text-sm text-muted-foreground">
                                              B-13-4, SRI INTAN 2 CONDOMINIUM, NO. 2, JALAN TEROLAK 6
                                            </p>
                                          </td>
                                          <td className="py-3 px-4">Secretary</td>
                                          <td className="py-3 px-4">760816025385</td>
                                          <td className="py-3 px-4">04/04/2017</td>
                                        </tr>
                                        <tr className="border-b hover:bg-muted/50">
                                          <td className="py-3 px-4">
                                            <p className="font-medium">CHUA SIEW CHUAN</p>
                                            <p className="text-sm text-muted-foreground">
                                              3 JALAN SS 19/3C, SUBANG JAYA
                                            </p>
                                          </td>
                                          <td className="py-3 px-4">Secretary</td>
                                          <td className="py-3 px-4">580826055408</td>
                                          <td className="py-3 px-4">01/12/1998</td>
                                        </tr>
                                        <tr className="border-b hover:bg-muted/50">
                                          <td className="py-3 px-4">
                                            <p className="font-medium">LIM MOOI CHENG</p>
                                            <p className="text-sm text-muted-foreground">
                                              64 JALAN TR 2/1, TROPICANA GOLF & COUNTRY RESORT
                                            </p>
                                          </td>
                                          <td className="py-3 px-4">Director</td>
                                          <td className="py-3 px-4">660603075030</td>
                                          <td className="py-3 px-4">17/09/2018</td>
                                        </tr>
                                        <tr className="border-b hover:bg-muted/50">
                                          <td className="py-3 px-4">
                                            <p className="font-medium">ANDREW JAMES RIDLER</p>
                                            <p className="text-sm text-muted-foreground">
                                              1 GERTRUDE STREET, BALGOWLAH HEIGHTS, NSW 2093, AUSTRALIA
                                            </p>
                                          </td>
                                          <td className="py-3 px-4">Director</td>
                                          <td className="py-3 px-4">PE0409674</td>
                                          <td className="py-3 px-4">22/05/2020</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </CardContent>
                              </Card>

                              {/* Share Capital */}
                              <Card>
                                <CardHeader>
                                  <CardTitle>Share Capital</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                  <div>
                                    <h4 className="font-semibold mb-3">Authorized Capital</h4>
                                    <div className="overflow-x-auto">
                                      <table className="w-full">
                                        <thead>
                                          <tr className="border-b bg-muted/50">
                                            <th className="text-left py-2 px-4 font-semibold">Type</th>
                                            <th className="text-right py-2 px-4 font-semibold">Amount (RM)</th>
                                            <th className="text-right py-2 px-4 font-semibold">Divided Into</th>
                                            <th className="text-right py-2 px-4 font-semibold">Nominal Value (sen)</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr className="border-b">
                                            <td className="py-2 px-4">Ordinary</td>
                                            <td className="py-2 px-4 text-right">1,000,000.00</td>
                                            <td className="py-2 px-4 text-right">1,000,000</td>
                                            <td className="py-2 px-4 text-right">100.00</td>
                                          </tr>
                                          <tr className="border-b font-semibold bg-muted/30">
                                            <td className="py-2 px-4">Total Authorized</td>
                                            <td className="py-2 px-4 text-right">1,000,000.00</td>
                                            <td className="py-2 px-4 text-right">-</td>
                                            <td className="py-2 px-4 text-right">-</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>

                                  <div>
                                    <h4 className="font-semibold mb-3">Issued Capital</h4>
                                    <div className="overflow-x-auto">
                                      <table className="w-full">
                                        <thead>
                                          <tr className="border-b bg-muted/50">
                                            <th className="text-left py-2 px-4 font-semibold">Type</th>
                                            <th className="text-right py-2 px-4 font-semibold">Cash</th>
                                            <th className="text-right py-2 px-4 font-semibold">Otherwise Than Cash</th>
                                            <th className="text-right py-2 px-4 font-semibold">Nominal Value (sen)</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr className="border-b">
                                            <td className="py-2 px-4">Ordinary</td>
                                            <td className="py-2 px-4 text-right">500,000</td>
                                            <td className="py-2 px-4 text-right">-</td>
                                            <td className="py-2 px-4 text-right">100.00</td>
                                          </tr>
                                          <tr className="border-b font-semibold bg-muted/30">
                                            <td className="py-2 px-4">Total Issued (RM)</td>
                                            <td className="py-2 px-4 text-right">14,000,000.00</td>
                                            <td className="py-2 px-4 text-right">-</td>
                                            <td className="py-2 px-4 text-right">-</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>

                              {/* Shareholders */}
                              <Card>
                                <CardHeader>
                                  <CardTitle>Shareholder(s)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <div className="overflow-x-auto">
                                    <table className="w-full">
                                      <thead>
                                        <tr className="border-b bg-muted/50">
                                          <th className="text-left py-3 px-4 font-semibold">Name/Company Name</th>
                                          <th className="text-right py-3 px-4 font-semibold">Total No of Share</th>
                                          <th className="text-right py-3 px-4 font-semibold">Percentage (%)</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr className="border-b hover:bg-muted/50">
                                          <td className="py-3 px-4 font-medium">CAMPBELL FOODS HK LIMITED</td>
                                          <td className="py-3 px-4 text-right">500,100.00</td>
                                          <td className="py-3 px-4 text-right">100.00</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </CardContent>
                              </Card>

                              {/* Financial Statement */}
                              <Card>
                                <CardHeader>
                                  <CardTitle>Financial Statement Summary</CardTitle>
                                  <p className="text-sm text-muted-foreground mt-1">5-Year Financial Overview</p>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                  {/* Auditor Information */}
                                  <div className="bg-muted/50 p-4 rounded-lg">
                                    <Label className="text-muted-foreground">Auditor</Label>
                                    <p className="font-medium">KPMG PLT (LLP0010081-LCA)</p>
                                    <p className="text-sm text-muted-foreground mt-1">
                                      LEVEL 10, KPMG TOWER, 8 FIRST AVENUE, BANDAR UTAMA, 47800 PETALING JAYA
                                    </p>
                                  </div>

                                  {/* Balance Sheet */}
                                  <div>
                                    <h4 className="font-semibold mb-3">Balance Sheet Items (RM)</h4>
                                    <div className="overflow-x-auto">
                                      <table className="w-full text-sm">
                                        <thead>
                                          <tr className="border-b bg-muted/50">
                                            <th className="text-left py-2 px-3 font-semibold">Financial Year End</th>
                                            <th className="text-right py-2 px-3 font-semibold">31/07/2024</th>
                                            <th className="text-right py-2 px-3 font-semibold">31/07/2023</th>
                                            <th className="text-right py-2 px-3 font-semibold">31/07/2022</th>
                                            <th className="text-right py-2 px-3 font-semibold">31/07/2021</th>
                                            <th className="text-right py-2 px-3 font-semibold">31/07/2020</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr className="border-b hover:bg-muted/30">
                                            <td className="py-2 px-3 font-medium">Non-current assets</td>
                                            <td className="py-2 px-3 text-right">56,397,906</td>
                                            <td className="py-2 px-3 text-right">59,079,277</td>
                                            <td className="py-2 px-3 text-right">63,821,389</td>
                                            <td className="py-2 px-3 text-right">62,672,582</td>
                                            <td className="py-2 px-3 text-right">64,675,899</td>
                                          </tr>
                                          <tr className="border-b hover:bg-muted/30">
                                            <td className="py-2 px-3 font-medium">Current assets</td>
                                            <td className="py-2 px-3 text-right">58,939,458</td>
                                            <td className="py-2 px-3 text-right">87,834,400</td>
                                            <td className="py-2 px-3 text-right">78,785,343</td>
                                            <td className="py-2 px-3 text-right">73,137,212</td>
                                            <td className="py-2 px-3 text-right">62,434,693</td>
                                          </tr>
                                          <tr className="border-b bg-blue-50 dark:bg-blue-950/30">
                                            <td className="py-2 px-3 font-semibold">Total assets</td>
                                            <td className="py-2 px-3 text-right font-semibold">115,337,364</td>
                                            <td className="py-2 px-3 text-right font-semibold">146,913,677</td>
                                            <td className="py-2 px-3 text-right font-semibold">142,606,732</td>
                                            <td className="py-2 px-3 text-right font-semibold">135,809,794</td>
                                            <td className="py-2 px-3 text-right font-semibold">127,110,592</td>
                                          </tr>
                                          <tr className="border-b hover:bg-muted/30">
                                            <td className="py-2 px-3 font-medium">Non-current liabilities</td>
                                            <td className="py-2 px-3 text-right">973,357</td>
                                            <td className="py-2 px-3 text-right">40,778,659</td>
                                            <td className="py-2 px-3 text-right">40,516,398</td>
                                            <td className="py-2 px-3 text-right">40,553,820</td>
                                            <td className="py-2 px-3 text-right">40,531,455</td>
                                          </tr>
                                          <tr className="border-b hover:bg-muted/30">
                                            <td className="py-2 px-3 font-medium">Current liabilities</td>
                                            <td className="py-2 px-3 text-right">43,867,565</td>
                                            <td className="py-2 px-3 text-right">39,427,161</td>
                                            <td className="py-2 px-3 text-right">37,384,756</td>
                                            <td className="py-2 px-3 text-right">32,806,278</td>
                                            <td className="py-2 px-3 text-right">25,860,502</td>
                                          </tr>
                                          <tr className="border-b bg-orange-50 dark:bg-orange-950/30">
                                            <td className="py-2 px-3 font-semibold">Total liabilities</td>
                                            <td className="py-2 px-3 text-right font-semibold">44,840,922</td>
                                            <td className="py-2 px-3 text-right font-semibold">80,205,820</td>
                                            <td className="py-2 px-3 text-right font-semibold">77,901,154</td>
                                            <td className="py-2 px-3 text-right font-semibold">73,360,098</td>
                                            <td className="py-2 px-3 text-right font-semibold">66,391,957</td>
                                          </tr>
                                          <tr className="border-b hover:bg-muted/30">
                                            <td className="py-2 px-3 font-medium">Share capital</td>
                                            <td className="py-2 px-3 text-right">14,000,000</td>
                                            <td className="py-2 px-3 text-right">14,000,000</td>
                                            <td className="py-2 px-3 text-right">14,000,000</td>
                                            <td className="py-2 px-3 text-right">14,000,000</td>
                                            <td className="py-2 px-3 text-right">14,000,000</td>
                                          </tr>
                                          <tr className="border-b hover:bg-muted/30">
                                            <td className="py-2 px-3 font-medium">Retained earning</td>
                                            <td className="py-2 px-3 text-right">56,496,442</td>
                                            <td className="py-2 px-3 text-right">52,707,857</td>
                                            <td className="py-2 px-3 text-right">50,705,578</td>
                                            <td className="py-2 px-3 text-right">48,449,696</td>
                                            <td className="py-2 px-3 text-right">46,718,635</td>
                                          </tr>
                                          <tr className="border-b bg-green-50 dark:bg-green-950/30">
                                            <td className="py-2 px-3 font-semibold">Total Equity</td>
                                            <td className="py-2 px-3 text-right font-semibold">70,496,442</td>
                                            <td className="py-2 px-3 text-right font-semibold">66,707,857</td>
                                            <td className="py-2 px-3 text-right font-semibold">64,705,578</td>
                                            <td className="py-2 px-3 text-right font-semibold">62,449,696</td>
                                            <td className="py-2 px-3 text-right font-semibold">60,718,635</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>

                                  {/* Income Statement */}
                                  <div>
                                    <h4 className="font-semibold mb-3">Income Statement Items (RM)</h4>
                                    <div className="overflow-x-auto">
                                      <table className="w-full text-sm">
                                        <thead>
                                          <tr className="border-b bg-muted/50">
                                            <th className="text-left py-2 px-3 font-semibold">Financial Year End</th>
                                            <th className="text-right py-2 px-3 font-semibold">31/07/2024</th>
                                            <th className="text-right py-2 px-3 font-semibold">31/07/2023</th>
                                            <th className="text-right py-2 px-3 font-semibold">31/07/2022</th>
                                            <th className="text-right py-2 px-3 font-semibold">31/07/2021</th>
                                            <th className="text-right py-2 px-3 font-semibold">31/07/2020</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr className="border-b hover:bg-muted/30">
                                            <td className="py-2 px-3 font-medium">Revenue</td>
                                            <td className="py-2 px-3 text-right">277,267,691</td>
                                            <td className="py-2 px-3 text-right">231,015,099</td>
                                            <td className="py-2 px-3 text-right">239,207,544</td>
                                            <td className="py-2 px-3 text-right">225,369,535</td>
                                            <td className="py-2 px-3 text-right">207,687,705</td>
                                          </tr>
                                          <tr className="border-b hover:bg-muted/30">
                                            <td className="py-2 px-3 font-medium">Profit before tax</td>
                                            <td className="py-2 px-3 text-right">5,210,240</td>
                                            <td className="py-2 px-3 text-right">2,831,510</td>
                                            <td className="py-2 px-3 text-right">2,928,119</td>
                                            <td className="py-2 px-3 text-right">2,678,061</td>
                                            <td className="py-2 px-3 text-right">2,147,741</td>
                                          </tr>
                                          <tr className="border-b bg-green-50 dark:bg-green-950/30">
                                            <td className="py-2 px-3 font-semibold">Profit after tax</td>
                                            <td className="py-2 px-3 text-right font-semibold">3,788,585</td>
                                            <td className="py-2 px-3 text-right font-semibold">2,002,279</td>
                                            <td className="py-2 px-3 text-right font-semibold">2,255,882</td>
                                            <td className="py-2 px-3 text-right font-semibold">1,731,061</td>
                                            <td className="py-2 px-3 text-right font-semibold">1,389,741</td>
                                          </tr>
                                          <tr className="border-b hover:bg-muted/30">
                                            <td className="py-2 px-3 font-medium">Net dividend</td>
                                            <td className="py-2 px-3 text-right">0</td>
                                            <td className="py-2 px-3 text-right">0</td>
                                            <td className="py-2 px-3 text-right">0</td>
                                            <td className="py-2 px-3 text-right">0</td>
                                            <td className="py-2 px-3 text-right">0</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>

                              {/* Non-Bank Credit */}
                              <Card>
                                <CardHeader>
                                  <CardTitle>Non-Bank Credit Information</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                                    <Label className="text-muted-foreground">
                                      Non-Bank Credit Information Availability (Last 12 Months)
                                    </Label>
                                    <Badge variant="secondary">N</Badge>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>

                            {/* Section 2: Enquiry Details */}
                            <div className="space-y-6">
                              <h3 className="text-xl font-bold">SECTION 2: ENQUIRY DETAILS</h3>

                              <Card>
                                <CardHeader>
                                  <CardTitle>Current Enquiry</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <Label className="text-muted-foreground">Enquiry Number</Label>
                                      <p className="font-medium">202505207533704</p>
                                    </div>
                                    <div>
                                      <Label className="text-muted-foreground">Report Enquiry Type</Label>
                                      <p className="font-medium">BIR-P</p>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>

                              <Card>
                                <CardHeader>
                                  <CardTitle>Previous Enquiries (Past 12 Months)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <div className="text-center py-8 text-muted-foreground">
                                    <p>No previous enquiries found</p>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>

                            {/* Disclaimer */}
                            <div className="bg-muted/30 border border-border p-6 rounded-lg text-xs text-muted-foreground space-y-2">
                              <p className="font-semibold text-foreground">DISCLAIMER:</p>
                              <p>
                                This report may not be reproduced in whole or in part in any form or manner whatsoever.
                                This report is provided to the client in strict confidence for use by the client as one
                                factor in connection with credit and other business decisions. The report contains
                                information compiled from data sources which Credit Bureau Malaysia does not control and
                                which may not have been verified unless otherwise stated in this report.
                              </p>
                              <p>
                                Credit Bureau Malaysia therefore cannot accept responsibility for the accuracy,
                                completeness or timeliness of the contents of the report. Credit Bureau Malaysia
                                disclaims all liability for any loss or damage arising out of or in manner related to
                                the contents of this report.
                              </p>
                              <p className="text-right mt-4">© Credit Bureau Malaysia, {new Date().getFullYear()}</p>
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
                            <SelectItem value="refinery-d">Refinery D - Kuantan</SelectItem>
                            <SelectItem value="refinery-c">Refinery C - Penang</SelectItem>
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
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeStep === "preview" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Preview and Submit</h2>
                    <p className="text-muted-foreground">
                      Review all information before submitting your credit upgrade request
                    </p>
                  </div>

                  {/* Requester & Customer Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">Requester Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex justify-between items-start">
                          <span className="text-sm text-muted-foreground">Requested By</span>
                          <span className="text-sm font-medium text-right">{formData.requestedBy || "—"}</span>
                        </div>
                        <div className="flex justify-between items-start">
                          <span className="text-sm text-muted-foreground">Evaluation Date</span>
                          <span className="text-sm font-medium text-right">{formData.evaluationDate || "—"}</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">Customer Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex justify-between items-start">
                          <span className="text-sm text-muted-foreground">Customer</span>
                          <span className="text-sm font-medium text-right">{selectedCustomerData?.name || "—"}</span>
                        </div>
                        <div className="flex justify-between items-start">
                          <span className="text-sm text-muted-foreground">Country</span>
                          <span className="text-sm font-medium text-right">{selectedCustomerData?.country || "—"}</span>
                        </div>
                        <div className="flex justify-between items-start">
                          <span className="text-sm text-muted-foreground">Current Limit</span>
                          <span className="text-sm font-medium text-right">
                            RM {Number(selectedCustomerData?.currentCreditLimit || 0).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between items-start">
                          <span className="text-sm text-muted-foreground">Current Payment Terms</span>
                          <span className="text-sm font-medium text-right">
                            {selectedCustomerData?.currentPaymentTerms || "—"}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Credit Details */}
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Credit Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex justify-between items-start">
                          <span className="text-sm text-muted-foreground">Requested Credit Limit</span>
                          <span className="text-sm font-medium">
                            RM {Number(formData.requestedCreditLimit || 0).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between items-start">
                          <span className="text-sm text-muted-foreground">Requested Payment Terms</span>
                          <span className="text-sm font-medium">{formData.requestedPaymentTerms || "—"}</span>
                        </div>
                      </div>
                      {formData.justificationForUpgrade && (
                        <div className="pt-2 border-t">
                          <p className="text-sm text-muted-foreground mb-1">Justification</p>
                          <p className="text-sm">{formData.justificationForUpgrade}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Order Information */}
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">Order Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Product Information */}
                      <div>
                        <h4 className="text-sm font-semibold mb-3">Product Information</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-muted-foreground">Trading Currency</span>
                            <span className="text-sm font-medium">
                              {formData.tradingCurrency?.toUpperCase() || "—"}
                            </span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-muted-foreground">Refinery</span>
                            <span className="text-sm font-medium">{formData.refinery || "—"}</span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-muted-foreground">Product Name</span>
                            <span className="text-sm font-medium">{formData.productName || "—"}</span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-muted-foreground">Product Packing</span>
                            <span className="text-sm font-medium">{formData.productPacking || "—"}</span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-muted-foreground">Volume (MT)</span>
                            <span className="text-sm font-medium">{formData.volumeMT || "—"}</span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-muted-foreground">Spot Month</span>
                            <span className="text-sm font-medium">{formData.spotMonth || "—"}</span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-muted-foreground">Forward Month</span>
                            <span className="text-sm font-medium">{formData.forwardMonth || "—"}</span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-muted-foreground">Volume Capped</span>
                            <span className="text-sm font-medium">{formData.volumeCapped || "—"}</span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-muted-foreground">Incoterm</span>
                            <span className="text-sm font-medium">{formData.incoterm?.toUpperCase() || "—"}</span>
                          </div>
                        </div>
                        {(formData.productRequirement || formData.productApplication) && (
                          <div className="mt-3 pt-3 border-t space-y-2">
                            {formData.productRequirement && (
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">Product Requirement</p>
                                <p className="text-sm">{formData.productRequirement}</p>
                              </div>
                            )}
                            {formData.productApplication && (
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">Product Application</p>
                                <p className="text-sm">{formData.productApplication}</p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Shipping Information */}
                      <div className="pt-4 border-t">
                        <h4 className="text-sm font-semibold mb-3">Shipping Information</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-muted-foreground">Destination</span>
                            <span className="text-sm font-medium">{formData.destination || "—"}</span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-muted-foreground">Supplier's Country</span>
                            <span className="text-sm font-medium">{formData.supplierCountry || "—"}</span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-muted-foreground">Port of Destination</span>
                            <span className="text-sm font-medium">{formData.portOfDestination || "—"}</span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-muted-foreground">Ship to Party Name</span>
                            <span className="text-sm font-medium">{formData.shipToPartyName || "—"}</span>
                          </div>
                        </div>
                      </div>

                      {/* Product Costing */}
                      <div className="pt-4 border-t">
                        <h4 className="text-sm font-semibold mb-3">Product Costing</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-muted-foreground">Raw Material Cost</span>
                            <span className="text-sm font-medium">
                              {formData.rawMaterialCost ? `MYR ${formData.rawMaterialCost}` : "—"}
                            </span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-muted-foreground">Finance Cost %</span>
                            <span className="text-sm font-medium">
                              {formData.financePercentage ? `${formData.financePercentage}%` : "—"}
                            </span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-muted-foreground">Processing & Others</span>
                            <span className="text-sm font-medium">
                              {formData.processingCost ? `MYR ${formData.processingCost}` : "—"}
                            </span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-muted-foreground">Interest Rate</span>
                            <span className="text-sm font-medium">
                              {formData.interestRate ? `${formData.interestRate}%` : "—"}
                            </span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-muted-foreground">Margin</span>
                            <span className="text-sm font-medium">
                              {formData.margin ? `MYR ${formData.margin}` : "—"}
                            </span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-muted-foreground">Credit Limit Calculation</span>
                            <span className="text-sm font-medium">
                              {formData.creditLimitCalc ? `MYR ${formData.creditLimitCalc}` : "—"}
                            </span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-muted-foreground">Financing Cost</span>
                            <span className="text-sm font-medium">
                              {formData.financingCost ? `MYR ${formData.financingCost}` : "—"}
                            </span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-muted-foreground">Proposed Credit Limit</span>
                            <span className="text-sm font-medium">
                              {formData.proposedCreditLimit ? `MYR ${formData.proposedCreditLimit}` : "—"}
                            </span>
                          </div>
                          <div className="flex justify-between items-start">
                            <span className="text-sm text-muted-foreground">Selling Cost</span>
                            <span className="text-sm font-medium">
                              {formData.sellingCost ? `MYR ${formData.sellingCost}` : "—"}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Additional Notes */}
                      {formData.additionalNotes && (
                        <div className="pt-4 border-t">
                          <h4 className="text-sm font-semibold mb-2">Additional Notes</h4>
                          <p className="text-sm text-muted-foreground">{formData.additionalNotes}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Credit Assessment Matrix section back to preview */}
                  <Card className="p-6">
                    <CardHeader>
                      <CardTitle>Credit Assessment Matrix</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        Comprehensive credit evaluation based on multiple risk factors
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Customer Details Row */}
                      <div className="grid grid-cols-4 gap-4 p-4 bg-muted/30 rounded-lg">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Customer Name</p>
                          <p className="font-medium">{selectedCustomerData?.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Evaluation Date</p>
                          <p className="font-medium">{formData.evaluationDate}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Current Credit Limit</p>
                          <p className="font-medium">
                            {Number(selectedCustomerData?.currentCreditLimit).toLocaleString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Payment Terms</p>
                          <p className="font-medium">{selectedCustomerData?.paymentTerms}</p>
                        </div>
                      </div>

                      {/* Credit Assessment Summary */}
                      <div className="border-2 border-primary/20 rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4">Credit Assessment Summary</h3>
                        <div className="grid grid-cols-5 gap-4">
                          <div className="bg-blue-50 p-4 rounded-lg text-center">
                            <p className="text-xs text-muted-foreground mb-2">Section A: Strategic Importance</p>
                            <p className="text-3xl font-bold text-blue-600">
                              {formData.strategicImportance === "high"
                                ? "15"
                                : formData.strategicImportance === "medium"
                                  ? "10"
                                  : "5"}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">/ 20</p>
                          </div>
                          <div className="bg-green-50 p-4 rounded-lg text-center">
                            <p className="text-xs text-muted-foreground mb-2">Section B: Financial Strength</p>
                            <p className="text-3xl font-bold text-green-600">140</p>
                            <p className="text-xs text-muted-foreground mt-1">/ 200</p>
                          </div>
                          <div className="bg-purple-50 p-4 rounded-lg text-center">
                            <p className="text-xs text-muted-foreground mb-2">Section C: Digital Footprint</p>
                            <p className="text-3xl font-bold text-purple-600">
                              {formData.digitalFootprint === "strong"
                                ? "7"
                                : formData.digitalFootprint === "moderate"
                                  ? "5"
                                  : "3"}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">/ 10</p>
                          </div>
                          <div className="bg-orange-50 p-4 rounded-lg text-center">
                            <p className="text-xs text-muted-foreground mb-2">Section D: Overall Risk</p>
                            <p className="text-3xl font-bold text-orange-600">55</p>
                            <p className="text-xs text-muted-foreground mt-1">/ 80</p>
                          </div>
                          <div className="bg-blue-500 p-4 rounded-lg text-center text-white">
                            <p className="text-xs mb-2">Total Score</p>
                            <p className="text-3xl font-bold">217</p>
                            <p className="text-xs mt-1">/ 310</p>
                          </div>
                        </div>
                      </div>

                      {/* Credit Matrix - Recommended Tier */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Credit Matrix - Recommended Tier</h3>
                        <div className="grid grid-cols-4 gap-4">
                          <div className="border-2 border-green-500 bg-green-50 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">Tier 1</h4>
                            <p className="text-sm font-medium mb-2">Score: ≥120</p>
                            <ul className="text-xs space-y-1 text-muted-foreground">
                              <li>1-5% unsecured, up to 10% secured</li>
                              <li>5-10% of gross profit</li>
                              <li>5-15% of net worth</li>
                            </ul>
                          </div>
                          <div className="border p-4 rounded-lg bg-muted/20">
                            <h4 className="font-semibold mb-2">Tier 2</h4>
                            <p className="text-sm font-medium mb-2">Score: ≥75</p>
                            <ul className="text-xs space-y-1 text-muted-foreground">
                              <li>1-5% unsecured, up to 10% secured</li>
                              <li>5-10% of gross profit</li>
                              <li>5-15% of net worth</li>
                            </ul>
                          </div>
                          <div className="border p-4 rounded-lg bg-muted/20">
                            <h4 className="font-semibold mb-2">Tier 3</h4>
                            <p className="text-sm font-medium mb-2">Score: 50-74</p>
                            <ul className="text-xs space-y-1 text-muted-foreground">
                              <li>1-3% unsecured, up to 5% secured</li>
                              <li>3-5% of gross profit</li>
                              <li>5-10% of net worth</li>
                            </ul>
                          </div>
                          <div className="border p-4 rounded-lg bg-muted/20">
                            <h4 className="font-semibold mb-2">Tier 4</h4>
                            <p className="text-sm font-medium mb-2">Score: &lt;50</p>
                            <ul className="text-xs space-y-1 text-muted-foreground">
                              <li>10% of net or 0% until track record</li>
                              <li>3-5% of gross profit</li>
                              <li>Advance ≥15 days with collateral</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Section Breakdowns */}
                      <div className="space-y-4">
                        {/* Section A */}
                        <div className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold">Section A: Strategic Importance</h4>
                            <span className="text-sm text-muted-foreground">Weight: 20%</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">1. Strategic Importance</span>
                              <span className="text-sm font-medium">
                                {formData.strategicImportance === "high"
                                  ? "High"
                                  : formData.strategicImportance === "medium"
                                    ? "Medium"
                                    : "Low"}
                              </span>
                            </div>
                            <div className="flex items-center justify-between pt-2 border-t">
                              <span className="font-medium">Section A Total</span>
                              <span className="text-lg font-bold text-blue-600">
                                {formData.strategicImportance === "high"
                                  ? "15"
                                  : formData.strategicImportance === "medium"
                                    ? "10"
                                    : "5"}{" "}
                                / 20
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Section B */}
                        <div className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold">Section B: Financial Strength</h4>
                            <span className="text-sm text-muted-foreground">Weight: 30%</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">1. Independent Rating (IR)</span>
                              <span className="text-sm font-medium">{formData.independentRating || "BBB+"}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">2. External Ratings</span>
                              <span className="text-sm font-medium">{formData.externalRatings || "Good"}</span>
                            </div>
                            <div className="flex items-center justify-between pt-2 border-t">
                              <span className="font-medium">Section B Total</span>
                              <span className="text-lg font-bold text-green-600">140 / 200</span>
                            </div>
                          </div>
                        </div>

                        {/* Section C */}
                        <div className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold">Section C: Digital Footprint</h4>
                            <span className="text-sm text-muted-foreground">Weight: 10%</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">3. Digital Footprint & Certification</span>
                              <span className="text-sm font-medium">
                                {formData.digitalFootprint === "strong"
                                  ? "Strong online presence with certifications"
                                  : formData.digitalFootprint === "moderate"
                                    ? "Moderate online presence"
                                    : "Limited online presence"}
                              </span>
                            </div>
                            <div className="flex items-center justify-between pt-2 border-t">
                              <span className="font-medium">Section C Total</span>
                              <span className="text-lg font-bold text-purple-600">
                                {formData.digitalFootprint === "strong"
                                  ? "7"
                                  : formData.digitalFootprint === "moderate"
                                    ? "5"
                                    : "3"}{" "}
                                / 10
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Section D */}
                        <div className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold">Section D: Overall Risk</h4>
                            <span className="text-sm text-muted-foreground">Weight: 40%</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">4. Country Risk</span>
                              <span className="text-sm font-medium">{formData.countryRisk || "Low"}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">5. Industry Risk</span>
                              <span className="text-sm font-medium">{formData.industryRisk || "Low"}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">6. Management Quality</span>
                              <span className="text-sm font-medium">{formData.managementQuality || "Good"}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">7. Payment History</span>
                              <span className="text-sm font-medium">{formData.paymentHistory || "Always"}</span>
                            </div>
                            <div className="flex items-center justify-between pt-2 border-t">
                              <span className="font-medium">Section D Total</span>
                              <span className="text-lg font-bold text-orange-600">55 / 80</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex justify-end gap-4">
                    <Button variant="outline" onClick={() => setActiveStep("basic")}>
                      Edit Basic Info
                    </Button>
                    <Button variant="outline" onClick={() => setActiveStep("order")}>
                      Edit Order Info
                    </Button>
                    <Button variant="outline" onClick={() => setActiveStep("credit")}>
                      Edit Credit Details
                    </Button>
                    <Button onClick={() => alert("Request Submitted!")}>Submit for Approval</Button>
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* Right Column - Next Steps & Actions */}
          {/* Removed the Right Column - Next Steps & Actions section */}
        </div>
      </div>
    </div>
  )
}
