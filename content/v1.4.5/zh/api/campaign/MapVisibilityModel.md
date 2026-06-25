---
title: "MapVisibilityModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapVisibilityModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapVisibilityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapVisibilityModel : MBGameModel<MapVisibilityModel>`
**Base:** `MBGameModel<MapVisibilityModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/MapVisibilityModel.cs`

## 概述

`MapVisibilityModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MapVisibilityModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### MaximumSeeingRange
`public abstract float MaximumSeeingRange()`

**用途 / Purpose:** 处理 `maximum seeing range` 相关逻辑。

### GetPartySeeingRangeBase
`public abstract float GetPartySeeingRangeBase(MobileParty party)`

**用途 / Purpose:** 获取 `party seeing range base` 的当前值。

### GetPartySpottingRange
`public abstract ExplainedNumber GetPartySpottingRange(MobileParty party, bool includeDescriptions = false)`

**用途 / Purpose:** 获取 `party spotting range` 的当前值。

### GetPartySpottingRatioForMainPartySeeingRange
`public abstract float GetPartySpottingRatioForMainPartySeeingRange(MobileParty party)`

**用途 / Purpose:** 获取 `party spotting ratio for main party seeing range` 的当前值。

### GetHideoutSpottingDistance
`public abstract float GetHideoutSpottingDistance()`

**用途 / Purpose:** 获取 `hideout spotting distance` 的当前值。

## 使用示例

```csharp
var implementation = new CustomMapVisibilityModel();
```

## 参见

- [完整类目录](../catalog)