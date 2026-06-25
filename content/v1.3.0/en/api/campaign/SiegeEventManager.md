---
title: "SiegeEventManager"
description: "Auto-generated class reference for SiegeEventManager."
---
# SiegeEventManager

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeEventManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Siege/SiegeEventManager.cs`

## Overview

`SiegeEventManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `SiegeEventManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SiegeEvents` | `public MBReadOnlyList<SiegeEvent> SiegeEvents { get; }` |

## Key Methods

### StartSiegeEvent
`public SiegeEvent StartSiegeEvent(Settlement settlement, MobileParty besiegerParty)`

**Purpose:** Starts the siege event flow or state machine.

```csharp
// Obtain an instance of SiegeEventManager from the subsystem API first
SiegeEventManager siegeEventManager = ...;
var result = siegeEventManager.StartSiegeEvent(settlement, besiegerParty);
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of SiegeEventManager from the subsystem API first
SiegeEventManager siegeEventManager = ...;
siegeEventManager.Tick(0);
```

### OnAfterLoad
`public void OnAfterLoad()`

**Purpose:** Invoked when the after load event is raised.

```csharp
// Obtain an instance of SiegeEventManager from the subsystem API first
SiegeEventManager siegeEventManager = ...;
siegeEventManager.OnAfterLoad();
```

## Usage Example

```csharp
var manager = SiegeEventManager.Current;
```

## See Also

- [Area Index](../)