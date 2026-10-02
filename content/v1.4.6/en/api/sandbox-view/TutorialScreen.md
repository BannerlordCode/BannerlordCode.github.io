---
title: "TutorialScreen"
description: "TutorialScreen: a public class in SandBox.View, inheriting ScreenBase, IGameStateListener; 7 exposed members (5 methods, 1 properties, 0 fields). Source: SandBox.View/Menu/TutorialScreen.cs."
---
# TutorialScreen

**Namespace:** `SandBox.View.Menu`
**Module:** `SandBox.View`
**Type:** `public class TutorialScreen : ScreenBase, IGameStateListener`
**File:** `SandBox.View/Menu/TutorialScreen.cs`

## Overview

TutorialScreen lives in the SandBox.View module, source file SandBox.View/Menu/TutorialScreen.cs. It is a public class, implementing/inheriting ScreenBase, IGameStateListener; the inheritance chain is TutorialScreen → ScreenBase. It exposes 7 public/protected members: 5 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TutorialScreen is a top-level type in SandBox.View, namespace differing from (SandBox.View.Menu) the module directory; inheritance chain TutorialScreen → ScreenBase. The surface is method-led (methods 5/7, properties 1/7), so it mostly exposes operations. ScreenBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Menu/TutorialScreen.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MenuViewContext` | `public MenuViewContext MenuViewContext` | property |
| `TutorialScreen` | `public TutorialScreen(TutorialState tutorialState)` | constructor |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MenuBackgroundView](../MenuBackgroundView)
- [same namespace MenuBaseView](../MenuBaseView)
- [same namespace MenuOverlayBaseView](../MenuOverlayBaseView)
- [same namespace MenuRecruitVolunteersView](../MenuRecruitVolunteersView)
