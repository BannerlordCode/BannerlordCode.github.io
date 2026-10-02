---
title: "KingdomWarSortControllerVM"
description: "KingdomWarSortControllerVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 7 exposed members (0 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarSortControllerVM.cs."
---
# KingdomWarSortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class KingdomWarSortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarSortControllerVM.cs`

## Overview

KingdomWarSortControllerVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarSortControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is KingdomWarSortControllerVM → ViewModel. It exposes 7 public/protected members: 4 properties, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomWarSortControllerVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy) the module directory; inheritance chain KingdomWarSortControllerVM → ViewModel. The surface is property-led (properties 4/7, methods 0/7), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarSortControllerVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KingdomWarSortControllerVM` | `public KingdomWarSortControllerVM(ref MBBindingList<KingdomWarItemVM>listToControl)` | constructor |
| `ScoreState` | `public int ScoreState` | property |
| `IsScoreSelected` | `public bool IsScoreSelected` | property |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<KingdomWarItemVM>` | property |
| `KingdomWarSortControllerVM.ItemComparerBase` | `public class ItemScoreComparer : KingdomWarSortControllerVM.ItemComparerBase` | property |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<KingdomWarItemVM>` | nested type |
| `KingdomWarSortControllerVM.ItemComparerBase` | `public class ItemScoreComparer : KingdomWarSortControllerVM.ItemComparerBase` | nested type |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace KingdomDiplomacyFactionItemVM](../KingdomDiplomacyFactionItemVM)
- [same namespace KingdomDiplomacyItemVM](../KingdomDiplomacyItemVM)
- [same namespace KingdomDiplomacyProposalActionItemVM](../KingdomDiplomacyProposalActionItemVM)
- [same namespace KingdomDiplomacyVM](../KingdomDiplomacyVM)
