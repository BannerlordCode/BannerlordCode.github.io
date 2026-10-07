---
title: "SupportKingdomQuest"
description: "第一阶段终局任务之二：把龙旗交给某位现有君主（支持其王国），或向导师宣告自领龙旗（自己建国），并据此锁定主线立场。"
---
# SupportKingdomQuest

**Namespace:** StoryMode.Quests.FirstPhase
**Module:** StoryMode
**Type:** `public class SupportKingdomQuest : StoryModeQuestBase`
**Base:** StoryModeQuestBase
**Source:** StoryMode/Quests/FirstPhase/SupportKingdomQuest.cs

## 概述

第一阶段两条终局路线中的另一条，负责"把龙旗交给别人"。它有四种成功形态：支持一个**帝国**王国、支持一个**非帝国**王国、自己建立帝国王国、自己建立非帝国王国——每一种都会调用 `StoryModeManager.Current.MainStoryLine.SetStoryLineSide(...)` 写死主线立场。玩家还可以两个导师都问、两个王都投，只要不是对立阵营，投谁都一样。

## 心智模型

它与 `CreateKingdomQuest` 由 `AssembleTheBannerQuest` 在同一次 `GetImperialQuests()` / `GetAntiImperialQuests()` 调用里成对创建，构造参数 `Hero questGiver` 决定 `_isImperial`，任务 ID 同样带 `_1` / `_0` 后缀分叉。

它与建国任务的分工是：**`SupportKingdomQuest` 负责"站队"，`CreateKingdomQuest` 负责"自建"**。两者的 `MainStoryLineChosen` 都监听同一个 `OnMainStoryLineSideChosenEvent`，但判定条件不同：本任务只要立场落在**自己阵营的四个枚举值之内**就算成功（包括自建国），`CreateKingdomQuest` 则要求立场是"Create*Kingdom"且阵营匹配。这意味着玩家自建国时**两个任务会同时完成**——这是设计如此，不是 bug。

坑：`CheckConditionToSupportKingdom` 要求玩家**已经加入**该王国的 `Clan.PlayerClan.Kingdom == Hero.OneToOneConversationHero.Clan.Kingdom`。对话选项虽然可见，但点不动，鼠标悬停显示"你应该先加入 {KINGDOM_NAME}"。也就是说流程是"先跟君主谈条件 → 加入 → 再回来交旗"。另一处坑：`IsPlayerTheRulerOfAKingdom()` 里调了 `MBTextManager.SetTextVariable("FACTION", ...)` 但**丢弃了返回值**也不保存引用，是一句没有可见效果的副作用调用。

## 怎么用

### 怎么拿到它

`public class SupportKingdomQuest : StoryModeQuestBase` 声明在 `bannerlord-1.5.3/StoryMode/Quests/FirstPhase/SupportKingdomQuest.cs:16`，全文 371 行。

构造函数在 `:16` 之后的下一行（`:20`），基类调用与 [CreateKingdomQuest](../CreateKingdomQuest) **逐行对称**：

```csharp
: base("main_storyline_support_kingdom_quest_"
       + ((StoryModeHeroes.ImperialMentor == questGiver) ? "1" : "0"),
       questGiver,
       StoryModeManager.Current.MainStoryLine.FirstPhase.FirstPhaseEndTime)
```

**任务 id 由发布者拼出** `"1"`/`"0"`，且在 `: base(...)` 参数里就引用了 `StoryModeHeroes.ImperialMentor`——非主线战役或第一阶段未开始时，构造函数第一行就 NRE。存档 id 680001（`SaveableStoryModeTypeDefiner.cs:56`）。

**谁创建它**：[AssembleTheBannerQuest](../AssembleTheBannerQuest) 的 `GetAntiImperialQuests()`（`:320`）里 `new SupportKingdomQuest(AntiImperialMentor).StartQuest();`（`:336`）与 `GetImperialQuests()`（`:372`）里帝国版（`:388`）。**与 `CreateKingdomQuest` 二选一。**

