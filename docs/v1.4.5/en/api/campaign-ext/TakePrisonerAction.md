<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TakePrisonerAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TakePrisonerAction

## Mental Model

Treat `TakePrisonerAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/TakePrisonerAction.cs`

TakePrisonerAction is a set of static methods that trigger "TakePrisoner" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(PartyBase capturerParty, Hero prisonerCharacter)
```

**Purpose:** execute this entry point.

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