---
title: "GenericVisualOrderSet"
description: "GenericVisualOrderSet: a public class in TaleWorlds.MountAndBlade.View, inheriting VisualOrderSet; 5 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/OrderSets/GenericVisualOrderSet.cs."
---
# GenericVisualOrderSet

**Namespace:** `TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class GenericVisualOrderSet : VisualOrderSet`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/OrderSets/GenericVisualOrderSet.cs`

## Overview

GenericVisualOrderSet lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/OrderSets/GenericVisualOrderSet.cs. It is a public class, implementing/inheriting VisualOrderSet; the inheritance chain is GenericVisualOrderSet → VisualOrderSet. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GenericVisualOrderSet is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets) the module directory; inheritance chain GenericVisualOrderSet → VisualOrderSet. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. VisualOrderSet on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/OrderSets/GenericVisualOrderSet.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsSoloOrder` | `public override bool IsSoloOrder` | property |
| `StringId` | `public override string StringId` | property |
| `IconId` | `public override string IconId` | property |
| `GetName` | `public override TextObject GetName(OrderController orderController)` | method |
| `GenericVisualOrderSet` | `public GenericVisualOrderSet(string stringId, TextObject name, bool useActiveOrderForIconId, bool useActiveOrderForName)` | constructor |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace SingleVisualOrderSet](../SingleVisualOrderSet)
