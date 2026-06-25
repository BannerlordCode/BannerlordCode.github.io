---
title: "DisbandPartyAction"
description: "Auto-generated campaign action reference for DisbandPartyAction."
---
# DisbandPartyAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/DisbandPartyAction.cs`

DisbandPartyAction is a set of static methods that trigger "DisbandParty" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### StartDisband

```csharp
public static void StartDisband(MobileParty disbandParty)
```

**Purpose:** **Purpose:** Starts the disband flow or state machine.

### CancelDisband

```csharp
public static void CancelDisband(MobileParty disbandParty)
```

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for cel disband.

## Usage Example

```csharp
// Trigger this action from a mod
DisbandPartyAction.StartDisband(disbandParty);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)