---
title: "KingdomManager"
description: "Auto-generated class reference for KingdomManager."
---
# KingdomManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/KingdomManager.cs`

## Overview

`KingdomManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `KingdomManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnSessionStart
`public void OnSessionStart()`

**Purpose:** **Purpose:** Invoked when the session start event is raised.

```csharp
// Obtain an instance of KingdomManager from the subsystem API first
KingdomManager kingdomManager = ...;
kingdomManager.OnSessionStart();
```

### CreateKingdom
`public void CreateKingdom(TextObject kingdomName, TextObject informalName, CultureObject culture, Clan founderClan, MBReadOnlyList<PolicyObject> initialPolicies = null, TextObject encyclopediaText = null, TextObject encyclopediaTitle = null, TextObject encyclopediaRulerTitle = null)`

**Purpose:** **Purpose:** Constructs a new kingdom entity and returns it to the caller.

```csharp
// Obtain an instance of KingdomManager from the subsystem API first
KingdomManager kingdomManager = ...;
kingdomManager.CreateKingdom(kingdomName, informalName, culture, founderClan, null, null, null, null);
```

### AbdicateTheThrone
`public void AbdicateTheThrone(Kingdom kingdom)`

**Purpose:** **Purpose:** Executes the AbdicateTheThrone logic.

```csharp
// Obtain an instance of KingdomManager from the subsystem API first
KingdomManager kingdomManager = ...;
kingdomManager.AbdicateTheThrone(kingdom);
```

### RaidCompleted
`public void RaidCompleted(BattleSideEnum winnerSide, RaidEventComponent raidEvent)`

**Purpose:** **Purpose:** Executes the RaidCompleted logic.

```csharp
// Obtain an instance of KingdomManager from the subsystem API first
KingdomManager kingdomManager = ...;
kingdomManager.RaidCompleted(winnerSide, raidEvent);
```

### SiegeCompleted
`public void SiegeCompleted(Settlement settlement, MobileParty capturerParty, bool isWin, MapEvent.BattleTypes battleType)`

**Purpose:** **Purpose:** Executes the SiegeCompleted logic.

```csharp
// Obtain an instance of KingdomManager from the subsystem API first
KingdomManager kingdomManager = ...;
kingdomManager.SiegeCompleted(settlement, capturerParty, false, battleType);
```

### RelinquishSettlementOwnership
`public void RelinquishSettlementOwnership(Settlement settlement)`

**Purpose:** **Purpose:** Executes the RelinquishSettlementOwnership logic.

```csharp
// Obtain an instance of KingdomManager from the subsystem API first
KingdomManager kingdomManager = ...;
kingdomManager.RelinquishSettlementOwnership(settlement);
```

### GiftSettlementOwnership
`public void GiftSettlementOwnership(Settlement settlement, Clan receiverClan)`

**Purpose:** **Purpose:** Executes the GiftSettlementOwnership logic.

```csharp
// Obtain an instance of KingdomManager from the subsystem API first
KingdomManager kingdomManager = ...;
kingdomManager.GiftSettlementOwnership(settlement, receiverClan);
```

### GetEligibleClansForSettlementOwnershipGift
`public IEnumerable<Clan> GetEligibleClansForSettlementOwnershipGift(Settlement settlement)`

**Purpose:** **Purpose:** Reads and returns the eligible clans for settlement ownership gift value held by the this instance.

```csharp
// Obtain an instance of KingdomManager from the subsystem API first
KingdomManager kingdomManager = ...;
var result = kingdomManager.GetEligibleClansForSettlementOwnershipGift(settlement);
```

### GetMercenaryWageAmount
`public int GetMercenaryWageAmount(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the mercenary wage amount value held by the this instance.

```csharp
// Obtain an instance of KingdomManager from the subsystem API first
KingdomManager kingdomManager = ...;
var result = kingdomManager.GetMercenaryWageAmount(hero);
```

## Usage Example

```csharp
var manager = KingdomManager.Current;
```

## See Also

- [Area Index](../)