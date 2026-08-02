---
title: "MBGameManager"
description: "引擎拥有的游戏总管：创建并持有 Game、按固定顺序把加载/启动/读档/结束各阶段广播给每个已加载模块的 SubModule，是单人战役与战斗启动流程的总指挥。"
---
# MBGameManager

**Namespace:** TaleWorlds.MountAndBlade  
**Module:** TaleWorlds.MountAndBlade  
**Type:** `public abstract class MBGameManager : GameManagerBase`  
**Base:** `GameManagerBase`  
**源文件路径：** `TaleWorlds.MountAndBlade/MBGameManager.cs`（v1.3.15；v1.4.5 同一路径）

## 概述

`MBGameManager` 是引擎在游戏进程启动时创建、并全程持有的**总管（bootstrap 层）**。它本身几乎不“做事”，核心职责是：创建 `Game` 对象，然后按一套固定顺序，把“开始游戏 / 模块注册 / 初始化 / 新游戏创建 / 读档 / 结束”等生命周期事件**逐个广播给所有已加载模块的 `MBSubModuleBase`**。单人战役使用的真实实例是 `SandBoxGameManager`（`MBGameManager` 的子类），由 SandBox / StoryMode 的 SubModule 调用静态方法 `MBGameManager.StartNewGame` 推入加载状态机后产生。模组开发者的所有扩展，最终都经由这些广播钩子进入游戏，而不是直接与 `MBGameManager` 打交道。

## 心智模型

把 `MBGameManager` 理解为**“加载流程的总调度”：它是一台事件广播机，而不是一个你继承或调用的业务对象**。

- **谁创建 / 谁持有它**：引擎（更准确地说是 SandBox 的 `SandBoxGameManager` 等具体子类），通过 `MBGameManager.StartNewGame(new SandBoxGameManager(...))` 建立。其引用同时被存进 `GameManagerBase.Current`，并通过静态属性 `MBGameManager.Current` 暴露给任何已有游戏上下文的代码。
- **所在层**：Foundation / bootstrap 层。它位于 `Game`、`Campaign`、各 `MBSubModuleBase` 之下，是整个进程生命周期的起点。
- **它真正在做什么**：每一个 `On*` / `Register*` / `Begin*` 重写方法体里，几乎都是同一行逻辑——`foreach (MBSubModuleBase item in Module.CurrentModule.CollectSubModules()) item.XXX(...)`。也就是说，MBGameManager 的主要任务是**把阶段事件扇出给所有 SubModule**，少数方法（`OnGameStart`、`OnGameInitializationFinished`）还会顺手做一点引擎级初始化（设置 `MonsterMissionDataCreator`、注册 `MissionGameModels`、`SkeletonScale` 骨骼索引等）。
- **你与它的关系**：模组几乎永远**不要**继承、实例化或 `new` 它。你只会在两种情况下“碰到”它：`MBGameManager.Current`（读取 `IsEnding` / `IsLoaded` 等全局状态）和 `MBGameManager.EndGame()`（请求退出游戏）。真正的扩展入口是 `MBSubModuleBase` 的各加载阶段，以及通过 `CampaignGameStarter.AddBehavior` 注册 `CampaignBehaviorBase`。

## 何时用 / 何时不要用

**不要用 `MBGameManager` 的场景（也是绝大多数模组需求）：**

- 想在新游戏里加一个战役逻辑 → 不要碰 `MBGameManager`，在 `MBSubModuleBase.InitializeGameStarter` 里把行为 `AddBehavior` 到 `CampaignGameStarter`（见下方示例）。
- 想监听“游戏开始 / 读档完成 / 游戏结束” → 在 `MBSubModuleBase` 的 `OnGameStart` / `OnGameLoaded` / `OnGameEnd` 等阶段钩子里写，而不是重写 `MBGameManager` 的方法。
- 想主动结束游戏（如某个 UI 按钮或剧情触发）→ 调用静态方法 `MBGameManager.EndGame()`，而不是 `new` 一个管理器或手动清理状态。

**正确替代总结：** 模组对启动/加载流程的“入口”只有 `MBSubModuleBase` 的各加载阶段方法；对世界数据的“入口”是 `Game.Current` / `Campaign.Current`；对行为的“入口”是 `CampaignGameStarter.AddBehavior`。`MBGameManager` 自身是引擎内部调度，不属于模组扩展面。

## 依赖关系

**上游（MBGameManager 依赖 / 被其广播驱动）：**

