<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DetachmentManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DetachmentManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** public class DetachmentManager
**Base:** none
**File:** `TaleWorlds.MountAndBlade/DetachmentManager.cs`

## Overview

`DetachmentManager` owns detachments — special task slots like siege ladders, towers, and ranged positions that formations can man. It creates/destroys detachments (`MakeDetachment`/`DestroyDetachment`), tracks which formations join/leave, and ticks them. Mods query `Detachments` or create custom detachments for new siege engines.

## Key Properties

| Name | Signature |
|------|-----------|
| `Detachments` | `public MBReadOnlyList<ValueTuple<IDetachment, DetachmentData>> Detachments { get { return this._detachments; }` |

## Key Methods

### Clear
```csharp
public void Clear()
```

### ContainsDetachment
```csharp
public bool ContainsDetachment(IDetachment detachment)
```

### MakeDetachment
```csharp
public void MakeDetachment(IDetachment detachment)
```

### DestroyDetachment
```csharp
public void DestroyDetachment(IDetachment destroyedDetachment)
```

### OnFormationJoinDetachment
```csharp
public void OnFormationJoinDetachment(Formation formation, IDetachment joinedDetachment)
```

### OnFormationLeaveDetachment
```csharp
public void OnFormationLeaveDetachment(Formation formation, IDetachment leftDetachment)
```

### TickDetachments
```csharp
public void TickDetachments()
```

### TickAgent
```csharp
public void TickAgent(Agent agent)
```

### OnAgentRemoved
```csharp
public void OnAgentRemoved(Agent agent)
```

### RemoveScoresOfAgentFromDetachments
```csharp
public void RemoveScoresOfAgentFromDetachments(Agent agent)
```

### RemoveScoresOfAgentFromDetachment
```csharp
public void RemoveScoresOfAgentFromDetachment(Agent agent, IDetachment detachmentToBeRemovedFrom)
```

### AddAgentAsMovingToDetachment
```csharp
public void AddAgentAsMovingToDetachment(Agent agent, IDetachment detachment)
```

### RemoveAgentAsMovingToDetachment
```csharp
public void RemoveAgentAsMovingToDetachment(Agent agent)
```

### AddAgentAsDefendingToDetachment
```csharp
public void AddAgentAsDefendingToDetachment(Agent agent, IDetachment detachment)
```

### RemoveAgentAsDefendingToDetachment
```csharp
public void RemoveAgentAsDefendingToDetachment(Agent agent)
```

### AssertDetachment
```csharp
public void AssertDetachment(Team team, IDetachment detachment)
```

## Usage Example

```csharp
// List all detachments and which formation (if any) is manning each
var dm = Mission.Current.GetMissionBehavior<DetachmentManager>();
foreach (var det in dm.Detachments)
{
    IDetachment d = det.Item1;
    int manned = d.AgentCount;
    InformationManager.DisplayMessage(new InformationMessage(
        $"Detachment {d.GetType().Name}: {manned} agents manning"));
}
```

## See Also

- [Complete Class Catalog](../catalog)