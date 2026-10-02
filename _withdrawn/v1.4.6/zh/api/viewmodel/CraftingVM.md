---
title: "CraftingVM"
description: "CraftingVM：TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting 的 public 类，继承 ViewModel；公开成员 58 个（方法 20、属性 36、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CraftingVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CraftingVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

CraftingVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CraftingVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 58 个：20 方法、36 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CraftingVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting`，继承链 CraftingVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 36/58，方法 20/58），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CraftingVM` | `public CraftingVM(Crafting crafting, Action onClose, Action resetCamera, Action onWeaponCrafted, Func<WeaponComponentData, ItemObject.ItemUsageSetFlags>getItemUsageSetFlags)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `OnCraftingLogicRefreshed` | `public void OnCraftingLogicRefreshed(Crafting newCraftingLogic)` | 方法 |
| `UpdateCraftingHero` | `public void UpdateCraftingHero(CraftingAvailableHeroItemVM newHero)` | 方法 |
| `bool>ExecuteConfirm` | `public ValueTuple<bool, bool>ExecuteConfirm()` | 方法 |
| `ExecuteCancel` | `public void ExecuteCancel()` | 方法 |
| `ExecuteMainAction` | `public void ExecuteMainAction()` | 方法 |
| `ExecuteResetCamera` | `public void ExecuteResetCamera()` | 方法 |
| `SetConfirmInputKey` | `public void SetConfirmInputKey(HotKey hotKey)` | 方法 |
| `SetExitInputKey` | `public void SetExitInputKey(HotKey hotKey)` | 方法 |
| `SetPreviousTabInputKey` | `public void SetPreviousTabInputKey(HotKey hotKey)` | 方法 |
| `SetNextTabInputKey` | `public void SetNextTabInputKey(HotKey hotKey)` | 方法 |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(HotKey hotKey)` | 方法 |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(GameKey gameKey)` | 方法 |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(GameAxisKey gameAxisKey)` | 方法 |
| `ConfirmInputKey` | `public InputKeyItemVM ConfirmInputKey` | 属性 |
| `ExitInputKey` | `public InputKeyItemVM ExitInputKey` | 属性 |
| `PreviousTabInputKey` | `public InputKeyItemVM PreviousTabInputKey` | 属性 |
| `NextTabInputKey` | `public InputKeyItemVM NextTabInputKey` | 属性 |
| `MBBindingList` | `public MBBindingList<InputKeyItemVM>CameraControlKeys` | 属性 |
| `CanSwitchTabs` | `public bool CanSwitchTabs` | 属性 |
| `AreGamepadControlHintsEnabled` | `public bool AreGamepadControlHintsEnabled` | 属性 |
| `MBBindingList` | `public MBBindingList<CraftingResourceItemVM>PlayerCurrentMaterials` | 属性 |
| `MBBindingList` | `public MBBindingList<CraftingAvailableHeroItemVM>AvailableCharactersForSmithing` | 属性 |
| `CurrentCraftingHero` | `public CraftingAvailableHeroItemVM CurrentCraftingHero` | 属性 |
| `CraftingHeroPopup` | `public CraftingHeroPopupVM CraftingHeroPopup` | 属性 |
| `CurrentCategoryText` | `public string CurrentCategoryText` | 属性 |
| `CraftingText` | `public string CraftingText` | 属性 |
| `SmeltingText` | `public string SmeltingText` | 属性 |
| `RefinementText` | `public string RefinementText` | 属性 |
| `MainActionText` | `public string MainActionText` | 属性 |
| `IsMainActionEnabled` | `public bool IsMainActionEnabled` | 属性 |
| `ItemValue` | `public int ItemValue` | 属性 |
| `CraftingHint` | `public HintViewModel CraftingHint` | 属性 |
| `RefiningHint` | `public HintViewModel RefiningHint` | 属性 |
| `SmeltingHint` | `public HintViewModel SmeltingHint` | 属性 |
| `ResetCameraHint` | `public HintViewModel ResetCameraHint` | 属性 |
| `MainActionHint` | `public BasicTooltipViewModel MainActionHint` | 属性 |
| `DoneLbl` | `public string DoneLbl` | 属性 |
| `CancelLbl` | `public string CancelLbl` | 属性 |
| `ExecuteSwitchToCrafting` | `public void ExecuteSwitchToCrafting()` | 方法 |
| `ExecuteSwitchToSmelting` | `public void ExecuteSwitchToSmelting()` | 方法 |
| `ExecuteSwitchToRefinement` | `public void ExecuteSwitchToRefinement()` | 方法 |
| `SetCurrentDesignManually` | `public void SetCurrentDesignManually(CraftingTemplate craftingTemplate, ValueTuple<CraftingPiece, int>[]pieces)` | 方法 |
| `Smelting` | `public SmeltingVM Smelting` | 属性 |
| `WeaponDesign` | `public WeaponDesignVM WeaponDesign` | 属性 |
| `Refinement` | `public RefinementVM Refinement` | 属性 |
| `IsInCraftingMode` | `public bool IsInCraftingMode` | 属性 |
| `IsInSmeltingMode` | `public bool IsInSmeltingMode` | 属性 |
| `IsInRefinementMode` | `public bool IsInRefinementMode` | 属性 |
| `IsSmeltingItemSelected` | `public bool IsSmeltingItemSelected` | 属性 |
| `IsRefinementItemSelected` | `public bool IsRefinementItemSelected` | 属性 |
| `SelectItemToSmeltText` | `public string SelectItemToSmeltText` | 属性 |
| `SelectItemToRefineText` | `public string SelectItemToRefineText` | 属性 |
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification` | 属性 |
| `OnItemRefreshedDelegate` | `public delegate void OnItemRefreshedDelegate(bool isItemVisible);` | 方法 |
| `OnItemRefreshedDelegate` | `public delegate void OnItemRefreshedDelegate(bool isItemVisible)` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 CraftingAvailableHeroItemVM](../CraftingAvailableHeroItemVM/)
- [同命名空间 CraftingHeroPopupVM](../CraftingHeroPopupVM/)
- [同命名空间 CraftingListPropertyItem](../CraftingListPropertyItem/)
- [同命名空间 CraftingPerkVM](../CraftingPerkVM/)
