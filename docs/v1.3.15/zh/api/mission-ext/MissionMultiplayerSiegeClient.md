<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMultiplayerSiegeClient`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMultiplayerSiegeClient

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionMultiplayerSiegeClient` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsGameModeUsingGold` | `public override bool IsGameModeUsingGold { get; }` |
| `IsGameModeTactical` | `public override bool IsGameModeTactical { get; }` |
| `IsGameModeUsingRoundCountdown` | `public override bool IsGameModeUsingRoundCountdown { get; }` |
| `GameType` | `public override MultiplayerGameType GameType { get; }` |
| `AreMoralesIndependent` | `public bool AreMoralesIndependent { get; }` |
| `AllCapturePoints` | `public IEnumerable<FlagCapturePoint> AllCapturePoints { get; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)