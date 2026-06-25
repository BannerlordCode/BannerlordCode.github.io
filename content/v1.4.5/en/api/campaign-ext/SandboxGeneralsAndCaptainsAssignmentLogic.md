---
title: "SandboxGeneralsAndCaptainsAssignmentLogic"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandboxGeneralsAndCaptainsAssignmentLogic`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandboxGeneralsAndCaptainsAssignmentLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class SandboxGeneralsAndCaptainsAssignmentLogic : GeneralsAndCaptainsAssignmentLogic`
**Base:** `GeneralsAndCaptainsAssignmentLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/SandboxGeneralsAndCaptainsAssignmentLogic.cs`

## Overview

`SandboxGeneralsAndCaptainsAssignmentLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `SandboxGeneralsAndCaptainsAssignmentLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new SandboxGeneralsAndCaptainsAssignmentLogic());
```

## See Also

- [Complete Class Catalog](../catalog)