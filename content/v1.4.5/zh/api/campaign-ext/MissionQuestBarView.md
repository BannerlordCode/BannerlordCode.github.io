---
title: "MissionQuestBarView"
description: "MissionQuestBarView 的自动生成类参考。"
---
# MissionQuestBarView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionQuestBarView : MissionView`
**Base:** `MissionView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Missions/MissionQuestBarView.cs`

## 概述

`MissionQuestBarView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionQuestBarView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionQuestBarView view = ...;
```

## 参见

- [本区域目录](../)