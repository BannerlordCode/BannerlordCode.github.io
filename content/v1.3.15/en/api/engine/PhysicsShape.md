---
title: "PhysicsShape"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PhysicsShape`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PhysicsShape

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class PhysicsShape : Resource`
**Base:** `Resource`
**Area:** engine

## Overview

`PhysicsShape` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetFromResource
`public static PhysicsShape GetFromResource(string bodyName, bool mayReturnNull = false)`

**Purpose:** Gets the current value of `from resource`.

### AddPreloadQueueWithName
`public static void AddPreloadQueueWithName(string bodyName, Vec3 scale)`

**Purpose:** Adds `preload queue with name` to the current collection or state.

### ProcessPreloadQueue
`public static void ProcessPreloadQueue()`

**Purpose:** Handles logic related to `process preload queue`.

### UnloadDynamicBodies
`public static void UnloadDynamicBodies()`

**Purpose:** Handles logic related to `unload dynamic bodies`.

### CreateCopy
`public PhysicsShape CreateCopy()`

**Purpose:** Creates a new `copy` instance or object.

### SphereCount
`public int SphereCount()`

**Purpose:** Handles logic related to `sphere count`.

### GetSphere
`public void GetSphere(ref SphereData data, int index)`

**Purpose:** Gets the current value of `sphere`.

### GetSphere
`public void GetSphere(ref SphereData data, out PhysicsMaterial material, int index)`

**Purpose:** Gets the current value of `sphere`.

### GetDominantMaterialForTriangleMesh
`public PhysicsMaterial GetDominantMaterialForTriangleMesh(int meshIndex)`

**Purpose:** Gets the current value of `dominant material for triangle mesh`.

### GetName
`public string GetName()`

**Purpose:** Gets the current value of `name`.

### TriangleMeshCount
`public int TriangleMeshCount()`

**Purpose:** Handles logic related to `triangle mesh count`.

### TriangleCountInTriangleMesh
`public int TriangleCountInTriangleMesh(int meshIndex)`

**Purpose:** Handles logic related to `triangle count in triangle mesh`.

### GetTriangle
`public void GetTriangle(Vec3 triangle, int meshIndex, int triangleIndex)`

**Purpose:** Gets the current value of `triangle`.

### Prepare
`public void Prepare()`

**Purpose:** Handles logic related to `prepare`.

### CapsuleCount
`public int CapsuleCount()`

**Purpose:** Handles logic related to `capsule count`.

### AddCapsule
`public void AddCapsule(CapsuleData data)`

**Purpose:** Adds `capsule` to the current collection or state.

### InitDescription
`public void InitDescription()`

**Purpose:** Initializes the state, resources, or bindings for `description`.

### AddSphere
`public void AddSphere(SphereData data)`

**Purpose:** Adds `sphere` to the current collection or state.

### SetCapsule
`public void SetCapsule(CapsuleData data, int index)`

**Purpose:** Sets the value or state of `capsule`.

### GetCapsule
`public void GetCapsule(ref CapsuleData data, int index)`

**Purpose:** Gets the current value of `capsule`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
PhysicsShape.GetFromResource("example", false);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
