---
title: "GauntletBodyGeneratorScreen"
description: "GauntletBodyGeneratorScreen: a public class in TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator, inheriting ScreenBase, IFaceGeneratorScreen; 8 exposed members (6 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/GauntletBodyGeneratorScreen.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletBodyGeneratorScreen

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletBodyGeneratorScreen : ScreenBase, IFaceGeneratorScreen`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/GauntletBodyGeneratorScreen.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

GauntletBodyGeneratorScreen lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/GauntletBodyGeneratorScreen.cs. It is a public class, implementing/inheriting ScreenBase, IFaceGeneratorScreen; the inheritance chain is GauntletBodyGeneratorScreen → ScreenBase. It exposes 8 public/protected members: 6 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletBodyGeneratorScreen lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator`, inheritance chain GauntletBodyGeneratorScreen → ScreenBase. The surface is method-led (methods 6/8, properties 1/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/GauntletBodyGeneratorScreen.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Handler` | `public IFaceGeneratorHandler Handler` | property |
| `GauntletBodyGeneratorScreen` | `public GauntletBodyGeneratorScreen(BasicCharacterObject character, bool openedFromMultiplayer, IFaceGeneratorCustomFilter filter)` | constructor |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `OnExit` | `public void OnExit()` | method |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IFaceGeneratorScreen](../IFaceGeneratorScreen/)
- [same namespace BodyGeneratorView](../BodyGeneratorView/)
