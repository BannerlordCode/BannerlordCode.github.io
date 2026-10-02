---
title: "GraphVM"
description: "GraphVM: a public class in TaleWorlds.Library, inheriting ViewModel; 9 exposed members (1 methods, 7 properties, 0 fields). Source: TaleWorlds.Library/Graph/GraphVM.cs."
---
# GraphVM

**Namespace:** `TaleWorlds.Library.Graph`
**Module:** `TaleWorlds.Library`
**Type:** `public class GraphVM : ViewModel`
**File:** `TaleWorlds.Library/Graph/GraphVM.cs`

## Overview

GraphVM lives in the TaleWorlds.Library module, source file TaleWorlds.Library/Graph/GraphVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GraphVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 9 public/protected members: 1 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GraphVM is a top-level type in TaleWorlds.Library, namespace differing from (TaleWorlds.Library.Graph) the module directory; inheritance chain GraphVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 7/9, methods 1/9), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/Graph/GraphVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GraphVM` | `public GraphVM(string horizontalAxisLabel, string verticalAxisLabel)` | constructor |
| `Draw` | `public void Draw([TupleElementNames(new string[]` | method |
| `MBBindingList` | `public MBBindingList<GraphLineVM>Lines` | property |
| `HorizontalAxisLabel` | `public string HorizontalAxisLabel` | property |
| `VerticalAxisLabel` | `public string VerticalAxisLabel` | property |
| `HorizontalMinValue` | `public float HorizontalMinValue` | property |
| `HorizontalMaxValue` | `public float HorizontalMaxValue` | property |
| `VerticalMinValue` | `public float VerticalMinValue` | property |
| `VerticalMaxValue` | `public float VerticalMaxValue` | property |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GraphLinePointVM](../GraphLinePointVM)
- [same namespace GraphLineVM](../GraphLineVM)
