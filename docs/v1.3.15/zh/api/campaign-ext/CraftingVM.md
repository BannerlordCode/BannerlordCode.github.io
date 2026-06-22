<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`CraftingVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)