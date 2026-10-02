---
title: "Logger"
description: "Logger: a public class in TaleWorlds.Library; 7 exposed members (3 methods, 1 properties, 1 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/Logger.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Logger

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class Logger`
**File:** `TaleWorlds.Library/Logger.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

Logger lives in the TaleWorlds.Library module, source file TaleWorlds.Library/Logger.cs. It is a public class; the inheritance chain is Logger. It exposes 7 public/protected members: 3 methods, 1 properties, 1 fields, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Logger lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain Logger. The surface is method-led (methods 3/7, properties 1/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/Logger.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `LogOnlyErrors` | `public bool LogOnlyErrors` | property |
| `Logger` | `public Logger(string name) : this(name, false, false, false, 1, -1, false)` | constructor |
| `Logger` | `public Logger(string name, bool writeErrorsToDifferentFile, bool logOnlyErrors, bool doNotUseProcessId, int numFiles = 1, int totalFileSize = -1, bool overwrite = false)` | constructor |
| `Print` | `public void Print(string log, HTMLDebugCategory debugInfo = HTMLDebugCategory.General)` | method |
| `Print` | `public void Print(string log, HTMLDebugCategory debugInfo, bool printOnGlobal)` | method |
| `FinishAndCloseAll` | `public static void FinishAndCloseAll()` | method |
| `LogsFolder` | `public static string LogsFolder` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
