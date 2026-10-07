---
title: "TalkToTheHeadmanTutorialQuest"
description: "教程枢纽任务：先与村庄村长对话，再并行开出买粮与招兵两个子任务，两个都完成后开启下一段教程。"
---
# TalkToTheHeadmanTutorialQuest

**Namespace:** StoryMode.Quests.TutorialPhase
**Module:** StoryMode
**Type:** `public class TalkToTheHeadmanTutorialQuest : StoryModeQuestBase`
**Base:** StoryModeQuestBase
**Source:** StoryMode/Quests/TutorialPhase/TalkToTheHeadmanTutorialQuest.cs

## 概述

这是教程阶段的**调度中枢**：玩家从北边走到村庄之后，所有后续教学都由它编排。它自己做两件事——第一次跟村长说话后同时创建并启动 `RecruitTroopsTutorialQuest` 和 `PurchaseGrainTutorialQuest`；等这两个都 finalize 之后，弹一个提示让玩家回去再找村长，村长交代"游医 Tacteos"的事，本任务随即成功完成。它是理解 Bannerlord 任务嵌套模型的最好样本：一个任务持有两个子任务的生命周期，用两个独立的 `QuestComplete` 事件做汇合判断，并通过 `TutorialPhase.Instance` 改变全局教程开关。

## 心智模型

构造期传入 `Hero headman`，但**故意把 questGiver 传 `null` 给基类**（`base("talk_to_the_headman_tutorial_quest", null, CampaignTime.Never)`）——因为发布者就是村长自己，通过"对话"而不是"接任务"来触发，任务列表里不会有发布者头像。

它的状态机很简单，用两个可空字段表达：`_recruitTroopsQuest` 与 `_purchaseGrainQuest` 在第一次对话之后才被赋值。对话流 `headman_quest_end_conversation_start_on_condition` 里直接解引用这两个字段，如果玩家在赋值之前就走到第二个对话流分支就会 NRE——原版靠条件 `!this._recruitTroopsQuest.IsFinalized || !this._purchaseGrainQuest.IsFinalized` 加上对话流的 priority 排序规避了，实际复用时要小心。

最大的坑是 `OnBeforeMissionOpened`：它在玩家每次进新手村庄的战斗/遭遇场景时把哥哥 `ElderBrother` 强制加血到 50、把他的 `LocationCharacter.CharacterRelation` 改成 `Neutral`，再塞进 `PlayerEncounter.LocationEncounter` 的随行队伍。这是**为了教学不被打断而作弊**，任何 mod 想在教程期间调整难度或让哥哥真的参与战斗都会跟这段硬顶。

第二个坑：教程村庄 ID `"village_ES3_2"` 在这里是以字面量硬编码出现的（`Settlement.CurrentSettlement.StringId == "village_ES3_2"`），换图/换村庄必须改。`TutorialPhase.Instance.SetLockTutorialVillageEnter(true/false)` 也在控制"能否离开村庄"这个全局开关。

## 怎么用

### 怎么拿到它

`public class TalkToTheHeadmanTutorialQuest : StoryModeQuestBase` 声明在 `bannerlord-1.5.3/StoryMode/Quests/TutorialPhase/TalkToTheHeadmanTutorialQuest.cs:19`，全文 240 行。

构造函数 `TalkToTheHeadmanTutorialQuest(Hero headman)`（约 `:64`），基类调用 `: base("talk_to_the_headman_tutorial_quest", null, CampaignTime.Never)`（`:65`）——任务 id 硬编码、`questGiver` 传 `null`（**虽然构造函数收了 `headman`，但基类拿到的是 null**）。存档 id 693001（`SaveableStoryModeTypeDefiner.cs:45`）。

**它真正的产品是另外两条任务。** 构造函数副作用：`TutorialPhase.Instance.SetTutorialFocusSettlement(Settlement.CurrentSettlement);`（`:72`）——**直接读当前聚落，不判空**。

