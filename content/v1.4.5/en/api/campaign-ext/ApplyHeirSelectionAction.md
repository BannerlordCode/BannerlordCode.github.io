---
title: "ApplyHeirSelectionAction"
description: "Auto-generated campaign action reference for ApplyHeirSelectionAction."
---
# ApplyHeirSelectionAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ApplyHeirSelectionAction.cs`

ApplyHeirSelectionAction is a set of static methods that trigger "ApplyHeirSelection" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyByDeath

```csharp
public static void ApplyByDeath(Hero heir)
```

**Purpose:** death.

### ApplyByRetirement

```csharp
public static void ApplyByRetirement(Hero heir)
```

**Purpose:** retirement.

## Usage Example

```csharp
// Trigger this action from a mod
ApplyHeirSelectionAction.ApplyByDeath(heir);
```

## See Also

- [Area Index](../)
- [Campaign System](../campaign/)