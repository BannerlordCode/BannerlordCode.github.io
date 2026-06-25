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

**Purpose:** .

### ApplyByFailedRebellion

```csharp
public static void ApplyByFailedRebellion(Clan failedRebellionClan)
```

**Purpose:** failed rebellion.

### ApplyByClanLeaderDeath

```csharp
public static void ApplyByClanLeaderDeath(Clan destroyedClan)
```

**Purpose:** clan leader death.

## Usage Example

```csharp
// Trigger this action from a mod
DestroyClanAction.Apply(destroyedClan);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)