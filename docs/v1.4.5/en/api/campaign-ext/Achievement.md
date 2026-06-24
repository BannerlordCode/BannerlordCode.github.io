<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Achievement`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Achievement

**Namespace:** TaleWorlds.AchievementSystem
**Module:** TaleWorlds.AchievementSystem
**Type:** `public class Achievement`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.AchievementSystem/TaleWorlds.AchievementSystem/Achievement.cs`

## Overview

`Achievement` lives in `TaleWorlds.AchievementSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.AchievementSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; set; }` |
| `LockedDisplayName` | `public string LockedDisplayName { get; set; }` |
| `UnlockedDisplayName` | `public string UnlockedDisplayName { get; set; }` |
| `LockedDescription` | `public string LockedDescription { get; set; }` |
| `UnlockedDescription` | `public string UnlockedDescription { get; set; }` |
| `TargetProgress` | `public int TargetProgress { get; set; }` |
| `IsUnlocked` | `public bool IsUnlocked { get; set; }` |
| `CurrentProgress` | `public int CurrentProgress { get; set; }` |

## Usage Example

```csharp
var example = new Achievement();
```

## See Also

- [Complete Class Catalog](../catalog)