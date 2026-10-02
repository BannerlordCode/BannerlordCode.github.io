---
title: "EncyclopediaListItem"
description: "EncyclopediaListItem — struct in TaleWorlds.CampaignSystem.Encyclopedia. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# EncyclopediaListItem

**Namespace:** `TaleWorlds.CampaignSystem.Encyclopedia`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public struct EncyclopediaListItem`  
**Source:** `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaListItem.cs`

## Overview

`EncyclopediaListItem` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `EncyclopediaListItem`.
- **Data and constants** (7): `Object`, `Name`, `Description`, `Id`, `TypeName`, `PlayerCanSeeValues`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `EncyclopediaListItem` | ctor | Instance entry point. Takes 7 arguments: `object obj`, `string name`, `string description`, `string id`, …. Returns ``. |
| `Description` | field | Instance entry point `string` field — direct storage with no validation or notification. |
| `Id` | field | Instance entry point `string` field — direct storage with no validation or notification. |
| `Name` | field | Instance entry point `string` field — direct storage with no validation or notification. |
| `Object` | field | Instance entry point `object` field — direct storage with no validation or notification. |
| `OnShowTooltip` | field | Instance entry point `Action` field — direct storage with no validation or notification. |
| `PlayerCanSeeValues` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `TypeName` | field | Instance entry point `string` field — direct storage with no validation or notification. |

- Constructed as `public EncyclopediaListItem(object obj, string name, string description, string id, string typeName, bool playerCanSeeValues, Action onShowTooltip = null)`.

## Usage Example

```csharp
var data = new EncyclopediaListItem
{
    Object = default,
    Name = "",
    Description = "",
    Id = "",
    TypeName = "",
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.CampaignSystem/Encyclopedia/EncyclopediaListItem.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/campaign/](../) — the other types in this bucket.
