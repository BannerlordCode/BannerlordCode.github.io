---
title: "SDK 分层概览"
description: "Bannerlord v1.5.3 modding SDK 的大局观：五层依赖模型、每层负责什么、mod 开发者从哪切入，以及每个入口类的源码位置与当前文档覆盖状态。"
---

# SDK 分层概览

> 这是「缺大局观」的解药。先给你一张从上往下看的分层地图和一条阅读主线，再告诉你每一层去哪深挖。读完它，你不必面对 A–Z 的类名墙。

## 一句话定位

v1.5.3 的托管代码是一组**严格分层、依赖只能向下**的 `TaleWorlds.*` 程序集。mod 代码挂在最上面，可以触及任意层；但只有先知道「谁依赖谁」，你才知道该从哪一层下手、以及为什么某一层的对象不能塞进另一层。

## 心智模型

把 SDK 想象成一栋楼，**地基在下、应用在上**。上层认识下层，下层从不知道上层存在：

```
   ┌────────────────────────────────────────────────────────────┐
   │ UI 层        GauntletUI · ScreenSystem · ViewModelCollection │
   │                  │ 依赖                                      │
   │                  ▼                                          │
   │ Mission 层   MountAndBlade · CustomBattle · Multiplayer     │
   │                  │                                          │
   │                  ▼                                          │
   │ Campaign 层  CampaignSystem · ObjectSystem · ActivitySystem  │
   │                  │                                          │
   │                  ▼                                          │
   │ Foundation 层 Core · Library · DotNet · Localization         │
   │                  │                                          │
   │                  ▼                                          │
   │ Native 引擎   TaleWorlds.Native.dll（P/Invoke）              │
   └────────────────────────────────────────────────────────────┘
```

写成 `Foundation ← Campaign ← Mission ← UI`，意思是「左被右依赖」：UI 依赖 Mission，Mission 依赖 Campaign，Campaign 依赖 Foundation。

**为什么分层要这样切**

- **持久化与运行时隔离**：`Campaign` 持有可跨存档保存的世界状态；`Mission` 只是单场战斗的短寿命容器。把 `Agent` 当战役对象存进存档，或把 `Hero` 缓存进场景对象，读档/切场景时就会崩。属于某一层的数据必须留在该层的拥有者里。
- **UI 与逻辑隔离**：`ViewModel` 只把数据投影到屏幕，不持有规则。规则在 `CampaignBehavior` / `MissionBehavior`，状态在 `Campaign` / `Mission`。UI 不能反过来决定「何时结束一场战斗」。
- **平台与引擎隔离**：`Localization`、`Library` 提供与场景无关的基础类型，所以人人都依赖它、它谁都不依赖。这让战役 mod 和战斗 mod 能复用同一套对象系统而互不耦合。

> **mod 绝大多数只碰最上面三层**：Campaign（世界规则）、Mission（单场战斗）、UI（界面）。需要持久化再下探一层到 SaveSystem；只有做底层类型或本地化时才触及 Foundation。

## 各层职责与入口类

下表的每个入口类都给了 1.5.3 源码里的真实路径，可直接核对。「文档桶」列是命名空间归属，
**不是**可点击的目录 —— 桶索引页尚未撰写，见本页末「文档覆盖现状」。

