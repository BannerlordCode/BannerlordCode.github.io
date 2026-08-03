---
title: "PartyTrainingModel"
description: "The replaceable policy for party training, battle experience, and shared XP without directly upgrading troops or writing skill state."
---

# PartyTrainingModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class PartyTrainingModel : MBGameModel<PartyTrainingModel>`  
**Base:** `MBGameModel<PartyTrainingModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTrainingModel.cs`  
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartyTrainingModel.cs`

## One-line responsibility

`PartyTrainingModel` turns party leaders, troops, battles, and perks into explainable XP results. It decides how much training XP should exist, but does not add XP to a `TroopRoster` or perform an upgrade.

## Mental model

The model is the calculation layer between a `MobileParty` roster and training/skill behaviors. [GameModels](../GameModels) resolves the registered instance. `MobilePartyTrainingBehavior` reads `GetEffectiveDailyExperience` on the daily party tick, multiplies it by troop count, and then writes XP to the roster. Map battles read `CalculateXpGainFromBattles` and `GenerateSharedXp`, while the skill manager uses `GetXpReward` for kill rewards.

Shared XP and daily training are different pools. Shared XP uses leader perks and mounted/ranged traits; daily experience also depends on active, sea, settlement, army, and troop-tier state. The model may return `ExplainedNumber` for diagnostics, but persistent writes belong to the behavior or skill manager at the correct event stage.

## When to use and when not to

- Replace the model to change training speed, battle XP, shared XP distribution, or kill rewards; register it during campaign startup.
- Read a training preview through `Campaign.Current.Models.PartyTrainingModel`.
- Do not call `AddXpToTroop`, `AddSkillXp`, or an upgrade Action from the model. The same result may be read by daily ticks, battle settlement, and UI previews.
- Do not treat daily experience as the final XP for one troop. The vanilla behavior multiplies it by `TroopRosterElement.Number` before writing.

## Dependencies

#### Upstream

- [Campaign](../../campaign/Campaign) and [GameModels](../GameModels) own the registered training policy.
- [MobileParty](../../campaign/MobileParty), [PartyBase](../../campaign/PartyBase/), and `TroopRosterElement` provide party, battle, and troop context.
- `CharacterObject`, troop tier, leader skills, and Leadership/Steward perks supply modifiers.

#### Downstream

- `MobilePartyTrainingBehavior` reads daily experience during hourly/daily events and writes XP to the roster.
- `MapEventParty` reads battle XP and shared XP while resolving map combat rewards.
- `DefaultSkillLevelingManager` uses `GetXpReward` and upgrade callbacks for hero skill experience; troop eligibility belongs to [PartyTroopUpgradeModel](../PartyTroopUpgradeModel).

## Members and timing

| Member | Purpose and timing | Side-effect boundary |
|---|---|---|
| `GenerateSharedXp(CharacterObject, int, MobileParty)` | Converts shareable battle XP through leader and troop traits. | Returns an increment; it does not edit the roster. |
| `CalculateXpGainFromBattles(FlattenedTroopRosterElement, PartyBase)` | Adds battle and perk adjustments to a flattened troop result after map combat. | Does not settle the battle or grant XP. |
| `GetXpReward(CharacterObject)` | Supplies the base reward for a defeated character based on its level. | Returns a reward; it does not grant experience. |
| `GetEffectiveDailyExperience(MobileParty, TroopRosterElement)` | Computes daily XP from active/sea/army/settlement state, troop tier, and perks. | The behavior performs the roster write. |

## Real acquisition and query example

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Roster;

MobileParty party = MobileParty.MainParty;
PartyTrainingModel training = Campaign.Current.Models.PartyTrainingModel;
TroopRosterElement troop = party.MemberRoster.GetElementCopyAtIndex(0);
ExplainedNumber dailyExperience = training.GetEffectiveDailyExperience(party, troop);
```

This previews the vanilla daily-training formula. `MobilePartyTrainingBehavior.OnDailyTickParty` performs `AddXpToTroop`; a custom behavior must own one write stage or it will double the training.

## Risks and debugging boundaries

1. Treating `GetEffectiveDailyExperience` as total XP per troop and skipping the roster-count multiplication gives large and small parties the same training.
2. Writing the roster or triggering upgrades in the model repeats state changes during daily ticks, battle settlement, and UI reads, producing inconsistent upgrade order and saves.
3. The policy distinguishes sea, active, army-leader, player-clan, and troop-tier cases. A fixed return value bypasses perk design and can train troops that should not gain XP.
4. `CalculateXpGainFromBattles` receives a flattened map-event roster element, not a live `MobileParty.MemberRoster` index. Do not retain its temporary context after the map event.
5. A model replacement does not save custom training state. Store persistent counters in a [CampaignBehaviorBase](../CampaignBehaviorBase) save contract.

## Navigation

- [Parent: campaign-ext](../)
- [Models family guide](../models/)
- [Sibling: PartyTroopUpgradeModel](../PartyTroopUpgradeModel) · [PartyWageModel](../PartyWageModel)
- [Related: Campaign](../../campaign/Campaign) · [GameModels](../GameModels) · [MobileParty](../../campaign/MobileParty)
