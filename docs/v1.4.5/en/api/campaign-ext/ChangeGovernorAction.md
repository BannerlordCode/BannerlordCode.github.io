<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChangeGovernorAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ChangeGovernorAction

## Mental Model

Treat `ChangeGovernorAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Actions/ChangeGovernorAction.cs`

ChangeGovernorAction is a set of static methods that trigger "ChangeGovernor" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(Town fortification, Hero governor)
```

**Purpose:** execute this entry point.

### RemoveGovernorOf

```csharp
public static void RemoveGovernorOf(Hero governor)
```

**Purpose:** remove governor of.

### RemoveGovernorOfIfExists

```csharp
public static void RemoveGovernorOfIfExists(Town town)
```

**Purpose:** remove governor of if exists.

## Usage Example

```csharp
// Trigger this action from a mod
ChangeGovernorAction.Apply(fortification, governor);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)