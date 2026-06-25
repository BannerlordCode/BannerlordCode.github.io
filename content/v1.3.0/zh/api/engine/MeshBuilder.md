---
title: "MeshBuilder"
description: "MeshBuilder 的自动生成类参考。"
---
# MeshBuilder

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public class MeshBuilder`
**Base:** 无
**File:** `TaleWorlds.Engine/MeshBuilder.cs`

## 概述

`MeshBuilder` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddFaceCorner
`public int AddFaceCorner(Vec3 position, Vec3 normal, Vec2 uvCoord, uint color)`

**用途 / Purpose:** **用途 / Purpose:** 将 face corner 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MeshBuilder 实例
MeshBuilder meshBuilder = ...;
var result = meshBuilder.AddFaceCorner(position, normal, uvCoord, 0);
```

### AddFace
`public int AddFace(int patchNode0, int patchNode1, int patchNode2)`

**用途 / Purpose:** **用途 / Purpose:** 将 face 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MeshBuilder 实例
MeshBuilder meshBuilder = ...;
var result = meshBuilder.AddFace(0, 0, 0);
```

### Clear
`public void Clear()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 MeshBuilder 实例
MeshBuilder meshBuilder = ...;
meshBuilder.Clear();
```

### Finalize
`public new Mesh Finalize()`

**用途 / Purpose:** **用途 / Purpose:** 在垃圾回收时执行清理工作（通常用于释放非托管资源）。

```csharp
// 先通过子系统 API 拿到 MeshBuilder 实例
MeshBuilder meshBuilder = ...;
var result = meshBuilder.Finalize();
```

### CreateUnitMesh
`public static Mesh CreateUnitMesh()`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 unit mesh 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MeshBuilder.CreateUnitMesh();
```

### CreateTilingWindowMesh
`public static Mesh CreateTilingWindowMesh(string baseMeshName, Vec2 meshSizeMin, Vec2 meshSizeMax, Vec2 borderThickness, Vec2 bgBorderThickness)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 tiling window mesh 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MeshBuilder.CreateTilingWindowMesh("example", meshSizeMin, meshSizeMax, borderThickness, bgBorderThickness);
```

### CreateTilingButtonMesh
`public static Mesh CreateTilingButtonMesh(string baseMeshName, Vec2 meshSizeMin, Vec2 meshSizeMax, Vec2 borderThickness)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 tiling button mesh 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MeshBuilder.CreateTilingButtonMesh("example", meshSizeMin, meshSizeMax, borderThickness);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MeshBuilder meshBuilder = ...;
meshBuilder.AddFaceCorner(position, normal, uvCoord, 0);
```

## 参见

- [本区域目录](../)