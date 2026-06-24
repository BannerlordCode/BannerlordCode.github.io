<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultLocationModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultLocationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultLocationModel : LocationModel`
**Base:** `LocationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultLocationModel.cs`

## 概述

`DefaultLocationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultLocationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSettlementUpgradeLevel
`public override int GetSettlementUpgradeLevel(LocationEncounter locationEncounter)`

**用途 / Purpose:** 获取 `settlement upgrade level` 的当前值。

### GetCivilianSceneLevel
`public override string GetCivilianSceneLevel(Settlement settlement)`

**用途 / Purpose:** 获取 `civilian scene level` 的当前值。

### GetCivilianUpgradeLevelTag
`public override string GetCivilianUpgradeLevelTag(int upgradeLevel)`

**用途 / Purpose:** 获取 `civilian upgrade level tag` 的当前值。

### GetUpgradeLevelTag
`public override string GetUpgradeLevelTag(int upgradeLevel)`

**用途 / Purpose:** 获取 `upgrade level tag` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultLocationModel>(new MyDefaultLocationModel());
```

## 参见

- [完整类目录](../catalog)