---
title: "MapWeatherVisual"
description: "MapWeatherVisual: a public class in SandBox.View, inheriting MapEntityVisual<WeatherNode>; 13 exposed members (7 methods, 5 properties, 0 fields). Source: SandBox.View/Map/Visuals/MapWeatherVisual.cs."
---
# MapWeatherVisual

**Namespace:** `SandBox.View.Map.Visuals`
**Module:** `SandBox.View`
**Type:** `public class MapWeatherVisual : MapEntityVisual<WeatherNode>`
**File:** `SandBox.View/Map/Visuals/MapWeatherVisual.cs`

## Overview

MapWeatherVisual lives in the SandBox.View module, source file SandBox.View/Map/Visuals/MapWeatherVisual.cs. It is a public class, implementing/inheriting MapEntityVisual<WeatherNode>; the inheritance chain is MapWeatherVisual → MapEntityVisual. It exposes 13 public/protected members: 7 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapWeatherVisual is a top-level type in SandBox.View, namespace differing from (SandBox.View.Map.Visuals) the module directory; inheritance chain MapWeatherVisual → MapEntityVisual. The surface is method-led (methods 7/13, properties 5/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/Visuals/MapWeatherVisual.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Position` | `public Vec2 Position` | property |
| `PrefabSpawnOffset` | `public Vec2 PrefabSpawnOffset` | property |
| `MaskPixelIndex` | `public int MaskPixelIndex` | property |
| `InteractionPositionForPlayer` | `public override CampaignVec2 InteractionPositionForPlayer` | property |
| `AttachedTo` | `public override MapEntityVisual AttachedTo` | property |
| `ToString` | `public override string ToString()` | method |
| `MapWeatherVisual` | `public MapWeatherVisual(WeatherNode weatherNode) : base(weatherNode)` | constructor |
| `Tick` | `public void Tick()` | method |
| `OnMapClick` | `public override bool OnMapClick(bool followModifierUsed)` | method |
| `OnHover` | `public override void OnHover()` | method |
| `OnOpenEncyclopedia` | `public override void OnOpenEncyclopedia()` | method |
| `IsVisibleOrFadingOut` | `public override bool IsVisibleOrFadingOut()` | method |
| `GetVisualPosition` | `public override Vec3 GetVisualPosition()` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MapEntityVisual](../MapEntityVisual)
- [same namespace MapEntityVisual](../MapEntityVisual)
- [same namespace MapEntityVisual](../MapEntityVisual__1)
- [same namespace MobilePartyVisual](../MobilePartyVisual)
- [same namespace SettlementVisual](../SettlementVisual)
