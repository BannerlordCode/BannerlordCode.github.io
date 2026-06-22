<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DuelMissionRepresentative`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DuelMissionRepresentative

**Namespace:** TaleWorlds.MountAndBlade.MissionRepresentatives
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `DuelMissionRepresentative` is a class in the `TaleWorlds.MountAndBlade.MissionRepresentatives` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Bounty` | `public int Bounty { get; }` |
| `Score` | `public int Score { get; }` |
| `NumberOfWins` | `public int NumberOfWins { get; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)