<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TournamentParticipant`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentParticipant

**命名空间:** TaleWorlds.CampaignSystem.TournamentGames
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`TournamentParticipant` 是 `TaleWorlds.CampaignSystem.TournamentGames` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Score` | `public int Score { get; }` |
| `Character` | `public CharacterObject Character { get; }` |
| `Descriptor` | `public UniqueTroopDescriptor Descriptor { get; }` |
| `Team` | `public TournamentTeam Team { get; }` |
| `MatchEquipment` | `public Equipment MatchEquipment { get; set; }` |
| `IsAssigned` | `public bool IsAssigned { get; set; }` |
| `IsPlayer` | `public bool IsPlayer { get; }` |


## 主要方法

### SetTeam

```csharp
public void SetTeam(TournamentTeam team)
```

### AddScore

```csharp
public int AddScore(int score)
```

### ResetScore

```csharp
public void ResetScore()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)