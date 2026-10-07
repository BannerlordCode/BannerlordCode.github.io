---
title: "ArmyNeedsSuppliesIssueBehavior"
description: "「军团缺粮」问题行为的注册器：订阅 OnCheckForIssueEvent 与 ArmyDispersed，在满足「王国领主 + 自任军团领袖 + 凝聚力 > 80」时向 IssueManager 投递潜在问题，真正的 Issue 与 Quest 都是它的嵌套类。"
---

# ArmyNeedsSuppliesIssueBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ArmyNeedsSuppliesIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/ArmyNeedsSuppliesIssueBehavior.cs`

## 概述

`ArmyNeedsSuppliesIssueBehavior` 是 CampaignSystem 里**问题（Issue）子系统的典型注册器**，不是一个玩法逻辑类。它自身只有两个公开方法（`OnCheckForIssue`、`OnArmyDispersed`）和两个 override，**全部有效代码不到 60 行**（642 行里的其余部分属于它的三个嵌套类）。它做三件事：

1. 在 `RegisterEvents()` 里订阅 `CampaignEvents.OnCheckForIssueEvent` 与 `CampaignEvents.ArmyDispersed`
2. 在 `OnCheckForIssue(Hero)` 里判断这位英雄是否满足触发条件，满足就 `Campaign.Current.IssueManager.AddPotentialIssueData(...)` 投递一份潜在问题数据
3. 在 `OnArmyDispersed` 里发现军团解散时把挂在军团领袖身上的这个问题强制结束

在体系里它承担的是**「问题系统的插件接入点」**这一环。问题系统的骨架由 [IssueManager](../IssueManager) 和 [IssueBase](../IssueBase) 提供；每个具体问题（缺粮、工匠卖不掉货、物价被垄断、被山贼勒索……）都自带一个 `CampaignBehaviorBase` 派生类，用完全相同的形状接进去。`SandBoxManager.cs:162` 的 `gameStarter.AddBehavior(new ArmyNeedsSuppliesIssueBehavior());` 就是官方的注册点。

它内含三个嵌套类型：
- `ArmyNeedsSuppliesIssue : IssueBase` —— 问题本体（标题、简报、前置条件、存活条件、任务生成器）
- `ArmyNeedsSuppliesIssueQuest : QuestBase` —— 15 天的运送任务
- `ArmyNeedsSuppliesIssueTypeDefiner : SaveableTypeDefiner` —— 存档 id **585800**，把上面两个类注册为存档类型 1 和 2

## 心智模型

把它当成**「问题系统的插槽」**就对了。

- **两步式：behavior 投递 → IssueManager 决定要不要真的发起。** `OnCheckForIssue` 里的 `AddPotentialIssueData` **只是登记一条「这位英雄有资格发起这个问题」的记录**。真正弹出问题、进入对话，是 `IssueManager` 在后续 tick 里按 `IssueBase.IssueFrequency` 抽签决定的。**频率是 `VeryCommon`**（`ArmyNeedsSuppliesIssueBehavior.cs:595`），所以在符合条件的领主之间出现得相当频繁。
- **两个分支都要投递，但载荷不同。** 条件成立时传 `new PotentialIssueData(OnStartIssue, typeof(...), IssueBase.IssueFrequency.VeryCommon)`——**带一个工厂委托**；不成立时传 `new PotentialIssueData(typeof(...), IssueBase.IssueFrequency.VeryCommon)`——**只有类型没有工厂**。第二个分支是告诉 IssueManager「这类问题存在但这位英雄不合格」，这个区别很重要：它让 IssueManager 知道这个玩家见过这种问题类型。
- **触发条件只有一个，但很窄。** `ConditionsHold` 要求同时满足：`issueGiver.IsLord`、`issueGiver.MapFaction.IsKingdomFaction`（**必须是王国派系， clan 或 minor faction 不行**）、`issueGiver.PartyBelongedTo != null`、`PartyBelongedTo.Army != null`、`Army.ArmyOwner == issueGiver`（**必须是他自己领的军团**）、以及 `Army.Cohesion > 80f`。**凝聚力 80 是硬编码在 behavior 里的，不来自任何模型。**
- **存活条件比触发条件更严。** `IssueBase.IssueStayAliveConditions` 要求凝聚力 **> 40**、家族不是玩家家族、还是王国派系。**所以军团凝聚力从 90 掉到 50 时问题还活着，掉到 40 以下问题就消失了**——而 `IssueBase.IssueStayAliveConditions` 里的 `NumberOfManInArmy` 会被重新赋值，需求量随之变化。
- **「军团解散」是一个独立的取消路径。** `OnArmyDispersed`（`ArmyNeedsSuppliesIssueBehavior.cs:605-611`）检查 `army.ArmyOwner?.Issue is ArmyNeedsSuppliesIssue`，命中就调 `CompleteIssueWithStayAliveConditionsFailed()`。**注意它先取 `ArmyOwner` 再取 `Issue`，中间用了 `?.`，但 `ArmyOwner` 为 null 时后面的 `army.ArmyOwner.Issue` 又直接解引用了同一条链**——`?.` 的保护在这一行上是够的（`army.ArmyOwner?.Issue is ArmyNeedsSuppliesIssue` 成立才继续），所以实际安全。
- **`SyncData` 是空的。** 因为**真正的存档数据全在被注册的 Issue / Quest 实例里**，behavior 自己不持有任何跨存档状态。这个「行为本身无状态，问题实例有状态」的模式在整个问题系统里一致成立。

