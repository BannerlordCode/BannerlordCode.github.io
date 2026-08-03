---
title: "Quests Family"
description: "Quest state machines, issue handoff, objective completion, and campaign-safe persistence."
---

# Quests Family

**One-sentence role:** A quest owns a multi-step campaign narrative and records objective, participant, and completion state across ticks and saves.

## Mental Model

### Reading order

Begin with [QuestBase](../QuestBase), then compare [ArmyNeedsSuppliesIssueQuest](../ArmyNeedsSuppliesIssueQuest) with its issue and behavior. Trace creation, objective updates, completion, and cleanup in that order.

## When to use

Use a quest for a persistent, player-visible sequence. Use a campaign event for a notification and an action for an atomic mutation. Never advance objectives from a UI callback without checking the quest's lifecycle and ownership.

## Dependency map

- Upstream: issue resolution, campaign behaviors, heroes, parties, and settlements.
- Downstream: menus, conversations, notifications, save serialization, and reward actions.
- Siblings: [Issues](../issues), [Dialogs](../dialogs), and [Actions](../actions).

## Real entry points

```csharp
QuestManager manager = Campaign.Current.QuestManager;
IEnumerable<QuestBase> active = manager.Quests;
CampaignEvents.HourlyTickEvent.AddNonSerializedListener(this, OnHourlyTick);
```

`QuestManager` owns active campaign quests. Concrete issue quests are created by their behavior and cleaned up on completion or failure. Do not invent an `Advance()` call; progress must use the events, tasks, or actions declared by the concrete quest.

## Risk boundaries

Quest state is save-visible. Register event handlers once, unsubscribe during cleanup, and make completion idempotent. A quest that survives a failed participant lookup can keep stale references in a save.

## Quest and task entries

Each row is a source type. `Purpose` describes the business state it owns and `Timing` names the phase in which it is normally created, updated, or completed.

