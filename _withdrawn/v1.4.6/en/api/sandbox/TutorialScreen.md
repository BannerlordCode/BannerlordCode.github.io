---
title: "TutorialScreen"
description: "TutorialScreen: a public class in SandBox.View.Menu, inheriting ScreenBase, IGameStateListener; 7 exposed members (5 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.View/Menu/TutorialScreen.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TutorialScreen

**Namespace:** `SandBox.View.Menu`
**Module:** `SandBox.View`
**Type:** `public class TutorialScreen : ScreenBase, IGameStateListener`
**File:** `SandBox.View/Menu/TutorialScreen.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

TutorialScreen lives in the SandBox.View module, source file SandBox.View/Menu/TutorialScreen.cs. It is a public class, implementing/inheriting ScreenBase, IGameStateListener; the inheritance chain is TutorialScreen → ScreenBase. It exposes 7 public/protected members: 5 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TutorialScreen lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.View.Menu`, inheritance chain TutorialScreen → ScreenBase. The surface is method-led (methods 5/7, properties 1/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Menu/TutorialScreen.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MenuViewContext` | `public MenuViewContext MenuViewContext` | property |
| `TutorialScreen` | `public TutorialScreen(TutorialState tutorialState)` | constructor |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IGameStateListener](../../core-extra/IGameStateListener/)
- [same namespace MenuBackgroundView](../MenuBackgroundView/)
- [same namespace MenuBaseView](../MenuBaseView/)
- [same namespace MenuOverlayBaseView](../MenuOverlayBaseView/)
- [same namespace MenuRecruitVolunteersView](../MenuRecruitVolunteersView/)
