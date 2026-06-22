<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HighlightsController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HighlightsController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HighlightsController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/HighlightsController.cs`

## Overview

`HighlightsController` is a mission controller driving a mission subsystem (deployment, highlights, reinforcements). Accessed via Mission.Current or as a mission behavior.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsAnyHighlightSaved` | `public bool IsAnyHighlightSaved { get { return this._savedHighlightGroups.Count > 0; }` |

## Key Methods

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

## Usage Example

```csharp
// Typical usage of HighlightsController (Controller)
Mission.Current.GetMissionBehavior<HighlightsController>();
```

## See Also

- [Complete Class Catalog](../catalog)