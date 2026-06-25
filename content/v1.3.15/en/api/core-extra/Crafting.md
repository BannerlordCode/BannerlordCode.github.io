---
title: "Crafting"
description: "Auto-generated class reference for Crafting."
---
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
`public void SetCraftedWeaponName(TextObject weaponName)`

**Purpose:** Assigns a new value to `crafted weapon name` and updates the object's internal state.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
crafting.SetCraftedWeaponName(weaponName);
```

### Init
`public void Init()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
crafting.Init();
```

### GetRandomPieceOfType
`public WeaponDesignElement GetRandomPieceOfType(CraftingPiece.PieceTypes pieceType, bool randomScale)`

**Purpose:** Reads and returns the `random piece of type` value held by the current object.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
var result = crafting.GetRandomPieceOfType(pieceType, false);
```

### SwitchToCraftedItem
`public void SwitchToCraftedItem(ItemObject item)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
crafting.SwitchToCraftedItem(item);
```

### Randomize
`public void Randomize()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
crafting.Randomize();
```

### SwitchToPiece
`public void SwitchToPiece(WeaponDesignElement piece)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
crafting.SwitchToPiece(piece);
```

### ScaleThePiece
`public void ScaleThePiece(CraftingPiece.PieceTypes scalingPieceType, int percentage)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
crafting.ScaleThePiece(scalingPieceType, 0);
```

### ReIndex
`public void ReIndex(bool enforceReCreation = false)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
crafting.ReIndex(false);
```

### Undo
`public bool Undo()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
var result = crafting.Undo();
```

### Redo
`public bool Redo()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
var result = crafting.Redo();
```

### UpdateHistory
`public void UpdateHistory()`

**Purpose:** Recalculates and stores the latest representation of `history`.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
crafting.UpdateHistory();
```

### GetRandomCraftName
`public TextObject GetRandomCraftName()`

**Purpose:** Reads and returns the `random craft name` value held by the current object.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
var result = crafting.GetRandomCraftName();
```

### GenerateItem
`public static void GenerateItem(WeaponDesign weaponDesignTemplate, TextObject name, BasicCultureObject culture, ItemModifierGroup itemModifierGroup, ref ItemObject itemObject, string customId = null)`

**Purpose:** Generates an instance, data, or representation of `item`.

```csharp
// Static call; no instance required
Crafting.GenerateItem(weaponDesignTemplate, name, culture, itemModifierGroup, itemObject, "example");
```

### GetCurrentCraftedItemObject
`public ItemObject GetCurrentCraftedItemObject(bool forceReCreate = false, string customId = null)`

**Purpose:** Reads and returns the `current crafted item object` value held by the current object.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
var result = crafting.GetCurrentCraftedItemObject(false, "example");
```

### GetStatDatasFromTemplate
`public static IEnumerable<CraftingStatData> GetStatDatasFromTemplate(int usageIndex, ItemObject craftedItemObject, CraftingTemplate template)`

**Purpose:** Reads and returns the `stat datas from template` value held by the current object.

```csharp
// Static call; no instance required
Crafting.GetStatDatasFromTemplate(0, craftedItemObject, template);
```

### GetStatDatas
`public IEnumerable<CraftingStatData> GetStatDatas(int usageIndex)`

**Purpose:** Reads and returns the `stat datas` value held by the current object.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
var result = crafting.GetStatDatas(0);
```

### GetXmlCodeForCurrentItem
`public string GetXmlCodeForCurrentItem(ItemObject item)`

**Purpose:** Reads and returns the `xml code for current item` value held by the current object.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
var result = crafting.GetXmlCodeForCurrentItem(item);
```

### TryGetWeaponPropertiesFromXmlCode
`public bool TryGetWeaponPropertiesFromXmlCode(string xmlCode, out CraftingTemplate craftingTemplate, out ValueTuple<CraftingPiece, int> pieces)`

**Purpose:** Attempts to retrieve `get weapon properties from xml code`, usually returning success through an out parameter.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
var result = crafting.TryGetWeaponPropertiesFromXmlCode("example", craftingTemplate, valueTuple<CraftingPiece, 0);
```

### CreatePreCraftedWeaponOnDeserialize
`public static ItemObject CreatePreCraftedWeaponOnDeserialize(ItemObject itemObject, WeaponDesignElement usedPieces, string templateId, TextObject craftedWeaponName, ItemModifierGroup itemModifierGroup)`

**Purpose:** Constructs a new `pre crafted weapon on deserialize` entity and returns it to the caller.

```csharp
// Static call; no instance required
Crafting.CreatePreCraftedWeaponOnDeserialize(itemObject, usedPieces, "example", craftedWeaponName, itemModifierGroup);
```

### InitializePreCraftedWeaponOnLoad
`public static ItemObject InitializePreCraftedWeaponOnLoad(ItemObject itemObject, WeaponDesign craftedData, TextObject itemName, BasicCultureObject culture)`

**Purpose:** Prepares the resources, state, or bindings required by `pre crafted weapon on load`.

```csharp
// Static call; no instance required
Crafting.InitializePreCraftedWeaponOnLoad(itemObject, craftedData, itemName, culture);
```

### GenerateCraftedItem
`public static ItemObject GenerateCraftedItem(ItemObject item, WeaponDesign weaponDesign, ItemModifierGroup itemModifierGroup)`

**Purpose:** Generates an instance, data, or representation of `crafted item`.

```csharp
// Static call; no instance required
Crafting.GenerateCraftedItem(item, weaponDesign, itemModifierGroup);
```

### FillWeapon
`public static void FillWeapon(ItemObject item, WeaponDescription weaponDescription, WeaponFlags weaponFlags, bool isAlternative, out WeaponComponentData filledWeapon)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
Crafting.FillWeapon(item, weaponDescription, weaponFlags, false, filledWeapon);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Crafting crafting = ...;
crafting.SetCraftedWeaponName(weaponName);
```

## See Also

- [Area Index](../)