---
title: "ShipHelper: naval presentation and raid selection"
description: "ShipHelper is the v1.4.5 static utility for ship banners, sail colors, and the player's shallow-water naval-raid selection."
---
# ShipHelper

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public static class ShipHelper`  
**Base:** none  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/ShipHelper.cs`

## One-sentence responsibility

It resolves a ship or party's banner and sail colors for presentation, and returns the current main party's best eligible shallow-water ships for naval-raid checks.

## Mental Model

`ShipHelper` is a read-and-select utility. The banner and sail-color overloads follow an explicit visual ownership fallback: a hero captain takes priority, then a ship owner or army leader supplies the faction visual, and a missing party or unsupported origin receives a neutral default. The helper returns the existing `Banner` reference from the selected owner; it does not create a new campaign owner or clone that banner.

The raid method is a fresh snapshot of `MobileParty.MainParty.Ships`. It filters on `Ship.ShipHull.CanNavigateShallowWater`, orders the survivors by descending `MainDeckCrewCapacity`, and takes three. Encounter menu code uses that snapshot to check for shallow-draft ships and available crew; it is not a reservation, a crew assignment, or a mission launcher.

## When to use and when not to use

- Use the `IShipOrigin` overloads when a visual consumer has a real ship origin and optional agent captain, such as the SandBox civilian-port ship spawn path.
- Use the `PartyBase` overloads when a port or party visual should follow a party's banner or army leader faction.
- Use `GetOrderedNavalRaidShipsOfPlayerParty` immediately before a menu or encounter decision that needs the current eligible list; sum the returned ships' `MainDeckCrewCapacity` only as the same decision code does.
- Do not treat the returned banner as a disposable copy. For a hero or party owner it is the owner's actual `Banner` reference, so mutating it can change campaign presentation state.
- Do not use the raid list as proof that a naval raid can start. The callers still combine it with healthy troop count and `Campaign.Current.Models.EncounterModel.MinimumNumberOfMenForAttackingVillageViaScene`.
- Do not pass an arbitrary `IShipOrigin` implementation and expect owner metadata to be discovered. The source's owner branch only runs when the value is a `Ship` with a non-null owner.

## Dependencies and fallback graph

```text
hero captain --------------------+
                                  v
Ship / IShipOrigin -> ShipHelper -> Banner or sail colors
        |                         ^
party / army leader -------------+

MobileParty.MainParty.Ships
        -> shallow-water filter
        -> crew-capacity sort
        -> first 3 ships
        -> naval encounter menu checks
```

- Visual values: [`Banner`](../../core-extra/Banner), `Hero.ClanBanner`, `MapFaction.Banner`, `MapFaction.Color`, and `MapFaction.Color2`.
- Ship input: [`Ship`](../../campaign/Ship) implements the [`IShipOrigin`](../../core-extra/IShipOrigin) contract used by visual spawn code.
- Party input: [`PartyBase`](../../campaign/PartyBase), [`MobileParty`](../../campaign/MobileParty), and an optional army leader determine the faction fallback.
- Consumers: [`MenuHelper`](../MenuHelper), `EncounterGameMenuBehavior`, `VillageHostileActionCampaignBehavior`, and SandBox's `CivilianPortShipSpawnMissionLogic`.
- Adjacent workflow: [`PortStateHelper`](../PortStateHelper) opens port UI, but this helper does not open or close that state.

## Public members and exact fallback order

| Member | Source-confirmed behavior |
|---|---|
| `NavalRaidMissionShipLimit` | Public constant with value `3`. The selection method also uses the literal `Take(3)`, so changing this constant alone does not change that method's cap in this source. |
| `GetShipBanner(IShipOrigin shipOrigin, IAgent captain = null)` | A hero `captain.Character` returns `HeroObject.ClanBanner`; otherwise an owned `Ship` returns its army leader party banner when it belongs to an army, or the ship owner's banner; otherwise returns `Banner.CreateOneColoredEmptyBanner(92)`. |
| `GetSailColors(IShipOrigin shipOrigin, IAgent captain = null)` | A hero captain returns the hero map faction's `Color` and `Color2`; otherwise an owned ship uses its army leader faction or owner faction; all other cases return `(4291609515u, 4291609515u)`. |
| `GetShipBanner(PartyBase party = null)` | A null party returns the same one-colored empty banner. A mobile party in an army uses the army leader party banner; every other non-null party uses `party.Banner`. |
| `GetSailColors(PartyBase party = null)` | A null party returns the default pair. A mobile party in an army uses the army leader faction colors; otherwise the source reads `party.Owner.MapFaction.Color` and `Color2`. |
| `GetOrderedNavalRaidShipsOfPlayerParty()` | Reads `MobileParty.MainParty.Ships`, keeps only shallow-water ships, sorts by descending `MainDeckCrewCapacity`, and returns at most three in a new `List<Ship>`. |

