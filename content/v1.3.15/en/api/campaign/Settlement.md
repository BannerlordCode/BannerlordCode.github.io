---
title: "Settlement"
description: "Fixed locations on the campaign map: towns, castles, villages, hideouts."
---
# Settlement

**Namespace:** TaleWorlds.CampaignSystem.Settlements  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public class Settlement : PartyBase, ILocatable`  
**Base:** `PartyBase`  
**File:** `TaleWorlds.CampaignSystem/Settlements/Settlement.cs`

## Overview

`Settlement` is the unified abstraction for **every fixed location on Bannerlord's campaign map**: towns, castles, villages, hideouts, and war machines. It is a static geographical entity and also a `PartyBase` (garrison, militia, item stash).

Key roles:

- Represents a fixed map location: position, name, component (`Town`/`Village`/`Castle`/`Hideout`), and owner (`Clan`/`Kingdom`).
- Manages garrison, militia, prisoners, granary, and stash.
- Provides siege state, prosperity, security, loyalty, and other metrics (mostly on the matching `SettlementComponent`).
- Serves as the target for `MobileParty` movement, trade, and quests.

## Mental Model

Think of `Settlement` as the **gateway object for a location**:

- First get the settlement, then decide what it is: `settlement.IsTown`, `settlement.IsCastle`, `settlement.IsVillage`, `settlement.IsHideout`.
- Concrete data lives in `SettlementComponent`: `settlement.SettlementComponent` can be cast to `Town`, `Village`, `Castle`, or `Hideout`.
- `Settlement.Party` is the garrison, `MilitiaPartyComponent` is the militia.
- Player's current location: `Settlement.CurrentSettlement`.

## How to Obtain a Settlement

```csharp
Settlement current = Settlement.CurrentSettlement;

Settlement town = Settlement.Find("town_A7"); // example Khuzait town

Settlement richTown = Settlement.FindFirst(s => s.IsTown && s.Town.Prosperity > 6000f);

foreach (Settlement s in Settlement.All)
{
    if (s.OwnerClan == Clan.PlayerClan)
    {
        // player-owned settlement
    }
}
```

## Core Properties

| Property | Description |
|----------|-------------|
| `All` | All settlements. |
| `CurrentSettlement` | Settlement the player is currently in. |
| `SettlementComponent` | Underlying component (`Town`/`Castle`/`Village`/`Hideout`). |
| `OwnerClan` / `MapFaction` | Owning clan / faction. |
| `Party` | Garrison `PartyBase`. |
| `GarrisonWagePaymentLimit` | Garrison wage cap. |
| `GatePosition` / `PortPosition` | Gate / port positions. |
| `HasPort` | Has a port. |
| `IsUnderSiege` / `CurrentSiegeState` | Siege state. |
| `SiegeEvent` | Current siege event. |
| `Stash` | Player stash in this settlement (if any). |
| `Alleys` | List of alleys. |
| `IsTown` / `IsCastle` / `IsVillage` / `IsHideout` | Settlement-type checks. |

## Key Methods

### `public static Settlement Find(string idString)`
Find a settlement by string ID.

```csharp
Settlement khuzaitTown = Settlement.Find("town_A7");
```

### `public static Settlement FindFirst(Func<Settlement, bool> predicate)`
Find the first settlement matching a condition.

```csharp
Settlement firstPlayerSettlement = Settlement.FindFirst(s => s.OwnerClan == Clan.PlayerClan);
```

### `public void AddGarrisonParty()`
Spawn or reinforce the garrison for this settlement.

```csharp
mySettlement.AddGarrisonParty();
```

### `public float GetValue(Hero hero = null, bool countAlsoBoundedSettlements = true)`
Compute the settlement's value to a hero or faction.

```csharp
float value = enemyTown.GetValue(Hero.MainHero);
```

### `public bool IsSettlementBusy(object asker)` / `IsSettlementBusy(object asker, int limitingPriority)`
Check whether the settlement is currently busy with another task or scene.

```csharp
bool busy = town.IsSettlementBusy(this);
```

### `public void SetNextSiegeState()` / `public void ResetSiegeState()`
Advance / reset the siege phase.

```csharp
if (town.IsUnderSiege) town.SetNextSiegeState();
```

### `public void SetSiegeStrategy(SiegeStrategy strategy)`
Set the siege strategy.

```csharp
town.SetSiegeStrategy(DefaultSiegeStrategies.PrepareCrossbows);
```

### `public static LocatableSearchData<Settlement> StartFindingLocatablesAroundPosition(Vec2 position, float radius)`
Query settlements within a radius.

```csharp
var data = Settlement.StartFindingLocatablesAroundPosition(center, 50f);
Settlement nearby = Settlement.FindNextLocatable(ref data);
```

### `public void OnPartyInteraction(MobileParty engagingParty)`
Triggered when a party interacts with this settlement.

```csharp
public override void OnPartyInteraction(MobileParty engagingParty)
{
    base.OnPartyInteraction(engagingParty);
    if (engagingParty == MobileParty.MainParty)
    {
        InformationManager.DisplayMessage(new InformationMessage("Party arrived at settlement."));
    }
}
```

## Typical Usage Examples

### Example 1: Boost prosperity in all player-owned towns

```csharp
foreach (Settlement s in Settlement.All)
{
    if (s.IsTown && s.OwnerClan == Clan.PlayerClan)
    {
        s.Town.Prosperity += 1000f;
    }
}
```

### Example 2: Teleport the player party to a town gate

```csharp
Settlement target = Settlement.Find("town_A7");
MobileParty.MainParty.SetMoveGoToSettlement(target, NavigationType.Default, false);
MobileParty.MainParty.Position2D = target.GatePosition;
```

### Example 3: Check whether a village belongs to an enemy kingdom

```csharp
bool IsEnemyVillage(Settlement settlement) =>
    settlement.IsVillage && settlement.MapFaction.IsAtWarWith(Hero.MainHero.MapFaction);
```

## Cross-Version Notes

- v1.3.0 / v1.3.15 / v1.4.5 `Settlement` core lookup and properties are stable.
- v1.4.5 adds more naval/port properties (`HasPort`, `PortPosition`).
- Economy/loyalty field names may vary slightly across versions.

## See Also

- [Town](../../campaign-ext/Town/) / [Village](../Village/) / [Castle](../../campaign-ext/CastleEncounter/) — concrete settlement components
- [MobileParty](../MobileParty/) — moving parties that enter settlements
- [Clan](../Clan/) — settlement owner
- [SiegeEvent](../../campaign-ext/SiegeEvent/) — siege logic
- [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/) — listen for settlement events
