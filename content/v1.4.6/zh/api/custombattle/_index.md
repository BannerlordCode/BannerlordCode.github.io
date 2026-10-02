---
title: "custombattle 桶 — 自定义对战 TaleWorlds.MountAndBlade.CustomBattle（尚未手写）"
description: "custombattle 桶对应 TaleWorlds.MountAndBlade.CustomBattle 及 3 个子命名空间，实测 40 个顶层类型。本页说明它真正有用的部分是「怎么描述一场自定义对战」这条配置路径，而不是那 40 个类型里的任何一个界面类。"
---
# custombattle：自定义对战（`TaleWorlds.MountAndBlade.CustomBattle*`）

> **本桶当前没有任何已撰写页面。** 结论先给：**mod 对它的兴趣集中在一个很窄的入口上——「从自己的模块里发起一场符合配置的自定义对战」。** 除此之外，绝大多数类型是官方实现与官方界面。

## 这个桶对应源码里的什么

权威映射里 `TaleWorlds.MountAndBlade.CustomBattle` → `custombattle` 是一条**比父前缀 `TaleWorlds.MountAndBlade` 更长**的规则，所以它赢过 [mission-ext](../mission-ext) 的兜底规则。`bannerlord-1.4.6/` 下实际有 4 个相关命名空间：

| 命名空间 | 顶层类型数（实测） |
| --- | --- |
| `TaleWorlds.MountAndBlade.CustomBattle` | 17 |
| `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle` | 11 |
| `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem` | 11 |
| `TaleWorlds.MountAndBlade.CustomBattle.CustomBattleObjects` | 1 |
| `TaleWorlds.MountAndBlade.CustomBattle.Views` | 1 |

**合计 40 个顶层类型**（目录 `TaleWorlds.MountAndBlade.CustomBattle/` 下 41 个 `.cs` 文件，含 `AssemblyInfo.cs`）。

这里有个命名空间的重复要留意：`CustomBattle` 这个名字同时是**程序集根名**、**一个子命名空间**、**一个类型名**，还和一层 `CustomBattle.CustomBattle` 撞名。写文档和写 `using` 时要分清你指的是哪一个。

## mod 什么时候会碰到它

诚实的结论：**只有一种场景值得进这个桶——你想从自己的代码里发起一场自定义对战。**

自定义对战（就是主菜单里那套「自己配双方、地图、兵种、器械、时间」的对战模式）在 1.4.6 里是**数据驱动**的：一场对战由一份配置描述，谁跟谁打、用什么兵、在哪张图、有没有器械。这个桶就是这套配置的模型 + 执行它的模块。

所以对 mod 来说只有两件事有价值：

1. **发起对战** —— 构造一份 `CustomBattleData` / `CustomBattleSceneData`（双方、地图、兵种构成、时间、场景），交给 `CustomBattleSubModule` 那条路径去跑。做「从我的任务里直接开一场 skirmish」这类功能时需要
2. **读当前对战的配置** —— 判断这场自定义对战现在的设置是什么

**其余都是官方实现与官方界面。** 那 40 个类型里有 11 个是 `SelectionItem`（选择界面里的一行：地图项、兵种项、场景项、时间项、赛季项…），6 个左右是 `*VM` 界面数据类。**你不会继承它们，也不会调用它们**——它们是官方「自定义对战」菜单的实现。

**心智模型**：把 `CustomBattleData` / `CustomBattleSceneData` 想成**一份对战的配置单**，`CustomBattleState` 是这份配置在运行时的状态，`CustomBattleSubModule` 是执行者，`*VM` / `SelectionItem` 是让你在界面上编辑这份配置单的官方 UI。mod 要做的是**绕过 UI 直接写配置单**，而不是改 UI。

**边界**：官方自定义对战和 [mission](../mission) 桶里的普通 mission 是两条路。做「战斗内行为」用 [mission](../mission) + [mission-ext](../mission-ext)；做「开一场特定配置的对战」才进本桶。搞混这两条会写出完全不同的代码。

## 一个名字会误导人的类型

