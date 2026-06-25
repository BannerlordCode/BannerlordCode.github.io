---
title: "GraphLineVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GraphLineVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GraphLineVM

**Namespace:** TaleWorlds.Library.Graph
**Module:** TaleWorlds.Library
**Type:** `public class GraphLineVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library.Graph/GraphLineVM.cs`

## Overview

`GraphLineVM` lives in `TaleWorlds.Library.Graph` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.Graph` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Points` | `public MBBindingList<GraphLinePointVM> Points { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `ID` | `public string ID { get; set; }` |

## Usage Example

```csharp
var example = new GraphLineVM();
```

## See Also

- [Complete Class Catalog](../catalog)