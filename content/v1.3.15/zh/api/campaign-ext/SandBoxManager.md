---
title: "SandBoxManager"
description: "单人战役（Sandbox）模块的装配中心：由 Campaign 创建并持有，负责注册全部原版 CampaignBehavior 与默认 Model、加载 XML 对象数据，并暴露任务/智能体/存档三个子系统管理器。"
---
# SandBoxManager

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public class SandBoxManager : GameHandler`  
**Base:** `GameHandler`（位于 `TaleWorlds.Core`）  
**File:** `TaleWorlds.CampaignSystem/SandBoxManager.cs`

## 一句话职责

把单人战役里零散的「行为（Behavior）、模型（Model）、XML 对象数据、任务/智能体/存档子系统」统一装配起来——它不实现具体玩法，而是决定哪些原版系统被挂到这场战役上。

## 心智模型

把 `SandBoxManager` 想成**战役世界的「配电盘」**：游戏启动时由 `Campaign` 插上电（创建并注册为 `GameHandler`），然后它把几百个原版 `CampaignBehavior` 和几十个默认 `Model` 一股脑接到 `CampaignGameStarter` 上，再把 `NPCCharacters`、`Heroes`、`Settlements`、`Kingdoms` 等 XML 对象加载进 `MBObjectManager`。之后它自己退居幕后，只保留三个被引擎注入的子管理器引用（`SandBoxMissionManager`、`AgentBehaviorManager`、`SandBoxSaveManager`）供其它系统按需取用。

- **层级**：属于 Campaign 层的 `GameHandler` 子系统（其基类 `GameHandler` 在 `TaleWorlds.Core`，属于游戏处理器框架）。它只服务于单人战役进程，不处理战斗场景内部逻辑。
- **谁创建/持有它**：`Campaign` 在初始化时创建——`SandBoxManager = Game.Current.AddGameHandler<SandBoxManager>()`，随后立即调用 `Initialize(...)` 与 `OnCampaignStart(...)`。你**不应该**自己 `new SandBoxManager()`。
- **怎么拿到它**：战役进行中（即 `OnGameStart` 之后、`OnGameEnd` 之前）有两种等价入口：
  - 静态单例：`SandBoxManager.Instance`
  - 通过战役：`Campaign.Current.SandBoxManager`
- **三个子管理器是引擎注入的**：`SandBoxMissionManager` / `AgentBehaviorManager` / `SandBoxSaveManager` 都是 `{ get; set; }` 自动属性，由底层模块赋好值。模组通常**只读**它们，不要自行赋值。

## 何时用 / 何时不要用

- **用**：当你需要访问战役级子系统——打开竞技场/比武任务（走 `SandBoxMissionManager`）、给据点里的 NPC 挂智能体行为（走 `AgentBehaviorManager`）、查询自动存档间隔（走 `SandBoxSaveManager`）；或想理解「原版到底挂了哪些 Behavior / Model」。
- **不要用**：不要自己调用 `Initialize(...)` / `OnCampaignStart(...)`——`Campaign` 在加载阶段已经调过，重复调用会把全部 Behavior 与 Model 再注册一遍，造成重复处理器与异常。不要 `new SandBoxManager()`，也不要给三个子管理器属性赋值（它们是引擎生命周期的一部分）。不要依赖 `Instance` 一定非空——在主菜单、`SubModule` 的 `OnSubModuleLoad`、或游戏结束后它为 `null`。

## 依赖图

- 上游（创建 / 驱动）：[Campaign](../../campaign/Campaign/)（创建并持有，调用 `Initialize` 与 `OnCampaignStart`）、[GameHandler](../../core/MBSubModuleBase/) 处理器框架、`MBObjectManager`（加载 XML）、`GameManagerBase`（子模块对象注册）。
- 装配目标（被它挂到战役上）：原版 `CampaignBehavior` 群（如 [TournamentCampaignBehavior](../TournamentCampaignBehavior/)、[PregnancyCampaignBehavior](../PregnancyCampaignBehavior/)）与默认 `Model` 群（如 [TournamentModel](../TournamentModel/)、[PregnancyModel](../PregnancyModel/)）。
- 下游消费方：[SandBoxMission](../SandBoxMission/)（经 `SandBoxMissionManager` 打开任务）、[SaveHandler](../SaveHandler/)（经 `SandBoxSaveManager` 读存档间隔）、据点 NPC 生成（经 `AgentBehaviorManager`）。
- 装配入口：[CampaignGameStarter](../CampaignGameStarter/)（`Initialize` 通过它 `AddBehavior` / `AddModel`）。
- 相关：[MobileParty](../../campaign/MobileParty/)、[MBSubModuleBase](../../core/MBSubModuleBase/)、[doc-contract](../../../architecture/doc-contract/)。

## 风险

- **`Instance` 在错误时点为 `null`**：在 `OnGameStart` 之前（含 `SubModule` 加载期）或 `OnGameEnd` 之后（回到主菜单）访问 `SandBoxManager.Instance` 会直接 `NullReferenceException`。需要全局引用时，优先用 `Campaign.Current?.SandBoxManager` 并判空。
- **三个子管理器可能未注入**：`SandBoxSaveManager` 在 [SaveHandler](../SaveHandler/) 里就是以 `?.` 形式访问的（`Campaign.Current.SandBoxManager.SandBoxSaveManager?.GetAutoSaveInterval()`），说明它可能为空——读取前务必判空，不要假设非空。
- **不要重跑 `Initialize`**：该方法会再 `AddBehavior` / `AddModel` 几百个实例。战役加载流程之外调用它等于重复装配，会引发重复 tick、重复事件订阅乃至逻辑错乱。
- **`InitializeCharactersAfterLoad` 必须在正确加载阶段调用**：它遍历 `Campaign.Current.AliveHeroes` / `DeadOrDisabledHeroes` 并对非原始 `CharacterObject` 执行 `InitializeHeroCharacterOnAfterLoad`；只在读档（saved campaign）路径下有意义，新开局时直接 `return`。

## 成员说明

### 子管理器引用（引擎注入，只读）

#### `public ISandBoxMissionManager SandBoxMissionManager { get; set; }`
战役级「任务（Mission）」子系统入口，负责打开竞技场射箭、比武、马赛、挑战等场景任务。由引擎赋值；模组通过它拿到任务场景，不要自行 set。

#### `public IAgentBehaviorManager AgentBehaviorManager { get; set; }`
据点 / 位置（Location）里 NPC 的智能体行为装配器，提供 `AddCompanionBehaviors`、`AddWandererBehaviors`、`AddFixedCharacterBehaviors` 等委托，用于构建 `LocationCharacter`。引擎注入，只读。

#### `public ISaveManager SandBoxSaveManager { get; set; }`
单人战役的存档管理器，暴露 `GetAutoSaveInterval()`、`IsAutoSaveDisabled()`、`OnSaveOver(...)` 等。引擎注入，访问前判空。

### 实例与访问

#### `public static SandBoxManager Instance { get; private set; }`
全局静态单例，在 `OnGameStart` 里被赋值为 `Game.Current.GetGameHandler<SandBoxManager>()`，`OnGameEnd` 里置 `null`。战役进行中可直接取用；游戏未开始或已结束时为 `null`。

#### `public CampaignGameStarter GameStarter { get; private set; }`
本次战役的装配器，在 `Initialize(...)` 时记录。`SandBoxManager` 正是通过它注册全部 Behavior 与 Model；`Campaign` 在加载后期也会读取它（`Campaign.SandBoxManager.GameStarter`）。

### 初始化与装配

#### `public void Initialize(CampaignGameStarter gameStarter)`
核心装配方法。把 `gameStarter` 存进 `GameStarter`，然后依次 `AddBehavior(...)` 注册约 280 个原版 `CampaignBehavior`（从 `PartyUpgraderCampaignBehavior`、`RomanceCampaignBehavior` 到各类 Issue/Comment Behavior），再 `AddModel(...)` 注册约 130 个默认 `Model`（如 `DefaultValuationModel`、`DefaultPartyHealingModel`、`DefaultTournamentModel`）。**仅由 `Campaign` 在启动阶段调用一次**，模组不要自行调用。

```csharp
// 真实调用点（Campaign.cs，简化）：
SandBoxManager = Game.Current.AddGameHandler<SandBoxManager>();
SandBoxManager.Initialize(campaignGameStarter);
SandBoxManager.OnCampaignStart(campaignGameStarter, base.GameManager, isSavedCampaign);
```

#### `public void OnCampaignStart(CampaignGameStarter gameInitializer, GameManagerBase gameManager, bool isSavedCampaign)`
装配完成后的收尾：调用 `gameManager.RegisterSubModuleObjects(isSavedCampaign)` 与 `AfterRegisterSubModuleObjects(...)` 让各 `SubModule` 挂上自己的对象；若这是读档的战役（`isSavedCampaign == true`）且处于战役模式，则 `MBObjectManager.Instance.RemoveTemporaryTypes()` 清掉临时类型。

### 资源 / 角色加载

#### `public void InitializeSandboxXMLs(bool isSavedCampaign)`
把战役所需的 XML 对象数据加载进 `MBObjectManager`：`NPCCharacters` 始终加载；新开局额外加载 `Heroes`、`Kingdoms`、`Factions`；教程模式加载 `MPCharacters`；战役模式且非编辑模式加载 `Settlements`；`WorkshopTypes`、`LocationComplexTemplates` 始终加载。读档时跳过那些「存档已自带」的表。

#### `public void InitializeCharactersAfterLoad(bool isSavedCampaign)`
仅读档路径有效（`!isSavedCampaign` 时直接返回）。对 `Campaign.Current.AliveHeroes` 与 `DeadOrDisabledHeroes` 中「非原始（`!IsOriginalCharacter`）」的英雄调用 `CharacterObject.InitializeHeroCharacterOnAfterLoad()`；再扫描 `CharacterObject` 列表补初始化未就绪的，并_unregister_ 那些「存了 CharacterObject 却找不到对应 HeroObject」的脏数据（源码中以 `Debug.FailedAssert` 报警）。

### 生命周期回调（GameHandler 重写）

#### `protected override void OnGameStart()`
处理器启动时执行：`Instance = Game.Current.GetGameHandler<SandBoxManager>()`，使静态单例生效。

#### `protected override void OnGameEnd()`
处理器结束时执行：`Instance = null`，收回静态单例。

#### `protected override void OnTick(float dt)`
空实现——`SandBoxManager` 不做每帧逻辑，真正的逐 tick 工作由它注册的各个 `CampaignBehavior` 承担。

#### `public override void OnBeforeSave()`
空实现（存档前钩子点，可被引擎在写档前调用）。

#### `public override void OnAfterSave()`
空实现（存档后钩子点）。

## 最小真实示例

### 示例 1：通过静态单例打开竞技场射箭任务

来自 `SandBoxMission` 的真实用法——仅在战役进行中 `SandBoxManager.Instance` 非空：

```csharp
using TaleWorlds.CampaignSystem;

