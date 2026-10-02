---
title: "Watchdog"
description: "Watchdog: a public class in TaleWorlds.Library; 6 exposed members (4 methods, 0 properties, 1 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/Watchdog.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Watchdog

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class Watchdog`
**File:** `TaleWorlds.Library/Watchdog.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

Watchdog lives in the TaleWorlds.Library module, source file TaleWorlds.Library/Watchdog.cs. It is a public class; the inheritance chain is Watchdog. It exposes 6 public/protected members: 4 methods, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Watchdog lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain Watchdog. The surface is method-led (methods 4/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/Watchdog.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Watchdog` | `public Watchdog(bool use_coreclr, string dumpdir)` | constructor |
| `SetDumpDirectory` | `public static void SetDumpDirectory(string Path)` | method |
| `DetachAndClose` | `public static void DetachAndClose()` | method |
| `LogProperty` | `public static void LogProperty(string FileName, string GroupName, string Key, string Value)` | method |
| `Attached` | `public static bool Attached()` | method |
| `WatchdogMutexName` | `public string WatchdogMutexName` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
