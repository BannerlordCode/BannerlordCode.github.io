---
title: "SelectorVM<T>"
description: "SelectorVM<T>: a public class in TaleWorlds.Core.ViewModelCollection.Selector, inheriting ViewModel; 17 exposed members (10 methods, 4 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.Core.ViewModelCollection/Selector/SelectorVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SelectorVM<T>

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Selector`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class SelectorVM<T>: ViewModel where T : SelectorItemVM`
**File:** `TaleWorlds.Core.ViewModelCollection/Selector/SelectorVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.Core.ViewModelCollection)

## Overview

SelectorVM<T> lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/Selector/SelectorVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SelectorVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 17 public/protected members: 10 methods, 4 properties, 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SelectorVM<T> lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.Core.ViewModelCollection`), namespace `TaleWorlds.Core.ViewModelCollection.Selector`, inheritance chain SelectorVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 10/17, properties 4/17), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/Selector/SelectorVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SelectorVM` | `public SelectorVM(int selectedIndex, Action<SelectorVM<T>>onChange)` | constructor |
| `SelectorVM` | `public SelectorVM(IEnumerable<string>list, int selectedIndex, Action<SelectorVM<T>>onChange)` | constructor |
| `SelectorVM` | `public SelectorVM(IEnumerable<TextObject>list, int selectedIndex, Action<SelectorVM<T>>onChange)` | constructor |
| `Refresh` | `public void Refresh(IEnumerable<string>list, int selectedIndex, Action<SelectorVM<T>>onChange)` | method |
| `Refresh` | `public void Refresh(IEnumerable<TextObject>list, int selectedIndex, Action<SelectorVM<T>>onChange)` | method |
| `Refresh` | `public void Refresh(IEnumerable<T>list, int selectedIndex, Action<SelectorVM<T>>onChange)` | method |
| `SetOnChangeAction` | `public void SetOnChangeAction(Action<SelectorVM<T>>onChange)` | method |
| `AddItem` | `public void AddItem(T item)` | method |
| `ExecuteRandomize` | `public void ExecuteRandomize()` | method |
| `ExecuteSelectNextItem` | `public void ExecuteSelectNextItem()` | method |
| `ExecuteSelectPreviousItem` | `public void ExecuteSelectPreviousItem()` | method |
| `GetCurrentItem` | `public T GetCurrentItem()` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `MBBindingList` | `public MBBindingList<T>ItemList` | property |
| `SelectedIndex` | `public int SelectedIndex` | property |
| `SelectedItem` | `public T SelectedItem` | property |
| `HasSingleItem` | `public bool HasSingleItem` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace SelectorItemVM](../SelectorItemVM/)
