---
title: "ShipSail"
description: "Auto-generated class reference for ShipSail."
---
# ShipSail

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class ShipSail`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/ShipSail.cs`

## Overview

`ShipSail` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### NearlyEquals
`public bool NearlyEquals(ShipSail otherShipSail)`

**Purpose:** **Purpose:** Executes the NearlyEquals logic.

```csharp
// Obtain an instance of ShipSail from the subsystem API first
ShipSail shipSail = ...;
var result = shipSail.NearlyEquals(otherShipSail);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ShipSail shipSail = ...;
shipSail.NearlyEquals(otherShipSail);
```

## See Also

- [Area Index](../)