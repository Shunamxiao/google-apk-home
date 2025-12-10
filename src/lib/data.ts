import type { LucideIcon } from 'lucide-react';
import { Package, Store, Cog, Shell, Zap, Replace, Smartphone } from 'lucide-react';

export type IconName = 'Cog' | 'Package' | 'Store' | 'Shell' | 'Zap' | 'Replace' | 'Smartphone';

export const iconMap: Record<IconName, LucideIcon> = {
  Cog,
  Package,
  Store,
  Shell,
  Zap,
  Replace,
  Smartphone,
};

export interface SiteConfig {
  siteName: string;
  logoIcon: IconName;
  title: string;
  description: string;
  footerText: string;
  footerSubText: string;
  baiduAnalyticsId: string;
}

export interface Plugin {
  id: string;
  name: string;
  description: string;
  version: string;
  downloadUrl: string;
  iconName: IconName | string; // Allow string for image URLs
}

export interface AndroidVersion {
  id: string;
  name:string;
  releaseName: string;
  plugins: Plugin[];
}

export interface ThirdPartyTool extends Plugin {}

export interface Article {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  content: string;
}

export interface AppData {
  siteConfig: SiteConfig;
  androidVersions: AndroidVersion[];
  thirdPartyTools: ThirdPartyTool[];
  articles: Article[];
}

