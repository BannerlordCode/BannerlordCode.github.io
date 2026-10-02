---
title: "CraftingPieceListVM"
description: "CraftingPieceListVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign, inheriting ViewModel; 8 exposed members (2 methods, 5 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingPieceListVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CraftingPieceListVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CraftingPieceListVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingPieceListVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

CraftingPieceListVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingPieceListVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CraftingPieceListVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 8 public/protected members: 2 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingPieceListVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`, inheritance chain CraftingPieceListVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 5/8, methods 2/8), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingPieceListVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CraftingPieceListVM` | `public CraftingPieceListVM(MBBindingList<CraftingPieceVM>pieceList, CraftingPiece.PieceTypes pieceType, Action<CraftingPiece.PieceTypes, bool>onSelect)` | constructor |
| `ExecuteSelect` | `public void ExecuteSelect()` | method |
| `Refresh` | `public void Refresh()` | method |
| `HasNewlyUnlockedPieces` | `public bool HasNewlyUnlockedPieces` | property |
| `MBBindingList` | `public MBBindingList<CraftingPieceVM>Pieces` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `SelectedPiece` | `public CraftingPieceVM SelectedPiece` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CraftingHistoryVM](../CraftingHistoryVM/)
- [same namespace CraftingItemFlagVM](../CraftingItemFlagVM/)
- [same namespace CraftingOrderSelectionOpenedEvent](../CraftingOrderSelectionOpenedEvent/)
- [same namespace CraftingOrderTabOpenedEvent](../CraftingOrderTabOpenedEvent/)
