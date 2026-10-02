---
title: "WorkshopAreaMarker"
description: "WorkshopAreaMarker: a public class in SandBox.Objects.AreaMarkers, inheriting AreaMarker; 5 exposed members (4 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Objects/AreaMarkers/WorkshopAreaMarker.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WorkshopAreaMarker

**Namespace:** `SandBox.Objects.AreaMarkers`
**Module:** `SandBox`
**Type:** `public class WorkshopAreaMarker : AreaMarker`
**File:** `SandBox/Objects/AreaMarkers/WorkshopAreaMarker.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

WorkshopAreaMarker lives in the SandBox module, source file SandBox/Objects/AreaMarkers/WorkshopAreaMarker.cs. It is a public class, implementing/inheriting AreaMarker; the inheritance chain is WorkshopAreaMarker → AreaMarker → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 5 public/protected members: 4 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WorkshopAreaMarker lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Objects.AreaMarkers`, inheritance chain WorkshopAreaMarker → AreaMarker → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 4/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/AreaMarkers/WorkshopAreaMarker.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Tag` | `public override string Tag` | property |
| `GetWorkshop` | `public Workshop GetWorkshop()` | method |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | method |
| `GetWorkshopType` | `public WorkshopType GetWorkshopType()` | method |
| `GetName` | `public override TextObject GetName()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AreaMarker](../../mission-ext/AreaMarker/)
- [same namespace AnimatedBasicAreaIndicator](../AnimatedBasicAreaIndicator/)
- [same namespace BasicAreaIndicator](../BasicAreaIndicator/)
- [same namespace CommonAreaMarker](../CommonAreaMarker/)
- [same namespace StealthAreaMarker](../StealthAreaMarker/)
