---
title: "Mesh"
description: "Mesh: a public class in TaleWorlds.Engine, inheriting Resource; 65 exposed members (57 methods, 8 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/Mesh.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Mesh

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Mesh : Resource`
**File:** `TaleWorlds.Engine/Mesh.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

Mesh lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/Mesh.cs. It is a public class (sealed), implementing/inheriting Resource; the inheritance chain is Mesh → Resource → NativeObject. It exposes 65 public/protected members: 57 methods, 8 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Mesh lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain Mesh → Resource → NativeObject. The surface is method-led (methods 57/65, properties 8/65), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/Mesh.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CreateMeshWithMaterial` | `public static Mesh CreateMeshWithMaterial(Material material)` | method |
| `CreateMesh` | `public static Mesh CreateMesh(bool editable = true)` | method |
| `GetBaseMesh` | `public Mesh GetBaseMesh()` | method |
| `GetFromResource` | `public static Mesh GetFromResource(string meshName)` | method |
| `GetRandomMeshWithVdecl` | `public static Mesh GetRandomMeshWithVdecl(int inputLayout)` | method |
| `SetColorAndStroke` | `public void SetColorAndStroke(uint color, uint strokeColor, bool drawStroke)` | method |
| `SetMeshRenderOrder` | `public void SetMeshRenderOrder(int renderOrder)` | method |
| `HasTag` | `public bool HasTag(string str)` | method |
| `CreateCopy` | `public Mesh CreateCopy()` | method |
| `SetMaterial` | `public void SetMaterial(string newMaterialName)` | method |
| `SetVectorArgument` | `public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)` | method |
| `SetVectorArgument2` | `public void SetVectorArgument2(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)` | method |
| `GetVectorArgument` | `public Vec3 GetVectorArgument()` | method |
| `GetVectorArgument2` | `public Vec3 GetVectorArgument2()` | method |
| `SetupAdditionalBoneBuffer` | `public void SetupAdditionalBoneBuffer(int numBones)` | method |
| `SetAdditionalBoneFrame` | `public void SetAdditionalBoneFrame(int boneIndex, in MatrixFrame frame)` | method |
| `SetMaterial` | `public void SetMaterial(Material material)` | method |
| `GetMaterial` | `public Material GetMaterial()` | method |
| `GetSecondMaterial` | `public Material GetSecondMaterial()` | method |
| `AddFaceCorner` | `public int AddFaceCorner(Vec3 position, Vec3 normal, Vec2 uvCoord, uint color, UIntPtr lockHandle)` | method |
| `AddFace` | `public int AddFace(int patchNode0, int patchNode1, int patchNode2, UIntPtr lockHandle)` | method |
| `ClearMesh` | `public void ClearMesh()` | method |
| `Name` | `public string Name` | property |
| `CullingMode` | `public MBMeshCullingMode CullingMode` | property |
| `MorphTime` | `public float MorphTime` | property |
| `Color` | `public uint Color` | property |
| `Color2` | `public uint Color2` | property |
| `SetColorAlpha` | `public void SetColorAlpha(uint newAlpha)` | method |
| `GetFaceCount` | `public uint GetFaceCount()` | method |
| `GetFaceCornerCount` | `public uint GetFaceCornerCount()` | method |
| `ComputeNormals` | `public void ComputeNormals()` | method |
| `ComputeTangents` | `public void ComputeTangents()` | method |
| `AddMesh` | `public void AddMesh(string meshResourceName, MatrixFrame meshFrame)` | method |
| `AddMesh` | `public void AddMesh(Mesh mesh, MatrixFrame meshFrame)` | method |
| `GetLocalFrame` | `public MatrixFrame GetLocalFrame()` | method |
| `SetLocalFrame` | `public void SetLocalFrame(MatrixFrame meshFrame)` | method |
| `SetVisibilityMask` | `public void SetVisibilityMask(VisibilityMaskFlags visibilityMask)` | method |
| `UpdateBoundingBox` | `public void UpdateBoundingBox()` | method |
| `SetAsNotEffectedBySeason` | `public void SetAsNotEffectedBySeason()` | method |
| `GetBoundingBoxWidth` | `public float GetBoundingBoxWidth()` | method |
| `GetBoundingBoxHeight` | `public float GetBoundingBoxHeight()` | method |
| `GetBoundingBoxMin` | `public Vec3 GetBoundingBoxMin()` | method |
| `GetBoundingBoxMax` | `public Vec3 GetBoundingBoxMax()` | method |
| `AddTriangle` | `public void AddTriangle(Vec3 p1, Vec3 p2, Vec3 p3, Vec2 uv1, Vec2 uv2, Vec2 uv3, uint color, UIntPtr lockHandle)` | method |
| `AddTriangleWithVertexColors` | `public void AddTriangleWithVertexColors(Vec3 p1, Vec3 p2, Vec3 p3, Vec2 uv1, Vec2 uv2, Vec2 uv3, uint c1, uint c2, uint c3, UIntPtr lockHandle)` | method |
| `HintIndicesDynamic` | `public void HintIndicesDynamic()` | method |
| `HintVerticesDynamic` | `public void HintVerticesDynamic()` | method |
| `RecomputeBoundingBox` | `public void RecomputeBoundingBox()` | method |
| `Billboard` | `public BillboardType Billboard` | property |
| `VisibilityMask` | `public VisibilityMaskFlags VisibilityMask` | property |
| `EditDataFaceCornerCount` | `public int EditDataFaceCornerCount` | property |
| `SetEditDataFaceCornerVertexColor` | `public void SetEditDataFaceCornerVertexColor(int index, uint color)` | method |
| `GetEditDataFaceCornerVertexColor` | `public uint GetEditDataFaceCornerVertexColor(int index)` | method |
| `PreloadForRendering` | `public void PreloadForRendering()` | method |
| `SetContourColor` | `public void SetContourColor(Vec3 color, bool alwaysVisible, bool maskMesh)` | method |
| `DisableContour` | `public void DisableContour()` | method |
| `SetExternalBoundingBox` | `public void SetExternalBoundingBox(BoundingBox bbox)` | method |
| `AddEditDataUser` | `public void AddEditDataUser()` | method |
| `ReleaseEditDataUser` | `public void ReleaseEditDataUser()` | method |
| `SetEditDataPolicy` | `public void SetEditDataPolicy(EditDataPolicy policy)` | method |
| `LockEditDataWrite` | `public UIntPtr LockEditDataWrite()` | method |
| `UnlockEditDataWrite` | `public void UnlockEditDataWrite(UIntPtr handle)` | method |
| `SetCustomClipPlane` | `public void SetCustomClipPlane(Vec3 clipPlanePosition, Vec3 clipPlaneNormal, int planeIndex)` | method |
| `GetClothLinearVelocityMultiplier` | `public float GetClothLinearVelocityMultiplier()` | method |
| `HasCloth` | `public bool HasCloth()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface Resource](../Resource/)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
