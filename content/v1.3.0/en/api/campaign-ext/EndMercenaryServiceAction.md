---
title: "EndMercenaryServiceAction"
description: "Auto-generated campaign action reference for EndMercenaryServiceAction."
---
# EndMercenaryServiceAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/EndMercenaryServiceAction.cs`

EndMercenaryServiceAction is a set of static methods that trigger "EndMercenaryService" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### EndByDefault

```csharp
public static void EndByDefault(Clan clan)
```

**Purpose:** **Purpose:** Executes the EndByDefault logic.

### EndByLeavingKingdom

```csharp
public static void EndByLeavingKingdom(Clan clan)
```

**Purpose:** **Purpose:** Executes the EndByLeavingKingdom logic.

### EndByBecomingVassal

```csharp
public static void EndByBecomingVassal(Clan clan)
```

**Purpose:** **Purpose:** Executes the EndByBecomingVassal logic.

## Usage Example

```csharp
// Trigger this action from a mod
EndMercenaryServiceAction.EndByDefault(clan);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)