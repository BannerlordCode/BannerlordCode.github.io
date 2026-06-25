---
title: "MissionQuestConversationHandler"
description: "Auto-generated class reference for MissionQuestConversationHandler."
---
# MissionQuestConversationHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionQuestConversationHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionQuestConversationHandler.cs`

## Overview

`MissionQuestConversationHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionQuestConversationHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionQuestConversationHandler from the subsystem API first
MissionQuestConversationHandler missionQuestConversationHandler = ...;
missionQuestConversationHandler.OnMissionTick(0);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionQuestConversationHandler>();
```

## See Also

- [Area Index](../)