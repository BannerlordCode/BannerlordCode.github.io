---
title: "ItemObjectViewExtensions"
description: "ItemObjectViewExtensions: a public class in TaleWorlds.MountAndBlade.View; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ItemObjectViewExtensions.cs."
---
# ItemObjectViewExtensions

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public static class ItemObjectViewExtensions`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ItemObjectViewExtensions.cs`

## Overview

ItemObjectViewExtensions lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ItemObjectViewExtensions.cs. It is a public class; the inheritance chain is ItemObjectViewExtensions. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ItemObjectViewExtensions is a top-level type in TaleWorlds.MountAndBlade.View, namespace matching the module directory; inheritance chain ItemObjectViewExtensions. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ItemObjectViewExtensions.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetCraftedMultiMesh` | `public static MetaMesh GetCraftedMultiMesh(this ItemObject itemObject, bool needBatchedVersion)` | method |
| `GetMultiMeshCopy` | `public static MetaMesh GetMultiMeshCopy(this ItemObject itemObject)` | method |
| `GetMultiMeshCopyWithGenderData` | `public static MetaMesh GetMultiMeshCopyWithGenderData(this ItemObject itemObject, bool isFemale, bool useSlimVersion, bool needBatchedVersion)` | method |
| `GetScaledFrame` | `public static MatrixFrame GetScaledFrame(this ItemObject itemObject, Mat3 rotationMatrix, MetaMesh metaMesh, float scaleFactor, Vec3 positionShift)` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentVisuals](../AgentVisuals)
- [same namespace AgentVisualsCreator](../AgentVisualsCreator)
- [same namespace BannerVisual](../BannerVisual)
- [same namespace BannerVisualCreator](../BannerVisualCreator)
