---
title: "KingdomManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
- [🔀 Cross-Version Compare /versions/KingdomManager](/versions/KingdomManager)
<!-- END BREADCRUMB -->
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

**Purpose:** Called when the `session start` event is raised.

### CreateKingdom
`public void CreateKingdom(TextObject kingdomName, TextObject informalName, CultureObject culture, Clan founderClan, MBReadOnlyList<PolicyObject> initialPolicies = null, TextObject encyclopediaText = null, TextObject encyclopediaTitle = null, TextObject encyclopediaRulerTitle = null)`

**Purpose:** Creates a new `kingdom` instance or object.

### AbdicateTheThrone
`public void AbdicateTheThrone(Kingdom kingdom)`

**Purpose:** Handles logic related to `abdicate the throne`.

### RaidCompleted
`public void RaidCompleted(BattleSideEnum winnerSide, RaidEventComponent raidEvent)`

**Purpose:** Handles logic related to `raid completed`.

### SiegeCompleted
`public void SiegeCompleted(Settlement settlement, MobileParty capturerParty, bool isWin, MapEvent.BattleTypes battleType)`

**Purpose:** Handles logic related to `siege completed`.

### RelinquishSettlementOwnership
`public void RelinquishSettlementOwnership(Settlement settlement)`

**Purpose:** Handles logic related to `relinquish settlement ownership`.

### GiftSettlementOwnership
`public void GiftSettlementOwnership(Settlement settlement, Clan receiverClan)`

**Purpose:** Handles logic related to `gift settlement ownership`.

### GetEligibleClansForSettlementOwnershipGift
`public IEnumerable<Clan> GetEligibleClansForSettlementOwnershipGift(Settlement settlement)`

**Purpose:** Gets the current value of `eligible clans for settlement ownership gift`.

### GetMercenaryWageAmount
`public int GetMercenaryWageAmount(Hero hero)`

**Purpose:** Gets the current value of `mercenary wage amount`.

## Usage Example

```csharp
var manager = KingdomManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)