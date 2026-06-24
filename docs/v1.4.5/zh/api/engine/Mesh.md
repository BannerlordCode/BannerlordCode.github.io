<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Mesh`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Mesh

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Mesh : Resource`
**Base:** `Resource`
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/Mesh.cs`

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

## 主要方法

### CreateMeshWithMaterial
`public static Mesh CreateMeshWithMaterial(Material material)`

**用途 / Purpose:** 创建一个 `mesh with material` 实例或对象。

### CreateMesh
`public static Mesh CreateMesh(bool editable = true)`

**用途 / Purpose:** 创建一个 `mesh` 实例或对象。

### GetBaseMesh
`public Mesh GetBaseMesh()`

**用途 / Purpose:** 获取 `base mesh` 的当前值。

### GetFromResource
`public static Mesh GetFromResource(string meshName)`

**用途 / Purpose:** 获取 `from resource` 的当前值。

### GetRandomMeshWithVdecl
`public static Mesh GetRandomMeshWithVdecl(int inputLayout)`

**用途 / Purpose:** 获取 `random mesh with vdecl` 的当前值。

### SetColorAndStroke
`public void SetColorAndStroke(uint color, uint strokeColor, bool drawStroke)`

**用途 / Purpose:** 设置 `color and stroke` 的值或状态。

### SetMeshRenderOrder
`public void SetMeshRenderOrder(int renderOrder)`

**用途 / Purpose:** 设置 `mesh render order` 的值或状态。

### HasTag
`public bool HasTag(string str)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `tag`。

### CreateCopy
`public Mesh CreateCopy()`

**用途 / Purpose:** 创建一个 `copy` 实例或对象。

### SetMaterial
`public void SetMaterial(string newMaterialName)`

**用途 / Purpose:** 设置 `material` 的值或状态。

