---
title: "VisualTestsScreen"
description: "VisualTestsScreen: a public class in TaleWorlds.MountAndBlade.View, inheriting ScreenBase; 15 exposed members (9 methods, 2 properties, 1 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/VisualTestsScreen.cs."
---
# VisualTestsScreen

**Namespace:** `TaleWorlds.MountAndBlade.View.Screens`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class VisualTestsScreen : ScreenBase`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/VisualTestsScreen.cs`

## Overview

VisualTestsScreen lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/VisualTestsScreen.cs. It is a public class, implementing/inheriting ScreenBase; the inheritance chain is VisualTestsScreen → ScreenBase. It exposes 15 public/protected members: 9 methods, 2 properties, 1 fields, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VisualTestsScreen is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.Screens) the module directory; inheritance chain VisualTestsScreen → ScreenBase. The surface is method-led (methods 9/15, properties 2/15), so it mostly exposes operations. ScreenBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/VisualTestsScreen.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StartedRendering` | `public bool StartedRendering()` | method |
| `GetSubTestName` | `public string GetSubTestName(VisualTestsScreen.CameraPointTestType type)` | method |
| `GetRenderMode` | `public Utilities.EngineRenderDisplayMode GetRenderMode(VisualTestsScreen.CameraPointTestType type)` | method |
| `VisualTestsScreen` | `public VisualTestsScreen(bool isValidTest, NativeOptions.ConfigQuality preset, string sceneName, DateTime testTime, List<string>testTypesToCheck)` | constructor |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `OnDeactivate` | `protected override void OnDeactivate()` | method |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `Reset` | `public void Reset()` | method |
| `isSceneSuccess` | `public static bool isSceneSuccess` | field |
| `CameraPointTestType` | `public enum CameraPointTestType` | property |
| `CameraPoint` | `public class CameraPoint` | property |
| `CameraPointTestType` | `public enum CameraPointTestType` | nested type |
| `CameraPoint` | `public class CameraPoint` | nested type |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BannerBuilderScreen](../BannerBuilderScreen)
- [same namespace BenchmarkScreen](../BenchmarkScreen)
- [same namespace CreditsScreen](../CreditsScreen)
- [same namespace FaceGeneratorScreen](../FaceGeneratorScreen)
