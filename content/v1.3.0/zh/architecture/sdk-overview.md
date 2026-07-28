---
title: SDK 总览 — 模块地图与开发者路线图
description: Bannerlord SDK 全模块地图、分层架构与 mod 开发者路线图（v1.3.0）
---
# SDK 总览 — 模块地图与开发者路线图

> 本文不是模块清单，而是一张**开发者路线图**。它回答三个问题：每一层**为什么存在**、你**什么时候会碰到**它、以及如何**跳去对应的 API 文档**。

## 一句话定位

Bannerlord 的托管代码是一组**严格分层**的 `TaleWorlds.*` 程序集：

```
Foundation → Systems → Core → Engine → UI → MountAndBlade → Campaign → Platform
```

**依赖方向自下而上**：上层引用下层，下层不引用上层。mod 代码在最顶层，可以触及任意层。**新手只看上四层（Campaign、Mission、UI、Save）即可起步**。

---

## 开始之前 / Before You Start

阅读本文前，建议先准备好 Mount & Blade II: Bannerlord v1.3.0、安装好 .NET Desktop Development 工作负载的 Visual Studio 2022，并具备基础 C# 与 XML 阅读能力。如果你还没有创建过第一个 SubModule，可以先从[开发指南](../../guide/)开始。

---

## 文档结构与导航

本站现在使用基于区段树（`section-tree.json`）的侧边栏：版本 → 语言 → 类别 → 章节，每层都可以返回上级。顶部导航会记住你当前所在的页，切换语言 / 版本时不会丢位置；面包屑让你随时回到父目录。所有生成的内部链接都经过 `tools/audit-links.mjs`（源 Markdown）检查。

内容入口分四类：

- **架构 (architecture)：** 本文这样的模块地图与开发者路线图。
- **开发指南 (guide)：** 针对具体系统的实战流程。
- **API 参考 (api)：** 每个类的说明、心智模型、签名与代码示例。
- **跨版本对比 (versions)：** 自动生成的类 API 差异页。

## 如何快速找到类

API 目录（如 [Campaign API](../../api/campaign/)）不再是一大堆按字母排序的类名，而是按命名空间/功能模块分组整理成的目录树：

- 想找王国与阵营逻辑 → `Campaign` 模块 → 王国/政治相关类
- 想找部队移动与 AI → `Campaign` 模块 → 部队/移动相关类
- 想找战斗/任务扩展 → `Mission` 或 `Mission-Ext` 模块 → 对应子系统组
- 每个类页顶部都有面包屑，可随时回到 API 目录或 SDK 总览

> 高频核心类（Tier-S）优先由人工编写完整文档；其余类通过生成器保证无遗漏，并持续提升描述质量。

---

## Parent Navigation

- [首页 / Home](../../)
- [架构总览 / Architecture](./)
- [API 目录](../../api/)
- [开发指南](../../guide/)

## Sibling Navigation

| 页面 | 解决什么问题 |
|------|------------|
| [模块系统](../module-system/) | `MBSubModuleBase` 生命周期与行为注册 |
| [存档系统](../save-system/) | `[SaveableField]` 与 `SaveManager` 的使用方式 |
| [版本差异](../version-delta/) | v1.3.0、v1.3.15、v1.4.5 之间的差异 |
| [原生互操作](../native-interop/) | C# 如何调用 `TaleWorlds.Native.dll` |
| [模组之旅](../../guide/) | 从想法到第一个可运行 Mod 的入口集合 |
| [战役基础](../../guide/campaign-basics/) | 战役系统、Behavior 与事件入门 |
| [任务基础](../../guide/mission-basics/) | Mission、Agent 与战斗逻辑入门 |
| [UI 基础](../../guide/ui-basics/) | Gauntlet / ViewModel 入门 |

---

## 分层依赖图

