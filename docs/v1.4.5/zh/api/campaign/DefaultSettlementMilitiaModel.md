<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSettlementMilitiaModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultSettlementMilitiaModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSettlementMilitiaModel : SettlementMilitiaModel`
**Base:** `SettlementMilitiaModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementMilitiaModel.cs`

## 概述

`DefaultSettlementMilitiaModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultSettlementMilitiaModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### MilitiaToSpawnAfterSiege
`public override int MilitiaToSpawnAfterSiege(Town town)`

**用途 / Purpose:** 处理 `militia to spawn after siege` 相关逻辑。

### CalculateMilitiaChange
`public override ExplainedNumber CalculateMilitiaChange(Settlement settlement, bool includeDescriptions = false)`

**用途 / Purpose:** 处理 `calculate militia change` 相关逻辑。

### CalculateVeteranMilitiaSpawnChance
`public override ExplainedNumber CalculateVeteranMilitiaSpawnChance(Settlement settlement)`

**用途 / Purpose:** 处理 `calculate veteran militia spawn chance` 相关逻辑。

### CalculateMilitiaSpawnRate
`public override void CalculateMilitiaSpawnRate(Settlement settlement, out float meleeTroopRate, out float rangedTroopRate)`

**用途 / Purpose:** 处理 `calculate militia spawn rate` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultSettlementMilitiaModel>(new MyDefaultSettlementMilitiaModel());
```

## 参见

- [完整类目录](../catalog)