---
title: "MountVisualCreator"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MountVisualCreator`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MountVisualCreator

**命名空间:** TaleWorlds.MountAndBlade.View
**模块:** TaleWorlds.MountAndBlade
**类型:** `public static class MountVisualCreator`
**领域:** mission-ext

## 概述

`MountVisualCreator` 位于 `TaleWorlds.MountAndBlade.View`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetMaterialProperties
`public static void SetMaterialProperties(ItemObject mountItem, MetaMesh mountMesh, MountCreationKey key, ref uint maneMeshMultiplier)`

**用途 / Purpose:** 设置 `material properties` 的值或状态。

### AddMountMesh
`public static MountVisualCreationOutput AddMountMesh(MBAgentVisuals agentVisual, ItemObject mountItem, ItemObject harnessItem, string mountCreationKeyStr, Agent agent = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `mount mesh`。

### SetHorseColors
`public static void SetHorseColors(MetaMesh horseMesh, MountCreationKey mountCreationKey)`

**用途 / Purpose:** 设置 `horse colors` 的值或状态。

### ClearMountMesh
`public static void ClearMountMesh(GameEntity gameEntity)`

**用途 / Purpose:** 处理 `clear mount mesh` 相关逻辑。

### AddMountMeshToEntity
`public static void AddMountMeshToEntity(GameEntity gameEntity, ItemObject mountItem, ItemObject harnessItem, string mountCreationKeyStr, out MountVisualCreationOutput mountVisualCreationOutput, Agent agent = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `mount mesh to entity`。

### AddMountMeshToEntity
`public static void AddMountMeshToEntity(GameEntity gameEntity, ItemObject mountItem, ItemObject harnessItem, string mountCreationKeyStr, Agent agent = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `mount mesh to entity`。

### AddMountMeshToAgentVisual
`public static void AddMountMeshToAgentVisual(MBAgentVisuals agentVisual, ItemObject mountItem, ItemObject harnessItem, string mountCreationKeyStr, Agent agent = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `mount mesh to agent visual`。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
MountVisualCreator.SetMaterialProperties(mountItem, mountMesh, key, maneMeshMultiplier);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
