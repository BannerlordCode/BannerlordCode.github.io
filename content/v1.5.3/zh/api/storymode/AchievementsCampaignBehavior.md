---
title: "AchievementsCampaignBehavior"
description: "成就系统行为：监听三十余种战役事件，把进度写进 AchievementManager，并在检测到存档被破坏时主动关闭成就。"
---
# AchievementsCampaignBehavior

**Namespace:** StoryMode.GameComponents.CampaignBehaviors
**Module:** StoryMode
**Type:** `public class AchievementsCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/CampaignBehaviors/AchievementsCampaignBehavior.cs`

## 概述

这是 1.5.3 成就系统的全部驱动逻辑。它订阅三十多个战役事件——建国、清剿藏身处、攻下一座城、 tournaments、锻造、被处决的领主、出生数、孙辈、远征龙旗、帝国/蛮族胜利……——把每件事折算成一个统计量，通过 `AchievementManager.SetStat(statId, value)` 写进去。行为本身不显示任何 UI，UI 订阅的是 `AchievementManager`。它还带一套反作弊门禁：读档时检测存档完整性，检测不通过就把成就系统整体下线。

## 心智模型

**注册**：`StoryModeSubModule.AddBehaviors` 里无条件 `campaignGameStarter.AddBehavior(new AchievementsCampaignBehavior())`。`AddBehavior` 只是放进列表；真正的 `RegisterEvents()` 由 [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) 在战役初始化时逐个调用。

**它订阅了什么**（按语义分组，全部在 `RegisterEvents()`）：

| 分组 | 事件 |
|---|---|
| 建造/占领 | `KingdomCreatedEvent`、`OnSettlementOwnerChangedEvent`、`RulingClanChanged`、`OnClanChangedKingdomEvent`、`OnClanDestroyedEvent`、`OnBuildingLevelChangedEvent`、`WorkshopOwnerChangedEvent`、`MobilePartyCreated` |
| 战斗 | `OnHideoutBattleCompletedEvent`、`MapEventEnded`、`SiegeCompletedEvent`、`OnMissionStartedEvent`、`TournamentFinished` |
| 人物 | `HeroKilledEvent`、`BeforeHeroKilledEvent`、`HeroCreated`、`HeroGainedSkill`、`ClanTierIncrease`、`BeforeHeroesMarried` |
| 交易/生产 | `PlayerInventoryExchangeEvent`、`OnPlayerTradeProfitEvent`、`OnNewItemCraftedEvent` |
| 进度/其它 | `DailyTickEvent`、`OnCharacterCreationIsOverEvent`、`SettlementEntered`、`OnQuestCompletedEvent`、`OnIssueUpdatedEvent`、`KingdomDecisionConcluded`、`CollectMetadataEntriesEvent`、`OnConfigChangedEvent`、`OnGameLoadFinishedEvent`、`OnNewGameCreatedPartialFollowUpEndEvent`、`StoryModeEvents.OnStoryModeTutorialEndedEvent`、`StoryModeEvents.OnBannerPieceCollectedEvent` |

**两个关键入口**：

- `CheckAchievementSystemActivity(out TextObject reason)` —— 组合三条件：`_deactivateAchievements` 为 false、`DumpIntegrityCampaignBehavior` 实例存在、`DumpIntegrityCampaignBehavior.IsGameIntegrityAchieved(out reason)` 为真。额外放行 `MBDebug.IsTestMode()`。
- `CacheAndInitializeAchievementVariables()` —— `async void`，在 `OnGameLoadFinished` 里被调。它解析 `butter` 物品、初始化一长串统计量的字符串列表、构建 `_orderedSettlementList` 与 `_settlementIntegerSetList`。**因为是 `async void`，异常会逃逸到同步上下文**，捕获不到。

**「进入过每一个聚落」的位集技巧**：`SettlementCountStoredInIntegerSet = 30f`，每个 `int` 用 30 个 bit 记录 30 个聚落的「是否进入过」。`OnSettlementEnter` 置位，`CheckEnteredEverySettlement` 把所有 int 的 popcount 加起来与聚落总数比较。

**存档**：`SyncData` 只同步一个 `bool _deactivateAchievements`。三十多个缓存统计量（`_cached*` 字段）**全部不进存档**，读档后由 `CacheAndInitializeAchievementVariables` 重算。

**常见误用与坑**

- **`DeactivateAchievements` 会 `CampaignEventDispatcher.Instance.RemoveListeners(this)`** —— 一旦触发，这个行为在本次战役里彻底不再收任何事件。唯一被重新挂回去的是 `CollectMetadataEntriesEvent`。
- **`_deactivateAchievements` 与 `temporarily` 的组合容易读错**：`this._deactivateAchievements = !temporarily || this._deactivateAchievements;` —— `temporarily: false` 无条件置 true；`temporarily: true` 只在尚未禁用时置 true。
- **`CheckAchievementSystemActivity` 直接摸 `Campaign.Current.CampaignBehaviorManager`**，在战役初始化之前调用会 NRE。
- **`AchievementManager.SetStat` 是全局写入**，没有任何 mod 命名空间隔离。两个 mod 用同名 statId 会互相覆盖。
- **mod 若新增战役事件并想驱动成就，必须自己写 `SetStat`**，不会自动进入这个行为。

