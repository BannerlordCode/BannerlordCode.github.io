---
title: "AchievementsCampaignBehavior"
description: "成就系统的 campaign 行为本体（1117 行）：注册 33 个 CampaignEvents/StoryModeEvents 监听，把 40 多个统计键喂给 AchievementManager；唯一持久化字段是 _deactivateAchievements，OnAgentRemoved/OnScoreHit 属于嵌套私有类而非本类。"
---

# AchievementsCampaignBehavior

**Namespace:** StoryMode.GameComponents.CampaignBehaviors
**Module:** StoryMode.GameComponents
**Type:** `public class AchievementsCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `StoryMode/GameComponents/CampaignBehaviors/AchievementsCampaignBehavior.cs`

## 概述

这是成就系统真正的实现体，1117 行，1.3.0 故事模式里注册的唯一一个「统计收集器」。它自己不发通知、不画 UI、不决定什么成就是否解锁——它只做一件事：**把游戏里发生的 40 多类事件翻译成 `AchievementManager.SetStat(统计键, 整数值)` 调用**。

由 `StoryMode/StoryModeSubModule.cs:80` 在战役启动时挂上：`campaignGameStarter.AddBehavior(new AchievementsCampaignBehavior());`

四个 public 成员（其余 80 多个全是 private），公开面小得反常：

| 成员 | 签名 |
| --- | --- |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` |
| `RegisterEvents` | `public override void RegisterEvents()` |
| `CheckAchievementSystemActivity` | `public bool CheckAchievementSystemActivity(out TextObject reason)` |
| `DeactivateAchievements` | `public void DeactivateAchievements(TextObject reason = null, bool showMessage = true, bool temporarily = false)` |
| `OnRadagosDuelWon` | `public void OnRadagosDuelWon()` |

（另有一个 public `OnAgentRemoved` / `OnScoreHit` 出现在自动生成的 stub 上——**那是错的**，见风险段第一条。）

## 心智模型

三条线，各自独立。

**第一条：注册面。** `RegisterEvents`（第 39–74 行）挂 33 个监听，其中 31 个 `CampaignEvents.*`、2 个 `StoryModeEvents.*`：

```csharp
// AchievementsCampaignBehavior.cs:41-74（逐字照抄的前后各两行）
CampaignEvents.OnCharacterCreationIsOverEvent.AddNonSerializedListener(this, new Action(this.CacheHighestSkillValue));
CampaignEvents.WorkshopOwnerChangedEvent.AddNonSerializedListener(this, new Action<Workshop, Hero>(this.ProgressOwnedWorkshopCount));
...
StoryModeEvents.OnStoryModeTutorialEndedEvent.AddNonSerializedListener(this, new Action(this.CheckTutorialFinished));
StoryModeEvents.OnBannerPieceCollectedEvent.AddNonSerializedListener(this, new Action(this.ProgressAssembledDragonBanner));
```

注意最后两个是 `StoryModeEvents`（`StoryMode.Quests` 侧的静态事件），不是 `CampaignEvents`——成就系统并不是纯 campaign 层的东西，它订阅了任务层的事件。

**第二条：写入面。** 所有统计最终都走同一个私有闸门（`AchievementsCampaignBehavior.cs:902`）：

```csharp
private void SetStatInternal(string statId, int value)
{
    if (!this._deactivateAchievements)
    {
        AchievementManager.SetStat(statId, value);
    }
}
```

**每个 `ProgressXxx` / `CheckXxx` 方法的形状都一样**：先判 `_deactivateAchievements` 早退，再判事件前提，然后用 `_cachedXxx` 字段做去重，最后调 `SetStatInternal`。`_cachedXxx` 那 40 多个字段**一个都不进存档**——它们是「上一次写进去的值」的内存镜像，用来避免同一个事件重复写同一个键。比如 `OnAgentRemoved`（第 422 行）：`int num = this._cachedDefeatedTroopCount + 1; this._cachedDefeatedTroopCount = num; this.SetStatInternal(statId, num);`

**第三条：启动面。** 缓存重建发生在两个时机，都是同一个「先自检，不合格就自杀」的三段式（`OnGameLoadFinished` 第 128 行 / `OnNewGameCreatedPartialFollowUpEnd` 第 237 行）：

```csharp
private void OnGameLoadFinished()
{
    TextObject reason;
    if (this.CheckAchievementSystemActivity(out reason))
    {
        this.CacheAndInitializeAchievementVariables();   // async void
        this.CacheHighestSkillValue();
        return;
    }
    this.DeactivateAchievements(reason, true, false);   // permanently = true
}
```

