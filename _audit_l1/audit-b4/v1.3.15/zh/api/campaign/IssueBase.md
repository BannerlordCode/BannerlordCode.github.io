---
title: "IssueBase"
description: "IssueBase：mod 自定义「议题（Issue，一种小型任务）」的抽象基类，定义议题的生成、三种解法（经典任务 / 派兵备选方案 / 领主斡旋）与完成、取消、结算的全生命周期，以及它们如何与 IssueManager、QuestBase、Hero、Settlement 协作。"
---
# IssueBase

**Namespace:** `TaleWorlds.CampaignSystem.Issues`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class IssueBase : MBObjectBase`  
**Base:** `MBObjectBase`  
**File:** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/IssueBase.cs`

## 一句话职责

它是战役里「某个 NPC 想请你帮忙解决的一件小事」（招募人手、送一批货、教训敌人等）的基类：mod 通过继承它来定义一个议题的文本、解法条件和奖励，并由 `IssueManager` 负责把它生成到世界上、推进它、在条件满足时结算并移除它。

## 心智模型

把 `IssueBase` 理解为**「战役地图上的一次性迷你任务模板」**，而不是一场 `Mission`，也不是一个 `QuestBase` 本身：

- 议题由 **`IssueManager`** 持有，以 `Hero`（议题发起人 `IssueOwner`）为键存放在 `IssueManager.Issues` 字典里。一个英雄同一时刻通常只持有一个活跃议题。
- 议题**不会**自己出现。是某个 `CampaignBehaviorBase`（例如游戏内置的 `GangLeaderNeedsRecruitsIssueBehavior`）通过订阅 `CampaignEvents.OnCheckForIssueEvent` 来「声明」该英雄可以生成某类议题；随后 `IssuesCampaignBehavior` 在每日逻辑里打分、调用 `IssueManager.CreateNewIssue(...)` 才真正创建实例。`CreateNewIssue` 内部调用你在 `PotentialIssueData` 里提供的 `StartIssueDelegate` 来 `new` 出你的子类。
- 议题有四种内部状态（`IssueState`）：`Ongoing`（仅挂起）、`SolvingWithQuestSolution`（接受了经典任务）、`SolvingWithAlternativeSolution`（派兵备选方案进行中）、`SolvingWithLordSolution`（领主斡旋进行中）。公开只读属性 `IsOngoingWithoutQuest` / `IsSolvingWithQuest` / `IsSolvingWithAlternative` / `IsSolvingWithLordSolution` 就是这些状态的判断口。
- 议题提供**三种解法**：① 经典任务（生成并返回一个 `QuestBase`，由 Quest 系统驱动）；② 备选方案（玩家派出一支部队，按天数自动返回并结算）；③ 领主斡旋（消耗影响力让 AI 领主解决）。你可以只实现其中一部分——用 `IsThereAlternativeSolution` / `IsThereLordSolution` 两个抽象属性决定开放哪些解法。
- 议题**不直接战斗**，也不拥有持久存档之外的独立状态；它与发起英雄、所在据点、可选派出的同伴 `Hero`、以及（经典解法时）一个 `QuestBase` 强绑定。议题的所有文本、对话流、日志都通过重写属性与虚方法来提供。

## 如何获取一个 IssueBase 实例

你**几乎不该自己 `new` 一个 `IssueBase` 子类**——正确做法是让你的 `CampaignBehaviorBase` 在某个 `Hero` 上「登记」潜在议题，再由引擎在你声明的权重下创建它：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Issues;

public class MyIssueBehavior : CampaignBehaviorBase
{
    // 引擎在每日判定时，对每个可能发起议题的英雄触发这个事件
    public void OnCheckForIssue(Hero hero)
    {
        if (hero.IsNotable && hero.CurrentSettlement != null)
        {
            // 第二个重载走默认反射构造（new MyIssue(issueOwner)），第一个重载用自定义委托
            Campaign.Current.IssueManager.AddPotentialIssueData(
                hero,
                new PotentialIssueData(OnStartIssue, typeof(MyIssue), IssueBase.IssueFrequency.Common));
        }
    }

    // 当引擎选中本议题并决定创建实例时调用，返回你的子类实例
    private static IssueBase OnStartIssue(in PotentialIssueData pid, Hero issueOwner)
    {
        return new MyIssue(issueOwner);
    }

