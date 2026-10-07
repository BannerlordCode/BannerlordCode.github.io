---
title: "ConspiracyProgressQuest"
description: "第二阶段常驻任务：每天累积阴谋强度并刷新任务日志，监控所有阴谋子任务的成败，并在玩家换王国时取消二三阶段。"
---
# ConspiracyProgressQuest

**Namespace:** StoryMode.Quests.SecondPhase
**Module:** StoryMode
**Type:** `public class ConspiracyProgressQuest : StoryModeQuestBase`
**Base:** StoryModeQuestBase
**Source:** SecondPhase/ConspiracyProgressQuest.cs

## 概述

这是一个**几乎不给玩家看的任务**。它的唯一职责是当一块"仪表盘"：任务日志上有一条 0→2000 的"阴谋强度"进度条，每天由 `DailyTick` 调 `SecondPhase.Instance.IncreaseConspiracyStrength()` 涨一点，任何一个阴谋子任务成功时也会刷新一次。同时它扮演"守门人"：玩家一旦**离开主线支持的那个王国**，立刻取消任务并调 `StoryModeManager.Current.MainStoryLine.CancelSecondAndThirdPhase()`。它的构造副作用是 `SecondPhase.Instance.TriggerConspiracy()`，也就是第二阶段由此开启。

## 心智模型

它由第二阶段逻辑在玩家确立主线立场后创建，无参构造，`CampaignTime.Never` 意味着它永远在跑。**它在玩家任务列表里不显示内容**（没有玩家可交互的对话、没有可选目标），但它有一个真实的生命周期钩子：`OnFinalize()` 里遍历 `Campaign.Current.QuestManager.Quests`，把所有"直接继承 `ConspiracyQuestBase`"且仍 ongoing 的任务判失败。

那个遍历条件 `typeof(ConspiracyQuestBase) == questBase.GetType().BaseType` 是**精确基类匹配**而不是 `is` 判断——意味着 mod 写一个继承 `ConspiracyQuestBase` 的子类再派一层自己的抽象类，这个任务就看不见它，清理会漏掉。同一个表达式在 `OnQuestCompleted` 里也用来判断"某个阴谋任务成功了就刷新进度"。

坑：`Title` 里的变量名很容易读反——`_isImperialSide` 为真（即玩家在帝国任务线上）时标题填的是 `ANTIIMPERIAL_MENTOR`，文案是"XXX 的阴谋"。这是**语义正确**的：玩家在帝国线上时，正在对付的阴谋属于反帝国导师。另一处坑：`OnClanChangedKingdom` 只在 `oldKingdom == PlayerSupportedKingdom` 时取消——玩家中途加入另一个王国是允许的，只有主动离开支持对象才算反悔。

## 怎么用

### 怎么拿到它

`public class ConspiracyProgressQuest : StoryModeQuestBase` 声明在 `bannerlord-1.5.3/StoryMode/Quests/SecondPhase/ConspiracyProgressQuest.cs:15`，全文 177 行。

**它不是阴谋任务，是「阴谋强度进度条」任务。** 三个判据：

- 类型名带 `Behavior` 的误导：`QuestId` 硬编码为 `"conspiracy_quest_campaign_behavior"`（`:73`）——这是从行为类名字抄来的，**与实际功能无关**。
- 构造函数**无参**：`public ConspiracyProgressQuest()`（约 `:72`），基类调用 `: base("conspiracy_quest_campaign_behavior", null, CampaignTime.Never)`（`:73`）——**`questGiver` 传 null、时限 `Never`**。
- 核心副作用在构造函数的第二句：`SecondPhase.Instance.TriggerConspiracy();`（`:75`）——**new 出来就会广播「阴谋开始」**并把 `LastConspiracyQuestCreationTime` 置为 `CampaignTime.Now`（`SecondPhase.cs:140`）。

