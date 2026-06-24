
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DestroyClanAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DestroyClanAction

## Mental Model

Treat `DestroyClanAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/DestroyClanAction.cs`

DestroyClanAction is a set of static methods that trigger "DestroyClan" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Clan destroyedClan)
```

**Purpose:** execute this entry point.

### ApplyByFailedRebellion

```csharp
public static void ApplyByFailedRebellion(Clan failedRebellionClan)
```

**Purpose:** failed rebellion.

### ApplyByClanLeaderDeath

```csharp
public static void ApplyByClanLeaderDeath(Clan destroyedClan)
```

**Purpose:** clan leader death.

## Usage Example

```csharp
// Trigger this action from a mod
DestroyClanAction.Apply(destroyedClan);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)