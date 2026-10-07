---
title: "IFaction"
description: "The campaign-level interface that every faction — kingdoms and clans — implements, exposing identity, diplomacy, settlements, and strength."
---

# IFaction

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IFaction`
**Base:** (none — marker interface)
**File:** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/IFaction.cs`

## Overview

`IFaction` is the contract that every political entity in the campaign layer implements. It is the single abstraction the campaign system uses to talk about "a side" — whether that side is a kingdom ruling multiple clans or a single clan on its own. The interface is declared at IFaction.cs:11-12 with the `[SaveableInterface(22001)]` attribute, which tells the save system that any object graph reachable through an `IFaction` reference must be serialized.

The interface is deliberately broad. It covers identity (`Name`, `StringId`, `Id`, `InformalName`, `EncyclopediaLink`, `EncyclopediaLinkWithName`, `EncyclopediaText`), culture and banner (`Culture`, `Color`, `Color2`, `Banner`), leadership (`Leader`, `BasicTroop`), territory (`Settlements`, `Fiefs`, `InitialHomeSettlement`, `FactionMidSettlement`), roster (`Heroes`, `AliveLords`, `DeadLords`, `WarPartyComponents`), faction classification flags (`IsBanditFaction`, `IsMinorFaction`, `IsKingdomFaction`, `IsRebelClan`, `IsClan`, `IsOutlaw`, `IsMapFaction`, `HasNavalNavigationCapability`), military strength (`CurrentTotalStrength`, `DistanceToClosestNonAllyFortification`), diplomacy (`FactionsAtWarWith`, `IsAtWarWith`, `GetStanceWith`, `UpdateFactionsAtWarWith`), crime (`TributeWallet`, `MainHeroCrimeRating`, `DailyCrimeRatingChange`, `DailyCrimeRatingChangeExplained`), and elimination state (`IsEliminated`, `NotAttackableByPlayerUntilTime`).

Two concrete types implement this interface: `Kingdom` (Kingdom.cs:24, `public sealed class Kingdom : MBObjectBase, IFaction`) and `Clan` (Clan.cs:21, `public sealed class Clan : MBObjectBase, IFaction`). A kingdom is a faction that groups clans under a ruler; a clan is a faction that represents one extended family. Most campaign code works against the `IFaction` interface rather than the concrete types, so a mod can treat kingdoms and clans uniformly.

## Mental Model

Think of `IFaction` as the "who" of the campaign. Every diplomatic relationship, every war declaration, every settlement ownership check, and every strength comparison is expressed in terms of `IFaction`. The interface is the lingua franca of campaign politics.

Key rules to internalize:

- **Two implementers, one contract.** `Kingdom` and `Clan` are the only implementers. When you hold an `IFaction`, you are holding either a kingdom or a clan. Use the `IsKingdomFaction` / `IsClan` flags to branch when you need kingdom-only or clan-only behavior.
- **Identity is dual-keyed.** Every faction has a `StringId` (the stable string identifier used in XML and saves) and an `Id` (an `MBGUID`, the runtime unique identifier). Prefer `StringId` for save-stable references and `Id` for runtime lookups.
- **Diplomacy is stance-based.** `GetStanceWith` returns a `StanceLink` that encodes the diplomatic relationship between two factions. `FactionsAtWarWith` is the cached set of enemies; `UpdateFactionsAtWarWith` recomputes it. `IsAtWarWith` is the fast query.
- **Strength is cached.** `CurrentTotalStrength` is a computed value that the campaign updates periodically. Do not assume it is real-time; it is a snapshot.
- **Crime is per-faction.** `MainHeroCrimeRating` and `DailyCrimeRatingChange` track the player's crime rating with this specific faction. Crime is not global — it is faction-scoped.
- **Elimination is terminal.** `IsEliminated` marks a faction that has been permanently removed from the campaign. Eliminated factions should not be queried for diplomacy or strength.

## How to use

### How to get it

