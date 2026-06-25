---
title: "EffectInfo"
description: "Auto-generated class reference for EffectInfo."
---
# EffectInfo

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Buildings
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct EffectInfo`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Settlements/Buildings/BuildingType.cs`

## Overview

`EffectInfo` lives in `TaleWorlds.CampaignSystem.Settlements.Buildings` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements.Buildings` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BuildingEffect` | `public BuildingEffectEnum BuildingEffect { get; }` |
| `BuildingEffectIncrementType` | `public BuildingEffectIncrementType BuildingEffectIncrementType { get; }` |
| `Level1Effect` | `public float Level1Effect { get; }` |
| `Level2Effect` | `public float Level2Effect { get; }` |
| `Level3Effect` | `public float Level3Effect { get; }` |

## Key Methods

### GetEffectValue
`public float GetEffectValue(int i)`

**Purpose:** **Purpose:** Reads and returns the effect value value held by the this instance.

```csharp
// Obtain an instance of EffectInfo from the subsystem API first
EffectInfo effectInfo = ...;
var result = effectInfo.GetEffectValue(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EffectInfo effectInfo = ...;
effectInfo.GetEffectValue(0);
```

## See Also

- [Area Index](../)