    public override void RegisterEvents()
    {
        CampaignEvents.OnCheckForIssueEvent.AddNonSerializedListener(this, OnCheckForIssue);
    }

    public override void SyncData(IDataStore dataStore) { }
}
```

之后读取已有议题走 `IssueManager`：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Issues;

// 遍历所有活跃议题
foreach (KeyValuePair<Hero, IssueBase> pair in Campaign.Current.IssueManager.Issues)
{
    IssueBase issue = pair.Value;
    if (issue.GetType() == typeof(MyIssue) && issue.IsOngoingWithoutQuest)
    {
        // 例如：提示玩家该 NPC 有未接取的议题
    }
}

// 某个据点是否已经有同类型的活跃议题（避免重复生成）
bool alreadyThere = Campaign.Current.IssueManager.IsThereActiveIssueWithTypeInSettlement(
    typeof(MyIssue), Settlement.CurrentSettlement);
```

## 何时用 / 何时不要用

- **用 `IssueBase`**：当你想给战役世界里的某个 NPC（通常是 `Hero.IsNotable` 的村长/乡绅，或领主）添加一个「玩家可以接取、有文本对话、有奖励、会自动挂起与结算」的小型任务，并且希望它随存档/每日逻辑自然存活。
- **不要用 `IssueBase`** 来做：
  - 一场战斗/场景任务 → 用 `Mission` + `MissionBehavior` / `MissionLogic`。
  - 一个需要跨会话推进、可重复、无 NPC 发起人的长线目标 → 用独立的 `CampaignBehaviorBase` + `CampaignEventDispatcher` 自行建模，议题反而不合适。
  - 直接修改英雄金钱/关系/外交 → 调用对应的 `*Action.Apply`（如 `GiveGoldAction`、`ChangeRelationAction`），议题的 `Complete*With*` 方法内部正是用这些 Action 落账的。
  - 想绕过 `IssueManager` 手动 `new` 子类并塞进世界 → 议题不会进入 `IssueManager.Issues`，对话、结算、存档会全部失效。

## 依赖图

议题不是孤立类型，它的生与死都依赖下列协作方（点击进入对应深页）：

- [`IssueManager`](../../campaign-ext/IssueManager/) —— 持有所有活跃议题、驱动每日判定与结算、通过 `CreateNewIssue` 创建你的子类。
- [`CampaignBehaviorBase`](../../campaign-ext/CampaignBehaviorBase/) —— 你用来「声明」潜在议题并在 `OnCheckForIssue` 中登记 `PotentialIssueData` 的钩子基类。
- [`QuestBase`](../../campaign-ext/QuestBase/) —— 经典解法时由 `GenerateIssueQuest` 返回，任务推进与完成由 Quest 系统驱动，完成后回调议题的 `CompleteIssueWithQuest`。
- [`Hero`](../Hero/) —— `IssueOwner`（发起人）与 `AlternativeSolutionHero`（派出同伴）；议题的存在受英雄死亡/状态影响。
- [`Settlement`](../Settlement/) —— `IssueSettlement` 提供议题发生的据点上下文（仅当发起人是 notable 时非空）。
- [`Clan`](../Clan/) —— 领主解法消耗的 `NeededInfluenceForLordSolution` 从 `Clan.PlayerClan` 扣除。
- [`IssueState`](../IssueState/) / [`PreconditionFlags`](../PreconditionFlags/) —— 内部状态枚举与玩家接取前检查的旗标（后者为受保护枚举的公开镜像页）。
- [`Campaign`](../Campaign/) —— `Campaign.Current.IssueManager` 是拿到整个议题系统的唯一入口；`CampaignEventDispatcher.Instance.OnIssueUpdated` 在每次状态变化时被广播。
- 架构侧：[崩溃与存档边界](../../../architecture/crash-boundaries/)（议题改动 hero/据点时的坏档面）、[存档系统](../../../architecture/save-system/)（议题如何随 `SaveableField` 持久化）。

## 关键成员与调用时机

议题的公开/可重写成员按主题分组。下面每组先说明「什么时候会走到这里」，再列出具体成员。

### 1. 创建与生命周期钩子（由引擎在固定时机调用，你必须实现/可重写）

