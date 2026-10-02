---
title: "BannerVisualExtensions"
description: "BannerVisualExtensions: a public class in TaleWorlds.MountAndBlade.View; 6 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/BannerVisualExtensions.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BannerVisualExtensions

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public static class BannerVisualExtensions`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/BannerVisualExtensions.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BannerVisualExtensions lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/BannerVisualExtensions.cs. It is a public class; the inheritance chain is BannerVisualExtensions. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerVisualExtensions lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View`, inheritance chain BannerVisualExtensions. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/BannerVisualExtensions.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetTableauTextureSmallForBannerEditor` | `public static Texture GetTableauTextureSmallForBannerEditor(this Banner banner, in BannerDebugInfo debugInfo, Action<Texture>setAction, out BannerEditorTextureCreationData textureCreationData)` | method |
| `GetTableauTextureLargeForBannerEditor` | `public static Texture GetTableauTextureLargeForBannerEditor(this Banner banner, in BannerDebugInfo debugInfo, Action<Texture>setAction, out BannerEditorTextureCreationData textureCreationData)` | method |
| `GetTableauTextureSmall` | `public static Texture GetTableauTextureSmall(this Banner banner, in BannerDebugInfo debugInfo, Action<Texture>setAction)` | method |
| `GetTableauTextureLarge` | `public static Texture GetTableauTextureLarge(this Banner banner, in BannerDebugInfo debugInfo, Action<Texture>setAction)` | method |
| `GetTableauTextureLarge` | `public static Texture GetTableauTextureLarge(this Banner banner, in BannerDebugInfo debugInfo, Action<Texture>setAction, out BannerTextureCreationData creationData)` | method |
| `ConvertToMultiMesh` | `public static MetaMesh ConvertToMultiMesh(this Banner banner)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AgentVisuals](../AgentVisuals/)
- [same namespace AgentVisualsCreator](../AgentVisualsCreator/)
- [same namespace BannerVisual](../BannerVisual/)
- [same namespace BannerVisualCreator](../BannerVisualCreator/)
