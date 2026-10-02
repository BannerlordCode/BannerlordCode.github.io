---
title: "VideoPlaybackVM"
description: "VideoPlaybackVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 4 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/VideoPlayback/VideoPlaybackVM.cs."
---
# VideoPlaybackVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.VideoPlayback`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class VideoPlaybackVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/VideoPlayback/VideoPlaybackVM.cs`

## Overview

VideoPlaybackVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/VideoPlayback/VideoPlaybackVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is VideoPlaybackVM → ViewModel. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VideoPlaybackVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.VideoPlayback) the module directory; inheritance chain VideoPlaybackVM → ViewModel. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/VideoPlayback/VideoPlaybackVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Tick` | `public void Tick(float totalElapsedTimeInVideoInSeconds)` | method |
| `GetItemInTimeframe` | `public SRTHelper.SubtitleItem GetItemInTimeframe(float timeInSecondsInVideo)` | method |
| `SetSubtitles` | `public void SetSubtitles(List<SRTHelper.SubtitleItem>lines)` | method |
| `SubtitleText` | `public string SubtitleText` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
