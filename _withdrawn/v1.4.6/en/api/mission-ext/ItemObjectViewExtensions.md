---
title: "ItemObjectViewExtensions"
description: "ItemObjectViewExtensions: a public class in TaleWorlds.MountAndBlade.View; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ItemObjectViewExtensions.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ItemObjectViewExtensions

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public static class ItemObjectViewExtensions`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ItemObjectViewExtensions.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ItemObjectViewExtensions lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ItemObjectViewExtensions.cs. It is a public class; the inheritance chain is ItemObjectViewExtensions. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ItemObjectViewExtensions lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View`, inheritance chain ItemObjectViewExtensions. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ItemObjectViewExtensions.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetCraftedMultiMesh` | `public static MetaMesh GetCraftedMultiMesh(this ItemObject itemObject, bool needBatchedVersion)` | method |
| `GetMultiMeshCopy` | `public static MetaMesh GetMultiMeshCopy(this ItemObject itemObject)` | method |
| `GetMultiMeshCopyWithGenderData` | `public static MetaMesh GetMultiMeshCopyWithGenderData(this ItemObject itemObject, bool isFemale, bool useSlimVersion, bool needBatchedVersion)` | method |
| `GetScaledFrame` | `public static MatrixFrame GetScaledFrame(this ItemObject itemObject, Mat3 rotationMatrix, MetaMesh metaMesh, float scaleFactor, Vec3 positionShift)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AgentVisuals](../AgentVisuals/)
- [same namespace AgentVisualsCreator](../AgentVisualsCreator/)
- [same namespace BannerVisual](../BannerVisual/)
- [same namespace BannerVisualCreator](../BannerVisualCreator/)
