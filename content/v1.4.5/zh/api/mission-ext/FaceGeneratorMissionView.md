---
title: "FaceGeneratorMissionView"
description: "FaceGeneratorMissionView 的自动生成类参考。"
---
# FaceGeneratorMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FaceGeneratorMissionView : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/FaceGeneratorMissionView.cs`

## 概述

`FaceGeneratorMissionView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `FaceGeneratorMissionView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FaceGeneratorMissionView 实例
FaceGeneratorMissionView faceGeneratorMissionView = ...;
faceGeneratorMissionView.OnMissionTick(0);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
FaceGeneratorMissionView view = ...;
```

## 参见

- [本区域目录](../)