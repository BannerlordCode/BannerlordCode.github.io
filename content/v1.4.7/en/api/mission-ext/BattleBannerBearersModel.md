---
title: "BattleBannerBearersModel"
description: "BattleBannerBearersModel — class in TaleWorlds.MountAndBlade.ComponentInterfaces. 21 public members (0 static)."
---

<!-- v147-skeleton -->
# BattleBannerBearersModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class BattleBannerBearersModel : MBGameModel<BattleBannerBearersModel>`  
**Base:** `MBGameModel`  
**Source:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleBannerBearersModel.cs`

## Overview

`BattleBannerBearersModel` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends MBGameModel, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (20): `BannerBearerLogic`, `InitializeModel`, `FinalizeModel`, `IsFormationBanner`, `IsBannerSearchingAgent`, `IsInteractableFormationBanner`, ….
- **Extension points** (9): `GetMinimumFormationTroopCountToBearBanners`, `GetBannerInteractionDistance`, `CanBannerBearerProvideEffectToFormation`, `CanAgentPickUpAnyBanner`, `CanAgentBecomeBannerBearer`, `GetAgentBannerBearingPriority`, ….
- **Data and constants** (1): `DefaultDetachmentCostMultiplier`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CanAgentBecomeBannerBearer` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `Agent agent`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanAgentPickUpAnyBanner` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `Agent agent`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanBannerBearerProvideEffectToFormation` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `Agent agent`, `Formation formation`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanFormationDeployBannerBearers` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `Formation formation`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `GetAgentBannerBearingPriority` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `Agent agent`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetBannerBearerReplacementWeapon` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `BasicCharacterObject agentCharacter`. Returns `ItemObject`. Read path: prefer it over reaching for the backing store. |
| `GetBannerInteractionDistance` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `Agent interactingAgent`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetDesiredNumberOfBannerBearersForFormation` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `Formation formation`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetMinimumFormationTroopCountToBearBanners` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `FinalizeModel` | method | Instance entry point. Takes no arguments. |
| `GetActiveBanner` | method | Instance entry point. Takes 1 argument: `Formation formation`. Returns `BannerComponent`. Read path: prefer it over reaching for the backing store. |
| `GetFormationBanner` | method | Instance entry point. Takes 1 argument: `Formation formation`. Returns `ItemObject`. Read path: prefer it over reaching for the backing store. |
| `GetFormationBannerBearers` | method | Instance entry point. Takes 1 argument: `Formation formation`. Returns `List<Agent>`. Read path: prefer it over reaching for the backing store. |
| `HasBannerOnGround` | method | Instance entry point. Takes 1 argument: `Formation formation`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `HasFormationBanner` | method | Instance entry point. Takes 1 argument: `Formation formation`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `InitializeModel` | method | Instance entry point. Takes 1 argument: `BannerBearerLogic bannerBearerLogic`. |
| `IsBannerSearchingAgent` | method | Instance entry point. Takes 1 argument: `Agent agent`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsFormationBanner` | method | Instance entry point. Takes 2 arguments: `Formation formation`, `SpawnedItemEntity item`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsInteractableFormationBanner` | method | Instance entry point. Takes 2 arguments: `SpawnedItemEntity item`, `Agent interactingAgent`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `DefaultDetachmentCostMultiplier` | const | Instance entry point. Takes no arguments. Returns `float`. |
| `BannerBearerLogic` | property | Protected — for subclasses only `BannerBearerLogic` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
var data = new BattleBannerBearersModel
{
    BannerBearerLogic = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 9 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleBannerBearersModel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
