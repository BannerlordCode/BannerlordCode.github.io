---
title: "Supporter"
description: "Auto-generated class reference for Supporter."
---
# Supporter

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Supporter`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Election/Supporter.cs`

## Overview

`Supporter` lives in `TaleWorlds.CampaignSystem.Election` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Election` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPlayer` | `public bool IsPlayer { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `EncyclopediaLinkWithName` | `public TextObject EncyclopediaLinkWithName { get; }` |

## Key Methods

### Equals
`public override bool Equals(object obj)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of Supporter from the subsystem API first
Supporter supporter = ...;
var result = supporter.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** **Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of Supporter from the subsystem API first
Supporter supporter = ...;
var result = supporter.GetHashCode();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Supporter supporter = ...;
supporter.Equals(obj);
```

## See Also

- [Area Index](../)