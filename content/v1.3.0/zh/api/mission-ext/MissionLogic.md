---
title: "MissionLogic"
description: "MissionLogic 的自动生成类参考。"
---
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

**用途 / Purpose:** 在 end mission request 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionLogic 实例
MissionLogic missionLogic = ...;
var result = missionLogic.OnEndMissionRequest(canLeave);
```

### MissionEnded
`public virtual bool MissionEnded(ref MissionResult missionResult)`

**用途 / Purpose:** 调用 MissionEnded 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionLogic 实例
MissionLogic missionLogic = ...;
var result = missionLogic.MissionEnded(missionResult);
```

### OnBattleEnded
`public virtual void OnBattleEnded()`

**用途 / Purpose:** 在 battle ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionLogic 实例
MissionLogic missionLogic = ...;
missionLogic.OnBattleEnded();
```

### ShowBattleResults
`public virtual void ShowBattleResults()`

**用途 / Purpose:** 显示battle results对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 MissionLogic 实例
MissionLogic missionLogic = ...;
missionLogic.ShowBattleResults();
```

### OnRetreatMission
`public virtual void OnRetreatMission()`

**用途 / Purpose:** 在 retreat mission 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionLogic 实例
MissionLogic missionLogic = ...;
missionLogic.OnRetreatMission();
```

### OnSurrenderMission
`public virtual void OnSurrenderMission()`

**用途 / Purpose:** 在 surrender mission 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionLogic 实例
MissionLogic missionLogic = ...;
missionLogic.OnSurrenderMission();
```

### OnAutoDeployTeam
`public virtual void OnAutoDeployTeam(Team team)`

**用途 / Purpose:** 在 auto deploy team 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionLogic 实例
MissionLogic missionLogic = ...;
missionLogic.OnAutoDeployTeam(team);
```

### GetExtraEquipmentElementsForCharacter
`public virtual List<EquipmentElement> GetExtraEquipmentElementsForCharacter(BasicCharacterObject character, bool getAllEquipments = false)`

**用途 / Purpose:** 读取并返回当前对象中 extra equipment elements for character 的结果。

```csharp
// 先通过子系统 API 拿到 MissionLogic 实例
MissionLogic missionLogic = ...;
var result = missionLogic.GetExtraEquipmentElementsForCharacter(character, false);
```

### OnMissionResultReady
`public virtual void OnMissionResultReady(MissionResult missionResult)`

**用途 / Purpose:** 在 mission result ready 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionLogic 实例
MissionLogic missionLogic = ...;
missionLogic.OnMissionResultReady(missionResult);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MissionLogic instance = ...;
```

## 参见

- [本区域目录](../)