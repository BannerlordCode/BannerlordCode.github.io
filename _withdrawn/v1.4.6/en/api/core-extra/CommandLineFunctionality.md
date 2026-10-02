---
title: "CommandLineFunctionality"
description: "CommandLineFunctionality: a public class in TaleWorlds.Library; 6 exposed members (4 methods, 1 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/CommandLineFunctionality.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CommandLineFunctionality

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class CommandLineFunctionality`
**File:** `TaleWorlds.Library/CommandLineFunctionality.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

CommandLineFunctionality lives in the TaleWorlds.Library module, source file TaleWorlds.Library/CommandLineFunctionality.cs. It is a public class; the inheritance chain is CommandLineFunctionality. It exposes 6 public/protected members: 4 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CommandLineFunctionality lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain CommandLineFunctionality. The surface is method-led (methods 4/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/CommandLineFunctionality.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `List` | `public static List<string>CollectCommandLineFunctions()` | method |
| `HasFunctionForCommand` | `public static bool HasFunctionForCommand(string command)` | method |
| `CallFunction` | `public static string CallFunction(string concatName, string concatArguments, out bool found)` | method |
| `CallFunction` | `public static string CallFunction(string concatName, List<string>argList, out bool found)` | method |
| `Attribute` | `public class CommandLineArgumentFunction : Attribute` | property |
| `Attribute` | `public class CommandLineArgumentFunction : Attribute` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
