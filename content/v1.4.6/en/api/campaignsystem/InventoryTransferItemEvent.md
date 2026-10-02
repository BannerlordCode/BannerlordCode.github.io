---
title: "InventoryTransferItemEvent"
description: "InventoryTransferItemEvent: a public class in TaleWorlds.CampaignSystem, inheriting EventBase; 3 exposed members (0 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Inventory/InventoryTransferItemEvent.cs."
---
# InventoryTransferItemEvent

**Namespace:** `TaleWorlds.CampaignSystem.Inventory`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class InventoryTransferItemEvent : EventBase`
**File:** `TaleWorlds.CampaignSystem/Inventory/InventoryTransferItemEvent.cs`

## Overview

InventoryTransferItemEvent lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Inventory/InventoryTransferItemEvent.cs. It is a public class, implementing/inheriting EventBase; the inheritance chain is InventoryTransferItemEvent → EventBase. It exposes 3 public/protected members: 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InventoryTransferItemEvent is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Inventory) the module directory; inheritance chain InventoryTransferItemEvent → EventBase. The surface is property-led (properties 2/3, methods 0/3), so it mostly exposes state for reading. EventBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Inventory/InventoryTransferItemEvent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Item` | `public ItemObject Item` | property |
| `IsBuyForPlayer` | `public bool IsBuyForPlayer` | property |
| `InventoryTransferItemEvent` | `public InventoryTransferItemEvent(ItemObject item, bool isBuyForPlayer)` | constructor |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace FakeInventoryListener](../FakeInventoryListener)
- [same namespace InventoryListener](../InventoryListener)
- [same namespace InventoryLogic](../InventoryLogic)
- [same namespace IPlayerTradeBehavior](../IPlayerTradeBehavior)
