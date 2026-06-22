<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UsableMissionObject`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UsableMissionObject

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `UsableMissionObject` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `FocusableObjectType` | `public virtual FocusableObjectType FocusableObjectType { get; }` |
| `IsFocusable` | `public virtual bool IsFocusable { get; }` |
| `UserAgent` | `public Agent UserAgent { get; }` |
| `PreviousUserAgent` | `public Agent PreviousUserAgent { get; }` |
| `GameEntityWithWorldPosition` | `public GameEntityWithWorldPosition GameEntityWithWorldPosition { get; }` |
| `MovingAgent` | `public virtual Agent MovingAgent { get; }` |
| `DefendingAgents` | `public List<Agent> DefendingAgents { get; }` |
| `HasDefendingAgent` | `public bool HasDefendingAgent { get; }` |
| `DisableCombatActionsOnUse` | `public virtual bool DisableCombatActionsOnUse { get; set; }` |
| `LockUserFrames` | `public virtual bool LockUserFrames { get; set; }` |
| `LockUserPositions` | `public virtual bool LockUserPositions { get; set; }` |
| `IsInstantUse` | `public bool IsInstantUse { get; set; }` |
| `IsDeactivated` | `public bool IsDeactivated { get; set; }` |
| `IsDisabledForPlayers` | `public bool IsDisabledForPlayers { get; set; }` |
| `InteractionEntity` | `public virtual WeakGameEntity InteractionEntity { get; }` |
| `HasAIUser` | `public bool HasAIUser { get; }` |
| `HasUser` | `public bool HasUser { get; }` |
| `HasAIMovingTo` | `public virtual bool HasAIMovingTo { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `IsDeactivated` | `public bool IsDeactivated { get; }` |


## Key Methods

### OnUserConversationStart

```csharp
public virtual void OnUserConversationStart()
```

### OnUserConversationEnd

```csharp
public virtual void OnUserConversationEnd()
```

### SetAreUserPositionsUpdatedInTheMachineTick

```csharp
public void SetAreUserPositionsUpdatedInTheMachineTick(bool value)
```

### GetIsUserPositionsUpdatedInTheMachineTick

```csharp
public bool GetIsUserPositionsUpdatedInTheMachineTick()
```

### SetIsDeactivatedSynched

```csharp
public void SetIsDeactivatedSynched(bool value)
```

### SetIsDisabledForPlayersSynched

```csharp
public void SetIsDisabledForPlayersSynched(bool value)
```

### IsDisabledForAgent

```csharp
public virtual bool IsDisabledForAgent(Agent agent)
```

### AddComponent

```csharp
public void AddComponent(UsableMissionObjectComponent component)
```

### RemoveComponent

```csharp
public void RemoveComponent(UsableMissionObjectComponent component)
```

### RefreshGameEntityWithWorldPosition

```csharp
public void RefreshGameEntityWithWorldPosition()
```

### OnFocusGain

```csharp
public virtual void OnFocusGain(Agent userAgent)
```

### OnFocusLose

```csharp
public virtual void OnFocusLose(Agent userAgent)
```

### GetInfoTextForBeingNotInteractable

```csharp
public virtual TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)
```

### SetUserForClient

```csharp
public virtual void SetUserForClient(Agent userAgent)
```

### OnUse

```csharp
public virtual void OnUse(Agent userAgent, sbyte agentBoneIndex)
```

### OnAIMoveToUse

```csharp
public virtual void OnAIMoveToUse(Agent userAgent, IDetachment detachment)
```

### OnUseStopped

```csharp
public virtual void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)
```

### OnMoveToStopped

```csharp
public virtual void OnMoveToStopped(Agent movingAgent)
```

### GetMovingAgentCount

```csharp
public virtual int GetMovingAgentCount()
```

### GetMovingAgentWithIndex

```csharp
public virtual Agent GetMovingAgentWithIndex(int index)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)