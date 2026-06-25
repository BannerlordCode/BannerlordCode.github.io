---
title: "GraphVM"
description: "Auto-generated class reference for GraphVM."
---
# GraphVM

**Namespace:** TaleWorlds.Library.Graph
**Module:** TaleWorlds.Library
**Type:** `public class GraphVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Library/Graph/GraphVM.cs`

## Overview

`GraphVM` lives in `TaleWorlds.Library.Graph` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.Graph` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Lines` | `public MBBindingList<GraphLineVM> Lines { get; set; }` |
| `HorizontalAxisLabel` | `public string HorizontalAxisLabel { get; set; }` |
| `VerticalAxisLabel` | `public string VerticalAxisLabel { get; set; }` |
| `HorizontalMinValue` | `public float HorizontalMinValue { get; set; }` |
| `HorizontalMaxValue` | `public float HorizontalMaxValue { get; set; }` |
| `VerticalMinValue` | `public float VerticalMinValue { get; set; }` |
| `VerticalMaxValue` | `public float VerticalMaxValue { get; set; }` |

## Key Methods

### Draw
`public void Draw( { "line", "points" })`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GraphVM from the subsystem API first
GraphVM graphVM = ...;
graphVM.Draw("line", });
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GraphVM graphVM = ...;
graphVM.Draw("line", });
```

## See Also

- [Area Index](../)