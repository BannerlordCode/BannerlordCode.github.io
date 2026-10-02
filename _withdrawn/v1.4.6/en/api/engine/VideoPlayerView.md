---
title: "VideoPlayerView"
description: "VideoPlayerView: a public class in TaleWorlds.Engine, inheriting View; 5 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/VideoPlayerView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# VideoPlayerView

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class VideoPlayerView : View`
**File:** `TaleWorlds.Engine/VideoPlayerView.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

VideoPlayerView lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/VideoPlayerView.cs. It is a public class (sealed), implementing/inheriting View; the inheritance chain is VideoPlayerView → View → NativeObject. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VideoPlayerView lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain VideoPlayerView → View → NativeObject. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/VideoPlayerView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CreateVideoPlayerView` | `public static VideoPlayerView CreateVideoPlayerView()` | method |
| `PlayVideo` | `public void PlayVideo(string videoFileName, string soundFileName, float framerate, bool looping)` | method |
| `StopVideo` | `public void StopVideo()` | method |
| `IsVideoFinished` | `public bool IsVideoFinished()` | method |
| `FinalizePlayer` | `public void FinalizePlayer()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface View](../View/)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
