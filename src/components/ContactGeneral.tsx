import React, { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import SheetBackButton from "./shared/SheetBackButton";
import Button1 from "./ui/button-1";
import emailjs from "emailjs-com";
import { FloatingInput } from "./ui/floating-input";
import { Loader, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import TitleBanner from "@/components/shared/TitleBanner";

interface ContactGeneralProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactGeneral = ({ isOpen, onClose }: ContactGeneralProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const emailParams = {
      from_name: formData.get("from_name") as string,
      from_email: formData.get("from_email") as string,
      company_name: formData.get("company_name") as string,
      job_title: formData.get("job_title") as string,
      select_content: formData.get("select_content") as string,
      message: formData.get("message") as string,
    };

    console.log("Sending email with params:", emailParams);

    emailjs
      .send(
        "service_41y0plf",
        "template_utkz4px",
        emailParams,
        "N8xBUF-xOQnWEdxCb"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          toast({
            title: "Message Sent Successfully",
            description:
              "Thank you for contacting us. We'll get back to you soon!",
            className:
              "fixed top-6 left-1/2 transform -translate-x-1/2 bg-green-50 border-green-200 z-[10000] w-[65vw] shadow-lg",
            action: <CheckCircle2 className="h-5 w-5 text-green-500" />,
          });
          form.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.error("Error sending email:", error);
          toast({
            title: "Error Sending Message",
            description: "Please try again later.",
            variant: "destructive",
            className:
              "fixed top-6 left-1/2 transform -translate-x-1/2 z-[10000] w-[65vw] shadow-lg",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="!w-full sm:!w-[75vw] 2xl:!w-[66vw] sm:!max-w-[75vw] 2xl:!max-w-[66vw] overflow-y-auto bg-[#F7F7F7] border-l shadow-xl p-0 z-[9999]"
      >
        <SheetBackButton onBack={onClose} />

        <TitleBanner title="Contact Us" />

        <div className="h-full w-full flex flex-col">
          <div className="px-8 lg:px-24 mb-12">
            <form
              onSubmit={handleSubmit}
              className="space-y-8 w-full mx-auto p-8 lg:p-20 rounded-lg shadow-sm"
              style={{
                background:
                  "radial-gradient(circle at 50% 100%, #FFFFFF 0%, #F7F7F5 40%, #E1ECEB 100%)",
              }}
            >
              <div>
                <FloatingInput name="from_name" label="Your Name" required />
              </div>

              <div>
                <FloatingInput
                  name="from_email"
                  type="email"
                  label="Email Address"
                  required
                />
              </div>

              <div>
                <FloatingInput
                  name="company_name"
                  label="Company Name"
                  required
                />
              </div>

              <div>
                <FloatingInput name="job_title" label="Job Title" required />
              </div>

              <div className="relative">
                <Select name="select_content" required>
                  <SelectTrigger className="w-full bg-white px-6 py-3 text-base h-auto border border-gray-300 rounded-md">
                    <SelectValue placeholder="Select Subject" />
                  </SelectTrigger>
                  <SelectContent className="bg-white z-[9999] min-w-[200px]">
                    <SelectItem value="general">General Inquiries</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="press">Press</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Message"
                  required
                  className="bg-white px-6 py-3 text-base min-h-[150px]"
                />
              </div>

              <div className="flex justify-center pt-4">
                <Button1
                  type="submit"
                  disabled={isSubmitting}
                  className="relative px-8"
                >
                  {isSubmitting ? (
                    <Loader className="w-5 h-5 animate-spin" />
                  ) : (
                    "Submit"
                  )}
                </Button1>
              </div>
            </form>
          </div>

          {/* Card with Contacters */}
          <div className="bg-[#f7f7f7] p-8 lg:p-24 mt-auto">
            <div className="max-w-4xl mx-auto">
              <div
                className="pt-12 flex flex-col gap-4 items-center justify-center rounded-lg shadow-sm"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, #FFFFFF 0%, #F7F7F5 40%, #E1ECEB 100%)",
                }}
              >
                <div>
                  <h2 className="text-2xl font-medium text-center text-[#173A44]">
                    Elevate Your Brand, Stay Compliant
                  </h2>
                </div>

                {/* Ensuring proper alignment on mobile screens */}
                <div className="grid-cols-1 lg:grid-cols-2 lg:gap-[8vw] pb-12 flex flex-col items-center md:grid">
                  <div className="flex justify-center w-72">
                    <a
                      href="https://www.linkedin.com/in/farhadrasouli/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center"
                    >
                      <div className="w-full h-auto lg:w-72 mb-6 transition-transform duration-300 hover:scale-105">
                        <img
                          src="/lovable-uploads/093c0721-b2bf-4b0e-8bab-76817fdaccb7.png"
                          alt="Farhad Rasouli"
                          className="w-full h-full object-contain rounded-lg hover:opacity-90 transition-opacity"
                        />
                      </div>
                      <div className="h-24">
                        <h3 className="font-bold text-lg">Farhad Rasouli</h3>
                        <p className="text-gray-600 mb-4">
                          Executive Lead & Co-Founder
                        </p>
                      </div>
                    </a>
                  </div>

                  <div className="flex justify-center w-72">
                    <a
                      href="https://www.linkedin.com/in/daviddolhomut/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center"
                    >
                      <div className="w-full h-auto lg:w-72 mb-6 transition-transform duration-300 hover:scale-105">
                        <img
                          src="/lovable-uploads/718a19dc-08d6-4a18-9312-d4deaa31be03.png"
                          alt="David Dolhomut"
                          className="w-full h-full object-contain rounded-lg hover:opacity-90 transition-opacity"
                        />
                      </div>
                      <div className="h-24">
                        <h3 className="font-bold text-lg">David Dolhomut</h3>
                        <p className="text-gray-600 mb-4">
                          Head of Partnerships & Business Development
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ContactGeneral;
