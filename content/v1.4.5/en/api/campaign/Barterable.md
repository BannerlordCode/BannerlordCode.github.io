---
title: "Barterable"
description: "Auto-generated class reference for Barterable."
---
# Barterable

**Namespace:** TaleWorlds.CampaignSystem.BarterSystem.Barterables
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class Barterable`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.BarterSystem.Barterables/Barterable.cs`

## Overview

`Barterable` lives in `TaleWorlds.CampaignSystem.BarterSystem.Barterables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.BarterSystem.Barterables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StringID` | `public abstract string StringID { get; }` |
| `OriginalOwner` | `public Hero OriginalOwner { get; }` |
| `OriginalParty` | `public PartyBase OriginalParty { get; }` |
| `Name` | `public abstract TextObject Name { get; set; }` |
| `CurrentAmount` | `public int CurrentAmount { get; set; }` |
| `IsOffered` | `public bool IsOffered { get; set; }` |
| `IsContextDependent` | `public bool IsContextDependent { get; set; }` |
| `Group` | `public BarterGroup Group { get; set; }` |
| `Side` | `public BarterSide Side { get; }` |

## Key Methods

### GetValueForFaction
`public int GetValueForFaction(IFaction faction)`

**Purpose:** Reads and returns the `value for faction` value held by the current object.

```csharp
// Obtain an instance of Barterable from the subsystem API first
Barterable barterable = ...;
var result = barterable.GetValueForFaction(faction);
```

### CheckBarterLink
`public virtual void CheckBarterLink(Barterable linkedBarterable)`

**Purpose:** Verifies whether `barter link` holds true for the current object.

```csharp
// Obtain an instance of Barterable from the subsystem API first
Barterable barterable = ...;
barterable.CheckBarterLink(linkedBarterable);
```

### GetUnitValueForFaction
`public abstract int GetUnitValueForFaction(IFaction faction)`

**Purpose:** Reads and returns the `unit value for faction` value held by the current object.

```csharp
// Obtain an instance of Barterable from the subsystem API first
Barterable barterable = ...;
var result = barterable.GetUnitValueForFaction(faction);
```

### SetIsOffered
`public void SetIsOffered(bool value)`

**Purpose:** Assigns a new value to `is offered` and updates the object's internal state.

```csharp
// Obtain an instance of Barterable from the subsystem API first
Barterable barterable = ...;
barterable.SetIsOffered(false);
```

### AddBarterLink
`public void AddBarterLink(Barterable barterable)`

**Purpose:** Adds `barter link` to the current collection or state.

```csharp
// Obtain an instance of Barterable from the subsystem API first
Barterable barterable = ...;
barterable.AddBarterLink(barterable);
```

### Initialize
`public void Initialize(BarterGroup barterGroup, bool isContextDependent)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of Barterable from the subsystem API first
Barterable barterable = ...;
barterable.Initialize(barterGroup, false);
```

### IsCompatible
`public virtual bool IsCompatible(Barterable barterable)`

**Purpose:** Determines whether the current object is in the `compatible` state or condition.

```csharp
// Obtain an instance of Barterable from the subsystem API first
Barterable barterable = ...;
var result = barterable.IsCompatible(barterable);
```

### GetVisualIdentifier
`public abstract ImageIdentifier GetVisualIdentifier()`

**Purpose:** Reads and returns the `visual identifier` value held by the current object.

```csharp
// Obtain an instance of Barterable from the subsystem API first
Barterable barterable = ...;
var result = barterable.GetVisualIdentifier();
```

### GetEncyclopediaLink
`public virtual string GetEncyclopediaLink()`

**Purpose:** Reads and returns the `encyclopedia link` value held by the current object.

```csharp
// Obtain an instance of Barterable from the subsystem API first
Barterable barterable = ...;
var result = barterable.GetEncyclopediaLink();
```

### Apply
`public abstract void Apply()`

**Purpose:** Applies the current object's effect to its target.

```csharp
// Obtain an instance of Barterable from the subsystem API first
Barterable barterable = ...;
barterable.Apply();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
Barterable instance = ...;
```

## See Also

- [Area Index](../)