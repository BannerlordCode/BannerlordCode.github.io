<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Mesh`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Mesh

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** class
**Area:** Engine

## Overview

> This is an auto-generated stub. `Mesh` is a class in the `TaleWorlds.Engine` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)