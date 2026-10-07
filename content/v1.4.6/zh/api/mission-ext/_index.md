---
title: "mission-ext 桶 — TaleWorlds.MountAndBlade 的完整 API 面"
description: "mission-ext 收纳按命名空间前缀路由到 TaleWorlds.MountAndBlade 的全部类型：任务运行时、战场物件与攻城器械、战斗内界面绑定、外观层、大厅与库存数据协议。本页给的是按命名空间分组的检索入口，不是全量类型清单；mod 入口类在 mission 桶。"
---

# mission-ext 桶：TaleWorlds.MountAndBlade 的完整 API 面

**先划清边界。** 本桶不是「mod 常用类型精选」，而是**按命名空间前缀路由过来的一整个命名空间根**。权威映射 `tools/_dir-map-canonical.json` 的 `rules[]` 里有两条落到这里：一条是 `TaleWorlds.MountAndBlade → mission-ext`，另一条是 `TaleWorlds.Mission → mission-ext`。凡是声明在这两个前缀下的类型，除被噪声闸门（`excludeNamespaces` / `excludeSuffixes` / `sourceTypoNamespaces`）排除掉的以外，全部在这里，**没有人工挑选的成分**。1.4.5 旧站没有对应的桶拆分，取舍记录在同一个 artifact 的 `parityGaps` 里。

**mod 为什么要查它。** 一场战斗里的单位与命令、任务目标与流程、攻城器械与可交互物、战斗内界面绑定、单位与坐骑的外观生成、联机大厅与物品库存的数据协议——全在这一层。[mission](../mission/) 桶那几张入口类告诉你「怎么进场」，本桶告诉你「进场之后有哪些零件」。

**与 [mission](../mission/) 桶的分工（有意为之的布局，不是重复路由）。** 权威映射的 `entryPointDirs` 用**类型名覆写**把 `Mission`、`MissionBehavior`、`Agent`、`Formation`、`MissionState` 这 5 个名字单独摘到 `mission/`，其余 `TaleWorlds.MountAndBlade` 类型仍按前缀留在本桶。所以：**`mission/` 是入口，`mission-ext/` 是全集**，两边互链——在 `mission/` 页顶部的「本桶是入口，不是全集」那段话指向本页，这里再指回去。

## 已手写的类页（5 张）

- [Team](./Team) — 战斗里的一方（或一方之下的盟友）：十个 `Formation` 槽位、成员 Agent 列表（`TeamAgents` 全量 / `ActiveAgents` 在场）、两个 `OrderController` 组成的命令通道，以及 `TeamAI` / `QuerySystem` / `DetachmentManager` 这一整套队伍 AI；实现 `IMissionTeam`，但源码里没有任何可覆盖成员，mod 实际派生不出来。
- [MBGameManager](./MBGameManager) — 「Mount & Blade 游戏」这一层的生命周期总控，继承 `GameManagerBase`：自身只有 `IsEnding` / `IsLoaded` 两个布尔，做的事是把基类十来个抽象生命周期方法扇出成对 `Module.CurrentModule.CollectSubModules()` 收集到的全部子模块的调用。`public abstract`，但 mod 侧通常只需读 `MBGameManager.Current`。
- [ItemType](./ItemType) — ⚠️ **`internal enum ItemType`（`TaleWorlds.MountAndBlade.Diamond`，26 个成员，0..25），mod 代码引用不了它**。Diamond 大厅/库存数据协议里的物品大类标记，由 `ItemList` 按 `typeId` 反查得出。对物品分类请用 `TaleWorlds.Core` 里公开的嵌套枚举 `ItemObject.ItemTypeEnum`（`TaleWorlds.Core/ItemObject.cs` 第 1301 行）。这一页保留在文档里的理由是读懂引擎内部那条转换链，并避开一个高频名字混淆：现有文档里出现的 `ItemType` 十几次**全部**是 `item.ItemType`（即 `ItemTypeEnum` 的成员用法），跟这个类型无关。
- [MissionLogic](./MissionLogic) — 任务内逻辑的挂载基类（`public abstract class MissionLogic : MissionBehavior`）。它不是一个空壳：`BehaviorType` 覆写把自身标记为 `MissionBehaviorType.Logic`，另声明 7 个战斗结束钩子（`OnEndMissionRequest` / `MissionEnded` / `OnBattleEnded` / `ShowBattleResults` / `OnRetreatMission` / `OnSurrenderMission` / `OnMissionResultReady`）。想写「战斗结束后做点什么」的 mod，覆写入口在这里，而逐帧逻辑挂在 `MissionBehavior` 上。
- [MissionObject](./MissionObject) — 挂在场景 `GameEntity` 上的**战场物件**基类（`public abstract class MissionObject : ScriptComponentBehavior`）。`Id` 是它在任务内的身份（`MissionObjectId`），`IsDisabled` 与 `SetEnabled` / `SetDisabled` 系列控制可用性；生命周期走 `OnPreInit` / `OnInit` / `OnRemoved` 一整套 `ScriptComponentBehavior` 钩子。派生族是攻城器械与可交互物；纯逻辑不要派生它，派生 `MissionBehavior`。

