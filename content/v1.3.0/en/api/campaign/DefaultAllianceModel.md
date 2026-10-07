---
title: "DefaultAllianceModel"
description: "Auto-generated class reference for DefaultAllianceModel."
---
# DefaultAllianceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultAllianceModel : AllianceModel`
**Base:** `AllianceModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultAllianceModel.cs`

## Overview

`DefaultAllianceModel` prices the kingdom-to-kingdom diplomatic layer. Four durations are fixed: an alliance may last 84 days, war participation 42 days, an alliance offer stands for 24 hours, and a kingdom may hold at most 2 alliances (`TaleWorlds.CampaignSystem/GameComponents/DefaultAllianceModel.cs:22`, `:32`, `:52`, `:42`). Proposing either an alliance or a call to war costs 200 influence (`:136`, `:177`). What is *not* a constant is the call-to-war price: `GetCallToWarCost` computes a cost from the calling kingdom and a cost from the called kingdom separately, then branches on whether the player's clan is in either kingdom — a player-led caller pays only the called side's cost, a player-led callee pays double the called cost when the caller's own cost exceeds it, and a player in neither kingdom pays the average (`:59`–`:71`). AI scoring starts from a neutral 50 and is scaled by how much of the cost each side bears (`:142`, `:161`).

## Mental Model

These are two separate markets sharing one wallet, which is why the call-to-war cost is a method rather than a property. `AllianceCampaignBehavior.cs:91` and `:149` each ask `GetCallToWarCost` once for the proposal being built, and the same model is then re-read by `GetScoreOfCallingToWar` and `GetScoreOfJoiningWar` (`:145`, `:164`) to decide whether the AI wants in — so an override that changes the cost changes both what the player pays and what the AI thinks the deal is worth. The consequence of that coupling is that a flat cost override produces an AI that immediately refuses everything, because the score is computed as a ratio of the two side costs (`:146`, `:165`). Two numerical details are load-bearing. `GetScoreOfStartingAlliance` compares wars the declaring kingdom is in against wars both sides share, awarding up to 50 points for shared enemies and up to −25 for exclusive ones (`:85`, `:86`) — it only computes anything when both sides are at war with someone. And `GetScoreOfCallingToWar` returns a hard `-100f` when the caller's cost is negative or its call-to-war wallet is deeply in debt (`:147`, `:149`), which is a refusal rather than a low score, and `GetScoreOfJoiningWar` returns `100f` outright when the cost ratio is exactly 1 (`:166`, `:168`).

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxDurationOfAlliance` | `public override CampaignTime MaxDurationOfAlliance { get; }` |
| `MaxDurationOfWarParticipation` | `public override CampaignTime MaxDurationOfWarParticipation { get; }` |
| `MaxNumberOfAlliances` | `public override int MaxNumberOfAlliances { get; }` |
| `DurationForOffers` | `public override CampaignTime DurationForOffers { get; }` |

## Key Methods

### GetCallToWarCost
`public override int GetCallToWarCost(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)`

**Purpose:** Reads and returns the call to war cost value held by this instance.

```csharp
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetCallToWarCost(callingKingdom, calledKingdom, kingdomToCallToWarAgainst);
```

### GetScoreOfStartingAlliance
`public override ExplainedNumber GetScoreOfStartingAlliance(Kingdom kingdomDeclaresAlliance, Kingdom kingdomDeclaredAlliance, IFaction evaluatingFaction, bool includeDescription = false)`

**Purpose:** Reads and returns the score of starting alliance value held by this instance.

```csharp
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetScoreOfStartingAlliance(kingdomDeclaresAlliance, kingdomDeclaredAlliance, evaluatingFaction, false);
```

### GetInfluenceCostOfProposingStartingAlliance
`public override int GetInfluenceCostOfProposingStartingAlliance(Clan proposingClan)`

**Purpose:** Reads and returns the influence cost of proposing starting alliance value held by this instance.

```csharp
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetInfluenceCostOfProposingStartingAlliance(proposingClan);
```

### GetScoreOfCallingToWar
`public override float GetScoreOfCallingToWar(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, IFaction evaluatingFaction, out TextObject reason)`

**Purpose:** Reads and returns the score of calling to war value held by this instance.

```csharp
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetScoreOfCallingToWar(callingKingdom, calledKingdom, kingdomToCallToWarAgainst, evaluatingFaction, reason);
```

### GetScoreOfJoiningWar
`public override float GetScoreOfJoiningWar(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, IFaction evaluatingFaction, out TextObject reason)`

**Purpose:** Reads and returns the score of joining war value held by this instance.

```csharp
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetScoreOfJoiningWar(callingKingdom, calledKingdom, kingdomToCallToWarAgainst, evaluatingFaction, reason);
```

### GetInfluenceCostOfCallingToWar
`public override int GetInfluenceCostOfCallingToWar(Clan proposingClan)`

**Purpose:** Reads and returns the influence cost of calling to war value held by this instance.

```csharp
DefaultAllianceModel defaultAllianceModel = ...;
var result = defaultAllianceModel.GetInfluenceCostOfCallingToWar(proposingClan);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<AllianceModel>(new DefaultAllianceModel());
}
```

`AllianceModel` is declared as `MBGameModel<AllianceModel>` (`AllianceModel.cs:8`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxManager.cs:353`.

## See Also

- [Area Index](../)