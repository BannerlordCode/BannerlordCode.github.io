---
title: "GauntletQueryManager"
description: "GauntletQueryManager: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting GlobalLayer; 3 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI/GauntletQueryManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletQueryManager

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletQueryManager : GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletQueryManager.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

GauntletQueryManager lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/GauntletQueryManager.cs. It is a public class, implementing/inheriting GlobalLayer; the inheritance chain is GauntletQueryManager → GlobalLayer → IComparable. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletQueryManager lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI`, inheritance chain GauntletQueryManager → GlobalLayer → IComparable. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. IComparable on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/GauntletQueryManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Initialize` | `public void Initialize()` | method |
| `OnEarlyTick` | `protected override void OnEarlyTick(float dt)` | method |
| `OnLateTick` | `protected override void OnLateTick(float dt)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GlobalLayer](../../gui/GlobalLayer/)
- [same namespace ChatLogMessageManager](../ChatLogMessageManager/)
- [same namespace GamepadCursorViewModel](../GamepadCursorViewModel/)
- [same namespace GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen/)
- [same namespace GauntletCameraFadeView](../GauntletCameraFadeView/)
