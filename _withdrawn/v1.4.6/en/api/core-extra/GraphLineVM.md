---
title: "GraphLineVM"
description: "GraphLineVM: a public class in TaleWorlds.Library.Graph, inheriting ViewModel; 4 exposed members (0 methods, 3 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/Graph/GraphLineVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GraphLineVM

**Namespace:** `TaleWorlds.Library.Graph`
**Module:** `TaleWorlds.Library`
**Type:** `public class GraphLineVM : ViewModel`
**File:** `TaleWorlds.Library/Graph/GraphLineVM.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

GraphLineVM lives in the TaleWorlds.Library module, source file TaleWorlds.Library/Graph/GraphLineVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GraphLineVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 4 public/protected members: 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GraphLineVM lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library.Graph`, inheritance chain GraphLineVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 3/4, methods 0/4), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/Graph/GraphLineVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GraphLineVM` | `public GraphLineVM(string ID, string name)` | constructor |
| `MBBindingList` | `public MBBindingList<GraphLinePointVM>Points` | property |
| `Name` | `public string Name` | property |
| `ID` | `public string ID` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace GraphLinePointVM](../GraphLinePointVM/)
- [same namespace GraphVM](../GraphVM/)