| 层 | 程序集 | 它负责什么 | 入口类与源码路径 | 文档桶 |
|---|---|---|---|---|
| Foundation | `TaleWorlds.Core` | 一局会话的 `Game`、模块相关核心类型 | `bannerlord-1.5.3/TaleWorlds.Core/Game.cs` | `core-extra` |
| Foundation | `TaleWorlds.Library` | 向量数学、集合、`ViewModel` 基类 | `bannerlord-1.5.3/TaleWorlds.Library/ViewModel.cs` | `core-extra` |
| Foundation | `TaleWorlds.DotNet` | 反射、扩展、平台抽象 | `bannerlord-1.5.3/TaleWorlds.DotNet/` | `core-extra` |
| Foundation | `TaleWorlds.Localization` | 一切面向玩家的文本必经之地 | `bannerlord-1.5.3/TaleWorlds.Localization/TextObject.cs` | `localization` |
| Foundation | `TaleWorlds.InputSystem` | 键鼠/手柄输入 | `bannerlord-1.5.3/TaleWorlds.InputSystem/` | `system` |
| Module entry | `TaleWorlds.MountAndBlade` | **模块入口基类**（二进制上属于 M&B，职责上是 Foundation） | `bannerlord-1.5.3/TaleWorlds.MountAndBlade/MBSubModuleBase.cs` | `core` |
| Object system | `TaleWorlds.ObjectSystem` | 对象注册表 `MBObjectManager`，序列化对象身份 | `bannerlord-1.5.3/TaleWorlds.ObjectSystem/MBObjectManager.cs` | `campaign-ext` |
| Persistence | `TaleWorlds.SaveSystem` | 存档总管，配合 `[SaveableField]` / `[SaveableProperty]` | `bannerlord-1.5.3/TaleWorlds.SaveSystem/SaveManager.cs` | `save-system` |
| Module loading | `TaleWorlds.ModuleManager` | 模块发现与装载顺序 | `bannerlord-1.5.3/TaleWorlds.ModuleManager/` | `modulemanager` |
| Campaign | `TaleWorlds.CampaignSystem` | 战役世界：英雄、家族、聚落、王国、部队、`CampaignBehavior` | `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Campaign.cs` | `campaign` |
| Campaign | `TaleWorlds.ActivitySystem` | 活动/决策子系统 | `bannerlord-1.5.3/TaleWorlds.ActivitySystem/` | `activitysystem` |
| Campaign | `TaleWorlds.AchievementSystem` | 成就子系统 | `bannerlord-1.5.3/TaleWorlds.AchievementSystem/` | `achievementsystem` |
| Mission | `TaleWorlds.MountAndBlade` | 单场战斗：`Mission`、`Agent`、`Team`、`Formation` | `bannerlord-1.5.3/TaleWorlds.MountAndBlade/Mission.cs` | `mission` |
| Mission | `TaleWorlds.MountAndBlade.CustomBattle` | 自定义战斗流程 | `bannerlord-1.5.3/TaleWorlds.MountAndBlade.CustomBattle/` | `custombattle` |
| UI | `TaleWorlds.ScreenSystem` | 屏幕栈与 `ScreenManager` | `bannerlord-1.5.3/TaleWorlds.ScreenSystem/ScreenManager.cs` | `gui` |
| UI | `TaleWorlds.GauntletUI` | 双向数据绑定的 `GauntletMovie` / `Widget` | `bannerlord-1.5.3/TaleWorlds.GauntletUI/` | `gui` |
| UI | `TaleWorlds.TwoDimension` | 2D 渲染后端 | `bannerlord-1.5.3/TaleWorlds.TwoDimension/` | `gui` |
| UI | `*.ViewModelCollection` | 各领域 ViewModel 集合 | `bannerlord-1.5.3/TaleWorlds.CampaignSystem.ViewModelCollection/` | `viewmodel` |
| Engine | `TaleWorlds.Engine` | 场景、地形、渲染绑定 | `bannerlord-1.5.3/TaleWorlds.Engine/` | `engine` |
| Platform | `TaleWorlds.Diamond` | 在线服务抽象（配 `.AccessProvider.{GDK,GOG,Steam,Test}`） | `bannerlord-1.5.3/TaleWorlds.Diamond/` | `engine` |
| Network | `TaleWorlds.Network` | 网络传输层 | `bannerlord-1.5.3/TaleWorlds.Network/` | `network` |
| Gameplay | `SandBox` / `StoryMode` | 两个可玩战役模块及其 UI | `bannerlord-1.5.3/SandBox/SandBoxGameManager.cs` | `sandbox` · `storymode` |

> **注意桶名 ≠ 程序集名。** 文档桶按「职责」划分，不按 DLL 文件名。`TaleWorlds.MountAndBlade`
> 一个程序集被拆进了 `core`、`mission` 和 `mission-ext` 三个桶，因为 `MBSubModuleBase` 是模块入口、
> `Mission`/`Agent`/`Formation`/`MissionState`/`MissionBehavior` 是战斗门面、其余是战斗扩展。
> `TaleWorlds.ObjectSystem` 落在 `campaign-ext` 而不是单开一个桶。
> 完整规则与逐桶类型数见 [模块地图](../module-map)。

## 推荐阅读顺序

从下往上读，每读一层就去找对应页面。**只有标了链接的才有页面**；标「尚未撰写」的直接去源码路径读。

1. **先懂入口**：[MBSubModuleBase](../../api/core/MBSubModuleBase) —— 我的代码什么时候被调用。
   1.5.3 的关键回调是 `OnGameStart(Game, IGameStarter)`（注意不是旧版的 `IModularState`）、
   `OnCampaignStart`、`OnMissionBehaviorInitialize`、`OnGameEnd`。
2. **再懂会话根**：`Game`（`TaleWorlds.Core/Game.cs`）—— 一局游戏从创建、运行到销毁的边界。
   **这一层尚未撰写类型页**。
3. **做世界规则**：[Campaign](../../api/campaign/Campaign) → [CampaignData](../../api/campaign/CampaignData)
   → [CampaignGameStarter](../../api/campaign/CampaignGameStarter)（注册行为与模型的地方）
   → [GameModels](../../api/campaign/GameModels)（算法模型总入口）。
   `Hero` / `Clan` 这两个最常被 mod 引用的类型在 `TaleWorlds.CampaignSystem/`，属 `campaign` 桶，
   **尚未撰写**。
