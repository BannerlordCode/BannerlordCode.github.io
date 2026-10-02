---
title: "BoolItemWithActionVM"
description: "BoolItemWithActionVM: a public class in TaleWorlds.Core.ViewModelCollection, inheriting ViewModel; 3 exposed members (1 methods, 1 properties, 0 fields). Source: TaleWorlds.Core.ViewModelCollection/Generic/BoolItemWithActionVM.cs."
---
# BoolItemWithActionVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Generic`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class BoolItemWithActionVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Generic/BoolItemWithActionVM.cs`

## Overview

BoolItemWithActionVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/Generic/BoolItemWithActionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is BoolItemWithActionVM → ViewModel. It exposes 3 public/protected members: 1 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoolItemWithActionVM is a top-level type in TaleWorlds.Core.ViewModelCollection, namespace differing from (TaleWorlds.Core.ViewModelCollection.Generic) the module directory; inheritance chain BoolItemWithActionVM → ViewModel. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/Generic/BoolItemWithActionVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsActive` | `public bool IsActive` | property |
| `ExecuteAction` | `public void ExecuteAction()` | method |
| `BoolItemWithActionVM` | `public BoolItemWithActionVM(Action<object>onExecute, bool isActive, object identifier)` | constructor |

## See Also

- [↑ core-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BindingListFloatItem](../BindingListFloatItem)
- [same namespace BindingListStringItem](../BindingListStringItem)
- [same namespace StringItemWithActionVM](../StringItemWithActionVM)
- [same namespace StringItemWithEnabledAndHintVM](../StringItemWithEnabledAndHintVM)
