---
title: "MissionGauntletConversationView"
description: "MissionGauntletConversationView 的自动生成类参考。"
---
# MissionGauntletConversationView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletConversationView : MissionView, IConversationStateHandler`
**Base:** `MissionView`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletConversationView.cs`

## 概述

`MissionGauntletConversationView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionGauntletConversationView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ConversationHandler` | `public MissionConversationLogic ConversationHandler { get; }` |

## 主要方法

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 「mission screen tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletConversationView 实例
MissionGauntletConversationView missionGauntletConversationView = ...;
missionGauntletConversationView.OnMissionScreenTick(0);
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 「mission screen finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletConversationView 实例
MissionGauntletConversationView missionGauntletConversationView = ...;
missionGauntletConversationView.OnMissionScreenFinalize();
```

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理与 「early start」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MissionGauntletConversationView 实例
MissionGauntletConversationView missionGauntletConversationView = ...;
missionGauntletConversationView.EarlyStart();
```

### OnMissionScreenActivate
`public override void OnMissionScreenActivate()`

**用途 / Purpose:** 在 「mission screen activate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletConversationView 实例
MissionGauntletConversationView missionGauntletConversationView = ...;
missionGauntletConversationView.OnMissionScreenActivate();
```

### OnMissionModeChange
`public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)`

**用途 / Purpose:** 在 「mission mode change」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletConversationView 实例
MissionGauntletConversationView missionGauntletConversationView = ...;
missionGauntletConversationView.OnMissionModeChange(oldMissionMode, false);
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionGauntletConversationView view = ...;
```

## 参见

- [本区域目录](../)