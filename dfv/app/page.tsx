"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Mic, Sparkles, Zap, Globe, Shield } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  LAB AI Fono
                </h1>
                <p className="text-sm text-muted-foreground">Escuela de fonoaudiología UNC</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              En línea
            </Badge>
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
            Utiliza la tecnología más avanzada de reconocimiento de voz para convertir audio en datos aplicados a la fonoaudiología.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Mic className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg">Reconocimiento Preciso</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Tecnología de vanguardia que reconoce múltiples idiomas y acentos con alta precisión.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg">Procesamiento Rápido</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Convierte audio a texto en tiempo real con velocidades de procesamiento ultrarrápidas.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg">Seguro y Privado</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center">
                Tus datos están protegidos con los más altos estándares de seguridad y privacidad.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Main App Section - Aquí va tu script embebido */}
        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center border-b bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Globe className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-2xl">Aplicación de Reconocimiento de Voz</CardTitle>
            </div>
            <CardDescription className="text-base">
              Sube tu archivo de audio o graba directamente para obtener la transcripción
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            {/* AQUÍ VA TU SCRIPT EMBEBIDO DE HUGGING FACE */}
            <div
              id="huggingface-embed"
              className="w-full min-h-[600px] bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg m-4"
              style={{ minHeight: "600px" }}
            >
              <div className="text-center space-y-4 p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                
                <div className="bg-gray-100 p-4 rounded-lg text-left text-sm font-mono text-gray-600">
                  <script type="module" 	src="https://gradio.s3-us-west-2.amazonaws.com/3.38.0/gradio.js" ></script> 
                   <gradio-app src="https://openai-whisper.hf.space"></gradio-app>
                  
                   </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">99.5%</div>
            <div className="text-sm text-muted-foreground">Precisión</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Idiomas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">2.5s</div>
            <div className="text-sm text-muted-foreground">Tiempo promedio</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Disponibilidad</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">Desarrollado con ❤️ usando Next.js y Hugging Face</p>
            <p className="text-sm">© 2024 AI Studio. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
