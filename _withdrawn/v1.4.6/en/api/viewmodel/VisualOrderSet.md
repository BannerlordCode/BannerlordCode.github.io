---
title: "VisualOrderSet"
description: "VisualOrderSet: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual; 10 exposed members (4 methods, 5 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/VisualOrderSet.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# VisualOrderSet

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public abstract class VisualOrderSet`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/VisualOrderSet.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

VisualOrderSet lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/VisualOrderSet.cs. It is a public class (abstract); the inheritance chain is VisualOrderSet. It exposes 10 public/protected members: 4 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VisualOrderSet lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`, inheritance chain VisualOrderSet. The surface is property-led (properties 5/10, methods 4/10), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/VisualOrderSet.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<VisualOrder>Orders` | property |
| `SoloOrder` | `public VisualOrder SoloOrder` | property |
| `IsSoloOrder` | `public abstract bool IsSoloOrder` | property |
| `GetName` | `public abstract TextObject GetName(OrderController orderController);` | method |
| `StringId` | `public abstract string StringId` | property |
| `IconId` | `public abstract string IconId` | property |
| `VisualOrderSet` | `public VisualOrderSet()` | constructor |
| `AddOrder` | `public void AddOrder(VisualOrder order)` | method |
| `RemoveOrder` | `public void RemoveOrder(VisualOrder order)` | method |
| `ClearOrders` | `public void ClearOrders()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionVisualOrder](../ActionVisualOrder/)
- [same namespace OrderState](../OrderState/)
- [same namespace ReturnVisualOrder](../ReturnVisualOrder/)
- [same namespace TransferTroopsVisualOrder](../TransferTroopsVisualOrder/)
