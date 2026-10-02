---
title: "MapEntityVisual"
description: "MapEntityVisual: a public class in SandBox.View; 18 exposed members (11 methods, 7 properties, 0 fields). Source: SandBox.View/Map/Visuals/MapEntityVisual.cs."
---
# MapEntityVisual

**Namespace:** `SandBox.View.Map.Visuals`
**Module:** `SandBox.View`
**Type:** `public abstract class MapEntityVisual`
**File:** `SandBox.View/Map/Visuals/MapEntityVisual.cs`

## Overview

MapEntityVisual lives in the SandBox.View module, source file SandBox.View/Map/Visuals/MapEntityVisual.cs. It is a public class (abstract); the inheritance chain is MapEntityVisual. It exposes 18 public/protected members: 11 methods, 7 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapEntityVisual is a top-level type in SandBox.View, namespace differing from (SandBox.View.Map.Visuals) the module directory; inheritance chain MapEntityVisual. The surface is method-led (methods 11/18, properties 7/18), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/Visuals/MapEntityVisual.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapScreen` | `public MapScreen MapScreen` | property |
| `InteractionPositionForPlayer` | `public abstract CampaignVec2 InteractionPositionForPlayer` | property |
| `AttachedTo` | `public abstract MapEntityVisual AttachedTo` | property |
| `IsMobileEntity` | `public virtual bool IsMobileEntity` | property |
| `CircleLocalFrame` | `public virtual MatrixFrame CircleLocalFrame` | property |
| `IsMainEntity` | `public virtual bool IsMainEntity` | property |
| `BearingRotation` | `public virtual float BearingRotation` | property |
| `OnMapClick` | `public abstract bool OnMapClick(bool followModifierUsed);` | method |
| `OnHover` | `public abstract void OnHover();` | method |
| `OnOpenEncyclopedia` | `public abstract void OnOpenEncyclopedia();` | method |
| `IsVisibleOrFadingOut` | `public abstract bool IsVisibleOrFadingOut();` | method |
| `GetVisualPosition` | `public abstract Vec3 GetVisualPosition();` | method |
| `ReleaseResources` | `public virtual void ReleaseResources()` | method |
| `OnHoverEnd` | `public virtual void OnHoverEnd()` | method |
| `OnTrackAction` | `public virtual void OnTrackAction()` | method |
| `IsEnemyOf` | `public virtual bool IsEnemyOf(IFaction faction)` | method |
| `IsAllyOf` | `public virtual bool IsAllyOf(IFaction faction)` | method |
| `IsInSameFaction` | `public virtual bool IsInSameFaction(IFaction faction)` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapEntityVisual](../MapEntityVisual__1)
- [same namespace MapWeatherVisual](../MapWeatherVisual)
- [same namespace MobilePartyVisual](../MobilePartyVisual)
- [same namespace SettlementVisual](../SettlementVisual)
