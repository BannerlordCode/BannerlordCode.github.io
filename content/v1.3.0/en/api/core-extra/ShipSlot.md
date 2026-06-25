---
title: "ShipSlot"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ShipSlot`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `after register`.

### AddMatchingPiece
`public void AddMatchingPiece(ShipUpgradePiece upgradePiece)`

**Purpose:** Adds `matching piece` to the current collection or state.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

## Usage Example

```csharp
var value = new ShipSlot();
value.AfterRegister();
```

## See Also

- [Complete Class Catalog](../catalog)