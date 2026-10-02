---
title: "HighlightsController"
description: "Auto-generated class reference for HighlightsController."
---
# HighlightsController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HighlightsController : MissionLogic `
**Base:** MissionLogic
**Source:** TaleWorlds.MountAndBlade/HighlightsController.cs

## Overview

Auto-generated stub for `HighlightsController`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### RemoveHighlights
`public static void RemoveHighlights()`

### GetHighlightTypeWithId
`public HighlightsController.HighlightType GetHighlightTypeWithId(string highlightId)`

### AfterStart
`public override void AfterStart()`

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow killingBlow)`

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent,Agent affectorAgent,WeaponComponentData attackerWeapon,bool isBlocked,bool isSiegeEngineHit,in Blow blow,in AttackCollisionData collisionData,float damagedHp,float hitDistance,float shotDifficulty)`

### OnMissionTick
`public override void OnMissionTick(float dt)`

### OnEndMission
`protected override void OnEndMission()`

### AddHighlightType
`public static void AddHighlightType(HighlightsController.HighlightType highlightType)`

### SaveHighlight
`public void SaveHighlight(HighlightsController.Highlight highlight)`

### CanSaveHighlight
`public bool CanSaveHighlight(HighlightsController.HighlightType highlightType,Vec3 position)`

### GetPlayerIsLookingAtPositionScore
`public float GetPlayerIsLookingAtPositionScore(Vec3 position)`

### CanSeePosition
`public bool CanSeePosition(Vec3 position)`

### ShowSummary
`public void ShowSummary()`

## See Also

- [Section index](../)
