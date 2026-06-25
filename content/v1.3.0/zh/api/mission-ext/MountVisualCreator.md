---
title: "MountVisualCreator"
description: "MountVisualCreator 的自动生成类参考。"
---
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

**用途 / Purpose:** 为 material properties 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MountVisualCreator.SetMaterialProperties(mountItem, mountMesh, key, maneMeshMultiplier);
```

### AddMountMesh
`public static List<MetaMesh> AddMountMesh(MBAgentVisuals agentVisual, ItemObject mountItem, ItemObject harnessItem, string mountCreationKeyStr, Agent agent = null)`

**用途 / Purpose:** 将 mount mesh 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
MountVisualCreator.AddMountMesh(agentVisual, mountItem, harnessItem, "example", null);
```

### SetHorseColors
`public static void SetHorseColors(MetaMesh horseMesh, MountCreationKey mountCreationKey)`

**用途 / Purpose:** 为 horse colors 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MountVisualCreator.SetHorseColors(horseMesh, mountCreationKey);
```

### ClearMountMesh
`public static void ClearMountMesh(GameEntity gameEntity)`

**用途 / Purpose:** 清空当前对象中的mount mesh。

```csharp
// 静态调用，不需要实例
MountVisualCreator.ClearMountMesh(gameEntity);
```

### AddMountMeshToEntity
`public static void AddMountMeshToEntity(GameEntity gameEntity, ItemObject mountItem, ItemObject harnessItem, string mountCreationKeyStr, Agent agent = null)`

**用途 / Purpose:** 将 mount mesh to entity 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
MountVisualCreator.AddMountMeshToEntity(gameEntity, mountItem, harnessItem, "example", null);
```

### AddMountMeshToAgentVisual
`public static void AddMountMeshToAgentVisual(MBAgentVisuals agentVisual, ItemObject mountItem, ItemObject harnessItem, string mountCreationKeyStr, Agent agent = null)`

**用途 / Purpose:** 将 mount mesh to agent visual 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
MountVisualCreator.AddMountMeshToAgentVisual(agentVisual, mountItem, harnessItem, "example", null);
```

## 使用示例

```csharp
MountVisualCreator.SetMaterialProperties(mountItem, mountMesh, key, maneMeshMultiplier);
```

## 参见

- [本区域目录](../)