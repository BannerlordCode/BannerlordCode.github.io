---
title: "CommonAreaMarker"
description: "CommonAreaMarker: a public class in SandBox.Objects.AreaMarkers, inheriting AreaMarker; 7 exposed members (4 methods, 2 properties, 1 fields). Canonical bucket sandbox. Source: SandBox/Objects/AreaMarkers/CommonAreaMarker.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CommonAreaMarker

**Namespace:** `SandBox.Objects.AreaMarkers`
**Module:** `SandBox`
**Type:** `public class CommonAreaMarker : AreaMarker`
**File:** `SandBox/Objects/AreaMarkers/CommonAreaMarker.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

CommonAreaMarker lives in the SandBox module, source file SandBox/Objects/AreaMarkers/CommonAreaMarker.cs. It is a public class, implementing/inheriting AreaMarker; the inheritance chain is CommonAreaMarker → AreaMarker → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 7 public/protected members: 4 methods, 2 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CommonAreaMarker lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Objects.AreaMarkers`, inheritance chain CommonAreaMarker → AreaMarker → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 4/7, properties 2/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/AreaMarkers/CommonAreaMarker.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `List` | `public List<MatrixFrame>HiddenSpawnFrames` | property |
| `Tag` | `public override string Tag` | property |
| `OnInit` | `protected override void OnInit()` | method |
| `List` | `public override List<UsableMachine>GetUsableMachinesInRange(string excludeTag = null)` | method |
| `GetAlley` | `public Alley GetAlley()` | method |
| `GetName` | `public override TextObject GetName()` | method |
| `Type` | `public string Type` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AreaMarker](../../mission-ext/AreaMarker/)
- [same namespace AnimatedBasicAreaIndicator](../AnimatedBasicAreaIndicator/)
- [same namespace BasicAreaIndicator](../BasicAreaIndicator/)
- [same namespace StealthAreaMarker](../StealthAreaMarker/)
- [same namespace WorkshopAreaMarker](../WorkshopAreaMarker/)
