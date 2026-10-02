---
title: "StringPairItemWithActionVM"
description: "StringPairItemWithActionVM: a public class in TaleWorlds.Core.ViewModelCollection.Generic, inheriting ViewModel; 6 exposed members (1 methods, 4 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.Core.ViewModelCollection/Generic/StringPairItemWithActionVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StringPairItemWithActionVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Generic`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class StringPairItemWithActionVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Generic/StringPairItemWithActionVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.Core.ViewModelCollection)

## Overview

StringPairItemWithActionVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/Generic/StringPairItemWithActionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is StringPairItemWithActionVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StringPairItemWithActionVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.Core.ViewModelCollection`), namespace `TaleWorlds.Core.ViewModelCollection.Generic`, inheritance chain StringPairItemWithActionVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/Generic/StringPairItemWithActionVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `StringPairItemWithActionVM` | `public StringPairItemWithActionVM(Action<object>onExecute, string definition, string value, object identifier)` | constructor |
| `ExecuteAction` | `public void ExecuteAction()` | method |
| `Definition` | `public string Definition` | property |
| `Value` | `public string Value` | property |
| `Hint` | `public HintViewModel Hint` | property |
| `IsEnabled` | `public bool IsEnabled` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BindingListFloatItem](../BindingListFloatItem/)
- [same namespace BindingListStringItem](../BindingListStringItem/)
- [same namespace BoolItemWithActionVM](../BoolItemWithActionVM/)
- [same namespace StringItemWithActionVM](../StringItemWithActionVM/)
