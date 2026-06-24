<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBPerlin`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBPerlin

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBPerlin`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/MBPerlin.cs`

## Overview

`MBPerlin` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Noise
`public static float Noise(float x, float y, float z)`

**Purpose:** Handles logic related to `noise`.

### NoiseVec3
`public static Vec3 NoiseVec3(float t)`

**Purpose:** Handles logic related to `noise vec3`.

### NoiseVec3
`public static Vec3 NoiseVec3(float x, float y, float z)`

**Purpose:** Handles logic related to `noise vec3`.

## Usage Example

```csharp
MBPerlin.Noise(0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)