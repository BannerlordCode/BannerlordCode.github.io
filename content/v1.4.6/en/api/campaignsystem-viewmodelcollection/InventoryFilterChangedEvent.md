---
title: "InventoryFilterChangedEvent"
description: "InventoryFilterChangedEvent: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting EventBase; 2 exposed members (0 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/InventoryFilterChangedEvent.cs."
---
# InventoryFilterChangedEvent

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class InventoryFilterChangedEvent : EventBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/InventoryFilterChangedEvent.cs`

## Overview

InventoryFilterChangedEvent lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/InventoryFilterChangedEvent.cs. It is a public class, implementing/inheriting EventBase; the inheritance chain is InventoryFilterChangedEvent → EventBase. It exposes 2 public/protected members: 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InventoryFilterChangedEvent is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Inventory) the module directory; inheritance chain InventoryFilterChangedEvent → EventBase. The surface is property-led (properties 1/2, methods 0/2), so it mostly exposes state for reading. EventBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/InventoryFilterChangedEvent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NewFilter` | `public SPInventoryVM.Filters NewFilter` | property |
| `InventoryFilterChangedEvent` | `public InventoryFilterChangedEvent(SPInventoryVM.Filters newFilter)` | constructor |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace InventoryCharacterSelectorItemVM](../InventoryCharacterSelectorItemVM)
- [same namespace InventoryEquipmentTypeChangedEvent](../InventoryEquipmentTypeChangedEvent)
- [same namespace InventoryItemInspectedEvent](../InventoryItemInspectedEvent)
- [same namespace InventoryTradeVM](../InventoryTradeVM)
