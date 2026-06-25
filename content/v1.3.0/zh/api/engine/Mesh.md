---
title: "Mesh"
description: "Mesh 的自动生成类参考。"
---
# Mesh

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Mesh : Resource`
**Base:** `Resource`
**File:** `TaleWorlds.Engine/Mesh.cs`

## 概述

`Mesh` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `CullingMode` | `public MBMeshCullingMode CullingMode { get; set; }` |
| `MorphTime` | `public float MorphTime { get; set; }` |
| `Color` | `public uint Color { get; set; }` |
| `Color2` | `public uint Color2 { get; set; }` |
| `Billboard` | `public BillboardType Billboard { get; set; }` |
| `VisibilityMask` | `public VisibilityMaskFlags VisibilityMask { get; set; }` |
| `EditDataFaceCornerCount` | `public int EditDataFaceCornerCount { get; }` |

## 主要方法

### CreateMeshWithMaterial
`public static Mesh CreateMeshWithMaterial(Material material)`

**用途 / Purpose:** 构建一个新的 「mesh with material」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Mesh.CreateMeshWithMaterial(material);
```

### CreateMesh
`public static Mesh CreateMesh(bool editable = true)`

**用途 / Purpose:** 构建一个新的 「mesh」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Mesh.CreateMesh(false);
```

### GetBaseMesh
`public Mesh GetBaseMesh()`

**用途 / Purpose:** 读取并返回当前对象中 「base mesh」 的结果。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
var result = mesh.GetBaseMesh();
```

### GetFromResource
`public static Mesh GetFromResource(string meshName)`

**用途 / Purpose:** 读取并返回当前对象中 「from resource」 的结果。

```csharp
// 静态调用，不需要实例
Mesh.GetFromResource("example");
```

### GetRandomMeshWithVdecl
`public static Mesh GetRandomMeshWithVdecl(int inputLayout)`

**用途 / Purpose:** 读取并返回当前对象中 「random mesh with vdecl」 的结果。

```csharp
// 静态调用，不需要实例
Mesh.GetRandomMeshWithVdecl(0);
```

### SetColorAndStroke
`public void SetColorAndStroke(uint color, uint strokeColor, bool drawStroke)`

**用途 / Purpose:** 为 「color and stroke」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.SetColorAndStroke(0, 0, false);
```

### SetMeshRenderOrder
`public void SetMeshRenderOrder(int renderOrder)`

**用途 / Purpose:** 为 「mesh render order」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.SetMeshRenderOrder(0);
```

### HasTag
`public bool HasTag(string str)`

**用途 / Purpose:** 判断当前对象是否已经持有 「tag」。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
var result = mesh.HasTag("example");
```

### CreateCopy
`public Mesh CreateCopy()`

**用途 / Purpose:** 构建一个新的 「copy」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
var result = mesh.CreateCopy();
```

### SetMaterial
`public void SetMaterial(string newMaterialName)`