| Namespace | Type | Purpose | Timing |
| --- | --- | --- | --- |
| TaleWorlds.CampaignSystem | [QuestManager](../QuestManager) | Owns active quests and coordinates registration, completion, failure, and load recovery. | Campaign setup and save load |
| TaleWorlds.CampaignSystem | [QuestCompleteDetails](../QuestCompleteDetails) | Carries rewards, renown, and result explanations at completion. | Quest completion settlement |
| TaleWorlds.CampaignSystem | [QuestTaskBase](../QuestTaskBase) | Represents a saveable objective and completion state for a concrete quest. | Quest init, event updates, completion checks |
| TaleWorlds.CampaignSystem.Issues | [ArmyNeedsSuppliesIssueQuest](../ArmyNeedsSuppliesIssueQuest) | Turns an army-supplies issue into a trackable delivery chain. | Issue acceptance through delivery |
| TaleWorlds.CampaignSystem.Issues | [ArtisanCantSellProductsAtAFairPriceIssueQuest](../ArtisanCantSellProductsAtAFairPriceIssueQuest) | Tracks investigation and resolution of an artisan low-price issue. | Issue resolution flow |
| TaleWorlds.CampaignSystem.Issues | [ArtisanOverpricedGoodsIssueQuest](../ArtisanOverpricedGoodsIssueQuest) | Records the artisan pricing problem and the player's consequence path. | Issue acceptance and completion |
| TaleWorlds.CampaignSystem.Issues | [BettingFraudQuest](../BettingFraudQuest) | Manages arena-betting fraud investigation, dialogue, and rewards. | Dialogue start through reward settlement |
| TaleWorlds.CampaignSystem.Issues | [CapturedByBountyHuntersIssueQuest](../CapturedByBountyHuntersIssueQuest) | Tracks escape or negotiation after a bounty-hunter capture. | Trigger through release/failure |
| TaleWorlds.CampaignSystem.Issues | [CaravanAmbushIssueQuest](../CaravanAmbushIssueQuest) | Records a caravan ambush, escort parties, and the battle result. | Encounter creation through MapEvent end |
| TaleWorlds.CampaignSystem.Issues | [EscortMerchantCaravanIssueQuest](../EscortMerchantCaravanIssueQuest) | Binds the escort objective to movement, encounters, and delivery. | Acceptance through caravan arrival |
| TaleWorlds.CampaignSystem.Issues | [ExtortionByDesertersIssueQuest](../ExtortionByDesertersIssueQuest) | Tracks negotiation or suppression of a deserter-extortion event. | Issue acceptance through consequence |
| TaleWorlds.CampaignSystem.Issues | [GangLeaderNeedsRecruitsIssueQuest](../GangLeaderNeedsRecruitsIssueQuest) | Records a gang leader's recruit target and delivered roster. | Acceptance through recruitment |
| TaleWorlds.CampaignSystem.Issues | [GangLeaderNeedsSpecialWeaponsIssueQuest](../GangLeaderNeedsSpecialWeaponsIssueQuest) | Tracks special-weapon collection and delivery. | Item collection and completion checks |
| TaleWorlds.CampaignSystem.Issues | [HeadmanNeedsGrainIssueQuest](../HeadmanNeedsGrainIssueQuest) | Tracks a headman's grain request and delivery reward. | Village issue lifecycle |
| TaleWorlds.CampaignSystem.Issues | [LandLordCompanyOfTroubleIssueQuest](../LandLordCompanyOfTroubleIssueQuest) | Manages a landlord conflict as multi-step objectives. | Dialogue, battle, and settlement |
| TaleWorlds.CampaignSystem.Issues | [LordNeedsGarrisonTroopsIssueQuest](../LordNeedsGarrisonTroopsIssueQuest) | Records the troop target for a lord's garrison request. | Acceptance through garrison delivery |
| TaleWorlds.CampaignSystem.Issues | [MerchantNeedsHelpWithOutlawsIssueQuest](../MerchantNeedsHelpWithOutlawsIssueQuest) | Tracks clearing outlaws for a merchant and returning the result. | Party creation through battle end |
| TaleWorlds.CampaignSystem.Issues | [RaidAnEnemyTerritoryQuest](../RaidAnEnemyTerritoryQuest) | Records raid objectives, participants, and rewards. | MapEvent before/after and completion |
| TaleWorlds.CampaignSystem.Issues | [ScoutEnemyGarrisonsQuest](../ScoutEnemyGarrisonsQuest) | Saves scouting progress and the resulting report. | Scouting callbacks |
| TaleWorlds.CampaignSystem.Issues | [SmugglersIssueQuest](../SmugglersIssueQuest) | Manages smuggler routes, choices, and consequences. | Acceptance through consequence |
| TaleWorlds.CampaignSystem.Issues | [TheConquestOfSettlementIssueQuest](../TheConquestOfSettlementIssueQuest) | Tracks conquest combat and settlement-ownership result. | Siege/battle settlement |
| TaleWorlds.CampaignSystem.Issues.IssueQuestTasks | [CaptureAndBringNpcTask](../CaptureAndBringNpcTask) | Encapsulates a saveable objective to capture a named NPC. | Target-capture event |
| TaleWorlds.CampaignSystem.Issues.IssueQuestTasks | [ChangeSettlementOwnerTask](../ChangeSettlementOwnerTask) | Waits for an ownership change and reports quest completion. | After ChangeOwnerOfSettlementAction |
| TaleWorlds.CampaignSystem.Issues.IssueQuestTasks | [DefeatPartyQuestTask](../DefeatPartyQuestTask) | Listens for a named party being defeated. | MapEvent completion check |
| TaleWorlds.CampaignSystem.Issues.IssueQuestTasks | [RaidVillageQuestTask](../RaidVillageQuestTask) | Tracks a raid against a named village and its result. | Raid action/MapEvent settlement |
| TaleWorlds.CampaignSystem.Issues.IssueQuestTasks | [TalkToNpcQuestTask](../TalkToNpcQuestTask) | Waits for a valid conversation with a named NPC. | Conversation consequence |

## Navigation

- [Parent: Campaign-Ext](..)
- [Sibling: Issues](../issues) · [Dialogs](../dialogs)
- [Related: Campaign events](../CampaignEvents)
