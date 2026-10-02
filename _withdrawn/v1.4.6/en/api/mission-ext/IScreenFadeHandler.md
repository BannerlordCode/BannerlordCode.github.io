---
title: "IScreenFadeHandler"
description: "IScreenFadeHandler: a public interface in TaleWorlds.MountAndBlade; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/IScreenFadeHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IScreenFadeHandler

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IScreenFadeHandler`
**File:** `TaleWorlds.MountAndBlade/IScreenFadeHandler.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

IScreenFadeHandler lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/IScreenFadeHandler.cs. It is a public interface; the inheritance chain is IScreenFadeHandler. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IScreenFadeHandler lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain IScreenFadeHandler. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/IScreenFadeHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BeginFadeOutAndIn` | `void BeginFadeOutAndIn(float fadeOutDuration = 0.5f, float blackOutDuration = 0.5f, float fadeInDuration = 0.5f);` | method |
| `BeginFadeOut` | `void BeginFadeOut(float fadeOutDuration = 0.5f);` | method |
| `BeginFadeIn` | `void BeginFadeIn(float fadeInDuration = 0.5f);` | method |
| `GetScreenFadeState` | `ScreenFadeController.ScreenFadeState GetScreenFadeState();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
