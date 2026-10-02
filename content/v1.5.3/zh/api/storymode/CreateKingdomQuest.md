---
title: "CreateKingdomQuest"
description: "第一阶段终局任务之一：追踪玩家氏族等级、部队规模、自有城堡与独立状态四项目标，建立与导师同文化王国即完成。"
---
# CreateKingdomQuest

**Namespace:** StoryMode.Quests.FirstPhase
**Module:** StoryMode
**Type:** `public class CreateKingdomQuest : StoryModeQuestBase`
**Base:** StoryModeQuestBase
**Source:** StoryMode/Quests/FirstPhase/CreateKingdomQuest.cs

## 概述

第一阶段两条终局路线之一。它不做任何主动判定，只**把四件"建国有前置条件"的事显示成四条可勾选的任务日志**：氏族等级达标、主队人数 ≥100、自有符合条件的城堡至少 1 座、玩家氏族不属于任何王国。它自己不检查这些条件——真正的"完成"来自 `CampaignEvents` 里另一条事件：`StoryModeEvents.OnMainStoryLineSideChosenEvent`，当玩家确立了与自己阵营一致的主线立场时才 `CompleteQuestWithSuccess()`。

## 心智模型

它由 `AssembleTheBannerQuest.GetImperialQuests()` 或 `GetAntiImperialQuests()` 在玩家与对应导师谈完龙旗处置后创建，构造参数 `Hero questGiver` 决定 `_isImperial`，同时**决定玩家目标王国的文化**——帝国路线要求首都为帝国文化，反帝国路线只要求是城堡。任务 ID 也随之分叉：`main_storyline_create_kingdom_quest_1` / `_0`，这一点对存档兼容性很重要。

它的价值在于**把分散在四个子系统的事件汇成一张清单**：`ClanTierIncrease`、`OnSettlementOwnerChangedEvent`、`OnClanChangedKingdomEvent`、`OnPartySizeChangedEvent`。每个回调里都用 `MathF.Clamp` 把实际值压到目标区间再写进日志，避免进度条溢出。

坑：`CheckPlayerClanDiplomaticState` 是全类最绕的地方。它要区分"玩家建国了"（`newKingdom.RulingClan == Clan.PlayerClan`）和"玩家只是加入了别人的王国"（`RulingClan != Clan.PlayerClan`）。后者必须直接 return，否则一旦玩家先建了帝国王国、后又加入反帝国王国，会被误判为"已完成"。另外"离王国"分支里的 `_hasPlayerCreatedKingdom` 复位**只把标志翻回去，不删已完成日志**——日志通过 `_leftKingdomLog` 变量记录并 `RemoveLog` 撤销。

## 主要成员

- `CreateKingdomQuest(Hero questGiver)`：构造入口。设 `_isImperial`、`SetDialogs()`、按 `_isImperial` 决定初始日志文案、统计玩家符合条件城堡数、写入各日志、`InitializeQuestOnCreation()`、`CheckPlayerClanDiplomaticState(Clan.PlayerClan.Kingdom)`。
- `protected override void RegisterEvents()`：四个战役事件 + 主线立场事件。
- `private void OnClanTierIncreased(Clan clan, bool showNotification)`：氏族等级达标时推进 `_clanTierRequirementLog`。
- `private void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ...)`：转发给 `CheckPlayerClanDiplomaticState`。
- `private void CheckPlayerClanDiplomaticState(Kingdom newKingdom)`：**核心状态机**。`newKingdom == null` → 视作独立，进度打满（若之前建国过则撤销日志）；`newKingdom.RulingClan != Clan.PlayerClan` → 只撤销自己建国后留下的痕迹并返回；否则判定文化是否匹配 `_isImperial`，匹配则标记 `_hasPlayerCreatedKingdom = true` 并写完成日志。
- `private void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ...)`：只统计 `IsFortification`；帝国线还额外要求 `settlement.Culture == StoryModeData.ImperialCulture`。
- `private void OnPartySizeChanged(PartyBase party)`：用 `TotalManCount - TotalWounded` 推进部队规模日志。
- `private void MainStoryLineChosen(MainStoryLineSide chosenSide)`：立场与自己一致 → 成功；否则 `CompleteQuestWithCancel(_questFailedLogText)`。
- `protected override void SetDialogs()`：`DiscussDialogFlow` 就是一句"我在听……"，唯一条件是 `Hero.OneToOneConversationHero == QuestGiver`。
- 常量：`PartySizeRequirement = 100`、`SettlementCountRequirement = 1`。
- `[SaveableField]`：`_isImperial`(1)、`_hasPlayerCreatedKingdom`(2)、四条需求日志(4-7)、`_leftKingdomLog`(9)、`_playerCreatedKingdom`(10)。

## 使用示例

```csharp
// 把"己方符合条件的城堡数"压进 0..1 的进度条
int owned = this._isImperial
    ? Clan.PlayerClan.Settlements.Count(t => t.IsFortification && t.Culture == StoryModeData.ImperialCulture)
    : Clan.PlayerClan.Settlements.Count(t => t.IsFortification);
UpdateQuestTaskStage(this._settlementOwnershipRequirementLog, MathF.Clamp((float)owned, 0f, 1f));

// 只有"玩家自己统治"且文化匹配才算建国，加入他人王国不算
if (newKingdom != null && newKingdom.RulingClan == Clan.PlayerClan &&
    StoryModeData.IsKingdomImperial(newKingdom) == this._isImperial)
{
    this._hasPlayerCreatedKingdom = true;
}
```

## 风险与边界

它**不检查目标是否真的完成**——只有主线立场事件能结束它。所以玩家可以完全无视四条日志，直接通过其它途径确立立场，任务照样成功。反过来，如果 mod 让玩家建国了但没触发 `OnMainStoryLineSideChosenEvent`（例如通过 `ChangeRulingClanAction` 直接换统治氏族），这个任务会永远挂着且四条日志全满——这是最典型的"任务卡死"形态。存档方面字段齐全，但注意 `_isImperial` 是 `readonly` 且带 `[SaveableField(1)]`：任务 ID 也编码了这个值，读档时二者必须一致，如果 mod 只改了 `_isImperial` 而没改构造时的 ID，旧存档会加载出错。

## 依赖关系

- [AssembleTheBannerQuest（创建方）](../AssembleTheBannerQuest)
- [SupportKingdomQuest（同批创建的对称任务）](../SupportKingdomQuest)
- [BannerInvestigationQuest（同阶段并行任务）](../BannerInvestigationQuest)
- [CampaignEvents（ClanTierIncrease / OnClanChangedKingdomEvent 等）](../../campaign/CampaignEvents)