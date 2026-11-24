import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Rama Sakti — Fullstack Developer" },
    {
      name: "description",
      content: "Portfolio Rama Sakti, fullstack developer dan software engineer.",
    },
  ];
}

const skills = [
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
  { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C" },
  { name: "Golang", icon: "https://cdn.simpleicons.org/go/00ADD8" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/00ADD8" },
  { name: "Express", icon: "https://cdn.simpleicons.org/express/000000" },
  { name: "Elysia", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMgqEH1BV7dXQyw3Q2nAu-QRsQHBxeOQl8Sc1gd0ThLw&s=10" },
  { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { name: "Fiber", icon: "https://files.gitbook.com/v0/b/gitbook-legacy-files/o/spaces%2F-M-XEvRn3rhe8BDVGkss%2Favatar-rectangle.png?generation=1582298855816936&alt=media" },
];

const projects: { name: string; description: string; url: string; image?: string }[] = [
  { name: "SIMSKUL", description: "Super app sekolah yang menghimpun berbagai aplikasi pendidikan dalam platform yang fleksibel.", url: "https://simskul.id"},
  { name: "Aplikasi Canvassing DPC PDIP Kabupaten Pasuruan", description: "Aplikasi pendataan kader yang melakukan pembagian bansos untuk mendukung koordinasi kampanye politik.", url: "https://github.com/AriTopan07/pdip-pasuruan" },
  { name: "CIKA", description: "Catatan keuangan otomatis melalui bot WhatsApp yang terhubung ke Google Spreadsheet milik setiap pengguna.", url: "https://cika.simskul.id" },
  { name: "LogiTrack", description: "Mini ERP pergudangan dengan manajemen stok, transaksi keluar-masuk, dan surat jalan otomatis.", url: "#" },
  { name: "BrideOps", description: "Aplikasi manajemen Wedding Organizer untuk inventaris, vendor, talent, penjadwalan, dan pembayaran bertahap.", url: "https://brideops.simskul.id" },
  { name: "GForm Exam", description: "Wrapper ujian online berbasis Google Form dan Safe Exam Browser yang menyembunyikan link ujian asli.", url: "https://github.com/ramasakti/gform-exam" },
  { name: "Arditama", description: "Landing page website sekolah SMP Arditama Waru Sidoarjo.", url: "https://smparditama.sch.id" },
  { name: "SIMSKUL Exam Browser", description: "Aplikasi Android berbasis Kotlin untuk ujian melalui QR code, token, batas waktu, dan kontrol akses.", url: "#" },
  { name: "QRIS PG", description: "Payment gateway pribadi yang mengubah QRIS static menjadi dynamic dan memperbarui status pembayaran melalui webhook.", url: "https://qris.simskul.id" },
];

export async function loader() {
  const metadata = await Promise.all(projects.map(async (project) => {
    if (project.image || project.url === "#") return [project.name, project.image] as const;
    try {
      const response = await fetch(project.url, { signal: AbortSignal.timeout(3000) });
      const html = await response.text();
      const match = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);
      return [project.name, match?.[1]] as const;
    } catch {
      return [project.name, undefined] as const;
    }
  }));
  return { images: Object.fromEntries(metadata) };
}

const experiences = [
  {
    period: "Mar 2024 — Sekarang\n2 tahun 8 bulan",
    role: "Fullstack Developer / Software Engineer",
    company: "Perguruan Islam Raudlatul Jannah",
    detail: "Mengembangkan perpustakaan digital, aplikasi persuratan dengan generate surat otomatis, sistem inventaris, aplikasi kesiswaan untuk alumni, dan pencatatan bimbingan konseling. Mengintegrasikan layanan Gotenberg, OnlyOffice, Fabric API, REST API, SSO, serta WhatsApp gateway dan provider untuk otomatisasi pesan. Bertanggung jawab atas server VPS dengan 30 container aplikasi yang dikelola menggunakan Coolify.",
  },
  {
    period: "Sep 2023 — Jan 2024",
    role: "Fullstack Developer Intern",
    company: "PT. Behaestex",
    detail: "Membangun sistem informasi sales dan peta interaktif berbasis Leaflet untuk memetakan toko dari tingkat desa hingga provinsi di seluruh Indonesia.",
  },
  {
    period: "Jul 2020 — Jul 2023\n3 tahun",
    role: "Fullstack Developer",
    company: "Yayasan Madrasah Islamiyah Modern",
    detail: "Mengembangkan web sekolah, ujian online berbasis Moodle dan Safe Exam Browser, konverter soal Google Form ke Moodle, platform cek kelulusan online, absensi face recognition, raport online, serta pengelolaan data pegawai dan siswa. Juga mengotomasi pendingin ruangan dengan ESP8266 dan menangani deployment Docker serta self-hosted server berbasis Proxmox.",
  },
];

export default function Home({ loaderData }: Route.ComponentProps) {
  const { images } = loaderData;
  return (
    <main>
      <nav className="site-nav page-shell" aria-label="Navigasi utama">
        <a className="brand" href="#top">RS<span>.</span></a>
        <div className="nav-links">
          <a href="#about">Tech Stack</a>
          <a href="#career">Karir</a>
          <a href="#work">Project</a>
        </div>
        <a className="nav-contact" href="mailto:ramasakti1337@gmail.com">Mari bicara <span>↗</span></a>
      </nav>

      <section className="hero page-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Tersedia untuk kesempatan baru</p>
          <h1>Membangun produk digital yang <em>berarti.</em></h1>
          <p className="hero-lead">Saya Rama Sakti, seorang fullstack developer dan software engineer yang senang mengubah ide kompleks menjadi pengalaman digital yang sederhana.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Lihat project <span>↗</span></a>
            <a className="text-link" href="mailto:ramasakti1337@gmail.com">Hubungi saya <span>↗</span></a>
          </div>
        </div>
        <div className="hero-mark"><img src="/foto.jpeg" alt="Foto Rama Sakti" /><i /></div>
      </section>

      <section className="intro-section page-shell" id="about">
        <div className="section-label">01 / Tech Stack saya</div>
        <div className="skill-list">{skills.map((skill) => <span key={skill.name}><img src={skill.icon} alt="" />{skill.name}</span>)}</div>
      </section>

      <section className="experience-section page-shell" id="career">
        <div className="section-label">02 / Karir</div>
        <div className="experience-list">{experiences.map((item) => <article className="experience-item" key={item.company}><div className="period">{item.period}</div><div><h3>{item.role}</h3><p className="company">{item.company}</p><p className="detail">{item.detail}</p></div></article>)}</div>
      </section>

      <section className="work-section page-shell" id="work">
        <div className="section-label">03 / Project</div>
        <div className="work-heading"><h2>Beberapa hal yang <em>pernah</em> saya buat.</h2><p>Solusi digital yang dirancang untuk kebutuhan nyata.</p></div>
        <div className="project-list">{projects.map((project, index) => <article className="project-placeholder" key={project.name}>{images[project.name] ? <img className="project-image" src={images[project.name]} alt="" /> : <div className="project-image project-image-empty" aria-hidden="true" />}<span className="placeholder-number">{String(index + 1).padStart(2, "0")}</span><div><h3>{project.name}</h3><p>{project.description}</p></div><a className="placeholder-arrow" href={project.url} target="_blank" rel="noreferrer" aria-label={`Buka ${project.name}`}>↗</a></article>)}</div>
      </section>

      <footer className="footer page-shell"><div><a className="brand" href="#top">RS<span>.</span></a><p>Mari membuat sesuatu yang berdampak.</p></div><div className="footer-links"><a href="mailto:ramasakti1337@gmail.com">Email ↗</a><a href="https://www.linkedin.com/in/rama-sakti-a65228193/">LinkedIn ↗</a><a href="https://github.com/ramasakti">GitHub ↗</a></div><small>© 2024 Rama Sakti</small></footer>
    </main>
  );
}
