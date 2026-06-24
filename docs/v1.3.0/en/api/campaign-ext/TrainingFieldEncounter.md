<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TrainingFieldEncounter`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TrainingFieldEncounter

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public class TrainingFieldEncounter : LocationEncounter`
**Base:** `LocationEncounter`
**File:** `StoryMode/TrainingFieldEncounter.cs`

## Overview

`TrainingFieldEncounter` lives in `StoryMode` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateAndOpenMissionController
`public override IMission CreateAndOpenMissionController(Location nextLocation, Location previousLocation = null, CharacterObject talkToChar = null, string playerSpecialSpawnTag = null)`

**Purpose:** Creates a new `and open mission controller` instance or object.

## Usage Example

```csharp
var value = new TrainingFieldEncounter();
value.CreateAndOpenMissionController(nextLocation, null, null, "example");
```

## See Also

- [Complete Class Catalog](../catalog)