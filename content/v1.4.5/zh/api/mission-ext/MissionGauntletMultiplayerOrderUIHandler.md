---
title: "MissionGauntletMultiplayerOrderUIHandler"
description: "MissionGauntletMultiplayerOrderUIHandler 的自动生成类参考。"
---
# MissionGauntletMultiplayerOrderUIHandler

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletMultiplayerOrderUIHandler : GauntletOrderUIHandler`
**Base:** `GauntletOrderUIHandler`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission/MissionGauntletMultiplayerOrderUIHandler.cs`

## 概述

`MissionGauntletMultiplayerOrderUIHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionGauntletMultiplayerOrderUIHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValidForTick` | `public override bool IsValidForTick { get; }` |

## 主要方法

### IsReady
`public override bool IsReady()`

**用途 / Purpose:** 判断当前对象是否处于 「ready」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionGauntletMultiplayerOrderUIHandler 实例
MissionGauntletMultiplayerOrderUIHandler missionGauntletMultiplayerOrderUIHandler = ...;
var result = missionGauntletMultiplayerOrderUIHandler.IsReady();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 在 「start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletMultiplayerOrderUIHandler 实例
MissionGauntletMultiplayerOrderUIHandler missionGauntletMultiplayerOrderUIHandler = ...;
missionGauntletMultiplayerOrderUIHandler.AfterStart();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 「mission screen tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletMultiplayerOrderUIHandler 实例
MissionGauntletMultiplayerOrderUIHandler missionGauntletMultiplayerOrderUIHandler = ...;
missionGauntletMultiplayerOrderUIHandler.OnMissionScreenTick(0);
```

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 在 「mission screen initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletMultiplayerOrderUIHandler 实例
MissionGauntletMultiplayerOrderUIHandler missionGauntletMultiplayerOrderUIHandler = ...;
missionGauntletMultiplayerOrderUIHandler.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 「mission screen finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletMultiplayerOrderUIHandler 实例
MissionGauntletMultiplayerOrderUIHandler missionGauntletMultiplayerOrderUIHandler = ...;
missionGauntletMultiplayerOrderUIHandler.OnMissionScreenFinalize();
```

### InitializeInADisgustingManner
`public void InitializeInADisgustingManner()`

**用途 / Purpose:** 为 「in a disgusting manner」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MissionGauntletMultiplayerOrderUIHandler 实例
MissionGauntletMultiplayerOrderUIHandler missionGauntletMultiplayerOrderUIHandler = ...;
missionGauntletMultiplayerOrderUIHandler.InitializeInADisgustingManner();
```

### ValidateInADisgustingManner
`public void ValidateInADisgustingManner()`

**用途 / Purpose:** 检查「in a disgusting manner」是否满足约束条件，通常返回布尔值。

```csharp
// 先通过子系统 API 拿到 MissionGauntletMultiplayerOrderUIHandler 实例
MissionGauntletMultiplayerOrderUIHandler missionGauntletMultiplayerOrderUIHandler = ...;
missionGauntletMultiplayerOrderUIHandler.ValidateInADisgustingManner();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionGauntletMultiplayerOrderUIHandler>();
```

## 参见

- [本区域目录](../)