`RegisterEvents()`（`:329`）只挂**一条**：`StoryModeEvents.OnMainStoryLineSideChosenEvent`（`:331`）→ `MainStoryLineChosen(MainStoryLineSide chosenSide)`（`:315`）。**它不订阅 `ClanTierIncrease`、`OnSettlementOwnerChangedEvent`、`OnPartySizeChangedEvent`**——那些是 `CreateKingdomQuest` 的。与「建国」相比，「效忠」几乎没有进度要求，判定走对话流与 `OnKingdomSupported`。

**五条对话流**分两组：君王侧 `GetImperialKingDialogueFlow()`（`:139`）、`GetAntiImperialKingDialogueFlow()`（`:164`）；导师侧 `GetImperialMentorDialogueFlow()`（`:189`）、`GetAntiImperialMentorDialogueFlow()`（`:218`），由 `SetDialogs()`（`:132`）装配。

四个判据方法值得注意：`IsPlayerTheRulerOfAKingdom()`（`:246`）、`CheckPlayerCanDeclareBannerOwnershipClickableCondition(out TextObject explanation)`（`:257`）、`CheckConditionToSupportKingdom(out TextObject explanation)`（`:269`）——**后两个是带 `out TextObject` 的点击可用性判定**，与 [ConspiracyBaseOfOperationsDiscoveredConspiracyQuest](../ConspiracyBaseOfOperationsDiscoveredConspiracyQuest) 同款形状。

存档只有一项：`_isImperial`（`[SaveableField(1)]`，`:367`）。**没有进度日志**——因为它没有进度。

### 典型用法

```csharp
// 1) 正常由 AssembleTheBannerQuest 的终局对话流创建（与 CreateKingdomQuest 二选一）
SupportKingdomQuest q = new SupportKingdomQuest(StoryModeHeroes.AntiImperialMentor);
q.StartQuest();

// 2) 任务 id 由发布者决定——可据此反查是哪条线
Debug.Print("帝国导师 -> main_storyline_support_kingdom_quest_1");
Debug.Print("反帝国导师 -> main_storyline_support_kingdom_quest_0");

// 3) 唯一的公开判据（源码 :246）
Debug.Print("玩家是否为某国君主=" + (Hero.MainHero.IsKingdomLeader));

// 4) 与 CreateKingdomQuest 的对照：本任务没有进度日志，只有 _isImperial 一个存档位
QuestBase b = Campaign.Current.QuestManager.GetQuest<SupportKingdomQuest>();
Debug.Print("id=" + b.QuestId + "，存档 id=680001，发布者=" + b.QuestGiver?.Name);

// 5) 只订阅了选边事件
MainStoryLine line = StoryModeManager.Current.MainStoryLine;
Debug.Print("当前立场=" + line.MainStoryLineSide);
```

### 最容易踩的坑

它**只订阅 `OnMainStoryLineSideChosenEvent`**（`:331`）一条，没有 `HourlyTick` 之外的任何进度推进（`HourlyTick()`（`:324`）存在但极简）。这意味着**任务一旦开出，玩家的后续行为对它的完成度几乎没有影响**——真正的完成判定压在四条对话流的 `out TextObject` 条件委托里（`:257`、`:269`）。你 mod 里写 UI 想显示「任务进度」时找不到可读字段是正常的：**它没有进度日志，只有 `_isImperial` 一个存档位（`:367`）**。想读进度就得去问 `Clan.PlayerClan.Kingdom`。

## 主要成员

