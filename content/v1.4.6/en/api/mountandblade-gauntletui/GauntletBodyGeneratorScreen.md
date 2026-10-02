---
title: "GauntletBodyGeneratorScreen"
description: "GauntletBodyGeneratorScreen: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting ScreenBase, IFaceGeneratorScreen; 8 exposed members (6 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/GauntletBodyGeneratorScreen.cs."
---
# GauntletBodyGeneratorScreen

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletBodyGeneratorScreen : ScreenBase, IFaceGeneratorScreen`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/GauntletBodyGeneratorScreen.cs`

## Overview

GauntletBodyGeneratorScreen lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/GauntletBodyGeneratorScreen.cs. It is a public class, implementing/inheriting ScreenBase, IFaceGeneratorScreen; the inheritance chain is GauntletBodyGeneratorScreen → ScreenBase. It exposes 8 public/protected members: 6 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletBodyGeneratorScreen is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator) the module directory; inheritance chain GauntletBodyGeneratorScreen → ScreenBase. The surface is method-led (methods 6/8, properties 1/8), so it mostly exposes operations. ScreenBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/GauntletBodyGeneratorScreen.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BodyGeneratorView](../BodyGeneratorView)
