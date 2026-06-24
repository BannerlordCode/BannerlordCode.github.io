<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingTemplate`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingTemplate

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class CraftingTemplate : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/CraftingTemplate.cs`

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
| `All` | `public static MBReadOnlyList<CraftingTemplate> All { get; }` |

## Key Methods

### GetIndexOfUsageDataWithId
`public int GetIndexOfUsageDataWithId(string weaponDescriptionId)`

**Purpose:** Gets the current value of `index of usage data with id`.

### IsPieceTypeHiddenOnHolster
`public bool IsPieceTypeHiddenOnHolster(CraftingPiece.PieceTypes pieceType)`

**Purpose:** Handles logic related to `is piece type hidden on holster`.

### GetStatDatas
`public IEnumerable<KeyValuePair<CraftingTemplate.CraftingStatTypes, float>> GetStatDatas(string weaponDescriptionId, DamageTypes thrustDamageType, DamageTypes swingDamageType)`

**Purpose:** Gets the current value of `stat datas`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### IsPieceTypeUsable
`public bool IsPieceTypeUsable(CraftingPiece.PieceTypes pieceType)`

**Purpose:** Handles logic related to `is piece type usable`.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

### GetTemplateFromId
`public static CraftingTemplate GetTemplateFromId(string templateId)`

**Purpose:** Gets the current value of `template from id`.

## Usage Example

```csharp
var value = new CraftingTemplate();
value.GetIndexOfUsageDataWithId("example");
```

## See Also

- [Complete Class Catalog](../catalog)