<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeWeaponMovementComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeWeaponMovementComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeWeaponMovementComponent : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade/SiegeWeaponMovementComponent.cs`

## 概述

`SiegeWeaponMovementComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<SiegeWeaponMovementComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `HasApproachedTarget` | `public bool HasApproachedTarget { get { return !this._pathTracker.PathExists() || this._pathTracker.PathTraveledPercentage > 0.7f; }` |
| `HasArrivedAtTarget` | `public bool HasArrivedAtTarget { get { return !this._pathTracker.PathExists() || this._pathTracker.HasReachedEnd; }` |
| `MovementSoundCodeID` | `public int MovementSoundCodeID { get; set; }` |
| `MinSpeed` | `public float MinSpeed { get; set; }` |
| `MaxSpeed` | `public float MaxSpeed { get; set; }` |
| `PathEntityName` | `public string PathEntityName { get; set; }` |
| `GhostEntitySpeedMultiplier` | `public float GhostEntitySpeedMultiplier { get; set; }` |
| `WheelDiameter` | `public float WheelDiameter { set { this._wheelDiameter = value; this._wheelCircumference = this._wheelDiameter * 3.1415927f; }` |
| `MainObject` | `public SynchedMissionObject MainObject { get; set; }` |

## 主要方法

### HighlightPath
```csharp
public void HighlightPath()
```

### SetupGhostEntity
```csharp
public void SetupGhostEntity()
```

### SetGhostVisibility
```csharp
public void SetGhostVisibility(bool isVisible)
```

### OnEditorInit
```csharp
public void OnEditorInit()
```

### SetDistanceTraveledAsClient
```csharp
public void SetDistanceTraveledAsClient(float distance)
```

### IsOnTickRequired
```csharp
public override bool IsOnTickRequired()
```

### TickParallelManually
```csharp
public void TickParallelManually(float dt)
```

### GetInitialFrame
```csharp
public MatrixFrame GetInitialFrame()
```

### GetTargetFrame
```csharp
public MatrixFrame GetTargetFrame()
```

### SetDestinationNavMeshIdState
```csharp
public void SetDestinationNavMeshIdState(bool enabled)
```

### MoveToTargetAsClient
```csharp
public void MoveToTargetAsClient()
```

### GetTotalDistanceTraveledForPathTracker
```csharp
public float GetTotalDistanceTraveledForPathTracker()
```

### SetTotalDistanceTraveledForPathTracker
```csharp
public void SetTotalDistanceTraveledForPathTracker(float distanceTraveled)
```

### SetTargetFrameForPathTracker
```csharp
public void SetTargetFrameForPathTracker()
```

### FindGroundFrameForWheelsStatic
```csharp
public static MatrixFrame FindGroundFrameForWheelsStatic(ref MatrixFrame frame, float axleLength, float wheelDiameter, WeakGameEntity gameEntity, List<GameEntity> wheels, Scene scene)
```

## 使用示例

```csharp
// SiegeWeaponMovementComponent (Component) 的典型用法
agent.GetComponent<SiegeWeaponMovementComponent>();
```

## 参见

- [完整类目录](../catalog)