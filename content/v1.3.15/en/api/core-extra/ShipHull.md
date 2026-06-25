---
title: "ShipHull"
description: "Auto-generated class reference for ShipHull."
---
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
| `Description` | `public TextObject Description { get; }` |
| `EncyclopediaLink` | `public string EncyclopediaLink { get; }` |
| `EncyclopediaLinkWithName` | `public TextObject EncyclopediaLinkWithName { get; }` |
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
| `MaxFireHitPoints` | `public int MaxFireHitPoints { get; }` |
| `MaxSailHitPoints` | `public int MaxSailHitPoints { get; }` |
| `TotalCrewCapacity` | `public int TotalCrewCapacity { get; }` |
| `MainDeckCrewCapacity` | `public int MainDeckCrewCapacity { get; }` |
| `SkeletalCrewCapacity` | `public int SkeletalCrewCapacity { get; }` |
| `MapVisualScale` | `public float MapVisualScale { get; }` |

## Key Methods

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of ShipHull from the subsystem API first
ShipHull shipHull = ...;
var result = shipHull.ToString();
```

### GetName
`public override TextObject GetName()`

**Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of ShipHull from the subsystem API first
ShipHull shipHull = ...;
var result = shipHull.GetName();
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of ShipHull from the subsystem API first
ShipHull shipHull = ...;
shipHull.Deserialize(objectManager, node);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ShipHull shipHull = ...;
shipHull.ToString();
```

## See Also

- [Area Index](../)