## 按命名空间分组的检索入口

**下面所有规模数字都是文件级的 `.cs` 文件数**，口径统一：在 `bannerlord-1.4.6/` 下对指定模块目录执行 `find <dir> -name '*.cs' | wc -l`（递归，含 `Properties/`）。这是能自己复跑的口径。**桶里有多少个公开类型、最终会有多少张类页，是另一套口径**（要先过噪声闸门、只留 `public` 顶层类型、再去重），见 [mission 桶入口页](../mission/) 开头的说明。想确认某个类型实际落在哪个桶，见 [模块地图](../../architecture/module-map)。

| 命名空间族 | 源码位置 | `.cs` | 代表类型（均在源码中 `grep -w` 核过） |
| --- | --- | --- | --- |
| `TaleWorlds.MountAndBlade` 任务运行时本体 | `TaleWorlds.MountAndBlade/`（顶层 669，递归 1029） | 1029 | `MissionLogic` `MissionTime` `MissionManager` `MissionWeapon` `MissionBoundaryPlacer` `AgentStatCalculateModel` `MBGameManager` `Team` |
| `…MountAndBlade.Missions*` 任务流程与目标 | `TaleWorlds.MountAndBlade/Missions/` | 18 | `MissionObjective` `GenericMissionObjective` `MissionObjectiveProgressInfo` `MissionSiegeWeaponsController` `AgentList` `IMissionSiegeWeaponsController` |
| `…MountAndBlade.Objects*` 战场物件、攻城器械、可交互物 | `TaleWorlds.MountAndBlade/Objects/`（`Siege/` 16、`Usables/` 7） | 31 | `FlagCapturePoint` `StealthBox` `AnimalSpawnSettings` `SpawnerBase` `SiegeTowerSpawner` `BallistaSpawner` `ClimbingMachine` `ArrowBarrel` |
| 可替换的模型接口与生成器 | `ComponentInterfaces/` 15、`AI/` 2、`MissionSpawnHandlers/` 4、`MissionRepresentatives/` 5、`Options/` 8、`DividableTasks/` 2、`GameKeyCategory/` 2 | 38 | `BattleSpawnModel` `BattleInitializationModel` `FormationArrangementModel` `ItemPickupModel` `MissionDifficultyModel` `SiegeWeaponAutoDeployer` `CustomMissionSpawnHandler` `DuelMissionRepresentative` |
| `…MountAndBlade.Source.*` 游戏本体的任务控制器与场景脚本 | `TaleWorlds.MountAndBlade/Source/`（其中 `Missions/` 17） | 20 | `BaseBattleMissionController` `BattleSpawnLogic` `MissionOptionsComponent` `SimpleMountedPlayerMissionController` `HideoutPhasedMissionController` `SceneLeveler` |
| `…MountAndBlade.GauntletUI*` 战斗内界面绑定 | `TaleWorlds.MountAndBlade.GauntletUI/`（顶层 24，递归 66）、`.Widgets/`（顶层 70，递归 402） | 468 | `GauntletOrderUIHandler` `GauntletChatLogView` `GauntletInitialScreen` `GauntletUISubModule` `GauntletCameraFadeView` `ChatLogMessageManager` `LoadingWindowViewModel` `GamepadCursorViewModel` |
| `…MountAndBlade.View*` 外观与视图层 | `TaleWorlds.MountAndBlade.View/` | 172 | `ViewCreator` `ViewCreatorManager` `ViewSubModule` `AgentVisuals` `MountVisualCreator` `BannerVisualCreator` `PreloadHelper` `ItemVisualizer` |
| `…MountAndBlade.Diamond*` 大厅 / 库存数据协议 | `TaleWorlds.MountAndBlade.Diamond/`（顶层 117，递归 379；`Messages/` 230） | 379 | `ClanPlayer` `BattleResult` `BattlePlayerEntry` `BadgeDataEntry` `CosmeticItemInfo` `ChatRoomInformationForClient` `AvailableScenes` `ItemType` |
| `…MountAndBlade.Network.Gameplay.Perks*` 联机加成 | 见下方「模块目录 ≠ 命名空间」 | 86 | `PerkAssemblyCollection` `HealthCondition` `MoraleCondition` `TroopCountCondition` `TroopRoleCondition` `ClosestFlagCondition` |
| `…MountAndBlade.Launcher.Library*` 启动器 | `TaleWorlds.MountAndBlade.Launcher.Library/` | 38 | `LauncherVM` `LauncherModsDLLManager` `LauncherSubModule` `LauncherPlatform` `DependentVersionMissmatchItem` |

