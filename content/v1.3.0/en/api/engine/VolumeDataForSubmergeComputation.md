---
title: "VolumeDataForSubmergeComputation"
description: "Auto-generated class reference for VolumeDataForSubmergeComputation."
---
# VolumeDataForSubmergeComputation

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct VolumeDataForSubmergeComputation`
**Base:** none
**File:** `TaleWorlds.Engine/VolumeDataForSubmergeComputation.cs`

## Overview

`VolumeDataForSubmergeComputation` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Height` | `public float Height { get; }` |
| `Width` | `public float Width { get; }` |
| `Depth` | `public float Depth { get; }` |
| `Up` | `public Vec3 Up { get; }` |
| `Side` | `public Vec3 Side { get; }` |
| `Forward` | `public Vec3 Forward { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
VolumeDataForSubmergeComputation instance = ...;
```

## See Also

- [Area Index](../)