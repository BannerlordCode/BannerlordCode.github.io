---
title: "OpenGLTexture"
description: "OpenGLTexture: a public class in TaleWorlds.TwoDimension.Standalone, inheriting ITexture; 14 exposed members (9 methods, 5 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.TwoDimension.Standalone/OpenGLTexture.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OpenGLTexture

**Namespace:** `TaleWorlds.TwoDimension.Standalone`
**Module:** `TaleWorlds.TwoDimension.Standalone`
**Type:** `public class OpenGLTexture : ITexture`
**File:** `TaleWorlds.TwoDimension.Standalone/OpenGLTexture.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## Overview

OpenGLTexture lives in the TaleWorlds.TwoDimension.Standalone module, source file TaleWorlds.TwoDimension.Standalone/OpenGLTexture.cs. It is a public class, implementing/inheriting ITexture; the inheritance chain is OpenGLTexture → ITexture. It exposes 14 public/protected members: 9 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OpenGLTexture lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.TwoDimension`), namespace `TaleWorlds.TwoDimension.Standalone`, inheritance chain OpenGLTexture → ITexture. The surface is method-led (methods 9/14, properties 5/14), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension.Standalone/OpenGLTexture.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsValid` | `public bool IsValid` | property |
| `Width` | `public int Width` | property |
| `Height` | `public int Height` | property |
| `Name` | `public string Name` | property |
| `ClampToEdge` | `public bool ClampToEdge` | property |
| `Initialize` | `public void Initialize(string name, int width, int height)` | method |
| `CopyFrom` | `public void CopyFrom(OpenGLTexture texture)` | method |
| `Delete` | `public void Delete()` | method |
| `FromFile` | `public static OpenGLTexture FromFile(ResourceDepot resourceDepot, string name)` | method |
| `FromFile` | `public static OpenGLTexture FromFile(string fullFilePath)` | method |
| `Release` | `public void Release()` | method |
| `LoadFromFile` | `public void LoadFromFile(ResourceDepot resourceDepot, string name)` | method |
| `LoadFromFile` | `public void LoadFromFile(string fullPathName)` | method |
| `IsLoaded` | `public bool IsLoaded()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ITexture](../ITexture/)
- [same namespace FrameworkDomain](../FrameworkDomain/)
- [same namespace GraphicsContext](../GraphicsContext/)
- [same namespace GraphicsForm](../GraphicsForm/)
- [same namespace IMessageCommunicator](../IMessageCommunicator/)
