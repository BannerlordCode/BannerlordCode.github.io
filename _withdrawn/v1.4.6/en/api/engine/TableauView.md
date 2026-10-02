---
title: "TableauView"
description: "TableauView: a public class in TaleWorlds.Engine, inheriting SceneView; 6 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/TableauView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TableauView

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class TableauView : SceneView`
**File:** `TaleWorlds.Engine/TableauView.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

TableauView lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/TableauView.cs. It is a public class (sealed), implementing/inheriting SceneView; the inheritance chain is TableauView → SceneView → View → NativeObject. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TableauView lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain TableauView → SceneView → View → NativeObject. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/TableauView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CreateTableauView` | `public static TableauView CreateTableauView(string viewName)` | method |
| `SetSortingEnabled` | `public void SetSortingEnabled(bool value)` | method |
| `SetContinuousRendering` | `public void SetContinuousRendering(bool value)` | method |
| `SetDoNotRenderThisFrame` | `public void SetDoNotRenderThisFrame(bool value)` | method |
| `SetDeleteAfterRendering` | `public void SetDeleteAfterRendering(bool value)` | method |
| `AddTableau` | `public static Texture AddTableau(string name, RenderTargetComponent.TextureUpdateEventHandler eventHandler, object objectRef, int tableauSizeX, int tableauSizeY)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SceneView](../SceneView/)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
