<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `CraftingVM` is a class in the `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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


## Key Methods

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### OnCraftingLogicRefreshed

```csharp
public void OnCraftingLogicRefreshed(Crafting newCraftingLogic)
```

### UpdateCraftingHero

```csharp
public void UpdateCraftingHero(CraftingAvailableHeroItemVM newHero)
```

### ExecuteConfirm

```csharp
public ValueTuple<bool, bool> ExecuteConfirm()
```

### ExecuteCancel

```csharp
public void ExecuteCancel()
```

### ExecuteMainAction

```csharp
public void ExecuteMainAction()
```

### ExecuteResetCamera

```csharp
public void ExecuteResetCamera()
```

### SetConfirmInputKey

```csharp
public void SetConfirmInputKey(HotKey hotKey)
```

### SetExitInputKey

```csharp
public void SetExitInputKey(HotKey hotKey)
```

### SetPreviousTabInputKey

```csharp
public void SetPreviousTabInputKey(HotKey hotKey)
```

### SetNextTabInputKey

```csharp
public void SetNextTabInputKey(HotKey hotKey)
```

### AddCameraControlInputKey

```csharp
public void AddCameraControlInputKey(HotKey hotKey)
```

### AddCameraControlInputKey

```csharp
public void AddCameraControlInputKey(GameKey gameKey)
```

### AddCameraControlInputKey

```csharp
public void AddCameraControlInputKey(GameAxisKey gameAxisKey)
```

### ExecuteSwitchToCrafting

```csharp
public void ExecuteSwitchToCrafting()
```

### ExecuteSwitchToSmelting

```csharp
public void ExecuteSwitchToSmelting()
```

### ExecuteSwitchToRefinement

```csharp
public void ExecuteSwitchToRefinement()
```

### SetCurrentDesignManually

```csharp
public void SetCurrentDesignManually(CraftingTemplate craftingTemplate, ValueTuple<CraftingPiece, int> pieces)
```

### OnItemRefreshedDelegate

```csharp
public delegate void OnItemRefreshedDelegate(bool isItemVisible)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)