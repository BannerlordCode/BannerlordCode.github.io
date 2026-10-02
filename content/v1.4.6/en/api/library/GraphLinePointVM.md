---
title: "GraphLinePointVM"
description: "GraphLinePointVM: a public class in TaleWorlds.Library, inheriting ViewModel; 3 exposed members (0 methods, 2 properties, 0 fields). Source: TaleWorlds.Library/Graph/GraphLinePointVM.cs."
---
# GraphLinePointVM

**Namespace:** `TaleWorlds.Library.Graph`
**Module:** `TaleWorlds.Library`
**Type:** `public class GraphLinePointVM : ViewModel`
**File:** `TaleWorlds.Library/Graph/GraphLinePointVM.cs`

## Overview

GraphLinePointVM lives in the TaleWorlds.Library module, source file TaleWorlds.Library/Graph/GraphLinePointVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GraphLinePointVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 3 public/protected members: 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GraphLinePointVM is a top-level type in TaleWorlds.Library, namespace differing from (TaleWorlds.Library.Graph) the module directory; inheritance chain GraphLinePointVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 2/3, methods 0/3), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/Graph/GraphLinePointVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GraphLinePointVM` | `public GraphLinePointVM(float horizontalValue, float verticalValue)` | constructor |
| `HorizontalValue` | `public float HorizontalValue` | property |
| `VerticalValue` | `public float VerticalValue` | property |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GraphLineVM](../GraphLineVM)
- [same namespace GraphVM](../GraphVM)
