---
title: "SetPartyAiAction"
description: "Auto-generated campaign action reference for SetPartyAiAction."
---
# SetPartyAiAction

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

**Purpose:** **Purpose:** Reads and returns the action for visiting settlement value held by the this instance.

### GetActionForPatrollingAroundSettlement

```csharp
public static void GetActionForPatrollingAroundSettlement(MobileParty owner, Settlement settlement, MobileParty.NavigationType navigationType, bool isFromPort, bool isTargetingPort)
```

**Purpose:** **Purpose:** Reads and returns the action for patrolling around settlement value held by the this instance.

### GetActionForPatrollingAroundPoint

```csharp
public static void GetActionForPatrollingAroundPoint(MobileParty owner, CampaignVec2 position, MobileParty.NavigationType navigationType, bool isFromPort)
```

**Purpose:** **Purpose:** Reads and returns the action for patrolling around point value held by the this instance.

### GetActionForRaidingSettlement

```csharp
public static void GetActionForRaidingSettlement(MobileParty owner, Settlement settlement, MobileParty.NavigationType navigationType, bool isFromPort)
```

**Purpose:** **Purpose:** Reads and returns the action for raiding settlement value held by the this instance.

### GetActionForBesiegingSettlement

```csharp
public static void GetActionForBesiegingSettlement(MobileParty owner, Settlement settlement, MobileParty.NavigationType navigationType, bool isFromPort)
```

**Purpose:** **Purpose:** Reads and returns the action for besieging settlement value held by the this instance.

### GetActionForEngagingParty

```csharp
public static void GetActionForEngagingParty(MobileParty owner, MobileParty mobileParty, MobileParty.NavigationType navigationType, bool isFromPort)
```

**Purpose:** **Purpose:** Reads and returns the action for engaging party value held by the this instance.

### GetActionForGoingAroundParty

```csharp
public static void GetActionForGoingAroundParty(MobileParty owner, MobileParty mobileParty, MobileParty.NavigationType navigationType, bool isFromPort)
```

**Purpose:** **Purpose:** Reads and returns the action for going around party value held by the this instance.

### GetActionForDefendingSettlement

```csharp
public static void GetActionForDefendingSettlement(MobileParty owner, Settlement settlement, MobileParty.NavigationType navigationType, bool isFromPort, bool isTargetingPort)
```

**Purpose:** **Purpose:** Reads and returns the action for defending settlement value held by the this instance.

### GetActionForEscortingParty

```csharp
public static void GetActionForEscortingParty(MobileParty owner, MobileParty mobileParty, MobileParty.NavigationType navigationType, bool isFromPort, bool isTargetingPort)
```

**Purpose:** **Purpose:** Reads and returns the action for escorting party value held by the this instance.

### GetActionForMovingToNearestLand

```csharp
public static void GetActionForMovingToNearestLand(MobileParty owner, Settlement settlement)
```

**Purpose:** **Purpose:** Reads and returns the action for moving to nearest land value held by the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
SetPartyAiAction.GetActionForVisitingSettlement(owner, settlement, navigationType, false, false);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)