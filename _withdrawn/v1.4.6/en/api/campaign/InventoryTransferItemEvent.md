---
title: "InventoryTransferItemEvent"
description: "InventoryTransferItemEvent: a public class in TaleWorlds.CampaignSystem.Inventory, inheriting EventBase; 3 exposed members (0 methods, 2 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Inventory/InventoryTransferItemEvent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InventoryTransferItemEvent

**Namespace:** `TaleWorlds.CampaignSystem.Inventory`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class InventoryTransferItemEvent : EventBase`
**File:** `TaleWorlds.CampaignSystem/Inventory/InventoryTransferItemEvent.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

InventoryTransferItemEvent lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Inventory/InventoryTransferItemEvent.cs. It is a public class, implementing/inheriting EventBase; the inheritance chain is InventoryTransferItemEvent → EventBase. It exposes 3 public/protected members: 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InventoryTransferItemEvent lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Inventory`, inheritance chain InventoryTransferItemEvent → EventBase. The surface is property-led (properties 2/3, methods 0/3), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Inventory/InventoryTransferItemEvent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Item` | `public ItemObject Item` | property |
| `IsBuyForPlayer` | `public bool IsBuyForPlayer` | property |
| `InventoryTransferItemEvent` | `public InventoryTransferItemEvent(ItemObject item, bool isBuyForPlayer)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface EventBase](../../core-extra/EventBase/)
- [same namespace FakeInventoryListener](../FakeInventoryListener/)
- [same namespace InventoryListener](../InventoryListener/)
- [same namespace InventoryLogic](../InventoryLogic/)
- [same namespace IPlayerTradeBehavior](../IPlayerTradeBehavior/)
