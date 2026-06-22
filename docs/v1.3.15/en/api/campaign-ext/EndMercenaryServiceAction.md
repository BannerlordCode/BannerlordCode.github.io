<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EndMercenaryServiceAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EndMercenaryServiceAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/EndMercenaryServiceAction.cs`

EndMercenaryServiceAction is a set of static methods that trigger "EndMercenaryService" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### EndByDefault

```csharp
public static void EndByDefault(Clan clan)
```

**Purpose:** end by default.

### EndByLeavingKingdom

```csharp
public static void EndByLeavingKingdom(Clan clan)
```

**Purpose:** end by leaving kingdom.

### EndByBecomingVassal

```csharp
public static void EndByBecomingVassal(Clan clan)
```

**Purpose:** end by becoming vassal.

## Usage Example

```csharp
// Trigger this action from a mod
EndMercenaryServiceAction.EndByDefault(clan);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)