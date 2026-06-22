<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IncidentEffect`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IncidentEffect

**命名空间:** TaleWorlds.CampaignSystem.Incidents
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`IncidentEffect` 是 `TaleWorlds.CampaignSystem.Incidents` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### Condition

```csharp
public bool Condition()
```

### Consequence

```csharp
public List<TextObject> Consequence()
```

### GetHint

```csharp
public List<TextObject> GetHint()
```

### WithChance

```csharp
public IncidentEffect WithChance(float chance)
```

### WithCustomInformation

```csharp
public IncidentEffect WithCustomInformation(Func<List<TextObject>> customInformation)
```

### WithHint

```csharp
public IncidentEffect WithHint(Func<IncidentEffect, List<TextObject>> hint)
```

### GoldChange

```csharp
public static IncidentEffect GoldChange(Func<int> amountGetter)
```

### TraitChange

```csharp
public static IncidentEffect TraitChange(TraitObject trait, int amount)
```

### BuildingLevelChange

```csharp
public static IncidentEffect BuildingLevelChange(Func<Building> buildingGetter, Func<int> amountGetter)
```

### SiegeProgressChange

```csharp
public static IncidentEffect SiegeProgressChange(Func<float> amountGetter)
```

### WorkshopProfitabilityChange

```csharp
public static IncidentEffect WorkshopProfitabilityChange(Func<Workshop> workshopGetter, float percentage)
```

### SkillChange

```csharp
public static IncidentEffect SkillChange(SkillObject skill, float amount)
```

### MoraleChange

```csharp
public static IncidentEffect MoraleChange(float amount)
```

### HealthChance

```csharp
public static IncidentEffect HealthChance(int amount)
```

### RenownChange

```csharp
public static IncidentEffect RenownChange(float amount)
```

### CrimeRatingChange

```csharp
public static IncidentEffect CrimeRatingChange(Func<IFaction> factionGetter, float amount)
```

### InfluenceChange

```csharp
public static IncidentEffect InfluenceChange(float amount)
```

### SettlementRelationChange

```csharp
public static IncidentEffect SettlementRelationChange(Func<Settlement> settlementGetter, int amount)
```

### TownBoundVillageRelationChange

```csharp
public static IncidentEffect TownBoundVillageRelationChange(Func<Town> townGetter, int amount)
```

### TownBoundVillageHearthChange

```csharp
public static IncidentEffect TownBoundVillageHearthChange(Func<Town> townGetter, int amount)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)