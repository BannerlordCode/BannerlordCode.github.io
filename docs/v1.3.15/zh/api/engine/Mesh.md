<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Mesh`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Mesh

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** `public sealed class Mesh : Resource`
**Base:** `Resource`
**领域:** engine

## 概述

`Mesh` 位于 `TaleWorlds.Engine`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
Mesh.CreateMeshWithMaterial(material);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
