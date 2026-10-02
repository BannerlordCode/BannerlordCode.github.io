---
title: "ApplicationPlatform"
description: "ApplicationPlatform: a public class in TaleWorlds.Library; 6 exposed members (3 methods, 3 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/ApplicationPlatform.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ApplicationPlatform

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class ApplicationPlatform`
**File:** `TaleWorlds.Library/ApplicationPlatform.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

ApplicationPlatform lives in the TaleWorlds.Library module, source file TaleWorlds.Library/ApplicationPlatform.cs. It is a public class; the inheritance chain is ApplicationPlatform. It exposes 6 public/protected members: 3 methods, 3 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ApplicationPlatform lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain ApplicationPlatform. The surface is method-led (methods 3/6, properties 3/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/ApplicationPlatform.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CurrentEngine` | `public static EngineType CurrentEngine` | property |
| `CurrentPlatform` | `public static Platform CurrentPlatform` | property |
| `CurrentRuntimeLibrary` | `public static Runtime CurrentRuntimeLibrary` | property |
| `Initialize` | `public static void Initialize(EngineType engineType, Platform currentPlatform, Runtime currentRuntimeLibrary)` | method |
| `IsPlatformWindows` | `public static bool IsPlatformWindows()` | method |
| `IsPlatformConsole` | `public static bool IsPlatformConsole()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
- [same namespace ApplicationVersionType](../ApplicationVersionType/)
