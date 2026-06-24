<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HighlightsController`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HighlightsController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HighlightsController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/HighlightsController.cs`

## Overview

`HighlightsController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `HighlightsController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsHighlightsInitialized` | `public static bool IsHighlightsInitialized { get; }` |
| `IsAnyHighlightSaved` | `public bool IsAnyHighlightSaved { get; }` |
| `Id` | `public string Id { get; }` |
| `Description` | `public string Description { get; }` |
| `GroupId` | `public string GroupId { get; }` |
| `StartDelta` | `public int StartDelta { get; }` |
| `EndDelta` | `public int EndDelta { get; }` |
| `MinVisibilityScore` | `public float MinVisibilityScore { get; }` |
| `MaxHighlightDistance` | `public float MaxHighlightDistance { get; }` |
| `IsVisibilityRequired` | `public bool IsVisibilityRequired { get; }` |

## Key Methods

### RemoveHighlights
`public static void RemoveHighlights()`

**Purpose:** Removes `highlights` from the current collection or state.

### GetHighlightTypeWithId
`public HighlightsController.HighlightType GetHighlightTypeWithId(string highlightId)`

**Purpose:** Gets the current value of `highlight type with id`.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**Purpose:** Called when the `score hit` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### AddHighlightType
`public static void AddHighlightType(HighlightsController.HighlightType highlightType)`

**Purpose:** Adds `highlight type` to the current collection or state.

### SaveHighlight
`public void SaveHighlight(HighlightsController.Highlight highlight)`

**Purpose:** Saves `highlight` data.

### SaveHighlight
`public void SaveHighlight(HighlightsController.Highlight highlight, Vec3 position)`

**Purpose:** Saves `highlight` data.

### CanSaveHighlight
`public bool CanSaveHighlight(HighlightsController.HighlightType highlightType, Vec3 position)`

**Purpose:** Checks whether the current object can `save highlight`.

### GetPlayerIsLookingAtPositionScore
`public float GetPlayerIsLookingAtPositionScore(Vec3 position)`

**Purpose:** Gets the current value of `player is looking at position score`.

### CanSeePosition
`public bool CanSeePosition(Vec3 position)`

**Purpose:** Checks whether the current object can `see position`.

### ShowSummary
`public void ShowSummary()`

**Purpose:** Handles logic related to `show summary`.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<HighlightsController>();
```

## See Also

- [Complete Class Catalog](../catalog)