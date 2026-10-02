---
title: "ArrangementOrder"
description: "Auto-generated class reference for ArrangementOrder."
---
# ArrangementOrder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct ArrangementOrder `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/ArrangementOrder.cs

## Overview

Auto-generated stub for `ArrangementOrder`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetUnitSpacingOf
`public static int GetUnitSpacingOf(ArrangementOrder.ArrangementOrderEnum a)`

### GetUnitLooseness
`public static bool GetUnitLooseness(ArrangementOrder.ArrangementOrderEnum a)`

### GetMovementSpeedRestriction
`public void GetMovementSpeedRestriction(out float? runRestriction,out float? walkRestriction)`

### GetArrangement
`public IFormationArrangement GetArrangement(Formation formation)`

### OnApply
`public unsafe void OnApply(Formation formation)`

### SoftUpdate
`public void SoftUpdate(Formation formation)`

### GetShieldDirectionOfUnit
`public static Agent.UsageDirection GetShieldDirectionOfUnit(Formation formation,Agent unit,ArrangementOrder.ArrangementOrderEnum orderEnum)`

### GetUnitSpacing
`public int GetUnitSpacing()`

### Rearrange
`public void Rearrange(Formation formation)`

### RearrangeAux
`public void RearrangeAux(Formation formation,bool isDirectly)`

### TransposeLineFormation
`public unsafe static void TransposeLineFormation(Formation formation)`

### OnCancel
`public void OnCancel(Formation formation)`

### TickOccasionally
`public void TickOccasionally(Formation formation)`

### GetNativeEnum
`public ArrangementOrder.ArrangementOrderEnum GetNativeEnum()`

### Equals
`public override bool Equals(object obj)`

### GetHashCode
`public override int GetHashCode()`

### OnOrderPositionChanged
`public void OnOrderPositionChanged(Formation formation,Vec2 previousOrderPosition)`

### GetArrangementOrderDefensiveness
`public static int GetArrangementOrderDefensiveness(ArrangementOrder.ArrangementOrderEnum orderEnum)`

### GetArrangementOrderDefensivenessChange
`public static int GetArrangementOrderDefensivenessChange(ArrangementOrder.ArrangementOrderEnum previousOrderEnum,ArrangementOrder.ArrangementOrderEnum nextOrderEnum)`

### CalculateFormationDirectionEnforcingFactorForRank
`public float CalculateFormationDirectionEnforcingFactorForRank(int formationRankIndex,int rankCount)`

## See Also

- [Section index](../)
