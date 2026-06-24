<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TestActivityService`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TestActivityService

**Namespace:** TaleWorlds.ActivitySystem
**Module:** TaleWorlds.ActivitySystem
**Type:** `public class TestActivityService : IActivityService`
**Base:** `IActivityService`
**File:** `Bannerlord.Source/bin/TaleWorlds.ActivitySystem/TaleWorlds.ActivitySystem/TestActivityService.cs`

## Overview

`TestActivityService` lives in `TaleWorlds.ActivitySystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ActivitySystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetActivityTransition
`public ActivityTransition GetActivityTransition(string activityId)`

**Purpose:** Gets the current value of `activity transition`.

## Usage Example

```csharp
var value = new TestActivityService();
value.GetActivityTransition("example");
```

## See Also

- [Complete Class Catalog](../catalog)