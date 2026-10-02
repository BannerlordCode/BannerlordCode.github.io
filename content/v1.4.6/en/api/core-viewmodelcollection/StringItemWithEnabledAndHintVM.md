---
title: "StringItemWithEnabledAndHintVM"
description: "StringItemWithEnabledAndHintVM: a public class in TaleWorlds.Core.ViewModelCollection, inheriting ViewModel; 5 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.Core.ViewModelCollection/Generic/StringItemWithEnabledAndHintVM.cs."
---
# StringItemWithEnabledAndHintVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Generic`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class StringItemWithEnabledAndHintVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Generic/StringItemWithEnabledAndHintVM.cs`

## Overview

StringItemWithEnabledAndHintVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/Generic/StringItemWithEnabledAndHintVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is StringItemWithEnabledAndHintVM → ViewModel. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StringItemWithEnabledAndHintVM is a top-level type in TaleWorlds.Core.ViewModelCollection, namespace differing from (TaleWorlds.Core.ViewModelCollection.Generic) the module directory; inheritance chain StringItemWithEnabledAndHintVM → ViewModel. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/Generic/StringItemWithEnabledAndHintVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StringItemWithEnabledAndHintVM` | `public StringItemWithEnabledAndHintVM(Action<object>onExecute, string item, bool enabled, object identifier, TextObject hintText = null)` | constructor |
| `ExecuteAction` | `public void ExecuteAction()` | method |
| `ActionText` | `public string ActionText` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `Hint` | `public HintViewModel Hint` | property |

## See Also

- [↑ core-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BindingListFloatItem](../BindingListFloatItem)
- [same namespace BindingListStringItem](../BindingListStringItem)
- [same namespace BoolItemWithActionVM](../BoolItemWithActionVM)
- [same namespace StringItemWithActionVM](../StringItemWithActionVM)
