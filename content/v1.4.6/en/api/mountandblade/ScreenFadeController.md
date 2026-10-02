---
title: "ScreenFadeController"
description: "ScreenFadeController: a public class in TaleWorlds.MountAndBlade; 10 exposed members (4 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade/ScreenFadeController.cs."
---
# ScreenFadeController

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class ScreenFadeController`
**File:** `TaleWorlds.MountAndBlade/ScreenFadeController.cs`

## Overview

ScreenFadeController lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ScreenFadeController.cs. It is a public class; the inheritance chain is ScreenFadeController. It exposes 10 public/protected members: 4 methods, 5 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ScreenFadeController is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain ScreenFadeController. The surface is property-led (properties 5/10, methods 4/10), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ScreenFadeController.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsFadeActive` | `public static bool IsFadeActive` | property |
| `IsFadingOut` | `public static bool IsFadingOut` | property |
| `IsFadingIn` | `public static bool IsFadingIn` | property |
| `IsFadedOut` | `public static bool IsFadedOut` | property |
| `RegisterHandler` | `public static void RegisterHandler(IScreenFadeHandler handler)` | method |
| `BeginFadeOutAndIn` | `public static void BeginFadeOutAndIn(float fadeOutDuration = 0.5f, float blackOutDuration = 0.5f, float fadeInDuration = 0.5f)` | method |
| `BeginFadeOut` | `public static void BeginFadeOut(float fadeOutDuration = 0.5f)` | method |
| `BeginFadeIn` | `public static void BeginFadeIn(float fadeInDuration = 0.5f)` | method |
| `ScreenFadeState` | `public enum ScreenFadeState` | property |
| `ScreenFadeState` | `public enum ScreenFadeState` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
