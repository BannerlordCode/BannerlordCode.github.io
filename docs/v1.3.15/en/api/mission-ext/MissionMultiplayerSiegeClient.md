<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMultiplayerSiegeClient`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMultiplayerSiegeClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MissionMultiplayerSiegeClient` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsGameModeUsingGold` | `public override bool IsGameModeUsingGold { get; }` |
| `IsGameModeTactical` | `public override bool IsGameModeTactical { get; }` |
| `IsGameModeUsingRoundCountdown` | `public override bool IsGameModeUsingRoundCountdown { get; }` |
| `GameType` | `public override MultiplayerGameType GameType { get; }` |
| `AreMoralesIndependent` | `public bool AreMoralesIndependent { get; }` |
| `AllCapturePoints` | `public IEnumerable<FlagCapturePoint> AllCapturePoints { get; }` |


## Key Methods

### OnBehaviorInitialize

```csharp
public override void OnBehaviorInitialize()
```

### AfterStart

```csharp
public override void AfterStart()
```

### GetGoldAmount

```csharp
public override int GetGoldAmount()
```

### OnGoldAmountChangedForRepresentative

```csharp
public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)
```

### OnNumberOfFlagsChanged

```csharp
public void OnNumberOfFlagsChanged()
```

### OnCapturePointOwnerChanged

```csharp
public void OnCapturePointOwnerChanged(FlagCapturePoint flagCapturePoint, Team ownerTeam)
```

### OnMoraleChanged

```csharp
public void OnMoraleChanged(int attackerMorale, int defenderMorale, int capturePointRemainingMoraleGains)
```

### GetFlagOwner

```csharp
public Team GetFlagOwner(FlagCapturePoint flag)
```

### OnRemoveBehavior

```csharp
public override void OnRemoveBehavior()
```

### OnMissionTick

```csharp
public override void OnMissionTick(float dt)
```

### GetSiegeMissiles

```csharp
public List<ItemObject> GetSiegeMissiles()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)