### 三个嵌套类型的分工

| 类型 | 基类 | 职责 | 存档 |
| --- | --- | --- | --- |
| `ArmyNeedsSuppliesIssue` | [IssueBase](../IssueBase) | 问题本体：标题、简报、前置 flag、存活条件、15 天期限、物资需求计算、生成任务 | `SaveableTypeDefiner` id **585800** 的类型 1 |
| `ArmyNeedsSuppliesIssueQuest` | [QuestBase](../QuestBase) | 运送粮草 / 牲畜 / 酒的对话与交付流程 | 同一 definer 的类型 2 |
| `ArmyNeedsSuppliesIssueTypeDefiner` | `SaveableTypeDefiner` | 存档类型 id 映射，构造器写死 `base(585800)` | 自身不入存档 |

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `RegisterEvents()` | `public override void RegisterEvents()` | 唯一的事件入口。订阅两条：`CampaignEvents.OnCheckForIssueEvent → OnCheckForIssue` 与 `CampaignEvents.ArmyDispersed → OnArmyDispersed`（`ArmyNeedsSuppliesIssueBehavior.cs:599-603`）。**两条都用 `AddNonSerializedListener`，所以事件引用不进存档**，读档后由 `CampaignBehaviorManager` 重新订阅。 |
| `OnCheckForIssue(Hero hero)` | `public void OnCheckForIssue(Hero hero)` | 问题系统的统一询问入口，**对地图上每个候选英雄调用**。条件成立就投递带工厂委托的 `PotentialIssueData`，不成立就投递只有类型的 `PotentialIssueData`（`ArmyNeedsSuppliesIssueBehavior.cs:613-623`）。**它自己不发问题，只登记资格。** |
| `OnArmyDispersed(Army army, Army.ArmyDispersionReason reason, bool arg3)` | `private void OnArmyDispersed(Army army, Army.ArmyDispersionReason reason, bool arg3)` | 军团解散后的清理路径。判 `army.ArmyOwner?.Issue is ArmyNeedsSuppliesIssue`，命中就 `CompleteIssueWithStayAliveConditionsFailed()`（`ArmyNeedsSuppliesIssueBehavior.cs:605-611`）。**`reason` 与 `arg3` 参数都没被使用**——不论什么原因解散，问题一律按「存活条件失败」取消，玩家拿不到失败惩罚。 |
| `SyncData(IDataStore dataStore)` | `public override void SyncData(IDataStore dataStore)` | **空实现**（`ArmyNeedsSuppliesIssueBehavior.cs:639-641`）。这是正确的：behavior 不持有任何跨存档字段，所有持久状态都在被 `IssueManager` 管理的 Issue / Quest 实例里。 |
| `ArmyNeedsSuppliesIssue.IssueStayAliveConditions()` | `public override bool IssueStayAliveConditions()` | 问题的存活判定：军团仍在、仍是该英雄的军团、凝聚力 **> 40**、家族不是玩家家族、仍是王国派系。**成立时会顺带刷新 `NumberOfManInArmy = Army.TotalRegularCount`**，所以物资需求量会随军势变化——这是它与 `ConditionsHold`（凝聚力 > 80）最大的差别。 |
| `ArmyNeedsSuppliesIssue.CanPlayerTakeQuestConditions(...)` | `protected override bool CanPlayerTakeQuestConditions(Hero issueGiver, out PreconditionFlags flags, out Hero relationHero, out SkillObject skill, out int requiredGold)` | 六个前置 flag 的或判断：关系低于 -10、玩家是王国领袖、双方交战、玩家家族 tier < 1、不同派系。**全部置位就返回 false**——这个问题的接取门槛相当高。 |
| `ArmyNeedsSuppliesIssue.GenerateIssueQuest(string questId)` | `protected override QuestBase GenerateIssueQuest(string questId)` | 玩家接受问题后生成任务：`new ArmyNeedsSuppliesIssueQuest(questId, IssueOwner, CampaignTime.DaysFromNow(15f), RewardGold, GrainAmount, LiveStockAmount, WineAmount)`。**三个需求量 `GrainAmount` / `LiveStockAmount` / `WineAmount` 都是从 `NumberOfManInArmy` 现算的**，没有独立存档字段——所以它们永远与当前军人数一致。 |
| `ArmyNeedsSuppliesIssue.GetFrequency()` | `public override IssueFrequency GetFrequency()` | 返回 `IssueFrequency.VeryCommon`。**注意这里用字面量而不是同文件里定义的 `ArmyNeedsSuppliesIssueFrequency` 常量**（`ArmyNeedsSuppliesIssueBehavior.cs:595`），那个 `private const` 同样是死代码。 |
| `ArmyNeedsSuppliesIssue.GetIssueEffectAmountInternal(IssueEffect)` | `protected override float GetIssueEffectAmountInternal(IssueEffect issueEffect)` | 问题未解决时的持续影响：`DefaultIssueEffects.ClanInfluence` 返回 **-0.1f**，其余返回 0。也就是问题挂着不动时，发起者家族影响力持续下降。 |

