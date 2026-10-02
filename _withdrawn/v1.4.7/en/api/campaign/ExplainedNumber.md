---
title: "ExplainedNumber"
description: "ExplainedNumber — struct in TaleWorlds.CampaignSystem. 16 public members (0 static)."
---

<!-- v147-skeleton -->
# ExplainedNumber

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public struct ExplainedNumber`  
**Source:** `TaleWorlds.CampaignSystem/ExplainedNumber.cs`

## Overview

`ExplainedNumber` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ExplainedNumber`.
- **Instance members** (15): `ResultNumber`, `RoundedResultNumber`, `BaseNumber`, `IncludeDescriptions`, `LimitMinValue`, `LimitMaxValue`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Add` | method | Instance entry point. Takes 3 arguments: `float value`, `TextObject description`, `TextObject variable`. |
| `AddFactor` | method | Instance entry point. Takes 2 arguments: `float value`, `TextObject description`. Adds to the collection or relation this type owns. |
| `AddFromExplainedNumber` | method | Instance entry point. Takes 2 arguments: `ExplainedNumber explainedNumber`, `TextObject baseText`. Adds to the collection or relation this type owns. |
| `BaseNumber` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `Clamp` | method | Instance entry point. Takes 2 arguments: `float minValue`, `float maxValue`. |
| `GetExplanations` | method | Instance entry point. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `IncludeDescriptions` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `LimitMax` | method | Instance entry point. Takes 2 arguments: `float maxValue`, `TextObject description`. |
| `LimitMaxValue` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `LimitMin` | method | Instance entry point. Takes 1 argument: `float minValue`. |
| `LimitMinValue` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `ResultNumber` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `RoundedResultNumber` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `SubtractFromExplainedNumber` | method | Instance entry point. Takes 2 arguments: `ExplainedNumber explainedNumber`, `TextObject baseText`. |
| `SumOfFactors` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `ExplainedNumber` | ctor | Instance entry point. Takes 3 arguments: `float baseNumber`, `bool includeDescriptions`, `TextObject baseText`. Returns ``. |

- Constructed as `public ExplainedNumber(float baseNumber = 0f, bool includeDescriptions = false, TextObject baseText = null)`.

## Usage Example

```csharp
var data = new ExplainedNumber
{
    ResultNumber = 0,
    RoundedResultNumber = 0,
    BaseNumber = 0,
    IncludeDescriptions = false,
    LimitMinValue = 0,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.CampaignSystem/ExplainedNumber.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/campaign/](../) — the other types in this bucket.
