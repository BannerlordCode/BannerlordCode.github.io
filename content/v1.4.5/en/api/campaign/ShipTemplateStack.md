---
title: "ShipTemplateStack"
description: "Auto-generated class reference for ShipTemplateStack."
---
# ShipTemplateStack

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct ShipTemplateStack`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party/ShipTemplateStack.cs`

## Overview

`ShipTemplateStack` lives in `TaleWorlds.CampaignSystem.Party` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ShipTemplateStack
`public struct ShipTemplateStack(ShipHull shipHull, int minValue, int maxValue)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ShipTemplateStack from the subsystem API first
ShipTemplateStack shipTemplateStack = ...;
var result = shipTemplateStack.ShipTemplateStack(shipHull, 0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ShipTemplateStack shipTemplateStack = ...;
shipTemplateStack.ShipTemplateStack(shipHull, 0, 0);
```

## See Also

- [Area Index](../)