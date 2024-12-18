import { ContactSchemaType } from "@/schema/schema";
import { Resend } from "resend";
import LoanApplicationEmail from "../../../react-email-starter/emails/loan-application";

const resend = new Resend(process.env.RESEND_SECRET_KEY!);

export async function sendLoanApplicationFormEmail({
  firstName,
  lastName,
  email,
  businessName,
  loanType,
  phone,
  requestedLoan,
}: ContactSchemaType) {
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "monirhrabby.mayesa@gmail.com",
    subject: "TEST",
    react: (
      <LoanApplicationEmail
        firstName={firstName}
        lastName={lastName}
        email={email}
        businessName={businessName}
        loanType={loanType}
        phone={phone}
        requestedLoan={requestedLoan}
      />
    ),
  });

  if (error) {
    console.log(error.message);
    return;
  }

  return data;
}
