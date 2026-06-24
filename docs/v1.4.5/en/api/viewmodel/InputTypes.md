<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InputTypes`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InputTypes

**Namespace:** StoryMode.ViewModelCollection.Missions
**Module:** StoryMode.ViewModelCollection
**Type:** `public enum InputTypes`
**Base:** none
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode.ViewModelCollection/StoryMode.ViewModelCollection.Missions/TrainingObjectiveKeyVM.cs`

## Overview

`InputTypes` lives in `StoryMode.ViewModelCollection.Missions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.ViewModelCollection.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
InputTypes example = InputTypes.Value;
```

## See Also

- [Complete Class Catalog](../catalog)