---
title: "TrackVisual"
description: "TrackVisual: a public class in SandBox.View, inheriting MapEntityVisual<Track>; 9 exposed members (6 methods, 2 properties, 0 fields). Source: SandBox.View/Map/Visuals/TrackVisual.cs."
---
# TrackVisual

**Namespace:** `SandBox.View.Map.Visuals`
**Module:** `SandBox.View`
**Type:** `public class TrackVisual : MapEntityVisual<Track>`
**File:** `SandBox.View/Map/Visuals/TrackVisual.cs`

## Overview

TrackVisual lives in the SandBox.View module, source file SandBox.View/Map/Visuals/TrackVisual.cs. It is a public class, implementing/inheriting MapEntityVisual<Track>; the inheritance chain is TrackVisual → MapEntityVisual. It exposes 9 public/protected members: 6 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TrackVisual is a top-level type in SandBox.View, namespace differing from (SandBox.View.Map.Visuals) the module directory; inheritance chain TrackVisual → MapEntityVisual. The surface is method-led (methods 6/9, properties 2/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/Visuals/TrackVisual.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TrackVisual` | `public TrackVisual(Track track) : base(track)` | constructor |
| `InteractionPositionForPlayer` | `public override CampaignVec2 InteractionPositionForPlayer` | property |
| `AttachedTo` | `public override MapEntityVisual AttachedTo` | property |
| `GetVisualPosition` | `public override Vec3 GetVisualPosition()` | method |
| `IsVisibleOrFadingOut` | `public override bool IsVisibleOrFadingOut()` | method |
| `OnHover` | `public override void OnHover()` | method |
| `OnMapClick` | `public override bool OnMapClick(bool followModifierUsed)` | method |
| `OnOpenEncyclopedia` | `public override void OnOpenEncyclopedia()` | method |
| `ReleaseResources` | `public override void ReleaseResources()` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MapEntityVisual](../MapEntityVisual)
- [same namespace MapEntityVisual](../MapEntityVisual)
- [same namespace MapEntityVisual](../MapEntityVisual__1)
- [same namespace MapWeatherVisual](../MapWeatherVisual)
- [same namespace MobilePartyVisual](../MobilePartyVisual)
