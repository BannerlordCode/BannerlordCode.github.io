---
title: "BasicLeaveMissionLogic"
description: "BasicLeaveMissionLogic 的自动生成类参考。"
---
# BasicLeaveMissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BasicLeaveMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BasicLeaveMissionLogic.cs`

## 概述

`BasicLeaveMissionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `BasicLeaveMissionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult)`

**用途 / Purpose:** **用途 / Purpose:** 调用 MissionEnded 对应的操作。

```csharp
// 先通过子系统 API 拿到 BasicLeaveMissionLogic 实例
BasicLeaveMissionLogic basicLeaveMissionLogic = ...;
var result = basicLeaveMissionLogic.MissionEnded(missionResult);
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**用途 / Purpose:** **用途 / Purpose:** 在 end mission request 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BasicLeaveMissionLogic 实例
BasicLeaveMissionLogic basicLeaveMissionLogic = ...;
var result = basicLeaveMissionLogic.OnEndMissionRequest(canPlayerLeave);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<BasicLeaveMissionLogic>();
```

## 参见

- [本区域目录](../)