## 怎么用

这是问题（Issue）子系统的典型注册器，不是一个玩法逻辑类。它自身只有两个公开方法和两个 override，全部有效代码不到 60 行，其余六百多行属于它的三个嵌套类。理解它的正确方式是把它看成模板：所有具体问题都用同一个形状接进问题系统。

**怎么拿到它**：注册点是 `SandBoxManager.cs:162` 的 `gameStarter.AddBehavior(new ArmyNeedsSuppliesIssueBehavior())`，声明在 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/ArmyNeedsSuppliesIssueBehavior.cs:13`。事件订阅在 `ArmyNeedsSuppliesIssueBehavior.cs:601`（`OnCheckForIssueEvent`）和同文件附近（`ArmyDispersed`），三个嵌套类型分别是问题本体 `ArmyNeedsSuppliesIssue : IssueBase`（`:15`）、15 天的运送任务 `ArmyNeedsSuppliesIssueQuest : QuestBase`（`:170`）以及问题管理器需要的第三个辅助类。

它的工作是往 [IssueManager](../IssueManager) 投递一份「潜在问题数据」而不是直接开问题，投递入口是 `IssueManager.cs:215` 的 `AddPotentialIssueData`，载荷类型 `PotentialIssueData` 的构造器在 `PotentialIssueData.cs:21`。你的 mod 要复刻一个问题，照抄这个投递形状：

```csharp
public class MyIssueBehavior : CampaignBehaviorBase
{
    private void OnCheckForIssue(Hero hero)
    {
        if (hero.Clan == Clan.PlayerClan && hero.IsNotable && hero.Gold > 500)
        {
            Campaign.Current.IssueManager.AddPotentialIssueData(hero,
                new PotentialIssueData(OnStartIssue, typeof(MyIssue), IssueBase.IssueFrequency.Common, null));
        }
    }

    private static IssueBase OnStartIssue(in PotentialIssueData pid, Hero issueOwner)
    {
        return new MyIssue(issueOwner, CampaignTime.DaysFromNow(20f));
    }

    public override void RegisterEvents()
    {
        CampaignEvents.OnCheckForIssueEvent.AddNonSerializedListener(this, OnCheckForIssue);
    }
}
```

`StartIssueDelegate` 的签名在 `PotentialIssueData.cs:7`，注意第一个参数带 `in` 修饰，形状写错编译不过。行为本身零存档字段，`SyncData` 是空的。

**最常见的坑**：事件订阅一律用 `AddNonSerializedListener`，事件引用不进存档，读档后由 `CampaignBehaviorManager.AddBehavior` 重新调 `RegisterEvents` 订阅。mod 里对同一条 `OnCheckForIssueEvent` 重复订阅会让问题出现概率翻倍，因为两个行为都会各投递一份。

## 真实示例

注册这个行为（在 `OnGameInitializationStart` 里拿 `CampaignGameStarter`，形状照 `SandBoxManager.cs:162` 的官方注册）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.MountAndBlade;

public class MyIssuesBootstrap : MBSubModuleBase
{
    public override void OnGameInitializationStart()
    {
        base.OnGameInitializationStart();
        CampaignGameStarter starter = Campaign.Current.GetCampaignBehavior<CampaignGameStarter>();
        starter.AddBehavior(new ArmyNeedsSuppliesIssueBehavior());
    }
}
```