`RegisterEvents()`（`:87`）挂两条：`CampaignEvents.OnQuestCompletedEvent`（`:89`）与 `CampaignEvents.BeforeMissionOpenedEvent`（`:90`）。

对话流**四条**，挂在同一个 `"start"` 节点但用**三种不同的 priority**：`1000010`（`:96`）、`1000009`（`:103`）、`1000010`（`:106`）、`1000009`（`:113`）。四个委托：`headman_quest_conversation_start_on_condition()`（`:118`）、`headman_quest_conversation_talk_with_brother_on_condition()`（`:125`）、`headman_quest_conversation_end_on_consequence()`（`:132`）、`headman_quest_end_conversation_start_on_condition()`（`:145`）与 `headman_quest_end_conversation_start_on_consequence()`（`:151`）。

**关键在 `headman_quest_conversation_end_on_consequence()`（`:132`）——一次开两条任务并推进阶段**：

```csharp
this._recruitTroopsQuest = new RecruitTroopsTutorialQuest(this._headman);   // :136
this._recruitTroopsQuest.StartQuest();                                     // :137
this._purchaseGrainQuest = new PurchaseGrainTutorialQuest(this._headman);  // :138
this._purchaseGrainQuest.StartQuest();                                    // :139
TutorialPhase.Instance.SetTutorialQuestPhase(TutorialQuestPhase.RecruitAndPurchaseStarted);  // :140
```

末尾 `headman_quest_end_conversation_start_on_consequence()`（`:151`）里的 `TutorialPhase.Instance.SetLockTutorialVillageEnter(false);`（`:153`）——**解锁村庄进入**，否则玩家会被锁在教学流程里。

`OnCompleteWithSuccess()`（`:158`）同样要 `TutorialPhase.Instance.RemoveTutorialFocusSettlement();`（`:160`）。

### 典型用法

```csharp
// 1) 创建：村长是必须的（要传给后续两条任务）
TalkToTheHeadmanTutorialQuest q = new TalkToTheHeadmanTutorialQuest(
    StoryModeManager.Current.MainStoryLine.TutorialPhase.TutorialVillageHeadman);
q.StartQuest();

// 2) 它会派生两条任务
Debug.Print("派生：RecruitTroopsTutorialQuest + PurchaseGrainTutorialQuest");
Debug.Print("阶段推进到 TutorialQuestPhase.RecruitAndPurchaseStarted");

// 3) 村庄锁的开关
TutorialPhase tutorial = StoryModeManager.Current.MainStoryLine.TutorialPhase;
Debug.Print("LockTutorialVillageEnter=" + tutorial.LockTutorialVillageEnter);
tutorial.SetLockTutorialVillageEnter(false);      // API：headman_quest_end_...:153 就是这么调的

// 4) 读任务
QuestBase b = Campaign.Current.QuestManager.GetQuest<TalkToTheHeadmanTutorialQuest>();
Debug.Print("id=" + b.QuestId + "，存档 id=693001，QuestGiver=" + (b.QuestGiver?.Name.ToString() ?? "null"));
```

### 最容易踩的坑

`headman_quest_conversation_end_on_consequence()`（`:132`）是**一次开两条任务 + 推阶段**（`:136`–`:140`），而且**没有查重、没有守卫**。同时本任务自己订阅了 `CampaignEvents.OnQuestCompletedEvent`（`:89`）→ `OnQuestCompleted`（`:164`）。你若在 mod 里重复注册这四条对话流（`InitializeQuestOnGameLoad()`（`:76`）本来就会重注册），旧的流可能仍留在对话表里，于是这个后果委托跑两次——**开两份募兵任务和两份征粮任务，四条进度日志同时刷进度**。这是本任务最容易被自己改坏的地方。

## 主要成员

