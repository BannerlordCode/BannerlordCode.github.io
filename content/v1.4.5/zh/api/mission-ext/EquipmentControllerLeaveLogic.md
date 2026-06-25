---
title: "EquipmentControllerLeaveLogic"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EquipmentControllerLeaveLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EquipmentControllerLeaveLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EquipmentControllerLeaveLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/EquipmentControllerLeaveLogic.cs`

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

**用途 / Purpose:** 设置 `is equipment selection active` 的值或状态。

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canLeave)`

**用途 / Purpose:** 当 `end mission request` 事件触发时调用此方法。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new EquipmentControllerLeaveLogic());
```

## 参见

- [完整类目录](../catalog)