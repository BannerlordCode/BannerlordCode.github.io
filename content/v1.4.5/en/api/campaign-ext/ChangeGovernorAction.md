---
title: "ChangeGovernorAction"
description: "Auto-generated campaign action reference for ChangeGovernorAction."
---
# ChangeGovernorAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeGovernorAction.cs`

ChangeGovernorAction is a set of static methods that trigger "ChangeGovernor" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Town fortification, Hero governor)
```

**Purpose:** **Purpose:** Applies the this instance's effect to its target.

### RemoveGovernorOf

```csharp
public static void RemoveGovernorOf(Hero governor)
```

**Purpose:** **Purpose:** Removes governor of from the current collection or state.

### RemoveGovernorOfIfExists

```csharp
public static void RemoveGovernorOfIfExists(Town town)
```

**Purpose:** **Purpose:** Removes governor of if exists from the current collection or state.

## Usage Example

```csharp
// Trigger this action from a mod
ChangeGovernorAction.Apply(fortification, governor);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)