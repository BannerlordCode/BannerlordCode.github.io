---
title: "ViewCreatorManager"
description: "ViewCreatorManager: a public class in TaleWorlds.MountAndBlade.View; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ViewCreatorManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ViewCreatorManager

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public static class ViewCreatorManager`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ViewCreatorManager.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ViewCreatorManager lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ViewCreatorManager.cs. It is a public class; the inheritance chain is ViewCreatorManager. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ViewCreatorManager lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View`, inheritance chain ViewCreatorManager. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ViewCreatorManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CreateScreenView` | `public static ScreenBase CreateScreenView<T>() where T : ScreenBase, new()` | method |
| `CreateScreenView` | `public static ScreenBase CreateScreenView<T>(params object[]parameters) where T : ScreenBase` | method |
| `CreateMissionView` | `public static MissionView CreateMissionView<T>(bool isNetwork = false, Mission mission = null, params object[]parameters) where T : MissionView, new()` | method |
| `CreateMissionViewWithArgs` | `public static MissionView CreateMissionViewWithArgs<T>(params object[]parameters) where T : MissionView` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AgentVisuals](../AgentVisuals/)
- [same namespace AgentVisualsCreator](../AgentVisualsCreator/)
- [same namespace BannerVisual](../BannerVisual/)
- [same namespace BannerVisualCreator](../BannerVisualCreator/)
