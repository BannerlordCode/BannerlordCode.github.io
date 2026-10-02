---
title: "BasicTooltipViewModel"
description: "BasicTooltipViewModel: a public class in TaleWorlds.Core.ViewModelCollection, inheriting ViewModel; 9 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.Core.ViewModelCollection/Information/BasicTooltipViewModel.cs."
---
# BasicTooltipViewModel

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class BasicTooltipViewModel : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/BasicTooltipViewModel.cs`

## Overview

BasicTooltipViewModel lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/Information/BasicTooltipViewModel.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is BasicTooltipViewModel → ViewModel. It exposes 9 public/protected members: 5 methods, 4 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BasicTooltipViewModel is a top-level type in TaleWorlds.Core.ViewModelCollection, namespace differing from (TaleWorlds.Core.ViewModelCollection.Information) the module directory; inheritance chain BasicTooltipViewModel → ViewModel. The surface is method-led (methods 5/9, properties 0/9), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/Information/BasicTooltipViewModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BasicTooltipViewModel` | `public BasicTooltipViewModel(Func<string>hintTextDelegate)` | constructor |
| `BasicTooltipViewModel` | `public BasicTooltipViewModel(Func<List<TooltipProperty>>tooltipPropertiesDelegate)` | constructor |
| `BasicTooltipViewModel` | `public BasicTooltipViewModel(Action preBuiltTooltipCallback)` | constructor |
| `BasicTooltipViewModel` | `public BasicTooltipViewModel()` | constructor |
| `SetToolipCallback` | `public void SetToolipCallback(Func<List<TooltipProperty>>tooltipPropertiesDelegate)` | method |
| `SetGenericTooltipCallback` | `public void SetGenericTooltipCallback(Action preBuiltTooltipCallback)` | method |
| `SetHintCallback` | `public void SetHintCallback(Func<string>hintProperty)` | method |
| `ExecuteBeginHint` | `public void ExecuteBeginHint()` | method |
| `ExecuteEndHint` | `public void ExecuteEndHint()` | method |

## See Also

- [↑ core-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GameNotificationItemVM](../GameNotificationItemVM)
- [same namespace GameNotificationVM](../GameNotificationVM)
- [same namespace HintViewModel](../HintViewModel)
- [same namespace HintVM](../HintVM)
