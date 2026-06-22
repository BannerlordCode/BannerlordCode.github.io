<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RefiningFormula`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RefiningFormula

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `RefiningFormula` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)