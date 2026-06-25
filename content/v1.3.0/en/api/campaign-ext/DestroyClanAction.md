---
title: "DestroyClanAction"
description: "Auto-generated campaign action reference for DestroyClanAction."
---
# DestroyClanAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/DestroyClanAction.cs`

DestroyClanAction is a set of static methods that trigger "DestroyClan" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Clan destroyedClan)
```

**Purpose:** Applies the this instance's effect to its target.

### ApplyByFailedRebellion

```csharp
public static void ApplyByFailedRebellion(Clan failedRebellionClan)
```

**Purpose:** Applies the effect of by failed rebellion to the this instance.

### ApplyByClanLeaderDeath

```csharp
public static void ApplyByClanLeaderDeath(Clan destroyedClan)
```

**Purpose:** Applies the effect of by clan leader death to the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
DestroyClanAction.Apply(destroyedClan);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)