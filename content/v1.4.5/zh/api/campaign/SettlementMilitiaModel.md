---
title: "SettlementMilitiaModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementMilitiaModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementMilitiaModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementMilitiaModel : MBGameModel<SettlementMilitiaModel>`
**Base:** `MBGameModel<SettlementMilitiaModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementMilitiaModel.cs`

## 概述

`SettlementMilitiaModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SettlementMilitiaModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### MilitiaToSpawnAfterSiege
`public abstract int MilitiaToSpawnAfterSiege(Town town)`

**用途 / Purpose:** 处理 `militia to spawn after siege` 相关逻辑。

### CalculateMilitiaChange
`public abstract ExplainedNumber CalculateMilitiaChange(Settlement settlement, bool includeDescriptions = false)`

**用途 / Purpose:** 处理 `calculate militia change` 相关逻辑。

### CalculateVeteranMilitiaSpawnChance
`public abstract ExplainedNumber CalculateVeteranMilitiaSpawnChance(Settlement settlement)`

**用途 / Purpose:** 处理 `calculate veteran militia spawn chance` 相关逻辑。

### CalculateMilitiaSpawnRate
`public abstract void CalculateMilitiaSpawnRate(Settlement settlement, out float meleeTroopRate, out float rangedTroopRate)`

**用途 / Purpose:** 处理 `calculate militia spawn rate` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomSettlementMilitiaModel();
```

## 参见

- [完整类目录](../catalog)