---
title: "FeatObject"
description: "Auto-generated class reference for FeatObject."
---
# FeatObject

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class FeatObject : PropertyObject`
**Base:** `PropertyObject`
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/FeatObject.cs`

## Overview

`FeatObject` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterDevelopment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `All` | `public static MBReadOnlyList<FeatObject> All { get; }` |
| `EffectBonus` | `public float EffectBonus { get; }` |
| `IncrementType` | `public FeatObject.AdditionType IncrementType { get; }` |
| `IsPositive` | `public bool IsPositive { get; }` |

## Key Methods

### Initialize
`public void Initialize(string name, string description, float effectBonus, bool isPositiveEffect, FeatObject.AdditionType incrementType)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of FeatObject from the subsystem API first
FeatObject featObject = ...;
featObject.Initialize("example", "example", 0, false, incrementType);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FeatObject featObject = ...;
featObject.Initialize("example", "example", 0, false, incrementType);
```

## See Also

- [Area Index](../)