---
title: "Crafting"
description: "Auto-generated class reference for Crafting."
---
# Crafting

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class Crafting`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/Crafting.cs`

## Overview

`Crafting` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Output` | `public CraftingMaterials Output { get; }` |
| `OutputCount` | `public int OutputCount { get; }` |
| `Output2` | `public CraftingMaterials Output2 { get; }` |
| `Output2Count` | `public int Output2Count { get; }` |
| `Input1` | `public CraftingMaterials Input1 { get; }` |
| `Input1Count` | `public int Input1Count { get; }` |
| `Input2` | `public CraftingMaterials Input2 { get; }` |
| `Input2Count` | `public int Input2Count { get; }` |
| `CurrentCulture` | `public BasicCultureObject CurrentCulture { get; }` |
| `CurrentCraftingTemplate` | `public CraftingTemplate CurrentCraftingTemplate { get; }` |
| `CurrentWeaponDesign` | `public WeaponDesign CurrentWeaponDesign { get; }` |
| `CurrentItemModifierGroup` | `public ItemModifierGroup CurrentItemModifierGroup { get; }` |
| `CraftedWeaponName` | `public TextObject CraftedWeaponName { get; }` |
| `UsablePiecesList` | `public List<WeaponDesignElement> UsablePiecesList { get; }` |

## Key Methods

### FillWeapon
`public static void FillWeapon(ItemObject item, WeaponDescription weaponDescription, WeaponFlags weaponFlags, bool isAlternative, out WeaponComponentData filledWeapon)`

**Purpose:** **Purpose:** Executes the FillWeapon logic.

```csharp
// Static call; no instance required
Crafting.FillWeapon(item, weaponDescription, weaponFlags, false, filledWeapon);
```

### GenerateCraftedItem
`public static ItemObject GenerateCraftedItem(ItemObject item, WeaponDesign weaponDesign, ItemModifierGroup itemModifierGroup)`

**Purpose:** **Purpose:** Generates an instance, data, or representation of crafted item.

```csharp
// Static call; no instance required
Crafting.GenerateCraftedItem(item, weaponDesign, itemModifierGroup);
```

### SetCraftedWeaponName
`public void SetCraftedWeaponName(TextObject weaponName)`

**Purpose:** **Purpose:** Assigns a new value to crafted weapon name and updates the object's internal state.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
crafting.SetCraftedWeaponName(weaponName);
```

### Init
`public void Init()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
crafting.Init();
```

### GetRandomPieceOfType
`public WeaponDesignElement GetRandomPieceOfType(CraftingPiece.PieceTypes pieceType, bool randomScale)`

**Purpose:** **Purpose:** Reads and returns the random piece of type value held by the this instance.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
var result = crafting.GetRandomPieceOfType(pieceType, false);
```

### SwitchToCraftedItem
`public void SwitchToCraftedItem(ItemObject item)`

**Purpose:** **Purpose:** Executes the SwitchToCraftedItem logic.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
crafting.SwitchToCraftedItem(item);
```

### Randomize
`public void Randomize()`

**Purpose:** **Purpose:** Executes the Randomize logic.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
crafting.Randomize();
```

### SwitchToPiece
`public void SwitchToPiece(WeaponDesignElement piece)`

**Purpose:** **Purpose:** Executes the SwitchToPiece logic.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
crafting.SwitchToPiece(piece);
```

### ScaleThePiece
`public void ScaleThePiece(CraftingPiece.PieceTypes scalingPieceType, int percentage)`

**Purpose:** **Purpose:** Executes the ScaleThePiece logic.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
crafting.ScaleThePiece(scalingPieceType, 0);
```

### ReIndex
`public void ReIndex(bool enforceReCreation = false)`

**Purpose:** **Purpose:** Executes the ReIndex logic.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
crafting.ReIndex(false);
```

### Undo
`public bool Undo()`