// 战役进行中（OnGameStart 之后）Instance 才非空，先判空
if (SandBoxManager.Instance != null)
{
    SandBoxManager.Instance.SandBoxMissionManager.OpenTournamentArcheryMission(
        scene, tournamentGame, settlement, culture, isPlayerParticipating);
}
```

### 示例 2：通过 Campaign 读取自动存档间隔

来自 `SaveHandler` 的真实用法——`SandBoxSaveManager` 可能为空，用 `?.` 兜底：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

// 走 Campaign.Current 拿到本场战役的 SandBoxManager，再取存档管理器
ISaveManager saveManager = Campaign.Current.SandBoxManager.SandBoxSaveManager;
int autoSaveIntervalMinutes = saveManager?.GetAutoSaveInterval() ?? 15;
```

### 示例 3：在据点 NPC 上挂智能体行为

来自 `HeroAgentSpawnCampaignBehavior` 的真实用法——通过 `AgentBehaviorManager` 提供行为委托：

```csharp
using TaleWorlds.CampaignSystem;

// 仅战役进行中可用
if (SandBoxManager.Instance != null)
{
    LocationCharacter.AddBehaviorsDelegate behaviors =
        (heroLocationDetail == HeroAgentLocationModel.HeroLocationDetail.PlayerClanMember)
            ? SandBoxManager.Instance.AgentBehaviorManager.AddCompanionBehaviors
            : SandBoxManager.Instance.AgentBehaviorManager.AddFixedCharacterBehaviors;

    LocationCharacter locationCharacter = new LocationCharacter(agentData, behaviors, tag, fixedLocation: true, ...);
}
```

## 跨版本提示

- 本页 API 以 **1.4.5** 源码为准（最新权威）。`Instance`、`GameStarter`、三个子管理器属性，以及 `Initialize` / `OnCampaignStart` / `InitializeSandboxXMLs` / `InitializeCharactersAfterLoad` 这套装配入口在 1.3.x → 1.4.5 的战役线中保持稳定；具体注册的 Behavior / Model 清单会随版本增减，请以对应版本源码核对。
- `Campaign.Current.SandBoxManager` 这一获取方式在 1.3.x 即存在，若需兼容多版本优先用它而非静态 `Instance`。

## 导航

- ↑ 父级：[campaign-ext 索引](../)
- ↔ 同级：[SaveHandler](../SaveHandler/) · [SandBoxMission](../SandBoxMission/) · [CampaignGameStarter](../CampaignGameStarter/) · [TournamentCampaignBehavior](../TournamentCampaignBehavior/) · [PregnancyCampaignBehavior](../PregnancyCampaignBehavior/)
- 相关类：[Campaign](../../campaign/Campaign/) · [MobileParty](../../campaign/MobileParty/) · [MBSubModuleBase](../../core/MBSubModuleBase/) · [doc-contract](../../../architecture/doc-contract/)
