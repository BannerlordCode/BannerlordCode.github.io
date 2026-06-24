<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Activity`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Activity

**Namespace:** TaleWorlds.ActivitySystem
**Module:** TaleWorlds.ActivitySystem
**Type:** `public class Activity`
**Base:** none
**File:** `TaleWorlds.ActivitySystem/Activity.cs`

## Overview

`Activity` lives in `TaleWorlds.ActivitySystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ActivitySystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; set; }` |
| `IsCompleted` | `public bool IsCompleted { get; set; }` |
| `IsInProgress` | `public bool IsInProgress { get; set; }` |
| `IsAvailable` | `public bool IsAvailable { get; set; }` |

## Usage Example

```csharp
var example = new Activity();
```

## See Also

- [Complete Class Catalog](../catalog)