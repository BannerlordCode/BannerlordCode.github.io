<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HighlightsController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HighlightsController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HighlightsController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/HighlightsController.cs`

## 概述

`HighlightsController` 是一个任务控制器，驱动某个任务子系统（部署、高光、援兵等）。经 Mission.Current 或作为任务行为访问。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsAnyHighlightSaved` | `public bool IsAnyHighlightSaved { get { return this._savedHighlightGroups.Count > 0; }` |

## 主要方法

### RemoveHighlights
```csharp
public static void RemoveHighlights()
```

### GetHighlightTypeWithId
```csharp
public HighlightsController.HighlightType GetHighlightTypeWithId(string highlightId)
```

### AfterStart
```csharp
public override void AfterStart()
```

### OnAgentRemoved
```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
```

### OnScoreHit
```csharp
public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

### AddHighlightType
```csharp
public static void AddHighlightType(HighlightsController.HighlightType highlightType)
```

### SaveHighlight
```csharp
public void SaveHighlight(HighlightsController.Highlight highlight)
```

### SaveHighlight
```csharp
public void SaveHighlight(HighlightsController.Highlight highlight, Vec3 position)
```

### CanSaveHighlight
```csharp
public bool CanSaveHighlight(HighlightsController.HighlightType highlightType, Vec3 position)
```

### GetPlayerIsLookingAtPositionScore
```csharp
public float GetPlayerIsLookingAtPositionScore(Vec3 position)
```

### CanSeePosition
```csharp
public bool CanSeePosition(Vec3 position)
```

### ShowSummary
```csharp
public void ShowSummary()
```

## 使用示例

```csharp
// HighlightsController (Controller) 的典型用法
Mission.Current.GetMissionBehavior<HighlightsController>();
```

## 参见

- [完整类目录](../catalog)