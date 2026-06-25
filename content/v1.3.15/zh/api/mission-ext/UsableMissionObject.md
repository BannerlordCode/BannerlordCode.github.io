---
title: "UsableMissionObject"
description: "UsableMissionObject 的自动生成类参考。"
---
# UsableMissionObject

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UsableMissionObject : SynchedMissionObject, IFocusable, IUsable, IVisible`
**Base:** `SynchedMissionObject`
**File:** `TaleWorlds.MountAndBlade/UsableMissionObject.cs`

## 概述

`UsableMissionObject` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
| `IsDisabledForPlayers` | `public bool IsDisabledForPlayers { get; }` |
| `IsUserAgentExists` | `public bool IsUserAgentExists { get; }` |
| `AgentIndex` | `public int AgentIndex { get; }` |

## 主要方法

### OnUserConversationStart
`public virtual void OnUserConversationStart()`

**用途 / Purpose:** 在 「user conversation start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.OnUserConversationStart();
```

### OnUserConversationEnd
`public virtual void OnUserConversationEnd()`

**用途 / Purpose:** 在 「user conversation end」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.OnUserConversationEnd();
```

### SetAreUserPositionsUpdatedInTheMachineTick
`public void SetAreUserPositionsUpdatedInTheMachineTick(bool value)`

**用途 / Purpose:** 为 「are user positions updated in the machine tick」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.SetAreUserPositionsUpdatedInTheMachineTick(false);
```

### GetIsUserPositionsUpdatedInTheMachineTick
`public bool GetIsUserPositionsUpdatedInTheMachineTick()`

**用途 / Purpose:** 读取并返回当前对象中 「is user positions updated in the machine tick」 的结果。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.GetIsUserPositionsUpdatedInTheMachineTick();
```

### SetIsDeactivatedSynched
`public void SetIsDeactivatedSynched(bool value)`

**用途 / Purpose:** 为 「is deactivated synched」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.SetIsDeactivatedSynched(false);
```

### SetIsDisabledForPlayersSynched
`public void SetIsDisabledForPlayersSynched(bool value)`

