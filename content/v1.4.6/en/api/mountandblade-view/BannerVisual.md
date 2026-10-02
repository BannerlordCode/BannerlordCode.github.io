---
title: "BannerVisual"
description: "BannerVisual: a public class in TaleWorlds.MountAndBlade.View, inheriting IBannerVisual; 8 exposed members (6 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/BannerVisual.cs."
---
# BannerVisual

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class BannerVisual : IBannerVisual`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/BannerVisual.cs`

## Overview

BannerVisual lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/BannerVisual.cs. It is a public class, implementing/inheriting IBannerVisual; the inheritance chain is BannerVisual → IBannerVisual. It exposes 8 public/protected members: 6 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerVisual is a top-level type in TaleWorlds.MountAndBlade.View, namespace matching the module directory; inheritance chain BannerVisual → IBannerVisual. The surface is method-led (methods 6/8, properties 1/8), so it mostly exposes operations. IBannerVisual on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/BannerVisual.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Banner` | `public Banner Banner` | property |
| `BannerVisual` | `public BannerVisual(Banner banner)` | constructor |
| `ValidateCreateTableauTextures` | `public void ValidateCreateTableauTextures()` | method |
| `GetTableauTextureSmall` | `public Texture GetTableauTextureSmall(in BannerDebugInfo debugInfo, Action<Texture>setAction, bool isTableauOrNineGrid = true)` | method |
| `GetTableauTextureLarge` | `public Texture GetTableauTextureLarge(in BannerDebugInfo debugInfo, Action<Texture>setAction, bool isTableauOrNineGrid = true)` | method |
| `GetTableauTextureLarge` | `public Texture GetTableauTextureLarge(in BannerDebugInfo debugInfo, Action<Texture>setAction, out BannerTextureCreationData creationData, bool isTableauOrNineGrid = true)` | method |
| `GetMeshMatrix` | `public static MatrixFrame GetMeshMatrix(ref Mesh mesh, float marginLeft, float marginTop, float width, float height, bool mirrored, float rotation, float deltaZ)` | method |
| `ConvertToMultiMesh` | `public MetaMesh ConvertToMultiMesh()` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentVisuals](../AgentVisuals)
- [same namespace AgentVisualsCreator](../AgentVisualsCreator)
- [same namespace BannerVisualCreator](../BannerVisualCreator)
- [same namespace BannerVisualExtensions](../BannerVisualExtensions)
