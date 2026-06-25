---
title: "DestroyPartyAction"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DestroyPartyAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DestroyPartyAction

## Mental Model

Treat `DestroyPartyAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/DestroyPartyAction.cs`

DestroyPartyAction is a set of static methods that trigger "DestroyParty" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(PartyBase destroyerParty, MobileParty destroyedParty)
```

**Purpose:** execute this entry point.

### ApplyForDisbanding

```csharp
public static void ApplyForDisbanding(MobileParty disbandedParty, Settlement relatedSettlement)
```

**Purpose:** for disbanding.

## Usage Example

```csharp
// Trigger this action from a mod
DestroyPartyAction.Apply(destroyerParty, destroyedParty);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)