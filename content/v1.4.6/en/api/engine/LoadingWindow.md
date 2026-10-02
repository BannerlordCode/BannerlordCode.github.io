---
title: "LoadingWindow"
description: "LoadingWindow: a public class in TaleWorlds.Engine; 7 exposed members (5 methods, 2 properties, 0 fields). Source: TaleWorlds.Engine/LoadingWindow.cs."
---
# LoadingWindow

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public static class LoadingWindow`
**File:** `TaleWorlds.Engine/LoadingWindow.cs`

## Overview

LoadingWindow lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/LoadingWindow.cs. It is a public class; the inheritance chain is LoadingWindow. It exposes 7 public/protected members: 5 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LoadingWindow is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain LoadingWindow. The surface is method-led (methods 5/7, properties 2/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/LoadingWindow.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsLoadingWindowActive` | `public static bool IsLoadingWindowActive` | property |
| `LoadingWindowManager` | `public static ILoadingWindowManager LoadingWindowManager` | property |
| `InitializeWith` | `public static void InitializeWith<T>() where T : class, ILoadingWindowManager, new()` | method |
| `Destroy` | `public static void Destroy()` | method |
| `DisableGlobalLoadingWindow` | `public static void DisableGlobalLoadingWindow()` | method |
| `EnableGlobalLoadingWindow` | `public static void EnableGlobalLoadingWindow()` | method |
| `SetCurrentModeIsMultiplayer` | `public static void SetCurrentModeIsMultiplayer(bool isMultiplayer)` | method |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
