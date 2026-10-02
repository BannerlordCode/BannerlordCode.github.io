---
title: "ItemVM"
description: "ItemVM: a public class in TaleWorlds.Core.ViewModelCollection, inheriting ViewModel; 31 exposed members (11 methods, 18 properties, 1 fields). Source: TaleWorlds.Core.ViewModelCollection/ItemVM.cs."
---
# ItemVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class ItemVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/ItemVM.cs`

## Overview

ItemVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/ItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ItemVM → ViewModel. It exposes 31 public/protected members: 11 methods, 18 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ItemVM is a top-level type in TaleWorlds.Core.ViewModelCollection, namespace matching the module directory; inheritance chain ItemVM → ViewModel. The surface is property-led (properties 18/31, methods 11/31), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/ItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TypeId` | `public int TypeId` | property |
| `Version` | `public int Version` | property |
| `ItemVM` | `public ItemVM()` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ItemType` | `public EquipmentIndex ItemType` | property |
| `ImageIdentifier` | `public ItemImageIdentifierVM ImageIdentifier` | property |
| `StringId` | `public string StringId` | property |
| `ItemDescription` | `public string ItemDescription` | property |
| `IsFiltered` | `public bool IsFiltered` | property |
| `ItemCost` | `public int ItemCost` | property |
| `TypeName` | `public string TypeName` | property |
| `PreviewHint` | `public HintViewModel PreviewHint` | property |
| `EquipHint` | `public HintViewModel EquipHint` | property |
| `UnequipHint` | `public HintViewModel UnequipHint` | property |
| `SlaughterHint` | `public BasicTooltipViewModel SlaughterHint` | property |
| `DonateHint` | `public BasicTooltipViewModel DonateHint` | property |
| `BuyAndEquipHint` | `public BasicTooltipViewModel BuyAndEquipHint` | property |
| `SellHint` | `public BasicTooltipViewModel SellHint` | property |
| `BuyHint` | `public BasicTooltipViewModel BuyHint` | property |
| `LockHint` | `public HintViewModel LockHint` | property |
| `ExecutePreviewItem` | `public void ExecutePreviewItem()` | method |
| `ExecuteUnequipItem` | `public void ExecuteUnequipItem()` | method |
| `ExecuteEquipItem` | `public void ExecuteEquipItem()` | method |
| `ReleaseStaticContent` | `public static void ReleaseStaticContent()` | method |
| `ExecuteRefreshTooltip` | `public void ExecuteRefreshTooltip()` | method |
| `ExecuteCancelTooltip` | `public void ExecuteCancelTooltip()` | method |
| `ExecuteBuyItem` | `public void ExecuteBuyItem()` | method |
| `ExecuteSelectItem` | `public void ExecuteSelectItem()` | method |
| `GetItemTypeWithItemObject` | `public EquipmentIndex GetItemTypeWithItemObject()` | method |
| `OnItemTypeUpdated` | `protected void OnItemTypeUpdated()` | method |
| `_itemType` | `public EquipmentIndex _itemType` | field |

## See Also

- [↑ core-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleResultVM](../BattleResultVM)
- [same namespace CharacterEquipmentItemVM](../CharacterEquipmentItemVM)
- [same namespace CharacterViewModel](../CharacterViewModel)
- [same namespace CharacterWithActionViewModel](../CharacterWithActionViewModel)
