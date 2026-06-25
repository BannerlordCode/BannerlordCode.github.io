---
title: "HighlightsController"
description: "Auto-generated class reference for HighlightsController."
---
# HighlightsController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HighlightsController : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/HighlightsController.cs`

## Overview

`HighlightsController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `HighlightsController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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

**Purpose:** Removes highlights from the current collection or state.

```csharp
// Static call; no instance required
HighlightsController.RemoveHighlights();
```

### GetHighlightTypeWithId
`public HighlightType GetHighlightTypeWithId(string highlightId)`

**Purpose:** Reads and returns the highlight type with id value held by the this instance.

```csharp
// Obtain an instance of HighlightsController from the subsystem API first
HighlightsController highlightsController = ...;
var result = highlightsController.GetHighlightTypeWithId("example");
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of HighlightsController from the subsystem API first
HighlightsController highlightsController = ...;
highlightsController.AfterStart();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of HighlightsController from the subsystem API first
HighlightsController highlightsController = ...;
highlightsController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**Purpose:** Invoked when the score hit event is raised.

```csharp
// Obtain an instance of HighlightsController from the subsystem API first
HighlightsController highlightsController = ...;
highlightsController.OnScoreHit(affectedAgent, affectorAgent, attackerWeapon, false, false, blow, collisionData, 0, 0, 0);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of HighlightsController from the subsystem API first
HighlightsController highlightsController = ...;
highlightsController.OnMissionTick(0);
```

### AddHighlightType
`public static void AddHighlightType(HighlightType highlightType)`

**Purpose:** Adds highlight type to the current collection or state.

```csharp
// Static call; no instance required
HighlightsController.AddHighlightType(highlightType);
```

### SaveHighlight
`public void SaveHighlight(Highlight highlight)`

**Purpose:** Writes highlight to persistent storage or a stream.

```csharp
// Obtain an instance of HighlightsController from the subsystem API first
HighlightsController highlightsController = ...;
highlightsController.SaveHighlight(highlight);
```

### SaveHighlight
`public void SaveHighlight(Highlight highlight, Vec3 position)`

**Purpose:** Writes highlight to persistent storage or a stream.

```csharp
// Obtain an instance of HighlightsController from the subsystem API first
HighlightsController highlightsController = ...;
highlightsController.SaveHighlight(highlight, position);
```

### CanSaveHighlight
`public bool CanSaveHighlight(HighlightType highlightType, Vec3 position)`

**Purpose:** Checks whether the this instance meets the preconditions for save highlight.

```csharp
// Obtain an instance of HighlightsController from the subsystem API first
HighlightsController highlightsController = ...;
var result = highlightsController.CanSaveHighlight(highlightType, position);
```

### GetPlayerIsLookingAtPositionScore
`public float GetPlayerIsLookingAtPositionScore(Vec3 position)`

**Purpose:** Reads and returns the player is looking at position score value held by the this instance.

```csharp
// Obtain an instance of HighlightsController from the subsystem API first
HighlightsController highlightsController = ...;
var result = highlightsController.GetPlayerIsLookingAtPositionScore(position);
```

### CanSeePosition
`public bool CanSeePosition(Vec3 position)`

**Purpose:** Checks whether the this instance meets the preconditions for see position.

```csharp
// Obtain an instance of HighlightsController from the subsystem API first
HighlightsController highlightsController = ...;
var result = highlightsController.CanSeePosition(position);
```

### ShowSummary
`public void ShowSummary()`

**Purpose:** Displays the UI or element associated with summary.

```csharp
// Obtain an instance of HighlightsController from the subsystem API first
HighlightsController highlightsController = ...;
highlightsController.ShowSummary();
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<HighlightsController>();
```

## See Also

- [Area Index](../)