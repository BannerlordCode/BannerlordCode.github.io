---
title: "MobilePartyVisual"
description: "MobilePartyVisual: a public class in SandBox.View, inheriting MapEntityVisual<PartyBase>; 22 exposed members (12 methods, 9 properties, 0 fields). Source: SandBox.View/Map/Visuals/MobilePartyVisual.cs."
---
# MobilePartyVisual

**Namespace:** `SandBox.View.Map.Visuals`
**Module:** `SandBox.View`
**Type:** `public class MobilePartyVisual : MapEntityVisual<PartyBase>`
**File:** `SandBox.View/Map/Visuals/MobilePartyVisual.cs`

## Overview

MobilePartyVisual lives in the SandBox.View module, source file SandBox.View/Map/Visuals/MobilePartyVisual.cs. It is a public class, implementing/inheriting MapEntityVisual<PartyBase>; the inheritance chain is MobilePartyVisual → MapEntityVisual. It exposes 22 public/protected members: 12 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MobilePartyVisual is a top-level type in SandBox.View, namespace differing from (SandBox.View.Map.Visuals) the module directory; inheritance chain MobilePartyVisual → MapEntityVisual. The surface is method-led (methods 12/22, properties 9/22), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/Visuals/MobilePartyVisual.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BearingRotation` | `public override float BearingRotation` | property |
| `AttachedTo` | `public override MapEntityVisual AttachedTo` | property |
| `InteractionPositionForPlayer` | `public override CampaignVec2 InteractionPositionForPlayer` | property |
| `IsMobileEntity` | `public override bool IsMobileEntity` | property |
| `IsMainEntity` | `public override bool IsMainEntity` | property |
| `StrategicEntity` | `public GameEntity StrategicEntity` | property |
| `HumanAgentVisuals` | `public AgentVisuals HumanAgentVisuals` | property |
| `MountAgentVisuals` | `public AgentVisuals MountAgentVisuals` | property |
| `CaravanMountAgentVisuals` | `public AgentVisuals CaravanMountAgentVisuals` | property |
| `MobilePartyVisual` | `public MobilePartyVisual(PartyBase partyBase) : base(partyBase)` | constructor |
| `IsEnemyOf` | `public override bool IsEnemyOf(IFaction faction)` | method |
| `IsInSameFaction` | `public override bool IsInSameFaction(IFaction faction)` | method |
| `IsAllyOf` | `public override bool IsAllyOf(IFaction faction)` | method |
| `OnTrackAction` | `public override void OnTrackAction()` | method |
| `OnMapClick` | `public override bool OnMapClick(bool followModifierUsed)` | method |
| `OnHover` | `public override void OnHover()` | method |
| `GetVisualPosition` | `public override Vec3 GetVisualPosition()` | method |
| `ReleaseResources` | `public override void ReleaseResources()` | method |
| `IsVisibleOrFadingOut` | `public override bool IsVisibleOrFadingOut()` | method |
| `OnOpenEncyclopedia` | `public override void OnOpenEncyclopedia()` | method |
| `GetBannerOfCharacter` | `public static MetaMesh GetBannerOfCharacter(Banner banner, string bannerMeshName)` | method |
| `AddTentEntityForParty` | `public void AddTentEntityForParty(GameEntity strategicEntity, PartyBase party, ref bool clearBannerComponentCache)` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MapEntityVisual](../MapEntityVisual)
- [same namespace MapEntityVisual](../MapEntityVisual)
- [same namespace MapEntityVisual](../MapEntityVisual__1)
- [same namespace MapWeatherVisual](../MapWeatherVisual)
- [same namespace SettlementVisual](../SettlementVisual)
