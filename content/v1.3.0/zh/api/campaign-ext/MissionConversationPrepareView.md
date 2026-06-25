---
title: "MissionConversationPrepareView"
description: "MissionConversationPrepareView 的自动生成类参考。"
---
# MissionConversationPrepareView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionConversationPrepareView : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/MissionConversationPrepareView.cs`

## 概述

`MissionConversationPrepareView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionConversationPrepareView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionConversationPrepareView 实例
MissionConversationPrepareView missionConversationPrepareView = ...;
missionConversationPrepareView.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionConversationPrepareView 实例
MissionConversationPrepareView missionConversationPrepareView = ...;
missionConversationPrepareView.AfterStart();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionConversationPrepareView view = ...;
```

## 参见

- [本区域目录](../)