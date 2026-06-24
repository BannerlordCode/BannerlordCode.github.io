<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultMilitaryPowerModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultMilitaryPowerModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMilitaryPowerModel : MilitaryPowerModel`
**Base:** `MilitaryPowerModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultMilitaryPowerModel.cs`

## 概述

`DefaultMilitaryPowerModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultMilitaryPowerModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetTroopPower
`public override float GetTroopPower(CharacterObject troop, BattleSideEnum side, MapEvent.PowerCalculationContext context, float leaderModifier)`

**用途 / Purpose:** 获取 `troop power` 的当前值。

### GetPowerOfParty
`public override float GetPowerOfParty(PartyBase party, BattleSideEnum side, MapEvent.PowerCalculationContext context)`

**用途 / Purpose:** 获取 `power of party` 的当前值。

### GetPowerModifierOfHero
`public override float GetPowerModifierOfHero(Hero leaderHero)`

**用途 / Purpose:** 获取 `power modifier of hero` 的当前值。

### GetContextModifier
`public override float GetContextModifier(CharacterObject troop, BattleSideEnum battleSide, MapEvent.PowerCalculationContext context)`

**用途 / Purpose:** 获取 `context modifier` 的当前值。

### GetContextForPosition
`public override MapEvent.PowerCalculationContext GetContextForPosition(CampaignVec2 position)`

**用途 / Purpose:** 获取 `context for position` 的当前值。

### GetDefaultTroopPower
`public override float GetDefaultTroopPower(CharacterObject troop)`

**用途 / Purpose:** 获取 `default troop power` 的当前值。

### GetContextModifier
`public override float GetContextModifier(Ship ship, BattleSideEnum battleSideEnum, MapEvent.PowerCalculationContext context)`

**用途 / Purpose:** 获取 `context modifier` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultMilitaryPowerModel>(new MyDefaultMilitaryPowerModel());
```

## 参见

- [完整类目录](../catalog)