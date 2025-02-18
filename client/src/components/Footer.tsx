import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary/5 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Fidcent</h3>
            <p className="text-sm text-muted-foreground">
              Empowering businesses through innovative software solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Custom Software Development</li>
              <li>Mobile App Development</li>
              <li>Web Development</li>
              <li>Cloud Solutions</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <address className="text-sm text-muted-foreground not-italic">
              16, Feenas Street<br />
              Adj mast, Ibafo<br />
              Ogun State<br />
              <a href="mailto:contact@fidcent.com">contact@fidcent.com</a>
            </address>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/fidcent" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/fidcent" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="https://facebook.com/fidcent" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Fidcent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
