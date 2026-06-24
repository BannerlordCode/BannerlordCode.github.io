<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SPScoreboardPartyVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SPScoreboardPartyVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPScoreboardPartyVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard/SPScoreboardPartyVM.cs`

## 概述

`SPScoreboardPartyVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `BattleCombatant` | `public IBattleCombatant BattleCombatant { get; }` |
| `CurrentPower` | `public float CurrentPower { get; }` |
| `InitialPower` | `public float InitialPower { get; }` |
| `Score` | `public SPScoreboardStatsVM Score { get; set; }` |
| `Members` | `public MBBindingList<SPScoreboardUnitVM> Members { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### UpdateScores
`public void UpdateScores(BasicCharacterObject character, int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)`

**用途 / Purpose:** 更新 `scores` 的状态或数据。

### UpdateHeroSkills
`public void UpdateHeroSkills(BasicCharacterObject heroCharacter, SkillObject upgradedSkill)`

**用途 / Purpose:** 更新 `hero skills` 的状态或数据。

### GetUnitAddIfNotExists
`public SPScoreboardUnitVM GetUnitAddIfNotExists(BasicCharacterObject character)`

**用途 / Purpose:** 获取 `unit add if not exists` 的当前值。

### GetUnit
`public SPScoreboardUnitVM GetUnit(BasicCharacterObject character)`

**用途 / Purpose:** 获取 `unit` 的当前值。

## 使用示例

```csharp
var value = new SPScoreboardPartyVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)