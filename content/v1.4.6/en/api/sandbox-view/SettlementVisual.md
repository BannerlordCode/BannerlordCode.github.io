---
title: "SettlementVisual"
description: "SettlementVisual: a public class in SandBox.View, inheriting MapEntityVisual<PartyBase>; 20 exposed members (16 methods, 3 properties, 0 fields). Source: SandBox.View/Map/Visuals/SettlementVisual.cs."
---
# SettlementVisual

**Namespace:** `SandBox.View.Map.Visuals`
**Module:** `SandBox.View`
**Type:** `public class SettlementVisual : MapEntityVisual<PartyBase>`
**File:** `SandBox.View/Map/Visuals/SettlementVisual.cs`

## Overview

SettlementVisual lives in the SandBox.View module, source file SandBox.View/Map/Visuals/SettlementVisual.cs. It is a public class, implementing/inheriting MapEntityVisual<PartyBase>; the inheritance chain is SettlementVisual → MapEntityVisual. It exposes 20 public/protected members: 16 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementVisual is a top-level type in SandBox.View, namespace differing from (SandBox.View.Map.Visuals) the module directory; inheritance chain SettlementVisual → MapEntityVisual. The surface is method-led (methods 16/20, properties 3/20), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/Visuals/SettlementVisual.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AttachedTo` | `public override MapEntityVisual AttachedTo` | property |
| `InteractionPositionForPlayer` | `public override CampaignVec2 InteractionPositionForPlayer` | property |
| `StrategicEntity` | `public GameEntity StrategicEntity` | property |
| `SettlementVisual` | `public SettlementVisual(PartyBase entity) : base(entity)` | constructor |
| `IsEnemyOf` | `public override bool IsEnemyOf(IFaction faction)` | method |
| `IsInSameFaction` | `public override bool IsInSameFaction(IFaction faction)` | method |
| `IsAllyOf` | `public override bool IsAllyOf(IFaction faction)` | method |
| `GetVisualPosition` | `public override Vec3 GetVisualPosition()` | method |
| `IsVisibleOrFadingOut` | `public override bool IsVisibleOrFadingOut()` | method |
| `OnHover` | `public override void OnHover()` | method |
| `OnTrackAction` | `public override void OnTrackAction()` | method |
| `OnMapClick` | `public override bool OnMapClick(bool followModifierUsed)` | method |
| `OnOpenEncyclopedia` | `public override void OnOpenEncyclopedia()` | method |
| `ReleaseResources` | `public override void ReleaseResources()` | method |
| `GetBannerPositionForParty` | `public Vec3 GetBannerPositionForParty(MobileParty mobileParty)` | method |
| `MatrixFrame[]GetAttackerTowerSiegeEngineFrames` | `public MatrixFrame[]GetAttackerTowerSiegeEngineFrames()` | method |
| `MatrixFrame[]GetAttackerBatteringRamSiegeEngineFrames` | `public MatrixFrame[]GetAttackerBatteringRamSiegeEngineFrames()` | method |
| `MatrixFrame[]GetAttackerRangedSiegeEngineFrames` | `public MatrixFrame[]GetAttackerRangedSiegeEngineFrames()` | method |
| `MatrixFrame[]GetDefenderRangedSiegeEngineFrames` | `public MatrixFrame[]GetDefenderRangedSiegeEngineFrames()` | method |
| `MatrixFrame[]GetBreachableWallFrames` | `public MatrixFrame[]GetBreachableWallFrames()` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MapEntityVisual](../MapEntityVisual)
- [same namespace MapEntityVisual](../MapEntityVisual)
- [same namespace MapEntityVisual](../MapEntityVisual__1)
- [same namespace MapWeatherVisual](../MapWeatherVisual)
- [same namespace MobilePartyVisual](../MobilePartyVisual)
