---
title: "CampaignUIHelper"
description: "CampaignUIHelper — class in TaleWorlds.CampaignSystem.ViewModelCollection. 143 public members (143 static)."
---

<!-- v147-skeleton -->
# CampaignUIHelper

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public static class CampaignUIHelper`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignUIHelper.cs`

## Overview

`CampaignUIHelper` is a helper namespace: stateless functions that answer a question or compute a value that would otherwise be duplicated across call sites. It holds no campaign state of its own.

## Mental Model

A helper is the right home for "given these inputs, what is the answer", and the wrong home for anything that has to be remembered. Call it, take the value, and let the caller own the lifetime.

Because helpers are shared by many systems, changing the meaning of a parameter is a breaking change for every caller — treat the signature as a published contract even though there is no interface.

Concretely, the surface breaks down like this:

- **Static entry points** (143): `GetTooltipForAccumulatingProperty`, `GetTooltipForAccumulatingPropertyWithResult`, `GetTooltipForgProperty`, `GetTownWallsTooltip`, `GetVillageMilitiaTooltip`, `GetTownMilitiaTooltip`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CharacterAttributeComparerInstance` | property (static) | Static entry point `CampaignUIHelper.CharacterAttributeComparer` property. Read it for current state; a declared setter writes that state in place. |
| `ConvertToHexColor` | method (static) | Static entry point. Takes 1 argument: `uint color`. Returns `string`. |
| `FloatToString` | method (static) | Static entry point. Takes 1 argument: `float x`. Returns `string`. |
| `GetAbbreviatedValueTextFromValue` | method (static) | Static entry point. Takes 1 argument: `int valueAmount`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetAddFocusHintString` | method (static) | Static entry point. Takes 3 arguments: `bool playerHasEnoughPoints`, `bool isMaxedSkill`, `int currentFocusAmount`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetArmyCohesionTooltip` | method (static) | Static entry point. Takes 1 argument: `Army army`. Returns `List<TooltipProperty>`. Read path: prefer it over reaching for the backing store. |
| `GetArmyDisbandDisableReasonString` | method (static) | Static entry point. Takes 4 arguments: `bool hasEnoughInfluence`, `bool isArmyInAnyEvent`, `bool isPlayerClanMercenary`, `bool isPlayerInThisArmy`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetArmyFoodTooltip` | method (static) | Static entry point. Takes 1 argument: `Army army`. Returns `List<TooltipProperty>`. Read path: prefer it over reaching for the backing store. |
| `GetArmyManCountTooltip` | method (static) | Static entry point. Takes 1 argument: `Army army`. Returns `List<TooltipProperty>`. Read path: prefer it over reaching for the backing store. |
| `GetAttributeTypeSortIndex` | method (static) | Static entry point. Takes 1 argument: `CharacterAttribute attribute`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetCanManageCurrentArmyWithReason` | method (static) | Static entry point. Takes 1 argument: `out TextObject disabledReason`. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `GetCharacterCode` | method (static) | Static entry point. Takes 2 arguments: `CharacterObject character`, `bool useCivilian`. Returns `CharacterCode`. Read path: prefer it over reaching for the backing store. |
| `GetCharacterTierData` | method (static) | Static entry point. Takes 2 arguments: `CharacterObject character`, `bool isBig`. Returns `StringItemWithHintVM`. Read path: prefer it over reaching for the backing store. |
| `GetCharacterTypeData` | method (static) | Static entry point. Takes 2 arguments: `CharacterObject character`, `bool isBig`. Returns `StringItemWithHintVM`. Read path: prefer it over reaching for the backing store. |
| `GetChildrenAndGrandchildrenOfHero` | method (static) | Static entry point. Takes 1 argument: `Hero hero`. Returns `List<Hero>`. Read path: prefer it over reaching for the backing store. |
| `GetClanExpelDisableReasonString` | method (static) | Static entry point. Takes 4 arguments: `bool hasEnoughInfluence`, `bool isTargetMainClan`, `bool isTargetRulingClan`, `bool isMainClanMercenary`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetClanProsperityTooltip` | method (static) | Static entry point. Takes 1 argument: `Clan clan`. Returns `List<TooltipProperty>`. Read path: prefer it over reaching for the backing store. |
| `GetClanRenownTooltip` | method (static) | Static entry point. Takes 1 argument: `Clan clan`. Returns `List<TooltipProperty>`. Read path: prefer it over reaching for the backing store. |
| `GetClanStrengthTooltip` | method (static) | Static entry point. Takes 1 argument: `Clan clan`. Returns `List<TooltipProperty>`. Read path: prefer it over reaching for the backing store. |
| `GetClanSupportDisableReasonString` | method (static) | Static entry point. Takes 3 arguments: `bool hasEnoughInfluence`, `bool isTargetMainClan`, `bool isMainClanMercenary`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetClanWealthStatusText` | method (static) | Static entry point. Takes 1 argument: `Clan clan`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetCombinedPerkRoleText` | method (static) | Static entry point. Takes 1 argument: `PerkObject perk`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetCommaNewlineSeparatedText` | method (static) | Static entry point. Takes 2 arguments: `TextObject label`, `IEnumerable<TextObject> texts`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetCommaSeparatedText` | method (static) | Static entry point. Takes 2 arguments: `TextObject label`, `IEnumerable<TextObject> texts`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |

119 further public members follow the same patterns.
## Usage Example

```csharp
// Static entry points on CampaignUIHelper:
CampaignUIHelper.GetTooltipForAccumulatingProperty(propertyName, currentValue, explainedNumber);
CampaignUIHelper.GetTooltipForAccumulatingPropertyWithResult(propertyName, currentValue, theTarget);
CampaignUIHelper.GetTooltipForgProperty(propertyName, currentValue, explainedNumber);
```

## Risks and Boundaries

- Most helpers assume an active game context; they read `Campaign.Current` or the mission singleton internally.
- They are pure-looking but not pure: several helpers cache results for the current frame.
- Null arguments are usually not validated; a missing hero or party surfaces as a null-reference much later.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignUIHelper.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.
- [ExplainedNumber](../../campaign/ExplainedNumber/) — `TaleWorlds.CampaignSystem`.
- [GameTextManager](../../core-extra/GameTextManager/) — `TaleWorlds.Core`.
- [Town](../../campaign/Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [EncyclopediaManager](../../campaign/EncyclopediaManager/) — `TaleWorlds.CampaignSystem.Encyclopedia`.
- [AgeModel](../../campaign-ext/AgeModel/) — `TaleWorlds.CampaignSystem.ComponentInterfaces`.
- [TooltipTriggerVM](../../core-extra/TooltipTriggerVM/) — `TaleWorlds.Library.Information`.
- [RundownTooltipVM](../RundownTooltipVM/) — `TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip`.
- [ItemRoster](../../campaign/ItemRoster/) — `TaleWorlds.CampaignSystem.Roster`.

Section: [api/viewmodel/](../) — the other types in this bucket.
