---
title: "CraftingVM"
description: "Auto-generated class reference for CraftingVM."
---
# CraftingVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting/CraftingVM.cs`

## Overview

`CraftingVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ConfirmInputKey` | `public InputKeyItemVM ConfirmInputKey { get; set; }` |
| `ExitInputKey` | `public InputKeyItemVM ExitInputKey { get; set; }` |
| `PreviousTabInputKey` | `public InputKeyItemVM PreviousTabInputKey { get; set; }` |
| `NextTabInputKey` | `public InputKeyItemVM NextTabInputKey { get; set; }` |
| `CameraControlKeys` | `public MBBindingList<InputKeyItemVM> CameraControlKeys { get; set; }` |
| `CanSwitchTabs` | `public bool CanSwitchTabs { get; set; }` |
| `AreGamepadControlHintsEnabled` | `public bool AreGamepadControlHintsEnabled { get; set; }` |
| `PlayerCurrentMaterials` | `public MBBindingList<CraftingResourceItemVM> PlayerCurrentMaterials { get; set; }` |
| `AvailableCharactersForSmithing` | `public MBBindingList<CraftingAvailableHeroItemVM> AvailableCharactersForSmithing { get; set; }` |
| `CurrentCraftingHero` | `public CraftingAvailableHeroItemVM CurrentCraftingHero { get; set; }` |
| `CraftingHeroPopup` | `public CraftingHeroPopupVM CraftingHeroPopup { get; set; }` |
| `CurrentCategoryText` | `public string CurrentCategoryText { get; set; }` |
| `CraftingText` | `public string CraftingText { get; set; }` |
| `SmeltingText` | `public string SmeltingText { get; set; }` |
| `RefinementText` | `public string RefinementText { get; set; }` |
| `MainActionText` | `public string MainActionText { get; set; }` |
| `IsMainActionEnabled` | `public bool IsMainActionEnabled { get; set; }` |
| `ItemValue` | `public int ItemValue { get; set; }` |
| `CraftingHint` | `public HintViewModel CraftingHint { get; set; }` |
| `RefiningHint` | `public HintViewModel RefiningHint { get; set; }` |
| `SmeltingHint` | `public HintViewModel SmeltingHint { get; set; }` |
| `ResetCameraHint` | `public HintViewModel ResetCameraHint { get; set; }` |
| `MainActionHint` | `public BasicTooltipViewModel MainActionHint { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `CancelLbl` | `public string CancelLbl { get; set; }` |
| `Smelting` | `public SmeltingVM Smelting { get; set; }` |
| `WeaponDesign` | `public WeaponDesignVM WeaponDesign { get; set; }` |
| `Refinement` | `public RefinementVM Refinement { get; set; }` |
| `IsInCraftingMode` | `public bool IsInCraftingMode { get; set; }` |
| `IsInSmeltingMode` | `public bool IsInSmeltingMode { get; set; }` |
| `IsInRefinementMode` | `public bool IsInRefinementMode { get; set; }` |
| `IsSmeltingItemSelected` | `public bool IsSmeltingItemSelected { get; set; }` |
| `IsRefinementItemSelected` | `public bool IsRefinementItemSelected { get; set; }` |
| `SelectItemToSmeltText` | `public string SelectItemToSmeltText { get; set; }` |
| `SelectItemToRefineText` | `public string SelectItemToRefineText { get; set; }` |
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification { get; set; }` |

## Key Methods

### OnItemRefreshedDelegate
`public delegate void OnItemRefreshedDelegate(bool isItemVisible)`

**Purpose:** Invoked when the `item refreshed delegate` event is raised.

```csharp
// Obtain an instance of CraftingVM from the subsystem API first
CraftingVM craftingVM = ...;
craftingVM.OnItemRefreshedDelegate(false);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of CraftingVM from the subsystem API first
CraftingVM craftingVM = ...;
craftingVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of CraftingVM from the subsystem API first
CraftingVM craftingVM = ...;
craftingVM.OnFinalize();
```

### OnCraftingLogicRefreshed
`public void OnCraftingLogicRefreshed(Crafting newCraftingLogic)`

**Purpose:** Invoked when the `crafting logic refreshed` event is raised.

```csharp
// Obtain an instance of CraftingVM from the subsystem API first
CraftingVM craftingVM = ...;
craftingVM.OnCraftingLogicRefreshed(newCraftingLogic);
```

### UpdateCraftingHero
`public void UpdateCraftingHero(CraftingAvailableHeroItemVM newHero)`

**Purpose:** Recalculates and stores the latest representation of `crafting hero`.

