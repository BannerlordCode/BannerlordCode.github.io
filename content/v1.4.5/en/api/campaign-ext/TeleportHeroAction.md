---
title: "TeleportHeroAction"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TeleportHeroAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TeleportHeroAction

## Mental Model

Treat `TeleportHeroAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/TeleportHeroAction.cs`

TeleportHeroAction is a set of static methods that trigger "TeleportHero" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyImmediateTeleportToSettlement

```csharp
public static void ApplyImmediateTeleportToSettlement(Hero heroToBeMoved, Settlement targetSettlement)
```

**Purpose:** immediate teleport to settlement.

### ApplyImmediateTeleportToParty

```csharp
public static void ApplyImmediateTeleportToParty(Hero heroToBeMoved, MobileParty party)
```

**Purpose:** immediate teleport to party.

### ApplyImmediateTeleportToPartyAsPartyLeader

```csharp
public static void ApplyImmediateTeleportToPartyAsPartyLeader(Hero heroToBeMoved, MobileParty party)
```

**Purpose:** immediate teleport to party as party leader.

### ApplyDelayedTeleportToSettlement

```csharp
public static void ApplyDelayedTeleportToSettlement(Hero heroToBeMoved, Settlement targetSettlement)
```

**Purpose:** delayed teleport to settlement.

### ApplyDelayedTeleportToParty

```csharp
public static void ApplyDelayedTeleportToParty(Hero heroToBeMoved, MobileParty party)
```

**Purpose:** delayed teleport to party.

### ApplyDelayedTeleportToSettlementAsGovernor

```csharp
public static void ApplyDelayedTeleportToSettlementAsGovernor(Hero heroToBeMoved, Settlement targetSettlement)
```

**Purpose:** delayed teleport to settlement as governor.

### ApplyDelayedTeleportToPartyAsPartyLeader

```csharp
public static void ApplyDelayedTeleportToPartyAsPartyLeader(Hero heroToBeMoved, MobileParty party)
```

**Purpose:** delayed teleport to party as party leader.

## Usage Example

```csharp
// Trigger this action from a mod
TeleportHeroAction.ApplyImmediateTeleportToSettlement(heroToBeMoved, targetSettlement);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)