4. **做单场战斗**：[Mission](../../api/mission/Mission) → [MissionState](../../api/mission/MissionState)。
   `Agent` / `Formation` / `MissionBehavior` 同属 `mission` 桶的 5 个门面类型，
   **后三者尚未撰写**（`MissionBehavior` 页面尚未撰写；`Agent`、`Formation` 尚未撰写）。
5. **加界面**：[ScreenManager](../../api/gui/ScreenManager) → [ScreenBase](../../api/gui/ScreenBase)
   → [GauntletLayer](../../api/engine/GauntletLayer)（1.5.3 里 `GauntletLayer` 归 `engine` 桶，不是 `gui`）。
   `ViewModel` 基类在 `TaleWorlds.Library/ViewModel.cs`，**尚未撰写**。
6. **挂行为**：行为基类在 `campaign` 桶而管理器在 `campaign-ext` 桶，这个跨桶关系值得单独记住：
   [CampaignBehaviorBase](../../api/campaign/CampaignBehaviorBase)（写行为）
   + [ICampaignBehavior](../../api/campaign/ICampaignBehavior)（接口）
   + [CampaignBehaviorManager](../../api/campaign-ext/CampaignBehaviorManager)（谁在回调它）。
   想换默认算法就配 [DefaultSettlementProsperityModel](../../api/campaign-ext/DefaultSettlementProsperityModel)
   这一类 `GameModel` 实现，配合 [GameModel](../../api/core-extra/GameModel) /
   [MBGameModel](../../api/core-extra/MBGameModel) / [GameModelsManager](../../api/core-extra/GameModelsManager)。
7. **要持久化**：[SaveManager](../../api/save-system/SaveManager) 与存档边界，配合
   [SaveContext](../../api/save-system/SaveContext) / [ISaveDriver](../../api/save-system/ISaveDriver) /
   [SaveableTypeDefiner](../../api/save-system/SaveableTypeDefiner)。
8. **要本地化**：`TextObject` / `MBTextManager`（`TaleWorlds.Localization/TextObject.cs`）——
   `localization` 桶 21 个类型**全部尚未撰写**。

## 我该从哪切入

| 你要做的事 | 切入桶 | 第一个要读的类 | 有页面吗 |
|---|---|---|---|
| 加一个新模块 | `core` | `MBSubModuleBase` | 有 —— [MBSubModuleBase](../../api/core/MBSubModuleBase) |
| 改战役规则 / 加数值 | `campaign` | `Campaign`、`CampaignBehaviorBase` | 有 —— [Campaign](../../api/campaign/Campaign) · [CampaignBehaviorBase](../../api/campaign/CampaignBehaviorBase) |
| 换默认算法模型 | `campaign-ext` + `core-extra` | `DefaultSettlementProsperityModel`、`GameModel` | 有 —— [DefaultSettlementProsperityModel](../../api/campaign-ext/DefaultSettlementProsperityModel) · [GameModel](../../api/core-extra/GameModel) |
| 挂战役行为 | `campaign-ext` | `CampaignBehaviorManager` | 有 —— [CampaignBehaviorManager](../../api/campaign-ext/CampaignBehaviorManager) |
| 改战斗逻辑 | `mission-ext` | `MissionBehavior`、`MissionLogic` | **尚未撰写**（桶内 2 065 个类型，0 篇） |
| 加一个界面 | `gui` + `viewmodel` | `ScreenBase`、`ViewModel` | `ScreenBase` 有 —— [ScreenBase](../../api/gui/ScreenBase)；`ViewModel` **尚未撰写** |
| 让数据能存档 | `save-system` | `SaveManager`、`SaveableTypeDefiner` | 有 —— [SaveManager](../../api/save-system/SaveManager) · [SaveableTypeDefiner](../../api/save-system/SaveableTypeDefiner) |
| 改本地化文本 | `localization` | `TextObject`、`MBTextManager` | **尚未撰写**（桶内 21 个类型，0 篇） |
| 改注册表 / 物品与角色模型 | `campaign-ext` | `MBObjectManager`、`ItemObject` | **尚未撰写** |

## 文档覆盖现状（别被上表骗了）

1.5.3 源码扫描到 **6 824 个非噪声类型**，本版本只有 **27 篇**手写类型页，覆盖率 **0.4%**。
上表里标「尚未撰写」的行是真的没有页面，不是「链接坏了」—— 桶索引页同样不存在。
逐桶的缺口数字见 [版本首页](../) 与 [模块地图](../module-map)。

---

## 导航

- [↑ 架构总览](../
- [模块地图](../module-map) · [从 1.4.5 迁移](../migration-from-1.4.5) · [↑ 版本首页](../../)