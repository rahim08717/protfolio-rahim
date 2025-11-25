"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "abdurrahim17@cse.pstu.ac.bd",
      href: "mailto:abdurrahim17@cse.pstu.ac.bd",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+8801409427680",
      href: "tel:+8801409427680",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dhaka, Bangladesh",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always interested in learning opportunities, internships, and
            connecting with fellow developers. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email" type="email" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Your message..." rows={5} />
                <Button className="w-full">Send Message</Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                I'm open to internship opportunities, collaborative projects,
                and connecting with other developers. Let's build something
                great together!
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">{info.title}</h4>
                  <p className="text-muted-foreground">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
