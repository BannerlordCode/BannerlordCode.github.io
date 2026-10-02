---
title: "HintViewModel"
description: "HintViewModel: a public class in TaleWorlds.Core.ViewModelCollection.Information, inheriting ViewModel; 4 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.Core.ViewModelCollection/Information/HintViewModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HintViewModel

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class HintViewModel : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/HintViewModel.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.Core.ViewModelCollection)

## Overview

HintViewModel lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/Information/HintViewModel.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is HintViewModel → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 4 public/protected members: 2 methods, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HintViewModel lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.Core.ViewModelCollection`), namespace `TaleWorlds.Core.ViewModelCollection.Information`, inheritance chain HintViewModel → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 2/4, properties 0/4), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/Information/HintViewModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `HintViewModel` | `public HintViewModel()` | constructor |
| `HintViewModel` | `public HintViewModel(TextObject hintText, string uniqueName = null)` | constructor |
| `ExecuteBeginHint` | `public void ExecuteBeginHint()` | method |
| `ExecuteEndHint` | `public void ExecuteEndHint()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BasicTooltipViewModel](../BasicTooltipViewModel/)
- [same namespace GameNotificationItemVM](../GameNotificationItemVM/)
- [same namespace GameNotificationVM](../GameNotificationVM/)
- [same namespace HintVM](../HintVM/)
