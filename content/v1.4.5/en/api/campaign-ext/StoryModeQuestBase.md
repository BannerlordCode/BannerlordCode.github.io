---
title: "StoryModeQuestBase"
description: "Auto-generated class reference for StoryModeQuestBase."
---
# StoryModeQuestBase

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public abstract class StoryModeQuestBase : QuestBase`
**Base:** `QuestBase`
**File:** `Modules.StoryMode/StoryMode/StoryMode/StoryModeQuestBase.cs`

## Overview

`StoryModeQuestBase` lives in `StoryMode` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
StoryModeQuestBase instance = ...;
```

## See Also

- [Area Index](../)