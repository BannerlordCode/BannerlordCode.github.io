---
title: "BannerlordTableauManager"
description: "BannerlordTableauManager: a public class in TaleWorlds.MountAndBlade; 7 exposed members (5 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/BannerlordTableauManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BannerlordTableauManager

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class BannerlordTableauManager`
**File:** `TaleWorlds.MountAndBlade/BannerlordTableauManager.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BannerlordTableauManager lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BannerlordTableauManager.cs. It is a public class; the inheritance chain is BannerlordTableauManager. It exposes 7 public/protected members: 5 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerlordTableauManager lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain BannerlordTableauManager. The surface is method-led (methods 5/7, properties 1/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BannerlordTableauManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Scene[]TableauCharacterScenes` | `public static Scene[]TableauCharacterScenes` | property |
| `RequestCharacterTableauRender` | `public static void RequestCharacterTableauRender(int characterCodeId, string path, GameEntity poseEntity, Camera cameraObject, int tableauType)` | method |
| `ClearManager` | `public static void ClearManager()` | method |
| `InitializeCharacterTableauRenderSystem` | `public static void InitializeCharacterTableauRenderSystem()` | method |
| `GetNumberOfPendingTableauRequests` | `public static int GetNumberOfPendingTableauRequests()` | method |
| `RequestCharacterTableauSetupDelegate` | `public delegate void RequestCharacterTableauSetupDelegate(int characterCodeId, Scene scene, GameEntity poseEntity);` | method |
| `RequestCharacterTableauSetupDelegate` | `public delegate void RequestCharacterTableauSetupDelegate(int characterCodeId, Scene scene, GameEntity poseEntity)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
