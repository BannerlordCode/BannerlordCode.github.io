<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ShipHull`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ShipHull

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class ShipHull : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/ShipHull.cs`

## Overview

`ShipHull` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `BaseSpeed` | `public float BaseSpeed { get; }` |
| `Value` | `public int Value { get; }` |
| `HasHold` | `public bool HasHold { get; }` |
| `CanNavigateShallowWater` | `public bool CanNavigateShallowWater { get; }` |
| `CanEquipFigurehead` | `public bool CanEquipFigurehead { get; }` |
| `ProductionBuildWeight` | `public float ProductionBuildWeight { get; }` |
| `SeaWorthiness` | `public int SeaWorthiness { get; }` |
| `Type` | `public ShipHull.ShipType Type { get; }` |
| `IsTradeShip` | `public bool IsTradeShip { get; }` |
| `MissionShipObjectId` | `public string MissionShipObjectId { get; }` |
| `DefaultFormationGroup` | `public int DefaultFormationGroup { get; }` |
| `InventoryCapacity` | `public int InventoryCapacity { get; }` |
| `MaxHitPoints` | `public int MaxHitPoints { get; }` |
| `MaxSailHitPoints` | `public int MaxSailHitPoints { get; }` |
| `TotalCrewCapacity` | `public int TotalCrewCapacity { get; }` |
| `MainDeckCrewCapacity` | `public int MainDeckCrewCapacity { get; }` |
| `SkeletalCrewCapacity` | `public int SkeletalCrewCapacity { get; }` |
| `MapVisualScale` | `public float MapVisualScale { get; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### GetName
`public override TextObject GetName()`

**Purpose:** Gets the current value of `name`.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

## Usage Example

```csharp
var value = new ShipHull();
value.ToString();
```

## See Also

- [Complete Class Catalog](../catalog)