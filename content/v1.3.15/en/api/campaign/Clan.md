---
title: "Clan"
description: "A clan/family: owner of heroes, parties, and settlements, and the basic building block of a kingdom."
---
# Clan

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public class Clan : IFaction`  
**Base:** —  
**File:** `TaleWorlds.CampaignSystem/Clan.cs`

## Overview

`Clan` represents a **clan or family** in Bannerlord. A clan owns a set of `Hero`es, several `MobileParty` entries, zero or more `Settlement`s, and usually belongs to a `Kingdom`. It is the middle layer of the social hierarchy: individual (`Hero`) → clan (`Clan`) → kingdom (`Kingdom`).

Key roles:

- Manage clan renown, influence, gold, culture, and diplomatic relations.
- Track clan members (`Heroes` / `Lords` / `Companions`).
- Provide the global entry `PlayerClan`.
- Classify clans: noble, bandit, mercenary, minor faction, nomad, rebel, etc.

## Mental Model

Think of `Clan` as a **family-owned holding company**:

- A single `Hero` belongs to a `Clan`; the clan leader is the CEO.
- The clan owns settlements and armies as its assets.
- Common script checks: `someHero.Clan == Clan.PlayerClan` or `settlement.OwnerClan`.
- New clans are usually created via `Clan.CreateClan(...)` or companion-promotion helpers.

## Core Properties

| Property | Description |
|----------|-------------|
| `PlayerClan` | Player's clan. |
| `All` | All clans. |
| `NonBanditFactions` / `BanditFactions` | Non-bandit / bandit groups. |
| `Name` / `InformalName` | Clan name. |
| `Culture` | Clan culture. |
| `Renown` | Renown. |
| `Heroes` | All heroes in the clan. |
| `Lords` / `Companions` | Lords / companions. |
| `Settlements` | Settlements owned by the clan. |
| `Leader` | Clan leader. |
| `Kingdom` | Kingdom this clan belongs to. |
| `IsNoble` / `IsMinorFaction` / `IsOutlaw` / `IsBanditFaction` / `IsRebelClan` / `IsUnderMercenaryService` | Clan type flags. |
| `Color` / `Color2` | Clan colors. |

## Key Methods

### `public static Clan CreateClan(string stringID)`
Create a new clan.

```csharp
Clan myClan = Clan.CreateClan("my_mod_clan");
myClan.Name = new TextObject("{=my_clan_name}My Custom Clan");
myClan.Culture = CultureObject.GetCulture("empire");
```

### `public static Clan CreateCompanionToLordClan(Hero hero, Settlement settlement, TextObject clanName, int newClanIconId)`
Promote a companion to lord and create a new independent clan.

```csharp
Clan newClan = Clan.CreateCompanionToLordClan(myCompanion, grantSettlement, clanName, 1);
```

### `public static Clan CreateSettlementRebelClan(Settlement settlement, Hero owner, int iconMeshId = -1)`
Create a rebel clan for a settlement.

```csharp
Clan rebels = Clan.CreateSettlementRebelClan(revoltTarget, rebellionLeader);
```

### `public static Clan FindFirst(Predicate<Clan> predicate)`
Find a clan matching a condition.

```csharp
Clan enemy = Clan.FindFirst(c => c.IsAtWarWith(Clan.PlayerClan));
```

## Typical Usage Examples

### Example 1: Add renown to the player clan

```csharp
Clan.PlayerClan.Renown += 100f;
```

### Example 2: Grant a castle to a promoted hero as a new clan

```csharp
Settlement castle = Settlement.Find("castle_A1");
Clan newClan = Clan.CreateCompanionToLordClan(promotedHero, castle, new TextObject("New Banner"), 1);
castle.OwnerClan = newClan;
```

### Example 3: Iterate enemy clan lords

```csharp
foreach (Clan clan in Clan.All)
{
    if (clan.IsAtWarWith(Clan.PlayerClan))
    {
        foreach (Hero lord in clan.Lords)
        {
            // ...
        }
    }
}
```

## Cross-Version Notes

- v1.3.0 / v1.3.15 / v1.4.5 clan API is stable.
- v1.4.5 adds more minor-faction classifications (`IsMafia`, `IsSect`, `IsNomad`).

## See Also

- [Kingdom](../Kingdom/) — kingdom a clan belongs to
- [Hero](../Hero/) — clan members
- [Settlement](../Settlement/) — clan assets
- [MobileParty](../MobileParty/) — clan parties
