---
title: "SceneEditorScreen"
description: "SceneEditorScreen: a public class in TaleWorlds.MountAndBlade.View, inheriting ScreenBase, IGameStateListener; 5 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/SceneEditorScreen.cs."
---
# SceneEditorScreen

**Namespace:** `TaleWorlds.MountAndBlade.View.Screens`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class SceneEditorScreen : ScreenBase, IGameStateListener`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/SceneEditorScreen.cs`

## Overview

SceneEditorScreen lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/SceneEditorScreen.cs. It is a public class, implementing/inheriting ScreenBase, IGameStateListener; the inheritance chain is SceneEditorScreen → ScreenBase. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SceneEditorScreen is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.Screens) the module directory; inheritance chain SceneEditorScreen → ScreenBase. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. ScreenBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/SceneEditorScreen.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SceneEditorScreen` | `public SceneEditorScreen(EditorState editorState)` | constructor |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BannerBuilderScreen](../BannerBuilderScreen)
- [same namespace BenchmarkScreen](../BenchmarkScreen)
- [same namespace CreditsScreen](../CreditsScreen)
- [same namespace FaceGeneratorScreen](../FaceGeneratorScreen)
