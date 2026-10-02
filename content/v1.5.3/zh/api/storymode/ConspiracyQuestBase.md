---
title: "ConspiracyQuestBase"
description: "第二阶段阴谋任务抽象基类：统一 21 天时限、地图通知、统一削弱阴谋强度的结算，并提供按等级分配劫匪的公共算法。"
---
# ConspiracyQuestBase

**Namespace:** StoryMode.Quests.SecondPhase
**Module:** StoryMode
**Type:** `public abstract class ConspiracyQuestBase : QuestBase`
**Base:** QuestBase
**Source:** SecondPhase/ConspiracyQuestBase.cs

## 概述

三个阴谋任务（`DestroyRaidersConspiracyQuest`、`DisruptSupplyLinesConspiracyQuest`、`ConspiracyBaseOfOperationsDiscoveredConspiracyQuest`）的唯一共同父类。它自己继承的是**裸 `QuestBase`** 而不是 `StoryModeQuestBase`——所以它没有 `SpecialQuestType` 之外的剧本加成。它提供三件事：统一的 21 天时限与到期失败、统一的开场 UI（地图通知 + 两条开场日志）、以及成功时统一调 `SecondPhase.DecreaseConspiracyStrength(...)`。另外还附带一个通用的"按等级模板给队伍分配兵力"的工具方法。

## 心智模型

阴谋任务由第二阶段的 `SecondPhaseCampaignBehavior` 按固定间隔派发，每次派发都会 `new` 一个具体子类。`Mentor` 属性是它的身份核心：**它在构造期不接收导师，而是在运行时从 `StoryModeManager.Current.MainStoryLine.IsOnImperialQuestLine` 推导**——帝国任务线派发的任务，其导师是反帝国导师，反之亦然。也就是说阴谋任务永远是"敌对方的委托"，这是设计。

它监听 `StoryModeEvents.OnConspiracyActivatedEvent`，一旦阴谋被激活（即阴谋强度被削到 0、进入第三阶段）就立刻 `CompleteQuestWithFail(null)`——**正在进行的阴谋任务会被强制判失败**，不需要额外清理逻辑。

坑：`protected ConspiracyQuestBase(string questId, Hero questGiver)` 里 `base(questId, questGiver, CampaignTime.DaysFromNow(21f), 0)` 用了**构造期求值的 21 天**，紧接着又 `ChangeQuestDueTime(CampaignTime.DaysFromNow(21f))` 再设一次。第二句是给读档后重建的任务用的（读档走的是 `InitializeQuestOnGameLoad`，不跑构造），但它写在构造器里所以只在构造时执行一次——真正保证读档后时限正确的是 `QuestBase` 自身的存档时限。四个 `abstract` 属性如果不实现，派生类无法编译，这是它作为扩展点的主要价值：mod 可以写自己的阴谋任务而不必碰框架。

## 主要成员

- `public abstract TextObject SideNotificationText { get; }`：任务发布时地图通知的文案。
- `public abstract TextObject StartMessageLogFromMentor { get; }`：导师发来的**消息**式开场日志。
- `public abstract TextObject StartLog { get; }`：导师发来的**任务目标**式开场日志。
- `public abstract float ConspiracyStrengthDecreaseAmount { get; }`：成功后削减多少阴谋强度。三个子类分别返回 50f / 75f / 动态值。
- `public Hero Mentor`：**运行时推导**的导师。`IsOnImperialQuestLine` 为真返回 `AntiImperialMentor`，否则返回 `ImperialMentor`。
- `public override string SpecialQuestType`：固定返回 `"MainStoryline"`，让 UI 把它归到主线类任务。
- `public override bool IsRemainingTimeHidden`：覆写为 `false`，21 天倒计时对玩家可见。
- `protected override void RegisterEvents()`：挂 `OnConspiracyActivatedEvent` → `CompleteQuestWithFail(null)`。
- `protected override void OnStartQuest()`：发地图通知（`CampaignInformationManager.NewMapNoticeAdded`）、写两条开场日志。
- `protected override void OnCompleteWithSuccess()`：**唯一的成功副作用**——`StoryModeManager.Current.MainStoryLine.SecondPhase.DecreaseConspiracyStrength(ConspiracyStrengthDecreaseAmount)`。
- `protected void DistributeConspiracyRaiderTroopsByLevel(PartyTemplateObject raiderTemplate, PartyBase partyToFill, int troopCountLimit)`：按模板里各兵种的 `Character.Level` 分组，**按等级权重**（等级值之和做分母）把 `troopCountLimit` 人分下去；不足部分用最低等级兵种补齐。三个子类生成阴谋士兵时都走这里。

## 使用示例

```csharp
// 派生一个自己的阴谋任务：四个抽象属性是唯一的强制实现
public class MyConspiracyQuest : ConspiracyQuestBase
{
    public override TextObject SideNotificationText => new TextObject("{=xxxx}新的委托");
    public override TextObject StartMessageLogFromMentor => new TextObject("{=xxxx}导师找你");
    public override TextObject StartLog        => new TextObject("{=xxxx}去做这件事");
    public override float ConspiracyStrengthDecreaseAmount => 50f;

    public MyConspiracyQuest(string questId, Hero questGiver) : base(questId, questGiver) { }

    // 生成阴谋士兵时复用父类的按等级分配算法
    protected void Spawn(MobileParty party, PartyTemplateObject tpl, int count)
    {
        DistributeConspiracyRaiderTroopsByLevel(tpl, party.Party, count);
    }
}
```

## 风险与边界

它是三个阴谋任务的**唯一成功副作用出口**——如果派生类忘了 override `OnCompleteWithSuccess`（C# 不会强制），完成时就不会削弱阴谋强度，阴谋永远打不完。反过来，`OnConspiracyActivatedEvent` 是"别人完成最后一个阴谋任务"触发的全局事件，本任务会在这一刻被判失败；派生类如果在这里 `CompleteQuestWithSuccess` 会与基类直接冲突。`DistributeConspiracyRaiderTroopsByLevel` 的权重是"等级和"而非"数量"，高等级兵种权重更大；如果模板里所有兵种等级相同就退化成平均分配，模板只有一个等级时补齐逻辑会用 `list[0].Value[0]` 兜底。三条阴谋任务在派发时由 `SecondPhaseCampaignBehavior` 决定是**并发存在**的，所以 `OnFinalize` 里互相清理是必需的。

## 依赖关系

- [ConspiracyProgressQuest（驱动阴谋强度累积的常驻任务）](../ConspiracyProgressQuest)
- [DestroyRaidersConspiracyQuest（派生类）](../DestroyRaidersConspiracyQuest)
- [DisruptSupplyLinesConspiracyQuest（派生类）](../DisruptSupplyLinesConspiracyQuest)
- [ConspiracyBaseOfOperationsDiscoveredConspiracyQuest（派生类）](../ConspiracyBaseOfOperationsDiscoveredConspiracyQuest)
- [CampaignBehaviorManager（阴谋任务由战役行为派发）](../../campaign-ext/CampaignBehaviorManager)