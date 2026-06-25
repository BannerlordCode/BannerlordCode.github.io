---
title: "CraftingVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting/CraftingVM.cs`

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

### OnItemRefreshedDelegate
`public delegate void OnItemRefreshedDelegate(bool isItemVisible)`

**用途 / Purpose:** 当 `item refreshed delegate` 事件触发时调用此方法。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### OnCraftingLogicRefreshed
`public void OnCraftingLogicRefreshed(Crafting newCraftingLogic)`

**用途 / Purpose:** 当 `crafting logic refreshed` 事件触发时调用此方法。

### UpdateCraftingHero
`public void UpdateCraftingHero(CraftingAvailableHeroItemVM newHero)`

**用途 / Purpose:** 更新 `crafting hero` 的状态或数据。

### ExecuteCancel
`public void ExecuteCancel()`

**用途 / Purpose:** 执行 `cancel` 操作或流程。

### ExecuteMainAction
`public void ExecuteMainAction()`

**用途 / Purpose:** 执行 `main action` 操作或流程。

### ExecuteResetCamera
`public void ExecuteResetCamera()`

**用途 / Purpose:** 执行 `reset camera` 操作或流程。

### SetConfirmInputKey
`public void SetConfirmInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `confirm input key` 的值或状态。

### SetExitInputKey
`public void SetExitInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `exit input key` 的值或状态。

### SetPreviousTabInputKey
`public void SetPreviousTabInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `previous tab input key` 的值或状态。

### SetNextTabInputKey
`public void SetNextTabInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `next tab input key` 的值或状态。

### AddCameraControlInputKey
`public void AddCameraControlInputKey(HotKey hotKey)`

**用途 / Purpose:** 向当前集合/状态中添加 `camera control input key`。

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameKey gameKey)`

**用途 / Purpose:** 向当前集合/状态中添加 `camera control input key`。

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameAxisKey gameAxisKey)`

**用途 / Purpose:** 向当前集合/状态中添加 `camera control input key`。

### ExecuteSwitchToCrafting
`public void ExecuteSwitchToCrafting()`

**用途 / Purpose:** 执行 `switch to crafting` 操作或流程。

### ExecuteSwitchToSmelting
`public void ExecuteSwitchToSmelting()`

**用途 / Purpose:** 执行 `switch to smelting` 操作或流程。

### ExecuteSwitchToRefinement
`public void ExecuteSwitchToRefinement()`

**用途 / Purpose:** 执行 `switch to refinement` 操作或流程。

### SetCurrentDesignManually
`public void SetCurrentDesignManually(CraftingTemplate craftingTemplate, (CraftingPiece, int) pieces)`

**用途 / Purpose:** 设置 `current design manually` 的值或状态。

## 使用示例

```csharp
var value = new CraftingVM();
value.OnItemRefreshedDelegate(false);
```

## 参见

- [完整类目录](../catalog)