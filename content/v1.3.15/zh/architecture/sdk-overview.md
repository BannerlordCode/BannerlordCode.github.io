---
title: "SDK 分层概览"
description: "Bannerlord modding SDK 的分层心智模型：Foundation ← Campaign ← Mission ← UI 的依赖方向与各 TaleWorlds.* 程序集职责，并给出按层阅读入口的枢纽页。"
---

# SDK 分层概览

> 本文是「缺大局观」的解药：先给你一张从上往下看的分层地图和一条阅读主线，再让你知道每一层去哪篇文档深挖。读完它，你不必再面对 A–Z 的类名墙。

## 一句话定位

Bannerlord 的托管代码不是一堆平铺的类，而是一组**严格分层、依赖向下**的 `TaleWorlds.*` 程序集；mod 代码挂在最上面，可以触及任意层，但只有理解「谁依赖谁」，才知道该从哪一层下手、以及为什么某一层的对象不能塞进另一层。

## 心智模型

把整个 SDK 想象成一栋楼，地基在下、应用在上。**依赖方向只能向下**：上层认识下层，下层从不知道上层存在。

```
        UI 层 (GauntletUI / ViewModel)
             │  依赖
             ▼
       Mission 层 (MissionSystem)
             │  依赖
             ▼
      Campaign 层 (CampaignSystem)
             │  依赖
             ▼
    Foundation 层 (Core / Library / Localization)
             │
             ▼
        Native 引擎 (TaleWorlds.Native.dll)
```

用箭头写成 `Foundation ← Campaign ← Mission ← UI`，意思是「左被右依赖」：UI 依赖 Mission，Mission 依赖 Campaign，Campaign 依赖 Foundation。

**为什么分层重要（以及为什么互相隔离）**

- **持久化与运行时隔离**：`Campaign` 持有可跨存档保存的世界状态，`Mission` 只是单场战斗的短寿命容器。把 `Agent` 当战役对象存、或把 `Hero` 当场景对象缓存，都会在读档或场景切换时崩溃。属于某一层的数据，必须留在那一层的拥有者里。
- **UI 与逻辑隔离**：`ViewModel` 只负责把数据投影到屏幕，不持有规则；规则在 `CampaignBehavior` / `MissionBehavior`，状态在 `Campaign` / `Mission`。UI 层不能反过来决定何时结束一场战斗。
- **平台与引擎隔离**：`Localization` 和 `Core` 提供与具体场景无关的基础类型（`TextObject`、`MBObjectManager`、数学库），所以它们被所有人依赖，却自己不依赖任何人。这让战役 mod 和战斗 mod 可以复用同一套对象系统，而互不耦合。

> 新手记住一句话：绝大多数 mod 只碰最上面的三层——**Campaign（世界规则）、Mission（单场战斗）、UI（界面）**；需要持久化时再下探一层到 **SaveSystem**；只有做底层类型或本地化时才触及 **Foundation**。

## 分层地图

下面按「谁依赖谁」的顺序（从地基到顶层）列出 modding 最高频的 `TaleWorlds.*` 程序集，以及每层的深度枢纽页。

```
┌──────────────────────────────────────────────────────────────────┐
│ Foundation 层  — 地基，谁都依赖它，它不依赖任何人                 │
│                                                                    │
│  TaleWorlds.Core         对象系统 / MBObjectManager / ItemObject   │
│                           Game / MBSubModuleBase（模块入口基类）   │
│  TaleWorlds.Library       数学(Vec3/Mat3)、MBList、InformationManager│
│  TaleWorlds.Localization  TextObject / MBTextManager（面向玩家文本）│
├──────────────────────────────────────────────────────────────────┤
│ SaveSystem 层 — 持久化（可独立存在，Campaign/Mission 需要它）      │
│                                                                    │
│  TaleWorlds.SaveSystem    SaveManager / SaveContext / LoadContext  │
│                           [SaveableField]/[SaveableProperty]        │
├──────────────────────────────────────────────────────────────────┤
│ Campaign 层  — 战役世界（长期运行、可存档）                        │
│                                                                    │
│  TaleWorlds.CampaignSystem  Campaign / Hero / Clan / Settlement    │
│                           Kingdom / MobileParty / Actions / Models │
├──────────────────────────────────────────────────────────────────┤
│ Mission 层  — 单场战斗/场景（短寿命运行时容器）                    │
│                                                                    │
│  TaleWorlds.MissionSystem  Mission / Agent / Team / Formation      │
│                           MissionBehavior / MissionLogic           │
├──────────────────────────────────────────────────────────────────┤
│ UI 层  — 把数据投影到屏幕（依赖下面各层的状态）                    │
│                                                                    │
│  TaleWorlds.GauntletUI     ViewModel / GauntletMovie / Widget      │
└──────────────────────────────────────────────────────────────────┘
```

各层职责与深度文档入口：

