---
title: "EffectInfo"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EffectInfo`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EffectInfo

**命名空间:** TaleWorlds.CampaignSystem.Settlements.Buildings
**模块:** TaleWorlds.CampaignSystem
**类型:** `public struct EffectInfo`
**领域:** campaign-ext

## 概述

`EffectInfo` 位于 `TaleWorlds.CampaignSystem.Settlements.Buildings`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Settlements.Buildings` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `All` | `public static MBReadOnlyList<BuildingType> All { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `Explanation` | `public TextObject Explanation { get; }` |
| `VarianceChance` | `public float VarianceChance { get; }` |
| `BuildingEffect` | `public BuildingEffectEnum BuildingEffect { get; }` |
| `BuildingEffectIncrementType` | `public BuildingEffectIncrementType BuildingEffectIncrementType { get; }` |
| `Level1Effect` | `public float Level1Effect { get; }` |
| `Level2Effect` | `public float Level2Effect { get; }` |
| `Level3Effect` | `public float Level3Effect { get; }` |

## 主要方法

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

### Initialize
`public void Initialize(TextObject name, TextObject explanation, int productionCosts, Tuple<BuildingEffectEnum, BuildingEffectIncrementType, float, float, float> effects, bool isMilitaryProject, float varianceChance, int startLevel = 0)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### InitializeDailyProject
`public void InitializeDailyProject(TextObject name, TextObject explanation, Tuple<BuildingEffectEnum, BuildingEffectIncrementType, float, float, float> effects)`

**用途 / Purpose:** 初始化 `daily project` 的状态、资源或绑定。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### GetProductionCost
`public int GetProductionCost(int level)`

**用途 / Purpose:** 获取 `production cost` 的当前值。

### GetBaseBuildingEffectAmount
`public float GetBaseBuildingEffectAmount(BuildingEffectEnum effect, int level)`

**用途 / Purpose:** 获取 `base building effect amount` 的当前值。

### HasEffect
`public bool HasEffect(BuildingEffectEnum effect)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `effect`。

### GetExplanationAtLevel
`public TextObject GetExplanationAtLevel(int level)`

**用途 / Purpose:** 获取 `explanation at level` 的当前值。

### GetBuildingEffectType
`public BuildingEffectIncrementType GetBuildingEffectType(BuildingEffectEnum effect)`

**用途 / Purpose:** 获取 `building effect type` 的当前值。

### GetEffectValue
`public float GetEffectValue(int i)`

**用途 / Purpose:** 获取 `effect value` 的当前值。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 EffectInfo 实例，再调用它的公开方法
var value = new EffectInfo();
value.GetName();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
