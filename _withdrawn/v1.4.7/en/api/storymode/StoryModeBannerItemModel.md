---
title: "StoryModeBannerItemModel"
description: "StoryModeBannerItemModel — class in StoryMode.GameComponents. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# StoryModeBannerItemModel

**Namespace:** `StoryMode.GameComponents`  
**Module:** `StoryMode`  
**Type:** `public class StoryModeBannerItemModel : BannerItemModel`  
**Base:** `BannerItemModel`  
**Source:** `StoryMode/GameComponents/StoryModeBannerItemModel.cs`

## Overview

`StoryModeBannerItemModel` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends BannerItemModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (4): `GetPossibleRewardBannerItems`, `CanBannerBeUpdated`, `GetPossibleRewardBannerItemsForHero`, `GetBannerItemLevelForHero`.
- **Extension points** (4): `GetPossibleRewardBannerItems`, `CanBannerBeUpdated`, `GetPossibleRewardBannerItemsForHero`, `GetBannerItemLevelForHero`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CanBannerBeUpdated` | method (override) | Overrides the base member. Takes 1 argument: `ItemObject item`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `GetBannerItemLevelForHero` | method (override) | Overrides the base member. Takes 1 argument: `Hero hero`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetPossibleRewardBannerItems` | method (override) | Overrides the base member. Takes no arguments. Returns `IEnumerable<ItemObject>`. Read path: prefer it over reaching for the backing store. |
| `GetPossibleRewardBannerItemsForHero` | method (override) | Overrides the base member. Takes 1 argument: `Hero hero`. Returns `IEnumerable<ItemObject>`. Read path: prefer it over reaching for the backing store. |

## Usage Example

```csharp
StoryModeBannerItemModel.GetPossibleRewardBannerItems();
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `StoryMode/GameComponents/StoryModeBannerItemModel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [LinQuick](../../core-extra/LinQuick/) — `TaleWorlds.LinQuick`.
- [TutorialPhase](../TutorialPhase/) — `StoryMode.StoryModePhases`.

Section: [api/storymode/](../) — the other types in this bucket.
