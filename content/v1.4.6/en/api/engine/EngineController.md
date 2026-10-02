---
title: "EngineController"
description: "EngineController: a public class in TaleWorlds.Engine; 7 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.Engine/EngineController.cs."
---
# EngineController

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public static class EngineController`
**File:** `TaleWorlds.Engine/EngineController.cs`

## Overview

EngineController lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/EngineController.cs. It is a public class; the inheritance chain is EngineController. It exposes 7 public/protected members: 3 methods, 4 events.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EngineController is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain EngineController. The surface is method-led (methods 3/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/EngineController.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ConfigChange;` | `public static event Action ConfigChange;` | event |
| `Action` | `public static event Action<bool>OnConstrainedStateChanged;` | event |
| `OnDLCInstalledCallback;` | `public static event Action OnDLCInstalledCallback;` | event |
| `OnDLCLoadedCallback;` | `public static event Action OnDLCLoadedCallback;` | event |
| `GetVersionStr` | `public static string GetVersionStr()` | method |
| `GetApplicationPlatformName` | `public static string GetApplicationPlatformName()` | method |
| `GetModulesVersionStr` | `public static string GetModulesVersionStr()` | method |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
