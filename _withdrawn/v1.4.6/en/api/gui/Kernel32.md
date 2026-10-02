---
title: "Kernel32"
description: "Kernel32: a public class in TaleWorlds.TwoDimension.Standalone.Native.Windows; 7 exposed members (5 methods, 1 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.TwoDimension.Standalone/Native/Windows/Kernel32.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Kernel32

**Namespace:** `TaleWorlds.TwoDimension.Standalone.Native.Windows`
**Module:** `TaleWorlds.TwoDimension.Standalone`
**Type:** `public static class Kernel32`
**File:** `TaleWorlds.TwoDimension.Standalone/Native/Windows/Kernel32.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## Overview

Kernel32 lives in the TaleWorlds.TwoDimension.Standalone module, source file TaleWorlds.TwoDimension.Standalone/Native/Windows/Kernel32.cs. It is a public class; the inheritance chain is Kernel32. It exposes 7 public/protected members: 5 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Kernel32 lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.TwoDimension`), namespace `TaleWorlds.TwoDimension.Standalone.Native.Windows`, inheritance chain Kernel32. The surface is method-led (methods 5/7, properties 1/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension.Standalone/Native/Windows/Kernel32.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `LoadLibrary` | `public static extern IntPtr LoadLibrary(string lpFileName);` | method |
| `GetModuleHandle` | `public static extern IntPtr GetModuleHandle(string lpModuleName);` | method |
| `GetLastError` | `public static extern int GetLastError();` | method |
| `GetConsoleWindow` | `public static extern IntPtr GetConsoleWindow();` | method |
| `GetUserGeoID` | `public static extern int GetUserGeoID(Kernel32.GeoTypeId type);` | method |
| `GeoTypeId` | `public enum GeoTypeId` | property |
| `GeoTypeId` | `public enum GeoTypeId` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AlphaFormatFlags](../AlphaFormatFlags/)
- [same namespace BitmapInfo](../BitmapInfo/)
- [same namespace BitmapInfoHeader](../BitmapInfoHeader/)
- [same namespace BlendFunction](../BlendFunction/)
