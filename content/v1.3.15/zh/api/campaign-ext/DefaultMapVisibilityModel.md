---
title: "DefaultMapVisibilityModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultMapVisibilityModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultMapVisibilityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMapVisibilityModel : MapVisibilityModel`
**Base:** `MapVisibilityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMapVisibilityModel.cs`

## 概述

`DefaultMapVisibilityModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultMapVisibilityModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### MaximumSeeingRange
`public override float MaximumSeeingRange()`

**用途 / Purpose:** 处理 `maximum seeing range` 相关逻辑。

### GetPartySpottingRangeBase
`public override float GetPartySpottingRangeBase(MobileParty party)`

**用途 / Purpose:** 获取 `party spotting range base` 的当前值。

### GetPartySpottingRange
`public override ExplainedNumber GetPartySpottingRange(MobileParty party, bool includeDescriptions = false)`

**用途 / Purpose:** 获取 `party spotting range` 的当前值。

### GetPartyRelativeInspectionRange
`public override float GetPartyRelativeInspectionRange(IMapPoint party)`

**用途 / Purpose:** 获取 `party relative inspection range` 的当前值。

### GetPartySpottingDifficulty
`public override float GetPartySpottingDifficulty(MobileParty spottingParty, MobileParty party)`

**用途 / Purpose:** 获取 `party spotting difficulty` 的当前值。

### GetHideoutSpottingDistance
`public override float GetHideoutSpottingDistance()`

**用途 / Purpose:** 获取 `hideout spotting distance` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultMapVisibilityModel>(new MyDefaultMapVisibilityModel());
```

## 参见

- [完整类目录](../catalog)