---
title: "KingdomClanSortControllerVM"
description: "KingdomClanSortControllerVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 24 exposed members (1 methods, 16 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanSortControllerVM.cs."
---
# KingdomClanSortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomClanSortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanSortControllerVM.cs`

## Overview

KingdomClanSortControllerVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanSortControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is KingdomClanSortControllerVM → ViewModel. It exposes 24 public/protected members: 1 methods, 16 properties, 1 constructors, 6 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomClanSortControllerVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans) the module directory; inheritance chain KingdomClanSortControllerVM → ViewModel. The surface is property-led (properties 16/24, methods 1/24), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanSortControllerVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomClanSortControllerVM` | `public KingdomClanSortControllerVM(ref MBBindingList<KingdomClanItemVM>listToControl)` | constructor |
| `SortByCurrentState` | `public void SortByCurrentState()` | method |
| `InfluenceState` | `public int InfluenceState` | property |
| `FiefsState` | `public int FiefsState` | property |
| `MembersState` | `public int MembersState` | property |
| `NameState` | `public int NameState` | property |
| `TypeState` | `public int TypeState` | property |
| `IsNameSelected` | `public bool IsNameSelected` | property |
| `IsTypeSelected` | `public bool IsTypeSelected` | property |
| `IsFiefsSelected` | `public bool IsFiefsSelected` | property |
| `IsMembersSelected` | `public bool IsMembersSelected` | property |
| `IsInfluenceSelected` | `public bool IsInfluenceSelected` | property |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<KingdomClanItemVM>` | property |
| `KingdomClanSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : KingdomClanSortControllerVM.ItemComparerBase` | property |
| `KingdomClanSortControllerVM.ItemComparerBase` | `public class ItemTypeComparer : KingdomClanSortControllerVM.ItemComparerBase` | property |
| `KingdomClanSortControllerVM.ItemComparerBase` | `public class ItemInfluenceComparer : KingdomClanSortControllerVM.ItemComparerBase` | property |
| `KingdomClanSortControllerVM.ItemComparerBase` | `public class ItemMembersComparer : KingdomClanSortControllerVM.ItemComparerBase` | property |
| `KingdomClanSortControllerVM.ItemComparerBase` | `public class ItemFiefsComparer : KingdomClanSortControllerVM.ItemComparerBase` | property |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<KingdomClanItemVM>` | nested type |
| `KingdomClanSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : KingdomClanSortControllerVM.ItemComparerBase` | nested type |
| `KingdomClanSortControllerVM.ItemComparerBase` | `public class ItemTypeComparer : KingdomClanSortControllerVM.ItemComparerBase` | nested type |
| `KingdomClanSortControllerVM.ItemComparerBase` | `public class ItemInfluenceComparer : KingdomClanSortControllerVM.ItemComparerBase` | nested type |
| `KingdomClanSortControllerVM.ItemComparerBase` | `public class ItemMembersComparer : KingdomClanSortControllerVM.ItemComparerBase` | nested type |
| `KingdomClanSortControllerVM.ItemComparerBase` | `public class ItemFiefsComparer : KingdomClanSortControllerVM.ItemComparerBase` | nested type |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace KingdomClanFiefItemVM](../KingdomClanFiefItemVM)
- [same namespace KingdomClanItemVM](../KingdomClanItemVM)
- [same namespace KingdomClanVM](../KingdomClanVM)