| 层 | 程序集 | 它负责什么 | 深度枢纽页 |
|---|---|---|---|
| Foundation | `TaleWorlds.Core` | 模块入口基类 `MBSubModuleBase`、一局会话的 `Game`、对象注册表 `MBObjectManager`、核心数据类型（`ItemObject`/`CharacterObject`）。所有上层都从它取得对象与运行期根。 | [MBSubModuleBase](../../api/core/MBSubModuleBase/) · [Game](../../api/core-extra/Game/) |
| Foundation | `TaleWorlds.Library` | 向量数学、集合、调试与玩家消息（`InformationManager`）。几乎每个文件都 `using`。 | （文档进行中） |
| Foundation | `TaleWorlds.Localization` | 所有面向玩家文本的必经之地：`TextObject` 与 `MBTextManager`。 | [MBTextManager](../../api/localization/MBTextManager/) |
| SaveSystem | `TaleWorlds.SaveSystem` | 存档总管 `SaveManager`，配合 `[SaveableField]`/`[SaveableProperty]` 把对象图写入 `.sav`。 | [SaveManager](../../api/save-system/SaveManager/) |
| Campaign | `TaleWorlds.CampaignSystem` | 战役世界：英雄、家族、聚落、王国、部队，以及每日 tick 的 `CampaignBehavior`、事件总线和算法 `Models`。 | [Campaign](../../api/campaign/Campaign/) · [Hero](../../api/campaign/Hero/) · [Clan](../../api/campaign/Clan/) · [Settlement](../../api/campaign/Settlement/) · [MobileParty](../../api/campaign/MobileParty/) |
| Mission | `TaleWorlds.MissionSystem`（位于 `TaleWorlds.MountAndBlade`） | 单场战斗：场景中的单位 `Agent`、阵营 `Team`、编队 `Formation`，以及行为 `MissionBehavior` / 结束裁决 `MissionLogic`。 | [Mission](../../api/mission/Mission/) · [Agent](../../api/mission/Agent/) · [MissionBehavior](../../api/mission/MissionBehavior/) |
| UI | `TaleWorlds.GauntletUI` | 双向数据绑定的 `ViewModel`、加载 `.prefab` 的 `GauntletMovie`、渲染 `Widget`。 | [ViewModel](../../api/core-extra/ViewModel/) |

> 注意：`Mission` 与 `MBSubModuleBase` 在二进制里属于 `TaleWorlds.MountAndBlade` 程序集，但按职责分别归入「Mission 层」与「Foundation/模块入口」。文档命名空间（`mission/`、`core/`）表达的是职责，不是 DLL 文件名。

## 推荐阅读顺序

按层从下往上读，每读一层就点进右边的枢纽页：

1. **先懂入口**：[模块系统](../module-system/) → [MBSubModuleBase](../../api/core/MBSubModuleBase/) 搞清楚「我的代码什么时候被调用」。
2. **再懂会话根**：[Game](../../api/core-extra/Game/) 理解一局游戏从创建、运行到销毁的边界。
3. **做世界规则**：[Campaign](../../api/campaign/Campaign/) 及其子页（[Hero](../../api/campaign/Hero/)、[Clan](../../api/campaign/Clan/)、[Settlement](../../api/campaign/Settlement/)、[MobileParty](../../api/campaign/MobileParty/)）。
4. **做单场战斗**：[Mission](../../api/mission/Mission/) → [Agent](../../api/mission/Agent/) → [MissionBehavior](../../api/mission/MissionBehavior/)。
5. **加界面**：[ViewModel](../../api/core-extra/ViewModel/)（底层数据类型复用 [Game](../../api/core-extra/Game/) 的对象注册表）。
6. **要持久化**：[SaveManager](../../api/save-system/SaveManager/) 与存档边界。
7. **要本地化**：[MBTextManager](../../api/localization/MBTextManager/)。

## 枢纽入口

不想按层读，也可以从这些已完成的深度页直接跳转：

- **模块入口与生命周期**：[MBSubModuleBase](../../api/core/MBSubModuleBase/)
- **会话与世界根**：[Game](../../api/core-extra/Game/)
- **战役世界**：[Campaign](../../api/campaign/Campaign/)
- **单场战斗**：[Mission](../../api/mission/Mission/)
- **存档总管**：[SaveManager](../../api/save-system/SaveManager/)
- **界面数据绑定**：[ViewModel](../../api/core-extra/ViewModel/)
- **本地化文本**：[MBTextManager](../../api/localization/MBTextManager/)

## 导航

- [↑ 架构总览](../)
- [↔ 开发者路线图](../developer-roadmap) · [↔ 崩溃与存档边界](../crash-boundaries) · [↔ 模块系统](../module-system)
- 相关类页：[MBSubModuleBase](../../api/core/MBSubModuleBase/) · [Game](../../api/core-extra/Game/) · [Campaign](../../api/campaign/Campaign/) · [Mission](../../api/mission/Mission/) · [SaveManager](../../api/save-system/SaveManager/) · [ViewModel](../../api/core-extra/ViewModel/) · [MBTextManager](../../api/localization/MBTextManager/)
