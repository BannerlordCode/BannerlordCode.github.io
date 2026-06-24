<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultBribeCalculationModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultBribeCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBribeCalculationModel : BribeCalculationModel`
**Base:** `BribeCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBribeCalculationModel.cs`

## 概述

`DefaultBribeCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultBribeCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsBribeNotNeededToEnterKeep
`public override bool IsBribeNotNeededToEnterKeep(Settlement settlement)`

**用途 / Purpose:** 处理 `is bribe not needed to enter keep` 相关逻辑。

### IsBribeNotNeededToEnterDungeon
`public override bool IsBribeNotNeededToEnterDungeon(Settlement settlement)`

**用途 / Purpose:** 处理 `is bribe not needed to enter dungeon` 相关逻辑。

### GetBribeToEnterLordsHall
`public override int GetBribeToEnterLordsHall(Settlement settlement)`

**用途 / Purpose:** 获取 `bribe to enter lords hall` 的当前值。

### GetBribeToEnterDungeon
`public override int GetBribeToEnterDungeon(Settlement settlement)`

**用途 / Purpose:** 获取 `bribe to enter dungeon` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultBribeCalculationModel>(new MyDefaultBribeCalculationModel());
```

## 参见

- [完整类目录](../catalog)