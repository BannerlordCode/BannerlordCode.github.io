---
title: "MountVisualCreator"
description: "MountVisualCreator: a public class in TaleWorlds.MountAndBlade.View; 7 exposed members (7 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MountVisualCreator.cs."
---
# MountVisualCreator

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public static class MountVisualCreator`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MountVisualCreator.cs`

## Overview

MountVisualCreator lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MountVisualCreator.cs. It is a public class; the inheritance chain is MountVisualCreator. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MountVisualCreator is a top-level type in TaleWorlds.MountAndBlade.View, namespace matching the module directory; inheritance chain MountVisualCreator. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MountVisualCreator.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SetMaterialProperties` | `public static void SetMaterialProperties(ItemObject mountItem, MetaMesh mountMesh, MountCreationKey key, ref uint maneMeshMultiplier)` | method |
| `AddMountMesh` | `public static MountVisualCreationOutput AddMountMesh(MBAgentVisuals agentVisual, ItemObject mountItem, ItemObject harnessItem, string mountCreationKeyStr, Agent agent = null)` | method |
| `SetHorseColors` | `public static void SetHorseColors(MetaMesh horseMesh, MountCreationKey mountCreationKey)` | method |
| `ClearMountMesh` | `public static void ClearMountMesh(GameEntity gameEntity)` | method |
| `AddMountMeshToEntity` | `public static void AddMountMeshToEntity(GameEntity gameEntity, ItemObject mountItem, ItemObject harnessItem, string mountCreationKeyStr, out MountVisualCreationOutput mountVisualCreationOutput, Agent agent = null)` | method |
| `AddMountMeshToEntity` | `public static void AddMountMeshToEntity(GameEntity gameEntity, ItemObject mountItem, ItemObject harnessItem, string mountCreationKeyStr, Agent agent = null)` | method |
| `AddMountMeshToAgentVisual` | `public static void AddMountMeshToAgentVisual(MBAgentVisuals agentVisual, ItemObject mountItem, ItemObject harnessItem, string mountCreationKeyStr, Agent agent = null)` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentVisuals](../AgentVisuals)
- [same namespace AgentVisualsCreator](../AgentVisualsCreator)
- [same namespace BannerVisual](../BannerVisual)
- [same namespace BannerVisualCreator](../BannerVisualCreator)
