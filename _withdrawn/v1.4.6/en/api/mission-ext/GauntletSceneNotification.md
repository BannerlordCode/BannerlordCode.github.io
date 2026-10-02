---
title: "GauntletSceneNotification"
description: "GauntletSceneNotification: a public class in TaleWorlds.MountAndBlade.GauntletUI.SceneNotification, inheriting GlobalLayer; 7 exposed members (5 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI/SceneNotification/GauntletSceneNotification.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletSceneNotification

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.SceneNotification`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletSceneNotification : GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/SceneNotification/GauntletSceneNotification.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

GauntletSceneNotification lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/SceneNotification/GauntletSceneNotification.cs. It is a public class, implementing/inheriting GlobalLayer; the inheritance chain is GauntletSceneNotification → GlobalLayer → IComparable. It exposes 7 public/protected members: 5 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletSceneNotification lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.SceneNotification`, inheritance chain GauntletSceneNotification → GlobalLayer → IComparable. The surface is method-led (methods 5/7, properties 2/7), so it mostly exposes operations. IComparable on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/SceneNotification/GauntletSceneNotification.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Current` | `public static GauntletSceneNotification Current` | property |
| `IsActive` | `public bool IsActive` | property |
| `Initialize` | `public static void Initialize()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `OnFinalize` | `public void OnFinalize()` | method |
| `RegisterContextProvider` | `public void RegisterContextProvider(ISceneNotificationContextProvider provider)` | method |
| `RemoveContextProvider` | `public bool RemoveContextProvider(ISceneNotificationContextProvider provider)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GlobalLayer](../../gui/GlobalLayer/)
- [same namespace NativeSceneNotificationContextProvider](../NativeSceneNotificationContextProvider/)
