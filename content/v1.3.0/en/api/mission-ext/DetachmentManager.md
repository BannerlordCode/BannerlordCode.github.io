---
title: "DetachmentManager"
description: "Auto-generated class reference for DetachmentManager."
---
# DetachmentManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DetachmentManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/DetachmentManager.cs`

## Overview

`DetachmentManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `DetachmentManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Detachments` | `public MBReadOnlyList<ValueTuple<IDetachment, DetachmentData>> Detachments { get; }` |

## Key Methods

### Clear
`public void Clear()`

**Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.Clear();
```

### ContainsDetachment
`public bool ContainsDetachment(IDetachment detachment)`

**Purpose:** Indicates whether the this instance contains detachment.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
var result = detachmentManager.ContainsDetachment(detachment);
```

### MakeDetachment
`public void MakeDetachment(IDetachment detachment)`

**Purpose:** Executes the MakeDetachment logic.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.MakeDetachment(detachment);
```

### DestroyDetachment
`public void DestroyDetachment(IDetachment destroyedDetachment)`

**Purpose:** Executes the DestroyDetachment logic.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.DestroyDetachment(destroyedDetachment);
```

### OnFormationJoinDetachment
`public void OnFormationJoinDetachment(Formation formation, IDetachment joinedDetachment)`

**Purpose:** Invoked when the formation join detachment event is raised.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.OnFormationJoinDetachment(formation, joinedDetachment);
```

### OnFormationLeaveDetachment
`public void OnFormationLeaveDetachment(Formation formation, IDetachment leftDetachment)`

**Purpose:** Invoked when the formation leave detachment event is raised.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.OnFormationLeaveDetachment(formation, leftDetachment);
```

### TickDetachments
`public void TickDetachments()`

**Purpose:** Advances the detachments state each frame or update cycle.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.TickDetachments();
```

### TickAgent
`public void TickAgent(Agent agent)`

**Purpose:** Advances the agent state each frame or update cycle.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.TickAgent(agent);
```

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.OnAgentRemoved(agent);
```

### RemoveScoresOfAgentFromDetachments
`public void RemoveScoresOfAgentFromDetachments(Agent agent)`

**Purpose:** Removes scores of agent from detachments from the current collection or state.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.RemoveScoresOfAgentFromDetachments(agent);
```

### RemoveScoresOfAgentFromDetachment
`public void RemoveScoresOfAgentFromDetachment(Agent agent, IDetachment detachmentToBeRemovedFrom)`

**Purpose:** Removes scores of agent from detachment from the current collection or state.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.RemoveScoresOfAgentFromDetachment(agent, detachmentToBeRemovedFrom);
```

### AddAgentAsMovingToDetachment
`public void AddAgentAsMovingToDetachment(Agent agent, IDetachment detachment)`

**Purpose:** Adds agent as moving to detachment to the current collection or state.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.AddAgentAsMovingToDetachment(agent, detachment);
```

### RemoveAgentAsMovingToDetachment
`public void RemoveAgentAsMovingToDetachment(Agent agent)`

**Purpose:** Removes agent as moving to detachment from the current collection or state.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.RemoveAgentAsMovingToDetachment(agent);
```

### AddAgentAsDefendingToDetachment
`public void AddAgentAsDefendingToDetachment(Agent agent, IDetachment detachment)`

**Purpose:** Adds agent as defending to detachment to the current collection or state.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.AddAgentAsDefendingToDetachment(agent, detachment);
```

### RemoveAgentAsDefendingToDetachment
`public void RemoveAgentAsDefendingToDetachment(Agent agent)`

**Purpose:** Removes agent as defending to detachment from the current collection or state.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.RemoveAgentAsDefendingToDetachment(agent);
```

### AssertDetachment
`public void AssertDetachment(Team team, IDetachment detachment)`

**Purpose:** Executes the AssertDetachment logic.

```csharp
// Obtain an instance of DetachmentManager from the subsystem API first
DetachmentManager detachmentManager = ...;
detachmentManager.AssertDetachment(team, detachment);
```

## Usage Example

```csharp
var manager = DetachmentManager.Current;
```

## See Also

- [Area Index](../)