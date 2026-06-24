
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GainKingdomInfluenceAction`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GainKingdomInfluenceAction

## Mental Model

Treat `GainKingdomInfluenceAction` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

**Namespace:** TaleWorlds.CampaignSystem.Actions
**Module:** TaleWorlds.CampaignSystem
**Type:** static class
**File:** `TaleWorlds.CampaignSystem/Actions/GainKingdomInfluenceAction.cs`

GainKingdomInfluenceAction is a set of static methods that trigger "GainKingdomInfluence" in the campaign for a specific reason. Mods call its `Apply*` overloads to change game state (one per reason).

## Methods

### ApplyForBattle

```csharp
public static void ApplyForBattle(Hero hero, float value)
```

**Purpose:** for battle.

### ApplyForGivingFood

```csharp
public static void ApplyForGivingFood(Hero hero1, Hero hero2, float value)
```

**Purpose:** for giving food.

### ApplyForDefault

```csharp
public static void ApplyForDefault(Hero hero, float value)
```

**Purpose:** for default.

### ApplyForJoiningFaction

```csharp
public static void ApplyForJoiningFaction(Hero hero, float value)
```

**Purpose:** for joining faction.

### ApplyForDonatePrisoners

```csharp
public static void ApplyForDonatePrisoners(MobileParty donatingParty, float value)
```

**Purpose:** for donate prisoners.

### ApplyForRaidingEnemyVillage

```csharp
public static void ApplyForRaidingEnemyVillage(MobileParty side1Party, float value)
```

**Purpose:** for raiding enemy village.

### ApplyForBesiegingEnemySettlement

```csharp
public static void ApplyForBesiegingEnemySettlement(MobileParty side1Party, float value)
```

**Purpose:** for besieging enemy settlement.

### ApplyForSiegeSafePassageBarter

```csharp
public static void ApplyForSiegeSafePassageBarter(MobileParty side1Party, float value)
```

**Purpose:** for siege safe passage barter.

### ApplyForCapturingEnemySettlement

```csharp
public static void ApplyForCapturingEnemySettlement(MobileParty side1Party, float value)
```

**Purpose:** for capturing enemy settlement.

### ApplyForLeavingTroopToGarrison

```csharp
public static void ApplyForLeavingTroopToGarrison(Hero hero, float value)
```

**Purpose:** for leaving troop to garrison.

### ApplyForBoardGameWon

```csharp
public static void ApplyForBoardGameWon(Hero hero, float value)
```

**Purpose:** for board game won.

## Usage Example

```csharp
// Trigger this action from a mod
GainKingdomInfluenceAction.ApplyForBattle(hero, 100);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Campaign System catalog](../catalog-campaign)