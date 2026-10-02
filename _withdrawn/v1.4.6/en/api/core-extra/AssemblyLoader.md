---
title: "AssemblyLoader"
description: "AssemblyLoader: a public class in TaleWorlds.Library; 5 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/AssemblyLoader.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AssemblyLoader

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class AssemblyLoader`
**File:** `TaleWorlds.Library/AssemblyLoader.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

AssemblyLoader lives in the TaleWorlds.Library module, source file TaleWorlds.Library/AssemblyLoader.cs. It is a public class; the inheritance chain is AssemblyLoader. It exposes 5 public/protected members: 3 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AssemblyLoader lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain AssemblyLoader. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/AssemblyLoader.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Initialize` | `public static void Initialize()` | method |
| `LoadFrom` | `public static Assembly LoadFrom(string assemblyFile, bool showError = true)` | method |
| `LoadFrom` | `public static Assembly LoadFrom(string assemblyFile, out AssemblyLoader.AssemblyLoadResult result, bool showError = true)` | method |
| `AssemblyLoadResult` | `public enum AssemblyLoadResult` | property |
| `AssemblyLoadResult` | `public enum AssemblyLoadResult` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