```
┌─────────────────────────────────────────────────────────────┐
│ Layer 7  平台与服务 Platform & Services                       │
│   ModuleManager · PlatformService · PlayerServices            │
├─────────────────────────────────────────────────────────────┤
│ Layer 6  战役 Campaign  ← 90% 战役 mod 在这里                 │
│   CampaignSystem · CampaignSystem.ViewModelCollection         │
│   Hero · MobileParty · Kingdom · Clan · Settlement · Town     │
├─────────────────────────────────────────────────────────────┤
│ Layer 5  战斗 MountAndBlade  ← 90% 战斗 mod 在这里            │
│   Mission · Agent · Formation · Team · MissionBehavior        │
├─────────────────────────────────────────────────────────────┤
│ Layer 4  UI 框架 Gauntlet                                    │
│   GauntletUI · ViewModel · GauntletMovie · Widget             │
├─────────────────────────────────────────────────────────────┤
│ Layer 3  引擎桥接 Engine                                     │
│   Scene · GameEntity · MatrixFrame · NavigationSystem         │
├─────────────────────────────────────────────────────────────┤
│ Layer 2  核心数据 Core                                       │
│   ItemObject · CharacterObject · Equipment · MBObjectManager  │
├─────────────────────────────────────────────────────────────┤
│ Layer 1  系统基座 Systems                                    │
│   ObjectSystem · ScreenSystem · InputSystem · Network         │
├─────────────────────────────────────────────────────────────┤
│ Layer 0  基础库 Foundation                                   │
│   Library · Localization (TextObject)                         │
└─────────────────────────────────────────────────────────────┘
        ↕ 全程依赖 Native 引擎 (TaleWorlds.Native.dll)
```

---

## 决策表：我想做 X，该碰哪几层？

| 我想做的事 | 层 | 入口类 / 机制 | 文档起点 |
|-----------|----|--------------|---------|
| 注册一个 mod（游戏启动钩子） | L7 + L5 | [`MBSubModuleBase`](../../api/core/MBSubModuleBase/) · `ModuleInfo` | [开发指南](../../guide/) |
| 加新兵种 / 物品 / 装备 | L2 + XML | [`ItemObject`](../../../../versions/ItemObject/) · `CharacterObject` · `MBObjectManager` | [Core API](../../api/core/) · [核心扩展 API](../../api/core-extra/) |
| 做战役 mod（每日 tick、行为、王国逻辑） | L6 | [`CampaignBehaviorBase`](../../api/campaign/CampaignBehaviorBase/) · `CampaignEvents` | [Campaign API](../../api/campaign/) · [战役基础](../../guide/campaign-basics/) |
| 做战斗 / 任务 mod | L5 | [`MissionBehavior`](../../api/mission/MissionBehavior/) · `MissionLogic` · `Agent` · `Formation` | [Mission API](../../api/mission/) · [任务基础](../../guide/mission-basics/) |
| 加自定义 UI 屏 | L4 + L5 | [`ViewModel`](../../api/core-extra/ViewModel/) · `GauntletMovie` · `ScreenBase` | [GUI API](../../api/gui/) · [UI 基础](../../guide/ui-basics/) |
| 持久化自定义数据到存档 | L5 + L2 | `[SaveableField]` · `[SaveableProperty]` · `SaveManager` | [存档架构](../save-system/) · [存档指南](../../guide/save-system/) |
| 加本地化文本 | L0 | `TextObject` · `MBTextManager` | [Localization API](../../api/localization/) · [UI 基础](../../guide/ui-basics/) |
| 操作场景实体 | L3 | `Scene` · `GameEntity` · `MatrixFrame` | [Engine API](../../api/engine/) |
| 读取玩家输入 | L1 | `InputContext` · `InputKey` | [API 总览](../../api/) |
| 加新的 ViewModel / 数据绑定 | L4 + L1 | [`ViewModel`](../../api/core-extra/ViewModel/) · `DataSourceProperty` | [ViewModel API](../../api/viewmodel/) |
| 自定义战役扩展类型（领地、模板） | L6 + L2 | [`Settlement`](../../../../versions/Settlement/) · `PartyTemplateObject` · `CultureObject` | [Campaign-Ext API](../../api/campaign-ext/) |
| 自定义战斗组件 / Agent 行为 | L5 | `AgentComponent` · `MissionLogic` 子类 | [Mission-Ext API](../../api/mission-ext/) |
| 扩展核心模型（锻造、技能、概念） | L2 | `SkillObject` · `CraftingTemplate` · `BasicCharacterObject` | [Core-Extra API](../../api/core-extra/) |

