---
title: "SelectorItemVM"
description: "SelectorItemVM: a public class in TaleWorlds.Core.ViewModelCollection, inheriting ViewModel; 9 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.Core.ViewModelCollection/Selector/SelectorItemVM.cs."
---
# SelectorItemVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Selector`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class SelectorItemVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Selector/SelectorItemVM.cs`

## Overview

SelectorItemVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/Selector/SelectorItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SelectorItemVM → ViewModel. It exposes 9 public/protected members: 1 methods, 4 properties, 4 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SelectorItemVM is a top-level type in TaleWorlds.Core.ViewModelCollection, namespace differing from (TaleWorlds.Core.ViewModelCollection.Selector) the module directory; inheritance chain SelectorItemVM → ViewModel. The surface is property-led (properties 4/9, methods 1/9), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/Selector/SelectorItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ core-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace SelectorVM](../SelectorVM__1)