### 上面那张表里三个必须说清的坑

**一、`TaleWorlds.MountAndBlade/` 递归 1029 不等于本桶内容。** 该目录下这几个子目录按 artifact 的噪声闸门直接排除，不进任何桶：`NetworkMessages/`（213 个 `.cs`，命名空间 `NetworkMessages.FromClient` / `NetworkMessages.FromServer`）、`JetBrains/`（29，`JetBrains.Annotations`）、`Microsoft/`（1，`Microsoft.CodeAnalysis`）、`System/`（1，`System.Runtime.CompilerServices`）、`SandBox/`（1，命中 `sourceTypoNamespaces` 里的错拼条目 `Sandbox`）。`Properties/` 是程序集属性文件、没有命名空间声明，抽取时直接跳过。另有 `MBHelpers/`（1 个 `.cs`）没命中任何前缀规则，落默认桶 `core-extra`。

**二、模块目录 ≠ 命名空间。** 找类型要按 **namespace** 找，不是按同名目录找。最能说明问题的是 `TaleWorlds.MountAndBlade.Network.Gameplay.Perks` 这一族：86 个 `.cs` 里只有 2 个在 `TaleWorlds.MountAndBlade/Network/Gameplay/Perks/` 下，其余 84 个物理上躺在两个 `TaleWorlds.MountAndBlade.Multiplayer*` 模块目录里（12 + 30 各一份，两个目录各重复一遍）。噪声闸门排除的是**命名空间** `TaleWorlds.MountAndBlade.Multiplayer*`，所以这些文件虽然住在联机模块里，命名空间不属于被排除的那一族，仍按前缀落进本桶。

**三、引擎自动生成的界面绑定类占了很大一块，但它们不写页。** 源码树里有 **233 个**引擎自动生成的 UI 绑定类，类名是「界面名 + 全限定名 + 依赖路径」用双下划线拼起来的字符串，分散在三个目录里（66 + 85 + 82）：

```bash
find TaleWorlds.MountAndBlade.GauntletUI.AutoGenerated.0 \
     TaleWorlds.MountAndBlade.GauntletUI.AutoGenerated.1 \
     TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.AutoGenerate \
     -maxdepth 1 -name '*__*.cs' | wc -l
```

它们声明在 `TaleWorlds.MountAndBlade.GauntletUI.AutoGenerated0` / `AutoGenerated1` 两个命名空间下，按 `rules[]` 的前缀规则落进本桶，但每个类只是「某个 prefab 绑定到某个 ViewModel 的一个依赖槽位」，为它们逐个写页既不可读也没有收益。想找界面绑定，读 `…GauntletUI/` 与 `.Widgets/` 下的手写类（见上表）就够了。

## 查一个类型的两种查法

