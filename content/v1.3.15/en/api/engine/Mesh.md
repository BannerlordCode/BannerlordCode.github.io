---
title: "Mesh"
description: "Auto-generated class reference for Mesh."
---
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

**Purpose:** Constructs a new `mesh with material` entity and returns it to the caller.

```csharp
// Static call; no instance required
Mesh.CreateMeshWithMaterial(material);
```

### CreateMesh
`public static Mesh CreateMesh(bool editable = true)`

**Purpose:** Constructs a new `mesh` entity and returns it to the caller.

```csharp
// Static call; no instance required
Mesh.CreateMesh(false);
```

### GetBaseMesh
`public Mesh GetBaseMesh()`

**Purpose:** Reads and returns the `base mesh` value held by the current object.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
var result = mesh.GetBaseMesh();
```

### GetFromResource
`public static Mesh GetFromResource(string meshName)`

**Purpose:** Reads and returns the `from resource` value held by the current object.

```csharp
// Static call; no instance required
Mesh.GetFromResource("example");
```

### GetRandomMeshWithVdecl
`public static Mesh GetRandomMeshWithVdecl(int inputLayout)`

**Purpose:** Reads and returns the `random mesh with vdecl` value held by the current object.

```csharp
// Static call; no instance required
Mesh.GetRandomMeshWithVdecl(0);
```

### SetColorAndStroke
`public void SetColorAndStroke(uint color, uint strokeColor, bool drawStroke)`

**Purpose:** Assigns a new value to `color and stroke` and updates the object's internal state.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.SetColorAndStroke(0, 0, false);
```

### SetMeshRenderOrder
`public void SetMeshRenderOrder(int renderOrder)`

**Purpose:** Assigns a new value to `mesh render order` and updates the object's internal state.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.SetMeshRenderOrder(0);
```

### HasTag
`public bool HasTag(string str)`

**Purpose:** Determines whether the current object already holds `tag`.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
var result = mesh.HasTag("example");
```

### CreateCopy
`public Mesh CreateCopy()`

**Purpose:** Constructs a new `copy` entity and returns it to the caller.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
var result = mesh.CreateCopy();
```

### SetMaterial
`public void SetMaterial(string newMaterialName)`

**Purpose:** Assigns a new value to `material` and updates the object's internal state.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.SetMaterial("example");
```

### SetVectorArgument
`public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**Purpose:** Assigns a new value to `vector argument` and updates the object's internal state.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.SetVectorArgument(0, 0, 0, 0);
```

### SetVectorArgument2
`public void SetVectorArgument2(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**Purpose:** Assigns a new value to `vector argument2` and updates the object's internal state.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.SetVectorArgument2(0, 0, 0, 0);
```

### GetVectorArgument
`public Vec3 GetVectorArgument()`

**Purpose:** Reads and returns the `vector argument` value held by the current object.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
var result = mesh.GetVectorArgument();
```

### GetVectorArgument2
`public Vec3 GetVectorArgument2()`

**Purpose:** Reads and returns the `vector argument2` value held by the current object.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
var result = mesh.GetVectorArgument2();
```

### SetupAdditionalBoneBuffer
`public void SetupAdditionalBoneBuffer(int numBones)`

**Purpose:** Assigns a new value to `up additional bone buffer` and updates the object's internal state.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.SetupAdditionalBoneBuffer(0);
```

### SetAdditionalBoneFrame
`public void SetAdditionalBoneFrame(int boneIndex, in MatrixFrame frame)`

**Purpose:** Assigns a new value to `additional bone frame` and updates the object's internal state.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.SetAdditionalBoneFrame(0, frame);
```

### SetMaterial
`public void SetMaterial(Material material)`

**Purpose:** Assigns a new value to `material` and updates the object's internal state.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.SetMaterial(material);
```

### GetMaterial
`public Material GetMaterial()`

**Purpose:** Reads and returns the `material` value held by the current object.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
var result = mesh.GetMaterial();
```

### GetSecondMaterial
`public Material GetSecondMaterial()`

