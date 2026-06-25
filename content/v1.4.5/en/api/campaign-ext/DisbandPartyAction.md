---
title: "DisbandPartyAction"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DisbandPartyAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DisbandPartyAction

## Mental Model

Treat `DisbandPartyAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/DisbandPartyAction.cs`

DisbandPartyAction is a set of static methods that trigger "DisbandParty" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### StartDisband

```csharp
public static void StartDisband(MobileParty disbandParty)
```

**Purpose:** start disband.

### CancelDisband

```csharp
public static void CancelDisband(MobileParty disbandParty)
```

**Purpose:** cancel disband.

## Usage Example

```csharp
// Trigger this action from a mod
DisbandPartyAction.StartDisband(disbandParty);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)