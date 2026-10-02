---
title: "HintViewModel"
description: "HintViewModel: a public class in TaleWorlds.Core.ViewModelCollection, inheriting ViewModel; 4 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.Core.ViewModelCollection/Information/HintViewModel.cs."
---
# HintViewModel

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class HintViewModel : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/HintViewModel.cs`

## Overview

HintViewModel lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/Information/HintViewModel.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is HintViewModel → ViewModel. It exposes 4 public/protected members: 2 methods, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HintViewModel is a top-level type in TaleWorlds.Core.ViewModelCollection, namespace differing from (TaleWorlds.Core.ViewModelCollection.Information) the module directory; inheritance chain HintViewModel → ViewModel. The surface is method-led (methods 2/4, properties 0/4), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/Information/HintViewModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HintViewModel` | `public HintViewModel()` | constructor |
| `HintViewModel` | `public HintViewModel(TextObject hintText, string uniqueName = null)` | constructor |
| `ExecuteBeginHint` | `public void ExecuteBeginHint()` | method |
| `ExecuteEndHint` | `public void ExecuteEndHint()` | method |

## See Also

- [↑ core-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BasicTooltipViewModel](../BasicTooltipViewModel)
- [same namespace GameNotificationItemVM](../GameNotificationItemVM)
- [same namespace GameNotificationVM](../GameNotificationVM)
- [same namespace HintVM](../HintVM)
