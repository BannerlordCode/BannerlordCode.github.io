---
title: "CameraState"
description: "Auto-generated class reference for CameraState."
---
# CameraState

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum CameraState`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/RangedSiegeWeapon.cs`

## Overview

`CameraState` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
CameraState instance = ...;
```

## See Also

- [Area Index](../)