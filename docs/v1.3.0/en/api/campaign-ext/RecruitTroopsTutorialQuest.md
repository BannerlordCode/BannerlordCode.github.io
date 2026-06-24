<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RecruitTroopsTutorialQuest`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RecruitTroopsTutorialQuest

**Namespace:** StoryMode.Quests.TutorialPhase
**Module:** StoryMode.Quests
**Type:** `public class RecruitTroopsTutorialQuest : StoryModeQuestBase`
**Base:** `StoryModeQuestBase`
**File:** `StoryMode/Quests/TutorialPhase/RecruitTroopsTutorialQuest.cs`

## Overview

`RecruitTroopsTutorialQuest` lives in `StoryMode.Quests.TutorialPhase` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Quests.TutorialPhase` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |

## Usage Example

```csharp
var value = new RecruitTroopsTutorialQuest();
```

## See Also

- [Complete Class Catalog](../catalog)