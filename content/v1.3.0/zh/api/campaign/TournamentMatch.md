---
title: "TournamentMatch"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TournamentMatch`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentMatch

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentMatch`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentMatch.cs`

## 概述

`TournamentMatch` 位于 `TaleWorlds.CampaignSystem.TournamentGames`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.TournamentGames` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public void End()`

**用途 / Purpose:** 处理 `end` 相关逻辑。

### Start
`public void Start()`

**用途 / Purpose:** 处理 `start` 相关逻辑。

### GetParticipant
`public TournamentParticipant GetParticipant(int uniqueSeed)`

**用途 / Purpose:** 获取 `participant` 的当前值。

### IsParticipantRequired
`public bool IsParticipantRequired()`

**用途 / Purpose:** 处理 `is participant required` 相关逻辑。

### AddParticipant
`public void AddParticipant(TournamentParticipant participant, bool firstTime)`

**用途 / Purpose:** 向当前集合/状态中添加 `participant`。

### IsPlayerParticipating
`public bool IsPlayerParticipating()`

**用途 / Purpose:** 处理 `is player participating` 相关逻辑。

### IsPlayerWinner
`public bool IsPlayerWinner()`

**用途 / Purpose:** 处理 `is player winner` 相关逻辑。

## 使用示例

```csharp
var value = new TournamentMatch();
value.End();
```

## 参见

- [完整类目录](../catalog)