---
title: "CraftingTemplate"
description: "Auto-generated class reference for CraftingTemplate."
---
# CraftingTemplate

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class CraftingTemplate : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/CraftingTemplate.cs`

## Overview

`CraftingTemplate` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BuildOrders` | `public PieceData BuildOrders { get; }` |
| `WeaponDescriptions` | `public WeaponDescription WeaponDescriptions { get; }` |
| `Pieces` | `public List<CraftingPiece> Pieces { get; }` |
| `ItemType` | `public ItemObject.ItemTypeEnum ItemType { get; }` |
| `ItemModifierGroup` | `public ItemModifierGroup ItemModifierGroup { get; }` |
| `ItemHolsters` | `public string ItemHolsters { get; }` |
| `ItemHolsterPositionShift` | `public Vec3 ItemHolsterPositionShift { get; }` |
| `UseWeaponAsHolsterMesh` | `public bool UseWeaponAsHolsterMesh { get; }` |
| `AlwaysShowHolsterWithWeapon` | `public bool AlwaysShowHolsterWithWeapon { get; }` |
| `RotateWeaponInHolster` | `public bool RotateWeaponInHolster { get; }` |
| `PieceTypeToScaleHolsterWith` | `public CraftingPiece.PieceTypes PieceTypeToScaleHolsterWith { get; }` |

## Key Methods

### GetIndexOfUsageDataWithId
`public int GetIndexOfUsageDataWithId(string weaponDescriptionId)`

**Purpose:** Reads and returns the index of usage data with id value held by the this instance.

```csharp
// Obtain an instance of CraftingTemplate from the subsystem API first
CraftingTemplate craftingTemplate = ...;
var result = craftingTemplate.GetIndexOfUsageDataWithId("example");
```

### IsPieceTypeHiddenOnHolster
`public bool IsPieceTypeHiddenOnHolster(CraftingPiece.PieceTypes pieceType)`

**Purpose:** Determines whether the this instance is in the piece type hidden on holster state or condition.

```csharp
// Obtain an instance of CraftingTemplate from the subsystem API first
CraftingTemplate craftingTemplate = ...;
var result = craftingTemplate.IsPieceTypeHiddenOnHolster(pieceType);
```

### GetStatDatas
`public IEnumerable<KeyValuePair<CraftingStatTypes, float>> GetStatDatas(string weaponDescriptionId, DamageTypes thrustDamageType, DamageTypes swingDamageType)`

**Purpose:** Reads and returns the stat datas value held by the this instance.

```csharp
// Obtain an instance of CraftingTemplate from the subsystem API first
CraftingTemplate craftingTemplate = ...;
var result = craftingTemplate.GetStatDatas("example", thrustDamageType, swingDamageType);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of CraftingTemplate from the subsystem API first
CraftingTemplate craftingTemplate = ...;
var result = craftingTemplate.ToString();
```

### IsPieceTypeUsable
`public bool IsPieceTypeUsable(CraftingPiece.PieceTypes pieceType)`

**Purpose:** Determines whether the this instance is in the piece type usable state or condition.

```csharp
// Obtain an instance of CraftingTemplate from the subsystem API first
CraftingTemplate craftingTemplate = ...;
var result = craftingTemplate.IsPieceTypeUsable(pieceType);
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of CraftingTemplate from the subsystem API first
CraftingTemplate craftingTemplate = ...;
craftingTemplate.Deserialize(objectManager, node);
```

### GetTemplateFromId
`public static CraftingTemplate GetTemplateFromId(string templateId)`

**Purpose:** Reads and returns the template from id value held by the this instance.

```csharp
// Static call; no instance required
CraftingTemplate.GetTemplateFromId("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CraftingTemplate craftingTemplate = ...;
craftingTemplate.GetIndexOfUsageDataWithId("example");
```

## See Also

- [Area Index](../)