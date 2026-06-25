---
title: "TutorialQuestPhase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialQuestPhase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TutorialQuestPhase

**Namespace:** StoryMode.StoryModePhases
**Module:** StoryMode.StoryModePhases
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.StoryModePhases/TutorialQuestPhase.cs`

## Overview

`TutorialQuestPhase` lives in `StoryMode.StoryModePhases` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.StoryModePhases` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new TutorialQuestPhase();
```

## See Also

- [Complete Class Catalog](../catalog)