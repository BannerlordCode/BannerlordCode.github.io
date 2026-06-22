<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultSmithingModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultSmithingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSmithingModel : SmithingModel`
**Base:** `SmithingModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSmithingModel.cs`

## 概述

`DefaultSmithingModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultSmithingModel>(new MyDefaultSmithingModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetCraftingPartDifficulty
```csharp
public override int GetCraftingPartDifficulty(CraftingPiece craftingPiece)
```

### CalculateWeaponDesignDifficulty
```csharp
public override int CalculateWeaponDesignDifficulty(WeaponDesign weaponDesign)
```

### GetCraftedWeaponModifier
```csharp
public override ItemModifier GetCraftedWeaponModifier(WeaponDesign weaponDesign, Hero hero)
```

### GetRefiningFormulas
```csharp
public override IEnumerable<Crafting.RefiningFormula> GetRefiningFormulas(Hero weaponsmith)
```

### GetSkillXpForRefining
```csharp
public override int GetSkillXpForRefining(ref Crafting.RefiningFormula refineFormula)
```

### GetSkillXpForSmelting
```csharp
public override int GetSkillXpForSmelting(ItemObject item)
```

### GetSkillXpForSmithingInFreeBuildMode
```csharp
public override int GetSkillXpForSmithingInFreeBuildMode(ItemObject item)
```

### GetSkillXpForSmithingInCraftingOrderMode
```csharp
public override int GetSkillXpForSmithingInCraftingOrderMode(ItemObject item)
```

### GetEnergyCostForRefining
```csharp
public override int GetEnergyCostForRefining(ref Crafting.RefiningFormula refineFormula, Hero hero)
```

### GetEnergyCostForSmithing
```csharp
public override int GetEnergyCostForSmithing(ItemObject item, Hero hero)
```

### GetEnergyCostForSmelting
```csharp
public override int GetEnergyCostForSmelting(ItemObject item, Hero hero)
```

### GetCraftingMaterialItem
```csharp
public override ItemObject GetCraftingMaterialItem(CraftingMaterials craftingMaterial)
```

### GetSmeltingOutputForItem
```csharp
public override int GetSmeltingOutputForItem(ItemObject item)
```

### GetSmithingCostsForWeaponDesign
```csharp
public override int GetSmithingCostsForWeaponDesign(WeaponDesign weaponDesign)
```

### ResearchPointsNeedForNewPart
```csharp
public override float ResearchPointsNeedForNewPart(int totalPartCount, int openedPartCount)
```

### GetPartResearchGainForSmeltingItem
```csharp
public override int GetPartResearchGainForSmeltingItem(ItemObject item, Hero hero)
```

### GetPartResearchGainForSmithingItem
```csharp
public override int GetPartResearchGainForSmithingItem(ItemObject item, Hero hero, bool isFreeBuild)
```

## 使用示例

```csharp
// DefaultSmithingModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultSmithingModel>(new MyDefaultSmithingModel());
```

## 参见

- [完整类目录](../catalog)