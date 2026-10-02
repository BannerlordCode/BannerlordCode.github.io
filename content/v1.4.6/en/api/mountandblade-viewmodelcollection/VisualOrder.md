---
title: "VisualOrder"
description: "VisualOrder: a public class in TaleWorlds.MountAndBlade.ViewModelCollection; 12 exposed members (9 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/VisualOrder.cs."
---
# VisualOrder

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public abstract class VisualOrder`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/VisualOrder.cs`

## Overview

VisualOrder lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/VisualOrder.cs. It is a public class (abstract); the inheritance chain is VisualOrder. It exposes 12 public/protected members: 9 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VisualOrder is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual) the module directory; inheritance chain VisualOrder. The surface is method-led (methods 9/12, properties 2/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Order/Visual/VisualOrder.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StringId` | `public string StringId` | property |
| `IconId` | `public string IconId` | property |
| `VisualOrder` | `public VisualOrder(string stringId)` | constructor |
| `GetIconId` | `protected virtual string GetIconId()` | method |
| `GetName` | `public abstract TextObject GetName(OrderController orderController);` | method |
| `IsTargeted` | `public abstract bool IsTargeted();` | method |
| `ExecuteOrder` | `public abstract void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters);` | method |
| `BeforeExecuteOrder` | `public virtual void BeforeExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)` | method |
| `AfterExecuteOrder` | `public virtual void AfterExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)` | method |
| `OnGetFormationHasOrder` | `protected abstract bool? OnGetFormationHasOrder(Formation formation);` | method |
| `GetFormationHasOrder` | `public bool GetFormationHasOrder(Formation formation)` | method |
| `GetActiveState` | `public OrderState GetActiveState(OrderController orderController)` | method |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionVisualOrder](../ActionVisualOrder)
- [same namespace OrderState](../OrderState)
- [same namespace ReturnVisualOrder](../ReturnVisualOrder)
- [same namespace TransferTroopsVisualOrder](../TransferTroopsVisualOrder)
