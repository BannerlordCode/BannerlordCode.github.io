---
title: "BannerInvestigationQuest"
description: "第一阶段调查任务：在打完一场战役后向 10 位帝国贵族逐一问话，问满 10 人或把他们全杀了才结束。"
---
# BannerInvestigationQuest

**Namespace:** StoryMode.Quests.FirstPhase
**Module:** StoryMode
**Type:** `public class BannerInvestigationQuest : StoryModeQuestBase`
**Base:** StoryModeQuestBase
**Source:** StoryMode/Quests/FirstPhase/BannerInvestigationQuest.cs

## 概述

第一阶段的调查线任务。它的设计相当独特：任务有**两条完全平行的完成条件**——要么跟 19 位预置的帝国领主里的 **10 位**逐个问过话，要么把这些领主**全部处死**（`_allNoblesDead`）。问话本身不消耗任何资源，唯一的前置条件是先打完一场战役（`_battleSummarized`）。它还用了一个词典 `Dictionary<Hero, bool>` 同时充当"待问名单"和"进度标记"，并把整个词典存档。

## 心智模型

任务在 `OnStartQuest` 里调用 `InitializeNotablesToTalkList()`，按固定字符串 ID（`lord_6_1`、`lord_6_4` … `lord_1_14`）在 `Campaign.Current.CampaignObjectManager.Find<Hero>()` 取出领主，**只把仍然活着的加入词典**，然后把这些领主及其队伍都 `AddTrackedObject`。这就是为什么它对 19 个 ID 只要求 10 个问话即可完成——名单长度取决于玩家开始任务时谁还活着。

状态更新走 `UpdateAllNoblesDead()`：统计已问人数（≥9 时移除旧对话并重建，腾出"问问其他贵族"的入口）和已死人数。当没有任何"未问且活着"的贵族时置 `_allNoblesDead = true`，此后跟任意贵族对话都会直接完成任务。

坑：`UpdateAllNoblesDead` 里的 `num >= 9` 而不是 `>= 10`，因为真正的完成判定在 `talk_with_quest_noble_consequence` 里用 `_talkedNotablesQuestLog.CurrentProgress == _talkedNotablesQuestLog.Range`。日志是 0→10 的离散条，`HasBeenCompleted` 之外的等值判断意味着**超额完成（日志被别处改写）会卡住**。另外 `talk_with_any_noble_continue_condition` 里用 `SetCharacterProperties("HERO", ..., textObject, false)` 传了一个**未初始化的局部 `textObject`**（编译器能过是因为 out 参数），实际依赖 `MBTextManager.SetTextVariable("NOBLE_ANSWER", textObject, false)` 的副作用——这段代码很脆，改动时务必保留调用顺序。

## 主要成员

- `BannerInvestigationQuest()`：无参构造，`_allNoblesDead = false`，不注册事件（事件在 `RegisterEvents`）。
- `protected override void OnStartQuest()`：`InitializeNotablesToTalkList()` + `SetDialogs()`。
- `protected override void RegisterEvents()`：挂 `HeroKilledEvent`、`OnPartyRemovedEvent`、`MobilePartyCreated`、`OnPartyLeaderChangedEvent`——分别维护"死亡移除追踪""队伍销毁移除追踪""新生领主队伍加追踪""领主换人就换追踪"。
- `private void InitializeNotablesToTalkList()`：19 个硬编码 `lord_*` ID，逐个判活后入词典，全部 `AddTrackedObject`。
- `private void UpdateAllNoblesDead()`：核心状态机。已问 ≥9 时重建对话流以开放"问其他贵族"；无人可问时置 `_allNoblesDead`。
- `private void SetNobleDialogs()`：为词典里每个**未问过**的领主用 `switch`（源码里是长串 `if/else if` 按 StringId 匹配）挑四句专属文本，然后 `CreateNobleDialog` 生成对话流；未命中任何 ID 会触发 `Debug.FailedAssert`。
- `private void CreateNobleDialog(Hero noble, TextObject answer1..4)`：挂上四句 NPC 台词，若已问人数 ≥9 则额外允许"询问两位导师"并把后续动作指向 `talk_with_quest_noble_consequence`。
- `private void talk_with_quest_noble_consequence()`：把该领主标记为已问、移除其追踪、更新日志进度；日志满则 `CompleteQuestWithSuccess()`，否则在对话结束时挂 `UpdateAllNoblesDead`。
- `private bool talk_with_any_noble_condition()` / `continue_condition()`：处理"名单上的人都被你杀了"之后的追问路径，`_allNoblesDead` 时改问两位导师的所在地。
- `[SaveableField(1..4)]`：`_noblesToTalk`（词典）、`_allNoblesDead`、`_battleSummarized`、`_talkedNotablesQuestLog`。
- 常量：`NotablesToTalkAmount = 10` 加 19 个领主 StringId 常量（`MonchugStringId`、`MesuiStringId` … `RhagaeaStringId`）。

## 使用示例

```csharp
// 逐个问话：标记为已问、撤掉追踪、推进日志，满了就完成
private void talk_with_quest_noble_consequence()
{
    this._noblesToTalk[Hero.OneToOneConversationHero] = true;
    RemoveTrackedObject(Hero.OneToOneConversationHero);
    this._talkedNotablesQuestLog.UpdateCurrentProgress(
        this._noblesToTalk.Count(kvp => kvp.Value));
    if (this._talkedNotablesQuestLog.CurrentProgress == this._talkedNotablesQuestLog.Range)
    {
        CompleteQuestWithSuccess();
        return;
    }
    Campaign.Current.ConversationManager.ConversationEndOneShot += this.UpdateAllNoblesDead;
}

// 名单用全局 CampaignObjectManager 按字符串 ID 取人，取不到就静默跳过
Hero noble = Campaign.Current.CampaignObjectManager.Find<Hero>("lord_6_1");
if (noble.IsAlive) { this._noblesToTalk.Add(noble, false); AddTrackedObject(noble); }
```

## 风险与边界

跨读档是本类最敏感的：`Dictionary<Hero,bool>` 整体存档，所以进度安全；但 `InitializeNotablesToTalkList()` **只在 `OnStartQuest` 跑一次**，读档走的是 `InitializeQuestOnGameLoad`（只重挂对话）。这意味着如果玩家在开局前就杀掉了某些领主，读档后名单不会重建——设计上是刻意的（名单是"你开始调查时在场的贵族"）。另一个坑是日志进度用等值比较 `CurrentProgress == Range`；如果 mod 通过 `UpdateCurrentProgress` 传了超过 Range 的值，任务永远不会完成。任务本身**没有时限**吗？不是——它继承第一阶段共享的 `FirstPhaseEndTime`，超时走基类默认处理，没有自定义失败日志。

## 依赖关系

- [AssembleTheBannerQuest（同阶段主线）](../AssembleTheBannerQuest)
- [CreateKingdomQuest（问话内容指向的最终目标）](../CreateKingdomQuest)
- [CampaignEvents（HeroKilled / OnPartyRemoved / MobilePartyCreated 等）](../../campaign/CampaignEvents)