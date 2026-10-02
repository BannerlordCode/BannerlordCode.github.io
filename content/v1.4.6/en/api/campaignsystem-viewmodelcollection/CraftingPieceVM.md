---
title: "CraftingPieceVM"
description: "CraftingPieceVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 17 exposed members (4 methods, 10 properties, 1 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingPieceVM.cs."
---
# CraftingPieceVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CraftingPieceVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingPieceVM.cs`

## Overview

CraftingPieceVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingPieceVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CraftingPieceVM → ViewModel. It exposes 17 public/protected members: 4 methods, 10 properties, 1 fields, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingPieceVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign) the module directory; inheritance chain CraftingPieceVM → ViewModel. The surface is property-led (properties 10/17, methods 4/17), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/CraftingPieceVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CraftingPieceVM` | `public CraftingPieceVM()` | constructor |
| `CraftingPieceVM` | `public CraftingPieceVM(Action<CraftingPieceVM>selectWeaponPart, string templateId, WeaponDesignElement usableCraftingPiece, int pieceType, int index, bool isOpened)` | constructor |
| `RefreshFlagIcons` | `public void RefreshFlagIcons()` | method |
| `ExecuteOpenTooltip` | `public void ExecuteOpenTooltip()` | method |
| `ExecuteCloseTooltip` | `public void ExecuteCloseTooltip()` | method |
| `ExecuteSelect` | `public void ExecuteSelect()` | method |
| `IsFilteredOut` | `public bool IsFilteredOut` | property |
| `MBBindingList` | `public MBBindingList<CraftingItemFlagVM>ItemAttributeIcons` | property |
| `PlayerHasPiece` | `public bool PlayerHasPiece` | property |
| `IsEmpty` | `public bool IsEmpty` | property |
| `TierText` | `public string TierText` | property |
| `Tier` | `public int Tier` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `ImageIdentifier` | `public CraftingPieceImageIdentifierVM ImageIdentifier` | property |
| `PieceType` | `public int PieceType` | property |
| `IsNewlyUnlocked` | `public bool IsNewlyUnlocked` | property |
| `_pieceType` | `public int _pieceType` | field |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CraftingHistoryVM](../CraftingHistoryVM)
- [same namespace CraftingItemFlagVM](../CraftingItemFlagVM)
- [same namespace CraftingOrderSelectionOpenedEvent](../CraftingOrderSelectionOpenedEvent)
- [same namespace CraftingOrderTabOpenedEvent](../CraftingOrderTabOpenedEvent)
