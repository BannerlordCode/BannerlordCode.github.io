<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyTrainingModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PartyTrainingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTrainingModel : MBGameModel<PartyTrainingModel>`
**Base:** `MBGameModel<PartyTrainingModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyTrainingModel.cs`

## 概述

`PartyTrainingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PartyTrainingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GenerateSharedXp
`public abstract int GenerateSharedXp(CharacterObject troop, int xp, MobileParty mobileParty)`

**用途 / Purpose:** 处理 `generate shared xp` 相关逻辑。

### CalculateXpGainFromBattles
`public abstract ExplainedNumber CalculateXpGainFromBattles(FlattenedTroopRosterElement troopRosterElement, PartyBase party)`

**用途 / Purpose:** 处理 `calculate xp gain from battles` 相关逻辑。

### GetXpReward
`public abstract int GetXpReward(CharacterObject character)`

**用途 / Purpose:** 获取 `xp reward` 的当前值。

### GetEffectiveDailyExperience
`public abstract ExplainedNumber GetEffectiveDailyExperience(MobileParty party, TroopRosterElement troop)`

**用途 / Purpose:** 获取 `effective daily experience` 的当前值。

## 使用示例

```csharp
var implementation = new CustomPartyTrainingModel();
```

## 参见

- [完整类目录](../catalog)