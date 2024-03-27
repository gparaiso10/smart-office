// // Homepage.jsx
// import React from "react";

// const Homepage = () => {
//   return (
//     <main className="p-4">
//       <h2 className="text-2xl font-semibold">Bem-vindo à Página Inicial</h2>
//       <p className="mt-2">
//         Esta é uma página inicial elaborada com React e Tailwind CSS.
//       </p>
//       <p>Você pode começar a adicionar mais conteúdo e funcionalidades aqui!</p>
//     </main>
//   );
// };

// export default Homepage;
const posts = [
  {
    id: 1,
    title: "Melhore a usabilidade do seu site",
    href: "#",
    description:
      "Descubra como criar uma experiência de utilizador excepcional para aumentar a retenção e a satisfação dos clientes.",
    date: "13 de março de 2024",
    datetime: "2024-03-13",
    category: { title: "Produtividade", href: "#" },
    author: {
      name: "Eduardo Parreiral",
      role: "Developer / Designer",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Adote práticas sustentáveis na sua empresa",
    description:
      "Aprenda como implementar medidas sustentáveis em sua empresa para reduzir o impacto ambiental e promover a responsabilidade social corporativa.",
    date: "13 de março de 2024",
    datetime: "2024-03-13",
    category: { title: "Produtividade", href: "#" },
    author: {
      name: "Gustavo Paraíso",
      role: "Lead Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1559461674-8f6a38fc4332?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Aumente sua produtividade com técnicas de gestão do tempo",
    description:
      "Descubra estratégias eficazes para gerir o seu tempo com eficiência e alcançar maior produtividade nas suas tarefas diárias.",
    date: "13 de março de 2024",
    datetime: "2024-03-13",
    category: { title: "Produtividade", href: "#" },
    author: {
      name: "João Pinto",
      role: "Developer / Marketing Digital​",
      imageUrl:
        "https://images.unsplash.com/photo-1519996937440-5922d2e4e3db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 4,
    title: "Implemente melhores práticas de segurança cibernética",
    description:
      "Proteja os seus sistemas e dados contra ameaças cibernéticas com as mais recentes técnicas e ferramentas de segurança.",
    date: "13 de março de 2024",
    datetime: "2024-03-13",
    category: { title: "Produtividade", href: "#" },
    author: {
      name: "Miguel Marques",
      role: "Developer / Técnico",
      imageUrl:
        "https://images.unsplash.com/photo-1519996937440-5922d2e4e3db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Homepage() {
  // Filtrando os quatro primeiros posts
  const featuredPosts = posts.slice(0, 4);

  return (
    <div className="relative">
      <img
        src="../img/fundoSmartOffice.jpeg"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        alt="Background"
      />
      <div className="absolute inset-0 bg-gray-300 opacity-50" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Aqui nada fica por resolver
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Damos suporte em tudo e mais algum parafuso
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
