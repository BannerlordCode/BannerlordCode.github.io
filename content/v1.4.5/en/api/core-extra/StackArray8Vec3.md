---
title: "StackArray8Vec3"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StackArray8Vec3`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StackArray8Vec3

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct StackArray8Vec3`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/Vec3.cs`

## Overview

`StackArray8Vec3` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public Vec3 this { get; }` |

## Usage Example

```csharp
var example = new StackArray8Vec3();
```

## See Also

- [Complete Class Catalog](../catalog)