The campaign exposes all factions through `Campaign.Current.Factions`, which is the master collection. To get the player's faction, use `Clan.PlayerClan` — this returns a `Clan`, which is an `IFaction`. To get a specific faction by identifier, iterate `Campaign.Current.Factions` and match on `StringId` or `Id`. The `MapFaction` property on a settlement or hero returns the `IFaction` that owns that entity.

### Typical usage

A mod typically obtains an `IFaction` reference and then queries its properties or checks diplomatic state. The most common patterns are: checking `IsAtWarWith` before allowing an action, reading `Leader` to find the faction's leader hero, iterating `Settlements` to enumerate territory, reading `Color` / `Color2` for UI rendering, and checking `IsEliminated` before interacting with a faction. When you need the concrete type, cast to `Kingdom` or `Clan` after checking the classification flags.

### Pitfalls

- **Do not cast blindly.** Always check `IsKingdomFaction` or `IsClan` before casting to `Kingdom` or `Clan`. A kingdom is not a clan and vice versa.
- **Do not cache `CurrentTotalStrength`.** It is a periodic snapshot. Re-read it when you need a fresh value.
- **Do not confuse `Color` and `Color2`.** `Color` is the primary faction color; `Color2` is the secondary accent. They are both `uint` values, not `Color` structs.
- **Do not query eliminated factions.** Check `IsEliminated` before reading diplomacy or strength from a faction that may have been removed.
- **Do not assume `FactionsAtWarWith` is up to date.** If you have just changed a stance, call `UpdateFactionsAtWarWith` before reading the set.

## Key Members

| Member | Signature | What it is for |
| --- | --- | --- |
| `Name` | `string Name { get; }` | The display name of the faction, localized for the current language. |
| `StringId` | `string StringId { get; }` | The stable string identifier used in XML definitions and save files. |
| `Id` | `MBGUID Id { get; }` | The runtime unique identifier for the faction. |
| `InformalName` | `string InformalName { get; }` | The informal or historical name of the faction. |
| `EncyclopediaLink` | `string EncyclopediaLink { get; }` | The encyclopedia page link for the faction. |
| `EncyclopediaLinkWithName` | `string EncyclopediaLinkWithName { get; }` | The encyclopedia link prefixed with the faction name. |
| `EncyclopediaText` | `string EncyclopediaText { get; }` | The encyclopedia description text for the faction. |
| `Culture` | `CultureObject Culture { get; }` | The culture object defining the faction's troop tree and customs. |
| `InitialHomeSettlement` | `Settlement InitialHomeSettlement { get; }` | The settlement where the faction was founded. |
| `Color` | `uint Color { get; }` | The primary faction color as a packed uint. |
| `Color2` | `uint Color2 { get; }` | The secondary faction color as a packed uint. |
| `BasicTroop` | `Hero BasicTroop { get; }` | The basic troop unit template for the faction. |
| `Leader` | `Hero Leader { get; }` | The current leader hero of the faction. |
| `Banner` | `Banner Banner { get; }` | The banner object defining the faction's visual banner. |
| `Settlements` | `IEnumerable<Settlement> Settlements { get; }` | All settlements currently owned by the faction. |
| `Fiefs` | `IEnumerable<Settlement> Fiefs { get; }` | The fief settlements controlled by the faction. |
| `AliveLords` | `IEnumerable<Hero> AliveLords { get; }` | All living lord heroes belonging to the faction. |
| `DeadLords` | `IEnumerable<Hero> DeadLords { get; }` | All deceased lord heroes of the faction. |
| `Heroes` | `IEnumerable<Hero> Heroes { get; }` | All heroes belonging to the faction, living or dead. |
| `WarPartyComponents` | `IEnumerable<WarPartyComponent> WarPartyComponents { get; }` | The war party components fielded by the faction. |
| `IsBanditFaction` | `bool IsBanditFaction { get; }` | Whether this faction is a bandit faction. |
| `IsMinorFaction` | `bool IsMinorFaction { get; }` | Whether this faction is a minor faction. |
| `IsKingdomFaction` | `bool IsKingdomFaction { get; }` | Whether this faction is a kingdom. |
| `IsRebelClan` | `bool IsRebelClan { get; }` | Whether this faction is a rebel clan. |
| `IsClan` | `bool IsClan { get; }` | Whether this faction is a clan. |
| `IsOutlaw` | `bool IsOutlaw { get; }` | Whether this faction is an outlaw faction. |
| `IsMapFaction` | `bool IsMapFaction { get; }` | Whether this faction is a map-only faction. |
| `HasNavalNavigationCapability` | `bool HasNavalNavigationCapability { get; }` | Whether this faction can navigate naval routes. |
| `MapFaction` | `IFaction MapFaction { get; }` | The map faction associated with this faction. |
| `CurrentTotalStrength` | `float CurrentTotalStrength { get; }` | The cached total military strength of the faction. |
| `FactionMidSettlement` | `Settlement FactionMidSettlement { get; }` | The geographic center settlement of the faction. |
| `DistanceToClosestNonAllyFortification` | `float DistanceToClosestNonAllyFortification { get; }` | Distance to the nearest fortification not allied with this faction. |
| `FactionsAtWarWith` | `IEnumerable<IFaction> FactionsAtWarWith { get; }` | The cached set of factions this faction is at war with. |
| `TributeWallet` | `TributeWallet TributeWallet { get; set; }` | The tribute wallet tracking tribute owed to or by this faction. |
| `MainHeroCrimeRating` | `float MainHeroCrimeRating { get; set; }` | The player hero's crime rating with this faction. |
| `DailyCrimeRatingChange` | `float DailyCrimeRatingChange { get; }` | The daily change in the player's crime rating with this faction. |
| `Aggressiveness` | `float Aggressiveness { get; }` | The aggressiveness rating of this faction. |
| `IsEliminated` | `bool IsEliminated { get; }` | Whether this faction has been eliminated from the campaign. |
| `DailyCrimeRatingChangeExplained` | `string DailyCrimeRatingChangeExplained { get; }` | A human-readable explanation of the daily crime rating change. |
| `NotAttackableByPlayerUntilTime` | `CampaignTime NotAttackableByPlayerUntilTime { get; set; }` | The time until which the player cannot attack this faction. |
| `IsAtWarWith` | `bool IsAtWarWith(IFaction other)` | Whether this faction is at war with the specified faction. |
| `GetStanceWith` | `StanceLink GetStanceWith(IFaction other)` | The diplomatic stance link between this faction and another. |
| `UpdateFactionsAtWarWith` | `void UpdateFactionsAtWarWith()` | Recomputes the cached set of factions at war with this faction. |

