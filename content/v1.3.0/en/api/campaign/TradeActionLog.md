---
title: "TradeActionLog"
description: "Auto-generated class reference for TradeActionLog."
---
# TradeActionLog

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `internal class TradeActionLog`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CaravansCampaignBehavior.cs`

## Overview

`TradeActionLog` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ProfitRate` | `public float ProfitRate { get; }` |

## Key Methods

### OnSellAction
`public void OnSellAction(Settlement soldSettlement, int sellPrice)`

**Purpose:** **Purpose:** Invoked when the sell action event is raised.

```csharp
// Obtain an instance of TradeActionLog from the subsystem API first
TradeActionLog tradeActionLog = ...;
tradeActionLog.OnSellAction(soldSettlement, 0);
```

### Reset
`public void Reset()`

**Purpose:** **Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of TradeActionLog from the subsystem API first
TradeActionLog tradeActionLog = ...;
tradeActionLog.Reset();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TradeActionLog tradeActionLog = ...;
tradeActionLog.OnSellAction(soldSettlement, 0);
```

## See Also

- [Area Index](../)