<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TournamentRound`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentRound

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentRound`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentRound.cs`

## 概述

`TournamentRound` 位于 `TaleWorlds.CampaignSystem.TournamentGames`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.TournamentGames` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Matches` | `public TournamentMatch Matches { get; }` |
| `CurrentMatchIndex` | `public int CurrentMatchIndex { get; }` |
| `CurrentMatch` | `public TournamentMatch CurrentMatch { get; }` |

## 主要方法

### OnMatchEnded
`public void OnMatchEnded()`

**用途 / Purpose:** 当 `match ended` 事件触发时调用此方法。

### EndMatch
`public void EndMatch()`

**用途 / Purpose:** 处理 `end match` 相关逻辑。

### AddParticipant
`public void AddParticipant(TournamentParticipant participant, bool firstTime = false)`

**用途 / Purpose:** 向当前集合/状态中添加 `participant`。

## 使用示例

```csharp
var value = new TournamentRound();
value.OnMatchEnded();
```

## 参见

- [完整类目录](../catalog)