- [MBSubModuleBase](../../core/MBSubModuleBase/) — 所有加载阶段事件的实际接收方；模组扩展的唯一入口。
- [GameManagerBase](../../core-extra/)（Core 基类，bucket 索引）— `MBGameManager` 的基类，持有 `Current`、组件系统与加载步骤状态机。
- `Module.CurrentModule`（`TaleWorlds.MountAndBlade.Module`，见 [mission-ext 目录](../)）— 提供 `CollectSubModules()`，阶段广播就是遍历它。

**下游（MBGameManager 创建 / 驱动 / 传入的对象）：**

- [Game](../../core-extra/Game/) — 在 `DoLoadingForGameManager` 中通过 `Game.CreateGame(...)` 创建，并贯穿全程。
- [Campaign](../../campaign/Campaign/) — 单人战役的 `GameType`，由 `SandBoxGameManager` 的 `CampaignCreatorDelegate` 产生。
- [CampaignGameStarter](../../campaign-ext/CampaignGameStarter/) 与 [IGameStarter](../../core-extra/IGameStarter/) — 在 `InitializeGameStarter` 阶段传入每个 SubModule，是注册 `CampaignBehaviorBase` 的载体。
- `MissionGameModels` — `OnGameStart` 时通过 `Game.Current.AddGameModelsManager<MissionGameModels>(gameStarter.Models)` 注入战斗模型表。

**存档 / 读档钩子：**

- `OnGameLoaded` / `OnAfterGameLoaded` / `OnLoadFinished` 构成读档路径（仅加载存档时触发），最终由 [SaveManager](../../save-system/SaveManager/) 的读档流程驱动；`OnLoadFinished` 置位 `IsLoaded = true`。

## 风险

- **引擎独占的生命周期**：`MBGameManager` 的实例由引擎创建并写入 `GameManagerBase.Current`。任何 `new SandBoxGameManager(...)` / `new MBGameManager(...)` 都不会接入加载状态机，只会得到一个游离对象，其阶段回调永远不会被调用。
- **加载顺序敏感**：各阶段严格按序广播（`RegisterSubModuleObjects` → `RegisterSubModuleTypes` → `AfterRegisterSubModuleObjects` → `InitializeGameStarter` → `OnGameInitializationFinished` → `OnNewCampaignStart` → `OnNewGameCreated` → `OnGameStart`；读档路径为 `OnGameLoaded` → `OnAfterGameLoaded` → `OnLoadFinished`）。在 `InitializeGameStarter` 之前 `Campaign.Current` 可能尚未就绪，过早访问世界对象会得到 `null` 或抛异常；通过 `AddBehavior` 注册行为应放在 `InitializeGameStarter`，而不是更早的 `Register*` 阶段。
- **不要在错误阶段写世界状态**：在 `OnGameInitializationFinished` 之前 `Game.Current.ObjectManager` 等可能未完全填充；读档时 `OnNewGameCreated` 不会触发（它是新游戏专属），读档逻辑必须放在 `OnGameLoaded` / `OnAfterGameLoaded`。
- **存档一致性**：在 `OnGameLoaded` / `OnAfterGameLoaded` 里修改 `Campaign` 数据要小心，此时存档已反序列化，不当的赋值可能破坏读档的一致性或与 [SaveManager](../../save-system/SaveManager/) 的版本校验冲突。
- **`EndGame()` 是异步的**：`MBGameManager.EndGame()` 为 `async void`，会等待当前任务结束、弹出 Mission 状态再清理。重复调用受 `CheckAndSetEnding()` 的原子标志保护（已结束时返回 `false`），但你自己也不应在 `OnGameEnd` 里再发起重入式加载。
- **不要在 `OnGameEnd` 之后持有 `Game` / `MBGameManager` 引用**：基类 `OnGameEnd` 会把 `Current` 与 `Game` 置空，之后访问 `MBGameManager.Current` / `Game.Current` 会得到 `null`。

## 成员说明

下面按主题分组。每个方法都是 `MBGameManager` 在加载/运行流程中**由引擎调用**的重写点；它们几乎都只是把同一事件扇出给所有 SubModule。

### 创建与启动（引擎调用，模组不要碰）

**`StartNewGame(MBGameManager gameLoader)`**（静态）— 启动新游戏的入口。先调用 `Module.CurrentModule.OnBeforeGameStart(gameLoader)`，再创建一个 `GameLoadingState` 并 `CleanAndPushState` 进状态机。由 SandBox / StoryMode / CustomBattle 的 SubModule 调用（例如 `new SandBoxGameManager(loadResult)`）；模组不应直接调用。

**`EndGame()`**（静态，`async void`）— 请求结束并退出当前游戏。会轮询等待管理器加载完成，逐层 `PopState` 退出 `MissionState`（必要时先 `EndMission()`），最后清理所有游戏状态。引擎、原生 UI（如地图界面的退出按钮、游戏结束界面）以及平台邀请回调都会调用它。

