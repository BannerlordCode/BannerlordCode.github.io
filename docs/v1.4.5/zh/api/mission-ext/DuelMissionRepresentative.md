<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DuelMissionRepresentative`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DuelMissionRepresentative

**Namespace:** TaleWorlds.MountAndBlade.MissionRepresentatives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DuelMissionRepresentative : MissionRepresentativeBase`
**Base:** `MissionRepresentativeBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.MissionRepresentatives/DuelMissionRepresentative.cs`

## 概述

`DuelMissionRepresentative` 位于 `TaleWorlds.MountAndBlade.MissionRepresentatives`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.MissionRepresentatives` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Bounty` | `public int Bounty { get; }` |
| `Score` | `public int Score { get; }` |
| `NumberOfWins` | `public int NumberOfWins { get; }` |

## 主要方法

### Initialize
`public override void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### AddRemoveMessageHandlers
`public void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegisterer.RegisterMode mode)`

**用途 / Purpose:** 向当前集合/状态中添加 `remove message handlers`。

### OnInteraction
`public void OnInteraction()`

**用途 / Purpose:** 当 `interaction` 事件触发时调用此方法。

### DuelRequested
`public void DuelRequested(Agent requesterAgent, TroopType selectedAreaTroopType)`

**用途 / Purpose:** 处理 `duel requested` 相关逻辑。

### CheckHasRequestFromAndRemoveRequestIfNeeded
`public bool CheckHasRequestFromAndRemoveRequestIfNeeded(MissionPeer requestOwner)`

**用途 / Purpose:** 处理 `check has request from and remove request if needed` 相关逻辑。

### OnDuelPreparation
`public void OnDuelPreparation(MissionPeer requesterPeer, MissionPeer requesteePeer)`

**用途 / Purpose:** 当 `duel preparation` 事件触发时调用此方法。

### OnObjectFocused
`public void OnObjectFocused(IFocusable focusedObject)`

**用途 / Purpose:** 当 `object focused` 事件触发时调用此方法。

### OnObjectFocusLost
`public void OnObjectFocusLost()`

**用途 / Purpose:** 当 `object focus lost` 事件触发时调用此方法。

### OnAgentSpawned
`public override void OnAgentSpawned()`

**用途 / Purpose:** 当 `agent spawned` 事件触发时调用此方法。

### ResetBountyAndNumberOfWins
`public void ResetBountyAndNumberOfWins()`

**用途 / Purpose:** 将 `bounty and number of wins` 重置为初始状态。

### OnDuelWon
`public void OnDuelWon(float gainedScore)`

**用途 / Purpose:** 当 `duel won` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new DuelMissionRepresentative();
value.Initialize();
```

## 参见

- [完整类目录](../catalog)