## 怎么用

### 怎么拿到它

`public class AchievementsCampaignBehavior : CampaignBehaviorBase` 声明在 `bannerlord-1.5.3/StoryMode/GameComponents/CampaignBehaviors/AchievementsCampaignBehavior.cs:30`，全文 1117 行，是本模块最大的一个行为。

注册点：`campaignGameStarter.AddBehavior(new AchievementsCampaignBehavior())`（`StoryModeSubModule.cs:81`），**无条件注册**（不在 `:60`–`:75` 的阶段条件里）。拿实例用 `Campaign.Current.GetCampaignBehavior<AchievementsCampaignBehavior>()`。引擎在每次读档后调 `RegisterEvents()`（`:39`），那里挂了三十二条 `AddNonSerializedListener`，其中三十条是 `CampaignEvents.*`，最后两条是 `StoryModeEvents.OnStoryModeTutorialEndedEvent`（`:73`）和 `StoryModeEvents.OnBannerPieceCollectedEvent`（`:74`）。

存档只有一项：`dataStore.SyncData<bool>("_deactivateAchievements", ref this._deactivateAchievements)`（`:33`）。三十多个 `_cached*` 字段**全都不存档**——它们在 `OnNewGameCreatedPartialFollowUpEnd`（`:227`）或 `OnGameLoadFinished` 里从成就系统回填。

三条与 StoryMode 直接相关的统计：

| 统计 id | 来源 | 行 |
| --- | --- | --- |
| `AssembledDragonBanner` | `StoryModeEvents.OnBannerPieceCollectedEvent` → `ProgressAssembledDragonBanner`，判 `FirstPhase != null && FirstPhase.AllPiecesCollected` | `:74`→`:658`→`:660` |
| `BarbarianVictory` / `ImperialVictory` | `OnQuestCompletedEvent`（`:55`）→ `ProgressImperialBarbarianVictory`，判 `quest.GetType() == typeof(DefeatTheConspiracyQuestBehavior.DefeatTheConspiracyQuest)` 且按 `MainStoryLineSide` 二选一 | `:667`→`:671` |
| `RadagosDefeatedInDuel` | 公开方法 `OnRadagosDuelWon()`，**由外部调用** | `:460` |

战斗内的两个统计不走 `CampaignEvents`，而是在 `OnMissionStarted`（`:404`）里 new 一个私有嵌套类 `AchievementMissionLogic : MissionLogic`（`:1079`）并 `Mission.Current.AddMissionBehavior(...)`（`:407`），它覆写 `OnAgentRemoved`（`:1089`）和 `OnScoreHit`（`:1100`）再回调到 `OnAgentRemoved`（`:421`）/ `OnAgentHit`（`:411`）。

关掉机制：`DeactivateAchievements(TextObject reason = null, bool showMessage = true, bool temporarily = false)`（`:880`）会 `CampaignEventDispatcher.Instance.RemoveListeners(this)`（`:883`）并把 `_deactivateAchievements` 置真（`:882`），此后 `SetStatInternal`（`:902`）里的 `AchievementManager.SetStat` 全部被跳过（`:904`→`:906`）。

### 典型用法

```csharp
// 运行期读
AchievementsCampaignBehavior ach =
    Campaign.Current.GetCampaignBehavior<AchievementsCampaignBehavior>();
if (ach != null && StoryModeManager.Current != null)
{
    // 公开方法：外部流程（拉达戈斯决斗结算）主动上报
    Debug.Print("可直接调用的上报方法：OnRadagosDuelWon()");

    // 关掉整套统计：会 RemoveListeners(this)，不可逆（除非重读档）
    // ach.DeactivateAchievements(new TextObject("{=XyZ1}成就已关闭"), true, false);
}

// 成就系统的总开关判定（公开，源码逻辑照抄）
DumpIntegrityCampaignBehavior integrity =
    Campaign.Current.CampaignBehaviorManager.GetBehavior<DumpIntegrityCampaignBehavior>();
Debug.Print("成就系统可用=" + (integrity != null));

// StoryMode 专属统计的判定条件复现
FirstPhase first = StoryModeManager.Current.MainStoryLine.FirstPhase;
Debug.Print("龙旗已拼齐=" + (first != null && first.AllPiecesCollected));
```

### 最容易踩的坑

