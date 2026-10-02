---
title: "ItemFlagVM"
description: "ItemFlagVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 3 exposed members (0 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemFlagVM.cs."
---
# ItemFlagVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ItemFlagVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemFlagVM.cs`

## Overview

ItemFlagVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemFlagVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ItemFlagVM → ViewModel. It exposes 3 public/protected members: 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ItemFlagVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Inventory) the module directory; inheritance chain ItemFlagVM → ViewModel. The surface is property-led (properties 2/3, methods 0/3), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemFlagVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ItemFlagVM` | `public ItemFlagVM(string iconName, TextObject hint)` | constructor |
| `Icon` | `public string Icon` | property |
| `Hint` | `public HintViewModel Hint` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace InventoryCharacterSelectorItemVM](../InventoryCharacterSelectorItemVM)
- [same namespace InventoryEquipmentTypeChangedEvent](../InventoryEquipmentTypeChangedEvent)
- [same namespace InventoryFilterChangedEvent](../InventoryFilterChangedEvent)
- [same namespace InventoryItemInspectedEvent](../InventoryItemInspectedEvent)
