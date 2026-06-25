---
title: "ShipSlotAndPieceName"
description: "Auto-generated class reference for ShipSlotAndPieceName."
---
# ShipSlotAndPieceName

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct ShipSlotAndPieceName`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/ShipSlotAndPieceName.cs`

## Overview

`ShipSlotAndPieceName` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ShipSlotAndPieceName
`public struct ShipSlotAndPieceName(string slotName, string pieceName)`

**Purpose:** **Purpose:** Executes the ShipSlotAndPieceName logic.

```csharp
// Obtain an instance of ShipSlotAndPieceName from the subsystem API first
ShipSlotAndPieceName shipSlotAndPieceName = ...;
var result = shipSlotAndPieceName.ShipSlotAndPieceName("example", "example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ShipSlotAndPieceName shipSlotAndPieceName = ...;
shipSlotAndPieceName.ShipSlotAndPieceName("example", "example");
```

## See Also

- [Area Index](../)