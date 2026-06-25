---
title: "ItemObjectViewExtensions"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemObjectViewExtensions`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ItemObjectViewExtensions

**命名空间:** TaleWorlds.MountAndBlade.View
**模块:** TaleWorlds.MountAndBlade
**类型:** `public static class ItemObjectViewExtensions`
**领域:** mission-ext

## 概述

`ItemObjectViewExtensions` 位于 `TaleWorlds.MountAndBlade.View`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetCraftedMultiMesh
`public static MetaMesh GetCraftedMultiMesh(this ItemObject itemObject, bool needBatchedVersion)`

**用途 / Purpose:** 获取 `crafted multi mesh` 的当前值。

### GetMultiMeshCopy
`public static MetaMesh GetMultiMeshCopy(this ItemObject itemObject)`

**用途 / Purpose:** 获取 `multi mesh copy` 的当前值。

### GetMultiMeshCopyWithGenderData
`public static MetaMesh GetMultiMeshCopyWithGenderData(this ItemObject itemObject, bool isFemale, bool useSlimVersion, bool needBatchedVersion)`

**用途 / Purpose:** 获取 `multi mesh copy with gender data` 的当前值。

### GetScaledFrame
`public static MatrixFrame GetScaledFrame(this ItemObject itemObject, Mat3 rotationMatrix, MetaMesh metaMesh, float scaleFactor, Vec3 positionShift)`

**用途 / Purpose:** 获取 `scaled frame` 的当前值。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
ItemObjectViewExtensions.GetCraftedMultiMesh(itemObject, false);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
