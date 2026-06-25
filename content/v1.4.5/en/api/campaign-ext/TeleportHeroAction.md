---
title: "TeleportHeroAction"
description: "Auto-generated campaign action reference for TeleportHeroAction."
---
# TeleportHeroAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/TeleportHeroAction.cs`

TeleportHeroAction is a set of static methods that trigger "TeleportHero" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyImmediateTeleportToSettlement

```csharp
public static void ApplyImmediateTeleportToSettlement(Hero heroToBeMoved, Settlement targetSettlement)
```

**Purpose:** Applies the effect of immediate teleport to settlement to the this instance.

### ApplyImmediateTeleportToParty

```csharp
public static void ApplyImmediateTeleportToParty(Hero heroToBeMoved, MobileParty party)
```

**Purpose:** Applies the effect of immediate teleport to party to the this instance.

### ApplyImmediateTeleportToPartyAsPartyLeader

```csharp
public static void ApplyImmediateTeleportToPartyAsPartyLeader(Hero heroToBeMoved, MobileParty party)
```

**Purpose:** Applies the effect of immediate teleport to party as party leader to the this instance.

### ApplyDelayedTeleportToSettlement

```csharp
public static void ApplyDelayedTeleportToSettlement(Hero heroToBeMoved, Settlement targetSettlement)
```

**Purpose:** Applies the effect of delayed teleport to settlement to the this instance.

### ApplyDelayedTeleportToParty

```csharp
public static void ApplyDelayedTeleportToParty(Hero heroToBeMoved, MobileParty party)
```

**Purpose:** Applies the effect of delayed teleport to party to the this instance.

### ApplyDelayedTeleportToSettlementAsGovernor

```csharp
public static void ApplyDelayedTeleportToSettlementAsGovernor(Hero heroToBeMoved, Settlement targetSettlement)
```

**Purpose:** Applies the effect of delayed teleport to settlement as governor to the this instance.

### ApplyDelayedTeleportToPartyAsPartyLeader

```csharp
public static void ApplyDelayedTeleportToPartyAsPartyLeader(Hero heroToBeMoved, MobileParty party)
```

**Purpose:** Applies the effect of delayed teleport to party as party leader to the this instance.

## Usage Example

```csharp
// Trigger this action from a mod
TeleportHeroAction.ApplyImmediateTeleportToSettlement(heroToBeMoved, targetSettlement);
```

## See Also

- [Area Index](../)
- [Campaign System](../../campaign/)