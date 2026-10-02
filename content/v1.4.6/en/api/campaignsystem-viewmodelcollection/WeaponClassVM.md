---
title: "WeaponClassVM"
description: "WeaponClassVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 14 exposed members (4 methods, 9 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponClassVM.cs."
---
# WeaponClassVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class WeaponClassVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponClassVM.cs`

## Overview

WeaponClassVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponClassVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is WeaponClassVM → ViewModel. It exposes 14 public/protected members: 4 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WeaponClassVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign) the module directory; inheritance chain WeaponClassVM → ViewModel. The surface is property-led (properties 9/14, methods 4/14), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponClassVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NewlyUnlockedPieceCount` | `public int NewlyUnlockedPieceCount` | property |
| `Template` | `public CraftingTemplate Template` | property |
| `WeaponClassVM` | `public WeaponClassVM(int selectionIndex, CraftingTemplate template, Action<int>onSelect)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `RegisterSelectedPiece` | `public void RegisterSelectedPiece(CraftingPiece.PieceTypes type, string pieceID)` | method |
| `GetSelectedPieceData` | `public string GetSelectedPieceData(CraftingPiece.PieceTypes type)` | method |
| `ExecuteSelect` | `public void ExecuteSelect()` | method |
| `HasNewlyUnlockedPieces` | `public bool HasNewlyUnlockedPieces` | property |
| `UnlockedPiecesLabelText` | `public string UnlockedPiecesLabelText` | property |
| `UnlockedPiecesCount` | `public int UnlockedPiecesCount` | property |
| `TemplateName` | `public string TemplateName` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `SelectionIndex` | `public int SelectionIndex` | property |
| `WeaponType` | `public string WeaponType` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CraftingHistoryVM](../CraftingHistoryVM)
- [same namespace CraftingItemFlagVM](../CraftingItemFlagVM)
- [same namespace CraftingOrderSelectionOpenedEvent](../CraftingOrderSelectionOpenedEvent)
- [same namespace CraftingOrderTabOpenedEvent](../CraftingOrderTabOpenedEvent)
