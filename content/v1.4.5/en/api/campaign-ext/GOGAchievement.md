---
title: "GOGAchievement"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GOGAchievement`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GOGAchievement

**Namespace:** TaleWorlds.PlatformService.GOG
**Module:** TaleWorlds.PlatformService
**Type:** `public class GOGAchievement`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.PlatformService.GOG/TaleWorlds.PlatformService.GOG/GOGAchievement.cs`

## Overview

`GOGAchievement` lives in `TaleWorlds.PlatformService.GOG` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService.GOG` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AchievementName` | `public string AchievementName { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `Achieved` | `public bool Achieved { get; set; }` |
| `Progress` | `public int Progress { get; set; }` |

## Usage Example

```csharp
var example = new GOGAchievement();
```

## See Also

- [Complete Class Catalog](../catalog)