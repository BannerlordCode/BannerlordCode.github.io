---
title: "ThirdPhase"
description: "Auto-generated class reference for ThirdPhase."
---
# ThirdPhase

**Namespace:** StoryMode.StoryModePhases
**Module:** StoryMode.StoryModePhases
**Type:** `public class ThirdPhase`
**Base:** none
**File:** `StoryMode/StoryModePhases/ThirdPhase.cs`

## Overview

`ThirdPhase` lives in `StoryMode.StoryModePhases` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.StoryModePhases` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsCompleted` | `public bool IsCompleted { get; }` |
| `OppositionKingdoms` | `public MBReadOnlyList<Kingdom> OppositionKingdoms { get; }` |
| `AllyKingdoms` | `public MBReadOnlyList<Kingdom> AllyKingdoms { get; }` |

## Key Methods

### AddAllyKingdom
`public void AddAllyKingdom(Kingdom kingdom)`

**Purpose:** **Purpose:** Adds ally kingdom to the current collection or state.

```csharp
// Obtain an instance of ThirdPhase from the subsystem API first
ThirdPhase thirdPhase = ...;
thirdPhase.AddAllyKingdom(kingdom);
```

### AddOppositionKingdom
`public void AddOppositionKingdom(Kingdom kingdom)`

**Purpose:** **Purpose:** Adds opposition kingdom to the current collection or state.

```csharp
// Obtain an instance of ThirdPhase from the subsystem API first
ThirdPhase thirdPhase = ...;
thirdPhase.AddOppositionKingdom(kingdom);
```

### RemoveOppositionKingdom
`public void RemoveOppositionKingdom(Kingdom kingdom)`

**Purpose:** **Purpose:** Removes opposition kingdom from the current collection or state.

```csharp
// Obtain an instance of ThirdPhase from the subsystem API first
ThirdPhase thirdPhase = ...;
thirdPhase.RemoveOppositionKingdom(kingdom);
```

### CompleteThirdPhase
`public void CompleteThirdPhase(QuestBase.QuestCompleteDetails defeatTheConspiracyQuestCompleteDetail)`

**Purpose:** **Purpose:** Executes the CompleteThirdPhase logic.

```csharp
// Obtain an instance of ThirdPhase from the subsystem API first
ThirdPhase thirdPhase = ...;
thirdPhase.CompleteThirdPhase(defeatTheConspiracyQuestCompleteDetail);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ThirdPhase thirdPhase = ...;
thirdPhase.AddAllyKingdom(kingdom);
```

## See Also

- [Area Index](../)