**谁创建它**：[SecondPhaseCampaignBehavior](../SecondPhaseCampaignBehavior) 的 `DailyTick()`（`:67`）在某个计数条件下 `new ConspiracyProgressQuest().StartQuest();`（`:74`）。

`OnStartQuest()`（`:108`）建那条离散进度日志：

```csharp
base.AddDiscreteLog(this._startQuestLogText,
    new TextObject("{=1LrHV647}Conspiracy Strength", null),
    (int)SecondPhase.Instance.ConspiracyStrength,   // 初值
    2000,                                           // 目标（硬编码）
    null, false);
```

**目标值 2000 是字面量**，与 `SecondPhase.MaxConspiracyStrength = 2000`（`SecondPhase.cs:217`）是两处独立的数字。

`DailyTick()`（`:132`）是引擎本体：`SecondPhase.Instance.IncreaseConspiracyStrength();`（`:134`）然后 `_startQuestLog.UpdateCurrentProgress((int)ConspiracyStrength)`（`:135`）——**每天涨 `2.777777f`，涨到 2000 就封顶并 `ActivateConspiracy()`**（`SecondPhase.cs:150`→`:157`）。

`RegisterEvents()`（`:90`）挂三条：`CampaignEvents.OnQuestCompletedEvent`（`:92`）、`StoryModeEvents.OnConspiracyActivatedEvent`（`:93`）、`CampaignEvents.OnClanChangedKingdomEvent`（`:94`）。

`OnConspiracyActivated()`（`:148`）最短：`base.CompleteQuestWithTimeOut(null);`（`:150`）——**阴谋激活 = 这个进度条超时结束**。

`OnFinalize()`（`:119`）是整个第二阶段的收尾器：遍历 `QuestManager.Quests.ToList<QuestBase>()`（`:121`），对每个满足 `typeof(ConspiracyQuestBase) == questBase.GetType().BaseType && questBase.IsOngoing` 的任务调 `CompleteQuestWithCancel(new TextObject("{=YJxCbbpd}Conspiracy is activated!", null))`（`:123`→`:125`）。

存档只有 `_startQuestLog`（`[SaveableField(2)]`，`:173`→`:174`）。

### 典型用法

```csharp
// 1) 正常由行为创建；手动 new 也会触发 TriggerConspiracy()
ConspiracyProgressQuest q = new ConspiracyProgressQuest();
q.StartQuest();

// 2) 强度进度（注意进度条目标是硬编码 2000）
SecondPhase second = StoryModeManager.Current.MainStoryLine.SecondPhase;
if (second != null)
{
    Debug.Print("Conspiracy Strength " + (int)second.ConspiracyStrength + " / " + SecondPhase.MaxConspiracyStrength);
    Debug.Print("日增=" + SecondPhase.DailyConspiracyChange);
}

// 3) 确认哪些阴谋任务会被 OnFinalize 取消
foreach (QuestBase quest in Campaign.Current.QuestManager.Quests.ToList<QuestBase>())
{
    if (typeof(ConspiracyQuestBase) == quest.GetType().BaseType && quest.IsOngoing)
    {
        Debug.Print("将被取消：" + quest.QuestId);
    }
}

// 4) 读任务
QuestBase pq = Campaign.Current.QuestManager.GetQuest<ConspiracyProgressQuest>();
Debug.Print("id=" + pq.QuestId + "，发布者=" + (pq.QuestGiver?.Name.ToString() ?? "null")
          + "，剩余时间=" + pq.RemainingTime);
```

### 最容易踩的坑

`ConspiracyProgressQuest` 的 `QuestId` 是 `"conspiracy_quest_campaign_behavior"`（`:73`），**而三个真正的阴谋任务用的是 `"conspiracy_quest_" + 次数`**（`SecondPhase.cs:180`）。两者只差中段，但如果你按 `QuestId.StartsWith("conspiracy_quest_")` 写匹配，进度条任务**也会被算进去**——然后你在遍历时把它当成一条需要完成的阴谋任务去处理。要区分就比类型：`ConspiracyProgressQuest` 是 `StoryModeQuestBase` 子类，三个阴谋任务是 `ConspiracyQuestBase` 子类，继承链不同。

