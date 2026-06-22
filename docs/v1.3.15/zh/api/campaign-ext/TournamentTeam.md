<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TournamentTeam`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentTeam

**命名空间:** TaleWorlds.CampaignSystem.TournamentGames
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`TournamentTeam` 是 `TaleWorlds.CampaignSystem.TournamentGames` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `TeamSize` | `public int TeamSize { get; }` |
| `TeamColor` | `public uint TeamColor { get; }` |
| `TeamBanner` | `public Banner TeamBanner { get; }` |
| `IsPlayerTeam` | `public bool IsPlayerTeam { get; }` |
| `Participants` | `public IEnumerable<TournamentParticipant> Participants { get; }` |
| `Score` | `public int Score { get; }` |


## 主要方法

### IsParticipantRequired

```csharp
public bool IsParticipantRequired()
```

### AddParticipant

```csharp
public void AddParticipant(TournamentParticipant participant)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)