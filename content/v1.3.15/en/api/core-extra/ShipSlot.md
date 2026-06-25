---
title: "ShipSlot"
description: "Auto-generated class reference for ShipSlot."
---
# ShipSlot

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class ShipSlot : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/ShipSlot.cs`

## Overview

`ShipSlot` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TypeId` | `public string TypeId { get; }` |
| `MainPrefabId` | `public string MainPrefabId { get; }` |
| `MatchingPieces` | `public MBReadOnlyList<ShipUpgradePiece> MatchingPieces { get; }` |

## Key Methods

### AfterRegister
`public override void AfterRegister()`

**Purpose:** Executes the AfterRegister logic.

```csharp
// Obtain an instance of ShipSlot from the subsystem API first
ShipSlot shipSlot = ...;
shipSlot.AfterRegister();
```

### AddMatchingPiece
`public void AddMatchingPiece(ShipUpgradePiece upgradePiece)`

**Purpose:** Adds matching piece to the current collection or state.

```csharp
// Obtain an instance of ShipSlot from the subsystem API first
ShipSlot shipSlot = ...;
shipSlot.AddMatchingPiece(upgradePiece);
```

### GetSlotTypeName
`public TextObject GetSlotTypeName()`

**Purpose:** Reads and returns the slot type name value held by the this instance.

```csharp
// Obtain an instance of ShipSlot from the subsystem API first
ShipSlot shipSlot = ...;
var result = shipSlot.GetSlotTypeName();
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of ShipSlot from the subsystem API first
ShipSlot shipSlot = ...;
shipSlot.Deserialize(objectManager, node);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ShipSlot shipSlot = ...;
shipSlot.AfterRegister();
```

## See Also

- [Area Index](../)