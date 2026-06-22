<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChangeRomanticStateAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ChangeRomanticStateAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/ChangeRomanticStateAction.cs`

ChangeRomanticStateAction is a set of static methods that trigger "ChangeRomanticState" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Hero person1, Hero person2, Romance.RomanceLevelEnum toWhat)
```

**Purpose:** .

## Usage Example

```csharp
// Trigger this action from a mod
ChangeRomanticStateAction.Apply(person1, person2, toWhat);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)