<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConspiracyQuestBase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConspiracyQuestBase

**Namespace:** StoryMode.Quests.SecondPhase
**Module:** StoryMode.Quests
**Type:** `public abstract class ConspiracyQuestBase : QuestBase`
**Base:** `QuestBase`
**File:** `StoryMode/Quests/SecondPhase/ConspiracyQuestBase.cs`

## Overview

`ConspiracyQuestBase` lives in `StoryMode.Quests.SecondPhase` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Quests.SecondPhase` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SideNotificationText` | `public abstract TextObject SideNotificationText { get; }` |
| `StartMessageLogFromMentor` | `public abstract TextObject StartMessageLogFromMentor { get; }` |
| `StartLog` | `public abstract TextObject StartLog { get; }` |
| `ConspiracyStrengthDecreaseAmount` | `public abstract float ConspiracyStrengthDecreaseAmount { get; }` |
| `Mentor` | `public Hero Mentor { get; }` |
| `IsRemainingTimeHidden` | `public override bool IsRemainingTimeHidden { get; }` |
| `IsSpecialQuest` | `public override bool IsSpecialQuest { get; }` |

## Usage Example

```csharp
var implementation = new CustomConspiracyQuestBase();
```

## See Also

- [Complete Class Catalog](../catalog)