---
title: "TradeRumor"
description: "Auto-generated class reference for TradeRumor."
---
# TradeRumor

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TradeRumor`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/TradeRumor.cs`

## Overview

`TradeRumor` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RumorEndTime` | `public CampaignTime RumorEndTime { get; }` |

## Key Methods

### IsCompatable
`public bool IsCompatable(ItemObject item)`

**Purpose:** Determines whether the current object is in the `compatable` state or condition.

```csharp
// Obtain an instance of TradeRumor from the subsystem API first
TradeRumor tradeRumor = ...;
var result = tradeRumor.IsCompatable(item);
```

### IsExpired
`public bool IsExpired()`

**Purpose:** Determines whether the current object is in the `expired` state or condition.

```csharp
// Obtain an instance of TradeRumor from the subsystem API first
TradeRumor tradeRumor = ...;
var result = tradeRumor.IsExpired();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TradeRumor tradeRumor = ...;
tradeRumor.IsCompatable(item);
```

## See Also

- [Area Index](../)