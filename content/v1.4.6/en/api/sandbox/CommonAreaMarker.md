---
title: "CommonAreaMarker"
description: "CommonAreaMarker: a public class in SandBox, inheriting AreaMarker; 7 exposed members (4 methods, 2 properties, 1 fields). Source: SandBox/Objects/AreaMarkers/CommonAreaMarker.cs."
---
# CommonAreaMarker

**Namespace:** `SandBox.Objects.AreaMarkers`
**Module:** `SandBox`
**Type:** `public class CommonAreaMarker : AreaMarker`
**File:** `SandBox/Objects/AreaMarkers/CommonAreaMarker.cs`

## Overview

CommonAreaMarker lives in the SandBox module, source file SandBox/Objects/AreaMarkers/CommonAreaMarker.cs. It is a public class, implementing/inheriting AreaMarker; the inheritance chain is CommonAreaMarker → AreaMarker. It exposes 7 public/protected members: 4 methods, 2 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CommonAreaMarker is a top-level type in SandBox, namespace differing from (SandBox.Objects.AreaMarkers) the module directory; inheritance chain CommonAreaMarker → AreaMarker. The surface is method-led (methods 4/7, properties 2/7), so it mostly exposes operations. AreaMarker on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/AreaMarkers/CommonAreaMarker.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public List<MatrixFrame>HiddenSpawnFrames` | property |
| `Tag` | `public override string Tag` | property |
| `OnInit` | `protected override void OnInit()` | method |
| `List` | `public override List<UsableMachine>GetUsableMachinesInRange(string excludeTag = null)` | method |
| `GetAlley` | `public Alley GetAlley()` | method |
| `GetName` | `public override TextObject GetName()` | method |
| `Type` | `public string Type` | field |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimatedBasicAreaIndicator](../AnimatedBasicAreaIndicator)
- [same namespace BasicAreaIndicator](../BasicAreaIndicator)
- [same namespace StealthAreaMarker](../StealthAreaMarker)
- [same namespace WorkshopAreaMarker](../WorkshopAreaMarker)
