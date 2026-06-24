<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPartyNavigationModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPartyNavigationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyNavigationModel : PartyNavigationModel`
**Base:** `PartyNavigationModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPartyNavigationModel.cs`

## 概述

`DefaultPartyNavigationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPartyNavigationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetEmbarkDisembarkThresholdDistance
`public override float GetEmbarkDisembarkThresholdDistance()`

**用途 / Purpose:** 获取 `embark disembark threshold distance` 的当前值。

### GetInvalidTerrainTypesForNavigationType
`public override int GetInvalidTerrainTypesForNavigationType(MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 获取 `invalid terrain types for navigation type` 的当前值。

### IsTerrainTypeValidForNavigationType
`public override bool IsTerrainTypeValidForNavigationType(TerrainType terrainType, MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 处理 `is terrain type valid for navigation type` 相关逻辑。

### HasNavalNavigationCapability
`public override bool HasNavalNavigationCapability(MobileParty mobileParty)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `naval navigation capability`。

### CanPlayerNavigateToPosition
`public override bool CanPlayerNavigateToPosition(CampaignVec2 vec2, out MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 判断当前对象是否可以执行 `player navigate to position`。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPartyNavigationModel>(new MyDefaultPartyNavigationModel());
```

## 参见

- [完整类目录](../catalog)