---
title: "BuildingType"
description: "BuildingType 的自动生成类参考。"
---
# BuildingType

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Buildings
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class BuildingType : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Settlements/Buildings/BuildingType.cs`

## 概述

`BuildingType` 位于 `TaleWorlds.CampaignSystem.Settlements.Buildings`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 BuildingType 实例
BuildingType buildingType = ...;
var result = buildingType.GetName();
```

### Initialize
`public void Initialize(TextObject name, TextObject explanation, int productionCosts, Tuple<BuildingEffectEnum, BuildingEffectIncrementType, float, float, float> effects, bool isMilitaryProject, float varianceChance, int startLevel = 0)`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BuildingType 实例
BuildingType buildingType = ...;
buildingType.Initialize(name, explanation, 0, tuple<BuildingEffectEnum, buildingEffectIncrementType, 0, 0, 0, false, 0, 0);
```

### InitializeDailyProject
`public void InitializeDailyProject(TextObject name, TextObject explanation, Tuple<BuildingEffectEnum, BuildingEffectIncrementType, float, float, float> effects)`

**用途 / Purpose:** **用途 / Purpose:** 为 daily project 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BuildingType 实例
BuildingType buildingType = ...;
buildingType.InitializeDailyProject(name, explanation, tuple<BuildingEffectEnum, buildingEffectIncrementType, 0, 0, 0);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 BuildingType 实例
BuildingType buildingType = ...;
var result = buildingType.ToString();
```

### GetProductionCost
`public int GetProductionCost(int level)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 production cost 的结果。

```csharp
// 先通过子系统 API 拿到 BuildingType 实例
BuildingType buildingType = ...;
var result = buildingType.GetProductionCost(0);
```

### GetBaseBuildingEffectAmount
`public float GetBaseBuildingEffectAmount(BuildingEffectEnum effect, int level)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 base building effect amount 的结果。

```csharp
// 先通过子系统 API 拿到 BuildingType 实例
BuildingType buildingType = ...;
var result = buildingType.GetBaseBuildingEffectAmount(effect, 0);
```

### HasEffect
`public bool HasEffect(BuildingEffectEnum effect)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 effect。

```csharp
// 先通过子系统 API 拿到 BuildingType 实例
BuildingType buildingType = ...;
var result = buildingType.HasEffect(effect);
```

### GetExplanationAtLevel
`public TextObject GetExplanationAtLevel(int level)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 explanation at level 的结果。

```csharp
// 先通过子系统 API 拿到 BuildingType 实例
BuildingType buildingType = ...;
var result = buildingType.GetExplanationAtLevel(0);
```

### GetBuildingEffectType
`public BuildingEffectIncrementType GetBuildingEffectType(BuildingEffectEnum effect)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 building effect type 的结果。

```csharp
// 先通过子系统 API 拿到 BuildingType 实例
BuildingType buildingType = ...;
var result = buildingType.GetBuildingEffectType(effect);
```

### GetEffectValue
`public float GetEffectValue(int i)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 effect value 的结果。

```csharp
// 先通过子系统 API 拿到 BuildingType 实例
BuildingType buildingType = ...;
var result = buildingType.GetEffectValue(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BuildingType buildingType = ...;
buildingType.GetName();
```

## 参见

- [本区域目录](../)