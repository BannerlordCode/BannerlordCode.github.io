---
title: "MissionAgentPanicHandler"
description: "MissionAgentPanicHandler 的自动生成类参考。"
---
# MissionAgentPanicHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentPanicHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionAgentPanicHandler.cs`

## 概述

`MissionAgentPanicHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionAgentPanicHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnAgentPanicked
`public override void OnAgentPanicked(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent panicked 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentPanicHandler 实例
MissionAgentPanicHandler missionAgentPanicHandler = ...;
missionAgentPanicHandler.OnAgentPanicked(agent);
```

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 pre mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentPanicHandler 实例
MissionAgentPanicHandler missionAgentPanicHandler = ...;
missionAgentPanicHandler.OnPreMissionTick(0);
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** **用途 / Purpose:** 在 remove behavior 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAgentPanicHandler 实例
MissionAgentPanicHandler missionAgentPanicHandler = ...;
missionAgentPanicHandler.OnRemoveBehavior();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionAgentPanicHandler>();
```

## 参见

- [本区域目录](../)