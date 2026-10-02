---
title: "SDK 分层概览"
description: "Bannerlord v1.5.3 modding SDK 的大局观：五层依赖模型、每层负责什么、mod 开发者从哪切入，以及每个入口类的源码位置。"
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

下表的每个入口类都给了 1.5.3 源码里的真实路径，可直接核对。

| 层 | 程序集 | 它负责什么 | 入口类与源码路径 | 深度目录 |
|---|---|---|---|---|
| Foundation | `TaleWorlds.Core` | 一局会话的 `Game`、模块相关核心类型 | `bannerlord-1.5.3/TaleWorlds.Core/Game.cs` | [core-extra](../../api/core-extra/) |
| Foundation | `TaleWorlds.Library` | 向量数学、集合、`ViewModel` 基类 | `bannerlord-1.5.3/TaleWorlds.Library/ViewModel.cs` | [core-extra](../../api/core-extra/) |
| Foundation | `TaleWorlds.DotNet` | 反射、扩展、平台抽象 | `bannerlord-1.5.3/TaleWorlds.DotNet/` | [core-extra](../../api/core-extra/) |
| Foundation | `TaleWorlds.Localization` | 一切面向玩家的文本必经之地 | `bannerlord-1.5.3/TaleWorlds.Localization/TextObject.cs` | [localization](../../api/localization/) |
| Foundation | `TaleWorlds.InputSystem` | 键鼠/手柄输入 | `bannerlord-1.5.3/TaleWorlds.InputSystem/` | [system](../../api/system/) |
| Module entry | `TaleWorlds.MountAndBlade` | **模块入口基类**（二进制上属于 M&B，职责上是 Foundation） | `bannerlord-1.5.3/TaleWorlds.MountAndBlade/MBSubModuleBase.cs` | [core](../../api/core/) |
| Object system | `TaleWorlds.ObjectSystem` | 对象注册表 `MBObjectManager`，序列化对象身份 | `bannerlord-1.5.3/TaleWorlds.ObjectSystem/MBObjectManager.cs` | [campaign-ext](../../api/campaign-ext/) |
| Persistence | `TaleWorlds.SaveSystem` | 存档总管，配合 `[SaveableField]` / `[SaveableProperty]` | `bannerlord-1.5.3/TaleWorlds.SaveSystem/SaveManager.cs` | [save-system](../../api/save-system/) |
| Module loading | `TaleWorlds.ModuleManager` | 模块发现与装载顺序 | `bannerlord-1.5.3/TaleWorlds.ModuleManager/` | [modulemanager](../../api/modulemanager/) |
| Campaign | `TaleWorlds.CampaignSystem` | 战役世界：英雄、家族、聚落、王国、部队、`CampaignBehavior` | `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Campaign.cs` | [campaign](../../api/campaign/) |
| Campaign | `TaleWorlds.ActivitySystem` | 活动/决策子系统 | `bannerlord-1.5.3/TaleWorlds.ActivitySystem/` | [activitysystem](../../api/activitysystem/) |
| Campaign | `TaleWorlds.AchievementSystem` | 成就子系统 | `bannerlord-1.5.3/TaleWorlds.AchievementSystem/` | [achievementsystem](../../api/achievementsystem/) |
| Mission | `TaleWorlds.MountAndBlade` | 单场战斗：`Mission`、`Agent`、`Team`、`Formation` | `bannerlord-1.5.3/TaleWorlds.MountAndBlade/Mission.cs` | [mission](../../api/mission/) |
| Mission | `TaleWorlds.MountAndBlade.CustomBattle` | 自定义战斗流程 | `bannerlord-1.5.3/TaleWorlds.MountAndBlade.CustomBattle/` | [custombattle](../../api/custombattle/) |
| UI | `TaleWorlds.ScreenSystem` | 屏幕栈与 `ScreenManager` | `bannerlord-1.5.3/TaleWorlds.ScreenSystem/ScreenManager.cs` | [gui](../../api/gui/) |
| UI | `TaleWorlds.GauntletUI` | 双向数据绑定的 `GauntletMovie` / `Widget` | `bannerlord-1.5.3/TaleWorlds.GauntletUI/` | [gui](../../api/gui/) |
| UI | `TaleWorlds.TwoDimension` | 2D 渲染后端 | `bannerlord-1.5.3/TaleWorlds.TwoDimension/` | [gui](../../api/gui/) |
| UI | `*.ViewModelCollection` | 各领域 ViewModel 集合 | `bannerlord-1.5.3/TaleWorlds.CampaignSystem.ViewModelCollection/` | [viewmodel](../../api/viewmodel/) |
| Engine | `TaleWorlds.Engine` | 场景、地形、渲染绑定 | `bannerlord-1.5.3/TaleWorlds.Engine/` | [engine](../../api/engine/) |
| Platform | `TaleWorlds.Diamond` | 在线服务抽象（配 `.AccessProvider.{GDK,GOG,Steam,Test}`） | `bannerlord-1.5.3/TaleWorlds.Diamond/` | [engine](../../api/engine/) |
| Network | `TaleWorlds.Network` | 网络传输层 | `bannerlord-1.5.3/TaleWorlds.Network/` | [network](../../api/network/) |
| Gameplay | `SandBox` / `StoryMode` | 两个可玩战役模块及其 UI | `bannerlord-1.5.3/SandBox/SandBoxGameManager.cs` | [sandbox](../../api/sandbox/) · [storymode](../../api/storymode/) |

