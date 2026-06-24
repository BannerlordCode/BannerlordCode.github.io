
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SetPartyAiAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SetPartyAiAction

## Mental Model

Treat `SetPartyAiAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/SetPartyAiAction.cs`

SetPartyAiAction is a set of static methods that trigger "SetPartyAi" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### GetActionForVisitingSettlement

```csharp
public static void GetActionForVisitingSettlement(MobileParty owner, Settlement settlement, MobileParty.NavigationType navigationType, bool isFromPort, bool isTargetingPort)
```

**Purpose:** get action for visiting settlement.

### GetActionForPatrollingAroundSettlement

```csharp
public static void GetActionForPatrollingAroundSettlement(MobileParty owner, Settlement settlement, MobileParty.NavigationType navigationType, bool isFromPort, bool isTargetingPort)
```

**Purpose:** get action for patrolling around settlement.

### GetActionForPatrollingAroundPoint

```csharp
public static void GetActionForPatrollingAroundPoint(MobileParty owner, CampaignVec2 position, MobileParty.NavigationType navigationType, bool isFromPort)
```

**Purpose:** get action for patrolling around point.

### GetActionForRaidingSettlement

```csharp
public static void GetActionForRaidingSettlement(MobileParty owner, Settlement settlement, MobileParty.NavigationType navigationType, bool isFromPort)
```

**Purpose:** get action for raiding settlement.

### GetActionForBesiegingSettlement

```csharp
public static void GetActionForBesiegingSettlement(MobileParty owner, Settlement settlement, MobileParty.NavigationType navigationType, bool isFromPort)
```

**Purpose:** get action for besieging settlement.

### GetActionForEngagingParty

```csharp
public static void GetActionForEngagingParty(MobileParty owner, MobileParty mobileParty, MobileParty.NavigationType navigationType, bool isFromPort)
```

**Purpose:** get action for engaging party.

### GetActionForGoingAroundParty

```csharp
public static void GetActionForGoingAroundParty(MobileParty owner, MobileParty mobileParty, MobileParty.NavigationType navigationType, bool isFromPort)
```

**Purpose:** get action for going around party.

### GetActionForDefendingSettlement

```csharp
public static void GetActionForDefendingSettlement(MobileParty owner, Settlement settlement, MobileParty.NavigationType navigationType, bool isFromPort, bool isTargetingPort)
```

**Purpose:** get action for defending settlement.

### GetActionForEscortingParty

```csharp
public static void GetActionForEscortingParty(MobileParty owner, MobileParty mobileParty, MobileParty.NavigationType navigationType, bool isFromPort, bool isTargetingPort)
```

**Purpose:** get action for escorting party.

### GetActionForMovingToNearestLand

```csharp
public static void GetActionForMovingToNearestLand(MobileParty owner, Settlement settlement)
```

**Purpose:** get action for moving to nearest land.

## Usage Example

```csharp
// Trigger this action from a mod
SetPartyAiAction.GetActionForVisitingSettlement(owner, settlement, navigationType, false, false);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)