**`CheckAndSetEnding()`** — 线程安全地尝试置位“正在结束”标志，返回是否成功置位（已结束时返回 `false`）。`EndGame()` 用它做幂等保护；你可以用 `MBGameManager.Current.IsEnding` 只读地判断状态，不要用返回值做业务锁。

### 模块加载阶段广播（核心机制）

**`BeginGameStart(Game game)`** — 游戏即将正式开始（进入主菜单 / 角色创建之前）时由加载状态机调用；对 `CollectSubModules()` 每个 SubModule 调 `BeginGameStart(game)`。仅广播，不创建对象；此时 `Game.Current` 已存在但战役世界尚未完全初始化。

**`RegisterSubModuleObjects(bool isSavedCampaign)`** — 广播给每个 SubModule 的 `RegisterSubModuleObjects`，用于注册需要在游戏对象系统里登记的对象。`isSavedCampaign` 标识当前是读档还是新游戏。

**`RegisterSubModuleTypes()`** — 广播 `RegisterSubModuleTypes`，用于注册类型（通常不是你日常扩展的地方）。

**`AfterRegisterSubModuleObjects(bool isSavedCampaign)`** — 在 `RegisterSubModuleObjects` 之后广播，给 SubModule 一个“对象已登记完”的二次钩子。

**`InitializeGameStarter(Game game, IGameStarter starterObject)`** — **这是模组注册战役行为最关键的位置**。引擎把 `IGameStarter`（单人战役下实际是 `CampaignGameStarter`）广播给每个 SubModule；你应在 `MBSubModuleBase.InitializeGameStarter` 里把它转型为 `CampaignGameStarter` 并 `AddBehavior(...)`。新游戏与读档两条路径都会经过这里。

**`OnGameInitializationFinished(Game game)`** — 游戏初始化完成时广播；同时 MBGameManager 会遍历 `Game.Current.ObjectManager` 里的 `SkeletonScale`，预计算并设置骨骼索引（`SetBoneIndices`）。属于引擎级收尾，模组一般只做轻量收尾。

**`OnAfterGameInitializationFinished(Game game, object initializerObject)`** — `OnGameInitializationFinished` 之后的二次广播，给 SubModule 一个“初始化已彻底完成”的钩子。

### 战役 / 新游戏阶段

**`OnNewCampaignStart(Game game, object starterObject)`** — 新战役开始（角色创建完成后）时广播给每个 SubModule 的 `OnCampaignStart(game, starterObject)`。`starterObject` 是战役的起始参数（如 `CampaignGameStarter`）。

**`OnNewGameCreated(Game game, object initializerObject)`** — 新游戏对象创建完成时广播；**仅新游戏触发，读档不会触发**。适合做只在全新战役里一次的初始化。

**`OnGameStart(Game game, IGameStarter gameStarter)`** — 游戏真正开始（菜单 / 角色创建之后）时广播给每个 SubModule 的 `OnGameStart`。MBGameManager 自己在这里做：设置 `Game.Current.MonsterMissionDataCreator`、用 `gameStarter.Models` 注册 `MissionGameModels`、把 `Monster.GetBoneIndexWithId` 等回调接到 `MBActionSet`。此时 `Campaign.Current` 已可用，是最常用的“游戏已就绪”钩子。

### 读档阶段（仅加载存档时）

**`OnGameLoaded(Game game, object initializerObject)`** — 存档反序列化完成后广播给每个 SubModule 的 `OnGameLoaded`。读档专属，新游戏不走这里。

**`OnAfterGameLoaded(Game game)`** — `OnGameLoaded` 之后的二次广播，给 SubModule 一个“读档已彻底完成”的钩子。

**`OnLoadFinished()`** — 整个加载流程结束时的收尾，置位 `IsLoaded = true`。`SandBoxGameManager` 的重写还会在此切换到菜单窗口或角色创建（新游戏），或推进到地图状态（读档）。

### 结束阶段

**`OnGameEnd(Game game)`** — 游戏结束时广播给每个 SubModule 的 `OnGameEnd`，随后调 `Module.CurrentModule.OnGameEnd()`、清空 `MissionGameModels`，并最终由基类把 `Current` 与 `Game` 置空。注意此调用之后不要再持有 `Game` 引用。

### 平台回调

**`OnSessionInvitationAccepted(SessionInvitationType targetGameType)`** — 平台层接受联机邀请时由 `OnSessionInvitationAcceptedJob` 调用（经 `MBGameManager.Current`）；若 `targetGameType != None` 则直接 `EndGame()`。通常无需重写。

**`OnPlatformRequestedMultiplayer()`** — 平台请求进入多人模式时调用，默认直接 `EndGame()`。通常无需重写。

