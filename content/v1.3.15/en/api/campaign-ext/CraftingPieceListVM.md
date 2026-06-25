---
title: "CraftingPieceListVM"
description: "Auto-generated class reference for CraftingPieceListVM."
---
# CraftingPieceListVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingPieceListVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingPieceListVM.cs`

## Overview

`CraftingPieceListVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasNewlyUnlockedPieces` | `public bool HasNewlyUnlockedPieces { get; set; }` |
| `Pieces` | `public MBBindingList<CraftingPieceVM> Pieces { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `SelectedPiece` | `public CraftingPieceVM SelectedPiece { get; set; }` |

## Key Methods

### ExecuteSelect
`public void ExecuteSelect()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with select.

```csharp
// Obtain an instance of CraftingPieceListVM from the subsystem API first
CraftingPieceListVM craftingPieceListVM = ...;
craftingPieceListVM.ExecuteSelect();
```

### Refresh
`public void Refresh()`

**Purpose:** **Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of CraftingPieceListVM from the subsystem API first
CraftingPieceListVM craftingPieceListVM = ...;
craftingPieceListVM.Refresh();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CraftingPieceListVM craftingPieceListVM = ...;
craftingPieceListVM.ExecuteSelect();
```

## See Also

- [Area Index](../)