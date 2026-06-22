<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UsableMissionObjectRecord`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UsableMissionObjectRecord

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 结构体 struct struct
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`UsableMissionObjectRecord` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

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


## 主要方法

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

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)