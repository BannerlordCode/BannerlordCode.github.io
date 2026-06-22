<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Building`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Building

**命名空间:** TaleWorlds.CampaignSystem.Settlements.Buildings
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`Building` 是 `TaleWorlds.CampaignSystem.Settlements.Buildings` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public override int GetHashCode()
```

### GetConstructionCost

```csharp
public int GetConstructionCost()
```

### LevelUp

```csharp
public void LevelUp()
```

### LevelDown

```csharp
public void LevelDown()
```

### HitPointChanged

```csharp
public void HitPointChanged(float change)
```

### AddEffectOfBuilding

```csharp
public void AddEffectOfBuilding(BuildingEffectEnum buildingEffect, ref ExplainedNumber result)
```

### GetBonusExplanation

```csharp
public TextObject GetBonusExplanation()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)