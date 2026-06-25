---
title: "MissionAgentStatusUIHandler"
description: "Auto-generated class reference for MissionAgentStatusUIHandler."
---
# MissionAgentStatusUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentStatusUIHandler : MissionBattleUIBaseView, IInteractionInterfaceHandler`
**Base:** `MissionBattleUIBaseView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionAgentStatusUIHandler.cs`

## Overview

`MissionAgentStatusUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionAgentStatusUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AddInteractionMessage
`public virtual void AddInteractionMessage(MissionInteractionItemBaseVM message)`

**Purpose:** **Purpose:** Adds interaction message to the current collection or state.

```csharp
// Obtain an instance of MissionAgentStatusUIHandler from the subsystem API first
MissionAgentStatusUIHandler missionAgentStatusUIHandler = ...;
missionAgentStatusUIHandler.AddInteractionMessage(message);
```

### RemoveInteractionMessage
`public virtual void RemoveInteractionMessage(MissionInteractionItemBaseVM message)`

**Purpose:** **Purpose:** Removes interaction message from the current collection or state.

```csharp
// Obtain an instance of MissionAgentStatusUIHandler from the subsystem API first
MissionAgentStatusUIHandler missionAgentStatusUIHandler = ...;
missionAgentStatusUIHandler.RemoveInteractionMessage(message);
```

### HasInteractionMessage
`public virtual bool HasInteractionMessage(MissionInteractionItemBaseVM message)`

**Purpose:** **Purpose:** Determines whether the this instance already holds interaction message.

```csharp
// Obtain an instance of MissionAgentStatusUIHandler from the subsystem API first
MissionAgentStatusUIHandler missionAgentStatusUIHandler = ...;
var result = missionAgentStatusUIHandler.HasInteractionMessage(message);
```

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IMissionAgentStatusUIHandler service = ...;
```

## See Also

- [Area Index](../)