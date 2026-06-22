<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EffectInfo`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EffectInfo

**命名空间:** TaleWorlds.CampaignSystem.Settlements.Buildings
**模块:** TaleWorlds.CampaignSystem
**类型:** 结构体 struct struct
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`EffectInfo` 是 `TaleWorlds.CampaignSystem.Settlements.Buildings` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
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

```csharp
public override TextObject GetName()
```

### Initialize

```csharp
public void Initialize(TextObject name, TextObject explanation, int productionCosts, Tuple<BuildingEffectEnum, BuildingEffectIncrementType, float, float, float> effects, bool isMilitaryProject, float varianceChance, int startLevel = 0)
```

### InitializeDailyProject

```csharp
public void InitializeDailyProject(TextObject name, TextObject explanation, Tuple<BuildingEffectEnum, BuildingEffectIncrementType, float, float, float> effects)
```

### ToString

```csharp
public override string ToString()
```

### GetProductionCost

```csharp
public int GetProductionCost(int level)
```

### GetBaseBuildingEffectAmount

```csharp
public float GetBaseBuildingEffectAmount(BuildingEffectEnum effect, int level)
```

### HasEffect

```csharp
public bool HasEffect(BuildingEffectEnum effect)
```

### GetExplanationAtLevel

```csharp
public TextObject GetExplanationAtLevel(int level)
```

### GetBuildingEffectType

```csharp
public BuildingEffectIncrementType GetBuildingEffectType(BuildingEffectEnum effect)
```

### GetEffectValue

```csharp
public float GetEffectValue(int i)
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)