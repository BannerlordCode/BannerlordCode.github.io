<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PhysicsShape`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PhysicsShape

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** class
**Area:** Engine

## Overview

> This is an auto-generated stub. `PhysicsShape` is a class in the `TaleWorlds.Engine` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### GetFromResource

```csharp
public static PhysicsShape GetFromResource(string bodyName, bool mayReturnNull = false)
```

### AddPreloadQueueWithName

```csharp
public static void AddPreloadQueueWithName(string bodyName, Vec3 scale)
```

### ProcessPreloadQueue

```csharp
public static void ProcessPreloadQueue()
```

### UnloadDynamicBodies

```csharp
public static void UnloadDynamicBodies()
```

### CreateCopy

```csharp
public PhysicsShape CreateCopy()
```

### SphereCount

```csharp
public int SphereCount()
```

### GetSphere

```csharp
public void GetSphere(ref SphereData data, int index)
```

### GetSphere

```csharp
public void GetSphere(ref SphereData data, out PhysicsMaterial material, int index)
```

### GetDominantMaterialForTriangleMesh

```csharp
public PhysicsMaterial GetDominantMaterialForTriangleMesh(int meshIndex)
```

### GetName

```csharp
public string GetName()
```

### TriangleMeshCount

```csharp
public int TriangleMeshCount()
```

### TriangleCountInTriangleMesh

```csharp
public int TriangleCountInTriangleMesh(int meshIndex)
```

### GetTriangle

```csharp
public void GetTriangle(Vec3 triangle, int meshIndex, int triangleIndex)
```

### Prepare

```csharp
public void Prepare()
```

### CapsuleCount

```csharp
public int CapsuleCount()
```

### AddCapsule

```csharp
public void AddCapsule(CapsuleData data)
```

### InitDescription

```csharp
public void InitDescription()
```

### AddSphere

```csharp
public void AddSphere(SphereData data)
```

### SetCapsule

```csharp
public void SetCapsule(CapsuleData data, int index)
```

### GetCapsule

```csharp
public void GetCapsule(ref CapsuleData data, int index)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)