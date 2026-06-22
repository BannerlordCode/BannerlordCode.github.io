<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DisbandPartyAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DisbandPartyAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/DisbandPartyAction.cs`

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