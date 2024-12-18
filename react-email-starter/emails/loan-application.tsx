import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface Props {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  businessName: string;
  loanType: string;
  requestedLoan: string;
}

export const LoanApplicationEmail = ({
  firstName,
  lastName,
  phone,
  email,
  businessName,
  loanType,
  requestedLoan,
}: Props) => (
  <Html>
    <Head />
    <Preview>Your Loan Application Details</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Hr style={hr} />
          <Text style={header}>Loan Application Summary</Text>
          <Text style={paragraph}>
            Dear {firstName} {lastName},
          </Text>
          <Text style={paragraph}>
            Thank you for submitting your loan application. Below are the
            details of your application:
          </Text>
          <Text style={details}>
            <strong>Full Name:</strong> {firstName} {lastName}
          </Text>
          <Text style={details}>
            <strong>Phone:</strong> {phone}
          </Text>
          <Text style={details}>
            <strong>Email:</strong> {email}
          </Text>
          <Text style={details}>
            <strong>Business Name:</strong> {businessName}
          </Text>
          <Text style={details}>
            <strong>Loan Type:</strong> {loanType}
          </Text>
          <Text style={details}>
            <strong>Requested Loan Amount:</strong> ${requestedLoan}
          </Text>
          <Hr style={hr} />
          <Text style={paragraph}>
            Our team is reviewing your application and will contact you shortly
            if any additional information is required.
          </Text>
          <Text style={paragraph}>
            In the meantime, feel free to reach out to our support team if you
            have any questions or need further assistance.
          </Text>
          <Button style={button} href="https://yourcompany.com/contact">
            Contact Support
          </Button>
          <Hr style={hr} />
          <Text style={footer}>Thank you for choosing our services.</Text>
          <Text style={footer}>— The Company Team</Text>
          <Hr style={hr} />
          <Text style={footer}>
            Company, 123 Business Blvd, City, State ZIP
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default LoanApplicationEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const header = {
  color: "#32325d",
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "16px",
};

const paragraph = {
  color: "#525f7f",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const details = {
  color: "#525f7f",
  fontSize: "16px",
  lineHeight: "24px",
  marginBottom: "8px",
};

const button = {
  backgroundColor: "#556cd6",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "10px",
  marginTop: "16px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
