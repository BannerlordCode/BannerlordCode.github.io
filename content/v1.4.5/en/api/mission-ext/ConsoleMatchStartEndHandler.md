---
title: "ConsoleMatchStartEndHandler"
description: "Auto-generated class reference for ConsoleMatchStartEndHandler."
---
# ConsoleMatchStartEndHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConsoleMatchStartEndHandler : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/ConsoleMatchStartEndHandler.cs`

## Overview

`ConsoleMatchStartEndHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `ConsoleMatchStartEndHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of ConsoleMatchStartEndHandler from the subsystem API first
ConsoleMatchStartEndHandler consoleMatchStartEndHandler = ...;
consoleMatchStartEndHandler.OnBehaviorInitialize();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of ConsoleMatchStartEndHandler from the subsystem API first
ConsoleMatchStartEndHandler consoleMatchStartEndHandler = ...;
consoleMatchStartEndHandler.OnRemoveBehavior();
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Invoked when the agent build event is raised.

```csharp
// Obtain an instance of ConsoleMatchStartEndHandler from the subsystem API first
ConsoleMatchStartEndHandler consoleMatchStartEndHandler = ...;
consoleMatchStartEndHandler.OnAgentBuild(agent, banner);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of ConsoleMatchStartEndHandler from the subsystem API first
ConsoleMatchStartEndHandler consoleMatchStartEndHandler = ...;
consoleMatchStartEndHandler.OnMissionTick(0);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<ConsoleMatchStartEndHandler>();
```

## See Also

- [Area Index](../)