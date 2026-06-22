<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TransferPrisonerAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TransferPrisonerAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/TransferPrisonerAction.cs`

TransferPrisonerAction is a set of static methods that trigger "TransferPrisoner" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(CharacterObject prisonerTroop, PartyBase prisonerOwnerParty, PartyBase newParty)
```

**Purpose:** .

## Usage Example

```csharp
// Trigger this action from a mod
TransferPrisonerAction.Apply(prisonerTroop, prisonerOwnerParty, newParty);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)