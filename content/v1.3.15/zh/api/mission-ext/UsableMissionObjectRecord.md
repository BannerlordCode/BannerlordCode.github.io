---
title: "UsableMissionObjectRecord"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UsableMissionObjectRecord`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UsableMissionObjectRecord

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public struct UsableMissionObjectRecord : ISynchedMissionObjectReadableRecord`
**Base:** `ISynchedMissionObjectReadableRecord`
**领域:** mission-ext

## 概述

`UsableMissionObjectRecord` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

## 主要方法

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

## 使用示例

```csharp
// 先从游戏状态中拿到一个 UsableMissionObjectRecord 实例，再调用它的公开方法
var value = new UsableMissionObjectRecord();
value.OnUserConversationStart();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
