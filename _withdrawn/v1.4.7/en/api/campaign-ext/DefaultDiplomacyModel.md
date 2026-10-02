---
title: "DefaultDiplomacyModel"
description: "DefaultDiplomacyModel — class in TaleWorlds.CampaignSystem.GameComponents. 62 public members (0 static)."
---

<!-- v147-skeleton -->
# DefaultDiplomacyModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultDiplomacyModel : DiplomacyModel`  
**Base:** `DiplomacyModel`  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDiplomacyModel.cs`

## Overview

`DefaultDiplomacyModel` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends DiplomacyModel, so the members it does not redeclare are inherited from there. 8 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (62): `MinimumRelationWithConversationCharacterToJoinKingdom`, `GiftingTownRelationshipBonus`, `GiftingCastleRelationshipBonus`, `MaxRelationLimit`, `MinRelationLimit`, `MaxNeutralRelationLimit`, ….
- **Extension points** (62): `MinimumRelationWithConversationCharacterToJoinKingdom`, `GiftingTownRelationshipBonus`, `GiftingCastleRelationshipBonus`, `MaxRelationLimit`, `MinRelationLimit`, `MaxNeutralRelationLimit`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CanSettlementBeGifted` | method (override) | Overrides the base member. Takes 1 argument: `Settlement settlementToGift`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `DenarsToInfluence` | method (override) | Overrides the base member. Takes no arguments. Returns `float`. |
| `GetBarterGroups` | method (override) | Overrides the base member. Takes no arguments. Returns `IEnumerable<BarterGroup>`. Read path: prefer it over reaching for the backing store. |
| `GetBaseRelation` | method (override) | Overrides the base member. Takes 2 arguments: `Hero hero1`, `Hero hero2`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetCharmExperienceFromRelationGain` | method (override) | Overrides the base member. Takes 3 arguments: `Hero hero`, `float relationChange`, `ChangeRelationAction.ChangeRelationDetail detail`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetClanStrength` | method (override) | Overrides the base member. Takes 1 argument: `Clan clan`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetDailyTributeToPay` | method (override) | Overrides the base member. Takes 3 arguments: `Clan factionToPay`, `Clan factionToReceive`, `out int tributeDurationInDays`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetDecisionMakingThreshold` | method (override) | Overrides the base member. Takes 1 argument: `IFaction consideringFaction`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetDefaultDiplomaticStance` | method (override) | Overrides the base member. Takes 2 arguments: `IFaction faction1`, `IFaction faction2`. Returns `DiplomacyModel.DiplomacyStance`. Read path: prefer it over reaching for the backing store. |
| `GetEffectiveRelation` | method (override) | Overrides the base member. Takes 2 arguments: `Hero hero1`, `Hero hero2`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetHeroCommandingStrengthForClan` | method (override) | Overrides the base member. Takes 1 argument: `Hero hero`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetHeroesForEffectiveRelation` | method (override) | Overrides the base member. Takes 4 arguments: `Hero hero1`, `Hero hero2`, `out Hero effectiveHero1`, `out Hero effectiveHero2`. Read path: prefer it over reaching for the backing store. |
| `GetHeroGoverningStrengthForClan` | method (override) | Overrides the base member. Takes 1 argument: `Hero hero`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetHourlyInfluenceAwardForBeingArmyMember` | method (override) | Overrides the base member. Takes 1 argument: `MobileParty mobileParty`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetHourlyInfluenceAwardForBesiegingEnemyFortification` | method (override) | Overrides the base member. Takes 1 argument: `MobileParty mobileParty`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetHourlyInfluenceAwardForRaidingEnemyVillage` | method (override) | Overrides the base member. Takes 1 argument: `MobileParty mobileParty`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetInfluenceAwardForSettlementCapturer` | method (override) | Overrides the base member. Takes 1 argument: `Settlement settlement`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetInfluenceCostOfAbandoningArmy` | method (override) | Overrides the base member. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetInfluenceCostOfAnnexation` | method (override) | Overrides the base member. Takes 1 argument: `Clan proposingClan`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetInfluenceCostOfChangingLeaderOfArmy` | method (override) | Overrides the base member. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetInfluenceCostOfDisbandingArmy` | method (override) | Overrides the base member. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetInfluenceCostOfExpellingClan` | method (override) | Overrides the base member. Takes 1 argument: `Clan proposingClan`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetInfluenceCostOfPolicyProposalAndDisavowal` | method (override) | Overrides the base member. Takes 1 argument: `Clan proposerClan`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetInfluenceCostOfProposingPeace` | method (override) | Overrides the base member. Takes 1 argument: `Clan proposingClan`. Returns `int`. Read path: prefer it over reaching for the backing store. |

38 further public members follow the same patterns.
## Usage Example

```csharp
var data = new DefaultDiplomacyModel
{
    MinimumRelationWithConversationCharacterToJoinKingdom = 0,
    GiftingTownRelationshipBonus = 0,
    GiftingCastleRelationshipBonus = 0,
    MaxRelationLimit = 0,
    MinRelationLimit = 0,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 62 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/GameComponents/DefaultDiplomacyModel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.
- [DefaultTraits](../../campaign/DefaultTraits/) — `TaleWorlds.CampaignSystem.CharacterDevelopment`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.
- [ExplainedNumber](../../campaign/ExplainedNumber/) — `TaleWorlds.CampaignSystem`.
- [DefaultPerks](../../campaign/DefaultPerks/) — `TaleWorlds.CampaignSystem.CharacterDevelopment`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [SiegeEvent](../../campaign/SiegeEvent/) — `TaleWorlds.CampaignSystem.Siege`.
- [Town](../../campaign/Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [AllianceModel](../AllianceModel/) — `TaleWorlds.CampaignSystem.ComponentInterfaces`.
- [ItemRoster](../../campaign/ItemRoster/) — `TaleWorlds.CampaignSystem.Roster`.

Section: [api/campaign-ext/](../) — the other types in this bucket.
