---
title: "Screen"
description: "Screen: a public class in TaleWorlds.Engine; 7 exposed members (1 methods, 6 properties, 0 fields). Source: TaleWorlds.Engine/Screen.cs."
---
# Screen

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public static class Screen`
**File:** `TaleWorlds.Engine/Screen.cs`

## Overview

Screen lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/Screen.cs. It is a public class; the inheritance chain is Screen. It exposes 7 public/protected members: 1 methods, 6 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Screen is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain Screen. The surface is property-led (properties 6/7, methods 1/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/Screen.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RealScreenResolutionWidth` | `public static float RealScreenResolutionWidth` | property |
| `RealScreenResolutionHeight` | `public static float RealScreenResolutionHeight` | property |
| `RealScreenResolution` | `public static Vec2 RealScreenResolution` | property |
| `AspectRatio` | `public static float AspectRatio` | property |
| `DesktopResolution` | `public static Vec2 DesktopResolution` | property |
| `ScreenScale` | `public static Vec2 ScreenScale` | property |
| `GetMouseVisible` | `public static bool GetMouseVisible()` | method |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