`CacheAndInitializeAchievementVariables` 是 `async void`（第 143 行），它 `MBObjectManager.Instance.GetObject<ItemObject>("butter")` 然后把 40 多个统计键拉一遍填进 `_cachedXxx`。**因为是 `async void`、且启动时没有任何 await 阻塞点，行为构造完到缓存填完之间存在一个窗口**，这期间 `SetStatInternal` 看到的 `_cachedXxx` 全是 0。

**第四条：任务钩子。** 战斗统计不走 campaign 事件而是挂 mission 行为（`OnMissionStarted`，第 405 行）：

```csharp
private void OnMissionStarted(IMission obj)
{
    AchievementsCampaignBehavior.AchievementMissionLogic logic =
        new AchievementsCampaignBehavior.AchievementMissionLogic(
            new Action<Agent, Agent>(this.OnAgentRemoved),
            new Action<Agent, WeaponComponentData, BoneBodyPartType, int>(this.OnAgentHit));
    Mission.Current.AddMissionBehavior(logic);
}
```

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | **只搬一个字段**：`dataStore.SyncData<bool>("_deactivateAchievements", ref this._deactivateAchievements);`（第 35 行）。40 多个 `_cachedXxx` 一个都不存——它们在下次加载时由 `CacheAndInitializeAchievementVariables` 从平台重新拉。**含义：成就进度本身存在平台侧（Steam 存档），不在这棵战役存档里。** |
| `RegisterEvents` | `public override void RegisterEvents()` | 挂 33 个非序列化监听。注意用的是 `AddNonSerializedListener`，所以**读档后不会被恢复**，得靠 `CampaignBehaviorManager` 重新调一次。 |
| `CheckAchievementSystemActivity` | `public bool CheckAchievementSystemActivity(out TextObject reason)` | 三个条件的或：`(!this._deactivateAchievements && behavior != null && flag) || MBDebug.IsTestMode()`（第 326 行）。其中 `flag` 来自 `DumpIntegrityCampaignBehavior.IsGameIntegrityAchieved(out reason)`，`behavior` 是同一存档里的 `DumpIntegrityCampaignBehavior` 实例。**测试模式下恒返回 true，任何作弊器导致的存档完整性失败都被绕过。** `reason` 在失败时被填成人类可读原因。 |
| `DeactivateAchievements` | `public void DeactivateAchievements(TextObject reason = null, bool showMessage = true, bool temporarily = false)` | 三个效果叠在一起：改标志位、**全局摘掉自己所有监听**、弹一条 quick information（`reason` 为空时用内置的 `"{=Z9mcDuDi}Achievements are disabled!"`，时长 4000ms）。标志位那一行是 `this._deactivateAchievements = (!temporarily \|\| this._deactivateAchievements);`——即 `temporarily == true` 时标志只置位不清除，**这叫「临时」；`temporarily == false` 时标志无条件置 true，永久停用。** |
| `OnRadagosDuelWon` | `public void OnRadagosDuelWon()` | 单行：`this.SetStatInternal("RadagosDefeatedInDuel", 1);`（第 461–464 行）。唯一调用点在 `StoryMode/Quests/TutorialPhase/FindHideoutTutorialQuest.cs:573`。这是 mod 能直接调用的最省事的扩展点之一。 |

## 真实示例

**用法一：让玩家用了作弊器之后成就自动停摆（官方就是这么做的）。** 两个官方调用点都长这样（`StoryMode.GauntletUI/Map/GauntletStoryModeMapCheatsView.cs:38-40`）：

```csharp
AchievementsCampaignBehavior behavior = Campaign.Current.GetCampaignBehavior<AchievementsCampaignBehavior>();
if (behavior.CheckAchievementSystemActivity(out TextObject reason))
{
    behavior.DeactivateAchievements(
        new TextObject("{=sO8Zh3ZH}Achievements are disabled due to cheat usage.", null),
        true,   // showMessage
        false); // temporarily = false → 标志永久置位并写入存档
}
```

自己写一个作弊入口时照抄这个形状即可。**注意 `Campaign.Current.GetCampaignBehavior<T>()` 会返回 null**——因为这个行为只在故事模式模块加载时才 `AddBehavior`，裸战役（无模块）下没有。所以官方每处都判空。

**用法二：自己加一条统计。** 40 多个 `ProgressXxx` 都是私有方法，继承不了；正确姿势是自己写一个行为、调 `AchievementManager.SetStat`：