### SetVectorArgument
`public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**用途 / Purpose:** 设置 `vector argument` 的值或状态。

### SetVectorArgument2
`public void SetVectorArgument2(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**用途 / Purpose:** 设置 `vector argument2` 的值或状态。

### GetVectorArgument
`public Vec3 GetVectorArgument()`

**用途 / Purpose:** 获取 `vector argument` 的当前值。

### GetVectorArgument2
`public Vec3 GetVectorArgument2()`

**用途 / Purpose:** 获取 `vector argument2` 的当前值。

### SetupAdditionalBoneBuffer
`public void SetupAdditionalBoneBuffer(int numBones)`

**用途 / Purpose:** 设置 `up additional bone buffer` 的值或状态。

### SetAdditionalBoneFrame
`public void SetAdditionalBoneFrame(int boneIndex, in MatrixFrame frame)`

**用途 / Purpose:** 设置 `additional bone frame` 的值或状态。

### SetMaterial
`public void SetMaterial(Material material)`

**用途 / Purpose:** 设置 `material` 的值或状态。

### GetMaterial
`public Material GetMaterial()`

**用途 / Purpose:** 获取 `material` 的当前值。

### GetSecondMaterial
`public Material GetSecondMaterial()`

**用途 / Purpose:** 获取 `second material` 的当前值。

### AddFaceCorner
`public int AddFaceCorner(Vec3 position, Vec3 normal, Vec2 uvCoord, uint color, UIntPtr lockHandle)`

**用途 / Purpose:** 向当前集合/状态中添加 `face corner`。

### AddFace
`public int AddFace(int patchNode0, int patchNode1, int patchNode2, UIntPtr lockHandle)`

**用途 / Purpose:** 向当前集合/状态中添加 `face`。

### ClearMesh
`public void ClearMesh()`

**用途 / Purpose:** 处理 `clear mesh` 相关逻辑。

### SetColorAlpha
`public void SetColorAlpha(uint newAlpha)`

**用途 / Purpose:** 设置 `color alpha` 的值或状态。

### GetFaceCount
`public uint GetFaceCount()`

**用途 / Purpose:** 获取 `face count` 的当前值。

### GetFaceCornerCount
`public uint GetFaceCornerCount()`

**用途 / Purpose:** 获取 `face corner count` 的当前值。

### ComputeNormals
`public void ComputeNormals()`

**用途 / Purpose:** 处理 `compute normals` 相关逻辑。

### ComputeTangents
`public void ComputeTangents()`

**用途 / Purpose:** 处理 `compute tangents` 相关逻辑。

### AddMesh
`public void AddMesh(string meshResourceName, MatrixFrame meshFrame)`

**用途 / Purpose:** 向当前集合/状态中添加 `mesh`。

### AddMesh
`public void AddMesh(Mesh mesh, MatrixFrame meshFrame)`

**用途 / Purpose:** 向当前集合/状态中添加 `mesh`。

### GetLocalFrame
`public MatrixFrame GetLocalFrame()`

**用途 / Purpose:** 获取 `local frame` 的当前值。

### SetLocalFrame
`public void SetLocalFrame(MatrixFrame meshFrame)`

**用途 / Purpose:** 设置 `local frame` 的值或状态。

### SetVisibilityMask
`public void SetVisibilityMask(VisibilityMaskFlags visibilityMask)`

**用途 / Purpose:** 设置 `visibility mask` 的值或状态。

### UpdateBoundingBox
`public void UpdateBoundingBox()`

**用途 / Purpose:** 更新 `bounding box` 的状态或数据。

### SetAsNotEffectedBySeason
`public void SetAsNotEffectedBySeason()`

**用途 / Purpose:** 设置 `as not effected by season` 的值或状态。

### GetBoundingBoxWidth
`public float GetBoundingBoxWidth()`

**用途 / Purpose:** 获取 `bounding box width` 的当前值。

### GetBoundingBoxHeight
`public float GetBoundingBoxHeight()`

**用途 / Purpose:** 获取 `bounding box height` 的当前值。

### GetBoundingBoxMin
`public Vec3 GetBoundingBoxMin()`

**用途 / Purpose:** 获取 `bounding box min` 的当前值。

### GetBoundingBoxMax
`public Vec3 GetBoundingBoxMax()`

**用途 / Purpose:** 获取 `bounding box max` 的当前值。

### AddTriangle
`public void AddTriangle(Vec3 p1, Vec3 p2, Vec3 p3, Vec2 uv1, Vec2 uv2, Vec2 uv3, uint color, UIntPtr lockHandle)`

**用途 / Purpose:** 向当前集合/状态中添加 `triangle`。

### AddTriangleWithVertexColors
`public void AddTriangleWithVertexColors(Vec3 p1, Vec3 p2, Vec3 p3, Vec2 uv1, Vec2 uv2, Vec2 uv3, uint c1, uint c2, uint c3, UIntPtr lockHandle)`

**用途 / Purpose:** 向当前集合/状态中添加 `triangle with vertex colors`。

### HintIndicesDynamic
`public void HintIndicesDynamic()`

**用途 / Purpose:** 处理 `hint indices dynamic` 相关逻辑。

### HintVerticesDynamic
`public void HintVerticesDynamic()`

**用途 / Purpose:** 处理 `hint vertices dynamic` 相关逻辑。

### RecomputeBoundingBox
`public void RecomputeBoundingBox()`

**用途 / Purpose:** 处理 `recompute bounding box` 相关逻辑。

### SetEditDataFaceCornerVertexColor
`public void SetEditDataFaceCornerVertexColor(int index, uint color)`

**用途 / Purpose:** 设置 `edit data face corner vertex color` 的值或状态。

### GetEditDataFaceCornerVertexColor
`public uint GetEditDataFaceCornerVertexColor(int index)`

**用途 / Purpose:** 获取 `edit data face corner vertex color` 的当前值。

### PreloadForRendering
`public void PreloadForRendering()`

**用途 / Purpose:** 处理 `preload for rendering` 相关逻辑。

### SetContourColor
`public void SetContourColor(Vec3 color, bool alwaysVisible, bool maskMesh)`

**用途 / Purpose:** 设置 `contour color` 的值或状态。

### DisableContour
`public void DisableContour()`

**用途 / Purpose:** 处理 `disable contour` 相关逻辑。

### SetExternalBoundingBox
`public void SetExternalBoundingBox(BoundingBox bbox)`

**用途 / Purpose:** 设置 `external bounding box` 的值或状态。

### AddEditDataUser
`public void AddEditDataUser()`

**用途 / Purpose:** 向当前集合/状态中添加 `edit data user`。

### ReleaseEditDataUser
`public void ReleaseEditDataUser()`

**用途 / Purpose:** 处理 `release edit data user` 相关逻辑。

### SetEditDataPolicy
`public void SetEditDataPolicy(EditDataPolicy policy)`

**用途 / Purpose:** 设置 `edit data policy` 的值或状态。

### LockEditDataWrite
`public UIntPtr LockEditDataWrite()`

**用途 / Purpose:** 处理 `lock edit data write` 相关逻辑。

### UnlockEditDataWrite
`public void UnlockEditDataWrite(UIntPtr handle)`

**用途 / Purpose:** 处理 `unlock edit data write` 相关逻辑。

### SetCustomClipPlane
`public void SetCustomClipPlane(Vec3 clipPlanePosition, Vec3 clipPlaneNormal, int planeIndex)`

**用途 / Purpose:** 设置 `custom clip plane` 的值或状态。

### GetClothLinearVelocityMultiplier
`public float GetClothLinearVelocityMultiplier()`

**用途 / Purpose:** 获取 `cloth linear velocity multiplier` 的当前值。

### HasCloth
`public bool HasCloth()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `cloth`。

## 使用示例

```csharp
Mesh.CreateMeshWithMaterial(material);
```

## 参见

- [完整类目录](../catalog)