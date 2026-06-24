<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TournamentBehavior`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentBehavior

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox.Tournaments
**Type:** `public class TournamentBehavior : MissionLogic, ICameraModeLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Tournaments.MissionLogics/TournamentBehavior.cs`

## 概述

`TournamentBehavior` 位于 `SandBox.Tournaments.MissionLogics`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Tournaments.MissionLogics` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Rounds` | `public TournamentRound Rounds { get; }` |
| `IsPlayerEliminated` | `public bool IsPlayerEliminated { get; }` |
| `CurrentRoundIndex` | `public int CurrentRoundIndex { get; }` |
| `LastMatch` | `public TournamentMatch LastMatch { get; }` |
| `NextRound` | `public TournamentRound NextRound { get; }` |
| `Winner` | `public TournamentParticipant Winner { get; }` |
| `IsPlayerParticipating` | `public bool IsPlayerParticipating { get; }` |
| `Settlement` | `public Settlement Settlement { get; }` |
| `BetOdd` | `public float BetOdd { get; }` |
| `BettedDenars` | `public int BettedDenars { get; }` |
| `OverallExpectedDenars` | `public int OverallExpectedDenars { get; }` |

## 主要方法

### GetMissionCameraLockMode
`public SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer)`

**用途 / Purpose:** 获取 `mission camera lock mode` 的当前值。

### GetAllPossibleParticipants
`public MBList<CharacterObject> GetAllPossibleParticipants()`

**用途 / Purpose:** 获取 `all possible participants` 的当前值。

### DeleteTournamentSetsExcept
`public static void DeleteTournamentSetsExcept(GameEntity selectedSetEntity)`

**用途 / Purpose:** 处理 `delete tournament sets except` 相关逻辑。

### DeleteAllTournamentSets
`public static void DeleteAllTournamentSets()`

**用途 / Purpose:** 处理 `delete all tournament sets` 相关逻辑。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### StartMatch
`public void StartMatch()`

**用途 / Purpose:** 处理 `start match` 相关逻辑。

### SkipMatch
`public void SkipMatch(bool isLeave = false)`

**用途 / Purpose:** 处理 `skip match` 相关逻辑。

### EndTournamentViaLeave
`public void EndTournamentViaLeave()`

**用途 / Purpose:** 处理 `end tournament via leave` 相关逻辑。

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**用途 / Purpose:** 当 `end mission request` 事件触发时调用此方法。

### PlaceABet
`public void PlaceABet(int bet)`

**用途 / Purpose:** 处理 `place a bet` 相关逻辑。

### GetExpectedDenarsForBet
`public int GetExpectedDenarsForBet(int bet)`

**用途 / Purpose:** 获取 `expected denars for bet` 的当前值。

### GetMaximumBet
`public int GetMaximumBet()`

**用途 / Purpose:** 获取 `maximum bet` 的当前值。

## 使用示例

```csharp
var value = new TournamentBehavior();
value.GetMissionCameraLockMode(false);
```

## 参见

- [完整类目录](../catalog)