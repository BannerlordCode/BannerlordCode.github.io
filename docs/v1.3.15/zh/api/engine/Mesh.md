<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Mesh`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Mesh

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** 类 class class
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`Mesh` 是 `TaleWorlds.Engine` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public static Mesh CreateMeshWithMaterial(Material material)
```

### CreateMesh

```csharp
public static Mesh CreateMesh(bool editable = true)
```

### GetBaseMesh

```csharp
public Mesh GetBaseMesh()
```

### GetFromResource

```csharp
public static Mesh GetFromResource(string meshName)
```

### GetRandomMeshWithVdecl

```csharp
public static Mesh GetRandomMeshWithVdecl(int inputLayout)
```

### SetColorAndStroke

```csharp
public void SetColorAndStroke(uint color, uint strokeColor, bool drawStroke)
```

### SetMeshRenderOrder

```csharp
public void SetMeshRenderOrder(int renderOrder)
```

### HasTag

```csharp
public bool HasTag(string str)
```

### CreateCopy

```csharp
public Mesh CreateCopy()
```

### SetMaterial

```csharp
public void SetMaterial(string newMaterialName)
```

### SetVectorArgument

```csharp
public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)
```

### SetVectorArgument2

```csharp
public void SetVectorArgument2(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)
```

### GetVectorArgument

```csharp
public Vec3 GetVectorArgument()
```

### GetVectorArgument2

```csharp
public Vec3 GetVectorArgument2()
```

### SetupAdditionalBoneBuffer

```csharp
public void SetupAdditionalBoneBuffer(int numBones)
```

### SetAdditionalBoneFrame

```csharp
public void SetAdditionalBoneFrame(int boneIndex, in MatrixFrame frame)
```

### SetMaterial

```csharp
public void SetMaterial(Material material)
```

### GetMaterial

```csharp
public Material GetMaterial()
```

### GetSecondMaterial

```csharp
public Material GetSecondMaterial()
```

### AddFaceCorner

```csharp
public int AddFaceCorner(Vec3 position, Vec3 normal, Vec2 uvCoord, uint color, UIntPtr lockHandle)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)