- `SupportKingdomQuest(Hero questGiver)`：构造入口。任务 ID 用 `((StoryModeHeroes.ImperialMentor == questGiver) ? "1" : "0")` 拼出；`_isImperial` 决定日志文案与注册哪两套对话流；`InitializeQuestOnCreation()`。
- `protected override void SetDialogs()`：`DiscussDialogFlow` 是一句"等你拿定主意再来"，条件是对话对象等于 `QuestGiver`。
- `private DialogFlow GetImperialKingDialogueFlow()` / `GetAntiImperialKingDialogueFlow()`：与"符合阵营的君主"对话时可选"献上龙旗"，条件是该英雄是某王国君主且 `StoryModeData.IsKingdomImperial(...)` 与路线一致。
- `private DialogFlow GetImperialMentorDialogueFlow()` / `GetAntiImperialMentorDialogueFlow()`：与导师对话时宣告"我以君主身份宣布龙旗归属"，点选项还要过 `CheckPlayerCanDeclareBannerOwnershipClickableCondition`。
- `private bool IsPlayerTheRulerOfAKingdom()`：玩家是否**自己**统治着与路线文化一致的王国。
- `private bool CheckPlayerCanDeclareBannerOwnershipClickableCondition(out TextObject explanation)`：不满足时给出"你应该统治一个帝国/非帝国文化的王国"的灰色提示。
- `private bool CheckConditionToSupportKingdom(out TextObject explanation)`：必须已加入该王国才允许献旗。
- `private void OnKingdomSupported(Kingdom kingdom, bool isImperial)`：**唯一的状态写入点**。四分支分别写日志、`SetStoryLineSide`、弹场景通知（`DeclareDragonBannerSceneNotificationItem` 或 `PledgeAllegianceSceneNotificationItem`），然后 `CompleteQuestWithSuccess()`。
- `private void MainStoryLineChosen(MainStoryLineSide chosenSide)`：立场落在本阵营之外就 `CompleteQuestWithCancel(_questFailedLogText)`。
- `[SaveableField(1)] _isImperial`：唯一状态字段。

## 使用示例

```csharp
// 唯一的立场写入点：四种结局都在这里收敛
private void OnKingdomSupported(Kingdom kingdom, bool isImperial)
{
    if (isImperial && kingdom.RulingClan == Clan.PlayerClan)
        StoryModeManager.Current.MainStoryLine.SetStoryLineSide(MainStoryLineSide.CreateImperialKingdom);
    else if (isImperial)
        StoryModeManager.Current.MainStoryLine.SetStoryLineSide(MainStoryLineSide.SupportImperialKingdom);
    else if (kingdom.RulingClan == Clan.PlayerClan)
        StoryModeManager.Current.MainStoryLine.SetStoryLineSide(MainStoryLineSide.CreateAntiImperialKingdom);
    else
        StoryModeManager.Current.MainStoryLine.SetStoryLineSide(MainStoryLineSide.SupportAntiImperialKingdom);
    CompleteQuestWithSuccess();
}
```

## 风险与边界

`SetStoryLineSide` 是**不可逆的全局写入**，一旦调下去另一条路线就永久关闭。想做多结局兼容的 mod 必须记住：这个类没有任何"撤回立场"的路径，唯一的对冲是它的 `MainStoryLineChosen` 取消分支——但那也只是结束任务而已。存档只有一个 `_isImperial` bool，任务 ID 里也编码了同一个值，两者由 `questGiver` 推导而来、必须一致；改动构造逻辑时不同步改 ID 会直接破坏旧存档。此外它注册的对话流在 `InitializeQuestOnGameLoad` 里会被**再注册一次**（`SetDialogs()` 之后又显式 `AddDialogFlow` 两套），这是原版的行为，读档后对话流数量翻倍但靠 priority 排序保证只命中一套——移植时不要"简化"成只调 `SetDialogs()`。

## 依赖关系

- [AssembleTheBannerQuest（创建方）](../AssembleTheBannerQuest)
- [CreateKingdomQuest（同批创建的对称任务）](../CreateKingdomQuest)
- [AssembleEmpireQuestBehavior（第二阶段的后继）](../AssembleEmpireQuestBehavior)
- [CampaignEvents（OnMainStoryLineSideChosenEvent 的来源）](../../campaign/CampaignEvents)