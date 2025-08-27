import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPinIcon, PhoneIcon, MailIcon, GlobeIcon } from "./icons";
import React, { useState } from "react";

export function Contact() {
  const contactDetails = [
    {
      icon: MapPinIcon,
      title: "Адрес",
      content: "119019, г. Москва, ул. Новый Арбат, д. 15, помещ. 2120",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      icon: PhoneIcon,
      title: "Телефон",
      content: "+7 (495) 187-77-10",
      link: "tel:+74951877710",
      gradient: "from-emerald-600 to-teal-500"
    },
    {
      icon: MailIcon,
      title: "Email",
      content: "info@hvdigital.ru",
      link: "mailto:info@hvdigital.ru",
      gradient: "from-pink-600 to-fuchsia-500"
    },
    {
      icon: GlobeIcon,
      title: "Веб-сайт",
      content: "www.hvdigital.ru",
      link: "https://www.hvdigital.ru",
      gradient: "from-indigo-600 to-blue-600",
      isExternal: true
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-24 bg-gray-900 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -right-24 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-blue-600/20 via-cyan-400/10 to-transparent blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-[48rem] h-[48rem] rounded-full bg-gradient-to-tr from-blue-600/10 via-indigo-500/10 to-transparent blur-3xl"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Контакты</h2>
          <p className="mt-4 bg-gradient-to-r from-blue-400 via-blue-700 to-blue-800 bg-clip-text text-transparent text-lg">Мы оперативно ответим и предложим лучшие решения под ваши задачи</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Details */}
          <div>
            <div className="grid gap-5">
              {contactDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <Card 
                    key={index}
                    className="group relative overflow-hidden rounded-2xl bg-gray-900 ring-1 ring-white/10 p-6 hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-start">
                      <div className={`mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${detail.gradient} text-white shadow-lg`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{detail.title}</h4>
                        {detail.link ? (
                          <a 
                            href={detail.link}
                            className="text-gray-300 hover:text-white transition-colors"
                            {...(detail.isExternal ? { target: "_blank", rel: "noopener" } : {})}
                          >
                            {detail.content}
                          </a>
                        ) : (
                          <p className="text-gray-300">{detail.content}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <Card className="relative rounded-3xl bg-gray-900 ring-1 ring-white/10 p-1 shadow-glow">
              <div className="rounded-[22px] bg-gradient-to-b from-gray-900 to-gray-950 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Отправить сообщение</h3>
                <p className="text-gray-300 mb-6">Опишите задачу — вернемся с предложением в ближайшее время.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Ваше имя</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Иван Иванов"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Сообщение</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      required
                      placeholder="Кратко опишите задачу"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 resize-none"
                    />
                  </div>
                  <div className="flex items-start gap-3 text-sm text-gray-300">
                    <input id="privacy" type="checkbox" required className="mt-1 h-4 w-4 rounded border-white/20 bg-white/10 text-blue-500 focus:ring-blue-400/40" />
                    <label htmlFor="privacy">Соглашаюсь с <a href="#" className="text-blue-300 hover:text-blue-200 underline">политикой конфиденциальности</a></label>
                  </div>
                  <Button
                    type="primary"
                    disabled={isSubmitting}
                    variant="gradient"
                    size="lg"
                    className="w-64 rounded-xl font-semibold disabled:opacity-50"
                  >
                    <MailIcon className="h-4 w-4" />
                    {isSubmitting ? 'Отправляется...' : 'Отправить сообщение'}
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}