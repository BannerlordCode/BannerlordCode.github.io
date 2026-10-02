---
title: "StealthAreaMarker"
description: "StealthAreaMarker: a public class in SandBox, inheriting AreaMarker; 3 exposed members (1 methods, 2 properties, 0 fields). Source: SandBox/Objects/AreaMarkers/StealthAreaMarker.cs."
---
# StealthAreaMarker

**Namespace:** `SandBox.Objects.AreaMarkers`
**Module:** `SandBox`
**Type:** `public class StealthAreaMarker : AreaMarker`
**File:** `SandBox/Objects/AreaMarkers/StealthAreaMarker.cs`

## Overview

StealthAreaMarker lives in the SandBox module, source file SandBox/Objects/AreaMarkers/StealthAreaMarker.cs. It is a public class, implementing/inheriting AreaMarker; the inheritance chain is StealthAreaMarker → AreaMarker. It exposes 3 public/protected members: 1 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StealthAreaMarker is a top-level type in SandBox, namespace differing from (SandBox.Objects.AreaMarkers) the module directory; inheritance chain StealthAreaMarker → AreaMarker. The surface is property-led (properties 2/3, methods 1/3), so it mostly exposes state for reading. AreaMarker on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/AreaMarkers/StealthAreaMarker.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ReinforcementAllyGroupSpawnPoint` | `public GameEntity ReinforcementAllyGroupSpawnPoint` | property |
| `WaitPoint` | `public GameEntity WaitPoint` | property |
| `AfterMissionStart` | `public override void AfterMissionStart()` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimatedBasicAreaIndicator](../AnimatedBasicAreaIndicator)
- [same namespace BasicAreaIndicator](../BasicAreaIndicator)
- [same namespace CommonAreaMarker](../CommonAreaMarker)
- [same namespace WorkshopAreaMarker](../WorkshopAreaMarker)