`CPUBenchmarkMissionLogic` 和 `CPUBenchmarkMissionSpawnHandler`（都在本桶）——**这是性能基准测试用的 mission 逻辑和生成器，不是玩法功能**。`CPUBenchmark` 是「CPU 跑分」的意思。写文档时不要把它当成一个可复用的对战机制介绍，它属于开发工具。

## 待写清单（节选，14 条已核实类型）

下面每个名字都在 `bannerlord-1.4.6/` 核实过。**这是节选**——本桶 40 个类型里有一半是选择界面项，列出来对读者没用。挑的是 mod 真正会碰的那几个，加上几个必须「认出但别用」的。

**mod 真正会碰的：**

- `CustomBattleData` — 一场自定义对战的整体配置（双方、规则、结果）
- `CustomBattleSceneData` — 战场场景的配置（地图、场景、时间、天气一类）
- `CustomBattleCompositionData` — 双方兵种构成的配置
- `CustomBattlePlayerSide` / `CustomBattlePlayerType` — 玩家在自定义对战里的立场与所属方
- `CustomBattleHelper` — 辅助工具；**注意它在 `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle` 子命名空间里**
- `CustomBattleSubModule` — 执行这套流程的模块入口；和 [core](../core) 的 `Module` 是同一套 `MBSubModuleBase` 机制
- `CustomBattleState` — 配置在运行时的状态

**需要认出、但通常不该用：**

- `CustomBattleScreen` — 官方的自定义对战选择界面
- `CustomBattleVM` / `CustomBattleSideVM` / `CustomBattleSiegeMachineVM` / `CustomBattleTroopTypeVM` / `CustomBattleFactionSelectionVM` — 官方界面的数据类
- `*SelectionGroup` 与 `MapItemVM` / `FactionItemVM` / `GameTypeItemVM` / `PlayerSideItemVM` / `PlayerTypeItemVM` / `SceneLevelItemVM` / `SeasonItemVM` / `TimeOfDayItemVM` / `WallHitpointItemVM` / `TroopTypeSelectionPopUpVM` — 官方选择界面里的每一行，11 个 `SelectionItem` 大多在此
- `CustomBattleProvider` / `CustomBattleViews` / `CustomBattleSceneNotificationContextProvider` — 官方组装界面与通知的内部协作类型
- `CustomGame` / `CustomGameManager` — 自定义游戏的运行态与管理者
- `CustomBattleBannerEffects` / `CustomBattleTimeOfDay` — 展示效果与时间选项
- `CPUBenchmarkMissionLogic` / `CPUBenchmarkMissionSpawnHandler` — **性能基准测试工具，不是玩法**，见上文

**没有页面**。写的时候应该以「怎么从自己的代码发起一场配置好的自定义对战」为主线写一篇教程页，把上面前 7 个类型串起来；剩下的是官方实现，列出来只为了让人认得出。

## 为什么现在还没有页面

1.4.6 的手写覆盖按 **mod 实际使用频率** 排序。本桶排在后段，理由是**频率低但不为零**——比 [modulemanager](../modulemanager) 和 [network](../network) 强（那两个是零），比 [viewmodel](../viewmodel) 和 [mission-ext](../mission-ext) 弱（那两个是高但没轮到）。

1. **入口窄。** 40 个类型里只有约 7 个和「发起对战」这条路径相关，其余是官方界面实现。
2. **多数类型不可继承。** 官方选择界面和实现类没有兼容承诺，继承它们是坏主意。
3. **主用途可能不是 mod。** 自定义对战本身就是给玩家用的玩法，mod 对它的兴趣天然有限。

**这一页不是占位符**——归属规则与 4 个子命名空间的实测数量、命名空间重名提示、配置单心智模型、`CPUBenchmark` 的误导性提示、以及上面 14 条逐个核实过的类型名，都是写教程页时能直接用的素材。

## 导航

- ↑ [API 参考首页](../) — 已手写覆盖到哪里
- ↑↑ [1.4.6 中文首页](../../) · [版本首页](../../../)
- ↔ [模块地图](../../architecture/module-map) · [SDK 分层概览](../../architecture/sdk-overview)
- ↔ English: [API](../../../en/api/)
- ↔ 跨版本：[1.4.5 API](../../../../v1.4.5/zh/api/) · [逐类对比](../../../../versions/)
