---
title: "PhysicsShape"
description: "Auto-generated class reference for PhysicsShape."
---
# PhysicsShape

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class PhysicsShape : Resource`
**Base:** `Resource`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/PhysicsShape.cs`

## Overview

`PhysicsShape` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetFromResource
`public static PhysicsShape GetFromResource(string bodyName, bool mayReturnNull = false)`

**Purpose:** Reads and returns the `from resource` value held by the current object.

```csharp
// Static call; no instance required
PhysicsShape.GetFromResource("example", false);
```

### AddPreloadQueueWithName
`public static void AddPreloadQueueWithName(string bodyName, Vec3 scale)`

**Purpose:** Adds `preload queue with name` to the current collection or state.

```csharp
// Static call; no instance required
PhysicsShape.AddPreloadQueueWithName("example", scale);
```

### ProcessPreloadQueue
`public static void ProcessPreloadQueue()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
PhysicsShape.ProcessPreloadQueue();
```

### UnloadDynamicBodies
`public static void UnloadDynamicBodies()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
PhysicsShape.UnloadDynamicBodies();
```

### CreateCopy
`public PhysicsShape CreateCopy()`

**Purpose:** Constructs a new `copy` entity and returns it to the caller.

```csharp
// Obtain an instance of PhysicsShape from the subsystem API first
PhysicsShape physicsShape = ...;
var result = physicsShape.CreateCopy();
```

### SphereCount
`public int SphereCount()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PhysicsShape from the subsystem API first
PhysicsShape physicsShape = ...;
var result = physicsShape.SphereCount();
```

### GetSphere
`public void GetSphere(ref SphereData data, int index)`

**Purpose:** Reads and returns the `sphere` value held by the current object.

```csharp
// Obtain an instance of PhysicsShape from the subsystem API first
PhysicsShape physicsShape = ...;
physicsShape.GetSphere(data, 0);
```

### GetSphere
`public void GetSphere(ref SphereData data, out PhysicsMaterial material, int index)`

**Purpose:** Reads and returns the `sphere` value held by the current object.

```csharp
// Obtain an instance of PhysicsShape from the subsystem API first
PhysicsShape physicsShape = ...;
physicsShape.GetSphere(data, material, 0);
```

### GetDominantMaterialForTriangleMesh
`public PhysicsMaterial GetDominantMaterialForTriangleMesh(int meshIndex)`

**Purpose:** Reads and returns the `dominant material for triangle mesh` value held by the current object.

```csharp
// Obtain an instance of PhysicsShape from the subsystem API first
PhysicsShape physicsShape = ...;
var result = physicsShape.GetDominantMaterialForTriangleMesh(0);
```

### GetName
`public string GetName()`

**Purpose:** Reads and returns the `name` value held by the current object.

```csharp
// Obtain an instance of PhysicsShape from the subsystem API first
PhysicsShape physicsShape = ...;
var result = physicsShape.GetName();
```

### TriangleMeshCount
`public int TriangleMeshCount()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PhysicsShape from the subsystem API first
PhysicsShape physicsShape = ...;
var result = physicsShape.TriangleMeshCount();
```

### TriangleCountInTriangleMesh
`public int TriangleCountInTriangleMesh(int meshIndex)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PhysicsShape from the subsystem API first
PhysicsShape physicsShape = ...;
var result = physicsShape.TriangleCountInTriangleMesh(0);
```

### GetTriangle
`public void GetTriangle(Vec3 triangle, int meshIndex, int triangleIndex)`

**Purpose:** Reads and returns the `triangle` value held by the current object.

```csharp
// Obtain an instance of PhysicsShape from the subsystem API first
PhysicsShape physicsShape = ...;
physicsShape.GetTriangle(triangle, 0, 0);
```

### Prepare
`public void Prepare()`

**Purpose:** Finishes prerequisite setup for the current object's operation.

```csharp
// Obtain an instance of PhysicsShape from the subsystem API first
PhysicsShape physicsShape = ...;
physicsShape.Prepare();
```

### CapsuleCount
`public int CapsuleCount()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PhysicsShape from the subsystem API first
PhysicsShape physicsShape = ...;
var result = physicsShape.CapsuleCount();
```

### AddCapsule
`public void AddCapsule(CapsuleData data)`

**Purpose:** Adds `capsule` to the current collection or state.

```csharp
// Obtain an instance of PhysicsShape from the subsystem API first
PhysicsShape physicsShape = ...;
physicsShape.AddCapsule(data);
```

### InitDescription
`public void InitDescription()`

**Purpose:** Prepares the resources, state, or bindings required by `description`.

```csharp
// Obtain an instance of PhysicsShape from the subsystem API first
PhysicsShape physicsShape = ...;
physicsShape.InitDescription();
```

### AddSphere
`public void AddSphere(SphereData data)`

**Purpose:** Adds `sphere` to the current collection or state.

```csharp
// Obtain an instance of PhysicsShape from the subsystem API first
PhysicsShape physicsShape = ...;
physicsShape.AddSphere(data);
```

### SetCapsule
`public void SetCapsule(CapsuleData data, int index)`

**Purpose:** Assigns a new value to `capsule` and updates the object's internal state.

```csharp
// Obtain an instance of PhysicsShape from the subsystem API first
PhysicsShape physicsShape = ...;
physicsShape.SetCapsule(data, 0);
```

### GetCapsule
`public void GetCapsule(ref CapsuleData data, int index)`

**Purpose:** Reads and returns the `capsule` value held by the current object.

```csharp
// Obtain an instance of PhysicsShape from the subsystem API first
PhysicsShape physicsShape = ...;
physicsShape.GetCapsule(data, 0);
```

### GetCapsule
`public void GetCapsule(ref CapsuleData data, out PhysicsMaterial material, int index)`

**Purpose:** Reads and returns the `capsule` value held by the current object.

```csharp
// Obtain an instance of PhysicsShape from the subsystem API first
PhysicsShape physicsShape = ...;
physicsShape.GetCapsule(data, material, 0);
```

### GetBoundingBox
`public void GetBoundingBox(out BoundingBox boundingBox)`

**Purpose:** Reads and returns the `bounding box` value held by the current object.

```csharp
// Obtain an instance of PhysicsShape from the subsystem API first
PhysicsShape physicsShape = ...;
physicsShape.GetBoundingBox(boundingBox);
```

### GetBoundingBoxCenter
`public Vec3 GetBoundingBoxCenter()`

**Purpose:** Reads and returns the `bounding box center` value held by the current object.

```csharp
// Obtain an instance of PhysicsShape from the subsystem API first
PhysicsShape physicsShape = ...;
var result = physicsShape.GetBoundingBoxCenter();
```

### Transform
`public void Transform(ref MatrixFrame frame)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PhysicsShape from the subsystem API first
PhysicsShape physicsShape = ...;
physicsShape.Transform(frame);
```

### Clear
`public void Clear()`

**Purpose:** Removes all content from the current object.

```csharp
// Obtain an instance of PhysicsShape from the subsystem API first
PhysicsShape physicsShape = ...;
physicsShape.Clear();
```

## Usage Example

```csharp
PhysicsShape.GetFromResource("example", false);
```

## See Also

- [Area Index](../)