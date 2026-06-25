---
title: "Kingdom"
description: "A kingdom: the highest political entity made up of clans, managing war, policy, armies, and diplomacy."
---
# Kingdom

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public class Kingdom : IFaction`  
**Base:** —  
**File:** `TaleWorlds.CampaignSystem/Kingdom.cs`

## Overview

`Kingdom` is the **highest political entity in Bannerlord**, made up of multiple `Clan`s. It manages war/peace status, diplomatic stances, kingdom policies, army creation, and strategic kingdom decisions. Each kingdom has a culture, colors, a banner, and a (possibly empty) ruler.

Key roles:

- Aggregate all `Clan`s into faction relations.
- Determine war/peace: `IsAtWarWith`, `IsAllyWith`.
- Create armies (`CreateArmy`).
- Manage kingdom decisions (`KingdomDecision`) and policies (`PolicyObject`).
- Track total kingdom strength, settlements, colors, and banner.

## Mental Model

Think of `Kingdom` as a **political alliance of clans**:

- A single `Hero` belongs to a `Clan`, and a clan belongs to a `Kingdom`.
- War and peace happen between kingdoms/clans; individual heroes don't declare war.
- Kingdom policies affect all clans' behavior and economy.
- Armies are temporary groups of parties gathered on the campaign map for sieges or decisive battles.

## Core Properties

| Property | Description |
|----------|-------------|
| `All` | All kingdoms. |
| `Name` / `InformalName` | Kingdom name. |
| `Culture` | Kingdom culture. |
| `Ruler` | Current ruler. |
| `Clans` | Clans in the kingdom. |
| `Settlements` | Kingdom settlements. |
| `Armies` | Current armies. |
| `Banner` | Kingdom banner. |
| `Color` / `Color2` | Primary/secondary colors. |
| `MercenaryWallet` | Mercenary funds. |

## Key Methods

### `public static Kingdom CreateKingdom(string stringID)`
Create a new kingdom.

```csharp
Kingdom myKingdom = Kingdom.CreateKingdom("my_mod_kingdom");
myKingdom.InitializeKingdom(
    new TextObject("My Kingdom"),
    new TextObject("My Folk"),
    CultureObject.GetCulture("empire"),
    myBanner,
    0xFF0000U, 0xFFFFFFU,
    startingSettlement,
    new TextObject("Encyclopedia text"),
    new TextObject("My Kingdom"),
    new TextObject("High King"));
```

### `public void InitializeKingdom(...)`
Initialize the kingdom's name, culture, banner, colors, and starting settlement.

### `public bool IsAtWarWith(IFaction other)` / `public bool IsAllyWith(Kingdom other)`
Check war/ally status.

```csharp
if (enemyKingdom.IsAtWarWith(Clan.PlayerClan))
{
    // at war with player
}
```

### `public void CreateArmy(Hero armyLeader, Settlement targetSettlement, Army.ArmyTypes selectedArmyType, ...)`
Create an army.

```csharp
myKingdom.CreateArmy(myRuler, targetCastle, Army.ArmyTypes.Besieger);
```

### `public void AddPolicy(PolicyObject policy)` / `RemovePolicy(PolicyObject policy)` / `HasPolicy(PolicyObject policy)`
Manage kingdom policies.

```csharp
if (!myKingdom.HasPolicy(DefaultPolicies.Citizenship))
{
    myKingdom.AddPolicy(DefaultPolicies.Citizenship);
}
```

### `public void AddDecision(KingdomDecision kingdomDecision, bool ignoreInfluenceCost = false)`
Submit a kingdom decision (e.g., war, peace, expulsion).

```csharp
var warDecision = new DeclareWarDecision(myKingdom, enemyKingdom);
myKingdom.AddDecision(warDecision);
```

### `public StanceLink GetStanceWith(IFaction other)`
Get the stance link with another faction (war/peace/neutral info).

```csharp
StanceLink stance = myKingdom.GetStanceWith(enemyClan);
bool atWar = stance.IsAtWar;
```

## Typical Usage Examples

### Example 1: Force two kingdoms to make peace

```csharp
Kingdom a = Kingdom.FindFirst(k => k.StringId == "empire");
Kingdom b = Kingdom.FindFirst(k => k.StringId == "sturgia");
if (a != null && b != null && a.IsAtWarWith(b))
{
    a.SetStance(b, 0f, true); // peace
}
```

### Example 2: Give all clans of the player kingdom gold

```csharp
foreach (Clan clan in Clan.PlayerClan.Kingdom.Clans)
{
    clan.Leader.Gold += 10000;
}
```

### Example 3: Check if a settlement belongs to an enemy kingdom

```csharp
bool IsEnemySettlement(Settlement s) =>
    s.OwnerClan.Kingdom != null && s.OwnerClan.Kingdom.IsAtWarWith(Clan.PlayerClan.Kingdom);
```

## Cross-Version Notes

- v1.3.0 / v1.3.15 / v1.4.5 kingdom API is consistent.
- v1.4.5 expands kingdom decisions and diplomatic AI with more `KingdomDecision` subclasses.

## See Also

- [Clan](../Clan/) — building block of a kingdom
- [Hero](../Hero/) — clan members and rulers
- [Settlement](../Settlement/) — kingdom assets
- [Army](../../campaign-ext/Army/) — kingdom armies
- [PolicyObject](../../campaign-ext/PolicyObject/) — kingdom policies
- [KingdomDecision](../../campaign-ext/KingdomDecision/) — kingdom decision mechanics
