---
title: "CraftingPieceVM"
description: "Auto-generated class reference for CraftingPieceVM."
---
# CraftingPieceVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingPieceVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign/CraftingPieceVM.cs`

## Overview

`CraftingPieceVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsFilteredOut` | `public bool IsFilteredOut { get; set; }` |
| `ItemAttributeIcons` | `public MBBindingList<CraftingItemFlagVM> ItemAttributeIcons { get; set; }` |
| `PlayerHasPiece` | `public bool PlayerHasPiece { get; set; }` |
| `IsEmpty` | `public bool IsEmpty { get; set; }` |
| `TierText` | `public string TierText { get; set; }` |
| `Tier` | `public int Tier { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `ImageIdentifier` | `public CraftingPieceImageIdentifierVM ImageIdentifier { get; set; }` |
| `PieceType` | `public int PieceType { get; set; }` |
| `IsNewlyUnlocked` | `public bool IsNewlyUnlocked { get; set; }` |

## Key Methods

### RefreshFlagIcons
`public void RefreshFlagIcons()`

**Purpose:** Keeps the display or cache of `flag icons` in sync with the underlying state.

```csharp
// Obtain an instance of CraftingPieceVM from the subsystem API first
CraftingPieceVM craftingPieceVM = ...;
craftingPieceVM.RefreshFlagIcons();
```

### ExecuteOpenTooltip
`public void ExecuteOpenTooltip()`

**Purpose:** Runs the operation or workflow associated with `open tooltip`.

```csharp
// Obtain an instance of CraftingPieceVM from the subsystem API first
CraftingPieceVM craftingPieceVM = ...;
craftingPieceVM.ExecuteOpenTooltip();
```

### ExecuteCloseTooltip
`public void ExecuteCloseTooltip()`

**Purpose:** Runs the operation or workflow associated with `close tooltip`.

```csharp
// Obtain an instance of CraftingPieceVM from the subsystem API first
CraftingPieceVM craftingPieceVM = ...;
craftingPieceVM.ExecuteCloseTooltip();
```

### ExecuteSelect
`public void ExecuteSelect()`

**Purpose:** Runs the operation or workflow associated with `select`.

```csharp
// Obtain an instance of CraftingPieceVM from the subsystem API first
CraftingPieceVM craftingPieceVM = ...;
craftingPieceVM.ExecuteSelect();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CraftingPieceVM craftingPieceVM = ...;
craftingPieceVM.RefreshFlagIcons();
```

## See Also

- [Area Index](../)