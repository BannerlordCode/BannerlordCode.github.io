---
title: "CraftingVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting/CraftingVM.cs`

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

**Purpose:** Called when the `item refreshed delegate` event is raised.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### OnCraftingLogicRefreshed
`public void OnCraftingLogicRefreshed(Crafting newCraftingLogic)`

**Purpose:** Called when the `crafting logic refreshed` event is raised.

### UpdateCraftingHero
`public void UpdateCraftingHero(CraftingAvailableHeroItemVM newHero)`

**Purpose:** Updates the state or data of `crafting hero`.

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Executes the `cancel` operation or workflow.

### ExecuteMainAction
`public void ExecuteMainAction()`

**Purpose:** Executes the `main action` operation or workflow.

### ExecuteResetCamera
`public void ExecuteResetCamera()`

**Purpose:** Executes the `reset camera` operation or workflow.

### SetConfirmInputKey
`public void SetConfirmInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `confirm input key`.

### SetExitInputKey
`public void SetExitInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `exit input key`.

### SetPreviousTabInputKey
`public void SetPreviousTabInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `previous tab input key`.

### SetNextTabInputKey
`public void SetNextTabInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `next tab input key`.

### AddCameraControlInputKey
`public void AddCameraControlInputKey(HotKey hotKey)`

**Purpose:** Adds `camera control input key` to the current collection or state.

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameKey gameKey)`

**Purpose:** Adds `camera control input key` to the current collection or state.

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameAxisKey gameAxisKey)`

**Purpose:** Adds `camera control input key` to the current collection or state.

### ExecuteSwitchToCrafting
`public void ExecuteSwitchToCrafting()`

**Purpose:** Executes the `switch to crafting` operation or workflow.

### ExecuteSwitchToSmelting
`public void ExecuteSwitchToSmelting()`

**Purpose:** Executes the `switch to smelting` operation or workflow.

### ExecuteSwitchToRefinement
`public void ExecuteSwitchToRefinement()`

**Purpose:** Executes the `switch to refinement` operation or workflow.

### SetCurrentDesignManually
`public void SetCurrentDesignManually(CraftingTemplate craftingTemplate, (CraftingPiece, int) pieces)`

**Purpose:** Sets the value or state of `current design manually`.

## Usage Example

```csharp
var value = new CraftingVM();
value.OnItemRefreshedDelegate(false);
```

## See Also

- [Complete Class Catalog](../catalog)