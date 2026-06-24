<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModeBannerEffects`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeBannerEffects

**Namespace:** StoryMode.StoryModeObjects
**Module:** StoryMode.StoryModeObjects
**Type:** `public class StoryModeBannerEffects`
**Base:** none
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.StoryModeObjects/StoryModeBannerEffects.cs`

## Overview

`StoryModeBannerEffects` lives in `StoryMode.StoryModeObjects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.StoryModeObjects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new StoryModeBannerEffects();
```

## See Also

- [Complete Class Catalog](../catalog)