<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleCaptainModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleCaptainModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BattleCaptainModel : MBGameModel<BattleCaptainModel>`
**Base:** `MBGameModel<BattleCaptainModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BattleCaptainModel.cs`

## 概述

`BattleCaptainModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `BattleCaptainModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetCaptainRatingForTroopUsages
`public abstract float GetCaptainRatingForTroopUsages(Hero hero, TroopUsageFlags flag, out List<PerkObject> compatiblePerks)`

**用途 / Purpose:** 获取 `captain rating for troop usages` 的当前值。

## 使用示例

```csharp
var implementation = new CustomBattleCaptainModel();
```

## 参见

- [完整类目录](../catalog)