| 成员 | 签名 | 何时调用 / 副作用 |
|------|------|-------------------|
| 构造函数 | `protected IssueBase(Hero issueOwner, CampaignTime issueDueTime)` | 你的子类构造时调用 `base(issueOwner, CampaignTime.DaysFromNow(N))`。它把owner、截止时间、`IssueState.Ongoing`、空日志列表、空的备选部队名册设好，并订阅 `OnSettlementOwnerChanged`。 |
| 频率 | `public abstract IssueBase.IssueFrequency GetFrequency()` | `IssuesCampaignBehavior` 用它给候选议题打分决定「这个英雄更可能拿到哪类议题」。返回 `VeryCommon` / `Common` / `Rare`。 |
| 存活条件 | `public abstract bool IssueStayAliveConditions()` | `IssueManager` 在每日 tick、`OnSettlementEntered`、菜单打开等时机调用；返回 `false` 时议题被 `CompleteIssueWithStayAliveConditionsFailed` 自动取消。挂起议题靠它决定是否继续存在。 |
| 接取前检查 | `protected abstract bool CanPlayerTakeQuestConditions(Hero issueGiver, out PreconditionFlags flag, out Hero relationHero, out SkillObject skill, out int requiredGold)` | 玩家尝试接取经典任务前由 `CheckPreconditions` 调用，用来回报关系/技能/金钱/声望/影响力等不满足的旗标；`flag == None` 才允许接取。 |
| 生成 Quest | `protected abstract QuestBase GenerateIssueQuest(string questId)` | `StartIssueWithQuest()` 内部调用，传入 `base.StringId + "_quest"`，你必须 `return new MyIssueQuest(questId, issueOwner, dueTime, ...)`。 |
| 超时后果 | `protected abstract void CompleteIssueWithTimedOutConsequences()` | 议题因 `IssueDueTime` 过期被 `CompleteIssueWithTimedOut` 时调用，用来发放/扣除奖励。 |
| 创建后 | `protected virtual void AfterIssueCreation()` | `CreateNewIssue` 设置好 `StringId` 并加入字典后调用；可在此缓存引用或初始化运行时数据（默认空）。 |
| 读档后 | `protected abstract void OnGameLoad()` | 由 `IssueManager.InitializeForSavedGame` → `InitializeIssueBaseOnLoad()` 在每次读档后调用；务必在此重新订阅你需要的事件/监听器（构造时订阅的会随读档丢失）。 |
| 每小时 | `protected abstract void HourlyTick()` | `IssueManager.HourlyTick` 对每个议题调用，用于周期性检查（默认实现多为空）。 |
| 结束后 | `protected virtual void OnIssueFinalized()` | `IssueFinalized()` 在解绑、移除、清场之后调用，做最终清理（默认空）。 |

### 2. 状态与归属（读取与判断，不要直接改内部状态）

- `IssueOwner` (`Hero`，可读写)：议题发起人。设置它会自动在「派兵进行中 owner 死亡」时写一条日志。`IssueManager` 在英雄死亡时也会把 owner 换成新主人（`ChangeIssueOwner`）。
- `IssueQuest` (`QuestBase`，只读)：经典解法进行中时由 `GenerateIssueQuest` 产生的 Quest；其余状态为 `null`。
- `IssueSettlement` (`Settlement`，只读)：仅当 `IssueOwner` 是 notable 时返回 `IssueOwner.CurrentSettlement`，否则返回 `null`。用它之前一定要判空。
- `JournalEntries` (`MBReadOnlyList<JournalLog>`)：议题日志，向玩家展示进度；用 `AddLog` 追加。
- `IsOngoingWithoutQuest` / `IsSolvingWithQuest` / `IsSolvingWithAlternative` / `IsSolvingWithLordSolution`：四个只读布尔，对应内部 `IssueState`，是判断「当前处在哪种解法」的唯一正确入口。
- `IsTriedToSolveBefore` (只读)：是否曾经进入过任意一种解法；`Complete*` 系列方法据此决定结算时把奖励记到 `Hero.MainHero` 还是 `null`。

### 3. 三种解法的入口（由对话/UI 在你确认后调用）

