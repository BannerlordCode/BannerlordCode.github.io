<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerData`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/PlayerData.cs`

## 概述

`PlayerData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `PlayerData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |
| `OwnerPlayerId` | `public PlayerId OwnerPlayerId { get; set; }` |
| `Sigil` | `public string Sigil { get; set; }` |
| `BodyProperties` | `public BodyProperties BodyProperties { get; set; }` |
| `Stats` | `public PlayerStatsBase Stats { get; set; }` |
| `Race` | `public int Race { get; set; }` |
| `IsFemale` | `public bool IsFemale { get; set; }` |
| `KillCount` | `public int KillCount { get; }` |
| `DeathCount` | `public int DeathCount { get; }` |
| `AssistCount` | `public int AssistCount { get; }` |
| `WinCount` | `public int WinCount { get; }` |
| `LoseCount` | `public int LoseCount { get; }` |
| `Experience` | `public int Experience { get; set; }` |
| `LastPlayerName` | `public string LastPlayerName { get; set; }` |
| `Username` | `public string Username { get; set; }` |
| `UserId` | `public int UserId { get; set; }` |
| `IsUsingClanSigil` | `public bool IsUsingClanSigil { get; set; }` |
| `LastRegion` | `public string LastRegion { get; set; }` |
| `LastGameTypes` | `public string LastGameTypes { get; set; }` |
| `LastLogin` | `public DateTime? LastLogin { get; set; }` |
| `Playtime` | `public int Playtime { get; set; }` |
| `ShownBadgeId` | `public string ShownBadgeId { get; set; }` |
| `Gold` | `public int Gold { get; set; }` |
| `IsMuted` | `public bool IsMuted { get; set; }` |

## 主要方法

### FillWith
`public void FillWith(PlayerId playerId, PlayerId ownerPlayerId, BodyProperties bodyProperties, bool isFemale, string sigil, int experience, string lastPlayerName, string username, int userId, string lastRegion, string lastGameTypes, DateTime? lastLogin, int playtime, string shownBadgeId, int gold, PlayerStatsBase stats, bool shouldLog, bool isUsingClanSigil)`

**用途 / Purpose:** 处理 `fill with` 相关逻辑。

### FillWithNewPlayer
`public void FillWithNewPlayer(PlayerId playerId, PlayerId ownerPlayerId, string gameTypes)`

**用途 / Purpose:** 处理 `fill with new player` 相关逻辑。

### HasGameStats
`public bool HasGameStats(string gameType)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `game stats`。

### GetGameStats
`public PlayerStatsBase GetGameStats(string gameType)`

**用途 / Purpose:** 获取 `game stats` 的当前值。

### UpdateGameStats
`public void UpdateGameStats(PlayerStatsBase playerGameTypeStats)`

**用途 / Purpose:** 更新 `game stats` 的状态或数据。

## 使用示例

```csharp
var value = new PlayerData();
```

## 参见

- [完整类目录](../catalog)