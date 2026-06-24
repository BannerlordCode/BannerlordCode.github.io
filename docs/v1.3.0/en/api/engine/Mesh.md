<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Mesh`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Mesh

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Mesh : Resource`
**Base:** `Resource`
**File:** `TaleWorlds.Engine/Mesh.cs`

## Overview

`Mesh` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

### AddFace
`public int AddFace(int patchNode0, int patchNode1, int patchNode2, UIntPtr lockHandle)`

**Purpose:** Adds `face` to the current collection or state.

### ClearMesh
`public void ClearMesh()`

**Purpose:** Handles logic related to `clear mesh`.

### SetColorAlpha
`public void SetColorAlpha(uint newAlpha)`

**Purpose:** Sets the value or state of `color alpha`.

### GetFaceCount
`public uint GetFaceCount()`

**Purpose:** Gets the current value of `face count`.

### GetFaceCornerCount
`public uint GetFaceCornerCount()`

**Purpose:** Gets the current value of `face corner count`.

### ComputeNormals
`public void ComputeNormals()`

**Purpose:** Handles logic related to `compute normals`.

### ComputeTangents
`public void ComputeTangents()`

**Purpose:** Handles logic related to `compute tangents`.

### AddMesh
`public void AddMesh(string meshResourceName, MatrixFrame meshFrame)`

**Purpose:** Adds `mesh` to the current collection or state.

### AddMesh
`public void AddMesh(Mesh mesh, MatrixFrame meshFrame)`

**Purpose:** Adds `mesh` to the current collection or state.

### GetLocalFrame
`public MatrixFrame GetLocalFrame()`

**Purpose:** Gets the current value of `local frame`.

### SetLocalFrame
`public void SetLocalFrame(MatrixFrame meshFrame)`

**Purpose:** Sets the value or state of `local frame`.

### SetVisibilityMask
`public void SetVisibilityMask(VisibilityMaskFlags visibilityMask)`

**Purpose:** Sets the value or state of `visibility mask`.

### UpdateBoundingBox
`public void UpdateBoundingBox()`

**Purpose:** Updates the state or data of `bounding box`.

### SetAsNotEffectedBySeason
`public void SetAsNotEffectedBySeason()`

**Purpose:** Sets the value or state of `as not effected by season`.

### GetBoundingBoxWidth
`public float GetBoundingBoxWidth()`

**Purpose:** Gets the current value of `bounding box width`.

### GetBoundingBoxHeight
`public float GetBoundingBoxHeight()`

**Purpose:** Gets the current value of `bounding box height`.

### GetBoundingBoxMin
`public Vec3 GetBoundingBoxMin()`

**Purpose:** Gets the current value of `bounding box min`.

### GetBoundingBoxMax
`public Vec3 GetBoundingBoxMax()`

**Purpose:** Gets the current value of `bounding box max`.

### AddTriangle
`public void AddTriangle(Vec3 p1, Vec3 p2, Vec3 p3, Vec2 uv1, Vec2 uv2, Vec2 uv3, uint color, UIntPtr lockHandle)`

**Purpose:** Adds `triangle` to the current collection or state.

### AddTriangleWithVertexColors
`public void AddTriangleWithVertexColors(Vec3 p1, Vec3 p2, Vec3 p3, Vec2 uv1, Vec2 uv2, Vec2 uv3, uint c1, uint c2, uint c3, UIntPtr lockHandle)`

**Purpose:** Adds `triangle with vertex colors` to the current collection or state.

### HintIndicesDynamic
`public void HintIndicesDynamic()`

**Purpose:** Handles logic related to `hint indices dynamic`.

### HintVerticesDynamic
`public void HintVerticesDynamic()`

**Purpose:** Handles logic related to `hint vertices dynamic`.

### RecomputeBoundingBox
`public void RecomputeBoundingBox()`

**Purpose:** Handles logic related to `recompute bounding box`.

### SetEditDataFaceCornerVertexColor
`public void SetEditDataFaceCornerVertexColor(int index, uint color)`

**Purpose:** Sets the value or state of `edit data face corner vertex color`.

### GetEditDataFaceCornerVertexColor
`public uint GetEditDataFaceCornerVertexColor(int index)`

**Purpose:** Gets the current value of `edit data face corner vertex color`.

### PreloadForRendering
`public void PreloadForRendering()`

**Purpose:** Handles logic related to `preload for rendering`.

### SetContourColor
`public void SetContourColor(Vec3 color, bool alwaysVisible, bool maskMesh)`

**Purpose:** Sets the value or state of `contour color`.

### DisableContour
`public void DisableContour()`

**Purpose:** Handles logic related to `disable contour`.

### SetExternalBoundingBox
`public void SetExternalBoundingBox(BoundingBox bbox)`

**Purpose:** Sets the value or state of `external bounding box`.

### AddEditDataUser
`public void AddEditDataUser()`

**Purpose:** Adds `edit data user` to the current collection or state.

### ReleaseEditDataUser
`public void ReleaseEditDataUser()`

**Purpose:** Handles logic related to `release edit data user`.

### SetEditDataPolicy
`public void SetEditDataPolicy(EditDataPolicy policy)`

**Purpose:** Sets the value or state of `edit data policy`.

### LockEditDataWrite
`public UIntPtr LockEditDataWrite()`

**Purpose:** Handles logic related to `lock edit data write`.

### UnlockEditDataWrite
`public void UnlockEditDataWrite(UIntPtr handle)`

**Purpose:** Handles logic related to `unlock edit data write`.

### SetCustomClipPlane
`public void SetCustomClipPlane(Vec3 clipPlanePosition, Vec3 clipPlaneNormal, int planeIndex)`

**Purpose:** Sets the value or state of `custom clip plane`.

## Usage Example

```csharp
Mesh.CreateMeshWithMaterial(material);
```

## See Also

- [Complete Class Catalog](../catalog)