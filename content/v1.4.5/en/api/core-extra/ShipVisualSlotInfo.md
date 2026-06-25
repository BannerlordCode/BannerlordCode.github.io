---
title: "ShipVisualSlotInfo"
description: "Auto-generated class reference for ShipVisualSlotInfo."
---
# ShipVisualSlotInfo

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct ShipVisualSlotInfo`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/ShipVisualSlotInfo.cs`

## Overview

`ShipVisualSlotInfo` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ShipVisualSlotInfo
`public struct ShipVisualSlotInfo(string visualSlotId, string visualPieceId)`

**Purpose:** **Purpose:** Executes the ShipVisualSlotInfo logic.

```csharp
// Obtain an instance of ShipVisualSlotInfo from the subsystem API first
ShipVisualSlotInfo shipVisualSlotInfo = ...;
var result = shipVisualSlotInfo.ShipVisualSlotInfo("example", "example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ShipVisualSlotInfo shipVisualSlotInfo = ...;
shipVisualSlotInfo.ShipVisualSlotInfo("example", "example");
```

## See Also

- [Area Index](../)