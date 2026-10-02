---
title: "BarterItemVM"
description: "BarterItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting EncyclopediaLinkVM; 21 exposed members (6 methods, 13 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Barter/BarterItemVM.cs."
---
# BarterItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Barter`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class BarterItemVM : EncyclopediaLinkVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Barter/BarterItemVM.cs`

## Overview

BarterItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Barter/BarterItemVM.cs. It is a public class, implementing/inheriting EncyclopediaLinkVM; the inheritance chain is BarterItemVM → EncyclopediaLinkVM → ViewModel. It exposes 21 public/protected members: 6 methods, 13 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BarterItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Barter) the module directory; inheritance chain BarterItemVM → EncyclopediaLinkVM → ViewModel. The surface is property-led (properties 13/21, methods 6/21), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Barter/BarterItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BarterItemVM` | `public BarterItemVM(Barterable barterable, BarterItemVM.BarterTransferEventDelegate OnTransfer, Action onAmountChange, bool isFixed = false)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `RefreshCompabilityWithItem` | `public void RefreshCompabilityWithItem(BarterItemVM item, bool isItemGotOffered)` | method |
| `ExecuteAddOffered` | `public void ExecuteAddOffered()` | method |
| `ExecuteRemoveOffered` | `public void ExecuteRemoveOffered()` | method |
| `ExecuteAction` | `public void ExecuteAction()` | method |
| `TotalItemCount` | `public int TotalItemCount` | property |
| `TotalItemCountText` | `public string TotalItemCountText` | property |
| `CurrentOfferedAmount` | `public int CurrentOfferedAmount` | property |
| `CurrentOfferedAmountText` | `public string CurrentOfferedAmountText` | property |
| `BarterableType` | `public string BarterableType` | property |
| `HasVisualIdentifier` | `public bool HasVisualIdentifier` | property |
| `IsMultiple` | `public bool IsMultiple` | property |
| `IsSelectorActive` | `public bool IsSelectorActive` | property |
| `VisualIdentifier` | `public ImageIdentifierVM VisualIdentifier` | property |
| `ItemLbl` | `public string ItemLbl` | property |
| `FiefFileName` | `public string FiefFileName` | property |
| `IsItemTransferrable` | `public bool IsItemTransferrable` | property |
| `IsOffered` | `public bool IsOffered` | property |
| `BarterTransferEventDelegate` | `public delegate void BarterTransferEventDelegate(BarterItemVM itemVM, bool transferAll);` | method |
| `BarterTransferEventDelegate` | `public delegate void BarterTransferEventDelegate(BarterItemVM itemVM, bool transferAll)` | nested type |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface EncyclopediaLinkVM](../EncyclopediaLinkVM)
- [same namespace BarterVM](../BarterVM)
