<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EquipmentControllerLeaveLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EquipmentControllerLeaveLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EquipmentControllerLeaveLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/EquipmentControllerLeaveLogic.cs`

## 概述

`EquipmentControllerLeaveLogic` 是一个 MissionLogic（MissionBehavior 的子类），在任务中运行每-tick/事件逻辑。通过 `mission.AddMissionBehavior(new EquipmentControllerLeaveLogic())` 添加；继承它可定制。

## 主要方法

### SetIsEquipmentSelectionActive
```csharp
public void SetIsEquipmentSelectionActive(bool isActive)
```

### OnEndMissionRequest
```csharp
public override InquiryData OnEndMissionRequest(out bool canLeave)
```

## 使用示例

```csharp
// EquipmentControllerLeaveLogic (Logic) 的典型用法
Mission.Current.AddMissionBehavior(new EquipmentControllerLeaveLogic());
```

## 参见

- [完整类目录](../catalog)