`DeactivateAchievements` 里的 `CampaignEventDispatcher.Instance.RemoveListeners(this)`（`:883`）是**全局广播取消**：它从所有事件分发器上抹掉以 `this` 为 key 的监听，不只是 `CampaignEvents`。调完之后三十二条订阅全部失效，且 `RegisterEvents()` **不会**在同一个会话里重新跑（只在读档时跑），`_deactivateAchievements` 本身又已经进了存档。所以一旦在运行中关掉再读档，行为重新注册了但 `SetStatInternal` 仍被 `:904` 的开关挡住——统计从此静默。想恢复只能删存档字段。

## 主要成员

- `public override void RegisterEvents()`
  订阅全部事件。由管理器在战役初始化时调用，**每个战役一次**。
- `public override void SyncData(IDataStore dataStore)`
  只同步 `_deactivateAchievements`。
- `public bool CheckAchievementSystemActivity(out TextObject reason)`
  判断成就系统当前是否可用，并输出不可用的原因。调试成就问题时的第一个调用对象。
- `public void DeactivateAchievements(TextObject reason = null, bool showMessage = true, bool temporarily = false)`
  关闭成就系统：置标志、解绑全部监听、重新挂回 `CollectMetadataEntriesEvent`、可选弹一条快速信息。**这是公开成员，其它 mod 可以主动调用它**。
- `public void OnRadagosDuelWon()`
  剧情事件触发的进度推进（决斗战胜拉达戈斯）。
- `public bool CollectMetadataEntries` 相关私有方法与 `OnResetAllTutorials` 类的元数据导出：`CollectMetadataEntries(List<KeyValuePair<string, string>> list)` 会写入 `"AchievementsDisabled"` 键。
- 私有 `AchievementManager` 桥：`SetStatInternal(string statId, int value)` 是唯一的写入点，内部先判 `_deactivateAchievements`。
- 私有 `Agent` 回调缓存：`OnAgentRemovedAction` / `OnAgentHitAction` 两个 `Action` 委托字段。同文件里有一个私有嵌套类 `AchievementMissionLogic : MissionLogic`，构造函数 `AchievementMissionLogic(Action<Agent, Agent> onAgentRemoved, Action<Agent, WeaponComponentData, BoneBodyPartType, int> onAgentHitAction)` 接收这两个委托，覆写 `OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` 与 `OnScoreHit(...)`。宿主行为在 `OnMissionStarted(IMission obj)` 里 `new` 它并通过 `Mission.Current.AddMissionBehavior(...)` 挂进任务。

## 使用示例

```csharp
// 场景：mod 想在玩家单挑击杀一名领主时推一条自定义成就统计
public class MyAchievementBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this, OnHeroKilled);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnHeroKilled(
        Hero victim, Hero killer,
        KillCharacterAction.KillCharacterActionDetail detail,
        bool showNotification = true)
    {
        if (killer == Hero.MainHero
            && detail == KillCharacterAction.KillCharacterActionDetail.DiedInBattle
            && victim.IsLord)
        {
            // 注意：这是全局命名空间，没有 mod 隔离
            AchievementManager.SetStat("MyMod_LordsSlainInBattle", 1);
        }
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    var starter = (CampaignGameStarter)gameStarterObject;
    starter.AddBehavior(new MyAchievementBehavior());
}
```

## 风险与边界

- **存档序列化风险中等**：`_deactivateAchievements` 会存档，读档后成就可能保持关闭状态；`_cached*` 统计量不进档，靠 `OnGameLoadFinished` 重算。若你的 mod 依赖成就进度做解锁，重算窗口期（`CacheAndInitializeAchievementVariables` 是 `async void`）内读到的值可能不完整。
- **`RemoveListeners` 不可逆**：一旦被 `DeactivateAchievements` 触发，本次战役内不再恢复。跨读档会重新 `RegisterEvents()`，但 `_deactivateAchievements` 仍是 true，会再次在 `OnGameLoadFinished` 里自我下线。
- **与其它 mod 冲突的表现是 statId 命名空间污染**，不是异常。成就条目本身在游戏数据侧定义，写入一个不存在的 statId 不会报错，只是没有 UI 显示。
- **`AchievementMissionLogic` 是同文件的嵌套类型**，直接依赖两个缓存的 `Action` 委托；如果宿主行为被解绑，这些委托会指向已失效的目标。
- **性能**：三十多个事件订阅 + `DailyTick` + `CacheAndInitializeAchievementVariables` 的聚落枚举，在大地图档上是实打实的每帧/每日开销。

## 依赖关系

- [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) — 提供 `SyncData` 与事件订阅的默认基础设施
- [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) — 调用 `RegisterEvents()` 并托管行为实例，`GetCampaignBehavior<T>()` 的查询目标
- [CampaignEvents](../../campaign/CampaignEvents) — 全部订阅的来源
- [CampaignGameStarter](../../campaign/CampaignGameStarter) — `AddBehavior` 的注册入口
- [TutorialPhaseCampaignBehavior](../TutorialPhaseCampaignBehavior) — `OnStoryModeTutorialEndedEvent` 的触发方之一
- [sdk-overview](../../../architecture/sdk-overview) — SubModule 启动序列与行为注册顺序