---
title: "WorkshopAreaMarker"
description: "WorkshopAreaMarker: a public class in SandBox, inheriting AreaMarker; 5 exposed members (4 methods, 1 properties, 0 fields). Source: SandBox/Objects/AreaMarkers/WorkshopAreaMarker.cs."
---
# WorkshopAreaMarker

**Namespace:** `SandBox.Objects.AreaMarkers`
**Module:** `SandBox`
**Type:** `public class WorkshopAreaMarker : AreaMarker`
**File:** `SandBox/Objects/AreaMarkers/WorkshopAreaMarker.cs`

## Overview

WorkshopAreaMarker lives in the SandBox module, source file SandBox/Objects/AreaMarkers/WorkshopAreaMarker.cs. It is a public class, implementing/inheriting AreaMarker; the inheritance chain is WorkshopAreaMarker → AreaMarker. It exposes 5 public/protected members: 4 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WorkshopAreaMarker is a top-level type in SandBox, namespace differing from (SandBox.Objects.AreaMarkers) the module directory; inheritance chain WorkshopAreaMarker → AreaMarker. The surface is method-led (methods 4/5, properties 1/5), so it mostly exposes operations. AreaMarker on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/AreaMarkers/WorkshopAreaMarker.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Tag` | `public override string Tag` | property |
| `GetWorkshop` | `public Workshop GetWorkshop()` | method |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | method |
| `GetWorkshopType` | `public WorkshopType GetWorkshopType()` | method |
| `GetName` | `public override TextObject GetName()` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimatedBasicAreaIndicator](../AnimatedBasicAreaIndicator)
- [same namespace BasicAreaIndicator](../BasicAreaIndicator)
- [same namespace CommonAreaMarker](../CommonAreaMarker)
- [same namespace StealthAreaMarker](../StealthAreaMarker)