const staticAppData: AppData = {
  siteConfig: {
    siteName: "安卓谷歌安装器",
    logoIcon: "Smartphone",
    title: "安卓谷歌安装器 - 一站式谷歌服务解决方案",
    description: "提供安卓设备所需的谷歌服务框架和谷歌插件下载。",
    footerText: "版权所有",
    footerSubText: "一个帮助您轻松安装谷歌服务的网站",
    baiduAnalyticsId: "b2e255a5512aa46a4f692adf9c8bfe00"
  },
  androidVersions: [
    {
      id: "android-14",
      name: "安卓 14",
      releaseName: "Upside Down Cake",
      plugins: [
        {
          id: "google-services-framework-14",
          name: "谷歌服务框架",
          description: "Google服务框架是Google服务正常运行的基础。",
          version: "14",
          downloadUrl: "https://apks.cc/apps/google-services-framework-android-14",
          iconName: "Package"
        },
        {
          id: "google-play-services-14",
          name: "Google Play 服务",
          description: "Google Play服务用于更新Google应用和Google Play提供的应用。",
          version: "24.22.15",
          downloadUrl: "https://apks.cc/apps/google-play-services-android-14",
          iconName: "Cog"
        },
        {
          id: "google-play-store-14",
          name: "Google Play 商店",
          description: "Google Play商店是Google官方的应用商店，提供海量应用、游戏、电影、音乐等内容。",
          version: "41.0.23",
          downloadUrl: "https://apks.cc/apps/google-play-store-android-14",
          iconName: "Store"
        }
      ]
    },
    {
        id: "android-15",
        name: "安卓 15",
        releaseName: "Vanilla Ice Cream",
        plugins: [
          {
            id: "google-services-framework-15",
            name: "谷歌服务框架",
            description: "Google服务框架是Google服务正常运行的基础。",
            version: "15",
            downloadUrl: "https://apks.cc/apps/google-services-framework-android-15",
            iconName: "Package"
          },
          {
            id: "google-play-services-15",
            name: "Google Play 服务",
            description: "Google Play服务用于更新Google应用和Google Play提供的应用。",
            version: "24.22.15",
            downloadUrl: "https://apks.cc/apps/google-play-services-android-15",
            iconName: "Cog"
          },
          {
            id: "google-play-store-15",
            name: "Google Play 商店",
            description: "Google Play商店是Google官方的应用商店，提供海量应用、游戏、电影、音乐等内容。",
            version: "41.0.23",
            downloadUrl: "https://apks.cc/apps/google-play-store-android-15",
            iconName: "Store"
          }
        ]
      },
      {
        id: "android-16",
        name: "安卓 16",
        releaseName: "Tiramisu",
        plugins: [
          {
            id: "google-services-framework-16",
            name: "谷歌服务框架",
            description: "Google服务框架是Google服务正常运行的基础。",
            version: "16",
            downloadUrl: "https://apks.cc/apps/google-services-framework-android-16",
            iconName: "Package"
          },
          {
            id: "google-play-services-16",
            name: "Google Play 服务",
            description: "Google Play服务用于更新Google应用和Google Play提供的应用。",
            version: "24.22.15",
            downloadUrl: "https://apks.cc/apps/google-play-services-android-16",
            iconName: "Cog"
          },
          {
            id: "google-play-store-16",
            name: "Google Play 商店",
            description: "Google Play商店是Google官方的应用商店，提供海量应用、游戏、电影、音乐等内容。",
            version: "41.0.23",
            downloadUrl: "https://apks.cc/apps/google-play-store-android-16",
            iconName: "Store"
          }
        ]
      },
  ],
  thirdPartyTools: [
    {
      id: "go-google-installer",
      name: "Go谷歌安装器",
      description: "Go谷歌安装器是一款专门为解决安卓手机没有谷歌服务而设计的应用，可以一键安装谷歌三件套。",
      version: "5.2",
      downloadUrl: "https://apks.cc/apps/go-google-installer",
      iconName: "Shell"
    },
    {
      id: "ourplay",
      name: "OurPlay",
      description: "OurPlay（原谷歌空间）是一款提供谷歌服务框架和网络加速功能的工具，让您轻松畅玩外服游戏和使用谷歌应用。",
      version: "7.2.1",
      downloadUrl: "https://apks.cc/apps/ourplay",
      iconName: "Zap"
    }
  ],
  articles: [
    {
      slug: "what-is-google-three-piece-suite",
      title: "谷歌三件套是什么？",
      description: "本文详细介绍了谷歌三件套（Google Services Framework, Google Play Services, Google Play Store）的定义、功能以及它们在安卓系统中的重要性。",
      keywords: "谷歌三件套, Google三件套, 谷歌服务框架, Google Play服务, Google Play商店",
      content: "## 什么是谷歌三件套？\n\n谷歌三件套，又称GMS三件套，是指**谷歌服务框架 (Google Services Framework)**、**Google Play 服务 (Google Play Services)** 和 **Google Play 商店 (Google Play Store)** 这三个核心应用。它们是安卓系统正常使用谷歌服务和相关应用的基础。\n\n### 1. 谷歌服务框架 (Google Services Framework)\n\n- **作用**：这是整个GMS的基础，它提供了一个允许Google应用与Google服务器进行通信的框架。没有它，您的设备将无法登录Google账户，也无法同步数据。\n- **重要性**：★★★★★\n\n### 2. Google Play 服务 (Google Play Services)\n\n- **作用**：这是一个集成了多种Google核心功能的后台服务包，例如定位、地图、身份验证、广告等。许多依赖GMS的应用都需要调用Google Play服务提供的API才能正常运行。\n- **重要性**：★★★★★\n\n### 3. Google Play 商店 (Google Play Store)\n\n- **作用**：这是Google官方的应用分发平台，用户可以在这里下载、安装和更新数百万的应用程序和游戏。\n- **重要性**：★★★★☆ (如果您只使用特定的Google应用，可能不是必需的，但对于大多数用户来说非常重要)\n\n## 为什么需要安装谷歌三件套？\n\n由于众所周知的原因，在中国大陆销售的安卓手机通常不会预装谷歌服务。这导致用户无法：\n\n- 登录Google账户\n- 使用Gmail, Google Maps, YouTube等Google官方应用\n- 运行许多需要GMS支持的国外应用和游戏（例如，很多游戏的进度是通过Google Play Games保存的）\n\n因此，如果您有上述需求，就需要手动安装谷歌三件套来解锁完整的安卓体验。"
    },
    {
      slug: "how-to-install-google-services",
      title: "如何为您的安卓手机安装谷歌服务？",
      description: "本教程将指导您如何通过使用Go谷歌安装器或者OurPlay等第三方工具，为您的安卓设备一键安装谷歌服务框架、Google Play服务和Play商店。",
      keywords: "安装谷歌服务, 谷歌安装器, Go谷歌安装器, OurPlay, 谷歌空间",
      content: "## 安装谷歌服务的常见方法\n\n为安卓手机安装谷歌服务主要有两种主流方法：使用专门的安装器App，或者通过刷机。对于大多数普通用户来说，使用安装器App是最简单、最安全的方法。\n\n### 方法一：使用第三方安装器（推荐）\n\n市面上有很多成熟的一键安装工具，它们能够自动检测您的手机型号和安卓版本，并匹配最合适的GMS套件进行安装。我们推荐以下两款工具：\n\n#### 1. Go谷歌安装器\n\n- **优点**：界面简洁，操作简单，成功率高。专门为安装谷歌服务而生。\n- **安装步骤**：\n  1. 在本站下载并安装“Go谷歌安装器”。\n  2. 打开App，它会自动检测您的设备是否缺少谷歌套件。\n  3. 点击“开始安装”或“一键修复”按钮。\n  4. 应用会自动下载并引导您完成谷歌服务框架、Play服务和Play商店的安装。\n  5. 安装完成后，重启手机即可。\n\n#### 2. OurPlay (原谷歌空间)\n\n- **优点**：不仅提供GMS安装，还自带网络加速功能，特别适合玩外服游戏的用户。\n- **安装步骤**：\n  1. 在本站下载并安装“OurPlay”。\n  2. 首次启动时，OurPlay会自动初始化并安装所需的谷歌环境。\n  3. 您可以直接在OurPlay空间内下载和运行需要GMS的应用和游戏。\n\n### 方法二：手动刷入GMS包 (高级用户)\n\n如果您是高级用户，并且您的设备已经解锁Bootloader并刷入了第三方Recovery（如TWRP），您也可以选择手动刷入GMS刷机包。这种方法较为复杂，且有一定风险，不推荐新手尝试。\n\n**总结**：对于绝大多数用户，使用“Go谷歌安装器”是安装谷歌服务最方便、最可靠的选择。"
    }
  ]
};

export function getStaticAppData(): AppData {
  return staticAppData;
}

export async function getAppData(): Promise<AppData> {
  const apiUrl = process.env.DATA_API_URL;

  if (!apiUrl) {
    console.log("[DEBUG] DATA_API_URL not found, falling back to static data.");
    return getStaticAppData();
  }

  try {
    console.log(`[DEBUG] Attempting to fetch data from: ${apiUrl}`);
    const response = await fetch(apiUrl, { cache: 'no-store' });
    
    if (!response.ok) {
      console.error(`[DEBUG] API response not OK. Status: ${response.status}`);
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data: AppData = await response.json();
    console.log("[DEBUG] Successfully fetched and parsed data from API.");
    return data;

  } catch (error) {
    console.error("[DEBUG] Fetch API call failed. This is likely a network issue (DNS, firewall, etc.) or invalid JSON. Full error:", error);
    console.log("[DEBUG] Falling back to static data due to fetch failure.");
    return getStaticAppData();
  }
}

export function getArticleBySlug(articles: Article[], slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
