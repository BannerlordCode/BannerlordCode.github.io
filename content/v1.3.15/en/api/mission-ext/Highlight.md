---
title: "Highlight"
description: "Auto-generated class reference for Highlight."
---
# Highlight

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Highlight`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/HighlightsController.cs`

## Overview

`Highlight` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** **Purpose:** Removes highlights from the current collection or state.

```csharp
// Static call; no instance required
Highlight.RemoveHighlights();
```

### GetHighlightTypeWithId
`public HighlightsController.HighlightType GetHighlightTypeWithId(string highlightId)`

**Purpose:** **Purpose:** Reads and returns the highlight type with id value held by the this instance.

```csharp
// Obtain an instance of Highlight from the subsystem API first
Highlight highlight = ...;
var result = highlight.GetHighlightTypeWithId("example");
```

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of Highlight from the subsystem API first
Highlight highlight = ...;
highlight.AfterStart();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of Highlight from the subsystem API first
Highlight highlight = ...;
highlight.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**Purpose:** **Purpose:** Invoked when the score hit event is raised.

```csharp
// Obtain an instance of Highlight from the subsystem API first
Highlight highlight = ...;
highlight.OnScoreHit(affectedAgent, affectorAgent, attackerWeapon, false, false, blow, collisionData, 0, 0, 0);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of Highlight from the subsystem API first
Highlight highlight = ...;
highlight.OnMissionTick(0);
```

### AddHighlightType
`public static void AddHighlightType(HighlightsController.HighlightType highlightType)`

**Purpose:** **Purpose:** Adds highlight type to the current collection or state.

```csharp
// Static call; no instance required
Highlight.AddHighlightType(highlightType);
```

### SaveHighlight
`public void SaveHighlight(HighlightsController.Highlight highlight)`

**Purpose:** **Purpose:** Writes highlight to persistent storage or a stream.

```csharp
// Obtain an instance of Highlight from the subsystem API first
Highlight highlight = ...;
highlight.SaveHighlight(highlight);
```

### SaveHighlight
`public void SaveHighlight(HighlightsController.Highlight highlight, Vec3 position)`

**Purpose:** **Purpose:** Writes highlight to persistent storage or a stream.

```csharp
// Obtain an instance of Highlight from the subsystem API first
Highlight highlight = ...;
highlight.SaveHighlight(highlight, position);
```

### CanSaveHighlight
`public bool CanSaveHighlight(HighlightsController.HighlightType highlightType, Vec3 position)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for save highlight.

```csharp
// Obtain an instance of Highlight from the subsystem API first
Highlight highlight = ...;
var result = highlight.CanSaveHighlight(highlightType, position);
```

### GetPlayerIsLookingAtPositionScore
`public float GetPlayerIsLookingAtPositionScore(Vec3 position)`

**Purpose:** **Purpose:** Reads and returns the player is looking at position score value held by the this instance.

```csharp
// Obtain an instance of Highlight from the subsystem API first
Highlight highlight = ...;
var result = highlight.GetPlayerIsLookingAtPositionScore(position);
```

### CanSeePosition
`public bool CanSeePosition(Vec3 position)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for see position.

```csharp
// Obtain an instance of Highlight from the subsystem API first
Highlight highlight = ...;
var result = highlight.CanSeePosition(position);
```

### ShowSummary
`public void ShowSummary()`

**Purpose:** **Purpose:** Displays the UI or element associated with summary.

```csharp
// Obtain an instance of Highlight from the subsystem API first
Highlight highlight = ...;
highlight.ShowSummary();
```

## Usage Example

```csharp
Highlight.RemoveHighlights();
```

## See Also

- [Area Index](../)