<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DetachmentManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DetachmentManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DetachmentManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DetachmentManager.cs`

## Overview

`DetachmentManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `DetachmentManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### ContainsDetachment
`public bool ContainsDetachment(IDetachment detachment)`

**Purpose:** Handles logic related to `contains detachment`.

### MakeDetachment
`public void MakeDetachment(IDetachment detachment)`

**Purpose:** Handles logic related to `make detachment`.

### DestroyDetachment
`public void DestroyDetachment(IDetachment destroyedDetachment)`

**Purpose:** Handles logic related to `destroy detachment`.

### OnFormationJoinDetachment
`public void OnFormationJoinDetachment(Formation formation, IDetachment joinedDetachment)`

**Purpose:** Called when the `formation join detachment` event is raised.

### OnFormationLeaveDetachment
`public void OnFormationLeaveDetachment(Formation formation, IDetachment leftDetachment)`

**Purpose:** Called when the `formation leave detachment` event is raised.

### TickDetachments
`public void TickDetachments()`

**Purpose:** Handles logic related to `tick detachments`.

### TickAgent
`public void TickAgent(Agent agent)`

**Purpose:** Handles logic related to `tick agent`.

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**Purpose:** Called when the `agent removed` event is raised.

### RemoveScoresOfAgentFromDetachments
`public void RemoveScoresOfAgentFromDetachments(Agent agent)`

**Purpose:** Removes `scores of agent from detachments` from the current collection or state.

### RemoveScoresOfAgentFromDetachment
`public void RemoveScoresOfAgentFromDetachment(Agent agent, IDetachment detachmentToBeRemovedFrom)`

**Purpose:** Removes `scores of agent from detachment` from the current collection or state.

### AddAgentAsMovingToDetachment
`public void AddAgentAsMovingToDetachment(Agent agent, IDetachment detachment)`

**Purpose:** Adds `agent as moving to detachment` to the current collection or state.

### RemoveAgentAsMovingToDetachment
`public void RemoveAgentAsMovingToDetachment(Agent agent)`

**Purpose:** Removes `agent as moving to detachment` from the current collection or state.

### AddAgentAsDefendingToDetachment
`public void AddAgentAsDefendingToDetachment(Agent agent, IDetachment detachment)`

**Purpose:** Adds `agent as defending to detachment` to the current collection or state.

### RemoveAgentAsDefendingToDetachment
`public void RemoveAgentAsDefendingToDetachment(Agent agent)`

**Purpose:** Removes `agent as defending to detachment` from the current collection or state.

### AssertDetachment
`public void AssertDetachment(Team team, IDetachment detachment)`

**Purpose:** Handles logic related to `assert detachment`.

## Usage Example

```csharp
var manager = DetachmentManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)