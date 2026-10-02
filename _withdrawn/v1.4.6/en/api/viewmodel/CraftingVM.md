---
title: "CraftingVM"
description: "CraftingVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting, inheriting ViewModel; 58 exposed members (20 methods, 36 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CraftingVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CraftingVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

CraftingVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CraftingVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 58 public/protected members: 20 methods, 36 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting`, inheritance chain CraftingVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 36/58, methods 20/58), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/CraftingVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CraftingVM` | `public CraftingVM(Crafting crafting, Action onClose, Action resetCamera, Action onWeaponCrafted, Func<WeaponComponentData, ItemObject.ItemUsageSetFlags>getItemUsageSetFlags)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `OnCraftingLogicRefreshed` | `public void OnCraftingLogicRefreshed(Crafting newCraftingLogic)` | method |
| `UpdateCraftingHero` | `public void UpdateCraftingHero(CraftingAvailableHeroItemVM newHero)` | method |
| `bool>ExecuteConfirm` | `public ValueTuple<bool, bool>ExecuteConfirm()` | method |
| `ExecuteCancel` | `public void ExecuteCancel()` | method |
| `ExecuteMainAction` | `public void ExecuteMainAction()` | method |
| `ExecuteResetCamera` | `public void ExecuteResetCamera()` | method |
| `SetConfirmInputKey` | `public void SetConfirmInputKey(HotKey hotKey)` | method |
| `SetExitInputKey` | `public void SetExitInputKey(HotKey hotKey)` | method |
| `SetPreviousTabInputKey` | `public void SetPreviousTabInputKey(HotKey hotKey)` | method |
| `SetNextTabInputKey` | `public void SetNextTabInputKey(HotKey hotKey)` | method |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(HotKey hotKey)` | method |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(GameKey gameKey)` | method |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(GameAxisKey gameAxisKey)` | method |
| `ConfirmInputKey` | `public InputKeyItemVM ConfirmInputKey` | property |
| `ExitInputKey` | `public InputKeyItemVM ExitInputKey` | property |
| `PreviousTabInputKey` | `public InputKeyItemVM PreviousTabInputKey` | property |
| `NextTabInputKey` | `public InputKeyItemVM NextTabInputKey` | property |
| `MBBindingList` | `public MBBindingList<InputKeyItemVM>CameraControlKeys` | property |
| `CanSwitchTabs` | `public bool CanSwitchTabs` | property |
| `AreGamepadControlHintsEnabled` | `public bool AreGamepadControlHintsEnabled` | property |
| `MBBindingList` | `public MBBindingList<CraftingResourceItemVM>PlayerCurrentMaterials` | property |
| `MBBindingList` | `public MBBindingList<CraftingAvailableHeroItemVM>AvailableCharactersForSmithing` | property |
| `CurrentCraftingHero` | `public CraftingAvailableHeroItemVM CurrentCraftingHero` | property |
| `CraftingHeroPopup` | `public CraftingHeroPopupVM CraftingHeroPopup` | property |
| `CurrentCategoryText` | `public string CurrentCategoryText` | property |
| `CraftingText` | `public string CraftingText` | property |
| `SmeltingText` | `public string SmeltingText` | property |
| `RefinementText` | `public string RefinementText` | property |
| `MainActionText` | `public string MainActionText` | property |
| `IsMainActionEnabled` | `public bool IsMainActionEnabled` | property |
| `ItemValue` | `public int ItemValue` | property |
| `CraftingHint` | `public HintViewModel CraftingHint` | property |
| `RefiningHint` | `public HintViewModel RefiningHint` | property |
| `SmeltingHint` | `public HintViewModel SmeltingHint` | property |
| `ResetCameraHint` | `public HintViewModel ResetCameraHint` | property |
| `MainActionHint` | `public BasicTooltipViewModel MainActionHint` | property |
| `DoneLbl` | `public string DoneLbl` | property |
| `CancelLbl` | `public string CancelLbl` | property |
| `ExecuteSwitchToCrafting` | `public void ExecuteSwitchToCrafting()` | method |
| `ExecuteSwitchToSmelting` | `public void ExecuteSwitchToSmelting()` | method |
| `ExecuteSwitchToRefinement` | `public void ExecuteSwitchToRefinement()` | method |
| `SetCurrentDesignManually` | `public void SetCurrentDesignManually(CraftingTemplate craftingTemplate, ValueTuple<CraftingPiece, int>[]pieces)` | method |
| `Smelting` | `public SmeltingVM Smelting` | property |
| `WeaponDesign` | `public WeaponDesignVM WeaponDesign` | property |
| `Refinement` | `public RefinementVM Refinement` | property |
| `IsInCraftingMode` | `public bool IsInCraftingMode` | property |
| `IsInSmeltingMode` | `public bool IsInSmeltingMode` | property |
| `IsInRefinementMode` | `public bool IsInRefinementMode` | property |
| `IsSmeltingItemSelected` | `public bool IsSmeltingItemSelected` | property |
| `IsRefinementItemSelected` | `public bool IsRefinementItemSelected` | property |
| `SelectItemToSmeltText` | `public string SelectItemToSmeltText` | property |
| `SelectItemToRefineText` | `public string SelectItemToRefineText` | property |
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification` | property |
| `OnItemRefreshedDelegate` | `public delegate void OnItemRefreshedDelegate(bool isItemVisible);` | method |
| `OnItemRefreshedDelegate` | `public delegate void OnItemRefreshedDelegate(bool isItemVisible)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CraftingAvailableHeroItemVM](../CraftingAvailableHeroItemVM/)
- [same namespace CraftingHeroPopupVM](../CraftingHeroPopupVM/)
- [same namespace CraftingListPropertyItem](../CraftingListPropertyItem/)
- [same namespace CraftingPerkVM](../CraftingPerkVM/)