**用途 / Purpose:** 为 「material」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.SetMaterial("example");
```

### SetVectorArgument
`public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**用途 / Purpose:** 为 「vector argument」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.SetVectorArgument(0, 0, 0, 0);
```

### SetVectorArgument2
`public void SetVectorArgument2(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**用途 / Purpose:** 为 「vector argument2」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.SetVectorArgument2(0, 0, 0, 0);
```

### GetVectorArgument
`public Vec3 GetVectorArgument()`

**用途 / Purpose:** 读取并返回当前对象中 「vector argument」 的结果。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
var result = mesh.GetVectorArgument();
```

### GetVectorArgument2
`public Vec3 GetVectorArgument2()`

**用途 / Purpose:** 读取并返回当前对象中 「vector argument2」 的结果。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
var result = mesh.GetVectorArgument2();
```

### SetupAdditionalBoneBuffer
`public void SetupAdditionalBoneBuffer(int numBones)`

**用途 / Purpose:** 为 「up additional bone buffer」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.SetupAdditionalBoneBuffer(0);
```

### SetAdditionalBoneFrame
`public void SetAdditionalBoneFrame(int boneIndex, in MatrixFrame frame)`

**用途 / Purpose:** 为 「additional bone frame」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.SetAdditionalBoneFrame(0, frame);
```

### SetMaterial
`public void SetMaterial(Material material)`

**用途 / Purpose:** 为 「material」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.SetMaterial(material);
```

### GetMaterial
`public Material GetMaterial()`

**用途 / Purpose:** 读取并返回当前对象中 「material」 的结果。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
var result = mesh.GetMaterial();
```

### GetSecondMaterial
`public Material GetSecondMaterial()`

**用途 / Purpose:** 读取并返回当前对象中 「second material」 的结果。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
var result = mesh.GetSecondMaterial();
```

### AddFaceCorner
`public int AddFaceCorner(Vec3 position, Vec3 normal, Vec2 uvCoord, uint color, UIntPtr lockHandle)`

**用途 / Purpose:** 将 「face corner」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
var result = mesh.AddFaceCorner(position, normal, uvCoord, 0, lockHandle);
```

### AddFace
`public int AddFace(int patchNode0, int patchNode1, int patchNode2, UIntPtr lockHandle)`

**用途 / Purpose:** 将 「face」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
var result = mesh.AddFace(0, 0, 0, lockHandle);
```

### ClearMesh
`public void ClearMesh()`

**用途 / Purpose:** 清空当前对象中的「mesh」。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.ClearMesh();
```

### SetColorAlpha
`public void SetColorAlpha(uint newAlpha)`

**用途 / Purpose:** 为 「color alpha」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.SetColorAlpha(0);
```

### GetFaceCount
`public uint GetFaceCount()`

**用途 / Purpose:** 读取并返回当前对象中 「face count」 的结果。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
var result = mesh.GetFaceCount();
```

### GetFaceCornerCount
`public uint GetFaceCornerCount()`

**用途 / Purpose:** 读取并返回当前对象中 「face corner count」 的结果。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
var result = mesh.GetFaceCornerCount();
```

### ComputeNormals
`public void ComputeNormals()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.ComputeNormals();
```

### ComputeTangents
`public void ComputeTangents()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.ComputeTangents();
```

### AddMesh
`public void AddMesh(string meshResourceName, MatrixFrame meshFrame)`

**用途 / Purpose:** 将 「mesh」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.AddMesh("example", meshFrame);
```

### AddMesh
`public void AddMesh(Mesh mesh, MatrixFrame meshFrame)`

**用途 / Purpose:** 将 「mesh」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.AddMesh(mesh, meshFrame);
```

### GetLocalFrame
`public MatrixFrame GetLocalFrame()`

**用途 / Purpose:** 读取并返回当前对象中 「local frame」 的结果。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
var result = mesh.GetLocalFrame();
```

### SetLocalFrame
`public void SetLocalFrame(MatrixFrame meshFrame)`

**用途 / Purpose:** 为 「local frame」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.SetLocalFrame(meshFrame);
```

### SetVisibilityMask
`public void SetVisibilityMask(VisibilityMaskFlags visibilityMask)`

**用途 / Purpose:** 为 「visibility mask」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.SetVisibilityMask(visibilityMask);
```

### UpdateBoundingBox
`public void UpdateBoundingBox()`

**用途 / Purpose:** 重新计算并更新 「bounding box」 的最新表示。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.UpdateBoundingBox();
```

### SetAsNotEffectedBySeason
`public void SetAsNotEffectedBySeason()`

**用途 / Purpose:** 为 「as not effected by season」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.SetAsNotEffectedBySeason();
```

### GetBoundingBoxWidth
`public float GetBoundingBoxWidth()`

**用途 / Purpose:** 读取并返回当前对象中 「bounding box width」 的结果。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
var result = mesh.GetBoundingBoxWidth();
```

### GetBoundingBoxHeight
`public float GetBoundingBoxHeight()`

**用途 / Purpose:** 读取并返回当前对象中 「bounding box height」 的结果。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
var result = mesh.GetBoundingBoxHeight();
```

### GetBoundingBoxMin
`public Vec3 GetBoundingBoxMin()`

**用途 / Purpose:** 读取并返回当前对象中 「bounding box min」 的结果。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
var result = mesh.GetBoundingBoxMin();
```

### GetBoundingBoxMax
`public Vec3 GetBoundingBoxMax()`

**用途 / Purpose:** 读取并返回当前对象中 「bounding box max」 的结果。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
var result = mesh.GetBoundingBoxMax();
```

### AddTriangle
`public void AddTriangle(Vec3 p1, Vec3 p2, Vec3 p3, Vec2 uv1, Vec2 uv2, Vec2 uv3, uint color, UIntPtr lockHandle)`

**用途 / Purpose:** 将 「triangle」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.AddTriangle(p1, p2, p3, uv1, uv2, uv3, 0, lockHandle);
```

### AddTriangleWithVertexColors
`public void AddTriangleWithVertexColors(Vec3 p1, Vec3 p2, Vec3 p3, Vec2 uv1, Vec2 uv2, Vec2 uv3, uint c1, uint c2, uint c3, UIntPtr lockHandle)`

**用途 / Purpose:** 将 「triangle with vertex colors」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.AddTriangleWithVertexColors(p1, p2, p3, uv1, uv2, uv3, 0, 0, 0, lockHandle);
```

### HintIndicesDynamic
`public void HintIndicesDynamic()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.HintIndicesDynamic();
```

### HintVerticesDynamic
`public void HintVerticesDynamic()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.HintVerticesDynamic();
```

### RecomputeBoundingBox
`public void RecomputeBoundingBox()`

**用途 / Purpose:** 重新执行「bounding box」相关的计算并返回结果。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.RecomputeBoundingBox();
```

### SetEditDataFaceCornerVertexColor
`public void SetEditDataFaceCornerVertexColor(int index, uint color)`

**用途 / Purpose:** 为 「edit data face corner vertex color」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.SetEditDataFaceCornerVertexColor(0, 0);
```

### GetEditDataFaceCornerVertexColor
`public uint GetEditDataFaceCornerVertexColor(int index)`

**用途 / Purpose:** 读取并返回当前对象中 「edit data face corner vertex color」 的结果。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
var result = mesh.GetEditDataFaceCornerVertexColor(0);
```

### PreloadForRendering
`public void PreloadForRendering()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.PreloadForRendering();
```

### SetContourColor
`public void SetContourColor(Vec3 color, bool alwaysVisible, bool maskMesh)`

**用途 / Purpose:** 为 「contour color」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.SetContourColor(color, false, false);
```

### DisableContour
`public void DisableContour()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.DisableContour();
```

### SetExternalBoundingBox
`public void SetExternalBoundingBox(BoundingBox bbox)`

**用途 / Purpose:** 为 「external bounding box」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.SetExternalBoundingBox(bbox);
```

### AddEditDataUser
`public void AddEditDataUser()`

**用途 / Purpose:** 将 「edit data user」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.AddEditDataUser();
```

### ReleaseEditDataUser
`public void ReleaseEditDataUser()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.ReleaseEditDataUser();
```

### SetEditDataPolicy
`public void SetEditDataPolicy(EditDataPolicy policy)`

**用途 / Purpose:** 为 「edit data policy」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.SetEditDataPolicy(policy);
```

### LockEditDataWrite
`public UIntPtr LockEditDataWrite()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
var result = mesh.LockEditDataWrite();
```

### UnlockEditDataWrite
`public void UnlockEditDataWrite(UIntPtr handle)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.UnlockEditDataWrite(handle);
```

### SetCustomClipPlane
`public void SetCustomClipPlane(Vec3 clipPlanePosition, Vec3 clipPlaneNormal, int planeIndex)`

**用途 / Purpose:** 为 「custom clip plane」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mesh 实例
Mesh mesh = ...;
mesh.SetCustomClipPlane(clipPlanePosition, clipPlaneNormal, 0);
```

## 使用示例

```csharp
Mesh.CreateMeshWithMaterial(material);
```

## 参见

- [本区域目录](../)