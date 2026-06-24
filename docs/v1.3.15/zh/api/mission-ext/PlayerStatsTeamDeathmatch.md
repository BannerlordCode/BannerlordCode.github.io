<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerStatsTeamDeathmatch`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerStatsTeamDeathmatch

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerStatsTeamDeathmatch : PlayerStatsBase`
**Base:** `PlayerStatsBase`
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerStatsTeamDeathmatch.cs`

## 概述

`PlayerStatsTeamDeathmatch` 位于 `TaleWorlds.MountAndBlade.Diamond`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Score` | `public int Score { get; set; }` |
| `AverageScore` | `public float AverageScore { get; }` |

## 主要方法

### FillWith
`public void FillWith(PlayerId playerId, int killCount, int deathCount, int assistCount, int winCount, int loseCount, int forfeitCount, int score)`

**用途 / Purpose:** 处理 `fill with` 相关逻辑。

### FillWithNewPlayer
`public void FillWithNewPlayer(PlayerId playerId)`

**用途 / Purpose:** 处理 `fill with new player` 相关逻辑。

### Update
`public void Update(BattlePlayerStatsTeamDeathmatch stats, bool won)`

**用途 / Purpose:** 更新 `update` 的状态或数据。

## 使用示例

```csharp
var value = new PlayerStatsTeamDeathmatch();
value.FillWith(playerId, 0, 0, 0, 0, 0, 0, 0);
```

## 参见

- [完整类目录](../catalog)