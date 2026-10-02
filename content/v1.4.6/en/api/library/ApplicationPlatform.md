---
title: "ApplicationPlatform"
description: "ApplicationPlatform: a public class in TaleWorlds.Library; 6 exposed members (3 methods, 3 properties, 0 fields). Source: TaleWorlds.Library/ApplicationPlatform.cs."
---
# ApplicationPlatform

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class ApplicationPlatform`
**File:** `TaleWorlds.Library/ApplicationPlatform.cs`

## Overview

ApplicationPlatform lives in the TaleWorlds.Library module, source file TaleWorlds.Library/ApplicationPlatform.cs. It is a public class; the inheritance chain is ApplicationPlatform. It exposes 6 public/protected members: 3 methods, 3 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ApplicationPlatform is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain ApplicationPlatform. The surface is method-led (methods 3/6, properties 3/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/ApplicationPlatform.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentEngine` | `public static EngineType CurrentEngine` | property |
| `CurrentPlatform` | `public static Platform CurrentPlatform` | property |
| `CurrentRuntimeLibrary` | `public static Runtime CurrentRuntimeLibrary` | property |
| `Initialize` | `public static void Initialize(EngineType engineType, Platform currentPlatform, Runtime currentRuntimeLibrary)` | method |
| `IsPlatformWindows` | `public static bool IsPlatformWindows()` | method |
| `IsPlatformConsole` | `public static bool IsPlatformConsole()` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
- [same namespace ApplicationVersionType](../ApplicationVersionType)
