<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Highlight`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Highlight

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Highlight`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/HighlightsController.cs`

## Overview

`Highlight` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `Description` | `public string Description { get; }` |
| `GroupId` | `public string GroupId { get; }` |
| `StartDelta` | `public int StartDelta { get; }` |
| `EndDelta` | `public int EndDelta { get; }` |
| `MinVisibilityScore` | `public float MinVisibilityScore { get; }` |
| `MaxHighlightDistance` | `public float MaxHighlightDistance { get; }` |
| `IsVisibilityRequired` | `public bool IsVisibilityRequired { get; }` |
| `IsHighlightsInitialized` | `public static bool IsHighlightsInitialized { get; }` |

## Key Methods

### RemoveHighlights
`public static void RemoveHighlights()`

**Purpose:** Removes `highlights` from the current collection or state.

### GetHighlightTypeWithId
`public HighlightType GetHighlightTypeWithId(string highlightId)`

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
`public static void AddHighlightType(HighlightType highlightType)`

**Purpose:** Adds `highlight type` to the current collection or state.

### SaveHighlight
`public void SaveHighlight(Highlight highlight)`

**Purpose:** Saves `highlight` data.

### SaveHighlight
`public void SaveHighlight(Highlight highlight, Vec3 position)`

**Purpose:** Saves `highlight` data.

### CanSaveHighlight
`public bool CanSaveHighlight(HighlightType highlightType, Vec3 position)`

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
Highlight.RemoveHighlights();
```

## See Also

- [Complete Class Catalog](../catalog)