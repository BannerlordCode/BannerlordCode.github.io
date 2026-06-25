---
title: "TradeActionLogPool"
description: "Auto-generated class reference for TradeActionLogPool."
---
# TradeActionLogPool

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `internal class TradeActionLogPool`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/CaravansCampaignBehavior.cs`

## Overview

`TradeActionLogPool` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateNewLog
`public TradeActionLog CreateNewLog(Settlement boughtSettlement, int buyPrice, ItemRosterElement itemRosterElement)`

**Purpose:** Constructs a new new log entity and returns it to the caller.

```csharp
// Obtain an instance of TradeActionLogPool from the subsystem API first
TradeActionLogPool tradeActionLogPool = ...;
var result = tradeActionLogPool.CreateNewLog(boughtSettlement, 0, itemRosterElement);
```

### ReleaseLog
`public void ReleaseLog(TradeActionLog log)`

**Purpose:** Executes the ReleaseLog logic.

```csharp
// Obtain an instance of TradeActionLogPool from the subsystem API first
TradeActionLogPool tradeActionLogPool = ...;
tradeActionLogPool.ReleaseLog(log);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of TradeActionLogPool from the subsystem API first
TradeActionLogPool tradeActionLogPool = ...;
var result = tradeActionLogPool.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TradeActionLogPool tradeActionLogPool = ...;
tradeActionLogPool.CreateNewLog(boughtSettlement, 0, itemRosterElement);
```

## See Also

- [Area Index](../)