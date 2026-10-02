---
title: "TwoDimensionView"
description: "TwoDimensionView: a public class in TaleWorlds.Engine, inheriting View; 8 exposed members (8 methods, 0 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/TwoDimensionView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TwoDimensionView

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class TwoDimensionView : View`
**File:** `TaleWorlds.Engine/TwoDimensionView.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

TwoDimensionView lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/TwoDimensionView.cs. It is a public class (sealed), implementing/inheriting View; the inheritance chain is TwoDimensionView → View → NativeObject. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TwoDimensionView lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain TwoDimensionView → View → NativeObject. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/TwoDimensionView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CreateTwoDimension` | `public static TwoDimensionView CreateTwoDimension(string viewName)` | method |
| `BeginFrame` | `public void BeginFrame()` | method |
| `EndFrame` | `public void EndFrame()` | method |
| `Clear` | `public void Clear()` | method |
| `CreateMeshFromDescription` | `public void CreateMeshFromDescription(WeakMaterial material, TwoDimensionMeshDrawData meshDrawData)` | method |
| `CreateTextMeshFromCache` | `public bool CreateTextMeshFromCache(Material material, TwoDimensionTextMeshDrawData meshDrawData)` | method |
| `CreateTextMeshFromDescription` | `public void CreateTextMeshFromDescription(float[]vertices, float[]uvs, uint[]indices, int indexCount, Material material, TwoDimensionTextMeshDrawData meshDrawData)` | method |
| `GetOrCreateMaterial` | `public WeakMaterial GetOrCreateMaterial(Texture mainTexture, Texture overlayTexture)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface View](../View/)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
