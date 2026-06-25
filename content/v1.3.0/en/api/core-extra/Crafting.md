---
title: "Crafting"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Crafting`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Crafting

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class Crafting`
**Base:** none
**File:** `TaleWorlds.Core/Crafting.cs`

## Overview

`Crafting` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public void SetCraftedWeaponName(TextObject name)`

**Purpose:** Sets the value or state of `crafted weapon name`.

### Init
`public void Init()`

**Purpose:** Initializes the state, resources, or bindings for `init`.

### GetRandomPieceOfType
`public WeaponDesignElement GetRandomPieceOfType(CraftingPiece.PieceTypes pieceType, bool randomScale)`

**Purpose:** Gets the current value of `random piece of type`.

### SwitchToCraftedItem
`public void SwitchToCraftedItem(ItemObject item)`

**Purpose:** Handles logic related to `switch to crafted item`.

### Randomize
`public void Randomize()`

**Purpose:** Handles logic related to `randomize`.

### SwitchToPiece
`public void SwitchToPiece(WeaponDesignElement piece)`

**Purpose:** Handles logic related to `switch to piece`.

### ScaleThePiece
`public void ScaleThePiece(CraftingPiece.PieceTypes scalingPieceType, int percentage)`

**Purpose:** Handles logic related to `scale the piece`.

### ReIndex
`public void ReIndex(bool enforceReCreation = false)`

**Purpose:** Handles logic related to `re index`.

### Undo
`public bool Undo()`

**Purpose:** Handles logic related to `undo`.

### Redo
`public bool Redo()`

**Purpose:** Handles logic related to `redo`.

### UpdateHistory
`public void UpdateHistory()`

**Purpose:** Updates the state or data of `history`.

### GetRandomCraftName
`public TextObject GetRandomCraftName()`

**Purpose:** Gets the current value of `random craft name`.

### GenerateItem
`public static void GenerateItem(WeaponDesign weaponDesignTemplate, TextObject name, BasicCultureObject culture, ItemModifierGroup itemModifierGroup, ref ItemObject itemObject)`

**Purpose:** Handles logic related to `generate item`.

### GetCurrentCraftedItemObject
`public ItemObject GetCurrentCraftedItemObject(bool forceReCreate = false)`

**Purpose:** Gets the current value of `current crafted item object`.

### GetStatDatasFromTemplate
`public static IEnumerable<CraftingStatData> GetStatDatasFromTemplate(int usageIndex, ItemObject craftedItemObject, CraftingTemplate template)`

**Purpose:** Gets the current value of `stat datas from template`.

### GetStatDatas
`public IEnumerable<CraftingStatData> GetStatDatas(int usageIndex)`

**Purpose:** Gets the current value of `stat datas`.

### GetXmlCodeForCurrentItem
`public string GetXmlCodeForCurrentItem(ItemObject item)`

**Purpose:** Gets the current value of `xml code for current item`.

### TryGetWeaponPropertiesFromXmlCode
`public bool TryGetWeaponPropertiesFromXmlCode(string xmlCode, out CraftingTemplate craftingTemplate, out ValueTuple<CraftingPiece, int> pieces)`

**Purpose:** Attempts to get `get weapon properties from xml code`, usually returning the result in an out parameter.

### CreatePreCraftedWeapon
`public static ItemObject CreatePreCraftedWeapon(ItemObject itemObject, WeaponDesignElement usedPieces, string templateId, TextObject weaponName, ItemModifierGroup itemModifierGroup)`

**Purpose:** Creates a new `pre crafted weapon` instance or object.

### InitializePreCraftedWeaponOnLoad
`public static ItemObject InitializePreCraftedWeaponOnLoad(ItemObject itemObject, WeaponDesign craftedData, TextObject itemName, BasicCultureObject culture)`

**Purpose:** Initializes the state, resources, or bindings for `pre crafted weapon on load`.

### CreateRandomCraftedItem
`public static ItemObject CreateRandomCraftedItem(BasicCultureObject culture)`

**Purpose:** Creates a new `random crafted item` instance or object.

### GenerateCraftedItem
`public static ItemObject GenerateCraftedItem(ItemObject item, WeaponDesign weaponDesign, ItemModifierGroup itemModifierGroup)`

**Purpose:** Handles logic related to `generate crafted item`.

### FillWeapon
`public static void FillWeapon(ItemObject item, WeaponDescription weaponDescription, WeaponFlags weaponFlags, bool isAlternative, out WeaponComponentData filledWeapon)`

**Purpose:** Handles logic related to `fill weapon`.

## Usage Example

```csharp
var value = new Crafting();
value.SetCraftedWeaponName(name);
```

## See Also

- [Complete Class Catalog](../catalog)