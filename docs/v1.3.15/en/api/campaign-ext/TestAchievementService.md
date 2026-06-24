<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TestAchievementService`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TestAchievementService

**Namespace:** TaleWorlds.AchievementSystem
**Module:** TaleWorlds.AchievementSystem
**Type:** `public class TestAchievementService : IAchievementService`
**Base:** `IAchievementService`
**File:** `TaleWorlds.AchievementSystem/TestAchievementService.cs`

## Overview

`TestAchievementService` lives in `TaleWorlds.AchievementSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.AchievementSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new TestAchievementService();
```

## See Also

- [Complete Class Catalog](../catalog)