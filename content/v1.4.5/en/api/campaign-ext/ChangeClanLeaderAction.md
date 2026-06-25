---
title: "ChangeClanLeaderAction"
description: "Auto-generated campaign action reference for ChangeClanLeaderAction."
---
# ChangeClanLeaderAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeClanLeaderAction.cs`

ChangeClanLeaderAction is a set of static methods that trigger "ChangeClanLeader" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyWithSelectedNewLeader

```csharp
public static void ApplyWithSelectedNewLeader(Clan clan, Hero newLeader)
```

**Purpose:** with selected new leader.

### ApplyWithoutSelectedNewLeader

```csharp
public static void ApplyWithoutSelectedNewLeader(Clan clan)
```

**Purpose:** without selected new leader.

## Usage Example

```csharp
// Trigger this action from a mod
ChangeClanLeaderAction.ApplyWithSelectedNewLeader(clan, newLeader);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)