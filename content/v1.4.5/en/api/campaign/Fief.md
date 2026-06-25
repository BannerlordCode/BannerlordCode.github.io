---
title: "Fief"
description: "Auto-generated class reference for Fief."
---
# Fief

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class Fief : SettlementComponent`
**Base:** `SettlementComponent`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements/Fief.cs`

## Overview

`Fief` lives in `TaleWorlds.CampaignSystem.Settlements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Settlements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FoodStocks` | `public float FoodStocks { get; set; }` |

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
Fief instance = ...;
```

## See Also

- [Area Index](../)