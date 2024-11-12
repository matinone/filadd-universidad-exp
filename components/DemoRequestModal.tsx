import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  calendlyUrl: string;
}

export default function DemoRequestModal({
  isOpen,
  onClose,
  calendlyUrl,
}: DemoRequestModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [institution, setInstitution] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would typically send the form data to your server
    // For this example, we'll simulate an API call with a timeout
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log({ name, email, institution, message });

    // Open Calendly in a new tab
    window.open(calendlyUrl, "_blank");

    // Reset form and close modal
    setName("");
    setEmail("");
    setInstitution("");
    setMessage("");
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-[#001B44]">Solicitar Demo</h2>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Cerrar</span>
          </Button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Tu nombre completo"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo electrónico
              </label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="institution"
                className="block text-sm font-medium text-gray-700"
              >
                Institución
              </label>
              <Input
                id="institution"
                type="text"
                placeholder="Nombre de tu institución"
                required
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensaje (opcional)
              </label>
              <textarea
                id="message"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0066FF] focus:ring focus:ring-[#0066FF] focus:ring-opacity-50"
                placeholder="¿Cómo podemos ayudarte?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="mt-6">
            <Button
              type="submit"
              className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar solicitud"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