```csharp
// Obtain an instance of CraftingVM from the subsystem API first
CraftingVM craftingVM = ...;
craftingVM.UpdateCraftingHero(newHero);
```

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Runs the operation or workflow associated with `cancel`.

```csharp
// Obtain an instance of CraftingVM from the subsystem API first
CraftingVM craftingVM = ...;
craftingVM.ExecuteCancel();
```

### ExecuteMainAction
`public void ExecuteMainAction()`

**Purpose:** Runs the operation or workflow associated with `main action`.

```csharp
// Obtain an instance of CraftingVM from the subsystem API first
CraftingVM craftingVM = ...;
craftingVM.ExecuteMainAction();
```

### ExecuteResetCamera
`public void ExecuteResetCamera()`

**Purpose:** Runs the operation or workflow associated with `reset camera`.

```csharp
// Obtain an instance of CraftingVM from the subsystem API first
CraftingVM craftingVM = ...;
craftingVM.ExecuteResetCamera();
```

### SetConfirmInputKey
`public void SetConfirmInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to `confirm input key` and updates the object's internal state.

```csharp
// Obtain an instance of CraftingVM from the subsystem API first
CraftingVM craftingVM = ...;
craftingVM.SetConfirmInputKey(hotKey);
```

### SetExitInputKey
`public void SetExitInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to `exit input key` and updates the object's internal state.

```csharp
// Obtain an instance of CraftingVM from the subsystem API first
CraftingVM craftingVM = ...;
craftingVM.SetExitInputKey(hotKey);
```

### SetPreviousTabInputKey
`public void SetPreviousTabInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to `previous tab input key` and updates the object's internal state.

```csharp
// Obtain an instance of CraftingVM from the subsystem API first
CraftingVM craftingVM = ...;
craftingVM.SetPreviousTabInputKey(hotKey);
```

### SetNextTabInputKey
`public void SetNextTabInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to `next tab input key` and updates the object's internal state.

```csharp
// Obtain an instance of CraftingVM from the subsystem API first
CraftingVM craftingVM = ...;
craftingVM.SetNextTabInputKey(hotKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(HotKey hotKey)`

**Purpose:** Adds `camera control input key` to the current collection or state.

```csharp
// Obtain an instance of CraftingVM from the subsystem API first
CraftingVM craftingVM = ...;
craftingVM.AddCameraControlInputKey(hotKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameKey gameKey)`

**Purpose:** Adds `camera control input key` to the current collection or state.

```csharp
// Obtain an instance of CraftingVM from the subsystem API first
CraftingVM craftingVM = ...;
craftingVM.AddCameraControlInputKey(gameKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameAxisKey gameAxisKey)`

**Purpose:** Adds `camera control input key` to the current collection or state.

```csharp
// Obtain an instance of CraftingVM from the subsystem API first
CraftingVM craftingVM = ...;
craftingVM.AddCameraControlInputKey(gameAxisKey);
```

### ExecuteSwitchToCrafting
`public void ExecuteSwitchToCrafting()`

**Purpose:** Runs the operation or workflow associated with `switch to crafting`.

```csharp
// Obtain an instance of CraftingVM from the subsystem API first
CraftingVM craftingVM = ...;
craftingVM.ExecuteSwitchToCrafting();
```

### ExecuteSwitchToSmelting
`public void ExecuteSwitchToSmelting()`

**Purpose:** Runs the operation or workflow associated with `switch to smelting`.

```csharp
// Obtain an instance of CraftingVM from the subsystem API first
CraftingVM craftingVM = ...;
craftingVM.ExecuteSwitchToSmelting();
```

### ExecuteSwitchToRefinement
`public void ExecuteSwitchToRefinement()`

**Purpose:** Runs the operation or workflow associated with `switch to refinement`.

```csharp
// Obtain an instance of CraftingVM from the subsystem API first
CraftingVM craftingVM = ...;
craftingVM.ExecuteSwitchToRefinement();
```

### SetCurrentDesignManually
`public void SetCurrentDesignManually(CraftingTemplate craftingTemplate, (CraftingPiece, int) pieces)`

**Purpose:** Assigns a new value to `current design manually` and updates the object's internal state.

```csharp
// Obtain an instance of CraftingVM from the subsystem API first
CraftingVM craftingVM = ...;
craftingVM.SetCurrentDesignManually(craftingTemplate, (CraftingPiece, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CraftingVM craftingVM = ...;
craftingVM.OnItemRefreshedDelegate(false);
```

## See Also

- [Area Index](../)