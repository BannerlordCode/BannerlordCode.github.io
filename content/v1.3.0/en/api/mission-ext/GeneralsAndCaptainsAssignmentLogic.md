---
title: "GeneralsAndCaptainsAssignmentLogic"
description: "Auto-generated class reference for GeneralsAndCaptainsAssignmentLogic."
---
# GeneralsAndCaptainsAssignmentLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GeneralsAndCaptainsAssignmentLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/GeneralsAndCaptainsAssignmentLogic.cs`

## Overview

`GeneralsAndCaptainsAssignmentLogic` decides who commands each side once deployment is done. It is a `MissionLogic` (`GeneralsAndCaptainsAssignmentLogic.cs:14`) whose constructor takes the four general display names — attacker, defender, and the two ally variants, the latter two defaulting to `null` — plus a `createBodyguard` flag (`GeneralsAndCaptainsAssignmentLogic.cs:17`). Those names are the *only* input: they are matched by name against agents in the mission, not by id.

`AfterStart` resolves one dependency, `BannerBearerLogic` (`GeneralsAndCaptainsAssignmentLogic.cs:30`), which is the only mission behaviour this class reaches for.

Two hooks do the work. `OnTeamDeployed(Team)` (`GeneralsAndCaptainsAssignmentLogic.cs:34`) runs per side: it picks the general via `SetGeneralAgentOfTeam`, and then — for the player team only when the order of battle is unavailable — creates a generals formation and assigns captains. `OnDeploymentFinished` (`GeneralsAndCaptainsAssignmentLogic.cs:61`) is the catch-up for the player team, because when the order-of-battle screen is in play the player has already deployed by the time `OnTeamDeployed` fired.

The two decision helpers are where the rules live. `CanTeamHaveGeneralsFormation` returns false for any naval battle, and otherwise requires a general agent that is either the main agent or a team of at least 50 (`GeneralsAndCaptainsAssignmentLogic.cs:116`, `GeneralsAndCaptainsAssignmentLogic.cs:121`). `AssignBestCaptainsForTeam` (`GeneralsAndCaptainsAssignmentLogic.cs:125`) filters to heroes, sorts them by priority, and works over non-empty formations whose index is below the `numRegularFormations = 8` constant (`GeneralsAndCaptainsAssignmentLogic.cs:131`, `GeneralsAndCaptainsAssignmentLogic.cs:132`).

## Mental Model

The 50-member threshold is the real gate on a generals formation, and the main agent is the exception to it. `CanTeamHaveGeneralsFormation` requires `generalAgent == base.Mission.MainAgent || team.QuerySystem.MemberCount >= 50` (`GeneralsAndCaptainsAssignmentLogic.cs:121`) — so the player's own side always qualifies while an AI side needs 50. A small skirmish therefore gives the player a generals formation and the enemy none, which looks like an asymmetry but is the intended rule.

Naval battles are excluded everywhere, and the checks are repeated rather than centralised. `CanTeamHaveGeneralsFormation` bails on `IsNavalBattle` (`GeneralsAndCaptainsAssignmentLogic.cs:116`); `SetGeneralAgentOfTeam` still assigns a general but skips `SetCanLeadFormationsRemotely` (`GeneralsAndCaptainsAssignmentLogic.cs:204`); `OnDeploymentFinished` skips the remote-lead line for naval too (`GeneralsAndCaptainsAssignmentLogic.cs:70`); and the bodyguard is skipped when the general *is* the main agent, not on naval grounds (`GeneralsAndCaptainsAssignmentLogic.cs:225`).

The general is chosen by display name when the name matches exactly once, and by power otherwise. `SetGeneralAgentOfTeam` builds a four-way ternary over attacker / defender / attacker-ally / defender-ally to get the right name (`GeneralsAndCaptainsAssignmentLogic.cs:190`), then only accepts the match if **exactly one** unit's character name equals it (`GeneralsAndCaptainsAssignmentLogic.cs:191`) — a duplicate name silently falls through. The fallback picks the highest `CharacterPowerCached` hero that is not the main agent (`GeneralsAndCaptainsAssignmentLogic.cs:199`).

