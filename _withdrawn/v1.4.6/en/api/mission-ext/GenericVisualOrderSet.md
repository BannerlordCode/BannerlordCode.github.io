---
title: "GenericVisualOrderSet"
description: "GenericVisualOrderSet: a public class in TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets, inheriting VisualOrderSet; 5 exposed members (1 methods, 3 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/OrderSets/GenericVisualOrderSet.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GenericVisualOrderSet

**Namespace:** `TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class GenericVisualOrderSet : VisualOrderSet`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/OrderSets/GenericVisualOrderSet.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

GenericVisualOrderSet lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/OrderSets/GenericVisualOrderSet.cs. It is a public class, implementing/inheriting VisualOrderSet; the inheritance chain is GenericVisualOrderSet → VisualOrderSet. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GenericVisualOrderSet lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets`, inheritance chain GenericVisualOrderSet → VisualOrderSet. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/OrderSets/GenericVisualOrderSet.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsSoloOrder` | `public override bool IsSoloOrder` | property |
| `StringId` | `public override string StringId` | property |
| `IconId` | `public override string IconId` | property |
| `GetName` | `public override TextObject GetName(OrderController orderController)` | method |
| `GenericVisualOrderSet` | `public GenericVisualOrderSet(string stringId, TextObject name, bool useActiveOrderForIconId, bool useActiveOrderForName)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface VisualOrderSet](../../viewmodel/VisualOrderSet/)
- [same namespace SingleVisualOrderSet](../SingleVisualOrderSet/)
