---
title: "MetaMesh"
description: "MetaMesh 的自动生成类参考。"
---
# MetaMesh

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class MetaMesh : GameEntityComponent`
**Base:** `GameEntityComponent`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/MetaMesh.cs`

## 概述

`MetaMesh` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Frame` | `public MatrixFrame Frame { get; set; }` |
| `VectorUserData` | `public Vec3 VectorUserData { get; set; }` |

## 主要方法

### CreateMetaMesh
`public static MetaMesh CreateMetaMesh(string name = null)`

**用途 / Purpose:** 构建一个新的 「meta mesh」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MetaMesh.CreateMetaMesh("example");
```

### GetLodMaskForMeshAtIndex
`public int GetLodMaskForMeshAtIndex(int index)`

**用途 / Purpose:** 读取并返回当前对象中 「lod mask for mesh at index」 的结果。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
var result = metaMesh.GetLodMaskForMeshAtIndex(0);
```

### GetTotalGpuSize
`public int GetTotalGpuSize()`

**用途 / Purpose:** 读取并返回当前对象中 「total gpu size」 的结果。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
var result = metaMesh.GetTotalGpuSize();
```

### RemoveMeshesWithTag
`public int RemoveMeshesWithTag(string tag)`

**用途 / Purpose:** 从当前容器或状态中移除 「meshes with tag」。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
var result = metaMesh.RemoveMeshesWithTag("example");
```

### RemoveMeshesWithoutTag
`public int RemoveMeshesWithoutTag(string tag)`

**用途 / Purpose:** 从当前容器或状态中移除 「meshes without tag」。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
var result = metaMesh.RemoveMeshesWithoutTag("example");
```

### GetMeshCountWithTag
`public int GetMeshCountWithTag(string tag)`

**用途 / Purpose:** 读取并返回当前对象中 「mesh count with tag」 的结果。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
var result = metaMesh.GetMeshCountWithTag("example");
```

### HasVertexBufferOrEditDataOrPackageItem
`public bool HasVertexBufferOrEditDataOrPackageItem()`

**用途 / Purpose:** 判断当前对象是否已经持有 「vertex buffer or edit data or package item」。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
var result = metaMesh.HasVertexBufferOrEditDataOrPackageItem();
```

### HasAnyGeneratedLods
`public bool HasAnyGeneratedLods()`

**用途 / Purpose:** 判断当前对象是否已经持有 「any generated lods」。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
var result = metaMesh.HasAnyGeneratedLods();
```

### HasAnyLods
`public bool HasAnyLods()`

**用途 / Purpose:** 判断当前对象是否已经持有 「any lods」。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
var result = metaMesh.HasAnyLods();
```

### GetCopy
`public static MetaMesh GetCopy(string metaMeshName, bool showErrors = true, bool mayReturnNull = false)`

**用途 / Purpose:** 读取并返回当前对象中 「copy」 的结果。

```csharp
// 静态调用，不需要实例
MetaMesh.GetCopy("example", false, false);
```

### CopyTo
`public void CopyTo(MetaMesh res, bool copyMeshes = true)`

**用途 / Purpose:** 把当前对象的「to」状态复制到目标对象。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.CopyTo(res, false);
```

### ClearMeshesForOtherLods
`public void ClearMeshesForOtherLods(int lodToKeep)`

**用途 / Purpose:** 清空当前对象中的「meshes for other lods」。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.ClearMeshesForOtherLods(0);
```

### ClearMeshesForLod
`public void ClearMeshesForLod(int lodToClear)`

**用途 / Purpose:** 清空当前对象中的「meshes for lod」。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.ClearMeshesForLod(0);
```

### ClearMeshesForLowerLods
`public void ClearMeshesForLowerLods(int lodToClear)`

**用途 / Purpose:** 清空当前对象中的「meshes for lower lods」。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.ClearMeshesForLowerLods(0);
```

### ClearMeshes
`public void ClearMeshes()`

**用途 / Purpose:** 清空当前对象中的「meshes」。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.ClearMeshes();
```

### SetNumLods
`public void SetNumLods(int lodToClear)`

**用途 / Purpose:** 为 「num lods」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.SetNumLods(0);
```

### CheckMetaMeshExistence
`public static void CheckMetaMeshExistence(string metaMeshName, int lod_count_check)`

**用途 / Purpose:** 检查「meta mesh existence」在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
MetaMesh.CheckMetaMeshExistence("example", 0);
```

### GetMorphedCopy
`public static MetaMesh GetMorphedCopy(string metaMeshName, float morphTarget, bool showErrors)`

**用途 / Purpose:** 读取并返回当前对象中 「morphed copy」 的结果。

```csharp
// 静态调用，不需要实例
MetaMesh.GetMorphedCopy("example", 0, false);
```

### CreateCopy
`public MetaMesh CreateCopy()`

**用途 / Purpose:** 构建一个新的 「copy」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
var result = metaMesh.CreateCopy();
```

