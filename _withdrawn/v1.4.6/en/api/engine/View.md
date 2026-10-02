---
title: "View"
description: "View: a public class in TaleWorlds.Engine, inheriting NativeObject; 21 exposed members (15 methods, 3 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/View.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# View

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public abstract class View : NativeObject`
**File:** `TaleWorlds.Engine/View.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

View lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/View.cs. It is a public class (abstract), implementing/inheriting NativeObject; the inheritance chain is View → NativeObject. It exposes 21 public/protected members: 15 methods, 3 properties, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: View lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain View → NativeObject. The surface is method-led (methods 15/21, properties 3/21), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/View.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SetScale` | `public void SetScale(Vec2 scale)` | method |
| `SetOffset` | `public void SetOffset(Vec2 offset)` | method |
| `SetRenderOrder` | `public void SetRenderOrder(int value)` | method |
| `SetRenderOption` | `public void SetRenderOption(View.ViewRenderOptions optionEnum, bool value)` | method |
| `SetRenderTarget` | `public void SetRenderTarget(Texture texture)` | method |
| `SetDepthTarget` | `public void SetDepthTarget(Texture texture)` | method |
| `DontClearBackground` | `public void DontClearBackground()` | method |
| `SetClearColor` | `public void SetClearColor(uint rgba)` | method |
| `SetEnable` | `public void SetEnable(bool value)` | method |
| `SetRenderOnDemand` | `public void SetRenderOnDemand(bool value)` | method |
| `SetAutoDepthTargetCreation` | `public void SetAutoDepthTargetCreation(bool value)` | method |
| `SetSaveFinalResultToDisk` | `public void SetSaveFinalResultToDisk(bool value)` | method |
| `SetFileNameToSaveResult` | `public void SetFileNameToSaveResult(string name)` | method |
| `SetFileTypeToSave` | `public void SetFileTypeToSave(View.TextureSaveFormat format)` | method |
| `SetFilePathToSaveResult` | `public void SetFilePathToSaveResult(string name)` | method |
| `TextureSaveFormat` | `public enum TextureSaveFormat` | property |
| `uint` | `public enum PostfxConfig : uint` | property |
| `ViewRenderOptions` | `public enum ViewRenderOptions` | property |
| `TextureSaveFormat` | `public enum TextureSaveFormat` | nested type |
| `uint` | `public enum PostfxConfig : uint` | nested type |
| `ViewRenderOptions` | `public enum ViewRenderOptions` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface NativeObject](../../core-extra/NativeObject/)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
