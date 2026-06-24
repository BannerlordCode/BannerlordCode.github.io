<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyShipLimitModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PartyShipLimitModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyShipLimitModel : MBGameModel<PartyShipLimitModel>`
**Base:** `MBGameModel<PartyShipLimitModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyShipLimitModel.cs`

## 概述

`PartyShipLimitModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PartyShipLimitModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetIdealShipNumber
`public abstract int GetIdealShipNumber(MobileParty mobileParty)`

**用途 / Purpose:** 获取 `ideal ship number` 的当前值。

### GetIdealShipNumber
`public abstract int GetIdealShipNumber(Clan clan)`

**用途 / Purpose:** 获取 `ideal ship number` 的当前值。

### GetShipPriority
`public abstract float GetShipPriority(MobileParty mobileParty, Ship ship, bool isSelling)`

**用途 / Purpose:** 获取 `ship priority` 的当前值。

## 使用示例

```csharp
var implementation = new CustomPartyShipLimitModel();
```

## 参见

- [完整类目录](../catalog)