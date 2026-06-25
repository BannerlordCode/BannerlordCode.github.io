---
title: "UsableMissionObject"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UsableMissionObject`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# UsableMissionObject

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UsableMissionObject : SynchedMissionObject, IFocusable, IUsable, IVisible`
**Base:** `SynchedMissionObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/UsableMissionObject.cs`

## 概述

`UsableMissionObject` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsDeactivated` | `public bool IsDeactivated { get; }` |
| `IsDisabledForPlayers` | `public bool IsDisabledForPlayers { get; }` |
| `IsUserAgentExists` | `public bool IsUserAgentExists { get; }` |
| `AgentIndex` | `public int AgentIndex { get; }` |
| `UserAgent` | `public Agent UserAgent { get; }` |
| `PreviousUserAgent` | `public Agent PreviousUserAgent { get; }` |
| `GameEntityWithWorldPosition` | `public GameEntityWithWorldPosition GameEntityWithWorldPosition { get; }` |
| `MovingAgent` | `public virtual Agent MovingAgent { get; }` |
| `DefendingAgents` | `public List<Agent> DefendingAgents { get; }` |
| `HasDefendingAgent` | `public bool HasDefendingAgent { get; }` |
| `LockUserFrames` | `public virtual bool LockUserFrames { get; set; }` |
| `LockUserPositions` | `public virtual bool LockUserPositions { get; set; }` |
| `IsInstantUse` | `public bool IsInstantUse { get; set; }` |
| `IsDeactivated` | `public bool IsDeactivated { get; set; }` |
| `IsDisabledForPlayers` | `public bool IsDisabledForPlayers { get; set; }` |
| `HasAIUser` | `public bool HasAIUser { get; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |

## 主要方法

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read from network` 相关逻辑。

### OnUserConversationStart
`public virtual void OnUserConversationStart()`

**用途 / Purpose:** 当 `user conversation start` 事件触发时调用此方法。

### OnUserConversationEnd
`public virtual void OnUserConversationEnd()`

**用途 / Purpose:** 当 `user conversation end` 事件触发时调用此方法。

### SetAreUserPositionsUpdatedInTheMachineTick
`public void SetAreUserPositionsUpdatedInTheMachineTick(bool value)`

**用途 / Purpose:** 设置 `are user positions updated in the machine tick` 的值或状态。

### GetIsUserPositionsUpdatedInTheMachineTick
`public bool GetIsUserPositionsUpdatedInTheMachineTick()`

**用途 / Purpose:** 获取 `is user positions updated in the machine tick` 的当前值。

### SetIsDeactivatedSynched
`public void SetIsDeactivatedSynched(bool value)`

**用途 / Purpose:** 设置 `is deactivated synched` 的值或状态。

### SetIsDisabledForPlayersSynched
`public void SetIsDisabledForPlayersSynched(bool value)`

**用途 / Purpose:** 设置 `is disabled for players synched` 的值或状态。

### IsDisabledForAgent
`public virtual bool IsDisabledForAgent(Agent agent)`

**用途 / Purpose:** 处理 `is disabled for agent` 相关逻辑。

### AddComponent
`public void AddComponent(UsableMissionObjectComponent component)`

**用途 / Purpose:** 向当前集合/状态中添加 `component`。

### RemoveComponent
`public void RemoveComponent(UsableMissionObjectComponent component)`

**用途 / Purpose:** 从当前集合/状态中移除 `component`。

### RefreshGameEntityWithWorldPosition
`public void RefreshGameEntityWithWorldPosition()`

**用途 / Purpose:** 刷新 `game entity with world position` 的显示或缓存。

### OnFocusGain
`public virtual void OnFocusGain(Agent userAgent)`

**用途 / Purpose:** 当 `focus gain` 事件触发时调用此方法。

### OnFocusLose
`public virtual void OnFocusLose(Agent userAgent)`

**用途 / Purpose:** 当 `focus lose` 事件触发时调用此方法。

### GetInfoTextForBeingNotInteractable
`public virtual TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

**用途 / Purpose:** 获取 `info text for being not interactable` 的当前值。

### SetUserForClient
`public virtual void SetUserForClient(Agent userAgent)`

**用途 / Purpose:** 设置 `user for client` 的值或状态。

### OnUse
`public virtual void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**用途 / Purpose:** 当 `use` 事件触发时调用此方法。

### OnAIMoveToUse
`public virtual void OnAIMoveToUse(Agent userAgent, IDetachment detachment)`

**用途 / Purpose:** 当 `a i move to use` 事件触发时调用此方法。

### OnUseStopped
`public virtual void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**用途 / Purpose:** 当 `use stopped` 事件触发时调用此方法。

### OnMoveToStopped
`public virtual void OnMoveToStopped(Agent movingAgent)`

**用途 / Purpose:** 当 `move to stopped` 事件触发时调用此方法。

### GetMovingAgentCount
`public virtual int GetMovingAgentCount()`

**用途 / Purpose:** 获取 `moving agent count` 的当前值。

### GetMovingAgentWithIndex
`public virtual Agent GetMovingAgentWithIndex(int index)`

**用途 / Purpose:** 获取 `moving agent with index` 的当前值。

### RemoveMovingAgent
`public virtual void RemoveMovingAgent(Agent movingAgent)`

**用途 / Purpose:** 从当前集合/状态中移除 `moving agent`。

### AddMovingAgent
`public virtual void AddMovingAgent(Agent movingAgent)`

**用途 / Purpose:** 向当前集合/状态中添加 `moving agent`。

### OnAIDefendBegin
`public void OnAIDefendBegin(Agent agent, IDetachment detachment)`

**用途 / Purpose:** 当 `a i defend begin` 事件触发时调用此方法。

### OnAIDefendEnd
`public void OnAIDefendEnd(Agent agent)`

**用途 / Purpose:** 当 `a i defend end` 事件触发时调用此方法。

### InitializeDefendingAgents
`public void InitializeDefendingAgents()`

**用途 / Purpose:** 初始化 `defending agents` 的状态、资源或绑定。

### GetDefendingAgentCount
`public int GetDefendingAgentCount()`

**用途 / Purpose:** 获取 `defending agent count` 的当前值。

### AddDefendingAgent
`public void AddDefendingAgent(Agent agent)`

**用途 / Purpose:** 向当前集合/状态中添加 `defending agent`。

### RemoveDefendingAgent
`public void RemoveDefendingAgent(Agent agent)`

**用途 / Purpose:** 从当前集合/状态中移除 `defending agent`。

### IsAgentDefending
`public bool IsAgentDefending(Agent agent)`

**用途 / Purpose:** 处理 `is agent defending` 相关逻辑。

### SimulateTick
`public virtual void SimulateTick(float dt)`

**用途 / Purpose:** 处理 `simulate tick` 相关逻辑。

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**用途 / Purpose:** 获取 `tick requirement` 的当前值。

### GetUserFrameForAgent
`public virtual WorldFrame GetUserFrameForAgent(Agent agent)`

**用途 / Purpose:** 获取 `user frame for agent` 的当前值。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### IsAIMovingTo
`public virtual bool IsAIMovingTo(Agent agent)`

**用途 / Purpose:** 处理 `is a i moving to` 相关逻辑。

### HasUserPositionsChanged
`public virtual bool HasUserPositionsChanged(Agent agent)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `user positions changed`。

### WriteToNetwork
`public override void WriteToNetwork()`

**用途 / Purpose:** 处理 `write to network` 相关逻辑。

### IsUsableByAgent
`public virtual bool IsUsableByAgent(Agent userAgent)`

**用途 / Purpose:** 处理 `is usable by agent` 相关逻辑。

### SetCustomLocalFrame
`public void SetCustomLocalFrame(in MatrixFrame customLocalFrame)`

**用途 / Purpose:** 设置 `custom local frame` 的值或状态。

### OnEndMission
`public override void OnEndMission()`

**用途 / Purpose:** 当 `end mission` 事件触发时调用此方法。

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork((BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord) synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

**用途 / Purpose:** 当 `after read from network` 事件触发时调用此方法。

### GetDescriptionText
`public abstract TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 获取 `description text` 的当前值。

## 使用示例

```csharp
var implementation = new CustomUsableMissionObject();
```

## 参见

- [完整类目录](../catalog)