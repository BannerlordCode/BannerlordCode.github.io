---
title: "StackArray8ThrowingPoint"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StackArray8ThrowingPoint`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StackArray8ThrowingPoint

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct StackArray8ThrowingPoint`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/StonePile.cs`

## Overview

`StackArray8ThrowingPoint` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public ThrowingPoint this { get; }` |

## Usage Example

```csharp
var example = new StackArray8ThrowingPoint();
```

## See Also

- [Complete Class Catalog](../catalog)