**Purpose:** **Purpose:** Executes the Undo logic.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
var result = crafting.Undo();
```

### Redo
`public bool Redo()`

**Purpose:** **Purpose:** Executes the Redo logic.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
var result = crafting.Redo();
```

### UpdateHistory
`public void UpdateHistory()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of history.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
crafting.UpdateHistory();
```

### GetRandomCraftName
`public TextObject GetRandomCraftName()`

**Purpose:** **Purpose:** Reads and returns the random craft name value held by the this instance.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
var result = crafting.GetRandomCraftName();
```

### GenerateItem
`public static void GenerateItem(WeaponDesign weaponDesignTemplate, TextObject name, BasicCultureObject culture, ItemModifierGroup itemModifierGroup, ref ItemObject itemObject, string customId = null)`

**Purpose:** **Purpose:** Generates an instance, data, or representation of item.

```csharp
// Static call; no instance required
Crafting.GenerateItem(weaponDesignTemplate, name, culture, itemModifierGroup, itemObject, "example");
```

### GetCurrentCraftedItemObject
`public ItemObject GetCurrentCraftedItemObject(bool forceReCreate = false, string customId = null)`

**Purpose:** **Purpose:** Reads and returns the current crafted item object value held by the this instance.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
var result = crafting.GetCurrentCraftedItemObject(false, "example");
```

### GetStatDatasFromTemplate
`public static IEnumerable<CraftingStatData> GetStatDatasFromTemplate(int usageIndex, ItemObject craftedItemObject, CraftingTemplate template)`

**Purpose:** **Purpose:** Reads and returns the stat datas from template value held by the this instance.

```csharp
// Static call; no instance required
Crafting.GetStatDatasFromTemplate(0, craftedItemObject, template);
```

### GetStatDatas
`public IEnumerable<CraftingStatData> GetStatDatas(int usageIndex)`

**Purpose:** **Purpose:** Reads and returns the stat datas value held by the this instance.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
var result = crafting.GetStatDatas(0);
```

### GetXmlCodeForCurrentItem
`public string GetXmlCodeForCurrentItem(ItemObject item)`

**Purpose:** **Purpose:** Reads and returns the xml code for current item value held by the this instance.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
var result = crafting.GetXmlCodeForCurrentItem(item);
```

### TryGetWeaponPropertiesFromXmlCode
`public bool TryGetWeaponPropertiesFromXmlCode(string xmlCode, out CraftingTemplate craftingTemplate, out (CraftingPiece, int) pieces)`

**Purpose:** **Purpose:** Attempts to retrieve get weapon properties from xml code, usually returning success through an out parameter.

```csharp
// Obtain an instance of Crafting from the subsystem API first
Crafting crafting = ...;
var result = crafting.TryGetWeaponPropertiesFromXmlCode("example", craftingTemplate, (CraftingPiece, 0);
```

### CreatePreCraftedWeaponOnDeserialize
`public static ItemObject CreatePreCraftedWeaponOnDeserialize(ItemObject itemObject, WeaponDesignElement usedPieces, string templateId, TextObject craftedWeaponName, ItemModifierGroup itemModifierGroup)`

**Purpose:** **Purpose:** Constructs a new pre crafted weapon on deserialize entity and returns it to the caller.

```csharp
// Static call; no instance required
Crafting.CreatePreCraftedWeaponOnDeserialize(itemObject, usedPieces, "example", craftedWeaponName, itemModifierGroup);
```

### InitializePreCraftedWeaponOnLoad
`public static ItemObject InitializePreCraftedWeaponOnLoad(ItemObject itemObject, WeaponDesign craftedData, TextObject itemName, BasicCultureObject culture)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by pre crafted weapon on load.

```csharp
// Static call; no instance required
Crafting.InitializePreCraftedWeaponOnLoad(itemObject, craftedData, itemName, culture);
```

## Usage Example

```csharp
Crafting.FillWeapon(item, weaponDescription, weaponFlags, false, filledWeapon);
```

## See Also

- [Area Index](../)