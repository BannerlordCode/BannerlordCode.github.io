---
title: "HideoutBattleEndState__StoryMode_Quests_TutorialPhase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HideoutBattleEndState`
- [← Area / Back to gameplay](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HideoutBattleEndState

**Namespace:** StoryMode.Quests.TutorialPhase
**Module:** StoryMode.Quests
**Type:** `public enum HideoutBattleEndState`
**Base:** none
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.Quests.TutorialPhase/FindHideoutTutorialQuest.cs`

## Overview

`HideoutBattleEndState` lives in `StoryMode.Quests.TutorialPhase` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Quests.TutorialPhase` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
HideoutBattleEndState example = HideoutBattleEndState.Value;
```

## See Also

- [Complete Class Catalog](../catalog)