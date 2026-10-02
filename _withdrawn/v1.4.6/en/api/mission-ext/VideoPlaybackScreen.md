---
title: "VideoPlaybackScreen"
description: "VideoPlaybackScreen: a public class in TaleWorlds.MountAndBlade.View.Screens, inheriting ScreenBase, IGameStateListener; 3 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/VideoPlaybackScreen.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# VideoPlaybackScreen

**Namespace:** `TaleWorlds.MountAndBlade.View.Screens`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class VideoPlaybackScreen : ScreenBase, IGameStateListener`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/VideoPlaybackScreen.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

VideoPlaybackScreen lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/VideoPlaybackScreen.cs. It is a public class, implementing/inheriting ScreenBase, IGameStateListener; the inheritance chain is VideoPlaybackScreen → ScreenBase. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VideoPlaybackScreen lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.Screens`, inheritance chain VideoPlaybackScreen → ScreenBase. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/VideoPlaybackScreen.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `VideoPlaybackScreen` | `public VideoPlaybackScreen(VideoPlaybackState videoPlaybackState)` | constructor |
| `OnFrameTick` | `protected sealed override void OnFrameTick(float dt)` | method |
| `OnVideoPlaybackTick` | `protected virtual void OnVideoPlaybackTick(float dt)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IGameStateListener](../../core-extra/IGameStateListener/)
- [same namespace BannerBuilderScreen](../BannerBuilderScreen/)
- [same namespace BenchmarkScreen](../BenchmarkScreen/)
- [same namespace CreditsScreen](../CreditsScreen/)
- [same namespace FaceGeneratorScreen](../FaceGeneratorScreen/)