**用途 / Purpose:** 为 「is disabled for players synched」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.SetIsDisabledForPlayersSynched(false);
```

### IsDisabledForAgent
`public virtual bool IsDisabledForAgent(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 「disabled for agent」 状态或条件。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.IsDisabledForAgent(agent);
```

### AddComponent
`public void AddComponent(UsableMissionObjectComponent component)`

**用途 / Purpose:** 将 「component」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.AddComponent(component);
```

### RemoveComponent
`public void RemoveComponent(UsableMissionObjectComponent component)`

**用途 / Purpose:** 从当前容器或状态中移除 「component」。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.RemoveComponent(component);
```

### RefreshGameEntityWithWorldPosition
`public void RefreshGameEntityWithWorldPosition()`

**用途 / Purpose:** 使 「game entity with world position」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.RefreshGameEntityWithWorldPosition();
```

### OnFocusGain
`public virtual void OnFocusGain(Agent userAgent)`

**用途 / Purpose:** 在 「focus gain」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.OnFocusGain(userAgent);
```

### OnFocusLose
`public virtual void OnFocusLose(Agent userAgent)`

**用途 / Purpose:** 在 「focus lose」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.OnFocusLose(userAgent);
```

### GetInfoTextForBeingNotInteractable
`public virtual TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

**用途 / Purpose:** 读取并返回当前对象中 「info text for being not interactable」 的结果。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.GetInfoTextForBeingNotInteractable(userAgent);
```

### SetUserForClient
`public virtual void SetUserForClient(Agent userAgent)`

**用途 / Purpose:** 为 「user for client」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.SetUserForClient(userAgent);
```

### OnUse
`public virtual void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**用途 / Purpose:** 在 「use」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.OnUse(userAgent, 0);
```

### OnAIMoveToUse
`public virtual void OnAIMoveToUse(Agent userAgent, IDetachment detachment)`

**用途 / Purpose:** 在 「a i move to use」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.OnAIMoveToUse(userAgent, detachment);
```

### OnUseStopped
`public virtual void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**用途 / Purpose:** 在 「use stopped」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.OnUseStopped(userAgent, false, 0);
```

### OnMoveToStopped
`public virtual void OnMoveToStopped(Agent movingAgent)`

**用途 / Purpose:** 在 「move to stopped」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.OnMoveToStopped(movingAgent);
```

### GetMovingAgentCount
`public virtual int GetMovingAgentCount()`

**用途 / Purpose:** 读取并返回当前对象中 「moving agent count」 的结果。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.GetMovingAgentCount();
```

### GetMovingAgentWithIndex
`public virtual Agent GetMovingAgentWithIndex(int index)`

**用途 / Purpose:** 读取并返回当前对象中 「moving agent with index」 的结果。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.GetMovingAgentWithIndex(0);
```

### RemoveMovingAgent
`public virtual void RemoveMovingAgent(Agent movingAgent)`

**用途 / Purpose:** 从当前容器或状态中移除 「moving agent」。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.RemoveMovingAgent(movingAgent);
```

### AddMovingAgent
`public virtual void AddMovingAgent(Agent movingAgent)`

**用途 / Purpose:** 将 「moving agent」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.AddMovingAgent(movingAgent);
```

### OnAIDefendBegin
`public void OnAIDefendBegin(Agent agent, IDetachment detachment)`

**用途 / Purpose:** 在 「a i defend begin」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.OnAIDefendBegin(agent, detachment);
```

### OnAIDefendEnd
`public void OnAIDefendEnd(Agent agent)`

**用途 / Purpose:** 在 「a i defend end」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.OnAIDefendEnd(agent);
```

### InitializeDefendingAgents
`public void InitializeDefendingAgents()`

**用途 / Purpose:** 为 「defending agents」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.InitializeDefendingAgents();
```

### GetDefendingAgentCount
`public int GetDefendingAgentCount()`

**用途 / Purpose:** 读取并返回当前对象中 「defending agent count」 的结果。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.GetDefendingAgentCount();
```

### AddDefendingAgent
`public void AddDefendingAgent(Agent agent)`

**用途 / Purpose:** 将 「defending agent」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.AddDefendingAgent(agent);
```

### RemoveDefendingAgent
`public void RemoveDefendingAgent(Agent agent)`

**用途 / Purpose:** 从当前容器或状态中移除 「defending agent」。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.RemoveDefendingAgent(agent);
```

### IsAgentDefending
`public bool IsAgentDefending(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 「agent defending」 状态或条件。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.IsAgentDefending(agent);
```

### SimulateTick
`public virtual void SimulateTick(float dt)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.SimulateTick(0);
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** 读取并返回当前对象中 「tick requirement」 的结果。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.GetTickRequirement();
```

### GetUserFrameForAgent
`public virtual WorldFrame GetUserFrameForAgent(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 「user frame for agent」 的结果。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.GetUserFrameForAgent(agent);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.ToString();
```

### IsAIMovingTo
`public virtual bool IsAIMovingTo(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 「a i moving to」 状态或条件。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.IsAIMovingTo(agent);
```

### HasUserPositionsChanged
`public virtual bool HasUserPositionsChanged(Agent agent)`

**用途 / Purpose:** 判断当前对象是否已经持有 「user positions changed」。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.HasUserPositionsChanged(agent);
```

### WriteToNetwork
`public override void WriteToNetwork()`

**用途 / Purpose:** 将「to network」写入目标位置。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.WriteToNetwork();
```

### IsUsableByAgent
`public virtual bool IsUsableByAgent(Agent userAgent)`

**用途 / Purpose:** 判断当前对象是否处于 「usable by agent」 状态或条件。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.IsUsableByAgent(userAgent);
```

### SetCustomLocalFrame
`public void SetCustomLocalFrame(in MatrixFrame customLocalFrame)`

**用途 / Purpose:** 为 「custom local frame」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.SetCustomLocalFrame(customLocalFrame);
```

### OnEndMission
`public override void OnEndMission()`

**用途 / Purpose:** 在 「end mission」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.OnEndMission();
```

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

**用途 / Purpose:** 在 「after read from network」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
usableMissionObject.OnAfterReadFromNetwork(valueTuple<BaseSynchedMissionObjectReadableRecord, synchedMissionObjectReadableRecord, false);
```

### GetDescriptionText
`public abstract TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 读取并返回当前对象中 「description text」 的结果。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.GetDescriptionText(gameEntity);
```

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**用途 / Purpose:** 读取「from network」的数据或状态。

```csharp
// 先通过子系统 API 拿到 UsableMissionObject 实例
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.ReadFromNetwork(bufferReadValid);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
UsableMissionObject instance = ...;
```

## 参见

- [本区域目录](../)