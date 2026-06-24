<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VillageTradeModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# VillageTradeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VillageTradeModel : MBGameModel<VillageTradeModel>`
**Base:** `MBGameModel<VillageTradeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/VillageTradeModel.cs`

## 概述

`VillageTradeModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `VillageTradeModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### TradeBoundDistanceLimitAsDays
`public abstract float TradeBoundDistanceLimitAsDays(MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 处理 `trade bound distance limit as days` 相关逻辑。

### GetTradeBoundToAssignForVillage
`public abstract Settlement GetTradeBoundToAssignForVillage(Village village)`

**用途 / Purpose:** 获取 `trade bound to assign for village` 的当前值。

## 使用示例

```csharp
var implementation = new CustomVillageTradeModel();
```

## 参见

- [完整类目录](../catalog)