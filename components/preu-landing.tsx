"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen, Users, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DemoRequestModal from "@/components/DemoRequestModal";

export default function PreuLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const calendlyUrl = "https://calendly.com/rzanetta/demo-filadd-universidades";

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#001B44] text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Filadd Universidad
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="#features" className="hover:text-[#0066FF]">
              Características
            </Link>
            <Link href="#testimonials" className="hover:text-[#0066FF]">
              Testimonios
            </Link>
            <Link href="#contact" className="hover:text-[#0066FF]">
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative bg-[#001B44] text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/students-learning-2.jpg"
              alt="Estudiantes aprendiendo en línea"
              fill
              className="object-cover opacity-60"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001B44] via-[#001B44]/70 to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="md:w-3/5 lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Aumenta tus matrículas con nuestro preuniversitario 100% online
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Ofrece a tus futuros estudiantes una preparación de calidad
                totalmente gratis. Atrae leads, impulsa matrículas y posiciona
                tu institución.
              </p>
              <Button
                onClick={openModal}
                className="bg-[#0066FF] hover:bg-[#0052CC] text-white text-lg px-8 py-3"
              >
                Contáctanos
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#001B44]">
              Características de nuestro PREU
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: GraduationCap,
                  title: "Contenido actualizado",
                  description:
                    "Material siempre al día con los últimos requerimientos de la prueba de admisión",
                },
                {
                  icon: BookOpen,
                  title: "Todas las materias",
                  description:
                    "Preparación completa en Matemáticas, Lenguaje, Ciencias e Historia",
                },
                {
                  icon: Users,
                  title: "Preparación integral",
                  description:
                    "Enfoque en habilidades académicas y manejo del estrés",
                },
                {
                  icon: Award,
                  title: "Simulacros de examen",
                  description:
                    "Pruebas periódicas para medir el progreso de los estudiantes",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <feature.icon className="w-12 h-12 text-[#0066FF] mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-[#001B44]">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#001B44]">
              Lo que dicen las universidades que usan nuestro PREU
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Universidad de San Sebastián",
                  quote:
                    "Gracias a Filadd Universidad, hemos visto un aumento significativo en la calidad de nuestros postulantes.",
                },
                {
                  name: "Pontificia Universidad Católica de Chile",
                  quote:
                    "El contenido de Filadd Universidad ha sido fundamental para atraer a los mejores estudiantes a nuestra institución.",
                },
                {
                  name: "Universidad de Santiago de Chile",
                  quote:
                    "La preparación que ofrece Filadd Universidad se refleja en el éxito académico de nuestros nuevos alumnos.",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 italic">
                      "{testimonial.quote}"
                    </p>
                    <p className="font-semibold text-[#001B44]">
                      {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-[#001B44] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">
              ¿Listo para transformar tu programa PREU y atraer a los mejores
              estudiantes?
            </h2>
            <p className="text-xl mb-8">
              Contáctanos hoy y descubre cómo nuestro contenido PREU puede
              ayudarte a mejorar la calidad de tus futuros alumnos.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                className="bg-white text-[#001B44]"
              />
              <Button
                onClick={openModal}
                className="bg-[#0066FF] hover:bg-[#0052CC] text-white px-8"
              >
                Contactar
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#001B44] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left">
              &copy; 2024 Filadd Universidad. Todos los derechos reservados.
            </p>
            <nav className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-[#0066FF]">
                Política de privacidad
              </Link>
              <Link href="#" className="hover:text-[#0066FF]">
                Términos de servicio
              </Link>
            </nav>
          </div>
        </div>
      </footer>

      <DemoRequestModal
        isOpen={isModalOpen}
        onClose={closeModal}
        calendlyUrl={calendlyUrl}
      />
    </div>
  );
}