`OnTeamDeployed` is not symmetric between sides, and the asymmetry is the order-of-battle gate. The player's branch runs only `if (!MissionGameModels.Current.BattleInitializationModel.CanPlayerSideDeployWithOrderOfBattle())` (`GeneralsAndCaptainsAssignmentLogic.cs:39`) — with the order of battle available, the player handles their own generals and this method does nothing for them. The enemy branch carries no such condition — it runs unconditionally (`GeneralsAndCaptainsAssignmentLogic.cs:52`). That is why `OnDeploymentFinished` exists: it catches the player team when the order of battle meant they were already deployed (`GeneralsAndCaptainsAssignmentLogic.cs:64`).

`_isPlayerTeamGeneralFormationSet` is the latch that prevents doing it twice (`GeneralsAndCaptainsAssignmentLogic.cs:24`). It is set only on the player path, and the enemy path has no equivalent guard — so a double `OnTeamDeployed` for the enemy side would re-create its generals formation.

## How to use

**Getting one.** Construct it with the four names and add it as a mission behaviour before the mission starts. The names are `TextObject`s compared with `Equals` against `Character.GetName()`, so they must match the characters' names exactly.

**Typical use** — naming the generals for a custom battle:

```csharp
using TaleWorlds.Core;
using TaleWorlds.Localization;
using TaleWorlds.MountAndBlade;

public static class MyBattleCommanders
{
    public static void Install(Mission mission)
    {
        // Only the attacker/defender names are required; ally names default null.
        mission.AddMissionBehavior(new GeneralsAndCaptainsAssignmentLogic(
            GameTexts.FindText("my_mod_attacker_general", null),
            GameTexts.FindText("my_mod_defender_general", null),
            attackerAllyGeneralName: null,
            defenderAllyGeneralName: null,
            createBodyguard: true));
    }
}
```

`GeneralsAndCaptainsAssignmentLogic(TextObject, TextObject, TextObject, TextObject, bool)` is the real constructor (`GeneralsAndCaptainsAssignmentLogic.cs:17`); the flag is stored at `GeneralsAndCaptainsAssignmentLogic.cs:23` and consulted at `GeneralsAndCaptainsAssignmentLogic.cs:225`.

**Most common mistake:** expecting a name that matches two agents to pick one of them.

```csharp
new GeneralsAndCaptainsAssignmentLogic(name, name);   // name shared by two heroes
```

The lookup requires the name to match **exactly one** unit: it counts matches with `.Count(...) == 1` before accepting (`GeneralsAndCaptainsAssignmentLogic.cs:191`), and otherwise discards the name entirely and falls back to the highest-power hero (`GeneralsAndCaptainsAssignmentLogic.cs:199`). So with a duplicated name your carefully chosen general is ignored and a different agent commands the side, with no warning — the constructor accepted the argument and `SetGeneralAgentOfTeam` completed normally. Make each name unique among that team's heroes, and check `team.GeneralAgent` after deployment if the choice matters to you.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of GeneralsAndCaptainsAssignmentLogic from the subsystem API first
GeneralsAndCaptainsAssignmentLogic generalsAndCaptainsAssignmentLogic = ...;
generalsAndCaptainsAssignmentLogic.AfterStart();
```

### OnTeamDeployed
`public override void OnTeamDeployed(Team team)`

**Purpose:** Invoked when the team deployed event is raised.

```csharp
// Obtain an instance of GeneralsAndCaptainsAssignmentLogic from the subsystem API first
GeneralsAndCaptainsAssignmentLogic generalsAndCaptainsAssignmentLogic = ...;
generalsAndCaptainsAssignmentLogic.OnTeamDeployed(team);
```

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of GeneralsAndCaptainsAssignmentLogic from the subsystem API first
GeneralsAndCaptainsAssignmentLogic generalsAndCaptainsAssignmentLogic = ...;
generalsAndCaptainsAssignmentLogic.OnDeploymentFinished();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<GeneralsAndCaptainsAssignmentLogic>();
```

## See Also

- [Area Index](../)
- [BattleInitializationModel — the cached gate that decides the player path](../BattleInitializationModel)
- [BannerBearerLogic — the behaviour this class resolves in `AfterStart`](../BannerBearerLogic)
- [中文页面](../../../../zh/api/mission-ext/GeneralsAndCaptainsAssignmentLogic)