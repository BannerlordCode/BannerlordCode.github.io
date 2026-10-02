---
title: "VideoPlaybackState"
description: "VideoPlaybackState: a public class in TaleWorlds.MountAndBlade, inheriting GameState; 9 exposed members (4 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade/VideoPlaybackState.cs."
---
# VideoPlaybackState

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class VideoPlaybackState : GameState`
**File:** `TaleWorlds.MountAndBlade/VideoPlaybackState.cs`

## Overview

VideoPlaybackState lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/VideoPlaybackState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is VideoPlaybackState → GameState. It exposes 9 public/protected members: 4 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VideoPlaybackState is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain VideoPlaybackState → GameState. The surface is property-led (properties 5/9, methods 4/9), so it mostly exposes state for reading. GameState on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/VideoPlaybackState.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `VideoPath` | `public string VideoPath` | property |
| `AudioPath` | `public string AudioPath` | property |
| `FrameRate` | `public float FrameRate` | property |
| `SubtitleFileBasePath` | `public string SubtitleFileBasePath` | property |
| `CanUserSkip` | `public bool CanUserSkip` | property |
| `SetStartingParameters` | `public void SetStartingParameters(string videoPath, string audioPath, string subtitleFileBasePath, float frameRate = 30f, bool canUserSkip = true)` | method |
| `SetOnVideoFinisedDelegate` | `public void SetOnVideoFinisedDelegate(Action onVideoFinised)` | method |
| `OnVideoStarted` | `public void OnVideoStarted()` | method |
| `OnVideoFinished` | `public void OnVideoFinished()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
