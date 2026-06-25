---
title: "SpawnPointDebugView"
description: "SpawnPointDebugView 的自动生成类参考。"
---
# SpawnPointDebugView

**Namespace:** SandBox.View.Missions.SandBox
**Module:** SandBox.View
**Type:** `public class SpawnPointDebugView : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `SandBox.View/Missions/SandBox/SpawnPointDebugView.cs`

## 概述

`SpawnPointDebugView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `SpawnPointDebugView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** 读取并返回当前对象中 「tick requirement」 的结果。

```csharp
// 先通过子系统 API 拿到 SpawnPointDebugView 实例
SpawnPointDebugView spawnPointDebugView = ...;
var result = spawnPointDebugView.GetTickRequirement();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
SpawnPointDebugView view = ...;
```

## 参见

- [本区域目录](../)