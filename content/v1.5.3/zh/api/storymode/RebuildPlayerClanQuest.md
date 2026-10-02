---
title: "RebuildPlayerClanQuest"
description: "教程后的氏族重建任务：同时推进金钱 2000、部队规模、氏族声望 50、招募同伴 1 四条日志，全部达标即完成并奖励 25 声望。"
---
# RebuildPlayerClanQuest

**Namespace:** StoryMode.Quests.PlayerClanQuests
**Module:** StoryMode
**Type:** `public class RebuildPlayerClanQuest : StoryModeQuestBase`
**Base:** StoryModeQuestBase
**Source:** PlayerClanQuests/RebuildPlayerClanQuest.cs

## 概述

教程结束后的第一个正式任务。它没有任何对话、没有任何条件分支，只做一件事：把四条互不相关的玩家状态显示成任务日志上的四个进度条（现金 2000、部队人数、氏族声望 50、同伴 1 名），并**同时**监听七个战役事件，只要这四个条件同时满足就立刻完成并奖励 25 点声望。它是整份剧本里最"纯状态机"的一个类。

## 心智模型

它由教程收尾逻辑（`FindHideoutTutorialQuest.OnCompleteWithSuccess` → `CompleteTutorialPhase` 之后的引导流程）创建，无参构造、无时限（`CampaignTime.Never`）。它**没有一个触发条件的自定义判定方法**——判定完全靠 `UpdateProgresses()`，而这个方法被七个事件和 `HourlyTick` 无条件调用。设计意图是"只要任何可能改变这四个数值的事情发生，就重算一次全部进度"，简单但可靠。

坑：`UpdateProgresses` 里的三处比较**用了不同的钳制方式**。金钱用三元 `(Gold > 2000) ? 2000 : Gold`；部队用三元对比 `PartySizeGoal`（`BanditDensityModel.GetMinimumTroopCountForHideoutMission`）；声望用 `(Renown > 50f) ? 50 : (int)Renown`（**注意这里先把 float 转 int 再三元，比较的是 int 与 int**）。三者风格不统一，改动时要小心精度截断。同理 `HiredCompanionGoal` 比较的是 `Companions.Count > 1`，而 `Companions` 在玩家同伴死亡或被解散后可能减少——**进度会倒退**。

更大的坑是完成判定：`if (四个都 >= 目标 && !this._finishQuest) { this._finishQuest = true; CompleteQuestWithSuccess(); }`。`_finishQuest` 是**唯一的不存档字段**。因此在"达成条件 → 调用完成 → 存档"这个窗口里读档，`_finishQuest` 会退回 false，但日志进度已经是满的——下一次任意事件触发时会再次调用 `CompleteQuestWithSuccess()`。这是重复结算的来源。

## 主要成员

- `RebuildPlayerClanQuest()`：无参构造，`_finishQuest = false`、`SetDialogs()`（空实现）。
- `private static int _partySizeGoal`：**静态属性**，返回 `Campaign.Current.Models.BanditDensityModel.GetMinimumTroopCountForHideoutMission(MobileParty.MainParty, false)`。用 static + 属性意味着每次读都是实时的，但也意味着**难度设置改变时目标会跟着漂移**，任务日志上显示的 N 可能中途变化。
- `protected override void RegisterEvents()`：**七个事件**——`HeroOrPartyTradedGold`、`SettlementEntered`、`OnSettlementLeftEvent`、`MapEventEnded`、`OnTroopRecruitedEvent`、`RenownGained`、`NewCompanionAdded`，全部指向同一个 `UpdateProgresses`。
- `protected override void HourlyTick()`：兜底刷新，即使玩家什么都不做也会每小时检查一次。
- `private void UpdateProgresses()`：**唯一判定点**。写四条日志进度，检查四条件，`_finishQuest` 保护下完成。
- `protected override void OnStartQuest()`：写起始日志（`true` 表示可点击跳转）。
- `protected override void OnCompleteWithSuccess()`：`GainRenownAction.Apply(Hero.MainHero, 25f, false)` + 写成功日志。
- 常量：`GoldGoal = 2000`、`ClanTierRenownGoal = 50`、`HiredCompanionGoal = 1`、`RenownReward = 25`。注意方法里用的仍是**字面量** 2000 / 50 / 1，改常量不生效。
- `[SaveableField(1..4)]`：四条 `JournalLog` 全部存档。`_finishQuest` 不存档。

## 使用示例

```csharp
// 三种风格不一致的钳制：改这个方法时要统一，否则会引入进度倒退
private void UpdateProgresses()
{
    this._goldGoalLog.UpdateCurrentProgress((Hero.MainHero.Gold > 2000) ? 2000 : Hero.MainHero.Gold);
    this._partySizeGoalLog.UpdateCurrentProgress(
        (PartyBase.MainParty.MemberRoster.TotalManCount > _partySizeGoal) ? _partySizeGoal
                                                                     : PartyBase.MainParty.MemberRoster.TotalManCount);
    this._clanTierGoalLog.UpdateCurrentProgress((Clan.PlayerClan.Renown > 50f) ? 50 : ((int)Clan.PlayerClan.Renown));
    this._hireCompanionGoalLog.UpdateCurrentProgress((Clan.PlayerClan.Companions.Count > 1) ? 1 : Clan.PlayerClan.Companions.Count);

    if (this._goldGoalLog.CurrentProgress >= 2000 &&
        this._partySizeGoalLog.CurrentProgress >= _partySizeGoal &&
        this._clanTierGoalLog.CurrentProgress >= 50 &&
        this._hireCompanionGoalLog.CurrentProgress >= 1 &&
        !this._finishQuest)
    {
        this._finishQuest = true;
        CompleteQuestWithSuccess();
    }
}
```

## 风险与边界

进度可倒退：同伴死亡、金钱花掉、部队减员都会让日志条回退，这让"已满但又掉了"的情况很常见（此时任务不会失败，只是等玩家补回来）。`_finishQuest` 不存档导致的**重复完成调用**是本类唯一的状态一致性风险。`_partySizeGoal` 读的是 `BanditDensityModel`，也就是说**这个任务的第二条目标受难度模型影响**——把难度调低会让目标变简单，这在读档后立刻生效，可能让玩家瞬间满足条件。声望那条把 float 先转 int 再比较，`Renown` 是连续值，转 int 会截断小数，进度条可能比实际声望少 1 点。它没有任何对话，所以玩家无法在任务列表里追问目标含义——四条日志文案是唯一的说明。

## 依赖关系

- [RescueFamilyQuestBehavior（在本任务完成后接续）](../RescueFamilyQuestBehavior)
- [RebuildPlayerClanQuestBehaviorTypeDefiner（存档注册，编号写在同目录的另一文件里）](../RebuildPlayerClanQuestBehaviorTypeDefiner)
- [FindHideoutTutorialQuest（教程收尾后触发它）](../FindHideoutTutorialQuest)
- [CampaignEvents（七个驱动事件）](../../campaign/CampaignEvents)