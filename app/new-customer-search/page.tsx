"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, Building2, FileText, Globe, CreditCard, User, Hash, MapPin, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NewCustomerSearchPage() {
  const router = useRouter()
  const [companyName, setCompanyName] = useState("")
  const [registrationNumber, setRegistrationNumber] = useState("")
  const [country, setCountry] = useState("")
  const [bankName, setBankName] = useState("")
  const [accountHolderName, setAccountHolderName] = useState("")
  const [accountNumber, setAccountNumber] = useState("")
  const [streetAddress, setStreetAddress] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [postcode, setPostcode] = useState("")
  const [bankCountry, setBankCountry] = useState("")
  const [swiftCode, setSwiftCode] = useState("")
  const [searchPerformed, setSearchPerformed] = useState(false)
  const [activeReportTab, setActiveReportTab] = useState("dunn")

  const handleSearch = () => {
    router.push("/prospect-search-result")
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="w-full max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col items-center space-y-3">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-2xl bg-blue-600 flex items-center justify-center flex-shrink-0">
              <Search className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Prospect Background Search</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl text-center">
            Comprehensive background verification and risk assessment for prospective business partners
          </p>
        </div>

        {/* Information Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">Search Information</h2>
          <p className="text-sm text-blue-700 leading-relaxed">
            Our comprehensive search will verify company registration, check sanctions lists, assess financial
            stability, validate banking information, and provide detailed risk analysis reports.
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-card border rounded-lg p-8 space-y-6">
          {/* Company Name */}
          <div className="space-y-2">
            <Label htmlFor="company-name" className="flex items-center gap-2 text-base font-medium">
              <Building2 className="h-5 w-5" />
              Company Name
            </Label>
            <Input
              id="company-name"
              placeholder="Enter company name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="h-12"
            />
          </div>

          {/* Company Registration Number */}
          <div className="space-y-2">
            <Label htmlFor="registration-number" className="flex items-center gap-2 text-base font-medium">
              <FileText className="h-5 w-5" />
              Company Registration Number
            </Label>
            <Input
              id="registration-number"
              placeholder="Enter registration number"
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
              className="h-12"
            />
          </div>

          {/* Country of Origin */}
          <div className="space-y-2">
            <Label htmlFor="country" className="flex items-center gap-2 text-base font-medium">
              <Globe className="h-5 w-5" />
              Country of Origin
            </Label>
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger id="country" className="h-12 w-full">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="singapore">Singapore</SelectItem>
                <SelectItem value="malaysia">Malaysia</SelectItem>
                <SelectItem value="thailand">Thailand</SelectItem>
                <SelectItem value="indonesia">Indonesia</SelectItem>
                <SelectItem value="vietnam">Vietnam</SelectItem>
                <SelectItem value="philippines">Philippines</SelectItem>
                <SelectItem value="china">China</SelectItem>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="japan">Japan</SelectItem>
                <SelectItem value="south-korea">South Korea</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="pt-6 border-t space-y-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <CreditCard className="h-5 w-5 text-blue-600" />
              Bank Details
            </h3>

            {/* Bank Name */}
            <div className="space-y-2">
              <Label htmlFor="bank-name" className="flex items-center gap-2 text-base font-medium">
                <Building2 className="h-5 w-5" />
                Bank Name
              </Label>
              <Input
                id="bank-name"
                placeholder="Enter bank name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                className="h-12"
              />
            </div>

            {/* Account Holder Name */}
            <div className="space-y-2">
              <Label htmlFor="account-holder" className="flex items-center gap-2 text-base font-medium">
                <User className="h-5 w-5" />
                Account Holder Name
              </Label>
              <Input
                id="account-holder"
                placeholder="Enter account holder name"
                value={accountHolderName}
                onChange={(e) => setAccountHolderName(e.target.value)}
                className="h-12"
              />
            </div>

            {/* Account Number */}
            <div className="space-y-2">
              <Label htmlFor="account-number" className="flex items-center gap-2 text-base font-medium">
                <Hash className="h-5 w-5" />
                Account Number
              </Label>
              <Input
                id="account-number"
                placeholder="Enter account number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="h-12"
              />
            </div>

            {/* Bank Branch Address */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-base font-medium">
                <MapPin className="h-5 w-5" />
                Bank Branch Address
              </Label>
              <div className="space-y-3">
                <Input
                  id="street-address"
                  placeholder="Street Address"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  className="h-12"
                />
                <div className="grid grid-cols-3 gap-3">
                  <Input
                    id="state"
                    placeholder="State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="h-12"
                  />
                  <Input
                    id="city"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="h-12"
                  />
                  <Input
                    id="postcode"
                    placeholder="Postcode"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className="h-12"
                  />
                </div>
                <Select value={bankCountry} onValueChange={setBankCountry}>
                  <SelectTrigger className="h-12 w-full">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="singapore">Singapore</SelectItem>
                    <SelectItem value="malaysia">Malaysia</SelectItem>
                    <SelectItem value="thailand">Thailand</SelectItem>
                    <SelectItem value="indonesia">Indonesia</SelectItem>
                    <SelectItem value="vietnam">Vietnam</SelectItem>
                    <SelectItem value="philippines">Philippines</SelectItem>
                    <SelectItem value="china">China</SelectItem>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="japan">Japan</SelectItem>
                    <SelectItem value="south-korea">South Korea</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Swift Code */}
            <div className="space-y-2">
              <Label htmlFor="swift-code" className="flex items-center gap-2 text-base font-medium">
                <Code className="h-5 w-5" />
                Swift Code
              </Label>
              <Input
                id="swift-code"
                placeholder="Enter SWIFT code"
                value={swiftCode}
                onChange={(e) => setSwiftCode(e.target.value)}
                className="h-12"
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="pt-4">
            <Button className="w-full h-12 text-base" size="lg" onClick={handleSearch}>
              <Search className="h-5 w-5 mr-2" />
              Search Company
            </Button>
          </div>
        </div>

        {/* Report Sections */}
        {searchPerformed && (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                Explore detailed customer information across different sections
              </p>
            </div>

            <Tabs value={activeReportTab} onValueChange={setActiveReportTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="dunn">Dunn and Bradstreet</TabsTrigger>
                <TabsTrigger value="bureau">Credit Bureau</TabsTrigger>
              </TabsList>

              <TabsContent value="dunn" className="space-y-6 mt-6">
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
                      <h3 className="text-2xl font-bold text-primary mb-4">Global Foods Ltd</h3>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <Label className="text-muted-foreground">Main Trading Address</Label>
                            <p className="font-medium">
                              Level 7, Menara Milenium
                              <br />
                              Jalan Damanlela
                              <br />
                              50490 Kuala Lumpur
                              <br />
                              MALAYSIA
                            </p>
                          </div>
                          <div>
                            <Label className="text-muted-foreground">Telephone Number</Label>
                            <p className="font-medium">+60-3-2161-8888</p>
                          </div>
                          <div>
                            <Label className="text-muted-foreground">Web Address</Label>
                            <p className="font-medium text-primary">www.globalfoods.my</p>
                          </div>
                          <div>
                            <Label className="text-muted-foreground">Email</Label>
                            <p className="font-medium">procurement@globalfoods.my</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <Label className="text-muted-foreground">D-U-N-S® Number</Label>
                            <p className="font-medium">40-217-3306</p>
                          </div>
                          <div>
                            <Label className="text-muted-foreground">VAT Number</Label>
                            <p className="font-medium">MY 001836936B01</p>
                          </div>
                          <div>
                            <Label className="text-muted-foreground">Line of Business (SIC)</Label>
                            <p className="font-medium">Food products manufacturing (5149)</p>
                          </div>
                          <div>
                            <Label className="text-muted-foreground">Date Started</Label>
                            <p className="font-medium">15 Jan 1995</p>
                          </div>
                          <div>
                            <Label className="text-muted-foreground">Legal Form</Label>
                            <p className="font-medium">Private Limited Company</p>
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
                          <span>
                            Trend in Tangible Net Worth is flat or increasing compared to the previous accounts.
                          </span>
                        </p>
                        <p className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>This company has a parent or liability taker with a Group Net Worth of MYR 70.5M</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>
                            On average this company pays its accounts within terms and shows similar or better payment
                            behaviour than 12 months ago.
                          </span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="bureau" className="space-y-6 mt-6">
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
                        <span className="font-medium">Report Date:</span> {new Date().toLocaleDateString("en-GB")}
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
                          <p className="font-semibold text-lg">Global Foods Ltd</p>
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
                          MANUFACTURE AND SALE OF FOOD PRODUCTS, PROCESSED GOODS AND OTHER CANNED FOOD.
                        </p>
                      </div>

                      <div>
                        <Label className="text-muted-foreground">Last Updated</Label>
                        <p className="font-medium">{new Date().toLocaleDateString("en-GB")}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  )
}
