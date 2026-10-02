---
title: "Music"
description: "Music: a public class in TaleWorlds.Engine; 10 exposed members (10 methods, 0 properties, 0 fields). Source: TaleWorlds.Engine/Music.cs."
---
# Music

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public class Music`
**File:** `TaleWorlds.Engine/Music.cs`

## Overview

Music lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/Music.cs. It is a public class; the inheritance chain is Music. It exposes 10 public/protected members: 10 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Music is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain Music. The surface is method-led (methods 10/10, properties 0/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/Music.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetFreeMusicChannelIndex` | `public static int GetFreeMusicChannelIndex()` | method |
| `LoadClip` | `public static void LoadClip(int index, string pathToClip)` | method |
| `UnloadClip` | `public static void UnloadClip(int index)` | method |
| `IsClipLoaded` | `public static bool IsClipLoaded(int index)` | method |
| `PlayMusic` | `public static void PlayMusic(int index)` | method |
| `PlayDelayed` | `public static void PlayDelayed(int index, int deltaMilliseconds)` | method |
| `IsMusicPlaying` | `public static bool IsMusicPlaying(int index)` | method |
| `PauseMusic` | `public static void PauseMusic(int index)` | method |
| `StopMusic` | `public static void StopMusic(int index)` | method |
| `SetVolume` | `public static void SetVolume(int index, float volume)` | method |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