复用官方触发条件做自己的筛选（注意这几个判断在官方是私有的，只能自己复刻）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

public static bool QualifiesForArmySupplies(Hero candidate)
{
    if (candidate == null || candidate.PartyBelongedTo == null || candidate.PartyBelongedTo.Army == null)
    {
        return false;
    }

    Army army = candidate.PartyBelongedTo.Army;
    return candidate.IsLord
        && candidate.MapFaction.IsKingdomFaction
        && army.ArmyOwner == candidate
        && army.Cohesion > 80f;
}
```

检查某位领主身上是否已经挂着这个问题（走 `Hero.Issue` 这条官方路径）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Issues;

public static string DescribeIssueOn(Hero lord)
{
    if (lord == null)
    {
        return "no lord";
    }

    IssueBase issue = lord.Issue;
    if (issue == null)
    {
        return "no issue";
    }

    if (issue is ArmyNeedsSuppliesIssue)
    {
        return "army needs supplies, alive=" + issue.IssueStayAliveConditions();
    }

    return issue.GetType().Name;
}
```

主动结束某个问题（`CompleteIssueWithStayAliveConditionsFailed` 是公开方法，和 behavior 内部用的是同一个）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Issues;

public static void CancelSuppliesIssue(Hero lord)
{
    if (lord == null)
    {
        return;
    }

    IssueBase issue = lord.Issue;
    if (issue is ArmyNeedsSuppliesIssue)
    {
        issue.CompleteIssueWithStayAliveConditionsFailed();
        Debug.Print("issue cancelled for " + lord.Name.ToString(), 0);
    }
}
```

监听问题事件做自己的 UI 提示（`CampaignEvents.OnIssueUpdatedEvent` 是三个参数的 `IMbEvent<IssueBase, IssueBase.IssueUpdateDetails, Hero>`）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.CampaignSystem.Issues;

public class MyIssueWatcher : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnIssueUpdatedEvent.AddNonSerializedListener(this, OnIssueUpdated);
        CampaignEvents.OnNewIssueCreatedEvent.AddNonSerializedListener(this, OnNewIssueCreated);
    }

    private void OnIssueUpdated(IssueBase issue, IssueBase.IssueUpdateDetails details, Hero issueSolver)
    {
        if (issue is ArmyNeedsSuppliesIssue)
        {
            Debug.Print("army supplies update = " + details + " solver = "
                + (issueSolver != null ? issueSolver.Name.ToString() : "nobody"), 0);
        }
    }

    private void OnNewIssueCreated(IssueBase issue)
    {
        if (issue is ArmyNeedsSuppliesIssue)
        {
            Debug.Print("a new army supplies issue appeared", 0);
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

## 风险与边界

- **behavior 本身零存档字段。** `SyncData` 是空的。这意味着**你不能往 behavior 上加字段指望它被保存**——所有跨存档状态必须挂在 Issue / Quest 实例上，或自己写进 `SyncData`。
- **事件订阅用 `AddNonSerializedListener`。** 事件引用不进存档，读档后由 `CampaignBehaviorManager.AddBehavior` 重新调 `RegisterEvents` 订阅。**mod 里重复订阅同一条 `OnCheckForIssueEvent` 会让问题出现概率翻倍**（两个 behavior 都投递一份）。
- **触发阈值 80 与存活阈值 40 是两套硬编码数字。** 都在 `ArmyNeedsSupplies` 相关代码里写死，不来自任何模型。想改只能重写整个 behavior——因为 `ConditionsHold` 与 `IssueStayAliveConditions` 都是 `private` / `protected override`。
- **军团一解散问题立刻取消，且没有失败惩罚。** `OnArmyDispersed` 走 `CompleteIssueWithStayAliveConditionsFailed()` 而不是 `CompleteIssueWithTimedOut()`，**`reason` 参数被完全忽略**。玩家在军团被打散时不会因为「问题未解决」而受罚，但也拿不到任何补偿。
- **`OnArmyDispersed` 的第三个参数 `arg3` 也没被使用。** 它在 `CampaignEvents.ArmyDispersed` 的签名里表示「是不是玩家的军团」，官方行为刻意不管——**默认日志行为 `DefaultLogsCampaignBehavior` 反而会管**（只在 `isPlayersArmy` 时发通知）。
- **`GenerateIssueQuest` 每次现算需求量。** `GrainAmount` / `LiveStockAmount` / `WineAmount` 都是 `MathF.Ceiling(NumberOfManInArmy / 20 * 系数)` 的表达式属性，**没有独立存档字段**。这意味着军势变化会改变显示的需求量，而任务已在进行时不会重算——**这是有意的设计，不是 bug**。
- **`ArmyNeedsSuppliesIssueFrequency` 是死代码。** `ArmyNeedsSuppliesIssueBehavior.cs:595` 定义的 `private const IssueBase.IssueFrequency ArmyNeedsSuppliesIssueFrequency = IssueBase.IssueFrequency.VeryCommon;` 从未被引用，`GetFrequency()` 里写的是字面量。别引用它。
- **`CanPlayerTakeQuestConditions` 的门槛很高。** 六条 flag 任一命中就拒绝：关系 < -10、玩家是王国领袖、交战、家族 tier < 1、不同派系。**玩家作为王国领袖时根本接不了这个问题。**
- **要求王国派系，clan 与 minor faction 一律不合格。** `issueGiver.MapFaction.IsKingdomFaction` 在 `ConditionsHold` 与 `IssueStayAliveConditions` 里各写了一遍。**氏族领主永远不会触发这个问题。**
- **存档 id 是硬编码的 585800。** `ArmyNeedsSuppliesIssueTypeDefiner : SaveableTypeDefiner` 的构造器写死 `base(585800)`。**mod 复制一份这个 definer 会造成存档 id 冲突。**

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/ArmyNeedsSuppliesIssueBehavior.cs` 是 642 行原始源码：外层行为约 40 行，其余是三个嵌套类。跨版本比对时盯五点：存档 id `585800` 是否变过、触发阈值 80 与存活阈值 40 是否还在、`VeryCommon` 频率是否调整、`IssueStayAliveConditions` 里是否仍刷新 `NumberOfManInArmy`、以及 `OnArmyDispersed` 是否仍忽略 `reason`。**存档 id 变化是最危险的一种——它会让旧存档读不出这个问题。**

