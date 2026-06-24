<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyTransitionModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PartyTransitionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTransitionModel : MBGameModel<PartyTransitionModel>`
**Base:** `MBGameModel<PartyTransitionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTransitionModel.cs`

## 概述

`PartyTransitionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PartyTransitionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetTransitionTimeForEmbarking
`public abstract CampaignTime GetTransitionTimeForEmbarking(MobileParty mobileParty)`

**用途 / Purpose:** 获取 `transition time for embarking` 的当前值。

### GetTransitionTimeDisembarking
`public abstract CampaignTime GetTransitionTimeDisembarking(MobileParty mobileParty)`

**用途 / Purpose:** 获取 `transition time disembarking` 的当前值。

### GetFleetTravelTimeToPoint
`public abstract CampaignTime GetFleetTravelTimeToPoint(MobileParty owner, CampaignVec2 target)`

**用途 / Purpose:** 获取 `fleet travel time to point` 的当前值。

## 使用示例

```csharp
var implementation = new CustomPartyTransitionModel();
```

## 参见

- [完整类目录](../catalog)