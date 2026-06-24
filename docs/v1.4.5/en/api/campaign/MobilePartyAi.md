<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MobilePartyAi`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MobilePartyAi

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MobilePartyAi`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party/MobilePartyAi.cs`

## Overview

`MobilePartyAi` lives in `TaleWorlds.CampaignSystem.Party` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

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

## Usage Example

```csharp
var value = new MobilePartyAi();
value.Clear();
```

## See Also

- [Complete Class Catalog](../catalog)