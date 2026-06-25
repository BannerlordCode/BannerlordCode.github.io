---
title: "Production"
description: "Auto-generated class reference for Production."
---
# Production

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Workshops
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct Production`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Workshops/WorkshopType.cs`

## Overview

`Production` lives in `TaleWorlds.CampaignSystem.Settlements.Workshops` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements.Workshops` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Production
`public struct Production(float conversionSpeed)`

**Purpose:** Executes the Production logic.

```csharp
// Obtain an instance of Production from the subsystem API first
Production production = ...;
var result = production.Production(0);
```

### AddInput
`public void AddInput(ItemCategory item, int count = 1)`

**Purpose:** Adds input to the current collection or state.

```csharp
// Obtain an instance of Production from the subsystem API first
Production production = ...;
production.AddInput(item, 0);
```

### AddOutput
`public void AddOutput(ItemCategory outputCategory, int outputCount)`

**Purpose:** Adds output to the current collection or state.

```csharp
// Obtain an instance of Production from the subsystem API first
Production production = ...;
production.AddOutput(outputCategory, 0);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of Production from the subsystem API first
Production production = ...;
var result = production.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Production production = ...;
production.Production(0);
```

## See Also

- [Area Index](../)