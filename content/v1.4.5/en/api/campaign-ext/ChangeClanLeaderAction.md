---
title: "ChangeClanLeaderAction"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChangeClanLeaderAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ChangeClanLeaderAction

## Mental Model

Treat `ChangeClanLeaderAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeClanLeaderAction.cs`

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

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)