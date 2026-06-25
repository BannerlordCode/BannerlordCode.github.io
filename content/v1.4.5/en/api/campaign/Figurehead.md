---
title: "Figurehead"
description: "Auto-generated class reference for Figurehead."
---
# Figurehead

**Namespace:** TaleWorlds.CampaignSystem.Naval
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Figurehead : PropertyObject`
**Base:** `PropertyObject`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Naval/Figurehead.cs`

## Overview

`Figurehead` lives in `TaleWorlds.CampaignSystem.Naval` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Naval` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `EffectIncrementType` | `public EffectIncrementType EffectIncrementType { get; }` |
| `EffectAmount` | `public float EffectAmount { get; }` |
| `Culture` | `public CultureObject Culture { get; }` |

## Key Methods

### Initialize
`public void Initialize(TextObject name, TextObject description, float amount, CultureObject culture, EffectIncrementType effectIncrementType)`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of Figurehead from the subsystem API first
Figurehead figurehead = ...;
figurehead.Initialize(name, description, 0, culture, effectIncrementType);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Figurehead figurehead = ...;
figurehead.Initialize(name, description, 0, culture, effectIncrementType);
```

## See Also

- [Area Index](../)