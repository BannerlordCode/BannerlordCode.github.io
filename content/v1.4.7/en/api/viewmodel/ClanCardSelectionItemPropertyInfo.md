---
title: "ClanCardSelectionItemPropertyInfo"
description: "ClanCardSelectionItemPropertyInfo — struct in TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement. 6 public members (2 static)."
---

<!-- v147-skeleton -->
# ClanCardSelectionItemPropertyInfo

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public readonly struct ClanCardSelectionItemPropertyInfo`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionItemPropertyInfo.cs`

## Overview

`ClanCardSelectionItemPropertyInfo` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `ClanCardSelectionItemPropertyInfo`, `ClanCardSelectionItemPropertyInfo`.
- **Static entry points** (2): `CreateLabeledValueText`, `CreateActionGoldChangeText`.
- **Data and constants** (2): `Title`, `Value`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateActionGoldChangeText` | method (static) | Static entry point. Takes 1 argument: `int goldChange`. Returns `TextObject`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateLabeledValueText` | method (static) | Static entry point. Takes 2 arguments: `TextObject label`, `TextObject value`. Returns `TextObject`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `ClanCardSelectionItemPropertyInfo` | ctor | Instance entry point. Takes 2 arguments: `TextObject title`, `TextObject value`. Returns ``. |
| `ClanCardSelectionItemPropertyInfo` | ctor | Instance entry point. Takes 1 argument: `TextObject value`. Returns ``. |
| `Title` | field | Instance entry point `TextObject` field — direct storage with no validation or notification. |
| `Value` | field | Instance entry point `TextObject` field — direct storage with no validation or notification. |

- Constructed as `public ClanCardSelectionItemPropertyInfo(TextObject title, TextObject value)`.
- Constructed as `public ClanCardSelectionItemPropertyInfo(TextObject value)`.

## Usage Example

```csharp
var data = new ClanCardSelectionItemPropertyInfo
{
    Title = default,
    Value = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionItemPropertyInfo.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/viewmodel/](../) — the other types in this bucket.
