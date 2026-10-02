---
title: "TownManagementShopItemVM"
description: "TownManagementShopItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 7 exposed members (3 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementShopItemVM.cs."
---
# TownManagementShopItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class TownManagementShopItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementShopItemVM.cs`

## Overview

TownManagementShopItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementShopItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TownManagementShopItemVM → ViewModel. It exposes 7 public/protected members: 3 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TownManagementShopItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement) the module directory; inheritance chain TownManagementShopItemVM → ViewModel. The surface is method-led (methods 3/7, properties 3/7), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementShopItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TownManagementShopItemVM` | `public TownManagementShopItemVM(Workshop workshop)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteBeginHint` | `public void ExecuteBeginHint()` | method |
| `ExecuteEndHint` | `public void ExecuteEndHint()` | method |
| `IsEmpty` | `public bool IsEmpty` | property |
| `ShopName` | `public string ShopName` | property |
| `ShopId` | `public string ShopId` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace SettlementBuildingProjectVM](../SettlementBuildingProjectVM)
- [same namespace SettlementDailyProjectVM](../SettlementDailyProjectVM)
- [same namespace SettlementGovernorSelectionItemVM](../SettlementGovernorSelectionItemVM)
- [same namespace SettlementGovernorSelectionVM](../SettlementGovernorSelectionVM)