### 状态访问（模组可能读取）

**`Current`**（静态属性，`MBGameManager`）— 返回当前活跃的管理器（即 `GameManagerBase.Current` 转型）。在任意已有游戏上下文的代码里读取全局状态用，例如 `MBGameManager.Current.IsEnding`。

**`IsEnding`**（`bool`，只读）— 是否正在结束游戏。`EndGame()` 流程中由 `CheckAndSetEnding()` 置位；只读使用即可。

**`IsLoaded`**（`bool`，受保护 set）— 加载流程是否已完成（`OnLoadFinished` 时置 `true`）。可用于判断“游戏世界是否真正就绪”。

## 最小真实示例

### 示例 1：通过 SubModule 在 `InitializeGameStarter` 注册战役行为（标准扩展入口）

这是模组向战役世界注入自己逻辑的标准方式。引擎在加载流程中调用 `MBSubModuleBase.InitializeGameStarter`，而 `MBGameManager` 正是这一广播的来源；你在这里把 `IGameStarter` 转型为 `CampaignGameStarter` 并 `AddBehavior`：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    public class MySubModule : MBSubModuleBase
    {
        // 模块加载的最早钩子；此时 Game 还不存在，只做轻量注册
        protected internal override void OnSubModuleLoad()
        {
        }

        // 引擎通过 MBGameManager 在加载流程中调用此方法：
        // 这是注册 CampaignBehaviorBase 的正确位置
        protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
        {
            // gameStarterObject 在新游戏与读档两条路径都会被传入
            CampaignGameStarter starter = (CampaignGameStarter)gameStarterObject;
            starter.AddBehavior(new MyCampaignBehavior());
        }

        // 游戏真正开始（菜单/角色创建之后）时调用；此时 Campaign.Current 已可用
        protected internal override void OnGameStart(Game game, IGameStarter gameStarterObject)
        {
            Campaign campaign = game.GameType as Campaign;
            if (campaign != null)
            {
                Hero mainHero = campaign.MainHero;
                // 例如在这里根据主英雄做一次性初始化
            }
        }
    }
}
```

### 示例 2：在已有上下文中读取管理器状态 / 请求退出游戏

在行为、UI 回调或其他已有 `Game` 的代码里，通过 `MBGameManager.Current` 读取全局状态，或用 `MBGameManager.EndGame()` 请求退出：

```csharp
// 在已有 Game 的上下文中（如某个 CampaignBehaviorBase 或 UI 回调里）读取当前管理器
MBGameManager manager = MBGameManager.Current;
if (manager != null && !manager.IsEnding)
{
    Game game = Game.Current;
    bool fullyLoaded = manager.IsLoaded;
}

// 由 UI/平台触发退出当前游戏；引擎与大量原生界面都这样调用
MBGameManager.EndGame();
```

## 跨版本提示

- v1.3.15 与 v1.4.5 的 `MBGameManager` 公开成员完全一致：`StartNewGame`、`EndGame`、`Current`、`IsEnding`、`IsLoaded`，以及全部 `On*` / `Register*` / `Begin*` 阶段广播方法的签名与语义均未变化。
- 真实子类方面：v1.3.15 已有 `SandBoxGameManager`、`MultiplayerGameManager`、`CustomGameManager`、`EditorGameManager`；v1.4.5 额外包含 `EditorSceneMissionManager` 等编辑器用途子类，对模组扩展面无影响。
- 模组侧永远只用 `MBSubModuleBase` 阶段 + `CampaignGameStarter.AddBehavior` 接入，这一模式在两个版本间稳定。

## 参见

**↑ Parent**

- [API 参考](../../) — 本版本 API 总目录
- [mission-ext 目录](../) — 战斗扩展类目录（MBGameManager 所在 bucket）

**↔ Sibling（同属启动/世界层的关键类型）**

- [MBSubModuleBase](../../core/MBSubModuleBase/) — 模组加载阶段扩展的唯一入口，所有阶段的接收方
- [Game](../../core-extra/Game/) — MBGameManager 创建并持有的游戏对象
- [MBObjectManager](../../campaign-ext/MBObjectManager/) — 游戏对象注册系统（加载阶段被引用）

**相关类型**

- [Campaign](../../campaign/Campaign/) — 单人战役世界（`GameType`）
- [CampaignGameStarter](../../campaign-ext/CampaignGameStarter/) — `AddBehavior` 注册战役行为的载体
- [IGameStarter](../../core-extra/IGameStarter/) — `InitializeGameStarter` 阶段传入的起始器接口
- [SaveManager](../../save-system/SaveManager/) — 读档流程如何驱动 `OnGameLoaded` / `OnLoadFinished`
