---
title: "GraphLinePointVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GraphLinePointVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GraphLinePointVM

**Namespace:** TaleWorlds.Library.Graph
**Module:** TaleWorlds.Library
**Type:** `public class GraphLinePointVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Library/Graph/GraphLinePointVM.cs`

## Overview

`GraphLinePointVM` lives in `TaleWorlds.Library.Graph` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.Graph` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HorizontalValue` | `public float HorizontalValue { get; set; }` |
| `VerticalValue` | `public float VerticalValue { get; set; }` |

## Usage Example

```csharp
var example = new GraphLinePointVM();
```

## See Also

- [Complete Class Catalog](../catalog)