---
title: "EquipmentControllerLeaveLogic"
description: "EquipmentControllerLeaveLogic 的自动生成类参考。"
---
# EquipmentControllerLeaveLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EquipmentControllerLeaveLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/EquipmentControllerLeaveLogic.cs`

## 概述

`EquipmentControllerLeaveLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `EquipmentControllerLeaveLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEquipmentSelectionActive` | `public bool IsEquipmentSelectionActive { get; }` |

## 主要方法

### SetIsEquipmentSelectionActive
`public void SetIsEquipmentSelectionActive(bool isActive)`

**用途 / Purpose:** 为 「is equipment selection active」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 EquipmentControllerLeaveLogic 实例
EquipmentControllerLeaveLogic equipmentControllerLeaveLogic = ...;
equipmentControllerLeaveLogic.SetIsEquipmentSelectionActive(false);
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canLeave)`

**用途 / Purpose:** 在 「end mission request」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 EquipmentControllerLeaveLogic 实例
EquipmentControllerLeaveLogic equipmentControllerLeaveLogic = ...;
var result = equipmentControllerLeaveLogic.OnEndMissionRequest(canLeave);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<EquipmentControllerLeaveLogic>();
```

## 参见

- [本区域目录](../)