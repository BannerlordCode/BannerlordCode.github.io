<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModeQuestBase`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeQuestBase

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public abstract class StoryModeQuestBase : QuestBase`
**Base:** `QuestBase`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode/StoryModeQuestBase.cs`

## Overview

`StoryModeQuestBase` lives in `StoryMode` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var implementation = new CustomStoryModeQuestBase();
```

## See Also

- [Complete Class Catalog](../catalog)