---
title: "MBBindingList<T>"
description: "MBBindingList<T>: a public class in TaleWorlds.Library, inheriting Collection<T>, IMBBindingList; 11 exposed members (9 methods, 0 properties, 0 fields). Source: TaleWorlds.Library/MBBindingList.cs."
---
# MBBindingList<T>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class MBBindingList<T>: Collection<T>, IMBBindingList, IList, ICollection, IEnumerable`
**File:** `TaleWorlds.Library/MBBindingList.cs`

## Overview

MBBindingList<T> lives in the TaleWorlds.Library module, source file TaleWorlds.Library/MBBindingList.cs. It is a public class, implementing/inheriting Collection<T>, IMBBindingList, IList, ICollection, IEnumerable; the inheritance chain is MBBindingList → Collection. It exposes 11 public/protected members: 9 methods, 1 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBBindingList<T> is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain MBBindingList → Collection. The surface is method-led (methods 9/11, properties 0/11), so it mostly exposes operations. Collection on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/MBBindingList.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBBindingList` | `public MBBindingList() : base(new List<T>(64))` | constructor |
| `ListChanged` | `public event ListChangedEventHandler ListChanged` | event |
| `ClearItems` | `protected override void ClearItems()` | method |
| `InsertItem` | `protected override void InsertItem(int index, T item)` | method |
| `RemoveItem` | `protected override void RemoveItem(int index)` | method |
| `SetItem` | `protected override void SetItem(int index, T item)` | method |
| `OnListChanged` | `protected virtual void OnListChanged(ListChangedEventArgs e)` | method |
| `Sort` | `public void Sort()` | method |
| `Sort` | `public void Sort(IComparer<T>comparer)` | method |
| `IsOrdered` | `public bool IsOrdered(IComparer<T>comparer)` | method |
| `ApplyActionOnAllItems` | `public void ApplyActionOnAllItems(Action<T>action)` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IMBBindingList](../IMBBindingList)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
