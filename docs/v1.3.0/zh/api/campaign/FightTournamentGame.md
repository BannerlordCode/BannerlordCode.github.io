<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FightTournamentGame`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# FightTournamentGame

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FightTournamentGame : TournamentGame`
**Base:** `TournamentGame`
**File:** `TaleWorlds.CampaignSystem/TournamentGames/FightTournamentGame.cs`

## 概述

`FightTournamentGame` 位于 `TaleWorlds.CampaignSystem.TournamentGames`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.TournamentGames` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaxTeamSize` | `public override int MaxTeamSize { get; }` |
| `MaxTeamNumberPerMatch` | `public override int MaxTeamNumberPerMatch { get; }` |
| `RemoveTournamentAfterDays` | `public override int RemoveTournamentAfterDays { get; }` |
| `MaximumParticipantCount` | `public override int MaximumParticipantCount { get; }` |

## 主要方法

### CanBeAParticipant
`public override bool CanBeAParticipant(CharacterObject character, bool considerSkills)`

**用途 / Purpose:** 判断当前对象是否可以执行 `be a participant`。

### GetMenuText
`public override TextObject GetMenuText()`

**用途 / Purpose:** 获取 `menu text` 的当前值。

### OpenMission
`public override void OpenMission(Settlement settlement, bool isPlayerParticipating)`

**用途 / Purpose:** 处理 `open mission` 相关逻辑。

### GetParticipantCharacters
`public override MBList<CharacterObject> GetParticipantCharacters(Settlement settlement, bool includePlayer = true)`

**用途 / Purpose:** 获取 `participant characters` 的当前值。

## 使用示例

```csharp
var value = new FightTournamentGame();
value.CanBeAParticipant(character, false);
```

## 参见

- [完整类目录](../catalog)