> **用法**：先确定目标行 → 读对应 API 的入口类签名 → 回这里检查是否需要配合下层（例如战役 mod 几乎都需要存档案）。

---

## 数据流：从 XML 到屏幕

一条典型的“mod 添加新兵种”数据链：

```
SubModule.xml 声明 XML 资源
        │
        ▼
ModuleManager 加载模块
        │
        ▼
MBObjectManager 反序列化 XML → ItemObject / CharacterObject
        │
        ▼
Campaign 启动时实例化为 MobileParty / Hero 的装备
        │
        ▼
Mission 中 Agent 穿戴装备进入战斗
        │
        ▼
Gauntlet ViewModel 把数据绑定到 HUD / Encyclopedia
```

如果任何一步报错，先在 [开发指南](../../guide/) 和 [Core API](../../api/core/) 查原因。

---

## 模块清单（v1.3.0，按层分组）

> 规模：**31 个 TaleWorlds 模块 / 4596 个 .cs 文件 / 5306 个类型**。本版本是 1.3 系列的早期基线。

### Layer 0 — Foundation

| 模块 | 职责 | mod 相关性 |
|------|------|-----------|
| `TaleWorlds.Library` | `Vec3`/`Mat3`/`Vec2` 数学、`MBList`、`InformationManager` 消息、调试 | 几乎每个文件都 `using`；显示提示、做向量数学、写日志 |
| `TaleWorlds.Localization` | `TextObject`、`MBTextManager`、语言数据 | 所有面向玩家文本的必经之地 |

### Layer 1 — Systems base

| 模块 | 职责 | mod 相关性 |
|------|------|-----------|
| `TaleWorlds.ObjectSystem` | `MBObjectManager`、`MBObjectBase`、XML 反序列化 | 从 XML 加载自定义物品/角色 |
| `TaleWorlds.ScreenSystem` | `ScreenBase`/`ScreenManager` 屏幕栈 | 自定义全屏 UI |
| `TaleWorlds.InputSystem` | `InputContext`、按键/手柄 | 自定义快捷键 |

### Layer 2 — Core data

| 模块 | 职责 | mod 相关性 |
|------|------|-----------|
| `TaleWorlds.Core` | `ItemObject`、`Equipment`、`CharacterObject`、锻造/技能/概念 | 定义新兵种、新物品、新装备 |
| `TaleWorlds.Core.ViewModelCollection` | 核心 ViewModel | 配合 L4 做数据绑定 |

### Layer 3 — Engine bridge

| 模块 | 职责 | mod 相关性 |
|------|------|-----------|
| `TaleWorlds.Engine` | `Scene`、`GameEntity`、`MatrixFrame`、`Skeleton` | 操作战斗场景实体、放特效、改位置 |
| `TaleWorlds.NavigationSystem` | Navmesh/寻路 | 自定义 AI 寻路 |

### Layer 4 — Gauntlet UI

| 模块 | 职责 | mod 相关性 |
|------|------|-----------|
| `TaleWorlds.GauntletUI` | `Widget`、`ViewModel` 双向绑定、`GauntletMovie`、动画 | 任何自定义 UI 的基础 |

### Layer 5 — MountAndBlade

| 模块 | 职责 | mod 相关性 |
|------|------|-----------|
| `TaleWorlds.MountAndBlade` | `Mission`、`Agent`、`Formation`、`Team`、`MissionBehavior` | 所有战斗 mod 核心 |
| `TaleWorlds.MountAndBlade.ViewModelCollection` | M&B ViewModel | 战斗 UI 数据绑定 |

