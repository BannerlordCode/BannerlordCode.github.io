---
title: "MissionGauntletEscapeMenuBase"
description: "MissionGauntletEscapeMenuBase 的自动生成类参考。"
---
# MissionGauntletEscapeMenuBase

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionGauntletEscapeMenuBase : MissionEscapeMenuView`
**Base:** `MissionEscapeMenuView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletEscapeMenuBase.cs`

## 概述

`MissionGauntletEscapeMenuBase` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Mission`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Mission` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 mission screen finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletEscapeMenuBase 实例
MissionGauntletEscapeMenuBase missionGauntletEscapeMenuBase = ...;
missionGauntletEscapeMenuBase.OnMissionScreenFinalize();
```

### OnEscape
`public override bool OnEscape()`

**用途 / Purpose:** **用途 / Purpose:** 在 escape 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletEscapeMenuBase 实例
MissionGauntletEscapeMenuBase missionGauntletEscapeMenuBase = ...;
var result = missionGauntletEscapeMenuBase.OnEscape();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission screen tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletEscapeMenuBase 实例
MissionGauntletEscapeMenuBase missionGauntletEscapeMenuBase = ...;
missionGauntletEscapeMenuBase.OnMissionScreenTick(0);
```

### OnSceneRenderingStarted
`public override void OnSceneRenderingStarted()`

**用途 / Purpose:** **用途 / Purpose:** 在 scene rendering started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionGauntletEscapeMenuBase 实例
MissionGauntletEscapeMenuBase missionGauntletEscapeMenuBase = ...;
missionGauntletEscapeMenuBase.OnSceneRenderingStarted();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MissionGauntletEscapeMenuBase instance = ...;
```

## 参见

- [本区域目录](../)