The two input families are intentionally not identical. The `IShipOrigin` family can prefer a hero captain, while the party family has no captain argument. The party banner overload reads `party.Banner`, but its non-army sail-color overload reads `party.Owner.MapFaction`; callers should not assume those values come from the same object in every party configuration.

## Real C# examples

Party visuals and raid eligibility can be read from the live main party:

```csharp
using System.Collections.Generic;
using System.Linq;
using Helpers;
using TaleWorlds.CampaignSystem.Naval;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

PartyBase mainParty = PartyBase.MainParty;
Banner partyBanner = ShipHelper.GetShipBanner(mainParty);
(uint sailColor1, uint sailColor2) = ShipHelper.GetSailColors(mainParty);

List<Ship> raidShips = ShipHelper.GetOrderedNavalRaidShipsOfPlayerParty();
int shallowShipCrew = raidShips.Sum(ship => ship.MainDeckCrewCapacity);
```

This uses the same live source that encounter menu code checks. `shallowShipCrew` is only a current capacity snapshot; the caller still needs the encounter model's minimum and the main party's healthy troop count before enabling a hostile action.

For a real ship-origin visual, the SandBox civilian-port mission path obtains a `Ship` and passes it to the same overload family:

```csharp
private void SpawnShip(Ship ship)
{
    IShipOrigin origin = (IShipOrigin)ship;
    (uint sailColor1, uint sailColor2) = ShipHelper.GetSailColors(origin, null);
}
```

In that source call path, `ship` is the method's live `Ship` parameter and the resulting colors are passed into `VisualShipFactory.CreateVisualShip`. A mod should obtain `ship` from its active campaign or mission workflow rather than inventing an origin object.

## Risks and lifecycle boundaries

- The helper returns owner-owned banners. Mutating `partyBanner` or a hero clan banner obtained through this helper can mutate the underlying campaign visual state; use a deliberate `Banner` copy or a supported owner update path when a temporary visual is required.
- Hero priority requires a live hero captain whose `Character` is a hero `CharacterObject`. A non-hero agent does not override the ship or party fallback.
- Army fallback reads `MobileParty.Army.LeaderParty.MapFaction`. A party or army without a valid map faction is outside the helper's defensive checks and can fail in downstream property access.
- The default banner is a one-colored empty banner with seed or color argument `92`; the default sail pair is the exact unsigned pair `(4291609515u, 4291609515u)`. Do not interpret either default as the owner faction's color.
- `GetOrderedNavalRaidShipsOfPlayerParty` assumes the campaign main party and its ship collection are available. Re-query after ship ownership or destruction Actions; do not cache the returned list as persistent state.
- The three selected ships are ordered by capacity, not by owner, hit points, total crew, or visual quality. The helper does not guarantee that a selected ship is fully crewed or that the encounter has enough healthy troops.
- Visual consumers must respect Mission and scene lifetime. `GetSailColors` only returns values; `CivilianPortShipSpawnMissionLogic` remains responsible for creating and later cleaning the visual entity.

## Version note

This page follows the v1.4.5 `ShipHelper.cs`, `IShipOrigin.cs`, and naval encounter call sites. The source declares `NavalRaidMissionShipLimit = 3` while the selection method uses `Take(3)`, and the fallback color constants are unsigned values. Re-check both details when targeting another Bannerlord version.

## Navigation

- [↑ API system index](../)
- [↔ PortStateHelper](../PortStateHelper)
- [↔ MenuHelper](../MenuHelper)
- [Related: Ship](../../campaign/Ship)
- [Related: PartyBase](../../campaign/PartyBase)
- [Related: MobileParty](../../campaign/MobileParty)
- [Related: IShipOrigin](../../core-extra/IShipOrigin)
- [Related: Banner](../../core-extra/Banner)
