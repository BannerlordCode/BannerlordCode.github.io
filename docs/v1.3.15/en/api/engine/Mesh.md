<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Mesh`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Mesh

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Mesh : Resource`
**Base:** `Resource`
**Area:** engine

## Overview

`Mesh` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public static Mesh CreateMeshWithMaterial(Material material)`

**Purpose:** Creates a new `mesh with material` instance or object.

### CreateMesh
`public static Mesh CreateMesh(bool editable = true)`

**Purpose:** Creates a new `mesh` instance or object.

### GetBaseMesh
`public Mesh GetBaseMesh()`

**Purpose:** Gets the current value of `base mesh`.

### GetFromResource
`public static Mesh GetFromResource(string meshName)`

**Purpose:** Gets the current value of `from resource`.

### GetRandomMeshWithVdecl
`public static Mesh GetRandomMeshWithVdecl(int inputLayout)`

**Purpose:** Gets the current value of `random mesh with vdecl`.

### SetColorAndStroke
`public void SetColorAndStroke(uint color, uint strokeColor, bool drawStroke)`

**Purpose:** Sets the value or state of `color and stroke`.

### SetMeshRenderOrder
`public void SetMeshRenderOrder(int renderOrder)`

**Purpose:** Sets the value or state of `mesh render order`.

### HasTag
`public bool HasTag(string str)`

**Purpose:** Checks whether the current object has/contains `tag`.

### CreateCopy
`public Mesh CreateCopy()`

**Purpose:** Creates a new `copy` instance or object.

### SetMaterial
`public void SetMaterial(string newMaterialName)`

**Purpose:** Sets the value or state of `material`.

### SetVectorArgument
`public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**Purpose:** Sets the value or state of `vector argument`.

### SetVectorArgument2
`public void SetVectorArgument2(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**Purpose:** Sets the value or state of `vector argument2`.

### GetVectorArgument
`public Vec3 GetVectorArgument()`

**Purpose:** Gets the current value of `vector argument`.

### GetVectorArgument2
`public Vec3 GetVectorArgument2()`

**Purpose:** Gets the current value of `vector argument2`.

### SetupAdditionalBoneBuffer
`public void SetupAdditionalBoneBuffer(int numBones)`

**Purpose:** Sets the value or state of `up additional bone buffer`.

### SetAdditionalBoneFrame
`public void SetAdditionalBoneFrame(int boneIndex, in MatrixFrame frame)`

**Purpose:** Sets the value or state of `additional bone frame`.

### SetMaterial
`public void SetMaterial(Material material)`

**Purpose:** Sets the value or state of `material`.

### GetMaterial
`public Material GetMaterial()`

**Purpose:** Gets the current value of `material`.

### GetSecondMaterial
`public Material GetSecondMaterial()`

**Purpose:** Gets the current value of `second material`.

### AddFaceCorner
`public int AddFaceCorner(Vec3 position, Vec3 normal, Vec2 uvCoord, uint color, UIntPtr lockHandle)`

**Purpose:** Adds `face corner` to the current collection or state.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
Mesh.CreateMeshWithMaterial(material);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
