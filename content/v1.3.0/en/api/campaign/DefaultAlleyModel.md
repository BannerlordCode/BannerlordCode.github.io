---
title: "DefaultAlleyModel"
description: "Auto-generated class reference for DefaultAlleyModel."
---
# DefaultAlleyModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultAlleyModel : AlleyModel`
**Base:** `AlleyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultAlleyModel.cs`

## Overview

`DefaultAlleyModel` is the criminal-underworld feature in full: it sizes player and AI alleys, prices the clan member who runs one, and decides what troops an alley can field. The three sizing constants are a minimum of 5 and maximum of 10 troops for a player-owned alley and four days before a leaderless alley is destroyed (`TaleWorlds.CampaignSystem/GameComponents/DefaultAlleyModel.cs:64`, `:74`, `:54`), while daily income is simply town prosperity divided by 50 (`:399`). XP is a fixed ladder — 200 a day for an assigned clan member, 40 a day for the main hero, 1500 on taking an alley and 6000 for a successful defence (`:91`, `:97`, `:102`, `:108`). The roster logic scales with the owner's clan power: below 100 power an alley is 2–3 thugs, and each 100-point band adds expert and master thugs pulled from `gangster_1`, `gangster_2` and `gangster_3` (`:20`, `:26`, `:32`), with battle missions receiving double the numbers (`:125`).

## Mental Model

Two different consumers, and they take different methods, which is why one of them doubles the roster. `AlleyCampaignBehavior.cs:94` reads `DestroyAllAlleysWhenLeaderIsDead`-adjacent timing for the player's alley and `:130` asks `GetAlleyAttackResponseTimeInDays`, whose formula caps at 10 days and adds 5 to a per-tier strength score divided by 8 (`:306`) — so a large alley responds sooner, but never faster than five days. `GetTroopsOfAIOwnedAlley` returns the base roster while `GetTroopsOfAIOwnedAlley`'s battle counterpart `GetTroopsOfAlleyForBattleMission` copies it and doubles every count (`:125`), meaning an override of only the first leaves battles with the pre-doubling numbers. Two properties are worth flagging for a mod: `GetTroopsToRecruitFromAlleyDependingOnAlleyRandom` returns an empty roster outright for any random value at or above `0.5f` (`:217`), so half the recruitment attempts are no-ops by design, and `GetClanMembersAndAvailabilityDetailsForLeadingAnAlley` enumerates `Clan.PlayerClan` directly (`:196`) rather than consulting a passed-in clan, so it always answers for the player regardless of which alley is asked about.

## Key Properties

| Name | Signature |
|------|-----------|
| `DestroyAlleyAfterDaysWhenLeaderIsDeath` | `public override CampaignTime DestroyAlleyAfterDaysWhenLeaderIsDeath { get; }` |
| `MinimumTroopCountInPlayerOwnedAlley` | `public override int MinimumTroopCountInPlayerOwnedAlley { get; }` |
| `MaximumTroopCountInPlayerOwnedAlley` | `public override int MaximumTroopCountInPlayerOwnedAlley { get; }` |
| `GetDailyCrimeRatingOfAlley` | `public override float GetDailyCrimeRatingOfAlley { get; }` |

## Key Methods

### GetDailyXpGainForAssignedClanMember
`public override float GetDailyXpGainForAssignedClanMember(Hero assignedHero)`

**Purpose:** Reads and returns the daily xp gain for assigned clan member value held by this instance.

```csharp
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetDailyXpGainForAssignedClanMember(assignedHero);
```

### GetDailyXpGainForMainHero
`public override float GetDailyXpGainForMainHero()`

**Purpose:** Reads and returns the daily xp gain for main hero value held by this instance.

```csharp
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetDailyXpGainForMainHero();
```

### GetInitialXpGainForMainHero
`public override float GetInitialXpGainForMainHero()`

**Purpose:** Reads and returns the initial xp gain for main hero value held by this instance.

```csharp
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetInitialXpGainForMainHero();
```

### GetXpGainAfterSuccessfulAlleyDefenseForMainHero
`public override float GetXpGainAfterSuccessfulAlleyDefenseForMainHero()`

**Purpose:** Reads and returns the xp gain after successful alley defense for main hero value held by this instance.

```csharp
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetXpGainAfterSuccessfulAlleyDefenseForMainHero();
```

### GetTroopsOfAIOwnedAlley
`public override TroopRoster GetTroopsOfAIOwnedAlley(Alley alley)`

**Purpose:** Reads and returns the troops of a i owned alley value held by this instance.

```csharp
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetTroopsOfAIOwnedAlley(alley);
```

### GetTroopsOfAlleyForBattleMission
`public override TroopRoster GetTroopsOfAlleyForBattleMission(Alley alley)`

**Purpose:** Reads and returns the troops of alley for battle mission value held by this instance.

```csharp
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetTroopsOfAlleyForBattleMission(alley);
```

### GetClanMembersAndAvailabilityDetailsForLeadingAnAlley
`public override List<ValueTuple<Hero, DefaultAlleyModel.AlleyMemberAvailabilityDetail>> GetClanMembersAndAvailabilityDetailsForLeadingAnAlley(Alley alley)`

**Purpose:** Reads and returns the clan members and availability details for leading an alley value held by this instance.

```csharp
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetClanMembersAndAvailabilityDetailsForLeadingAnAlley(alley);
```

### GetTroopsToRecruitFromAlleyDependingOnAlleyRandom
`public override TroopRoster GetTroopsToRecruitFromAlleyDependingOnAlleyRandom(Alley alley, float random)`

**Purpose:** Reads and returns the troops to recruit from alley depending on alley random value held by this instance.

```csharp
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetTroopsToRecruitFromAlleyDependingOnAlleyRandom(alley, 0);
```

### GetDisabledReasonTextForHero
`public override TextObject GetDisabledReasonTextForHero(Hero hero, Alley alley, DefaultAlleyModel.AlleyMemberAvailabilityDetail detail)`

**Purpose:** Reads and returns the disabled reason text for hero value held by this instance.

```csharp
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetDisabledReasonTextForHero(hero, alley, detail);
```

### GetAlleyAttackResponseTimeInDays
`public override float GetAlleyAttackResponseTimeInDays(TroopRoster troopRoster)`

**Purpose:** Reads and returns the alley attack response time in days value held by this instance.

```csharp
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetAlleyAttackResponseTimeInDays(troopRoster);
```

### GetDailyIncomeOfAlley
`public override int GetDailyIncomeOfAlley(Alley alley)`

**Purpose:** Reads and returns the daily income of alley value held by this instance.

```csharp
DefaultAlleyModel defaultAlleyModel = ...;
var result = defaultAlleyModel.GetDailyIncomeOfAlley(alley);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<AlleyModel>(new DefaultAlleyModel());
}
```

`AlleyModel` is declared as `MBGameModel<AlleyModel>` (`AlleyModel.cs:12`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxManager.cs:342`.

## See Also

- [Area Index](../)