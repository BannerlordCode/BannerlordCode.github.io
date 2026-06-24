<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Highlight`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Highlight

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Highlight`
**Area:** mission-ext

## Overview

`Highlight` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
// Prepare the required context, then call the static entry point directly
Highlight.RemoveHighlights();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
