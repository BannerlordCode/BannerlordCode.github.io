---
title: "SecondPhase"
description: "Auto-generated class reference for SecondPhase."
---
# SecondPhase

**Namespace:** StoryMode.StoryModePhases
**Module:** StoryMode.StoryModePhases
**Type:** `public class SecondPhase`
**Base:** none
**File:** `StoryMode/StoryModePhases/SecondPhase.cs`

## Overview

`SecondPhase` lives in `StoryMode.StoryModePhases` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.StoryModePhases` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static SecondPhase Instance { get; }` |
| `LastConspiracyQuestCreationTime` | `public CampaignTime LastConspiracyQuestCreationTime { get; }` |
| `ConspiracyStrength` | `public float ConspiracyStrength { get; }` |

## Key Methods

### OnSessionLaunched
`public void OnSessionLaunched()`

**Purpose:** **Purpose:** Invoked when the session launched event is raised.

```csharp
// Obtain an instance of SecondPhase from the subsystem API first
SecondPhase secondPhase = ...;
secondPhase.OnSessionLaunched();
```

### TriggerConspiracy
`public void TriggerConspiracy()`

**Purpose:** **Purpose:** Triggers the logic or event associated with conspiracy.

```csharp
// Obtain an instance of SecondPhase from the subsystem API first
SecondPhase secondPhase = ...;
secondPhase.TriggerConspiracy();
```

### IncreaseConspiracyStrength
`public void IncreaseConspiracyStrength()`

**Purpose:** **Purpose:** Executes the IncreaseConspiracyStrength logic.

```csharp
// Obtain an instance of SecondPhase from the subsystem API first
SecondPhase secondPhase = ...;
secondPhase.IncreaseConspiracyStrength();
```

### DecreaseConspiracyStrength
`public void DecreaseConspiracyStrength(float amount)`

**Purpose:** **Purpose:** Executes the DecreaseConspiracyStrength logic.

```csharp
// Obtain an instance of SecondPhase from the subsystem API first
SecondPhase secondPhase = ...;
secondPhase.DecreaseConspiracyStrength(0);
```

### ActivateConspiracy
`public void ActivateConspiracy()`

**Purpose:** **Purpose:** Activates the resource, state, or feature associated with conspiracy.

```csharp
// Obtain an instance of SecondPhase from the subsystem API first
SecondPhase secondPhase = ...;
secondPhase.ActivateConspiracy();
```

### CreateNextConspiracyQuest
`public void CreateNextConspiracyQuest()`

**Purpose:** **Purpose:** Constructs a new next conspiracy quest entity and returns it to the caller.

```csharp
// Obtain an instance of SecondPhase from the subsystem API first
SecondPhase secondPhase = ...;
secondPhase.CreateNextConspiracyQuest();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SecondPhase secondPhase = ...;
secondPhase.OnSessionLaunched();
```

## See Also

- [Area Index](../)