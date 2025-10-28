import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg ring-4 ring-[var(--accent)]">
          <Image
            src="/images/personal/Intro.jpg"
            alt="Rubaiya's Profile Picture"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* About Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold text-[var(--foreground)]">
            Rubaiya Binte Rahman
          </h1>
          <p className="text-[var(--accent)] text-lg mt-1">
            💻 Developer&nbsp;|&nbsp;🎨 Designer&nbsp;|&nbsp;✂️ Creative Mind
          </p>

          <h2 className="mt-6 text-2xl font-semibold text-[var(--foreground)]">
            About Me
          </h2>
          <p className="mt-3 text-[var(--foreground)]/90 leading-relaxed">
            I am a passionate learner with a background as a part-time primary
            school teacher for over a year. After completing my HSC in 2022, I
            faced challenges getting admission in my preferred subject,
            Computer Science. Instead of giving up, I took a gap year to develop
            valuable skills like HTML, CSS, basic JavaScript, and graphic
            design. I love creating art and have spent a lot of time honing my
            creativity. Combining my technical knowledge with my artistic
            passion, I am eager to grow and contribute in fields that blend
            technology and creativity.
          </p>
        </div>
      </div>
    </section>
  );
}
