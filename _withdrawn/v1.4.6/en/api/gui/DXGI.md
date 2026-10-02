---
title: "DXGI"
description: "DXGI: a public class in TaleWorlds.TwoDimension.Standalone.Native.Windows; 15 exposed members (1 methods, 6 properties, 2 fields). Canonical bucket gui. Source: TaleWorlds.TwoDimension.Standalone/Native/Windows/DXGI.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DXGI

**Namespace:** `TaleWorlds.TwoDimension.Standalone.Native.Windows`
**Module:** `TaleWorlds.TwoDimension.Standalone`
**Type:** `public static class DXGI`
**File:** `TaleWorlds.TwoDimension.Standalone/Native/Windows/DXGI.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## Overview

DXGI lives in the TaleWorlds.TwoDimension.Standalone module, source file TaleWorlds.TwoDimension.Standalone/Native/Windows/DXGI.cs. It is a public class; the inheritance chain is DXGI. It exposes 15 public/protected members: 1 methods, 6 properties, 2 fields, 6 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DXGI lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.TwoDimension`), namespace `TaleWorlds.TwoDimension.Standalone.Native.Windows`, inheritance chain DXGI. The surface is property-led (properties 6/15, methods 1/15), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension.Standalone/Native/Windows/DXGI.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CreateDXGIFactory` | `public static extern int CreateDXGIFactory(ref Guid riid, out IntPtr factory);` | method |
| `IID_IDXGIAdapter` | `public static Guid IID_IDXGIAdapter` | field |
| `IID_IDXGIFactory` | `public static Guid IID_IDXGIFactory` | field |
| `IDXGIFactory` | `public interface IDXGIFactory` | property |
| `IDXGIAdapter` | `public interface IDXGIAdapter` | property |
| `IDXGIOutput` | `public interface IDXGIOutput` | property |
| `DXGI_ADAPTER_DESC` | `public struct DXGI_ADAPTER_DESC` | property |
| `DXGI_OUTPUT_DESC` | `public struct DXGI_OUTPUT_DESC` | property |
| `RECT` | `public struct RECT` | property |
| `IDXGIFactory` | `public interface IDXGIFactory` | nested type |
| `IDXGIAdapter` | `public interface IDXGIAdapter` | nested type |
| `IDXGIOutput` | `public interface IDXGIOutput` | nested type |
| `DXGI_ADAPTER_DESC` | `public struct DXGI_ADAPTER_DESC` | nested type |
| `DXGI_OUTPUT_DESC` | `public struct DXGI_OUTPUT_DESC` | nested type |
| `RECT` | `public struct RECT` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AlphaFormatFlags](../AlphaFormatFlags/)
- [same namespace BitmapInfo](../BitmapInfo/)
- [same namespace BitmapInfoHeader](../BitmapInfoHeader/)
- [same namespace BlendFunction](../BlendFunction/)
