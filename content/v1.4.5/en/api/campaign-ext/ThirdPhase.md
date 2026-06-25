---
title: "ThirdPhase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ThirdPhase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ThirdPhase

**Namespace:** StoryMode.StoryModePhases
**Module:** StoryMode.StoryModePhases
**Type:** `public class ThirdPhase`
**Base:** none
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.StoryModePhases/ThirdPhase.cs`

## Overview

`ThirdPhase` lives in `StoryMode.StoryModePhases` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.StoryModePhases` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsCompleted` | `public bool IsCompleted { get; }` |

## Key Methods

### AddAllyKingdom
`public void AddAllyKingdom(Kingdom kingdom)`

**Purpose:** Adds `ally kingdom` to the current collection or state.

### AddOppositionKingdom
`public void AddOppositionKingdom(Kingdom kingdom)`

**Purpose:** Adds `opposition kingdom` to the current collection or state.

### RemoveOppositionKingdom
`public void RemoveOppositionKingdom(Kingdom kingdom)`

**Purpose:** Removes `opposition kingdom` from the current collection or state.

### CompleteThirdPhase
`public void CompleteThirdPhase(QuestCompleteDetails defeatTheConspiracyQuestCompleteDetail)`

**Purpose:** Handles logic related to `complete third phase`.

## Usage Example

```csharp
var value = new ThirdPhase();
value.AddAllyKingdom(kingdom);
```

## See Also

- [Complete Class Catalog](../catalog)