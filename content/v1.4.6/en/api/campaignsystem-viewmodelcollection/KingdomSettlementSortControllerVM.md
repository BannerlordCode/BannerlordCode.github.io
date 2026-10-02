---
title: "KingdomSettlementSortControllerVM"
description: "KingdomSettlementSortControllerVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 29 exposed members (0 methods, 19 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementSortControllerVM.cs."
---
# KingdomSettlementSortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomSettlementSortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementSortControllerVM.cs`

## Overview

KingdomSettlementSortControllerVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementSortControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is KingdomSettlementSortControllerVM → ViewModel. It exposes 29 public/protected members: 19 properties, 1 constructors, 9 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomSettlementSortControllerVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements) the module directory; inheritance chain KingdomSettlementSortControllerVM → ViewModel. The surface is property-led (properties 19/29, methods 0/29), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementSortControllerVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomSettlementSortControllerVM` | `public KingdomSettlementSortControllerVM(MBBindingList<KingdomSettlementItemVM>listToControl)` | constructor |
| `TypeState` | `public int TypeState` | property |
| `NameState` | `public int NameState` | property |
| `OwnerState` | `public int OwnerState` | property |
| `ProsperityState` | `public int ProsperityState` | property |
| `DefendersState` | `public int DefendersState` | property |
| `IsTypeSelected` | `public bool IsTypeSelected` | property |
| `IsNameSelected` | `public bool IsNameSelected` | property |
| `IsDefendersSelected` | `public bool IsDefendersSelected` | property |
| `IsOwnerSelected` | `public bool IsOwnerSelected` | property |
| `IsProsperitySelected` | `public bool IsProsperitySelected` | property |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<KingdomSettlementItemVM>` | property |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | property |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemClanComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | property |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemOwnerComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | property |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemVillagesComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | property |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemTypeComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | property |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemProsperityComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | property |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemFoodComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | property |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemGarrisonComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | property |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<KingdomSettlementItemVM>` | nested type |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | nested type |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemClanComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | nested type |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemOwnerComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | nested type |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemVillagesComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | nested type |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemTypeComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | nested type |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemProsperityComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | nested type |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemFoodComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | nested type |
| `KingdomSettlementSortControllerVM.ItemComparerBase` | `public class ItemGarrisonComparer : KingdomSettlementSortControllerVM.ItemComparerBase` | nested type |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace KingdomSettlementItemVM](../KingdomSettlementItemVM)
- [same namespace KingdomSettlementVM](../KingdomSettlementVM)
