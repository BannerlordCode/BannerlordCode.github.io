---
title: "ItemObjectViewExtensions"
description: "ItemObjectViewExtensions 的自动生成类参考。"
---
# ItemObjectViewExtensions

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ItemObjectViewExtensions`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ItemObjectViewExtensions.cs`

## 概述

`ItemObjectViewExtensions` 位于 `TaleWorlds.MountAndBlade.View`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetCraftedMultiMesh
`public static MetaMesh GetCraftedMultiMesh(this ItemObject itemObject, bool needBatchedVersion)`

**用途 / Purpose:** 读取并返回当前对象中 crafted multi mesh 的结果。

```csharp
// 静态调用，不需要实例
ItemObjectViewExtensions.GetCraftedMultiMesh(itemObject, false);
```

### GetMultiMeshCopy
`public static MetaMesh GetMultiMeshCopy(this ItemObject itemObject)`

**用途 / Purpose:** 读取并返回当前对象中 multi mesh copy 的结果。

```csharp
// 静态调用，不需要实例
ItemObjectViewExtensions.GetMultiMeshCopy(itemObject);
```

### GetMultiMeshCopyWithGenderData
`public static MetaMesh GetMultiMeshCopyWithGenderData(this ItemObject itemObject, bool isFemale, bool hasGloves, bool needBatchedVersion)`

**用途 / Purpose:** 读取并返回当前对象中 multi mesh copy with gender data 的结果。

```csharp
// 静态调用，不需要实例
ItemObjectViewExtensions.GetMultiMeshCopyWithGenderData(itemObject, false, false, false);
```

### GetScaledFrame
`public static MatrixFrame GetScaledFrame(this ItemObject itemObject, Mat3 rotationMatrix, MetaMesh metaMesh, float scaleFactor, Vec3 positionShift)`

**用途 / Purpose:** 读取并返回当前对象中 scaled frame 的结果。

```csharp
// 静态调用，不需要实例
ItemObjectViewExtensions.GetScaledFrame(itemObject, rotationMatrix, metaMesh, 0, positionShift);
```

## 使用示例

```csharp
ItemObjectViewExtensions.GetCraftedMultiMesh(itemObject, false);
```

## 参见

- [本区域目录](../)