- `public bool StartIssueWithQuest()`：把状态切到 `SolvingWithQuestSolution`，调用 `GenerateIssueQuest` 得到 Quest，置 `IssueDueTime = CampaignTime.Never`，并广播 `OnIssueUpdated(PlayerStartedIssueQuestClassicSolution)`。返回 `true`。通常由 `IssueManager.StartIssueQuest(hero)` 在玩家接取对话后调用。
- `public void StartIssueWithAlternativeSolution()`：校验备选方案条件、用 `IssueModel` 计算失败率/伤亡/所需天数，调用 `DisableHeroAction.Apply(AlternativeSolutionHero)` 让派出同伴离队，记录 `AlternativeSolutionReturnTimeForTroops`，并广播 `OnIssueUpdated(PlayerSentTroopsToQuest)`。之后由 `IssueManager.DailyTick` 在到达返回时间时调用 `CompleteIssueWithAlternativeSolution`。
- `public void StartIssueWithLordSolution()`：把状态切到 `SolvingWithLordSolution`，记录开始日志，并订阅 `BeforeGameMenuOpened` 以在进入据点菜单时弹出斡旋对话（含可能的 counter-offer）。

### 4. 完成与结束（结算收口，多数由引擎驱动；也可从 Quest 内回调）

这些方法都会最终调用 `IssueFinalized()`：清空 `IssueQuest`、移除自己订阅的所有事件监听器、调用 `IssueManager.DeactivateIssue(this)`（从 `Issues` 字典移除）、标记效果已结算、清空备选部队与追踪对象、触发 `OnIssueFinalized`。区别只在于「以什么名义广播 `OnIssueUpdated`」：

| 成员 | 广播的 IssueUpdateDetails | 典型触发 |
|------|---------------------------|----------|
| `CompleteIssueWithQuest()` | `IssueFinishedWithSuccess` | Quest 以成功完成（`IssueManager.OnQuestCompleted` 自动调用）。 |
| `CompleteIssueWithTimedOut()` | `IssueTimedOut` | 议题 `IssueDueTime` 过期且未被接取。 |
| `CompleteIssueWithStayAliveConditionsFailed()` | `IssueCancel` | `IssueStayAliveConditions()` 返回 `false`（发起英雄已不满足条件）。 |
| `CompleteIssueWithBetrayal()` | `IssueFinishedWithBetrayal` | 经典任务里玩家背叛（Quest 以 `FailWithBetrayal` 收尾）。 |
| `CompleteIssueWithFail(TextObject log = null)` | `IssueFail` | 经典任务失败。 |
| `CompleteIssueWithCancel(TextObject log = null)` | `IssueCancel` | 玩家取消，或发起英雄死亡（见 `IssueManager.OnHeroKilled`）。 |
| `CompleteIssueWithAiLord(Hero issueSolver)` | `IssueFinishedByAILord` | 领主解法由 AI 领主完成。 |
| `CompleteIssueWithAlternativeSolution()` | `SentTroopsFinishedQuest` / `SentTroopsFailedQuest` | 派兵部队到达返回时间后由 `IssueManager.DailyTick` 调用，按 `_failureChance` 决定成功/失败后果。 |
| `CompleteIssueWithLordSolutionWithRefuseCounterOffer()` | `IssueFinishedWithSuccess` | 玩家拒绝议价还价，扣 `NeededInfluenceForLordSolution` 影响力并发奖励。 |
| `CompleteIssueWithLordSolutionWithAcceptCounterOffer()` | （先 `CompleteIssueWithBetrayal`） | 玩家接受议价还价，视为背叛结算。 |

### 5. 备选方案（派兵）辅助（决定「派哪些兵、派多少、派多久」）

- `GetTotalAlternativeSolutionNeededMenCount()` / `GetTotalAlternativeSolutionDurationInDays()` / `GetBaseAlternativeSolutionDurationInDays()`：返回按 `AlternativeSolutionScaleFlags`（可缩放兵数/天数/伤亡/失败率）修正后的需求人数与天数；内部取 `IssueModel` 的 `GetTroopsRequiredForHero` / `GetDurationOfResolutionForHero`。
- `AlternativeSolutionCondition(out TextObject explanation)` / `DoTroopsSatisfyAlternativeSolution(TroopRoster, out TextObject)`：进入派兵解法前、以及派兵面板确认前对部队的校验；返回 `false` 时 `explanation` 给出拒绝理由。
- `IsTroopTypeNeededByAlternativeSolution(CharacterObject)`：判断某个兵种是否满足需求（例如「只收 tier≥2 的兵」）。
- `GetAlternativeSolutionSkill(Hero)`：返回派出的同伴应擅长的技能与等级门槛（用于 UI 高亮合适同伴）。
- `AlternativeSolutionScaleFlags` (`AlternativeSolutionScaleFlag`)：你重写它来声明本议题的备选方案是否随英雄/难度缩放兵数、天数、是否可能伤亡、是否有失败率。

