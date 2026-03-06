import React from 'react';
import Parallax from '../components/Parallax';
import EventCard from '../components/EventCard';

export default function Events() {
  const latestEvents = [
    {
      title: "Zirve 23",
      subtitle: "2023 Sabancı Kültür Merkezi",
      image: "/images/zire resim kopyası.jpg",
      desc: "Girişimcilik ekosisteminin dev isimlerini ağırladığımız, tecrübe ve bilgi dolu bir zirve.",
      tags: ["Girişimcilik", "Tecrübe", "TÜGİT"],
      presenters: [
        {name: "Konuşmacı 1", image: "https://i.postimg.cc/jqgkqhSb/cast-11.jpg"}
      ]
    },
    {
      title: "İş Planı Atölyesi",
      subtitle: "Balkan Kongre Merkezi",
      image: "https://i.postimg.cc/GtxLYS7q/poster2-img.jpg",
      desc: "Fikirlerinizi nasıl hayata geçireceğinizi uygulamalı olarak öğrendiğimiz teknik iş planı eğitimi.",
      tags: ["Atölye", "Eğitim"],
      presenters: [
        {name: "Eğitmen 1", image: "https://i.postimg.cc/yY2QcYRp/cast-21.jpg"}
      ]
    },
    {
      title: "TÜGİT Tanışma Toplantısı",
      subtitle: "Girişimcilik Merkezi",
      image: "https://i.postimg.cc/pdjRc68d/img-02.png",
      desc: "Yeni dönemde aramıza katılan arkadaşlarımızla tanışma, vizyon paylaşımı ve ekip oyunları.",
      tags: ["Networking", "Tanışma"],
      presenters: [
        {name: "YK Üyesi", image: "https://i.postimg.cc/xd3twv4B/cast-31.jpg"}
      ]
    }
  ];

  return (
    <>
      <Parallax title="Etkinliklerimiz" height="40vh" />
      <div className="songelismeler" style={{ padding: '50px 0', minHeight: '50vh' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem', color: '#333' }}>
          Geçmiş ve Gelecek Etkinliklerimiz
        </h2>
        <div className="wrapper" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {latestEvents.map((evt, idx) => (
            <EventCard key={idx} {...evt} />
          ))}
        </div>
      </div>
    </>
  );
}
