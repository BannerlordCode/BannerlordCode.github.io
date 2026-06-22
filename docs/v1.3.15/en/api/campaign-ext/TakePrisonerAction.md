<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TakePrisonerAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TakePrisonerAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/TakePrisonerAction.cs`

TakePrisonerAction is a set of static methods that trigger "TakePrisoner" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(PartyBase capturerParty, Hero prisonerCharacter)
```

**Purpose:** .

### ApplyByTakenFromPartyScreen

```csharp
public static void ApplyByTakenFromPartyScreen(FlattenedTroopRoster roster)
```

**Purpose:** taken from party screen.

## Usage Example

```csharp
// Trigger this action from a mod
TakePrisonerAction.Apply(capturerParty, prisonerCharacter);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)