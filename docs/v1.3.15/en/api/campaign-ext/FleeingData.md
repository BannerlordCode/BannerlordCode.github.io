<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FleeingData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FleeingData

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FleeingData`
**Area:** campaign-ext

## Overview

`FleeingData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `FleeingData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDisabled` | `public bool IsDisabled { get; }` |
| `RethinkAtNextHourlyTick` | `public bool RethinkAtNextHourlyTick { get; }` |
| `DoNotMakeNewDecisions` | `public bool DoNotMakeNewDecisions { get; }` |
| `IsAlerted` | `public bool IsAlerted { get; }` |
| `DoNotAttackMainPartyUntil` | `public CampaignTime DoNotAttackMainPartyUntil { get; set; }` |
| `AvoidInitiative` | `public float AvoidInitiative { get; }` |
| `AttackInitiative` | `public float AttackInitiative { get; }` |
| `AiBehaviorPartyBase` | `public PartyBase AiBehaviorPartyBase { get; }` |
| `AiBehaviorInteractable` | `public IInteractablePoint AiBehaviorInteractable { get; set; }` |

## Key Methods

### CacheAiBehaviorPartyBase
`public void CacheAiBehaviorPartyBase()`

**Purpose:** Handles logic related to `cache ai behavior party base`.

### CheckPartyNeedsUpdate
`public void CheckPartyNeedsUpdate()`

**Purpose:** Handles logic related to `check party needs update`.

### CalculateFleePosition
`public void CalculateFleePosition(out CampaignVec2 fleeTargetPoint, MobileParty partyToFleeFrom, Vec2 averageEnemyVec)`

**Purpose:** Handles logic related to `calculate flee position`.

### GetNearbyPartyDataWhileDefendingSettlement
`public bool GetNearbyPartyDataWhileDefendingSettlement(Settlement targetSettlement, out bool shouldConsiderJoiningNearbyAllyParties, out bool shouldJoinLandSide, out bool shouldEngage, out MobileParty mostPowerfulLandAlly, out MobileParty mostPowerfulNavalAlly)`

**Purpose:** Gets the current value of `nearby party data while defending settlement`.

### DisableForHours
`public void DisableForHours(int hours)`

**Purpose:** Handles logic related to `disable for hours`.

### DisableAi
`public void DisableAi()`

**Purpose:** Handles logic related to `disable ai`.

### EnableAi
`public void EnableAi()`

**Purpose:** Handles logic related to `enable ai`.

### EnableAgainAtHourIsPast
`public bool EnableAgainAtHourIsPast()`

**Purpose:** Handles logic related to `enable again at hour is past`.

### SetDoNotAttackMainParty
`public void SetDoNotAttackMainParty(int hours)`

**Purpose:** Sets the value or state of `do not attack main party`.

### SetInitiative
`public void SetInitiative(float attackInitiative, float avoidInitiative, float hoursUntilReset)`

**Purpose:** Sets the value or state of `initiative`.

### SetDoNotMakeNewDecisions
`public void SetDoNotMakeNewDecisions(bool doNotMakeNewDecisions)`

**Purpose:** Sets the value or state of `do not make new decisions`.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

## Usage Example

```csharp
var value = new FleeingData();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
