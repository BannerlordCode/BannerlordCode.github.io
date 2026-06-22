<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StartBattleAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StartBattleAction

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/StartBattleAction.cs`

StartBattleAction is a set of static methods that trigger "StartBattle" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### Apply

```csharp
public static void Apply(PartyBase attackerParty, PartyBase defenderParty)
```

**Purpose:** .

### ApplyStartBattle

```csharp
public static void ApplyStartBattle(MobileParty attackerParty, MobileParty defenderParty)
```

**Purpose:** start battle.

### ApplyStartRaid

```csharp
public static void ApplyStartRaid(MobileParty attackerParty, Settlement settlement)
```

**Purpose:** start raid.

### ApplyStartSallyOut

```csharp
public static void ApplyStartSallyOut(Settlement settlement, MobileParty defenderParty)
```

**Purpose:** start sally out.

### ApplyStartAssaultAgainstWalls

```csharp
public static void ApplyStartAssaultAgainstWalls(MobileParty attackerParty, Settlement settlement)
```

**Purpose:** start assault against walls.

## Usage Example

```csharp
// Trigger this action from a mod
StartBattleAction.Apply(attackerParty, defenderParty);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)