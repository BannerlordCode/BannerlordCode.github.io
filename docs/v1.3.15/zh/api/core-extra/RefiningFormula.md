<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RefiningFormula`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RefiningFormula

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`RefiningFormula` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentCulture` | `public BasicCultureObject CurrentCulture { get; }` |
| `CurrentCraftingTemplate` | `public CraftingTemplate CurrentCraftingTemplate { get; }` |
| `CurrentWeaponDesign` | `public WeaponDesign CurrentWeaponDesign { get; }` |
| `CurrentItemModifierGroup` | `public ItemModifierGroup CurrentItemModifierGroup { get; }` |
| `CraftedWeaponName` | `public TextObject CraftedWeaponName { get; }` |
| `UsablePiecesList` | `public List<WeaponDesignElement> UsablePiecesList { get; }` |
| `SelectedPieces` | `public WeaponDesignElement SelectedPieces { get; }` |
| `Output` | `public CraftingMaterials Output { get; }` |
| `OutputCount` | `public int OutputCount { get; }` |
| `Output2` | `public CraftingMaterials Output2 { get; }` |
| `Output2Count` | `public int Output2Count { get; }` |
| `Input1` | `public CraftingMaterials Input1 { get; }` |
| `Input1Count` | `public int Input1Count { get; }` |
| `Input2` | `public CraftingMaterials Input2 { get; }` |
| `Input2Count` | `public int Input2Count { get; }` |


## 主要方法

### SetCraftedWeaponName

```csharp
public void SetCraftedWeaponName(TextObject weaponName)
```

### Init

```csharp
public void Init()
```

### GetRandomPieceOfType

```csharp
public WeaponDesignElement GetRandomPieceOfType(CraftingPiece.PieceTypes pieceType, bool randomScale)
```

### SwitchToCraftedItem

```csharp
public void SwitchToCraftedItem(ItemObject item)
```

### Randomize

```csharp
public void Randomize()
```

### SwitchToPiece

```csharp
public void SwitchToPiece(WeaponDesignElement piece)
```

### ScaleThePiece

```csharp
public void ScaleThePiece(CraftingPiece.PieceTypes scalingPieceType, int percentage)
```

### ReIndex

```csharp
public void ReIndex(bool enforceReCreation = false)
```

### Undo

```csharp
public bool Undo()
```

### Redo

```csharp
public bool Redo()
```

### UpdateHistory

```csharp
public void UpdateHistory()
```

### GetRandomCraftName

```csharp
public TextObject GetRandomCraftName()
```

### GenerateItem

```csharp
public static void GenerateItem(WeaponDesign weaponDesignTemplate, TextObject name, BasicCultureObject culture, ItemModifierGroup itemModifierGroup, ref ItemObject itemObject, string customId = null)
```

### GetCurrentCraftedItemObject

```csharp
public ItemObject GetCurrentCraftedItemObject(bool forceReCreate = false, string customId = null)
```

### GetStatDatasFromTemplate

```csharp
public static IEnumerable<CraftingStatData> GetStatDatasFromTemplate(int usageIndex, ItemObject craftedItemObject, CraftingTemplate template)
```

### GetStatDatas

```csharp
public IEnumerable<CraftingStatData> GetStatDatas(int usageIndex)
```

### GetXmlCodeForCurrentItem

```csharp
public string GetXmlCodeForCurrentItem(ItemObject item)
```

### TryGetWeaponPropertiesFromXmlCode

```csharp
public bool TryGetWeaponPropertiesFromXmlCode(string xmlCode, out CraftingTemplate craftingTemplate, out ValueTuple<CraftingPiece, int> pieces)
```

### CreatePreCraftedWeaponOnDeserialize

```csharp
public static ItemObject CreatePreCraftedWeaponOnDeserialize(ItemObject itemObject, WeaponDesignElement usedPieces, string templateId, TextObject craftedWeaponName, ItemModifierGroup itemModifierGroup)
```

### InitializePreCraftedWeaponOnLoad

```csharp
public static ItemObject InitializePreCraftedWeaponOnLoad(ItemObject itemObject, WeaponDesign craftedData, TextObject itemName, BasicCultureObject culture)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)