### AddMesh
`public void AddMesh(Mesh mesh)`

**用途 / Purpose:** 将 「mesh」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.AddMesh(mesh);
```

### AddMesh
`public void AddMesh(Mesh mesh, uint lodLevel)`

**用途 / Purpose:** 将 「mesh」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.AddMesh(mesh, 0);
```

### AddMetaMesh
`public void AddMetaMesh(MetaMesh metaMesh)`

**用途 / Purpose:** 将 「meta mesh」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.AddMetaMesh(metaMesh);
```

### SetCullMode
`public void SetCullMode(MBMeshCullingMode cullMode)`

**用途 / Purpose:** 为 「cull mode」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.SetCullMode(cullMode);
```

### AddMaterialShaderFlag
`public void AddMaterialShaderFlag(string materialShaderFlag)`

**用途 / Purpose:** 将 「material shader flag」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.AddMaterialShaderFlag("example");
```

### MergeMultiMeshes
`public void MergeMultiMeshes(MetaMesh metaMesh)`

**用途 / Purpose:** 处理与 「merge multi meshes」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.MergeMultiMeshes(metaMesh);
```

### AssignClothBodyFrom
`public void AssignClothBodyFrom(MetaMesh metaMesh)`

**用途 / Purpose:** 处理与 「assign cloth body from」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.AssignClothBodyFrom(metaMesh);
```

### BatchMultiMeshes
`public void BatchMultiMeshes(MetaMesh metaMesh)`

**用途 / Purpose:** 处理与 「batch multi meshes」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.BatchMultiMeshes(metaMesh);
```

### HasClothData
`public bool HasClothData()`

**用途 / Purpose:** 判断当前对象是否已经持有 「cloth data」。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
var result = metaMesh.HasClothData();
```

### BatchMultiMeshesMultiple
`public void BatchMultiMeshesMultiple(List<MetaMesh> metaMeshes)`

**用途 / Purpose:** 处理与 「batch multi meshes multiple」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.BatchMultiMeshesMultiple(metaMeshes);
```

### ClearEditData
`public void ClearEditData()`