## 依赖关系

- 模块生命周期入口：[MBSubModuleBase](../../core/MBSubModuleBase) 的 `OnGameInitializationStart` 是 mod 拿 `CampaignGameStarter` 的时机
- 官方注册点：`SandBoxManager.cs:162` 的 `gameStarter.AddBehavior(new ArmyNeedsSuppliesIssueBehavior());`，紧随其后是另外三个工匠问题行为
- 问题子系统：[IssueManager](../IssueManager) 的 `AddPotentialIssueData(Hero, PotentialIssueData)` 是本行为唯一的输出通道；[PotentialIssueData](../PotentialIssueData) 有「带工厂」与「只带类型」两种构造
- 问题基类：[IssueBase](../IssueBase) 提供 `IssueOwner` / `IssueSettlement` / `CompleteIssueWithStayAliveConditionsFailed()` / `RewardGold` 默认实现 / `IsTriedToSolveBefore`
- 任务基类：[QuestBase](../QuestBase) 是 `ArmyNeedsSuppliesIssueQuest` 的父类，15 天期限与日志都在那里
- 触发依赖的战役对象：[Army](../Army)（`ArmyOwner` / `Cohesion` / `TotalRegularCount`）、[MobileParty](../MobileParty)（`PartyBelongedTo`）、[Clan](../Clan)（`IsLord` 判定链上的 `Tier` / `MapFaction`）
- 事件总线：[CampaignEvents](../CampaignEvents) 的 `OnCheckForIssueEvent` 与 `ArmyDispersed`；派发方是 `CampaignEventDispatcher`；问题侧还有 `OnIssueUpdatedEvent` / `OnNewIssueCreatedEvent` / `IssueLogAddedEvent`
- 存档：嵌套的 `ArmyNeedsSuppliesIssueTypeDefiner` 用 `SaveableTypeDefiner` 把 Issue 与 Quest 注册为存档类型 1 / 2
- 桶首页：[campaign API 分区](../)