> **注意桶名 ≠ 程序集名。** 文档目录按「职责」划分，不按 DLL 文件名。`TaleWorlds.MountAndBlade`
> 一个程序集被拆进了 [core](../../api/core/)、[mission](../../api/mission/) 和
> [mission-ext](../../api/mission-ext/) 三个目录，因为 `MBSubModuleBase` 是模块入口、
> `Mission`/`Agent`/`Formation` 是战斗门面、其余是战斗扩展。
> `TaleWorlds.ObjectSystem` 落在 [campaign-ext](../../api/campaign-ext/) 而不是单开一个桶。
> 完整规则见 [模块地图](../module-map)。

## 推荐阅读顺序

从下往上读，每读一层就点进右边的目录：

1. **先懂入口**：[MBSubModuleBase](../../api/core/MBSubModuleBase/) — 我的代码什么时候被调用。
2. **再懂会话根**：[Game](../../api/core-extra/Game/) — 一局游戏从创建、运行到销毁的边界。
3. **做世界规则**：[Campaign](../../api/campaign/Campaign/) 及其同目录页（[Hero](../../api/campaign/Hero/)、[Clan](../../api/campaign/Clan/)、[CampaignBehaviorBase](../../api/campaign/CampaignBehaviorBase/)）。
4. **做单场战斗**：[Mission](../../api/mission/Mission/) → [Agent](../../api/mission/Agent/) → [Formation](../../api/mission/Formation/)。
5. **加界面**：[ViewModel](../../api/core-extra/ViewModel/) + [ScreenManager](../../api/gui/ScreenManager/)。
6. **要持久化**：[SaveManager](../../api/save-system/SaveManager/) 与存档边界。
7. **要本地化**：[TextObject](../../api/localization/TextObject/)（命名空间 `TaleWorlds.Localization`，
   canonical 规则直接判给 [localization](../../api/localization/)，没有被门面规则改写）。

## 我该从哪切入

| 你要做的事 | 切入目录 | 第一个要读的类 |
|---|---|---|
| 加一个新模块 | [core](../../api/core/) | `MBSubModuleBase` |
| 改战役规则 / 加数值 | [campaign](../../api/campaign/) | `Campaign`、`CampaignBehaviorBase` |
| 加一个对话/事件组件 | [campaign-ext](../../api/campaign-ext/) | `CampaignBehaviorBase`（campaign）、`MissionBehavior`（mission-ext） |
| 改战斗逻辑 | [mission-ext](../../api/mission-ext/) | `MissionBehavior`、`MissionLogic` |
| 加一个界面 | [gui](../../api/gui/) + [viewmodel](../../api/viewmodel/) | `ScreenBase`、`ViewModel` |
| 让数据能存档 | [save-system](../../api/save-system/) | `SaveManager`、`SaveableTypeDefiner` |
| 改本地化文本 | [localization](../../api/localization/) | `TextObject`、`MBTextManager`、文本处理器 |
| 改注册表 / 物品与角色模型 | [core-extra](../../api/core-extra/) | `MBObjectManager`、`ItemObject` |

## 导航

- [↑ 架构总览](../)
- [模块地图](../module-map) · [从 1.4.5 迁移](../migration-from-1.4.5) · [↑ 版本首页](../../)
