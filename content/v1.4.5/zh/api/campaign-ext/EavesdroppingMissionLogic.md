---
title: "EavesdroppingMissionLogic"
description: "EavesdroppingMissionLogic 的自动生成类参考。"
---
# EavesdroppingMissionLogic

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class EavesdroppingMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions/EavesdroppingMissionLogic.cs`

## 概述

`EavesdroppingMissionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `EavesdroppingMissionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 EavesdroppingMissionLogic 实例
EavesdroppingMissionLogic eavesdroppingMissionLogic = ...;
eavesdroppingMissionLogic.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 EavesdroppingMissionLogic 实例
EavesdroppingMissionLogic eavesdroppingMissionLogic = ...;
eavesdroppingMissionLogic.OnMissionTick(0);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<EavesdroppingMissionLogic>();
```

## 参见

- [本区域目录](../)