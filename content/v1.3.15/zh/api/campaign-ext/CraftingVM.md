---
title: "CraftingVM"
description: "CraftingVM 的自动生成类参考。"
---
# CraftingVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingVM.cs`

## 概述

`CraftingVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 CraftingVM 实例
CraftingVM craftingVM = ...;
craftingVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CraftingVM 实例
CraftingVM craftingVM = ...;
craftingVM.OnFinalize();
```

### OnCraftingLogicRefreshed
`public void OnCraftingLogicRefreshed(Crafting newCraftingLogic)`

**用途 / Purpose:** **用途 / Purpose:** 在 crafting logic refreshed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CraftingVM 实例
CraftingVM craftingVM = ...;
craftingVM.OnCraftingLogicRefreshed(newCraftingLogic);
```

### UpdateCraftingHero
`public void UpdateCraftingHero(CraftingAvailableHeroItemVM newHero)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 crafting hero 的最新表示。

```csharp
// 先通过子系统 API 拿到 CraftingVM 实例
CraftingVM craftingVM = ...;
craftingVM.UpdateCraftingHero(newHero);
```

### ExecuteConfirm
`public ValueTuple<bool, bool> ExecuteConfirm()`

**用途 / Purpose:** **用途 / Purpose:** 执行 confirm 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CraftingVM 实例
CraftingVM craftingVM = ...;
var result = craftingVM.ExecuteConfirm();
```

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** **用途 / Purpose:** 执行 cancel 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CraftingVM 实例
CraftingVM craftingVM = ...;
craftingVM.ExecuteCancel();
```

### ExecuteMainAction
`public void ExecuteMainAction()`

**用途 / Purpose:** **用途 / Purpose:** 执行 main action 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CraftingVM 实例
CraftingVM craftingVM = ...;
craftingVM.ExecuteMainAction();
```

### ExecuteResetCamera
`public void ExecuteResetCamera()`

**用途 / Purpose:** **用途 / Purpose:** 执行 reset camera 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CraftingVM 实例
CraftingVM craftingVM = ...;
craftingVM.ExecuteResetCamera();
```

### SetConfirmInputKey
`public void SetConfirmInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 confirm input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CraftingVM 实例
CraftingVM craftingVM = ...;
craftingVM.SetConfirmInputKey(hotKey);
```

### SetExitInputKey
`public void SetExitInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 exit input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CraftingVM 实例
CraftingVM craftingVM = ...;
craftingVM.SetExitInputKey(hotKey);
```

### SetPreviousTabInputKey
`public void SetPreviousTabInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 previous tab input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CraftingVM 实例
CraftingVM craftingVM = ...;
craftingVM.SetPreviousTabInputKey(hotKey);
```

### SetNextTabInputKey
`public void SetNextTabInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 next tab input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CraftingVM 实例
CraftingVM craftingVM = ...;
craftingVM.SetNextTabInputKey(hotKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 将 camera control input key 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CraftingVM 实例
CraftingVM craftingVM = ...;
craftingVM.AddCameraControlInputKey(hotKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameKey gameKey)`

**用途 / Purpose:** **用途 / Purpose:** 将 camera control input key 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CraftingVM 实例
CraftingVM craftingVM = ...;
craftingVM.AddCameraControlInputKey(gameKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameAxisKey gameAxisKey)`

**用途 / Purpose:** **用途 / Purpose:** 将 camera control input key 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CraftingVM 实例
CraftingVM craftingVM = ...;
craftingVM.AddCameraControlInputKey(gameAxisKey);
```

### ExecuteSwitchToCrafting
`public void ExecuteSwitchToCrafting()`

**用途 / Purpose:** **用途 / Purpose:** 执行 switch to crafting 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CraftingVM 实例
CraftingVM craftingVM = ...;
craftingVM.ExecuteSwitchToCrafting();
```

### ExecuteSwitchToSmelting
`public void ExecuteSwitchToSmelting()`

**用途 / Purpose:** **用途 / Purpose:** 执行 switch to smelting 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CraftingVM 实例
CraftingVM craftingVM = ...;
craftingVM.ExecuteSwitchToSmelting();
```

### ExecuteSwitchToRefinement
`public void ExecuteSwitchToRefinement()`

**用途 / Purpose:** **用途 / Purpose:** 执行 switch to refinement 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 CraftingVM 实例
CraftingVM craftingVM = ...;
craftingVM.ExecuteSwitchToRefinement();
```

### SetCurrentDesignManually
`public void SetCurrentDesignManually(CraftingTemplate craftingTemplate, ValueTuple<CraftingPiece, int> pieces)`

**用途 / Purpose:** **用途 / Purpose:** 为 current design manually 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CraftingVM 实例
CraftingVM craftingVM = ...;
craftingVM.SetCurrentDesignManually(craftingTemplate, valueTuple<CraftingPiece, 0);
```

### OnItemRefreshedDelegate
`public delegate void OnItemRefreshedDelegate(bool isItemVisible)`

**用途 / Purpose:** **用途 / Purpose:** 在 item refreshed delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CraftingVM 实例
CraftingVM craftingVM = ...;
craftingVM.OnItemRefreshedDelegate(false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CraftingVM craftingVM = ...;
craftingVM.RefreshValues();
```

## 参见

- [本区域目录](../)