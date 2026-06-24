<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IAchievementService`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IAchievementService

**Namespace:** TaleWorlds.AchievementSystem
**Module:** TaleWorlds.AchievementSystem
**Type:** `class`
**Base:** none
**File:** `TaleWorlds.AchievementSystem/IAchievementService.cs`

## Overview

`IAchievementService` lives in `TaleWorlds.AchievementSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.AchievementSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
IAchievementService implementation = GetAchievementServiceImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)