---
title: "BoundaryWallView"
description: "BoundaryWallView 的自动生成类参考。"
---
# BoundaryWallView

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BoundaryWallView : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BoundaryWallView.cs`

## 概述

`BoundaryWallView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `BoundaryWallView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CreateBoundaryMesh
`public static Mesh CreateBoundaryMesh(Scene scene, ICollection<Vec2> boundaryPoints, uint meshColor = 536918784u)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 boundary mesh 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
BoundaryWallView.CreateBoundaryMesh(scene, boundaryPoints, 0);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
BoundaryWallView view = ...;
```

## 参见

- [本区域目录](../)