### Layer 6 — Campaign

| 模块 | 职责 | mod 相关性 |
|------|------|-----------|
| `TaleWorlds.CampaignSystem` | `MobileParty`、`Hero`、`Kingdom`、`Clan`、`Settlement`、`Town`、`Village`、`Campaign` | 战役 mod 核心 |
| `TaleWorlds.CampaignSystem.ViewModelCollection` | 战役 ViewModel | 战役地图 UI |

### Layer 7 — Platform & services

| 模块 | 职责 | mod 相关性 |
|------|------|-----------|
| `TaleWorlds.ModuleManager` | 模块加载/依赖解析 `ModuleInfo`/`ModuleHelper` | 写 `SubModule.xml`、声明依赖 |
| `TaleWorlds.PlatformService.*` | Steam / Epic / GOG 平台抽象 | 跨平台兼容 |

---

## 链接到关键类

这些类是 mod 开发的高频入口（*号表示自动生成的跨版本对比页已存在）：

- 战役：[`Campaign`](../../api/campaign/Campaign/) · [`CampaignBehaviorBase`](../../api/campaign/CampaignBehaviorBase/) · [`Hero*`](../../../../versions/Hero/) · [`MobileParty*`](../../../../versions/MobileParty/) · [`Kingdom*`](../../../../versions/Kingdom/) · [`Clan*`](../../../../versions/Clan/) · [`Settlement*`](../../../../versions/Settlement/) · [`Town*`](../../../../versions/Town/) · [`Village*`](../../../../versions/Village/)
- 战斗：[`Mission*`](../../../../versions/Mission/) · [`MissionBehavior`](../../api/mission/MissionBehavior/) · [`Agent`](../../api/mission/Agent/) · [`Formation*`](../../../../versions/Formation/) · [`Team`](../../api/mission-ext/Team/)
- 核心：[`ItemObject*`](../../../../versions/ItemObject/) · `CampaignObjectManager` · [`TextObject`](../../api/localization/TextObject/)
- UI：[`ViewModel`](../../api/core-extra/ViewModel/) · [`GauntletMovie`](../../api/gui/GauntletMovie/)
- 存档：`[SaveableField]` · `[SaveableProperty]` · `SaveManager`（详见 [存档架构](../save-system/)）
- 模块入口：[`MBSubModuleBase`](../../api/core/MBSubModuleBase/)

> 注：不存在跨版本页或 API 类页的文件，链接指向目标位置。随着其他子代理完成类页，这些链接将自动生效。

---

## 版本差异速查

| 维度 | v1.3.0（本文档） | v1.3.15 | v1.4.5 |
|------|------------------|--------|--------|
| 模块数 | 31 | 54 | 65 (DLL) |
| 类型数 | 5306 | 5811 | 2523* |
| 关键变化 | 含 SandBox/StoryMode 玩法模块 | `SaveSystem` 独立；平台服务拆分 | 多人/View/Gauntlet 拆分为独立程序集 |

完整对照见跨版本对比 [versions/](../../../../versions/)。

---

## 下一步 / Where to Go Next

- [模块系统](../module-system/) — 代码执行时机与行为注册
- [存档系统](../save-system/) — 自定义数据的持久化
- [版本差异](../version-delta/) — 迁移到 v1.3.15 或 v1.4.5
- [原生互操作](../native-interop/) — 调用原生引擎
- [战役基础](../../guide/campaign-basics/) — 战役系统、Behavior 与事件
- [任务基础](../../guide/mission-basics/) — Mission、Agent 与战斗逻辑
- [UI 基础](../../guide/ui-basics/) — Gauntlet / ViewModel 入门
- [开发指南](../../guide/) — 环境搭建、工程结构、测试与发布
- [常见模式](../../guide/common-issues/) — 常见适配问题与排错
- [跨版本类对比](../../../../versions/) — 迁移前检查 API 变化
