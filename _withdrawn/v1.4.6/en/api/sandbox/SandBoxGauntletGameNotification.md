---
title: "SandBoxGauntletGameNotification"
description: "SandBoxGauntletGameNotification: a public class in SandBox.GauntletUI, inheriting GauntletGameNotification; 7 exposed members (7 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/SandBoxGauntletGameNotification.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandBoxGauntletGameNotification

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class SandBoxGauntletGameNotification : GauntletGameNotification`
**File:** `SandBox.GauntletUI/SandBoxGauntletGameNotification.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SandBoxGauntletGameNotification lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/SandBoxGauntletGameNotification.cs. It is a public class, implementing/inheriting GauntletGameNotification; the inheritance chain is SandBoxGauntletGameNotification → GauntletGameNotification → GlobalLayer → IComparable. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandBoxGauntletGameNotification lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI`, inheritance chain SandBoxGauntletGameNotification → GauntletGameNotification → GlobalLayer → IComparable. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. IComparable on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/SandBoxGauntletGameNotification.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Initialize` | `public new static void Initialize()` | method |
| `OnReceiveNewNotification` | `protected override void OnReceiveNewNotification(GameNotificationItemVM notification)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `UnregisterEvents` | `public override void UnregisterEvents()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `GetShouldBeSuspended` | `protected override bool GetShouldBeSuspended()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GauntletGameNotification](../../mission-ext/GauntletGameNotification/)
- [same namespace GauntletBarberScreen](../GauntletBarberScreen/)
- [same namespace GauntletCharacterDeveloperScreen](../GauntletCharacterDeveloperScreen/)
- [same namespace GauntletClanScreen](../GauntletClanScreen/)
- [same namespace GauntletCraftingScreen](../GauntletCraftingScreen/)
