---
title: "Team"
description: "Auto-generated class reference for Team."
---
# Team

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Team : IMissionTeam `
**Base:** IMissionTeam
**Source:** TaleWorlds.MountAndBlade/Team.cs

## Overview

Auto-generated stub for `Team`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### SetCustomOrderController
`public void SetCustomOrderController(OrderController customMasterOrderController,OrderController customPlayerOrderController)`

### UpdateCachedEnemyDataForFleeing
`public void UpdateCachedEnemyDataForFleeing()`

### Reset
`public void Reset()`

### Clear
`public void Clear()`

### DoesFirstFormationClassContainSecond
`public static bool DoesFirstFormationClassContainSecond(FormationClass f1,FormationClass f2)`

### GetFormationFormationClass
`public static FormationClass GetFormationFormationClass(Formation f)`

### GetPlayerTeamFormationClass
`public static FormationClass GetPlayerTeamFormationClass(Agent mainAgent)`

### AssignPlayerAsSergeantOfFormation
`public void AssignPlayerAsSergeantOfFormation(MissionPeer peer,FormationClass formationClass)`

### AddTacticOption
`public void AddTacticOption(TacticComponent tacticOption)`

### RemoveTacticOption
`public void RemoveTacticOption(Type tacticType)`

### ClearTacticOptions
`public void ClearTacticOptions()`

### ResetTactic
`public void ResetTactic()`

### AddTeamAI
`public void AddTeamAI(TeamAIComponent teamAI,bool forceNotAIControlled = false)`

### DelegateCommandToAI
`public void DelegateCommandToAI()`

### RearrangeFormationsAccordingToFilter
`public void RearrangeFormationsAccordingToFilter([TupleElementNames(new string[] { "formation","troopCount","troopFilter","excludedAgents" })] List<ValueTuple<Formation,int,TroopTraitsMask,List<Agent>>> MassTransferData)`

### Tick
`public void Tick(float dt)`

### GetFormation
`public Formation GetFormation(FormationClass formationIndex)`

### SetIsEnemyOf
`public void SetIsEnemyOf(Team otherTeam,bool isEnemyOf)`

### IsEnemyOf
`public bool IsEnemyOf(Team otherTeam)`

### IsFriendOf
`public bool IsFriendOf(Team otherTeam)`

### AddAgentToTeam
`public void AddAgentToTeam(Agent unit)`

### RemoveAgentFromTeam
`public void RemoveAgentFromTeam(Agent unit)`

### DeactivateAgent
`public void DeactivateAgent(Agent agent)`

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

### ToString
`public override string ToString()`

### OnMissionEnded
`public void OnMissionEnded()`

### TriggerOnFormationsChanged
`public void TriggerOnFormationsChanged(Formation formation)`

### TriggerOnFormationsChangedInDeployment
`public void TriggerOnFormationsChangedInDeployment()`

### GetOrderControllerOf
`public OrderController GetOrderControllerOf(Agent agent)`

### SetPlayerRole
`public void SetPlayerRole(bool isPlayerGeneral,bool isPlayerSergeant)`

### HasAnyEnemyTeamsWithAgents
`public bool HasAnyEnemyTeamsWithAgents(bool ignoreMountedAgents)`

### HasAnyFormationsIncludingSpecialThatIsNotEmpty
`public bool HasAnyFormationsIncludingSpecialThatIsNotEmpty()`

### GetFormationCount
`public int GetFormationCount()`

### GetAIControlledFormationCount
`public int GetAIControlledFormationCount()`

### GetAveragePositionOfEnemies
`public Vec2 GetAveragePositionOfEnemies()`

### GetAveragePosition
`public Vec2 GetAveragePosition()`

### GetMedianPosition
`public WorldPosition GetMedianPosition(Vec2 averagePosition)`

### GetWeightedAverageOfEnemies
`public Vec2 GetWeightedAverageOfEnemies(Vec2 basePoint)`

### DisableDetachmentTicking
`public void DisableDetachmentTicking()`

## See Also

- [Section index](../)
