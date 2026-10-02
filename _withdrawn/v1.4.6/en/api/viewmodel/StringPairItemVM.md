---
title: "StringPairItemVM"
description: "StringPairItemVM: a public class in TaleWorlds.Core.ViewModelCollection.Generic, inheriting ViewModel; 4 exposed members (0 methods, 3 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.Core.ViewModelCollection/Generic/StringPairItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StringPairItemVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Generic`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class StringPairItemVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Generic/StringPairItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.Core.ViewModelCollection)

## Overview

StringPairItemVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/Generic/StringPairItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is StringPairItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 4 public/protected members: 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StringPairItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.Core.ViewModelCollection`), namespace `TaleWorlds.Core.ViewModelCollection.Generic`, inheritance chain StringPairItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 3/4, methods 0/4), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/Generic/StringPairItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `StringPairItemVM` | `public StringPairItemVM(string definition, string value, BasicTooltipViewModel hint = null)` | constructor |
| `Definition` | `public string Definition` | property |
| `Value` | `public string Value` | property |
| `Hint` | `public BasicTooltipViewModel Hint` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BindingListFloatItem](../BindingListFloatItem/)
- [same namespace BindingListStringItem](../BindingListStringItem/)
- [same namespace BoolItemWithActionVM](../BoolItemWithActionVM/)
- [same namespace StringItemWithActionVM](../StringItemWithActionVM/)
