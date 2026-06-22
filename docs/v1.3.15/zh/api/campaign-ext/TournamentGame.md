<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TournamentGame`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentGame

**命名空间:** TaleWorlds.CampaignSystem.TournamentGames
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`TournamentGame` 是 `TaleWorlds.CampaignSystem.TournamentGames` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Town` | `public Town Town { get; }` |
| `CreationTime` | `public CampaignTime CreationTime { get; }` |
| `Mode` | `public TournamentGame.QualificationMode Mode { get; set; }` |
| `MaxTeamSize` | `public virtual int MaxTeamSize { get; }` |
| `MaxTeamNumberPerMatch` | `public virtual int MaxTeamNumberPerMatch { get; }` |
| `Prize` | `public ItemObject Prize { get; }` |
| `TournamentWinRenown` | `public virtual float TournamentWinRenown { get; }` |
| `TournamentWinInfluence` | `public virtual float TournamentWinInfluence { get; }` |
| `RemoveTournamentAfterDays` | `public abstract int RemoveTournamentAfterDays { get; }` |
| `MaximumParticipantCount` | `public abstract int MaximumParticipantCount { get; }` |


## 主要方法

### GetMenuText

```csharp
public abstract TextObject GetMenuText()
```

### OpenMission

```csharp
public abstract void OpenMission(Settlement settlement, bool isPlayerParticipating)
```

### GetParticipantCharacters

```csharp
public abstract MBList<CharacterObject> GetParticipantCharacters(Settlement settlement, bool includePlayer = true)
```

### CanBeAParticipant

```csharp
public virtual bool CanBeAParticipant(CharacterObject character, bool considerSkills)
```

### PrepareForTournamentGame

```csharp
public void PrepareForTournamentGame(bool isPlayerParticipating)
```

### UpdateTournamentPrize

```csharp
public void UpdateTournamentPrize(bool includePlayer, bool removeCurrentPrize = false)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)