**Purpose:** Reads and returns the `second material` value held by the current object.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
var result = mesh.GetSecondMaterial();
```

### AddFaceCorner
`public int AddFaceCorner(Vec3 position, Vec3 normal, Vec2 uvCoord, uint color, UIntPtr lockHandle)`

**Purpose:** Adds `face corner` to the current collection or state.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
var result = mesh.AddFaceCorner(position, normal, uvCoord, 0, lockHandle);
```

### AddFace
`public int AddFace(int patchNode0, int patchNode1, int patchNode2, UIntPtr lockHandle)`

**Purpose:** Adds `face` to the current collection or state.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
var result = mesh.AddFace(0, 0, 0, lockHandle);
```

### ClearMesh
`public void ClearMesh()`

**Purpose:** Removes all `mesh` from the current object.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.ClearMesh();
```

### SetColorAlpha
`public void SetColorAlpha(uint newAlpha)`

**Purpose:** Assigns a new value to `color alpha` and updates the object's internal state.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.SetColorAlpha(0);
```

### GetFaceCount
`public uint GetFaceCount()`

**Purpose:** Reads and returns the `face count` value held by the current object.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
var result = mesh.GetFaceCount();
```

### GetFaceCornerCount
`public uint GetFaceCornerCount()`

**Purpose:** Reads and returns the `face corner count` value held by the current object.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
var result = mesh.GetFaceCornerCount();
```

### ComputeNormals
`public void ComputeNormals()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.ComputeNormals();
```

### ComputeTangents
`public void ComputeTangents()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.ComputeTangents();
```

### AddMesh
`public void AddMesh(string meshResourceName, MatrixFrame meshFrame)`

**Purpose:** Adds `mesh` to the current collection or state.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.AddMesh("example", meshFrame);
```

### AddMesh
`public void AddMesh(Mesh mesh, MatrixFrame meshFrame)`

**Purpose:** Adds `mesh` to the current collection or state.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.AddMesh(mesh, meshFrame);
```

### GetLocalFrame
`public MatrixFrame GetLocalFrame()`

**Purpose:** Reads and returns the `local frame` value held by the current object.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
var result = mesh.GetLocalFrame();
```

### SetLocalFrame
`public void SetLocalFrame(MatrixFrame meshFrame)`

**Purpose:** Assigns a new value to `local frame` and updates the object's internal state.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.SetLocalFrame(meshFrame);
```

### SetVisibilityMask
`public void SetVisibilityMask(VisibilityMaskFlags visibilityMask)`

**Purpose:** Assigns a new value to `visibility mask` and updates the object's internal state.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.SetVisibilityMask(visibilityMask);
```

### UpdateBoundingBox
`public void UpdateBoundingBox()`

**Purpose:** Recalculates and stores the latest representation of `bounding box`.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.UpdateBoundingBox();
```

### SetAsNotEffectedBySeason
`public void SetAsNotEffectedBySeason()`

**Purpose:** Assigns a new value to `as not effected by season` and updates the object's internal state.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.SetAsNotEffectedBySeason();
```

### GetBoundingBoxWidth
`public float GetBoundingBoxWidth()`

**Purpose:** Reads and returns the `bounding box width` value held by the current object.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
var result = mesh.GetBoundingBoxWidth();
```

### GetBoundingBoxHeight
`public float GetBoundingBoxHeight()`

**Purpose:** Reads and returns the `bounding box height` value held by the current object.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
var result = mesh.GetBoundingBoxHeight();
```

### GetBoundingBoxMin
`public Vec3 GetBoundingBoxMin()`

**Purpose:** Reads and returns the `bounding box min` value held by the current object.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
var result = mesh.GetBoundingBoxMin();
```

### GetBoundingBoxMax
`public Vec3 GetBoundingBoxMax()`

**Purpose:** Reads and returns the `bounding box max` value held by the current object.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
var result = mesh.GetBoundingBoxMax();
```

### AddTriangle
`public void AddTriangle(Vec3 p1, Vec3 p2, Vec3 p3, Vec2 uv1, Vec2 uv2, Vec2 uv3, uint color, UIntPtr lockHandle)`

