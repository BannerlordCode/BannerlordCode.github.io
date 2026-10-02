---
title: "StonePile"
description: "Auto-generated class reference for StonePile."
---
# StonePile

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StonePile : UsableMachine,IDetachment `
**Base:** UsableMachine, IDetachment
**Source:** TaleWorlds.MountAndBlade/StonePile.cs

## Overview

Auto-generated stub for `StonePile`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### ConsumeAmmo
`protected void ConsumeAmmo()`

### SetAmmo
`public void SetAmmo(int ammoLeft)`

### CheckAmmo
`protected virtual void CheckAmmo()`

### OnInit
`protected internal override void OnInit()`

### OnMissionReset
`protected internal override void OnMissionReset()`

### AfterMissionStart
`public override void AfterMissionStart()`

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

### IsInRangeToCheckAlternativePoints
`public override bool IsInRangeToCheckAlternativePoints(Agent agent)`

### GetBestPointAlternativeTo
`public override StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint,Agent agent)`

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

### OnTick
`protected internal override void OnTick(float dt)`

### WriteToNetwork
`public override void WriteToNetwork()`

### GetSuitableStandingPointFor
`protected override StandingPoint GetSuitableStandingPointFor(BattleSideEnum side,Agent agent = null,List<Agent> agents = null,List<ValueTuple<Agent,float>> agentValuePairs = null)`

### GetDetachmentWeightAux
`protected override float GetDetachmentWeightAux(BattleSideEnum side)`

### UpdateAmmoMesh
`protected virtual void UpdateAmmoMesh()`

## See Also

- [Section index](../)
