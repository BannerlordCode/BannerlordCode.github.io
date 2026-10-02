---
title: "Texture"
description: "Texture: a public class in TaleWorlds.Engine, inheriting Resource; 30 exposed members (21 methods, 9 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/Texture.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Texture

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Texture : Resource`
**File:** `TaleWorlds.Engine/Texture.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

Texture lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/Texture.cs. It is a public class (sealed), implementing/inheriting Resource; the inheritance chain is Texture → Resource → NativeObject. It exposes 30 public/protected members: 21 methods, 9 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Texture lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain Texture → Resource → NativeObject. The surface is method-led (methods 21/30, properties 9/30), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/Texture.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsReleased` | `public bool IsReleased` | property |
| `Width` | `public int Width` | property |
| `Height` | `public int Height` | property |
| `MemorySize` | `public int MemorySize` | property |
| `IsRenderTarget` | `public bool IsRenderTarget` | property |
| `CreateTextureFromPath` | `public static Texture CreateTextureFromPath(PlatformFilePath filePath)` | method |
| `GetPixelData` | `public void GetPixelData(byte[]bytes)` | method |
| `Name` | `public string Name` | property |
| `TransformRenderTargetToResource` | `public void TransformRenderTargetToResource(string name)` | method |
| `GetFromResource` | `public static Texture GetFromResource(string resourceName)` | method |
| `IsLoaded` | `public bool IsLoaded()` | method |
| `GetSDFBoundingBoxData` | `public void GetSDFBoundingBoxData(ref Vec3 min, ref Vec3 max)` | method |
| `CheckAndGetFromResource` | `public static Texture CheckAndGetFromResource(string resourceName)` | method |
| `ScaleTextureWithRatio` | `public static void ScaleTextureWithRatio(ref int tableauSizeX, ref int tableauSizeY)` | method |
| `PreloadTexture` | `public void PreloadTexture(bool blocking)` | method |
| `Release` | `public void Release()` | method |
| `ReleaseImmediately` | `public void ReleaseImmediately()` | method |
| `ReleaseAfterNumberOfFrames` | `public void ReleaseAfterNumberOfFrames(int frameCount)` | method |
| `LoadTextureFromPath` | `public static Texture LoadTextureFromPath(string fileName, string folder)` | method |
| `CreateDepthTarget` | `public static Texture CreateDepthTarget(string name, int width, int height)` | method |
| `CreateFromByteArray` | `public static Texture CreateFromByteArray(byte[]data, int width, int height)` | method |
| `SaveToFile` | `public void SaveToFile(string path, bool isRelativePath)` | method |
| `SetTextureAsAlwaysValid` | `public void SetTextureAsAlwaysValid()` | method |
| `CreateFromMemory` | `public static Texture CreateFromMemory(byte[]data)` | method |
| `ReleaseGpuMemories` | `public static void ReleaseGpuMemories()` | method |
| `RenderTargetComponent` | `public RenderTargetComponent RenderTargetComponent` | property |
| `TableauView` | `public TableauView TableauView` | property |
| `UserData` | `public object UserData` | property |
| `CreateTableauTexture` | `public static Texture CreateTableauTexture(string name, RenderTargetComponent.TextureUpdateEventHandler eventHandler, object objectRef, int tableauSizeX, int tableauSizeY)` | method |
| `CreateRenderTarget` | `public static Texture CreateRenderTarget(string name, int width, int height, bool autoMipmaps, bool isTableau, bool createUninitialized = false, bool always_valid = false)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface Resource](../Resource/)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
