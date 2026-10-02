---
title: "BooleanCampaignOptionData"
description: "BooleanCampaignOptionData — class in TaleWorlds.CampaignSystem.ViewModelCollection. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# BooleanCampaignOptionData

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class BooleanCampaignOptionData : CampaignOptionData`  
**Base:** `CampaignOptionData`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/BooleanCampaignOptionData.cs`

## Overview

`BooleanCampaignOptionData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends CampaignOptionData, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BooleanCampaignOptionData`.
- **Instance members** (1): `GetDataType`.
- **Extension points** (1): `GetDataType`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetDataType` | method (override) | Overrides the base member. Takes no arguments. Returns `CampaignOptionDataType`. Read path: prefer it over reaching for the backing store. |
| `BooleanCampaignOptionData` | ctor | Instance entry point. Takes 11 arguments: `string identifier`, `int priorityIndex`, `CampaignOptionEnableState enableState`, `Func<float> getValue`, …. Returns ``. |

- Constructed as `public BooleanCampaignOptionData(string identifier, int priorityIndex, CampaignOptionEnableState enableState, Func<float> getValue, Action<float> setValue, Func<CampaignOptionDisableStatus> getIsDisabledWithReason = null, bool isRelatedToDifficultyPreset = false, Func<float, CampaignOptionsDifficultyPresets> onGetDifficultyPresetFromValue = null, Func<CampaignOptionsDifficultyPresets, float> onGetValueFromDifficultyPreset = null)`.

## Usage Example

```csharp
BooleanCampaignOptionData.GetDataType();
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/BooleanCampaignOptionData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CampaignOptionData](../CampaignOptionData/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.

Section: [api/viewmodel/](../) — the other types in this bucket.