### 6. 效果与日志

- `GetActiveIssueEffectAmount(IssueEffect issueEffect)`：返回尚未结算时某议题效果（如 `DefaultIssueEffects.IssueOwnerPower`）的当前数值；结算后返回 0。重写 `GetIssueEffectAmountInternal` 来提供具体数值。
- `AddLog(JournalLog log)`：向 `JournalEntries` 追加一条日志并广播 `OnIssueLogAdded`（玩家任务日志面板会更新）。
- `AddTrackedObject(ITrackableCampaignObject)` / `ToggleTrackedObjects(bool)`：把某个战役对象登记到地图追踪（小箭头）；`IssueFinalized` 会自动 `RemoveAllTrackedObjects`。

### 7. 英雄行为门控（事件回调，默认空、按需重写）

引擎在询问「某英雄能不能做 X」时会遍历所有活跃议题并调用对应虚方法，你可以用它们保护你的议题相关英雄（例如禁止在派兵期间让 `AlternativeSolutionHero` 死亡/被俘/结婚）：

- `OnHeroCanDieInfoIsRequested(Hero, KillCharacterAction.KillCharacterActionDetail, ref bool result)`
- `OnHeroCanBecomePrisonerInfoIsRequested(Hero, ref bool result)`
- `OnHeroCanMarryInfoIsRequested(Hero, ref bool result)`
- `OnHeroCanLeadPartyInfoIsRequested(Hero, ref bool result)`
- `OnHeroCanHavePartyRoleOrBeGovernorInfoIsRequested(Hero, ref bool result)`
- `OnHeroCanBeSelectedInInventoryInfoIsRequested(Hero, ref bool result)`
- `OnHeroCanMoveToSettlementInfoIsRequested(Hero, ref bool result)`
- `OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero, ref bool result)`
- `IsSettlementBusy(Settlement, object asker, ref int priority)`

把 `result` 设为 `false` 即可禁止；`IssueManager` 本身也会强制保证 `AlternativeSolutionHero` 在派兵期间不可死。

### 8. 必须实现的文本属性（抽象，提供对话与界面文案）

`Title`、`Description`、`IssueBriefByIssueGiver`、`IssueAcceptByPlayer`、`IssueQuestSolutionExplanationByIssueGiver`、`IssueQuestSolutionAcceptByPlayer`、`IsThereAlternativeSolution`、`IsThereLordSolution`。其余大量 `Issue*By*` / `Issue*Explanation*` / `Issue*Response*` 文本属性为 `virtual`，按需重写以填充对话分支；不重写即为空文本。

## 最小真实示例

### 示例 1：定义一个议题子类并登记它

下面给出「村长需要 30 天内凑一批货」的最小可运行骨架（省略 Quest 内部实现，仅展示议题侧契约）。它完全对应游戏内置 `GangLeaderNeedsRecruitsIssueBehavior` 的写法。

