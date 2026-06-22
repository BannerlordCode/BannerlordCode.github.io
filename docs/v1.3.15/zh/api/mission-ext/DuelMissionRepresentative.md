<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DuelMissionRepresentative`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DuelMissionRepresentative

**命名空间:** TaleWorlds.MountAndBlade.MissionRepresentatives
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`DuelMissionRepresentative` 是 `TaleWorlds.MountAndBlade.MissionRepresentatives` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Bounty` | `public int Bounty { get; }` |
| `Score` | `public int Score { get; }` |
| `NumberOfWins` | `public int NumberOfWins { get; }` |


## 主要方法

### Initialize

```csharp
public override void Initialize()
```

### AddRemoveMessageHandlers

```csharp
public void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegisterer.RegisterMode mode)
```

### OnInteraction

```csharp
public void OnInteraction()
```

### DuelRequested

```csharp
public void DuelRequested(Agent requesterAgent, TroopType selectedAreaTroopType)
```

### CheckHasRequestFromAndRemoveRequestIfNeeded

```csharp
public bool CheckHasRequestFromAndRemoveRequestIfNeeded(MissionPeer requestOwner)
```

### OnDuelPreparation

```csharp
public void OnDuelPreparation(MissionPeer requesterPeer, MissionPeer requesteePeer)
```

### OnObjectFocused

```csharp
public void OnObjectFocused(IFocusable focusedObject)
```

### OnObjectFocusLost

```csharp
public void OnObjectFocusLost()
```

### OnAgentSpawned

```csharp
public override void OnAgentSpawned()
```

### ResetBountyAndNumberOfWins

```csharp
public void ResetBountyAndNumberOfWins()
```

### OnDuelWon

```csharp
public void OnDuelWon(float gainedScore)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)