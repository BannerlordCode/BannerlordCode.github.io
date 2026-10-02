---
title: "SandBoxUIHelper"
description: "SandBoxUIHelper — class in SandBox.ViewModelCollection. 23 public members (22 static)."
---

<!-- v147-skeleton -->
# SandBoxUIHelper

**Namespace:** `SandBox.ViewModelCollection`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public static class SandBoxUIHelper`  
**Source:** `SandBox.ViewModelCollection/SandBoxUIHelper.cs`

## Overview

`SandBoxUIHelper` is a helper namespace: stateless functions that answer a question or compute a value that would otherwise be duplicated across call sites. It holds no campaign state of its own.

## Mental Model

A helper is the right home for "given these inputs, what is the answer", and the wrong home for anything that has to be remembered. Call it, take the value, and let the caller own the lifetime.

Because helpers are shared by many systems, changing the meaning of a parameter is a breaking change for every caller — treat the signature as a published contract even though there is no interface.

Concretely, the surface breaks down like this:

- **Static entry points** (22): `GetExplainedNumberTooltip`, `GetBattleLootAwardTooltip`, `GetFigureheadTooltip`, `GetSkillEffectText`, `GetRecruitNotificationText`, `GetItemSoldNotificationText`, ….
- **Data and constants** (1): `AgentMarkerWorldHeightOffset`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CanAgentBeAlarmed` | method (static) | Static entry point. Takes 1 argument: `Agent agent`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `GetAllPrisonerMembersAmount` | method (static) | Static entry point. Takes 1 argument: `MobileParty party`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetAllWoundedMembersAmount` | method (static) | Static entry point. Takes 1 argument: `MobileParty party`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetBattleLootAwardTooltip` | method (static) | Static entry point. Takes 1 argument: `float lootPercentage`. Returns `List<TooltipProperty>`. Read path: prefer it over reaching for the backing store. |
| `GetCharacterCode` | method (static) | Static entry point. Takes 2 arguments: `CharacterObject character`, `bool useCivilian`. Returns `CharacterCode`. Read path: prefer it over reaching for the backing store. |
| `GetExplainedNumberTooltip` | method (static) | Static entry point. Takes 1 argument: `ref ExplainedNumber explanation`. Returns `List<TooltipProperty>`. Read path: prefer it over reaching for the backing store. |
| `GetFigureheadTooltip` | method (static) | Static entry point. Takes 1 argument: `Figurehead figurehead`. Returns `List<TooltipProperty>`. Read path: prefer it over reaching for the backing store. |
| `GetItemSoldNotificationText` | method (static) | Static entry point. Takes 3 arguments: `ItemRosterElement item`, `int itemAmount`, `bool fromHeroToSettlement`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetMapEventVisualTypeFromMapEvent` | method (static) | Static entry point. Takes 1 argument: `MapEvent mapEvent`. Returns `SandBoxUIHelper.MapEventVisualTypes`. Read path: prefer it over reaching for the backing store. |
| `GetPartyHealthyCount` | method (static) | Static entry point. Takes 1 argument: `MobileParty party`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetPartyPrisonerText` | method (static) | Static entry point. Takes 1 argument: `int prisonerAmount`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetPartyWoundedText` | method (static) | Static entry point. Takes 1 argument: `int woundedAmount`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetPrisonersSoldNotificationText` | method (static) | Static entry point. Takes 1 argument: `int soldPrisonerAmount`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetRecruitNotificationText` | method (static) | Static entry point. Takes 1 argument: `int recruitmentAmount`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetShipSoldNotificationText` | method (static) | Static entry point. Takes 3 arguments: `Ship ship`, `int itemAmount`, `bool fromHeroToSettlement`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetSiegeEngineInProgressTooltip` | method (static) | Static entry point. Takes 1 argument: `SiegeEvent.SiegeEngineConstructionProgress engineInProgress`. Returns `List<TooltipProperty>`. Read path: prefer it over reaching for the backing store. |
| `GetSiegeEngineTooltip` | method (static) | Static entry point. Takes 1 argument: `SiegeEngineType engine`. Returns `List<TooltipProperty>`. Read path: prefer it over reaching for the backing store. |
| `GetSkillEffectText` | method (static) | Static entry point. Takes 2 arguments: `SkillEffect effect`, `int skillLevel`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetTroopGivenToSettlementNotificationText` | method (static) | Static entry point. Takes 1 argument: `int givenAmount`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetWallSectionTooltip` | method (static) | Static entry point. Takes 2 arguments: `Settlement settlement`, `int wallIndex`. Returns `List<TooltipProperty>`. Read path: prefer it over reaching for the backing store. |
| `IsAgentInVisibilityRangeApproximate` | method (static) | Static entry point. Takes 2 arguments: `Agent seerAgent`, `Agent seenAgent`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsHeroInformationHidden` | method (static) | Static entry point. Takes 2 arguments: `Hero hero`, `out TextObject disableReason`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `AgentMarkerWorldHeightOffset` | const | Instance entry point. Takes no arguments. Returns `float`. |

## Usage Example

```csharp
// Static entry points on SandBoxUIHelper:
SandBoxUIHelper.GetExplainedNumberTooltip(theTarget);
SandBoxUIHelper.GetBattleLootAwardTooltip(lootPercentage);
SandBoxUIHelper.GetFigureheadTooltip(figurehead);
```

## Risks and Boundaries

- Most helpers assume an active game context; they read `Campaign.Current` or the mission singleton internally.
- They are pure-looking but not pure: several helpers cache results for the current frame.
- Null arguments are usually not validated; a missing hero or party surfaces as a null-reference much later.
- The declaration in `SandBox.ViewModelCollection/SandBoxUIHelper.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ExplainedNumber](../../campaign/ExplainedNumber/) — `TaleWorlds.CampaignSystem`.
- [Figurehead](../../campaign/Figurehead/) — `TaleWorlds.CampaignSystem.Naval`.
- [Ship](../../campaign/Ship/) — `TaleWorlds.CampaignSystem.Naval`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.
- [SiegeEvent](../../campaign/SiegeEvent/) — `TaleWorlds.CampaignSystem.Siege`.
- [PlayerSiege](../../campaign/PlayerSiege/) — `TaleWorlds.CampaignSystem.Siege`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.

Section: [api/sandbox/](../) — the other types in this bucket.
