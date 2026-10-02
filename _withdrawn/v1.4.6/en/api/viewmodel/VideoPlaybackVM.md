---
title: "VideoPlaybackVM"
description: "VideoPlaybackVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.VideoPlayback, inheriting ViewModel; 4 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/VideoPlayback/VideoPlaybackVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# VideoPlaybackVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.VideoPlayback`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class VideoPlaybackVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/VideoPlayback/VideoPlaybackVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

VideoPlaybackVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/VideoPlayback/VideoPlaybackVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is VideoPlaybackVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VideoPlaybackVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.VideoPlayback`, inheritance chain VideoPlaybackVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/VideoPlayback/VideoPlaybackVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Tick` | `public void Tick(float totalElapsedTimeInVideoInSeconds)` | method |
| `GetItemInTimeframe` | `public SRTHelper.SubtitleItem GetItemInTimeframe(float timeInSecondsInVideo)` | method |
| `SetSubtitles` | `public void SetSubtitles(List<SRTHelper.SubtitleItem>lines)` | method |
| `SubtitleText` | `public string SubtitleText` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
