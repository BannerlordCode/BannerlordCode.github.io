---
title: "BoolItemWithActionVM"
description: "BoolItemWithActionVM: a public class in TaleWorlds.Core.ViewModelCollection.Generic, inheriting ViewModel; 3 exposed members (1 methods, 1 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.Core.ViewModelCollection/Generic/BoolItemWithActionVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BoolItemWithActionVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Generic`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class BoolItemWithActionVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Generic/BoolItemWithActionVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.Core.ViewModelCollection)

## Overview

BoolItemWithActionVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/Generic/BoolItemWithActionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is BoolItemWithActionVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 3 public/protected members: 1 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoolItemWithActionVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.Core.ViewModelCollection`), namespace `TaleWorlds.Core.ViewModelCollection.Generic`, inheritance chain BoolItemWithActionVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/Generic/BoolItemWithActionVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsActive` | `public bool IsActive` | property |
| `ExecuteAction` | `public void ExecuteAction()` | method |
| `BoolItemWithActionVM` | `public BoolItemWithActionVM(Action<object>onExecute, bool isActive, object identifier)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BindingListFloatItem](../BindingListFloatItem/)
- [same namespace BindingListStringItem](../BindingListStringItem/)
- [same namespace StringItemWithActionVM](../StringItemWithActionVM/)
- [same namespace StringItemWithEnabledAndHintVM](../StringItemWithEnabledAndHintVM/)
