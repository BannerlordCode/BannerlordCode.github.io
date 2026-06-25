---
title: "TournamentGame"
description: "TournamentGame 的自动生成类参考。"
---
# TournamentGame

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TournamentGame`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.TournamentGames/TournamentGame.cs`

## 概述

`TournamentGame` 位于 `TaleWorlds.CampaignSystem.TournamentGames`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.TournamentGames` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Town` | `public Town Town { get; }` |
| `CreationTime` | `public CampaignTime CreationTime { get; }` |
| `Mode` | `public QualificationMode Mode { get; }` |
| `Prize` | `public ItemObject Prize { get; }` |
| `RemoveTournamentAfterDays` | `public abstract int RemoveTournamentAfterDays { get; }` |
| `MaximumParticipantCount` | `public abstract int MaximumParticipantCount { get; }` |

## 主要方法

### GetMenuText
`public abstract TextObject GetMenuText()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 menu text 的结果。

```csharp
// 先通过子系统 API 拿到 TournamentGame 实例
TournamentGame tournamentGame = ...;
var result = tournamentGame.GetMenuText();
```

### OpenMission
`public abstract void OpenMission(Settlement settlement, bool isPlayerParticipating)`

**用途 / Purpose:** **用途 / Purpose:** 打开mission对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 TournamentGame 实例
TournamentGame tournamentGame = ...;
tournamentGame.OpenMission(settlement, false);
```

### GetParticipantCharacters
`public abstract MBList<CharacterObject> GetParticipantCharacters(Settlement settlement, bool includePlayer = true)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 participant characters 的结果。

```csharp
// 先通过子系统 API 拿到 TournamentGame 实例
TournamentGame tournamentGame = ...;
var result = tournamentGame.GetParticipantCharacters(settlement, false);
```

### CanBeAParticipant
`public virtual bool CanBeAParticipant(CharacterObject character, bool considerSkills)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 be a participant 的前置条件。

```csharp
// 先通过子系统 API 拿到 TournamentGame 实例
TournamentGame tournamentGame = ...;
var result = tournamentGame.CanBeAParticipant(character, false);
```

### PrepareForTournamentGame
`public void PrepareForTournamentGame(bool isPlayerParticipating)`

**用途 / Purpose:** **用途 / Purpose:** 为即将执行的for tournament game操作完成前置准备工作。

```csharp
// 先通过子系统 API 拿到 TournamentGame 实例
TournamentGame tournamentGame = ...;
tournamentGame.PrepareForTournamentGame(false);
```

### UpdateTournamentPrize
`public void UpdateTournamentPrize(bool includePlayer, bool removeCurrentPrize = false)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 tournament prize 的最新表示。

```csharp
// 先通过子系统 API 拿到 TournamentGame 实例
TournamentGame tournamentGame = ...;
tournamentGame.UpdateTournamentPrize(false, false);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
TournamentGame instance = ...;
```

## 参见

- [本区域目录](../)