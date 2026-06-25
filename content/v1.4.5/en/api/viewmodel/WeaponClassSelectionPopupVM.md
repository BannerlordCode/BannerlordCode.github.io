---
title: "WeaponClassSelectionPopupVM"
description: "Auto-generated class reference for WeaponClassSelectionPopupVM."
---
# WeaponClassSelectionPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WeaponClassSelectionPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign/WeaponClassSelectionPopupVM.cs`

## Overview

`WeaponClassSelectionPopupVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PopupHeader` | `public string PopupHeader { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `WeaponClasses` | `public MBBindingList<WeaponClassVM> WeaponClasses { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of WeaponClassSelectionPopupVM from the subsystem API first
WeaponClassSelectionPopupVM weaponClassSelectionPopupVM = ...;
weaponClassSelectionPopupVM.RefreshValues();
```

### UpdateNewlyUnlockedPiecesCount
`public void UpdateNewlyUnlockedPiecesCount(List<CraftingPiece> newlyUnlockedPieces)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of newly unlocked pieces count.

```csharp
// Obtain an instance of WeaponClassSelectionPopupVM from the subsystem API first
WeaponClassSelectionPopupVM weaponClassSelectionPopupVM = ...;
weaponClassSelectionPopupVM.UpdateNewlyUnlockedPiecesCount(newlyUnlockedPieces);
```

### ExecuteSelectWeaponClass
`public void ExecuteSelectWeaponClass(int index)`

**Purpose:** **Purpose:** Runs the operation or workflow associated with select weapon class.

```csharp
// Obtain an instance of WeaponClassSelectionPopupVM from the subsystem API first
WeaponClassSelectionPopupVM weaponClassSelectionPopupVM = ...;
weaponClassSelectionPopupVM.ExecuteSelectWeaponClass(0);
```

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with close popup.

```csharp
// Obtain an instance of WeaponClassSelectionPopupVM from the subsystem API first
WeaponClassSelectionPopupVM weaponClassSelectionPopupVM = ...;
weaponClassSelectionPopupVM.ExecuteClosePopup();
```

### ExecuteOpenPopup
`public void ExecuteOpenPopup()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with open popup.

```csharp
// Obtain an instance of WeaponClassSelectionPopupVM from the subsystem API first
WeaponClassSelectionPopupVM weaponClassSelectionPopupVM = ...;
weaponClassSelectionPopupVM.ExecuteOpenPopup();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WeaponClassSelectionPopupVM weaponClassSelectionPopupVM = ...;
weaponClassSelectionPopupVM.RefreshValues();
```

## See Also

- [Area Index](../)