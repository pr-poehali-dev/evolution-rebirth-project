import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <header className="relative z-10 border-b border-bio-cyan/20 bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-bio-cyan to-bio-green rounded-lg flex items-center justify-center animate-pulse-glow">
                <Icon name="Dna" className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-montserrat font-bold text-bio-cyan">
                  Эволюция
                </h1>
                <p className="text-sm text-bio-green font-medium">Возрождение</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#game" className="text-bio-cyan hover:text-bio-green transition-colors">
                Игра
              </a>
              <a href="#features" className="text-bio-cyan hover:text-bio-green transition-colors">
                Особенности
              </a>
              <a href="#evolution" className="text-bio-cyan hover:text-bio-green transition-colors">
                Эволюция
              </a>
              <div className="flex items-center gap-3">
                <Button variant="outline" className="border-bio-cyan text-bio-cyan hover:bg-bio-cyan hover:text-white">
                  Вход
                </Button>
                <Button className="bg-gradient-to-r from-bio-cyan to-bio-green text-white hover:from-bio-green hover:to-bio-cyan">
                  Регистрация
                </Button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden border-bio-cyan text-bio-cyan">
                  <Icon name="Menu" className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white border-bio-cyan/20">
                <div className="flex flex-col gap-6 mt-8">
                  <a href="#game" className="text-lg text-bio-cyan hover:text-bio-green transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Игра
                  </a>
                  <a href="#features" className="text-lg text-bio-cyan hover:text-bio-green transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Особенности
                  </a>
                  <a href="#evolution" className="text-lg text-bio-cyan hover:text-bio-green transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Эволюция
                  </a>
                  <div className="flex flex-col gap-3 mt-4">
                    <Button variant="outline" className="border-bio-cyan text-bio-cyan hover:bg-bio-cyan hover:text-white" onClick={() => setIsMenuOpen(false)}>
                      Вход
                    </Button>
                    <Button className="bg-gradient-to-r from-bio-cyan to-bio-green text-white hover:from-bio-green hover:to-bio-cyan" onClick={() => setIsMenuOpen(false)}>
                      Регистрация
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-bio-cyan/5 via-transparent to-bio-green/5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 md:mb-6 bg-bio-cyan/20 text-bio-cyan border-bio-cyan/30 animate-glow text-xs md:text-sm">
              MMO SURVIVAL • PVP • ЭВОЛЮЦИЯ
            </Badge>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-montserrat font-black text-transparent bg-clip-text bg-gradient-to-r from-bio-cyan via-bio-green to-bio-teal mb-4 md:mb-6 animate-fade-in leading-tight">
              ЭВОЛЮЦИЯ
              <br />
              ВОЗРОЖДЕНИЕ
            </h2>
            
            <p className="text-lg md:text-xl lg:text-2xl text-slate-600 mb-6 md:mb-8 leading-relaxed animate-fade-in px-4">
              Многопользовательский мир выживания, где каждый уровень открывает новые возможности эволюции. 
              Прокачивайся, сражайся и трансформируйся в безжалостной борьбе за выживание.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 md:mb-12 px-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-bio-cyan to-bio-green text-white hover:from-bio-green hover:to-bio-cyan font-bold text-base md:text-lg px-6 md:px-8 py-4 md:py-6 animate-pulse-glow w-full sm:w-auto"
              >
                <Icon name="Play" className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                Начать эволюцию
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-bio-cyan text-bio-cyan hover:bg-bio-cyan hover:text-white font-bold text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full sm:w-auto"
              >
                <Icon name="Info" className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                Узнать больше
              </Button>
            </div>
            
            <div className="relative max-w-4xl mx-auto px-4">
              <img 
                src="/img/b38eaf54-7b84-4880-8eba-ffeae08ccd35.jpg" 
                alt="Evolution Game Character" 
                className="w-full h-auto rounded-xl shadow-2xl border border-bio-cyan/20 animate-fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-100/20 via-transparent to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Features */}
      <section id="features" className="py-12 md:py-20 bg-white/70">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-bio-cyan mb-4">
              Особенности игры
            </h3>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              Погрузитесь в мир бесконечных возможностей эволюции
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-white/90 border-bio-cyan/20 hover:border-bio-cyan/40 transition-all duration-300 hover:bg-white hover:shadow-lg backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-bio-cyan to-bio-green rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-bio-cyan font-montserrat text-lg md:text-xl">
                  Система прокачки
                </CardTitle>
                <CardDescription className="text-slate-600 text-sm md:text-base">
                  Развивайте уникальные способности через сложную систему уровней
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-white/90 border-bio-cyan/20 hover:border-bio-cyan/40 transition-all duration-300 hover:bg-white hover:shadow-lg backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-bio-green to-bio-teal rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Dna" className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-bio-cyan font-montserrat text-lg md:text-xl">
                  Эволюционные ступени
                </CardTitle>
                <CardDescription className="text-slate-600 text-sm md:text-base">
                  Трансформируйтесь на каждом этапе эволюции, открывая новые формы
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-white/90 border-bio-cyan/20 hover:border-bio-cyan/40 transition-all duration-300 hover:bg-white hover:shadow-lg backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-bio-teal to-bio-blue rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Swords" className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-bio-cyan font-montserrat text-lg md:text-xl">
                  PVP сражения
                </CardTitle>
                <CardDescription className="text-slate-600 text-sm md:text-base">
                  Сражайтесь с другими игроками в интенсивных многопользовательских боях
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-white/90 border-bio-cyan/20 hover:border-bio-cyan/40 transition-all duration-300 hover:bg-white hover:shadow-lg backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-bio-purple to-bio-cyan rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-bio-cyan font-montserrat text-lg md:text-xl">
                  Survival механики
                </CardTitle>
                <CardDescription className="text-slate-600 text-sm md:text-base">
                  Выживайте в жестоком мире, управляя ресурсами и адаптируясь к угрозам
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-white/90 border-bio-cyan/20 hover:border-bio-cyan/40 transition-all duration-300 hover:bg-white hover:shadow-lg backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-bio-green to-bio-cyan rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-bio-cyan font-montserrat text-lg md:text-xl">
                  MMO мир
                </CardTitle>
                <CardDescription className="text-slate-600 text-sm md:text-base">
                  Исследуйте огромный открытый мир вместе с тысячами других игроков
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-white/90 border-bio-cyan/20 hover:border-bio-cyan/40 transition-all duration-300 hover:bg-white hover:shadow-lg backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-bio-teal to-bio-green rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Cpu" className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-bio-cyan font-montserrat text-lg md:text-xl">
                  Биотехнологии
                </CardTitle>
                <CardDescription className="text-slate-600 text-sm md:text-base">
                  Используйте передовые биотехнологии для создания уникального снаряжения
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Evolution System */}
      <section id="evolution" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-bio-cyan mb-4">
                Система эволюции
              </h3>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
                От простейших организмов до высокоразвитых био-кибернетических существ
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-bio-cyan to-bio-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-montserrat font-bold text-bio-cyan mb-2">
                      Примитивная форма
                    </h4>
                    <p className="text-slate-600 text-sm md:text-base">
                      Начните как базовый организм с основными способностями выживания
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-bio-green to-bio-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-montserrat font-bold text-bio-cyan mb-2">
                      Адаптивная эволюция
                    </h4>
                    <p className="text-slate-600 text-sm md:text-base">
                      Развивайте специализированные органы и способности для конкретных задач
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-bio-teal to-bio-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-montserrat font-bold text-bio-cyan mb-2">
                      Биокибернетическая интеграция
                    </h4>
                    <p className="text-slate-600 text-sm md:text-base">
                      Объедините органические и технологические компоненты для максимальной эффективности
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-bio-purple to-bio-cyan rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">∞</span>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-montserrat font-bold text-bio-cyan mb-2">
                      Трансцендентность
                    </h4>
                    <p className="text-slate-600 text-sm md:text-base">
                      Достигните высшей формы эволюции с безграничными возможностями
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <img 
                  src="/img/5cb5ce31-c718-4433-8695-e961d85341fd.jpg" 
                  alt="Evolution System Interface" 
                  className="w-full h-auto rounded-xl shadow-2xl border border-bio-cyan/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-100/20 via-transparent to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-bio-cyan/5 via-bio-green/5 to-bio-teal/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-bio-cyan mb-4">
              Готовы начать эволюцию?
            </h3>
            <p className="text-lg md:text-xl text-slate-600 mb-6 md:mb-8 px-4">
              Присоединяйтесь к миллионам игроков в самой амбициозной MMO survival игре
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-bio-cyan to-bio-green text-white hover:from-bio-green hover:to-bio-cyan font-bold text-base md:text-lg px-6 md:px-8 py-4 md:py-6 animate-pulse-glow w-full sm:w-auto"
              >
                <Icon name="Download" className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                Скачать игру
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-bio-cyan text-bio-cyan hover:bg-bio-cyan hover:text-white font-bold text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full sm:w-auto"
              >
                <Icon name="Youtube" className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                Смотреть трейлер
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 bg-white/90 border-t border-bio-cyan/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-bio-cyan to-bio-green rounded-lg flex items-center justify-center">
                <Icon name="Dna" className="w-6 h-6 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-lg font-montserrat font-bold text-bio-cyan">
                  Эволюция Возрождение
                </h4>
                <p className="text-sm text-slate-600">
                  © 2024 Ki nala Atum, OneDeadMachine, Porweks, sdoba express music
                </p>
                <a href="https://vk.com/onedeadmachine_pub" className="text-sm text-bio-cyan hover:text-bio-green transition-colors">
                  Сообщество ВК
                </a>
              </div>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-bio-cyan hover:text-bio-green transition-colors">
                <Icon name="MessageCircle" className="w-6 h-6" />
              </a>
              <a href="#" className="text-bio-cyan hover:text-bio-green transition-colors">
                <Icon name="Twitter" className="w-6 h-6" />
              </a>
              <a href="#" className="text-bio-cyan hover:text-bio-green transition-colors">
                <Icon name="Youtube" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}