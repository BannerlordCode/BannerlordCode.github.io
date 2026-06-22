<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
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

`KingdomManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Methods

### OnSessionStart
```csharp
public void OnSessionStart()
```

### CreateKingdom
```csharp
public void CreateKingdom(TextObject kingdomName, TextObject informalName, CultureObject culture, Clan founderClan, MBReadOnlyList<PolicyObject> initialPolicies = null, TextObject encyclopediaText = null, TextObject encyclopediaTitle = null, TextObject encyclopediaRulerTitle = null)
```

### AbdicateTheThrone
```csharp
public void AbdicateTheThrone(Kingdom kingdom)
```

### RaidCompleted
```csharp
public void RaidCompleted(BattleSideEnum winnerSide, RaidEventComponent raidEvent)
```

### SiegeCompleted
```csharp
public void SiegeCompleted(Settlement settlement, MobileParty capturerParty, bool isWin, MapEvent.BattleTypes battleType)
```

### RelinquishSettlementOwnership
```csharp
public void RelinquishSettlementOwnership(Settlement settlement)
```

### GiftSettlementOwnership
```csharp
public void GiftSettlementOwnership(Settlement settlement, Clan receiverClan)
```

### GetEligibleClansForSettlementOwnershipGift
```csharp
public IEnumerable<Clan> GetEligibleClansForSettlementOwnershipGift(Settlement settlement)
```

### GetMercenaryWageAmount
```csharp
public int GetMercenaryWageAmount(Hero hero)
```

## Usage Example

```csharp
// Typical usage of KingdomManager (Manager)
KingdomManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)