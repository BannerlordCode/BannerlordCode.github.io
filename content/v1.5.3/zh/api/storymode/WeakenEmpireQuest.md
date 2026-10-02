---
title: "WeakenEmpireQuest"
description: "第二阶段反帝国线目标任务：把三个帝国残余王国的城镇总数压到 4 座以下即完成，之后进入阴谋阶段。"
---
# WeakenEmpireQuest

**Namespace:** StoryMode.Quests.SecondPhase
**Module:** StoryMode
**Type:** `public class WeakenEmpireQuestBehavior.WeakenEmpireQuest : StoryModeQuestBase`
**Base:** StoryModeQuestBase
**Source:** SecondPhase/WeakenEmpireQuestBehavior.cs

## 概述

第二阶段反帝国线的目标追踪器。与帝国线那个"按比例占领"的任务不同，它的判定极其简单粗暴：把 `StoryModeData.NorthernEmpireKingdom`、`WesternEmpireKingdom`、`SouthernEmpireKingdom` 三个残余帝国的城镇数量加起来，**少于 4 座就算达成**。它没有进度条，只有一条起始日志写着"让帝国剩下的城镇不足 4 座"，然后每小时检查一次。

## 心智模型

它是 `StoryModeQuestBase` 的嵌套类，由外层 `WeakenEmpireQuestBehavior` 在玩家确立反帝国立场的那一刻 `StartQuest()`。任务 ID `weaken_empire_quest`，`CampaignTime.Never`。

它的全部状态判定就是一条 `HourlyTick` 里的 `QuestConditionsHold()`，没有任何事件订阅来加速反应——也就是说**即使玩家刚刚攻下最后一座城，也最多要等 1 战役小时才会推进**。这是刻意的低频轮询设计（省掉每帧判定），但 mod 如果想要即时反馈，需要自己挂 `OnSettlementOwnerChangedEvent` 或 `KingdomDestroyedEvent`。

坑：这个任务统计的是**城镇（Towns）**，不是聚落总数。夺取村庄、城堡都不减少这个数字。也就是说反帝国线真正的门槛是"打掉三座城"，而不是"拿下一片土地"——难度设计上的区别非常大，任何"削弱帝国"类 mod 改动都要先确认自己想改的是哪一层。另外三个 `StoryModeData.*EmpireKingdom` 静态属性在判定里**没有 null 检查**。

## 主要成员

- `public WeakenEmpireQuest(Hero questGiver)`：任务 ID `weaken_empire_quest`，`questGiver` 为反帝国导师。置 `_weakenedEmpire = false`、`SetDialogs()`（空实现）、`InitializeQuestOnCreation()`、写起始日志（含 `NUMBER=4` 变量）。
- `override TextObject Title`：反帝国线的任务标题。
- `private TextObject _questCanceledLogText`：只在"离开支持王国"分支用到。
- `protected override void InitializeQuestOnGameLoad()`：只重挂对话，不重算任何数值——因为它本来就没有需要持久化的数值。
- `protected override void RegisterEvents()`：`OnConspiracyActivatedEvent`（被别人抢先激活时保护）、`OnClanChangedKingdomEvent`（玩家反悔时取消）。
- `protected override void HourlyTick()`：**唯一的判定入口**。
- `private bool QuestConditionsHold()`：三个帝国残余王国的 `Towns.Count` 之和 `< 4`。
- `private void SuccessComplete()`：完成自己 → `_weakenedEmpire = true` → `SecondPhase.Instance.ActivateConspiracy()`。
- `private void OnConspiracyActivated()`：若 `_weakenedEmpire` 已为真则跳过，否则被抢先激活时走失败/取消路径。
- `private const int EmpireDefeatSettlementCount = 4`：阈值常量，**实际写在方法里的字面量 `4` 才是生效值**，改常量无效——这是本类最容易误改的地方。
- 存档字段：**没有** `[SaveableField]`。

## 使用示例

```csharp
// 达标即推进：注意字面量 4 与常量 EmpireDefeatSettlementCount 是重复的
protected override void HourlyTick()
{
    if (this.QuestConditionsHold())
    {
        this.SuccessComplete();
    }
}

private bool QuestConditionsHold()
{
    return StoryModeData.NorthernEmpireKingdom.Towns.Count
         + StoryModeData.WesternEmpireKingdom.Towns.Count
         + StoryModeData.SouthernEmpireKingdom.Towns.Count < 4;
}
```

## 风险与边界

**没有任何存档字段**，这是本类与 `AssembleEmpireQuest` 最大的结构差异。好消息是不存在"计数不入档导致偏差"的问题——它每次判定都直接读地图实时状态。坏消息是 `_weakenedEmpire` 也不存档，读档后保护标记丢失，如果玩家在达标瞬间读档、而阴谋已被别的路径激活，本任务会被判失败并与 `ActivateConspiracy` 重复触发。第二个风险是 `StoryModeData` 的三个静态王国引用：如果某个帝国被彻底摧毁导致引用失效，`HourlyTick` 会每小时抛一次 `NullReferenceException`。第三，任务没有任何奖励、声望或对话，纯功能性；`SetDialogs()` 是空的，玩家在任务栏只能看到一个标题和一条日志。

## 依赖关系

- [WeakenEmpireQuestBehavior（唯一创建者）](../WeakenEmpireQuestBehavior)
- [WeakenEmpireQuestBehaviorTypeDefiner（存档注册）](../WeakenEmpireQuestBehaviorTypeDefiner)
- [AssembleEmpireQuest（帝国线的对称任务）](../AssembleEmpireQuest)
- [ConspiracyProgressQuest（被激活后接管进度显示）](../ConspiracyProgressQuest)