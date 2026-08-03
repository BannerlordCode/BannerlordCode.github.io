---
title: "Issues Family"
description: "Campaign issue lifecycle: discovery, resolution choices, behavior ownership, and quest handoff."
---

# Issues Family

**One-sentence role:** An issue is a campaign-facing problem with eligibility, a player-facing decision, and a resolution path that may create or complete a quest.

## Mental Model

### Reading order

Read [IssueBase](../IssueBase), then inspect one concrete issue such as [ArmyNeedsSuppliesIssue](../ArmyNeedsSuppliesIssue). Follow its behavior and quest companions when present; the issue object is the prompt, not the scheduler.

## When to use

Use issues for persistent campaign problems that need eligibility checks and player resolution. Use an event or action for a one-shot state change. Do not instantiate an issue every tick or mutate issue fields from UI code; the owning behavior controls lifetime and persistence.

## Dependency map

- Upstream: campaign behaviors, notable/settlement state, and `CampaignEvents`.
- Downstream: issue menus, [QuestBase](../QuestBase), notifications, and save data.
- Siblings: [Quests](../quests) and [Behaviors](../behaviors).

## Real entry points

```csharp
IssueBase issue = Campaign.Current.IssueManager.GetIssueForHero(hero);
bool eligible = issue != null && issue.CanBeShown();
```

`IssuesCampaignBehavior` owns concrete issues and manages eligibility and cooldown. Do not treat an issue as a DTO or write fields from UI conditions.

## Risk boundaries

Eligibility must be stable across save/load and should not fire side effects. Resolve through the issue's supported action or quest handoff so notifications and cleanup stay consistent.

## Issue and behavior entries

| Namespace | Type | Purpose | Timing |
| --- | --- | --- | --- |
| TaleWorlds.CampaignSystem.ComponentInterfaces | [IssueModel](../IssueModel) | Calculates issue eligibility, cooldown, and display priority. | Campaign issue scan |
| TaleWorlds.CampaignSystem.GameComponents | [DefaultIssueModel](../DefaultIssueModel) | Supplies vanilla issue eligibility and refresh rules. | Daily scan and save recovery |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [IssuesCampaignBehavior](../IssuesCampaignBehavior) | Owns active issues, creates/removes instances, and subscribes to events. | Campaign start, daily tick, load |
| TaleWorlds.CampaignSystem.Issues | [ArmyNeedsSuppliesIssue](../ArmyNeedsSuppliesIssue) | Describes an army-supply problem and its player resolution paths. | Issue display and acceptance |
| TaleWorlds.CampaignSystem.Issues | [ArmyNeedsSuppliesIssueBehavior](../ArmyNeedsSuppliesIssueBehavior) | Manages supply issue triggers, cooldown, and quest creation. | Issue scan and cleanup |
| TaleWorlds.CampaignSystem.Issues | [ArtisanCantSellProductsAtAFairPriceIssue](../ArtisanCantSellProductsAtAFairPriceIssue) | Presents an artisan low-price problem and player choices. | Town issue lifecycle |
| TaleWorlds.CampaignSystem.Issues | [ArtisanOverpricedGoodsIssue](../ArtisanOverpricedGoodsIssue) | Presents an artisan pricing anomaly and resolution branches. | Town issue lifecycle |
| TaleWorlds.CampaignSystem.Issues | [BettingFraudIssue](../BettingFraudIssue) | Exposes arena betting fraud and hands off to its quest. | Arena/dialogue trigger |
| TaleWorlds.CampaignSystem.Issues | [CaravanAmbushIssue](../CaravanAmbushIssue) | Turns a caravan ambush into an actionable assistance issue. | After encounter creation, before battle |
| TaleWorlds.CampaignSystem.Issues | [EscortMerchantCaravanIssue](../EscortMerchantCaravanIssue) | Provides eligibility, participants, and rewards for a caravan escort. | Issue display through quest start |
| TaleWorlds.CampaignSystem.Issues | [ExtortionByDesertersIssue](../ExtortionByDesertersIssue) | Represents deserter extortion and coordinates negotiation or suppression. | Town scan and resolution |
| TaleWorlds.CampaignSystem.Issues | [GangLeaderNeedsRecruitsIssue](../GangLeaderNeedsRecruitsIssue) | Represents a gang recruit request and creates its quest. | Town issue display |
| TaleWorlds.CampaignSystem.Issues | [HeadmanNeedsGrainIssue](../HeadmanNeedsGrainIssue) | Represents a headman's grain shortage and delivery route. | Village daily scan |
| TaleWorlds.CampaignSystem.Issues | [LordNeedsGarrisonTroopsIssue](../LordNeedsGarrisonTroopsIssue) | Represents a garrison shortfall and binds troop delivery. | Lord issue display and completion |
| TaleWorlds.CampaignSystem.Issues | [MerchantNeedsHelpWithOutlawsIssue](../MerchantNeedsHelpWithOutlawsIssue) | Represents an outlaw threat and hands off to a clearing quest. | After caravan/town events |
| TaleWorlds.CampaignSystem.Issues | [NearbyBanditBaseIssue](../NearbyBanditBaseIssue) | Exposes a nearby hideout and scouting/attack choices. | Map issue scan |
| TaleWorlds.CampaignSystem.Issues | [SmugglersIssue](../SmugglersIssue) | Represents a smuggling network and delegates choices to quest/action. | Town dialogue and resolution |
| TaleWorlds.CampaignSystem.Issues | [TheConquestOfSettlementIssue](../TheConquestOfSettlementIssue) | Connects a settlement-conquest problem to siege and ownership results. | Siege state and settlement |
| TaleWorlds.CampaignSystem.Issues | [VillageNeedsToolsIssue](../VillageNeedsToolsIssue) | Represents a village tool shortage and its delivery target. | Village daily scan |
| TaleWorlds.CampaignSystem.Issues | [DefaultIssueEffects](../DefaultIssueEffects) | Centralizes default economic and relation effects after resolution. | After consequence execution |

## Navigation

- [Parent: Campaign-Ext](..)
- [Sibling: Quests](../quests) · [Behaviors](../behaviors)
- [Related: Campaign events](../CampaignEvents)
