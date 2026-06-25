---
title: "MissionItemCalatogView"
description: "MissionItemCalatogView 的自动生成类参考。"
---
# MissionItemCalatogView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionItemCalatogView : MissionView`
**Base:** `MissionView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Missions/MissionItemCalatogView.cs`

## 概述

`MissionItemCalatogView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionItemCalatogView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionItemCalatogView 实例
MissionItemCalatogView missionItemCalatogView = ...;
missionItemCalatogView.AfterStart();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionItemCalatogView view = ...;
```

## 参见

- [本区域目录](../)