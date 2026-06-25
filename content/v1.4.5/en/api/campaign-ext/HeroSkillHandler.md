---
title: "HeroSkillHandler"
description: "Auto-generated class reference for HeroSkillHandler."
---
# HeroSkillHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class HeroSkillHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/HeroSkillHandler.cs`

## Overview

`HeroSkillHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `HeroSkillHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of HeroSkillHandler from the subsystem API first
HeroSkillHandler heroSkillHandler = ...;
heroSkillHandler.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of HeroSkillHandler from the subsystem API first
HeroSkillHandler heroSkillHandler = ...;
heroSkillHandler.OnMissionTick(0);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<HeroSkillHandler>();
```

## See Also

- [Area Index](../)