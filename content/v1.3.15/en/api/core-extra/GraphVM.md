---
title: "GraphVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GraphVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `draw`.

## Usage Example

```csharp
var value = new GraphVM();
value.Draw("line", });
```

## See Also

- [Complete Class Catalog](../catalog)