<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPartyShipLimitModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPartyShipLimitModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyShipLimitModel : PartyShipLimitModel`
**Base:** `PartyShipLimitModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPartyShipLimitModel.cs`

## 概述

`DefaultPartyShipLimitModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPartyShipLimitModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetIdealShipNumber
`public override int GetIdealShipNumber(MobileParty mobileParty)`

**用途 / Purpose:** 获取 `ideal ship number` 的当前值。

### GetIdealShipNumber
`public override int GetIdealShipNumber(Clan clan)`

**用途 / Purpose:** 获取 `ideal ship number` 的当前值。

### GetShipPriority
`public override float GetShipPriority(MobileParty mobileParty, Ship ship, bool isSelling)`

**用途 / Purpose:** 获取 `ship priority` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPartyShipLimitModel>(new MyDefaultPartyShipLimitModel());
```

## 参见

- [完整类目录](../catalog)