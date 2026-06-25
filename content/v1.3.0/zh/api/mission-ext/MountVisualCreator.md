---
title: "MountVisualCreator"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MountVisualCreator`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MountVisualCreator

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MountVisualCreator`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MountVisualCreator.cs`

## 概述

`MountVisualCreator` 位于 `TaleWorlds.MountAndBlade.View`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetMaterialProperties
`public static void SetMaterialProperties(ItemObject mountItem, MetaMesh mountMesh, MountCreationKey key, ref uint maneMeshMultiplier)`

**用途 / Purpose:** 设置 `material properties` 的值或状态。

### AddMountMesh
`public static List<MetaMesh> AddMountMesh(MBAgentVisuals agentVisual, ItemObject mountItem, ItemObject harnessItem, string mountCreationKeyStr, Agent agent = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `mount mesh`。

### SetHorseColors
`public static void SetHorseColors(MetaMesh horseMesh, MountCreationKey mountCreationKey)`

**用途 / Purpose:** 设置 `horse colors` 的值或状态。

### ClearMountMesh
`public static void ClearMountMesh(GameEntity gameEntity)`

**用途 / Purpose:** 处理 `clear mount mesh` 相关逻辑。

### AddMountMeshToEntity
`public static void AddMountMeshToEntity(GameEntity gameEntity, ItemObject mountItem, ItemObject harnessItem, string mountCreationKeyStr, Agent agent = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `mount mesh to entity`。

### AddMountMeshToAgentVisual
`public static void AddMountMeshToAgentVisual(MBAgentVisuals agentVisual, ItemObject mountItem, ItemObject harnessItem, string mountCreationKeyStr, Agent agent = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `mount mesh to agent visual`。

## 使用示例

```csharp
MountVisualCreator.SetMaterialProperties(mountItem, mountMesh, key, maneMeshMultiplier);
```

## 参见

- [完整类目录](../catalog)