- `TalkToTheHeadmanTutorialQuest(Hero headman)`：构造入口。保存村长、`AddTrackedObject`、`SetDialogs()`、`InitializeQuestOnCreation()`、写起始日志、`TutorialPhase.Instance.SetTutorialFocusSettlement(Settlement.CurrentSettlement)`。
- `override TextObject Title`：`Talk with Headman {HEADMAN.FIRSTNAME}`，用 `StringHelpers.SetCharacterProperties` 注入村长名。
- `protected override void RegisterEvents()`：挂 `CampaignEvents.OnQuestCompletedEvent`（用于感知两个子任务完成）与 `CampaignEvents.BeforeMissionOpenedEvent`（用于哥哥加血/随行）。
- `protected override void SetDialogs()`：注册**四条**对话流：村长初见、准备不足时的拒绝、任务已完成后交代 Tacteos、以及一句提示。三条用 `DialogFlow.CreateDialogFlow("start", 1000010/1000009)` 加 priority 排序。
- 私有 `headman_quest_conversation_end_on_consequence()`：**真正的状态推进点**。设置村长 `SetHasMet()`、把个人关系直接拉到 100，然后依次 `new RecruitTroopsTutorialQuest(...)` + `StartQuest()`、`new PurchaseGrainTutorialQuest(...)` + `StartQuest()`、`SetTutorialQuestPhase(RecruitAndPurchaseStarted)`。
- 私有 `OnQuestCompleted(QuestBase quest, QuestBase.QuestCompleteDetails detail)`：任一子任务完成都会触发；若两者均已 finalized，则上锁村庄（禁止离开）、`InformationManager.ShowInquiry` 提示、并追加"你现在可以走了"日志。
- `protected override void OnCompleteWithSuccess()`：`TutorialPhase.Instance.RemoveTutorialFocusSettlement()`，取消地图聚焦。
- `[SaveableField(1..3)]`：`_headman`、`_recruitTroopsQuest`、`_purchaseGrainQuest` 全部存档。

## 使用示例

```csharp
// 枢纽模式：一次对话同时开出两条并行支线
this._recruitTroopsQuest = new RecruitTroopsTutorialQuest(this._headman);
this._recruitTroopsQuest.StartQuest();
this._purchaseGrainQuest = new PurchaseGrainTutorialQuest(this._headman);
this._purchaseGrainQuest.StartQuest();
TutorialPhase.Instance.SetTutorialQuestPhase(TutorialQuestPhase.RecruitAndPurchaseStarted);

// 汇合模式：靠 OnQuestCompleted 轮询两个子任务的 IsFinalized
if (this._recruitTroopsQuest.IsFinalized && this._purchaseGrainQuest.IsFinalized)
{
    TutorialPhase.Instance.SetLockTutorialVillageEnter(true);
}
```

## 风险与边界

存档安全：三个字段都有 `[SaveableField]`，读档后 `InitializeQuestOnGameLoad` 只需重挂对话（`SetDialogs()`），子任务自身由 `QuestBase` 框架恢复。但**两个子任务在旧存档里可能是 null**（如果存档发生在对话之前），此时任何直接解引用的代码都会崩——原版用对话条件挡住了。风险点之二：`SetPersonalRelation(Hero.MainHero, 100)` 是不可逆的一次性拉升，把村长好感直接顶满，这属于剧情强推，mod 若想改成渐进好感需要同时改 `IsRemainingTimeHidden` 之外的日志预期。风险点之三：`OnBeforeMissionOpened` 在每次开mission 时跑，包括玩家主动进攻别的势力时（只要 `Settlement.CurrentSettlement` 恰好是那个村庄），会造成难以追踪的 HP 变化。

## 依赖关系

- [RecruitTroopsTutorialQuest（子任务）](../RecruitTroopsTutorialQuest)
- [PurchaseGrainTutorialQuest（子任务）](../PurchaseGrainTutorialQuest)
- [LocateAndRescueTravellerTutorialQuest（后续教程任务）](../LocateAndRescueTravellerTutorialQuest)
- [CampaignEvents（OnQuestCompleted / BeforeMissionOpenedEvent）](../../campaign/CampaignEvents)