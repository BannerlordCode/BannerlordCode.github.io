<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TournamentMatch`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentMatch

**命名空间:** TaleWorlds.CampaignSystem.TournamentGames
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`TournamentMatch` 是 `TaleWorlds.CampaignSystem.TournamentGames` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Teams` | `public IEnumerable<TournamentTeam> Teams { get; }` |
| `Participants` | `public IEnumerable<TournamentParticipant> Participants { get; }` |
| `State` | `public TournamentMatch.MatchState State { get; }` |
| `Winners` | `public IEnumerable<TournamentParticipant> Winners { get; }` |
| `IsReady` | `public bool IsReady { get; }` |


## 主要方法

### End

```csharp
public void End()
```

### Start

```csharp
public void Start()
```

### GetParticipant

```csharp
public TournamentParticipant GetParticipant(int uniqueSeed)
```

### IsParticipantRequired

```csharp
public bool IsParticipantRequired()
```

### AddParticipant

```csharp
public void AddParticipant(TournamentParticipant participant, bool firstTime)
```

### IsPlayerParticipating

```csharp
public bool IsPlayerParticipating()
```

### IsPlayerWinner

```csharp
public bool IsPlayerWinner()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)