```bash
# 一、按命名空间找：先看这一族有哪些文件
grep -rln "namespace TaleWorlds.MountAndBlade.Objects" --include=*.cs bannerlord-1.4.6

# 二、按类型名找：定位声明行与所在文件
grep -rn "class SpawnerBase" --include=*.cs bannerlord-1.4.6
grep -rn "enum ItemType" --include=*.cs bannerlord-1.4.6
```

第二条命令的一个实际收获：`enum ItemType` 在全树只命中两处——`TaleWorlds.MountAndBlade.Diamond/ItemType.cs` 的 `internal enum ItemType`，和 `TaleWorlds.Core/ItemObject.cs` 里的 `public enum ItemTypeEnum`。**mod 能引用的永远是后者**，这正是 [ItemType](./ItemType) 那条警告的由来。

## 两条排版前就要知道的判据

**一、`internal` 类型不建页。** 面向 mod 作者的文档只写 mod 能引用得起来的东西。本桶里大量类型是 `internal`（比如上面那个 `ItemType`），它们只在「读引擎内部实现」时有用——所以本桶的类页策略是：**`internal` 类型不单独建页，必要时在对应的 `public` 类型页里说清它在哪条链路上、该改用什么**。反过来，一个 `internal` 类型和一个 `public` 类型同名时，说明写在那个 `public` 类型的页里，不要给 `internal` 的单独开一页。

**二、同名类型跨桶存在，先确认命名空间再点链接。** 同一个简单类型名可以同时存在于多个程序集，因而落在不同桶。最典型的例子是 `AutoGeneratedSaveManager`：它在 8 个程序集里各有一份独立声明（`SandBox`、`StoryMode`、`TaleWorlds.CampaignSystem`、`TaleWorlds.Core`、`TaleWorlds.Localization`、`TaleWorlds.MountAndBlade`、`TaleWorlds.ObjectSystem`、`TaleWorlds.SaveSystem`），全部是 `internal`，共同实现 `IAutoGeneratedSaveManager`。**看到这个名字时，先 `grep -rn "class AutoGeneratedSaveManager"` 确认是哪一份**，不要假设它在存档桶——这些类型按内容判据第 1 条根本不会建页。同理，先 `grep -w` 核一下命名空间，再相信任何一个桶索引里的归类。

## 与邻桶的分工

- [mission](../mission/) — 入口类 carve-out。`Mission` / `MissionBehavior` / `Agent` / `Formation`（以及尚未撰页的 `MissionState`）在那儿，其余本桶类型在这儿。
- [viewmodel](../viewmodel/) — 官方战斗界面与 ViewModel 在 `TaleWorlds.MountAndBlade.ViewModelCollection` 命名空间下，按前缀规则整族划到那边；本桶的 `…GauntletUI*` 是界面**绑定**这一层，`…View*` 是外观生成那一层。
- [custombattle](../custombattle/) — `TaleWorlds.MountAndBlade.CustomBattle` 这一族被单独划出去，自定义战斗有自己的模块、逻辑与界面。
- [core-extra](../core-extra/) — 本桶大量类型的底座在内核桶：`ItemObject`（含 [ItemObject.ItemTypeEnum](../core-extra/ItemObject)）、`GameManagerBase`、`IMissionTeam` 的定义都在那边。
- [core](../core/MBSubModuleBase) — mod 的入口类 `MBSubModuleBase` 源码也在 `TaleWorlds.MountAndBlade` 下，但被 `entryPointDirs` 按类型名覆写到了 `core/`。
- [gui](../gui/ScreenManager) — 任务内的结算与提示界面从 `ScreenManager` 推入；`…GauntletUI*` 里的类不是界面本身，而是界面与 ViewModel 的绑定层。

## 导航

- ↑ 上一级：[API 参考](../) — 全部桶的入口表
- ↔ 兄弟桶：[mission](../mission/)（入口类） · [viewmodel](../viewmodel/)（界面 ViewModel） · [custombattle](../custombattle/)（自定义战斗） · [core](../core/)（模块入口）
- ↔ 跨桶查类型：[模块地图](../../architecture/module-map)
- ↑↑ 语言根：[zh](../../)
- ↑↑↑ 版本首页：[v1.4.6](../../../)
