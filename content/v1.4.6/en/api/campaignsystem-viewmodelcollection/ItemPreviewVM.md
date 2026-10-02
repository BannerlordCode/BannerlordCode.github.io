---
title: "ItemPreviewVM"
description: "ItemPreviewVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 8 exposed members (4 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemPreviewVM.cs."
---
# ItemPreviewVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ItemPreviewVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemPreviewVM.cs`

## Overview

ItemPreviewVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemPreviewVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ItemPreviewVM → ViewModel. It exposes 8 public/protected members: 4 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ItemPreviewVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Inventory) the module directory; inheritance chain ItemPreviewVM → ViewModel. The surface is method-led (methods 4/8, properties 3/8), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemPreviewVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ItemPreviewVM` | `public ItemPreviewVM(Action onClosed)` | constructor |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `Open` | `public void Open(EquipmentElement item)` | method |
| `ExecuteClose` | `public void ExecuteClose()` | method |
| `Close` | `public void Close()` | method |
| `IsSelected` | `public bool IsSelected` | property |
| `ItemName` | `public string ItemName` | property |
| `ItemTableau` | `public ItemCollectionElementViewModel ItemTableau` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace InventoryCharacterSelectorItemVM](../InventoryCharacterSelectorItemVM)
- [same namespace InventoryEquipmentTypeChangedEvent](../InventoryEquipmentTypeChangedEvent)
- [same namespace InventoryFilterChangedEvent](../InventoryFilterChangedEvent)
- [same namespace InventoryItemInspectedEvent](../InventoryItemInspectedEvent)