```csharp
using TaleWorlds.AchievementSystem;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

public class ModExecutionAchievementBehavior : CampaignBehaviorBase
{
    private const string ExecutedCountStatID = "MyModExecutedCount";

    public ModExecutionAchievementBehavior() : base("MyModExecutionAchievement")
    {
    }

    public override void RegisterEvents()
    {
        CampaignEvents.HeroKilledEvent.AddNonSerializedListener(
            this,
            new Action<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool>(this.OnHeroKilled));
    }

    private void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)
    {
        if (killer == Hero.MainHero)
        {
            // 自己维护本地计数，因为 AchievementManager.GetStat 在无平台服务时恒返回 0。
            int next = ModExecutionStatCache.Value + 1;
            ModExecutionStatCache.Value = next;
            AchievementManager.SetStat(ExecutedCountStatID, next);
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData<int>("_myModExecutionCount", ref ModExecutionStatCache.Value);
    }
}

public static class ModExecutionStatCache
{
    public static int Value;
}
```

`CampaignEvents.HeroKilledEvent` 的委托形状 `(Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool)` 与 `AchievementsCampaignBehavior.cs:46` 逐字一致，可以直接对着抄。

**用法三：任务回调。** 想在某个任务节点推统计，官方是这么找行为再调 public 方法的（`StoryMode/Quests/TutorialPhase/FindHideoutTutorialQuest.cs:570-573`）：

```csharp
AchievementsCampaignBehavior behavior =
    Campaign.Current.CampaignBehaviorManager.GetBehavior<AchievementsCampaignBehavior>();
if (behavior != null)
{
    behavior.OnRadagosDuelWon();
}
```

## 风险与边界

- **`OnAgentRemoved` 与 `OnScoreHit` 不在这个类上。** 自动生成的 stub 把它们标成 `public override`，那是反编译器的产物：真实声明在**嵌套私有类** `AchievementsCampaignBehavior.AchievementMissionLogic : MissionLogic` 里（`AchievementsCampaignBehavior.cs:1079-1115`），签名是 `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` 和 `public override void OnScoreHit(Agent, Agent, WeaponComponentData, bool, bool, in Blow, in AttackCollisionData, float, float, float)`。基类是 **`MissionLogic`**，不是 `MissionBehavior`。想覆写这两个回调，得自己写一个 `MissionLogic` 并 `Mission.Current.AddMissionBehavior(...)`，**继承 `AchievementsCampaignBehavior` 是没用的——这个类没有把它们暴露成 virtual**。
- **`DeactivateAchievements` 会 `CampaignEventDispatcher.Instance.RemoveListeners(this)`，而没有任何地方重新注册。** 第 890 行那一句一次性摘掉本行为通过 `AddNonSerializedListener` 挂上的全部 33 个监听，且**存档、读档、重开战役都不会恢复**——因为 `RegisterEvents` 只在行为构造时调一次。所以「临时停用」这个参数名有误导性：`temporarily: true` 只是**不清标志位**，监听照样永久摘掉，行为照样不再收任何事件。
- **`MBDebug.IsTestMode()` 让整个自检短路。** `CheckAchievementSystemActivity` 的返回表达式最后是 `|| MBDebug.IsTestMode()`，测试模式下无论用了什么作弊器、完整性校验是否失败，一律返回 `true`。拿它当「成就系统是否健康」的探针，在开发环境里得到的是假阳性。
- **`CacheAndInitializeAchievementVariables` 是 `async void`，异常会被吞掉。** 第 143 行签名就是 `private async void ...`。它内部要 `GetObject<ItemObject>("butter")`，如果对象表里没有 `butter`（mod 删了原版物品），`async void` 抛出的异常不会回到调用者，**表现为「成就统计莫名其妙不动」而不是崩溃**。这是排查此类问题时的第一怀疑点。
- **`SetStatInternal` 在 `_deactivateAchievements` 为 true 时静默丢弃写入。** 没有日志、没有返回值。官方行为里那 40 多个 `_cachedXxx` 字段**照样会被更新**（它们在调用 `SetStatInternal` 之前就写了），所以内存缓存和平台状态会静默分叉。
- **统计键是 40 多个硬编码 `private const string`，全在 private 里。** 想复用官方的键（比如读 `CreatedKingdomCount` 去做别的事），拿不到常量，只能自己写字面量，且**拼错不报错**。见 [Achievement](../Achievement) 页对键命名空间的说明。
- **`OnSettlementEnter` 里有除零风险。** 第 334 行起：`int num2 = MathF.Floor((float)num / 30f); int num3 = this._settlementIntegerSetList[num2];`，索引来自「按 30 个一批」的分桶数组。`_settlementIntegerSetList` 只在 `CacheAndInitializeAchievementVariables` 里填，**启动窗口内（async void 未完成）进城镇会读到默认空列表**。
- **`const float SettlementCountStoredInIntegerSet = 30f;`（第 911 行）是个命名与类型都不符的常量。** 值 30 是「每个整数集合存多少个定居点」，常量名说成「Float 存储的数量」，读代码时别被名字带偏。

