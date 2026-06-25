---
title: "Building"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Building`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Building

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Buildings
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Building`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Settlements/Buildings/Building.cs`

## 概述

`Building` 位于 `TaleWorlds.CampaignSystem.Settlements.Buildings`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Settlements.Buildings` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Explanation` | `public TextObject Explanation { get; }` |
| `BuildingType` | `public BuildingType BuildingType { get; }` |
| `Town` | `public Town Town { get; }` |
| `CurrentLevel` | `public int CurrentLevel { get; set; }` |

## 主要方法

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### GetConstructionCost
`public int GetConstructionCost()`

**用途 / Purpose:** 获取 `construction cost` 的当前值。

### LevelUp
`public void LevelUp()`

**用途 / Purpose:** 处理 `level up` 相关逻辑。

### LevelDown
`public void LevelDown()`

**用途 / Purpose:** 处理 `level down` 相关逻辑。

### HitPointChanged
`public void HitPointChanged(float change)`

**用途 / Purpose:** 处理 `hit point changed` 相关逻辑。

### AddEffectOfBuilding
`public void AddEffectOfBuilding(BuildingEffectEnum buildingEffect, ref ExplainedNumber result)`

**用途 / Purpose:** 向当前集合/状态中添加 `effect of building`。

### GetBonusExplanation
`public TextObject GetBonusExplanation()`

**用途 / Purpose:** 获取 `bonus explanation` 的当前值。

## 使用示例

```csharp
var value = new Building();
value.GetHashCode();
```

## 参见

- [完整类目录](../catalog)