```csharp
using System;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Issues;
using TaleWorlds.CampaignSystem.Roster;
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.Localization;

public class GangLeaderNeedsRecruitsIssueBehavior : CampaignBehaviorBase
{
    // 议题子类：必须实现全部 abstract 成员
    public class GangLeaderNeedsRecruitsIssue : IssueBase
    {
        public override bool IsThereAlternativeSolution => false;
        public override bool IsThereLordSolution => false;

        public override TextObject Title => new TextObject("{=rrh7rSLs}Gang Needs Recruits");
        public override TextObject Description =>
            new TextObject("{=0kYaAb7c}A gang leader needs recruits for his gang.");
        public override TextObject IssueBriefByIssueGiver =>
            new TextObject("{=YxtiyxSf}Yes... I need men who understand how things work.");
        public override TextObject IssueAcceptByPlayer =>
            new TextObject("{=jGpBZDvC}I see. What do you want from me?");
        public override TextObject IssueQuestSolutionExplanationByIssueGiver =>
            new TextObject("{=Qh26ReAv}Recruit bandits into your party and bring them to me.");
        public override TextObject IssueQuestSolutionAcceptByPlayer =>
            new TextObject("{=ekLDmgS7}I'll find your recruits.");

        public GangLeaderNeedsRecruitsIssue(Hero issueOwner)
            : base(issueOwner, CampaignTime.DaysFromNow(30f)) { }

        protected override QuestBase GenerateIssueQuest(string questId)
        {
            // 经典解法：返回一个 QuestBase 子类，由 Quest 系统驱动
            return new GangLeaderNeedsRecruitsIssueQuest(questId, IssueOwner, CampaignTime.DaysFromNow(30f));
        }

        public override IssueBase.IssueFrequency GetFrequency() => IssueBase.IssueFrequency.VeryCommon;

        public override bool IssueStayAliveConditions() => true;

        protected override bool CanPlayerTakeQuestConditions(
            Hero issueGiver, out PreconditionFlags flag, out Hero relationHero,
            out SkillObject skill, out int requiredGold)
        {
            flag = PreconditionFlags.None;
            relationHero = null;
            skill = null;
            requiredGold = 0;
            if (issueGiver.GetRelationWithPlayer() < -10f)
            {
                flag |= PreconditionFlags.Relation;
                relationHero = issueGiver;
            }
            return flag == PreconditionFlags.None;
        }

        protected override void CompleteIssueWithTimedOutConsequences() { }
        protected override void OnGameLoad() { }
        protected override void HourlyTick() { }
    }

    // 经典解法的 Quest（仅示意构造）
    public class GangLeaderNeedsRecruitsIssueQuest : QuestBase
    {
        public GangLeaderNeedsRecruitsIssueQuest(string questId, Hero questGiver, CampaignTime duration)
            : base(questId, questGiver, duration, 0) { }

        public override TextObject Title => new TextObject("{=rrh7rSLs}Gang Needs Recruits");
        public override bool IsRemainingTimeHidden => false;
        protected override void SetDialogs() { }
        protected override void OnTimedOut() { }
        protected override void OnBeforeTimedOut(ref bool completeWithSuccess, ref bool doNotResolveTheQuest) { }
        protected override void InitializeQuestOnGameLoad() { }
        protected override void HourlyTick() { }
    }

    // 由 CampaignBehaviorBase 声明潜在议题
    public void OnCheckForIssue(Hero hero)
    {
        if (hero.IsGangLeader && hero.CurrentSettlement != null)
        {
            Campaign.Current.IssueManager.AddPotentialIssueData(
                hero,
                new PotentialIssueData(OnStartIssue, typeof(GangLeaderNeedsRecruitsIssue), IssueBase.IssueFrequency.VeryCommon));
        }
    }

    private static IssueBase OnStartIssue(in PotentialIssueData pid, Hero issueOwner)
        => new GangLeaderNeedsRecruitsIssue(issueOwner);

    public override void RegisterEvents()
        => CampaignEvents.OnCheckForIssueEvent.AddNonSerializedListener(this, OnCheckForIssue);

    public override void SyncData(IDataStore dataStore) { }
}
```

> 别忘了：议题子类与 Quest 子类都必须通过各自的 `SaveableTypeDefiner`（如 `GangLeaderNeedsRecruitsIssueBehaviorTypeDefiner`）注册，否则旧存档读不出、新存档也写不进。

### 示例 2：在代码中查询并推进议题

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Issues;

// 找到某个据点里仍挂起、可接取的议题数量（内部会顺势清理已不满足存活条件的）
int available = Campaign.Current.IssueManager.GetNumOfAvailableIssuesInSettlement(Settlement.CurrentSettlement);

