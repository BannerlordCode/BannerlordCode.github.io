---
title: "TournamentGame"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TournamentGame`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentGame

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TournamentGame`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentGame.cs`

## 概述

`TournamentGame` 位于 `TaleWorlds.CampaignSystem.TournamentGames`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.TournamentGames` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public abstract TextObject GetMenuText()`

**用途 / Purpose:** 获取 `menu text` 的当前值。

### OpenMission
`public abstract void OpenMission(Settlement settlement, bool isPlayerParticipating)`

**用途 / Purpose:** 处理 `open mission` 相关逻辑。

### GetParticipantCharacters
`public abstract MBList<CharacterObject> GetParticipantCharacters(Settlement settlement, bool includePlayer = true)`

**用途 / Purpose:** 获取 `participant characters` 的当前值。

### CanBeAParticipant
`public virtual bool CanBeAParticipant(CharacterObject character, bool considerSkills)`

**用途 / Purpose:** 判断当前对象是否可以执行 `be a participant`。

### PrepareForTournamentGame
`public void PrepareForTournamentGame(bool isPlayerParticipating)`

**用途 / Purpose:** 处理 `prepare for tournament game` 相关逻辑。

### UpdateTournamentPrize
`public void UpdateTournamentPrize(bool includePlayer, bool removeCurrentPrize = false)`

**用途 / Purpose:** 更新 `tournament prize` 的状态或数据。

## 使用示例

```csharp
var implementation = new CustomTournamentGame();
```

## 参见

- [完整类目录](../catalog)