<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PhysicsShape`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PhysicsShape

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** 类 class class
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`PhysicsShape` 是 `TaleWorlds.Engine` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)