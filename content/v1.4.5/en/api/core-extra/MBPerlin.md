---
title: "MBPerlin"
description: "Auto-generated class reference for MBPerlin."
---
# MBPerlin

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBPerlin`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/MBPerlin.cs`

## Overview

`MBPerlin` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Noise
`public static float Noise(float x, float y, float z)`

**Purpose:** **Purpose:** Executes the Noise logic.

```csharp
// Static call; no instance required
MBPerlin.Noise(0, 0, 0);
```

### NoiseVec3
`public static Vec3 NoiseVec3(float t)`

**Purpose:** **Purpose:** Executes the NoiseVec3 logic.

```csharp
// Static call; no instance required
MBPerlin.NoiseVec3(0);
```

### NoiseVec3
`public static Vec3 NoiseVec3(float x, float y, float z)`

**Purpose:** **Purpose:** Executes the NoiseVec3 logic.

```csharp
// Static call; no instance required
MBPerlin.NoiseVec3(0, 0, 0);
```

## Usage Example

```csharp
MBPerlin.Noise(0, 0, 0);
```

## See Also

- [Area Index](../)