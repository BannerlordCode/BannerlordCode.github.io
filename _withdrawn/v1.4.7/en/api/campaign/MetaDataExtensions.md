---
title: "MetaDataExtensions"
description: "MetaDataExtensions — class in TaleWorlds.CampaignSystem.Extensions. 16 public members (16 static)."
---

<!-- v147-skeleton -->
# MetaDataExtensions

**Namespace:** `TaleWorlds.CampaignSystem.Extensions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class MetaDataExtensions`  
**Source:** `TaleWorlds.CampaignSystem/Extensions/MetaDataExtensions.cs`

## Overview

`MetaDataExtensions` is a helper namespace: stateless functions that answer a question or compute a value that would otherwise be duplicated across call sites. It holds no campaign state of its own.

## Mental Model

A helper is the right home for "given these inputs, what is the answer", and the wrong home for anything that has to be remembered. Call it, take the value, and let the caller own the lifetime.

Because helpers are shared by many systems, changing the meaning of a parameter is a breaking change for every caller — treat the signature as a published contract even though there is no interface.

Concretely, the surface breaks down like this:

- **Static entry points** (16): `GetUniqueGameId`, `GetMainHeroLevel`, `GetMainPartyFood`, `GetMainHeroGold`, `GetClanInfluence`, `GetClanFiefs`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetCharacterName` | method (static) | Static entry point. Takes 1 argument: `this MetaData metaData`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetCharacterVisualCode` | method (static) | Static entry point. Takes 1 argument: `this MetaData metaData`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetClanBannerCode` | method (static) | Static entry point. Takes 1 argument: `this MetaData metaData`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetClanFiefs` | method (static) | Static entry point. Takes 1 argument: `this MetaData metaData`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetClanInfluence` | method (static) | Static entry point. Takes 1 argument: `this MetaData metaData`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetDayLong` | method (static) | Static entry point. Takes 1 argument: `this MetaData metaData`. Returns `double`. Read path: prefer it over reaching for the backing store. |
| `GetIronmanMode` | method (static) | Static entry point. Takes 1 argument: `this MetaData metaData`. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `GetMainHeroGold` | method (static) | Static entry point. Takes 1 argument: `this MetaData metaData`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetMainHeroLevel` | method (static) | Static entry point. Takes 1 argument: `this MetaData metaData`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetMainPartyFood` | method (static) | Static entry point. Takes 1 argument: `this MetaData metaData`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetMainPartyHealthyMemberCount` | method (static) | Static entry point. Takes 1 argument: `this MetaData metaData`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetMainPartyPrisonerMemberCount` | method (static) | Static entry point. Takes 1 argument: `this MetaData metaData`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetMainPartyShipCount` | method (static) | Static entry point. Takes 1 argument: `this MetaData metaData`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetMainPartyWoundedMemberCount` | method (static) | Static entry point. Takes 1 argument: `this MetaData metaData`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetPlayerHealthPercentage` | method (static) | Static entry point. Takes 1 argument: `this MetaData metaData`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetUniqueGameId` | method (static) | Static entry point. Takes 1 argument: `this MetaData metaData`. Returns `string`. Read path: prefer it over reaching for the backing store. |

## Usage Example

```csharp
// Static entry points on MetaDataExtensions:
MetaDataExtensions.GetUniqueGameId(theTarget);
MetaDataExtensions.GetMainHeroLevel(theTarget);
MetaDataExtensions.GetMainPartyFood(theTarget);
```

## Risks and Boundaries

- Most helpers assume an active game context; they read `Campaign.Current` or the mission singleton internally.
- They are pure-looking but not pure: several helpers cache results for the current frame.
- Null arguments are usually not validated; a missing hero or party surfaces as a null-reference much later.
- The declaration in `TaleWorlds.CampaignSystem/Extensions/MetaDataExtensions.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.

Section: [api/campaign/](../) — the other types in this bucket.
