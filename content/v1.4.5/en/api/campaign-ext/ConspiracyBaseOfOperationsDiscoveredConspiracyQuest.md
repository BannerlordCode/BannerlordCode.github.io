---
title: "ConspiracyBaseOfOperationsDiscoveredConspiracyQuest"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConspiracyBaseOfOperationsDiscoveredConspiracyQuest`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConspiracyBaseOfOperationsDiscoveredConspiracyQuest

**Namespace:** StoryMode.Quests.SecondPhase.ConspiracyQuests
**Module:** StoryMode.Quests
**Type:** `public class ConspiracyBaseOfOperationsDiscoveredConspiracyQuest : ConspiracyQuestBase`
**Base:** `ConspiracyQuestBase`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.Quests.SecondPhase.ConspiracyQuests/ConspiracyBaseOfOperationsDiscoveredConspiracyQuest.cs`

## Overview

`ConspiracyBaseOfOperationsDiscoveredConspiracyQuest` lives in `StoryMode.Quests.SecondPhase.ConspiracyQuests` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Quests.SecondPhase.ConspiracyQuests` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SideNotificationText` | `public override TextObject SideNotificationText { get; }` |
| `StartMessageLogFromMentor` | `public override TextObject StartMessageLogFromMentor { get; }` |
| `StartLog` | `public override TextObject StartLog { get; }` |

## Usage Example

```csharp
var value = new ConspiracyBaseOfOperationsDiscoveredConspiracyQuest();
```

## See Also

- [Complete Class Catalog](../catalog)