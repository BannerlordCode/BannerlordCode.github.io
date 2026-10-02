---
title: "ClanCardSelectionInfo"
description: "ClanCardSelectionInfo — struct in TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# ClanCardSelectionInfo

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public readonly struct ClanCardSelectionInfo`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionInfo.cs`

## Overview

`ClanCardSelectionInfo` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ClanCardSelectionInfo`.
- **Data and constants** (5): `Title`, `Items`, `IsMultiSelection`, `MinimumSelection`, `MaximumSelection`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ClanCardSelectionInfo` | ctor | Instance entry point. Takes 7 arguments: `TextObject title`, `IEnumerable<ClanCardSelectionItemInfo> items`, `Action<List<object>`, `Action> onClosedAction`, …. Returns ``. |
| `IsMultiSelection` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `Items` | field | Instance entry point `IEnumerable<ClanCardSelectionItemInfo>` field — direct storage with no validation or notification. |
| `MaximumSelection` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `MinimumSelection` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `Title` | field | Instance entry point `TextObject` field — direct storage with no validation or notification. |

- Constructed as `public ClanCardSelectionInfo(TextObject title, IEnumerable<ClanCardSelectionItemInfo> items, Action<List<object>, Action> onClosedAction, bool isMultiSelection, int minimumSelection = 1, int maximumSelection = 0)`.

## Usage Example

```csharp
var data = new ClanCardSelectionInfo
{
    Title = default,
    Items = default,
    IsMultiSelection = false,
    MinimumSelection = 0,
    MaximumSelection = 0,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionInfo.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ClanCardSelectionItemInfo](../ClanCardSelectionItemInfo/) — `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`.
- [Items](../../campaign/Items/) — `TaleWorlds.CampaignSystem.Extensions`.

Section: [api/viewmodel/](../) — the other types in this bucket.
