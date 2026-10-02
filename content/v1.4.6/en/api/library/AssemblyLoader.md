---
title: "AssemblyLoader"
description: "AssemblyLoader: a public class in TaleWorlds.Library; 5 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.Library/AssemblyLoader.cs."
---
# AssemblyLoader

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class AssemblyLoader`
**File:** `TaleWorlds.Library/AssemblyLoader.cs`

## Overview

AssemblyLoader lives in the TaleWorlds.Library module, source file TaleWorlds.Library/AssemblyLoader.cs. It is a public class; the inheritance chain is AssemblyLoader. It exposes 5 public/protected members: 3 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AssemblyLoader is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain AssemblyLoader. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/AssemblyLoader.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Initialize` | `public static void Initialize()` | method |
| `LoadFrom` | `public static Assembly LoadFrom(string assemblyFile, bool showError = true)` | method |
| `LoadFrom` | `public static Assembly LoadFrom(string assemblyFile, out AssemblyLoader.AssemblyLoadResult result, bool showError = true)` | method |
| `AssemblyLoadResult` | `public enum AssemblyLoadResult` | property |
| `AssemblyLoadResult` | `public enum AssemblyLoadResult` | nested type |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
