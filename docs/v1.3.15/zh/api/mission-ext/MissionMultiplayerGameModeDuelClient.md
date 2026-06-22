<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMultiplayerGameModeDuelClient`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionMultiplayerGameModeDuelClient

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MissionMultiplayerGameModeDuelClient` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsGameModeUsingGold` | `public override bool IsGameModeUsingGold { get; }` |
| `IsGameModeTactical` | `public override bool IsGameModeTactical { get; }` |
| `IsGameModeUsingRoundCountdown` | `public override bool IsGameModeUsingRoundCountdown { get; }` |
| `IsGameModeUsingAllowCultureChange` | `public override bool IsGameModeUsingAllowCultureChange { get; }` |
| `IsGameModeUsingAllowTroopChange` | `public override bool IsGameModeUsingAllowTroopChange { get; }` |
| `GameType` | `public override MultiplayerGameType GameType { get; }` |
| `IsInDuel` | `public bool IsInDuel { get; }` |
| `MyRepresentative` | `public DuelMissionRepresentative MyRepresentative { get; }` |


## 主要方法

### GetGoldAmount

```csharp
public override int GetGoldAmount()
```

### OnGoldAmountChangedForRepresentative

```csharp
public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)
```

### OnBehaviorInitialize

```csharp
public override void OnBehaviorInitialize()
```

### OnRemoveBehavior

```csharp
public override void OnRemoveBehavior()
```

### OnAgentRemoved

```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)
```

### CanRequestCultureChange

```csharp
public override bool CanRequestCultureChange()
```

### CanRequestTroopChange

```csharp
public override bool CanRequestTroopChange()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)