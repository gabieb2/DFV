"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Mic, Zap, Globe, Shield } from "lucide-react"

export default function Page() {
  const gradioContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!document.getElementById("gradio-script")) {
      const script = document.createElement("script")
      script.id = "gradio-script"
      script.type = "module"
      script.src = "https://gradio.s3-us-west-2.amazonaws.com/5.33.0/gradio.js"
      document.body.appendChild(script)

      script.onload = () => {
        if (gradioContainerRef.current) {
          const gradioApp = document.createElement("gradio-app")
          gradioApp.setAttribute("src", "https://gabieb-transcriptor-de-fluidez-verbal.hf.space")
          gradioApp.style.width = "100%"
          gradioApp.style.minHeight = "700px"
          gradioApp.style.border = "none"
          gradioContainerRef.current.appendChild(gradioApp)
        }
      }
    } else {
      if (gradioContainerRef.current && gradioContainerRef.current.childElementCount === 0) {
        const gradioApp = document.createElement("gradio-app")
        gradioApp.setAttribute("src", "https://gabieb-transcriptor-de-fluidez-verbal.hf.space")
        gradioApp.style.width = "100%"
        gradioApp.style.minHeight = "700px"
        gradioApp.style.border = "none"
        gradioContainerRef.current.appendChild(gradioApp)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Logo Fonoaudiología"
                className="mx-auto mb-6 w-40"
              />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  LAB AI Fono
                </h1>
                <p className="text-sm text-muted-foreground">Escuela de fonoaudiología UNC</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Transcribe la voz y analiza el habla con IA
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Utiliza la tecnología más avanzada de reconocimiento de voz para convertir datos en información aplicados a la fonoaudiología.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Mic className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg">Detección precisa</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Analisis de los tiempos y la repetición de sonidos en el habla.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg">Adaptable a tus necesidades</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Escucha, modificá y calcula automatica parametros de fluidez.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg">Gratis y open-source</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Puedes usarlo de forma gratuita y conociendo cada linea de código.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Main App Section - Gradio Embed */}
        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center border-b bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Globe className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-2xl">Aplicación de Reconocimiento de Voz</CardTitle>
            </div>
            <CardDescription className="text-base">
              Sube tu archivo de audio o graba directamente para obtener la transcripción
              Espera un segundo mientras se el archivo carga, luego pulsa transcribir.
              Tendra una demora dependiendo del tamaño del archivo y la carga del servidor.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div
              style={{ overflowX: "auto", width: "100%" }}
              className="rounded-lg border-2 border-gray-300"
            >
              <div
                ref={gradioContainerRef}
                className="w-[1200px] min-h-[700px] bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center m-4"
              />
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">Desarrollado por Gabriel Beinotti</p>
            <p className="mb-2">Escuela de Fonoaudiología - FCM - UNC </p>
            <p className="text-sm">© 2025 Fono AI Lab. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
