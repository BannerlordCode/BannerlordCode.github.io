---
title: "MissionGauntletOptionsUIHandler"
description: "MissionGauntletOptionsUIHandler 的自动生成类参考。"
---
# MissionGauntletOptionsUIHandler

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletOptionsUIHandler : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletOptionsUIHandler.cs`

## 概述

`MissionGauntletOptionsUIHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionGauntletOptionsUIHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; }` |

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 在 mission screen initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletOptionsUIHandler 实例
MissionGauntletOptionsUIHandler missionGauntletOptionsUIHandler = ...;
missionGauntletOptionsUIHandler.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 mission screen finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletOptionsUIHandler 实例
MissionGauntletOptionsUIHandler missionGauntletOptionsUIHandler = ...;
missionGauntletOptionsUIHandler.OnMissionScreenFinalize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 mission screen tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletOptionsUIHandler 实例
MissionGauntletOptionsUIHandler missionGauntletOptionsUIHandler = ...;
missionGauntletOptionsUIHandler.OnMissionScreenTick(0);
```

### OnEscape
`public override bool OnEscape()`

**用途 / Purpose:** 在 escape 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletOptionsUIHandler 实例
MissionGauntletOptionsUIHandler missionGauntletOptionsUIHandler = ...;
var result = missionGauntletOptionsUIHandler.OnEscape();
```

### IsOpeningEscapeMenuOnFocusChangeAllowed
`public override bool IsOpeningEscapeMenuOnFocusChangeAllowed()`

**用途 / Purpose:** 判断当前对象是否处于 opening escape menu on focus change allowed 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionGauntletOptionsUIHandler 实例
MissionGauntletOptionsUIHandler missionGauntletOptionsUIHandler = ...;
var result = missionGauntletOptionsUIHandler.IsOpeningEscapeMenuOnFocusChangeAllowed();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionGauntletOptionsUIHandler>();
```

## 参见

- [本区域目录](../)