## 主要成员

- `ConspiracyProgressQuest()`：无参构造，任务 ID 是 `conspiracy_quest_campaign_behavior`（沿用了行为类的命名，别被误导），核心副作用是 `SecondPhase.Instance.TriggerConspiracy()`。
- `private bool _isImperialSide`：私有属性，等价于 `StoryModeManager.Current.MainStoryLine.IsOnImperialQuestLine`。
- `protected override void RegisterEvents()`：挂 `CampaignEvents.OnQuestCompletedEvent`、`StoryModeEvents.OnConspiracyActivatedEvent`、`CampaignEvents.OnClanChangedKingdomEvent`。
- `protected override void DailyTick()`：**唯一的状态推进点**。`IncreaseConspiracyStrength()` 后把 `(int)ConspiracyStrength` 写进 `_startQuestLog`。
- `private void OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)`：若完成的是阴谋子任务且结果为 `Success`，刷新进度显示。
- `private void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ...)`：`clan == Clan.PlayerClan && oldKingdom == PlayerSupportedKingdom` → `CompleteQuestWithCancel(_questCanceledLogText)` + `CancelSecondAndThirdPhase()`。
- `private void OnConspiracyActivated()`：阴谋被激活（进入第三阶段）→ `CompleteQuestWithTimeOut(null)`。
- `protected override void OnFinalize()`：遍历并判失败所有"直接继承 `ConspiracyQuestBase`"且 ongoing 的任务。
- `[SaveableField(2)] _startQuestLog`：唯一的存档字段，进度条本体。注意 SaveId 从 **2** 开始（1 已被历史版本占用），新增字段不要复用 1。

## 使用示例

```csharp
// 每天涨一点阴谋强度（上限 2000 由 SecondPhase 内部钳制）
protected override void DailyTick()
{
    StoryModeManager.Current.MainStoryLine.SecondPhase.IncreaseConspiracyStrength();
    this._startQuestLog.UpdateCurrentProgress(
        (int)StoryModeManager.Current.MainStoryLine.SecondPhase.ConspiracyStrength);
}

// 收尾时判失败所有仍在进行的一阶阴谋任务
protected override void OnFinalize()
{
    foreach (QuestBase q in Campaign.Current.QuestManager.Quests.ToList<QuestBase>())
        if (typeof(ConspiracyQuestBase) == q.GetType().BaseType && q.IsOngoing)
            q.CompleteQuestWithFail(null);
}
```

## 风险与边界

`GetType().BaseType` 是精确匹配，这是最需要警惕的扩展性限制：派生一层就失效，`is` 判断则更宽容但原作者选了严格版。取消条件只看"离开支持王国"，玩家**加入**另一个王国不会被取消，因此可以四处跳槽而任务仍在——原版允许这么做。如果 mod 删掉这个任务，整个第二阶段会失去"每日涨强度"和"子任务收尾清理"两个能力，阴谋强度将冻结。任务本身不给任何奖励、日志只有一条 0→2000 的"阴谋强度"进度条（创建于 `OnStartQuest`，初值取当时的 `ConspiracyStrength`），玩家几乎注意不到它的存在；不要指望玩家通过任务列表理解"阴谋强度 2000"意味着什么。

## 依赖关系

- [ConspiracyQuestBase（被监控的父类）](../ConspiracyQuestBase)
- [AssembleEmpireQuestBehavior（第二阶段激活者）](../AssembleEmpireQuestBehavior)
- [WeakenEmpireQuestBehavior（第二阶段激活者）](../WeakenEmpireQuestBehavior)
- [CampaignEvents（OnClanChangedKingdomEvent 等）](../../campaign/CampaignEvents)