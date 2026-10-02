---
title: "MapCursor"
description: "MapCursor: a public class in SandBox.View; 6 exposed members (6 methods, 0 properties, 0 fields). Source: SandBox.View/Map/MapCursor.cs."
---
# MapCursor

**Namespace:** `SandBox.View.Map`
**Module:** `SandBox.View`
**Type:** `public class MapCursor`
**File:** `SandBox.View/Map/MapCursor.cs`

## Overview

MapCursor lives in the SandBox.View module, source file SandBox.View/Map/MapCursor.cs. It is a public class; the inheritance chain is MapCursor. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapCursor is a top-level type in SandBox.View, namespace differing from (SandBox.View.Map) the module directory; inheritance chain MapCursor. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/MapCursor.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Initialize` | `public void Initialize(MapScreen parentMapScreen)` | method |
| `BeforeTick` | `public void BeforeTick(float dt)` | method |
| `SetVisible` | `public void SetVisible(bool value)` | method |
| `OnMapTerrainClick` | `protected internal void OnMapTerrainClick()` | method |
| `OnAnotherEntityHighlighted` | `protected internal void OnAnotherEntityHighlighted()` | method |
| `SetAlpha` | `protected internal void SetAlpha(float alpha)` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleSimulationMapView](../BattleSimulationMapView)
- [same namespace BlockadePositionScript](../BlockadePositionScript)
- [same namespace CampaignEntityVisualComponent](../CampaignEntityVisualComponent)
- [same namespace DefaultMapConversationDataProvider](../DefaultMapConversationDataProvider)
