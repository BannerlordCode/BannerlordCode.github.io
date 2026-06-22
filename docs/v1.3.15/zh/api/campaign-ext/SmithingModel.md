<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SmithingModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SmithingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SmithingModel : MBGameModel<SmithingModel>`
**Base:** `MBGameModel<SmithingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SmithingModel.cs`

## 概述

`SmithingModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<SmithingModel>(new MySmithingModel())` 注册，以改变其计算逻辑。

## 主要方法

### GetCraftingPartDifficulty
```csharp
public abstract int GetCraftingPartDifficulty(CraftingPiece craftingPiece)
```

### CalculateWeaponDesignDifficulty
```csharp
public abstract int CalculateWeaponDesignDifficulty(WeaponDesign weaponDesign)
```

### GetCraftedWeaponModifier
```csharp
public abstract ItemModifier GetCraftedWeaponModifier(WeaponDesign weaponDesign, Hero weaponsmith)
```

### GetRefiningFormulas
```csharp
public abstract IEnumerable<Crafting.RefiningFormula> GetRefiningFormulas(Hero weaponsmith)
```

### GetCraftingMaterialItem
```csharp
public abstract ItemObject GetCraftingMaterialItem(CraftingMaterials craftingMaterial)
```

### GetSmeltingOutputForItem
```csharp
public abstract int GetSmeltingOutputForItem(ItemObject item)
```

### GetSkillXpForRefining
```csharp
public abstract int GetSkillXpForRefining(ref Crafting.RefiningFormula refineFormula)
```

### GetSkillXpForSmelting
```csharp
public abstract int GetSkillXpForSmelting(ItemObject item)
```

### GetSkillXpForSmithingInFreeBuildMode
```csharp
public abstract int GetSkillXpForSmithingInFreeBuildMode(ItemObject item)
```

### GetSkillXpForSmithingInCraftingOrderMode
```csharp
public abstract int GetSkillXpForSmithingInCraftingOrderMode(ItemObject item)
```

### GetSmithingCostsForWeaponDesign
```csharp
public abstract int GetSmithingCostsForWeaponDesign(WeaponDesign weaponDesign)
```

### GetEnergyCostForRefining
```csharp
public abstract int GetEnergyCostForRefining(ref Crafting.RefiningFormula refineFormula, Hero hero)
```

### GetEnergyCostForSmithing
```csharp
public abstract int GetEnergyCostForSmithing(ItemObject item, Hero hero)
```

### GetEnergyCostForSmelting
```csharp
public abstract int GetEnergyCostForSmelting(ItemObject item, Hero hero)
```

### ResearchPointsNeedForNewPart
```csharp
public abstract float ResearchPointsNeedForNewPart(int totalPartCount, int openedPartCount)
```

### GetPartResearchGainForSmeltingItem
```csharp
public abstract int GetPartResearchGainForSmeltingItem(ItemObject item, Hero hero)
```

### GetPartResearchGainForSmithingItem
```csharp
public abstract int GetPartResearchGainForSmithingItem(ItemObject item, Hero hero, bool isFreeBuildMode)
```

## 使用示例

```csharp
// SmithingModel (Model) 的典型用法
Game.Current.ReplaceModel<SmithingModel>(new MySmithingModel());
```

## 参见

- [完整类目录](../catalog)