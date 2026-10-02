---
title: "StringPairItemWithActionVM"
description: "StringPairItemWithActionVM: a public class in TaleWorlds.Core.ViewModelCollection, inheriting ViewModel; 6 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.Core.ViewModelCollection/Generic/StringPairItemWithActionVM.cs."
---
# StringPairItemWithActionVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Generic`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class StringPairItemWithActionVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Generic/StringPairItemWithActionVM.cs`

## Overview

StringPairItemWithActionVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/Generic/StringPairItemWithActionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is StringPairItemWithActionVM → ViewModel. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StringPairItemWithActionVM is a top-level type in TaleWorlds.Core.ViewModelCollection, namespace differing from (TaleWorlds.Core.ViewModelCollection.Generic) the module directory; inheritance chain StringPairItemWithActionVM → ViewModel. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/Generic/StringPairItemWithActionVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StringPairItemWithActionVM` | `public StringPairItemWithActionVM(Action<object>onExecute, string definition, string value, object identifier)` | constructor |
| `ExecuteAction` | `public void ExecuteAction()` | method |
| `Definition` | `public string Definition` | property |
| `Value` | `public string Value` | property |
| `Hint` | `public HintViewModel Hint` | property |
| `IsEnabled` | `public bool IsEnabled` | property |

## See Also

- [↑ core-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BindingListFloatItem](../BindingListFloatItem)
- [same namespace BindingListStringItem](../BindingListStringItem)
- [same namespace BoolItemWithActionVM](../BoolItemWithActionVM)
- [same namespace StringItemWithActionVM](../StringItemWithActionVM)
