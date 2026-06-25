---
title: "MBPerlin"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBPerlin`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBPerlin

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBPerlin`
**Area:** core-extra

## Overview

`MBPerlin` lives in `TaleWorlds.Core`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
MBPerlin.Noise(0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
