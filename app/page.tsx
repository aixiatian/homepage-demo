import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-blue-100 dark:ring-blue-900">
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-amber-500 flex items-center justify-center text-white text-4xl font-bold">
              千
            </div>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent">
              千吉
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-4">
            大数据专家 | AI技术专家
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            10年+大数据开发经验，专注于大型数据产品研发与技术。
            担任大厂技术负责人，致力于推动 AI 与数据技术融合发展。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://mp.weixin.qq.com/s/O67_zK1IvqTa9w8WHVkopg"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              关注公众号
            </a>
            <a
              href="https://github.com/aixiatian"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            关于我
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                专业背景
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                拥有10年+大数据开发经验，专注于大型数据产品研发与技术创新。
                在担任大厂技术负责人期间，成功领导多个大型数据项目，
                积累了丰富的架构设计和团队管理经验。
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                技术使命
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                致力于推动 AI 与数据技术的融合发展，专注于 AI智能体、AI编程 等前沿技术。
                同时通过技术教学和知识分享，帮助更多开发者掌握先进的技术栈。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-16 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            专业技能
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">大数据技术</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                精通大数据相关技术栈，拥有大型数据仓库架构设计经验，熟悉分布式计算和存储技术。
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI 技术融合</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                深入研究 AI 与技术融合，专注 AI智能体、AI编程等前沿技术，推动技术创新发展。
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">团队管理</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                丰富的技术团队管理经验，善于规划技术方向和推动团队创新，培养技术人才。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            联系方式
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            <a
              href="https://mp.weixin.qq.com/s/O67_zK1IvqTa9w8WHVkopg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.379 2.655-1.407 3.119-2.752 3.119-1.217 0-2.01-.733-2.01-1.799 0-.733.379-1.245.896-1.565.448-.277.827-.373 1.407-.373.269 0 .517.032.738.096-.213-1.565-.64-4.24-.64-4.24-.197-1.336.213-2.42 1.245-2.42.896 0 1.565.448 1.565 1.622 0 .32-.064.576-.192.832z"/>
                </svg>
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">公众号</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">技术分享</p>
            </a>

            <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/>
                </svg>
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">微信</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">dkay33</p>
            </div>

            <a
              href="https://github.com/aixiatian"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">GitHub</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">开源项目</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 px-6 py-8">
        <div className="mx-auto max-w-4xl text-center text-gray-500 dark:text-gray-400">
          <p>&copy; 2024 千吉. 专注于大数据与AI技术融合发展.</p>
        </div>
      </footer>
    </main>
  );
}
