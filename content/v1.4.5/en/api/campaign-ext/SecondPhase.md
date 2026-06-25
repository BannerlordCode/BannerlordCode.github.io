---
title: "SecondPhase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SecondPhase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SecondPhase

**Namespace:** StoryMode.StoryModePhases
**Module:** StoryMode.StoryModePhases
**Type:** `public class SecondPhase`
**Base:** none
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.StoryModePhases/SecondPhase.cs`

## Overview

`SecondPhase` lives in `StoryMode.StoryModePhases` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.StoryModePhases` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LastConspiracyQuestCreationTime` | `public CampaignTime LastConspiracyQuestCreationTime { get; }` |
| `ConspiracyStrength` | `public float ConspiracyStrength { get; }` |

## Key Methods

### OnSessionLaunched
`public void OnSessionLaunched()`

**Purpose:** Called when the `session launched` event is raised.

### TriggerConspiracy
`public void TriggerConspiracy()`

**Purpose:** Handles logic related to `trigger conspiracy`.

### IncreaseConspiracyStrength
`public void IncreaseConspiracyStrength()`

**Purpose:** Handles logic related to `increase conspiracy strength`.

### DecreaseConspiracyStrength
`public void DecreaseConspiracyStrength(float amount)`

**Purpose:** Handles logic related to `decrease conspiracy strength`.

### ActivateConspiracy
`public void ActivateConspiracy()`

**Purpose:** Handles logic related to `activate conspiracy`.

### CreateNextConspiracyQuest
`public void CreateNextConspiracyQuest()`

**Purpose:** Creates a new `next conspiracy quest` instance or object.

## Usage Example

```csharp
var value = new SecondPhase();
value.OnSessionLaunched();
```

## See Also

- [Complete Class Catalog](../catalog)