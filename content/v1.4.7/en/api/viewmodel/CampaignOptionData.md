---
title: "CampaignOptionData"
description: "CampaignOptionData — class in TaleWorlds.CampaignSystem.ViewModelCollection. 16 public members (2 static)."
---

<!-- v147-skeleton -->
# CampaignOptionData

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public abstract class CampaignOptionData : ICampaignOptionData`  
**Base:** `ICampaignOptionData`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionData.cs`

## Overview

`CampaignOptionData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends ICampaignOptionData, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CampaignOptionData`.
- **Static entry points** (2): `GetNameOfOption`, `GetDescriptionOfOption`.
- **Instance members** (11): `GetPriorityIndex`, `GetDataType`, `IsRelatedToDifficultyPreset`, `GetValueFromDifficultyPreset`, `GetIsDisabledWithReason`, `GetIdentifier`, ….
- **Extension points** (1): `GetDataType`.
- **Data and constants** (2): `_getValue`, `_setValue`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetDescriptionOfOption` | method (static) | Static entry point. Takes 1 argument: `string optionIdentifier`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetNameOfOption` | method (static) | Static entry point. Takes 1 argument: `string optionIdentifier`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetDataType` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `CampaignOptionDataType`. Read path: prefer it over reaching for the backing store. |
| `GetDescription` | method | Instance entry point. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetEnableState` | method | Instance entry point. Takes no arguments. Returns `CampaignOptionEnableState`. Read path: prefer it over reaching for the backing store. |
| `GetIdentifier` | method | Instance entry point. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetIsDisabledWithReason` | method | Instance entry point. Takes no arguments. Returns `CampaignOptionDisableStatus`. Read path: prefer it over reaching for the backing store. |
| `GetName` | method | Instance entry point. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetPriorityIndex` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetValue` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetValueFromDifficultyPreset` | method | Instance entry point. Takes 1 argument: `CampaignOptionsDifficultyPresets preset`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `IsRelatedToDifficultyPreset` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `SetValue` | method | Instance entry point. Takes 1 argument: `float value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `CampaignOptionData` | ctor | Instance entry point. Takes 11 arguments: `string identifier`, `int priorityIndex`, `CampaignOptionEnableState enableState`, `Func<float> getValue`, …. Returns ``. |
| `_getValue` | field | Protected — for subclasses only `Func<float>` field — direct storage with no validation or notification. |
| `_setValue` | field | Protected — for subclasses only `Action<float>` field — direct storage with no validation or notification. |

- Constructed as `public CampaignOptionData(string identifier, int priorityIndex, CampaignOptionEnableState enableState, Func<float> getValue, Action<float> setValue, Func<CampaignOptionDisableStatus> getIsDisabledWithReason = null, bool isRelatedToDifficultyPreset = false, Func<float, CampaignOptionsDifficultyPresets> onGetDifficultyPresetFromValue = null, Func<CampaignOptionsDifficultyPresets, float> onGetValueFromDifficultyPreset = null)`.

## Usage Example

```csharp
var data = new CampaignOptionData
{
    _getValue = default,
    _setValue = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/viewmodel/](../) — the other types in this bucket.
