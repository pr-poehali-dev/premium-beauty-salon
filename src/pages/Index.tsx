import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { toast } = useToast();

  const services = [
    {
      icon: 'Scissors',
      title: 'Парикмахерские услуги',
      description: 'Авторские стрижки, окрашивание премиальными пигментами, уходовые процедуры для волос любой текстуры.',
      color: 'from-primary to-secondary'
    },
    {
      icon: 'Sparkles',
      title: 'Уход за лицом',
      description: 'Персонализированные программы ухода на основе диагностики кожи с использованием люксовой косметики.',
      color: 'from-secondary to-accent'
    },
    {
      icon: 'Hand',
      title: 'Ногтевой сервис',
      description: 'Маникюр и педикюр по самым высоким стандартам гигиены. Акцент на здоровье ногтей и эстетику.',
      color: 'from-accent to-primary'
    },
    {
      icon: 'Eye',
      title: 'Брови и ресницы',
      description: 'Коррекция и окрашивание бровей, ламинирование, наращивание ресниц для естественного и выразительного взгляда.',
      color: 'from-primary via-secondary to-accent'
    }
  ];

  const advantages = [
    {
      icon: 'Award',
      title: 'Мастера-эксперты',
      description: 'Нашу команду составляют топ-специалисты, регулярно повышающие квалификацию.'
    },
    {
      icon: 'Shield',
      title: 'Безопасность и стерильность',
      description: 'Мы строго соблюдаем все протоколы. Используем только одноразовые инструменты и профессиональные стерилизаторы.'
    },
    {
      icon: 'Heart',
      title: 'Индивидуальный подход',
      description: 'Бесплатная подробная консультация перед любой услугой. Мы слушаем ваши пожелания.'
    },
    {
      icon: 'Star',
      title: 'Авторские бренды',
      description: "Работаем с проверенными премиальными брендами: L'Oréal Professionnel, Kerastase, CND, Christina Fitzgerald и другие."
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Консультация',
      description: 'Обсуждаем ваши цели, анализируем состояние волос или кожи.'
    },
    {
      number: '02',
      title: 'План',
      description: 'Предлагаем оптимальное решение и подробно согласовываем каждый этап.'
    },
    {
      number: '03',
      title: 'Воплощение',
      description: 'Вы расслабляетесь, пока мастер воплощает задуманное в комфортной атмосфере.'
    },
    {
      number: '04',
      title: 'Результат и уход',
      description: 'Даем персональные рекомендации по домашнему уходу для сохранения идеального результата.'
    }
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы перезвоним вам в течение 30 минут.",
    });
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Блеск и Грация
          </h1>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#advantages" className="hover:text-primary transition-colors">Преимущества</a>
            <a href="#process" className="hover:text-primary transition-colors">Процесс</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                Записаться
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Онлайн-запись</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" required />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                </div>
                <div>
                  <Label htmlFor="service">Желаемая услуга</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hair">Парикмахерские услуги</SelectItem>
                      <SelectItem value="face">Уход за лицом</SelectItem>
                      <SelectItem value="nails">Ногтевой сервис</SelectItem>
                      <SelectItem value="brows">Брови и ресницы</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="date">Предпочитаемая дата</Label>
                  <Input id="date" type="date" required />
                </div>
                <div>
                  <Label htmlFor="time">Предпочитаемое время</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите время" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 13 }, (_, i) => i + 10).map(hour => (
                        <SelectItem key={hour} value={`${hour}:00`}>{hour}:00</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">
                  Отправить заявку
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Перезваниваем в течение 30 минут
                </p>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Салон красоты <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">премиум-класса</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Ваша красота — наш высший приоритет.
              </p>
              <p className="text-lg">
                Пространство, где встречаются экспертное мастерство, лучшие средства и индивидуальный подход, чтобы подчеркнуть вашу уникальность.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8"
                onClick={() => setIsBookingOpen(true)}
              >
                Записаться на прием
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/files/2.jpg" 
                alt="Салон красоты" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                    <Icon name="Star" className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-2xl">5.0</p>
                    <p className="text-sm text-muted-foreground">Рейтинг салона</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <h3 className="text-4xl font-bold mb-4">Наша философия</h3>
            <p className="text-2xl text-primary font-semibold mb-4">Больше, чем салон</p>
            <p className="text-lg text-muted-foreground">
              Блеск и грация — это островок спокойствия в сердце города. Мы верим, что истинная красота рождается из гармонии внешнего и внутреннего. Наша миссия — не просто изменить образ, а помочь вам увидеть и подчеркнуть свою лучшую версию. Здесь каждая деталь создана для вашего комфорта и расслабления.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <img 
              src="https://cdn.poehali.dev/files/3.jpg" 
              alt="Интерьер салона" 
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover animate-slide-up"
            />
            <img 
              src="https://cdn.poehali.dev/files/4.jpg" 
              alt="Работа мастера" 
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover animate-slide-up"
              style={{ animationDelay: '0.1s' }}
            />
          </div>
        </div>
      </section>

      <section id="services" className="py-16 px-4 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 animate-fade-in">Ключевые услуги</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`h-16 w-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon name={service.icon as any} className="text-white" size={32} />
                  </div>
                  <h4 className="text-xl font-bold">{service.title}</h4>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl font-bold mb-4">Наши преимущества</h3>
            <p className="text-xl text-muted-foreground">Почему выбирают нас?</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="flex gap-4 p-6 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 hover:shadow-lg transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Icon name={advantage.icon as any} className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{advantage.title}</h4>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-16 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl font-bold mb-4">Процесс приема</h3>
            <p className="text-xl text-muted-foreground">Как проходит ваш визит?</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="relative animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {step.number}
                    </div>
                    <h4 className="text-xl font-bold">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <Icon 
                    name="ArrowRight" 
                    className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 text-primary" 
                    size={32} 
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold text-center mb-12 animate-fade-in">Отзывы</h3>
          <Card className="animate-scale-in">
            <CardContent className="p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" className="text-accent fill-accent" size={24} />
                ))}
              </div>
              <p className="text-lg mb-4 italic">
                «Наконец-то нашла салон, где не просто делают прическу, а слышат и дают реально полезные советы. После стрижки чувствую себя обновленной и уверенной. Спасибо команде!»
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src="https://cdn.poehali.dev/files/5.jpg" 
                  alt="Марина" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">Марина</p>
                  <p className="text-sm text-muted-foreground">Постоянная гостья</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto max-w-2xl text-center space-y-6 animate-fade-in">
          <h3 className="text-4xl font-bold">Готовы преобразиться?</h3>
          <p className="text-xl">
            Оставьте заявку, и наш администратор подберет для вас удобное время, ответит на все вопросы и запишет к нужному мастеру.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 text-lg px-8"
            onClick={() => setIsBookingOpen(true)}
          >
            Записаться сейчас
            <Icon name="Calendar" className="ml-2" size={20} />
          </Button>
          <p className="text-sm opacity-90">Перезваниваем в течение 30 минут</p>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 animate-fade-in">Контакты</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="animate-slide-up">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Адрес</h4>
                    <p className="text-muted-foreground">г. Санкт-Петербург, ул. Цветочная, д. 25</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+7 (812) 345-67-89</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-muted-foreground">welcome@belle-epoque.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary via-secondary to-accent flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Часы работы</h4>
                    <p className="text-muted-foreground">Пн-Вс, с 10:00 до 22:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6 space-y-4">
                <h4 className="text-xl font-bold">Дополнительно</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Gift" className="text-primary" size={20} />
                    <p>Подарочные сертификаты</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Percent" className="text-secondary" size={20} />
                    <p>Программы лояльности</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Car" className="text-accent" size={20} />
                    <p>Бесплатная парковка для гостей</p>
                  </div>
                </div>
                <div className="pt-4">
                  <img 
                    src="https://cdn.poehali.dev/files/1.jpg" 
                    alt="Салон" 
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="text-lg font-semibold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Блеск и Грация
          </p>
          <p>© 2024 Салон красоты премиум-класса. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