## Real Example

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.SandBox.GameComponents;

// Get the player's faction (a Clan, which is an IFaction)
IFaction playerFaction = Clan.PlayerClan;

// Check if the player is at war with any faction
foreach (IFaction faction in Campaign.Current.Factions)
{
    if (faction == playerFaction)
        continue;

    if (playerFaction.IsAtWarWith(faction))
    {
        // Read the leader and color for UI display
        Hero leader = faction.Leader;
        uint primaryColor = faction.Color;
        uint secondaryColor = faction.Color2;

        // Check if the faction is a kingdom or a clan
        if (faction.IsKingdomFaction)
        {
            Kingdom kingdom = (Kingdom)faction;
            // Kingdom-specific logic here
        }
        else if (faction.IsClan)
        {
            Clan clan = (Clan)faction;
            // Clan-specific logic here
        }
    }
}

// Get the diplomatic stance between two factions
StanceLink stance = playerFaction.GetStanceWith(someOtherFaction);

// Read the faction's strength and territory
float strength = playerFaction.CurrentTotalStrength;
foreach (Settlement settlement in playerFaction.Settlements)
{
    // Process each owned settlement
}
```

## See also
- [Campaign](../Campaign)
- [Kingdom](../Kingdom)
- [Clan](../Clan)
- [Settlement](../Settlement)
- [Hero](../Hero)
- [StanceLink](../StanceLink)
- [CultureObject](../CultureObject)

## Navigation
- [campaign index](../)
- [Kingdom](../Kingdom)
- [Clan](../Clan)
