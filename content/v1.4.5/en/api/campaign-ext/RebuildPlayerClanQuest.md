---
title: "RebuildPlayerClanQuest"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RebuildPlayerClanQuest`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RebuildPlayerClanQuest

**Namespace:** StoryMode.Quests.PlayerClanQuests
**Module:** StoryMode.Quests
**Type:** `public class RebuildPlayerClanQuest : StoryModeQuestBase`
**Base:** `StoryModeQuestBase`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.Quests.PlayerClanQuests/RebuildPlayerClanQuest.cs`

## Overview

`RebuildPlayerClanQuest` lives in `StoryMode.Quests.PlayerClanQuests` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Quests.PlayerClanQuests` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new RebuildPlayerClanQuest();
```

## See Also

- [Complete Class Catalog](../catalog)