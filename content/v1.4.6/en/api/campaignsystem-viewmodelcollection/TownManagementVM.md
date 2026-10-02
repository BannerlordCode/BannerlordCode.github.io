---
title: "TownManagementVM"
description: "TownManagementVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 34 exposed members (4 methods, 29 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementVM.cs."
---
# TownManagementVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class TownManagementVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementVM.cs`

## Overview

TownManagementVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TownManagementVM → ViewModel. It exposes 34 public/protected members: 4 methods, 29 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TownManagementVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement) the module directory; inheritance chain TownManagementVM → ViewModel. The surface is property-led (properties 29/34, methods 4/34), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TownManagementVM` | `public TownManagementVM()` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteDone` | `public void ExecuteDone()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | method |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `CompletionText` | `public string CompletionText` | property |
| `GovernorText` | `public string GovernorText` | property |
| `ManageText` | `public string ManageText` | property |
| `DoneText` | `public string DoneText` | property |
| `WallsText` | `public string WallsText` | property |
| `CurrentProjectText` | `public string CurrentProjectText` | property |
| `TitleText` | `public string TitleText` | property |
| `HasGovernor` | `public bool HasGovernor` | property |
| `IsGovernorSelectionEnabled` | `public bool IsGovernorSelectionEnabled` | property |
| `IsTown` | `public bool IsTown` | property |
| `Show` | `public bool Show` | property |
| `IsThereCurrentProject` | `public bool IsThereCurrentProject` | property |
| `IsSelectingGovernor` | `public bool IsSelectingGovernor` | property |
| `MBBindingList` | `public MBBindingList<TownManagementDescriptionItemVM>MiddleFirstTextList` | property |
| `MBBindingList` | `public MBBindingList<TownManagementDescriptionItemVM>MiddleSecondTextList` | property |
| `MBBindingList` | `public MBBindingList<TownManagementShopItemVM>Shops` | property |
| `MBBindingList` | `public MBBindingList<TownManagementVillageItemVM>Villages` | property |
| `GovernorSelectionDisabledHint` | `public HintViewModel GovernorSelectionDisabledHint` | property |
| `VillagesText` | `public string VillagesText` | property |
| `ShopsInSettlementText` | `public string ShopsInSettlementText` | property |
| `IsCurrentProjectDaily` | `public bool IsCurrentProjectDaily` | property |
| `CurrentProjectProgress` | `public int CurrentProjectProgress` | property |
| `ProjectSelection` | `public SettlementProjectSelectionVM ProjectSelection` | property |
| `GovernorSelection` | `public SettlementGovernorSelectionVM GovernorSelection` | property |
| `ReserveControl` | `public TownManagementReserveControlVM ReserveControl` | property |
| `CurrentGovernorTooltip` | `public BasicTooltipViewModel CurrentGovernorTooltip` | property |
| `CurrentGovernor` | `public HeroVM CurrentGovernor` | property |
| `ConsumptionTooltip` | `public BasicTooltipViewModel ConsumptionTooltip` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace SettlementBuildingProjectVM](../SettlementBuildingProjectVM)
- [same namespace SettlementDailyProjectVM](../SettlementDailyProjectVM)
- [same namespace SettlementGovernorSelectionItemVM](../SettlementGovernorSelectionItemVM)
- [same namespace SettlementGovernorSelectionVM](../SettlementGovernorSelectionVM)
