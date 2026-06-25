---
title: "ChairUsePoint"
description: "Auto-generated class reference for ChairUsePoint."
---
# ChairUsePoint

**Namespace:** SandBox.Objects.AnimationPoints
**Module:** SandBox.Objects
**Type:** `public class ChairUsePoint : AnimationPoint`
**Base:** `AnimationPoint`
**File:** `Modules.SandBox/SandBox/SandBox.Objects.AnimationPoints/ChairUsePoint.cs`

## Overview

`ChairUsePoint` lives in `SandBox.Objects.AnimationPoints` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.AnimationPoints` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**Purpose:** Invoked when the use event is raised.

```csharp
// Obtain an instance of ChairUsePoint from the subsystem API first
ChairUsePoint chairUsePoint = ...;
chairUsePoint.OnUse(userAgent, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ChairUsePoint chairUsePoint = ...;
chairUsePoint.OnUse(userAgent, 0);
```

## See Also

- [Area Index](../)