**Purpose:** Adds `triangle` to the current collection or state.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.AddTriangle(p1, p2, p3, uv1, uv2, uv3, 0, lockHandle);
```

### AddTriangleWithVertexColors
`public void AddTriangleWithVertexColors(Vec3 p1, Vec3 p2, Vec3 p3, Vec2 uv1, Vec2 uv2, Vec2 uv3, uint c1, uint c2, uint c3, UIntPtr lockHandle)`

**Purpose:** Adds `triangle with vertex colors` to the current collection or state.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.AddTriangleWithVertexColors(p1, p2, p3, uv1, uv2, uv3, 0, 0, 0, lockHandle);
```

### HintIndicesDynamic
`public void HintIndicesDynamic()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.HintIndicesDynamic();
```

### HintVerticesDynamic
`public void HintVerticesDynamic()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.HintVerticesDynamic();
```

### RecomputeBoundingBox
`public void RecomputeBoundingBox()`

**Purpose:** Recomputes `bounding box` and returns the result.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.RecomputeBoundingBox();
```

### SetEditDataFaceCornerVertexColor
`public void SetEditDataFaceCornerVertexColor(int index, uint color)`

**Purpose:** Assigns a new value to `edit data face corner vertex color` and updates the object's internal state.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.SetEditDataFaceCornerVertexColor(0, 0);
```

### GetEditDataFaceCornerVertexColor
`public uint GetEditDataFaceCornerVertexColor(int index)`

**Purpose:** Reads and returns the `edit data face corner vertex color` value held by the current object.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
var result = mesh.GetEditDataFaceCornerVertexColor(0);
```

### PreloadForRendering
`public void PreloadForRendering()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.PreloadForRendering();
```

### SetContourColor
`public void SetContourColor(Vec3 color, bool alwaysVisible, bool maskMesh)`

**Purpose:** Assigns a new value to `contour color` and updates the object's internal state.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.SetContourColor(color, false, false);
```

### DisableContour
`public void DisableContour()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.DisableContour();
```

### SetExternalBoundingBox
`public void SetExternalBoundingBox(BoundingBox bbox)`

**Purpose:** Assigns a new value to `external bounding box` and updates the object's internal state.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.SetExternalBoundingBox(bbox);
```

### AddEditDataUser
`public void AddEditDataUser()`

**Purpose:** Adds `edit data user` to the current collection or state.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.AddEditDataUser();
```

### ReleaseEditDataUser
`public void ReleaseEditDataUser()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.ReleaseEditDataUser();
```

### SetEditDataPolicy
`public void SetEditDataPolicy(EditDataPolicy policy)`

**Purpose:** Assigns a new value to `edit data policy` and updates the object's internal state.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.SetEditDataPolicy(policy);
```

### LockEditDataWrite
`public UIntPtr LockEditDataWrite()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
var result = mesh.LockEditDataWrite();
```

### UnlockEditDataWrite
`public void UnlockEditDataWrite(UIntPtr handle)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.UnlockEditDataWrite(handle);
```

### SetCustomClipPlane
`public void SetCustomClipPlane(Vec3 clipPlanePosition, Vec3 clipPlaneNormal, int planeIndex)`

**Purpose:** Assigns a new value to `custom clip plane` and updates the object's internal state.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
mesh.SetCustomClipPlane(clipPlanePosition, clipPlaneNormal, 0);
```

### GetClothLinearVelocityMultiplier
`public float GetClothLinearVelocityMultiplier()`

**Purpose:** Reads and returns the `cloth linear velocity multiplier` value held by the current object.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
var result = mesh.GetClothLinearVelocityMultiplier();
```

### HasCloth
`public bool HasCloth()`

**Purpose:** Determines whether the current object already holds `cloth`.

```csharp
// Obtain an instance of Mesh from the subsystem API first
Mesh mesh = ...;
var result = mesh.HasCloth();
```

## Usage Example

```csharp
Mesh.CreateMeshWithMaterial(material);
```

## See Also

- [Area Index](../)