---
title: "SelectorItemVM"
description: "SelectorItemVM: a public class in TaleWorlds.Core.ViewModelCollection.Selector, inheriting ViewModel; 9 exposed members (1 methods, 4 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.Core.ViewModelCollection/Selector/SelectorItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SelectorItemVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Selector`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class SelectorItemVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Selector/SelectorItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.Core.ViewModelCollection)

## Overview

SelectorItemVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/Selector/SelectorItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SelectorItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 9 public/protected members: 1 methods, 4 properties, 4 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SelectorItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.Core.ViewModelCollection`), namespace `TaleWorlds.Core.ViewModelCollection.Selector`, inheritance chain SelectorItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 4/9, methods 1/9), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/Selector/SelectorItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SelectorItemVM` | `public SelectorItemVM(TextObject s)` | constructor |
| `SelectorItemVM` | `public SelectorItemVM(string s)` | constructor |
| `SelectorItemVM` | `public SelectorItemVM(TextObject s, TextObject hint)` | constructor |
| `SelectorItemVM` | `public SelectorItemVM(string s, TextObject hint)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `StringItem` | `public string StringItem` | property |
| `CanBeSelected` | `public bool CanBeSelected` | property |
| `Hint` | `public HintViewModel Hint` | property |
| `IsSelected` | `public bool IsSelected` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace SelectorVM](../SelectorVM__1/)
