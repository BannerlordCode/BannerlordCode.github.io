---
title: "MissionLogic"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionLogic : MissionBehavior`
**Base:** `MissionBehavior`
**File:** `TaleWorlds.MountAndBlade/MissionLogic.cs`

## 概述

`MissionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `MissionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `BehaviorType` | `public override MissionBehaviorType BehaviorType { get; }` |

## 主要方法

### OnEndMissionRequest
`public virtual InquiryData OnEndMissionRequest(out bool canLeave)`

**用途 / Purpose:** 当 `end mission request` 事件触发时调用此方法。

### MissionEnded
`public virtual bool MissionEnded(ref MissionResult missionResult)`

**用途 / Purpose:** 处理 `mission ended` 相关逻辑。

### OnBattleEnded
`public virtual void OnBattleEnded()`

**用途 / Purpose:** 当 `battle ended` 事件触发时调用此方法。

### ShowBattleResults
`public virtual void ShowBattleResults()`

**用途 / Purpose:** 处理 `show battle results` 相关逻辑。

### OnRetreatMission
`public virtual void OnRetreatMission()`

**用途 / Purpose:** 当 `retreat mission` 事件触发时调用此方法。

### OnSurrenderMission
`public virtual void OnSurrenderMission()`

**用途 / Purpose:** 当 `surrender mission` 事件触发时调用此方法。

### OnAutoDeployTeam
`public virtual void OnAutoDeployTeam(Team team)`

**用途 / Purpose:** 当 `auto deploy team` 事件触发时调用此方法。

### GetExtraEquipmentElementsForCharacter
`public virtual List<EquipmentElement> GetExtraEquipmentElementsForCharacter(BasicCharacterObject character, bool getAllEquipments = false)`

**用途 / Purpose:** 获取 `extra equipment elements for character` 的当前值。

### OnMissionResultReady
`public virtual void OnMissionResultReady(MissionResult missionResult)`

**用途 / Purpose:** 当 `mission result ready` 事件触发时调用此方法。

## 使用示例

```csharp
var implementation = new CustomMissionLogic();
```

## 参见

- [完整类目录](../catalog)