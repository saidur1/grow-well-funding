"use client";
import { useToast } from "@/hooks/use-toast";
import { contactSchema, ContactSchemaType } from "@/schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Separator } from "../ui/separator";

const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      businessName: "",
      loanType: "",
      requestedLoan: "",
    },
  });

  const handleForm = (data: ContactSchemaType) => {
    toast({
      title: "Your application is submitted successfully",
    });
    form.reset(); // This will now work properly
  };

  return (
    <div className="bg-white shadow-lg">
      <h1 className="px-8 py-4 text-[26px] font-medium font-nunito">
        Website Form
      </h1>
      <Separator />
      <div className="py-4 px-4 md:px-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleForm)}
            className="grid grid-cols-2 gap-4"
          >
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>First Name *</FormLabel>
                  <Input {...field} /> {/* Spread the entire field object */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>Last Name *</FormLabel>
                  <Input {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>Phone*</FormLabel>
                  <Input {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>Email*</FormLabel>
                  <Input {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="businessName"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Business Name*</FormLabel>
                  <Input {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="loanType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Loan Type*</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a loan type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Equipment Financing">
                        Equipment Financing
                      </SelectItem>
                      <SelectItem value="Business Line Of Credit">
                        Business Line Of Credit
                      </SelectItem>
                      <SelectItem value="Business Term loan">
                        Business Term loan
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="requestedLoan"
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>Requested Loan*</FormLabel>
                  <Input type="number" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full md:w-fit mt-4">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
