<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EndMercenaryServiceAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EndMercenaryServiceAction

## Mental Model

Treat `EndMercenaryServiceAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/EndMercenaryServiceAction.cs`

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