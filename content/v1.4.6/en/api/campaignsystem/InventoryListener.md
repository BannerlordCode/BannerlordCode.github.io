---
title: "InventoryListener"
description: "InventoryListener: a public class in TaleWorlds.CampaignSystem; 5 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Inventory/InventoryListener.cs."
---
# InventoryListener

**Namespace:** `TaleWorlds.CampaignSystem.Inventory`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class InventoryListener`
**File:** `TaleWorlds.CampaignSystem/Inventory/InventoryListener.cs`

## Overview

InventoryListener lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Inventory/InventoryListener.cs. It is a public class (abstract); the inheritance chain is InventoryListener. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InventoryListener is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Inventory) the module directory; inheritance chain InventoryListener. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Inventory/InventoryListener.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetGold` | `public abstract int GetGold();` | method |
| `GetTraderName` | `public abstract TextObject GetTraderName();` | method |
| `SetGold` | `public abstract void SetGold(int gold);` | method |
| `GetOppositeParty` | `public abstract PartyBase GetOppositeParty();` | method |
| `OnTransaction` | `public abstract void OnTransaction();` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace FakeInventoryListener](../FakeInventoryListener)
- [same namespace InventoryLogic](../InventoryLogic)
- [same namespace InventoryTransferItemEvent](../InventoryTransferItemEvent)
- [same namespace IPlayerTradeBehavior](../IPlayerTradeBehavior)
