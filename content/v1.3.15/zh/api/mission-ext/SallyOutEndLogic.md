---
title: "SallyOutEndLogic"
description: "SallyOutEndLogic 的自动生成类参考。"
---
# SallyOutEndLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SallyOutEndLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/SallyOutEndLogic.cs`

## 概述

`SallyOutEndLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `SallyOutEndLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsSallyOutOver` | `public bool IsSallyOutOver { get; }` |

## 主要方法

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SallyOutEndLogic 实例
SallyOutEndLogic sallyOutEndLogic = ...;
sallyOutEndLogic.OnMissionTick(0);
```

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult)`

**用途 / Purpose:** 调用 MissionEnded 对应的操作。

```csharp
// 先通过子系统 API 拿到 SallyOutEndLogic 实例
SallyOutEndLogic sallyOutEndLogic = ...;
var result = sallyOutEndLogic.MissionEnded(missionResult);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<SallyOutEndLogic>();
```

## 参见

- [本区域目录](../)