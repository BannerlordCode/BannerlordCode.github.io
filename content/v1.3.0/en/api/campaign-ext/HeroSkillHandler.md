---
title: "HeroSkillHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeroSkillHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HeroSkillHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class HeroSkillHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/HeroSkillHandler.cs`

## Overview

`HeroSkillHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `HeroSkillHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new HeroSkillHandler());
```

## See Also

- [Complete Class Catalog](../catalog)