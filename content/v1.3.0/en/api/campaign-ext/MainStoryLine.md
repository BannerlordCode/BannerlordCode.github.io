---
title: "MainStoryLine"
description: "Auto-generated class reference for MainStoryLine."
---
# MainStoryLine

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public class MainStoryLine`
**Base:** none
**File:** `StoryMode/MainStoryLine.cs`

## Overview

`MainStoryLine` lives in `StoryMode` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPlayerInteractionRestricted` | `public bool IsPlayerInteractionRestricted { get; }` |
| `IsOnImperialQuestLine` | `public bool IsOnImperialQuestLine { get; }` |
| `IsOnAntiImperialQuestLine` | `public bool IsOnAntiImperialQuestLine { get; }` |
| `TutorialPhase` | `public TutorialPhase TutorialPhase { get; }` |
| `FirstPhase` | `public FirstPhase FirstPhase { get; }` |
| `SecondPhase` | `public SecondPhase SecondPhase { get; }` |
| `ThirdPhase` | `public ThirdPhase ThirdPhase { get; }` |
| `PlayerSupportedKingdom` | `public Kingdom PlayerSupportedKingdom { get; }` |
| `IsCompleted` | `public bool IsCompleted { get; }` |
| `DragonBanner` | `public ItemObject DragonBanner { get; }` |
| `IsFirstPhaseCompleted` | `public bool IsFirstPhaseCompleted { get; }` |
| `IsSecondPhaseCompleted` | `public bool IsSecondPhaseCompleted { get; }` |

## Key Methods

### OnSessionLaunched
`public void OnSessionLaunched()`

**Purpose:** **Purpose:** Invoked when the session launched event is raised.

```csharp
// Obtain an instance of MainStoryLine from the subsystem API first
MainStoryLine mainStoryLine = ...;
mainStoryLine.OnSessionLaunched();
```

### SetTutorialScores
`public void SetTutorialScores(Dictionary<string, float> scores)`

**Purpose:** **Purpose:** Assigns a new value to tutorial scores and updates the object's internal state.

```csharp
// Obtain an instance of MainStoryLine from the subsystem API first
MainStoryLine mainStoryLine = ...;
mainStoryLine.SetTutorialScores(dictionary<string, 0);
```

### GetTutorialScores
`public Dictionary<string, float> GetTutorialScores()`

**Purpose:** **Purpose:** Reads and returns the tutorial scores value held by the this instance.

```csharp
// Obtain an instance of MainStoryLine from the subsystem API first
MainStoryLine mainStoryLine = ...;
var result = mainStoryLine.GetTutorialScores();
```

### SetStoryLineSide
`public void SetStoryLineSide(MainStoryLineSide side)`

**Purpose:** **Purpose:** Assigns a new value to story line side and updates the object's internal state.

```csharp
// Obtain an instance of MainStoryLine from the subsystem API first
MainStoryLine mainStoryLine = ...;
mainStoryLine.SetStoryLineSide(side);
```

### SetMentorSettlements
`public void SetMentorSettlements(Settlement imperialMentorSettlement, Settlement antiImperialMentorSettlement)`

**Purpose:** **Purpose:** Assigns a new value to mentor settlements and updates the object's internal state.

```csharp
// Obtain an instance of MainStoryLine from the subsystem API first
MainStoryLine mainStoryLine = ...;
mainStoryLine.SetMentorSettlements(imperialMentorSettlement, antiImperialMentorSettlement);
```

### CompleteTutorialPhase
`public void CompleteTutorialPhase(bool isSkipped)`

**Purpose:** **Purpose:** Executes the CompleteTutorialPhase logic.

```csharp
// Obtain an instance of MainStoryLine from the subsystem API first
MainStoryLine mainStoryLine = ...;
mainStoryLine.CompleteTutorialPhase(false);
```

### CompleteFirstPhase
`public void CompleteFirstPhase()`

**Purpose:** **Purpose:** Executes the CompleteFirstPhase logic.

```csharp
// Obtain an instance of MainStoryLine from the subsystem API first
MainStoryLine mainStoryLine = ...;
mainStoryLine.CompleteFirstPhase();
```

### CompleteSecondPhase
`public void CompleteSecondPhase()`

**Purpose:** **Purpose:** Executes the CompleteSecondPhase logic.

```csharp
// Obtain an instance of MainStoryLine from the subsystem API first
MainStoryLine mainStoryLine = ...;
mainStoryLine.CompleteSecondPhase();
```

### CancelSecondAndThirdPhase
`public void CancelSecondAndThirdPhase()`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for cel second and third phase.

```csharp
// Obtain an instance of MainStoryLine from the subsystem API first
MainStoryLine mainStoryLine = ...;
mainStoryLine.CancelSecondAndThirdPhase();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MainStoryLine mainStoryLine = ...;
mainStoryLine.OnSessionLaunched();
```

## See Also

- [Area Index](../)