## 跨版本提示

`AchievementsCampaignBehavior` 在 1.3.0 → 1.5.3 之间的变化**全部落在 private 成员上，8 个 public 成员一个没动**（逐行比对 public/protected 声明集合：1.3.0 与 1.5.3 完全一致，差集为空）。但有两处私有签名变了，且**都会让照抄的 mod 代码编译失败**：

- **`OnHideoutBattleCompleted` 多了第三个参数。** 1.3.0 是 `private void OnHideoutBattleCompleted(BattleSideEnum winnerSide, HideoutEventComponent hideoutEventComponent)`；1.5.3 是 `private void OnHideoutBattleCompleted(BattleSideEnum winnerSide, HideoutEventComponent hideoutEventComponent, HideoutEventComponent.HideoutBattleEndState battleEndState)`。这意味着 **`CampaignEvents.OnHideoutBattleCompletedEvent` 的委托类型变了**——1.3.0 上写 `new Action<BattleSideEnum, HideoutEventComponent>(...)` 迁到 1.5.3 会编译不过，必须改成三参。
- **新增了 `private void OnCharacterCreationOver(int index)`。** 对应 `CampaignEvents.OnCharacterCreationIsOverEvent` 从无参变成带 `int index` 的委托。同样是 breaking。
- **新增了 `private void CollectMetadataEntries(List<KeyValuePair<string, string>> list)`。** 一个新的元数据钩子，与统计无关。
- `SyncData` 仍然只搬 `_deactivateAchievements` 一个字段，40 多个 `private const string XxxStatID` 常量集合在 1.3.0 与 1.5.3 之间**完全一致**（逐条比对，差集为空）——统计键名字没有增删。

`StoryMode/StoryModeSubModule.cs` 里那行 `campaignGameStarter.AddBehavior(new AchievementsCampaignBehavior())` 在 1.4.6 / 1.4.7 / 1.5.3 里也保持原样。

**对 mod 的结论：`OnRadagosDuelWon()` / `CheckAchievementSystemActivity(out)` / `DeactivateAchievements(...)` 三个 public 方法可以放心从 1.3.0 抄到 1.5.3；如果你自己监听 `OnHideoutBattleCompletedEvent` 或 `OnCharacterCreationIsOverEvent`，必须按目标版本重查委托签名。** 1.3.15 与 1.4.5 两棵树不含 `StoryMode` 工程（前者只有引擎侧程序集，后者只有裁剪过的 `Bannerlord.Source`），无法作为中间版本对照。

## 依赖关系

- 基类：[CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) 提供 `StringId`、两个构造器与 `SyncData` / `RegisterEvents` 的抽象声明
- 存档契约：[IDataStore](../../campaign/IDataStore) 的 `SyncData<T>(key, ref field)` 是本类唯一用到的存档成员，语义（存恒 true、读 miss 静默）见该页
- 注册入口：`StoryMode/StoryModeSubModule.cs:80` 的 `campaignGameStarter.AddBehavior(new AchievementsCampaignBehavior())`
- 事件宿主：[CampaignBehaviorManager](../../campaign/CampaignBehaviorManager) 负责读档后重新分派 `RegisterEvents`，以及存档时逐个调 `SyncData`
- 写入目标：[AchievementManager](../AchievementManager) 的 `SetStat`，DTO 侧是 [Achievement](../Achievement)
- 完整性判据：[DumpIntegrityCampaignBehavior](../DumpIntegrityCampaignBehavior) 的 `IsGameIntegrityAchieved(out TextObject)`，`CheckAchievementSystemActivity` 三个条件之一
- 任务侧调用点：`StoryMode/Quests/TutorialPhase/FindHideoutTutorialQuest.cs:570`（`OnRadagosDuelWon`）与 `StoryMode.GauntletUI/Map/GauntletStoryModeMapCheatsView.cs:21,36`（`CheckAchievementSystemActivity` / `DeactivateAchievements`）
- 战斗钩子基类：[MissionLogic](../../mission-ext/MissionLogic) 是嵌套类 `AchievementMissionLogic` 的真实基类
- 桶首页：[campaign-ext API 分区](../)