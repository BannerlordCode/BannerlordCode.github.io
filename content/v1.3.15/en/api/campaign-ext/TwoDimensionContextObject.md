---
title: "TwoDimensionContextObject"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TwoDimensionContextObject`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TwoDimensionContextObject

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class TwoDimensionContextObject`
**Base:** none
**File:** `TaleWorlds.TwoDimension/TwoDimensionContextObject.cs`

## Overview

`TwoDimensionContextObject` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Context` | `public TwoDimensionContext Context { get; }` |

## Usage Example

```csharp
var value = new TwoDimensionContextObject();
```

## See Also

- [Complete Class Catalog](../catalog)