**用途 / Purpose:** 清空当前对象中的「edit data」。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.ClearEditData();
```

### GetMeshAtIndex
`public Mesh GetMeshAtIndex(int meshIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「mesh at index」 的结果。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
var result = metaMesh.GetMeshAtIndex(0);
```

### GetFirstMeshWithTag
`public Mesh GetFirstMeshWithTag(string tag)`

**用途 / Purpose:** 读取并返回当前对象中 「first mesh with tag」 的结果。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
var result = metaMesh.GetFirstMeshWithTag("example");
```

### GetFactor1
`public uint GetFactor1()`

**用途 / Purpose:** 读取并返回当前对象中 「factor1」 的结果。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
var result = metaMesh.GetFactor1();
```

### SetGlossMultiplier
`public void SetGlossMultiplier(float value)`

**用途 / Purpose:** 为 「gloss multiplier」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.SetGlossMultiplier(0);
```

### GetFactor2
`public uint GetFactor2()`

**用途 / Purpose:** 读取并返回当前对象中 「factor2」 的结果。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
var result = metaMesh.GetFactor2();
```

### SetFactor1Linear
`public void SetFactor1Linear(uint linearFactorColor1)`

**用途 / Purpose:** 为 「factor1 linear」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.SetFactor1Linear(0);
```

### SetFactor2Linear
`public void SetFactor2Linear(uint linearFactorColor2)`

**用途 / Purpose:** 为 「factor2 linear」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.SetFactor2Linear(0);
```

### SetFactor1
`public void SetFactor1(uint factorColor1)`

**用途 / Purpose:** 为 「factor1」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.SetFactor1(0);
```

### SetFactor2
`public void SetFactor2(uint factorColor2)`

**用途 / Purpose:** 为 「factor2」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.SetFactor2(0);
```

### SetVectorArgument
`public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**用途 / Purpose:** 为 「vector argument」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.SetVectorArgument(0, 0, 0, 0);
```

### SetVectorArgument2
`public void SetVectorArgument2(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)`

**用途 / Purpose:** 为 「vector argument2」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.SetVectorArgument2(0, 0, 0, 0);
```

### GetVectorArgument2
`public Vec3 GetVectorArgument2()`

**用途 / Purpose:** 读取并返回当前对象中 「vector argument2」 的结果。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
var result = metaMesh.GetVectorArgument2();
```

### SetMaterial
`public void SetMaterial(Material material)`

**用途 / Purpose:** 为 「material」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.SetMaterial(material);
```

### SetShaderToMaterial
`public void SetShaderToMaterial(string shaderName)`

**用途 / Purpose:** 为 「shader to material」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.SetShaderToMaterial("example");
```

### SetLodBias
`public void SetLodBias(int lodBias)`

**用途 / Purpose:** 为 「lod bias」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.SetLodBias(0);
```

### SetBillboarding
`public void SetBillboarding(BillboardType billboard)`

**用途 / Purpose:** 为 「billboarding」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.SetBillboarding(billboard);
```

### UseHeadBoneFaceGenScaling
`public void UseHeadBoneFaceGenScaling(Skeleton skeleton, sbyte headLookDirectionBoneIndex, MatrixFrame frame)`

**用途 / Purpose:** 处理与 「use head bone face gen scaling」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.UseHeadBoneFaceGenScaling(skeleton, 0, frame);
```

### DrawTextWithDefaultFont
`public void DrawTextWithDefaultFont(string text, Vec2 textPositionMin, Vec2 textPositionMax, Vec2 size, uint color, TextFlags flags)`

**用途 / Purpose:** 处理与 「draw text with default font」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.DrawTextWithDefaultFont("example", textPositionMin, textPositionMax, size, 0, flags);
```

### PreloadForRendering
`public void PreloadForRendering()`

**用途 / Purpose:** 处理与 「preload for rendering」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.PreloadForRendering();
```

### CheckResources
`public int CheckResources()`

**用途 / Purpose:** 检查「resources」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
var result = metaMesh.CheckResources();
```

### PreloadShaders
`public void PreloadShaders(bool useTableau, bool useTeamColor)`

**用途 / Purpose:** 处理与 「preload shaders」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.PreloadShaders(false, false);
```

### RecomputeBoundingBox
`public void RecomputeBoundingBox(bool recomputeMeshes)`

**用途 / Purpose:** 重新执行「bounding box」相关的计算并返回结果。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.RecomputeBoundingBox(false);
```

### AddEditDataUser
`public void AddEditDataUser()`

**用途 / Purpose:** 将 「edit data user」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.AddEditDataUser();
```

### ReleaseEditDataUser
`public void ReleaseEditDataUser()`

**用途 / Purpose:** 处理与 「release edit data user」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.ReleaseEditDataUser();
```

### SetEditDataPolicy
`public void SetEditDataPolicy(EditDataPolicy policy)`

**用途 / Purpose:** 为 「edit data policy」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.SetEditDataPolicy(policy);
```

### Fit
`public MatrixFrame Fit()`

**用途 / Purpose:** 处理与 「fit」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
var result = metaMesh.Fit();
```

### GetBoundingBox
`public BoundingBox GetBoundingBox()`

**用途 / Purpose:** 读取并返回当前对象中 「bounding box」 的结果。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
var result = metaMesh.GetBoundingBox();
```

### GetVisibilityMask
`public VisibilityMaskFlags GetVisibilityMask()`

**用途 / Purpose:** 读取并返回当前对象中 「visibility mask」 的结果。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
var result = metaMesh.GetVisibilityMask();
```

### SetVisibilityMask
`public void SetVisibilityMask(VisibilityMaskFlags visibilityMask)`

**用途 / Purpose:** 为 「visibility mask」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.SetVisibilityMask(visibilityMask);
```

### GetName
`public string GetName()`

**用途 / Purpose:** 读取并返回当前对象中 「name」 的结果。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
var result = metaMesh.GetName();
```

### GetAllMultiMeshes
`public static void GetAllMultiMeshes(ref List<MetaMesh> multiMeshList)`

**用途 / Purpose:** 读取并返回当前对象中 「all multi meshes」 的结果。

```csharp
// 静态调用，不需要实例
MetaMesh.GetAllMultiMeshes(multiMeshList);
```

### GetMultiMesh
`public static MetaMesh GetMultiMesh(string name)`

**用途 / Purpose:** 读取并返回当前对象中 「multi mesh」 的结果。

```csharp
// 静态调用，不需要实例
MetaMesh.GetMultiMesh("example");
```

### SetContourState
`public void SetContourState(bool alwaysVisible)`

**用途 / Purpose:** 为 「contour state」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.SetContourState(false);
```

### SetContourColor
`public void SetContourColor(uint color)`

**用途 / Purpose:** 为 「contour color」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.SetContourColor(0);
```

### SetMaterialToSubMeshesWithTag
`public void SetMaterialToSubMeshesWithTag(Material bodyMaterial, string tag)`

**用途 / Purpose:** 为 「material to sub meshes with tag」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.SetMaterialToSubMeshesWithTag(bodyMaterial, "example");
```

### SetFactorColorToSubMeshesWithTag
`public void SetFactorColorToSubMeshesWithTag(uint color, string tag)`

**用途 / Purpose:** 为 「factor color to sub meshes with tag」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MetaMesh 实例
MetaMesh metaMesh = ...;
metaMesh.SetFactorColorToSubMeshesWithTag(0, "example");
```

## 使用示例

```csharp
MetaMesh.CreateMetaMesh("example");
```

## 参见

- [本区域目录](../)