// 玩家接取当前对话对象手上的议题（由对话流调用，内部会走 StartIssueWithQuest）
if (Hero.OneToOneConversationHero?.Issue != null && Hero.OneToOneConversationHero.Issue.IsOngoingWithoutQuest)
{
    Campaign.Current.IssueManager.StartIssueQuest(Hero.OneToOneConversationHero);
}
```

## 风险段

1. **绕开 `IssueManager` 创建议题**：自己 `new MyIssue(hero)` 后议题不会进入 `IssueManager.Issues`，对话、结算、每日判定、存档全部失效，等于一个死对象。生成只走 `IssueManager.CreateNewIssue`（经由你登记的 `PotentialIssueData`）。
2. **在生命周期之外调用 `StartIssueWith*` / `CompleteIssueWith*`**：这些方法会改变 `_issueState`、写日志、广播事件、解绑监听器。在错误阶段（例如议题已经 `IsSolvingWithAlternative` 还调用 `StartIssueWithQuest`）会导致状态机错乱与重复结算。经典解法应在 Quest 完成时被 `IssueManager.OnQuestCompleted` 自动收口，不要两边各调一次。
3. **读档后事件监听器丢失**：议题构造时订阅的 `OnSettlementOwnerChanged` 等监听器不会随存档恢复。务必在 `OnGameLoad()`（经 `InitializeIssueBaseOnLoad`）里重新订阅你自己需要的任何监听；否则派兵/据点易主等回调不再触发。
4. **保存兼容性与 `SaveableTypeDefiner`**：议题是 `MBObjectBase` 派生，所有要持久化的字段必须用 `[SaveableField(n)]` / `[SaveableProperty(n)]` 标注，并且子类要在 `SaveableTypeDefiner.DefineClassTypes` 里注册类型与版本号。新增/重排已存档字段会让旧存档坏档或读不出。跨版本 mod 尤需关注编号唯一性。
5. **引用已死亡 / 已移除的 Hero 与据点**：`IssueSettlement` 在 owner 不是 notable 时为 `null`，使用前必须判空；`AlternativeSolutionHero` 在派兵期间被引擎强制保护不可死，但你的代码若缓存了该引用、又在结算后访问其状态，要先确认 `IsAlive`。`IssueOwner` 死亡时 `IssueManager.OnHeroKilled` 会自动 `CompleteIssueWithCancel` 并把议题从字典移除——此后 `Campaign.Current.IssueManager.Issues` 里再也拿不到它。
6. **误用 `IssueStayAliveConditions()` 做副作用**：它会被 `IssueManager` 在每日 tick 与多次进入据点时高频调用，且返回 `false` 会直接取消议题。不要在里面写会改变世界状态的逻辑，只做纯判断。
7. **直接改 hero/据点状态绕过 Action**：议题奖励/后果应走 `GiveGoldAction`、`ChangeClanInfluenceAction`、`ChangeRelationAction` 等——`CompleteIssueWithLordSolutionWithRefuseCounterOffer` 内部正是如此。直接改 `Hero.Gold` 或 `Clan.Influence` 字段会绕过事件与修正，造成结算不一致。

## 跨版本提示

- 议题系统（`IssueBase` 抽象契约、`PotentialIssueData`、`IssueManager` 的创建/结算流程）在 **1.3.0 → 1.3.15 → 1.4.5** 之间保持一致：本文档列出的 `GenerateIssueQuest`、`StartIssueWithQuest`、`StartIssueWithAlternativeSolution`、`CompleteIssueWith*`、`IssueStayAliveConditions`、`CanPlayerTakeQuestConditions` 等核心成员三版同名同义。跨版本 mod 可直接沿用同一套子类写法。
- 唯一需要随版本关注的点是**存档注册**：每版 `SaveableTypeDefiner` 的类型编号与字段编号应独立维护，避免把为 1.4.5 写的编号直接套到 1.3.x 存档上。
- 业务代码应依赖 `IssueBase` / `IssueManager` 的公开 API 与 `QuestBase` 抽象，不要依赖 IssueBase 反编译里的私有字段（如 `_issueState`、`_issueDifficultyMultiplier`）。

## 导航

- [↑ 父级：Campaign API 索引](../)
- [↔ 同级：Hero](../Hero/) · [Settlement](../Settlement/) · [MobileParty](../MobileParty/) · [Clan](../Clan/) · [IssueState](../IssueState/) · [PreconditionFlags](../PreconditionFlags/)
- 相关类：[IssueManager](../../campaign-ext/IssueManager/) · [QuestBase](../../campaign-ext/QuestBase/) · [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/)
- 架构：[崩溃与存档边界](../../../architecture/crash-boundaries/) · [存档系统](../../../architecture/save-system/)
