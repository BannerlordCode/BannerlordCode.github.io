---
title: "FakeInventoryListener"
description: "FakeInventoryListener: a public class in TaleWorlds.CampaignSystem.Inventory, inheriting InventoryListener; 5 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Inventory/FakeInventoryListener.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FakeInventoryListener

**Namespace:** `TaleWorlds.CampaignSystem.Inventory`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class FakeInventoryListener : InventoryListener`
**File:** `TaleWorlds.CampaignSystem/Inventory/FakeInventoryListener.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

FakeInventoryListener lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Inventory/FakeInventoryListener.cs. It is a public class, implementing/inheriting InventoryListener; the inheritance chain is FakeInventoryListener → InventoryListener. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FakeInventoryListener lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Inventory`, inheritance chain FakeInventoryListener → InventoryListener. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Inventory/FakeInventoryListener.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetGold` | `public override int GetGold()` | method |
| `GetTraderName` | `public override TextObject GetTraderName()` | method |
| `SetGold` | `public override void SetGold(int gold)` | method |
| `OnTransaction` | `public override void OnTransaction()` | method |
| `GetOppositeParty` | `public override PartyBase GetOppositeParty()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface InventoryListener](../InventoryListener/)
- [same namespace InventoryListener](../InventoryListener/)
- [same namespace InventoryLogic](../InventoryLogic/)
- [same namespace InventoryTransferItemEvent](../InventoryTransferItemEvent/)
- [same namespace IPlayerTradeBehavior](../IPlayerTradeBehavior/)
