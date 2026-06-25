---
title: "DeclareWarBarterable"
description: "Auto-generated class reference for DeclareWarBarterable."
---
# DeclareWarBarterable

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem.Barterables
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DeclareWarBarterable : Barterable`
**Base:** `Barterable`
**File:** `TaleWorlds.CampaignSystem/BarterSystem/Barterables/DeclareWarBarterable.cs`

## Overview

`DeclareWarBarterable` lives in `TaleWorlds.CampaignSystem.BarterSystem.Barterables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.BarterSystem.Barterables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StringID` | `public override string StringID { get; }` |
| `DeclaringFaction` | `public IFaction DeclaringFaction { get; }` |
| `OtherFaction` | `public IFaction OtherFaction { get; }` |
| `Name` | `public override TextObject Name { get; }` |

## Key Methods

### Apply
`public override void Apply()`

**Purpose:** Applies the current object's effect to its target.

```csharp
// Obtain an instance of DeclareWarBarterable from the subsystem API first
DeclareWarBarterable declareWarBarterable = ...;
declareWarBarterable.Apply();
```

### GetUnitValueForFaction
`public override int GetUnitValueForFaction(IFaction faction)`

**Purpose:** Reads and returns the `unit value for faction` value held by the current object.

```csharp
// Obtain an instance of DeclareWarBarterable from the subsystem API first
DeclareWarBarterable declareWarBarterable = ...;
var result = declareWarBarterable.GetUnitValueForFaction(faction);
```

### GetVisualIdentifier
`public override ImageIdentifier GetVisualIdentifier()`

**Purpose:** Reads and returns the `visual identifier` value held by the current object.

```csharp
// Obtain an instance of DeclareWarBarterable from the subsystem API first
DeclareWarBarterable declareWarBarterable = ...;
var result = declareWarBarterable.GetVisualIdentifier();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DeclareWarBarterable declareWarBarterable = ...;
declareWarBarterable.Apply();
```

## See Also

- [Area Index](../)