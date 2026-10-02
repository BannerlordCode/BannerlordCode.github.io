---
title: "DefaultSkillLevelingManager"
description: "DefaultSkillLevelingManager — class in TaleWorlds.CampaignSystem.CharacterDevelopment. 48 public members (0 static)."
---

<!-- v147-skeleton -->
# DefaultSkillLevelingManager

**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultSkillLevelingManager : ISkillLevelingManager`  
**Base:** `ISkillLevelingManager`  
**Source:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultSkillLevelingManager.cs`

## Overview

`DefaultSkillLevelingManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

It extends ISkillLevelingManager, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Instance members** (48): `OnCombatHit`, `OnSiegeEngineDestroyed`, `OnSimulationCombatKill`, `OnTradeProfitMade`, `OnSettlementProjectFinished`, `OnSettlementGoverned`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnAIPartiesTravel` | method | Instance entry point. Takes 3 arguments: `Hero hero`, `bool isCaravanParty`, `TerrainType currentTerrainType`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnAIPartyLootCasualties` | method | Instance entry point. Takes 3 arguments: `int goldAmount`, `Hero winnerPartyLeader`, `PartyBase defeatedParty`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnAlleyCleared` | method | Instance entry point. Takes 1 argument: `Alley alley`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnBanditsRecruited` | method | Instance entry point. Takes 3 arguments: `MobileParty mobileParty`, `CharacterObject bandit`, `int count`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnBattleEnded` | method | Instance entry point. Takes 3 arguments: `PartyBase party`, `CharacterObject troop`, `int excessXp`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnBoardGameWonAgainstLord` | method | Instance entry point. Takes 3 arguments: `Hero lord`, `BoardGameHelper.AIDifficulty difficulty`, `bool extraXpGain`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnBribeGiven` | method | Instance entry point. Takes 1 argument: `int amount`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnCombatHit` | method | Instance entry point. Takes 17 arguments: `CharacterObject affectorCharacter`, `CharacterObject affectedCharacter`, `CharacterObject captain`, `Hero commander`, …. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDailyAlleyTick` | method | Instance entry point. Takes 2 arguments: `Alley alley`, `Hero alleyLeader`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFoodConsumed` | method | Instance entry point. Takes 2 arguments: `MobileParty mobileParty`, `bool wasStarving`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnForceSupplies` | method | Instance entry point. Takes 3 arguments: `MobileParty attackerParty`, `ItemRoster lootedItems`, `bool attacked`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnForceVolunteers` | method | Instance entry point. Takes 2 arguments: `MobileParty attackerParty`, `PartyBase forcedParty`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnGainRelation` | method | Instance entry point. Takes 4 arguments: `Hero hero`, `Hero gainedRelationWith`, `float relationChange`, `ChangeRelationAction.ChangeRelationDetail detail`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnHeroHealedWhileWaiting` | method | Instance entry point. Takes 2 arguments: `Hero hero`, `int healingAmount`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnHideoutClearedAsGhost` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnHideoutMissionEnd` | method | Instance entry point. Takes 1 argument: `bool isSucceeded`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnHideoutSpotted` | method | Instance entry point. Takes 2 arguments: `MobileParty party`, `PartyBase spottedParty`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInfluenceSpent` | method | Instance entry point. Takes 2 arguments: `Hero hero`, `float amountSpent`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnLeadingArmy` | method | Instance entry point. Takes 1 argument: `MobileParty mobileParty`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnLoot` | method | Instance entry point. Takes 4 arguments: `MobileParty attackerParty`, `MobileParty forcedParty`, `ItemRoster lootedItems`, `bool attacked`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMainHeroDisguised` | method | Instance entry point. Takes 1 argument: `bool isNotCaught`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMainHeroReleasedFromCaptivity` | method | Instance entry point. Takes 1 argument: `float captivityTime`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMainHeroTortured` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPersuasionSucceeded` | method | Instance entry point. Takes 4 arguments: `Hero targetHero`, `SkillObject skill`, `PersuasionDifficulty difficulty`, `int argumentDifficultyBonusCoefficient`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

24 further public members follow the same patterns.
## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
// DefaultSkillLevelingManager exposes no accessor; the engine passes the instance to its callbacks.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultSkillLevelingManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Persuasion](../../campaign-ext/Persuasion/) — `TaleWorlds.CampaignSystem.Conversation.Persuasion`.
- [ExplainedNumber](../ExplainedNumber/) — `TaleWorlds.CampaignSystem`.
- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [Town](../Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [ItemRoster](../ItemRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [TroopRoster](../TroopRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [PersuasionDifficulty](../../campaign-ext/PersuasionDifficulty/) — `TaleWorlds.CampaignSystem.Conversation.Persuasion`.
- [Alley](../Alley/) — `TaleWorlds.CampaignSystem.Settlements`.
- [AlleyModel](../../campaign-ext/AlleyModel/) — `TaleWorlds.CampaignSystem.ComponentInterfaces`.
- [HeroDeveloper](../HeroDeveloper/) — `TaleWorlds.CampaignSystem.CharacterDevelopment`.

Section: [api/campaign/](../) — the other types in this bucket.
