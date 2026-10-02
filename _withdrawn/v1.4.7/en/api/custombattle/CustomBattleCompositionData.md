---
title: "CustomBattleCompositionData"
description: "CustomBattleCompositionData — struct in TaleWorlds.MountAndBlade.CustomBattle.CustomBattle. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# CustomBattleCompositionData

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`  
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`  
**Type:** `public struct CustomBattleCompositionData`  
**Source:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleCompositionData.cs`

## Overview

`CustomBattleCompositionData` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CustomBattleCompositionData`.
- **Data and constants** (4): `IsValid`, `RangedPercentage`, `CavalryPercentage`, `RangedCavalryPercentage`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CustomBattleCompositionData` | ctor | Instance entry point. Takes 3 arguments: `float rangedPercentage`, `float cavalryPercentage`, `float rangedCavalryPercentage`. Returns ``. |
| `CavalryPercentage` | field | Instance entry point `float` field — direct storage with no validation or notification. |
| `IsValid` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `RangedCavalryPercentage` | field | Instance entry point `float` field — direct storage with no validation or notification. |
| `RangedPercentage` | field | Instance entry point `float` field — direct storage with no validation or notification. |

- Constructed as `public CustomBattleCompositionData(float rangedPercentage, float cavalryPercentage, float rangedCavalryPercentage)`.

## Usage Example

```csharp
var data = new CustomBattleCompositionData
{
    IsValid = false,
    RangedPercentage = 0,
    CavalryPercentage = 0,
    RangedCavalryPercentage = 0,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleCompositionData.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/custombattle/](../) — the other types in this bucket.
