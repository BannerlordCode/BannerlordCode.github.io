---
title: "PartyNavigationModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyNavigationModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PartyNavigationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyNavigationModel : MBGameModel<PartyNavigationModel>`
**Base:** `MBGameModel<PartyNavigationModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyNavigationModel.cs`

## 概述

`PartyNavigationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PartyNavigationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CanPlayerNavigateToPosition
`public abstract bool CanPlayerNavigateToPosition(CampaignVec2 vec2, out MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 判断当前对象是否可以执行 `player navigate to position`。

### GetEmbarkDisembarkThresholdDistance
`public abstract float GetEmbarkDisembarkThresholdDistance()`

**用途 / Purpose:** 获取 `embark disembark threshold distance` 的当前值。

### IsTerrainTypeValidForNavigationType
`public abstract bool IsTerrainTypeValidForNavigationType(TerrainType terrainType, MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 处理 `is terrain type valid for navigation type` 相关逻辑。

### GetInvalidTerrainTypesForNavigationType
`public abstract int GetInvalidTerrainTypesForNavigationType(MobileParty.NavigationType navigationType)`

**用途 / Purpose:** 获取 `invalid terrain types for navigation type` 的当前值。

### HasNavalNavigationCapability
`public abstract bool HasNavalNavigationCapability(MobileParty mobileParty)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `naval navigation capability`。

## 使用示例

```csharp
var implementation = new CustomPartyNavigationModel();
```

## 参见

- [完整类目录](../catalog)