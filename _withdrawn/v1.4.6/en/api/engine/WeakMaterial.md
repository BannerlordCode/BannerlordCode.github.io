---
title: "WeakMaterial"
description: "WeakMaterial: a public struct in TaleWorlds.Engine; 21 exposed members (17 methods, 3 properties, 1 fields). Canonical bucket engine. Source: TaleWorlds.Engine/WeakMaterial.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WeakMaterial

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public struct WeakMaterial`
**File:** `TaleWorlds.Engine/WeakMaterial.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

WeakMaterial lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/WeakMaterial.cs. It is a public struct; the inheritance chain is WeakMaterial. It exposes 21 public/protected members: 17 methods, 3 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WeakMaterial lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain WeakMaterial. The surface is method-led (methods 17/21, properties 3/21), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/WeakMaterial.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Pointer` | `public UIntPtr Pointer` | property |
| `IsValid` | `public bool IsValid` | property |
| `GetShader` | `public Shader GetShader()` | method |
| `GetShaderFlags` | `public ulong GetShaderFlags()` | method |
| `SetShaderFlags` | `public void SetShaderFlags(ulong flagEntry)` | method |
| `SetMeshVectorArgument` | `public void SetMeshVectorArgument(float x, float y, float z, float w)` | method |
| `SetTexture` | `public void SetTexture(Material.MBTextureType textureType, Texture texture)` | method |
| `SetTextureAtSlot` | `public void SetTextureAtSlot(int textureSlot, Texture texture)` | method |
| `SetAreaMapScale` | `public void SetAreaMapScale(float scale)` | method |
| `SetEnableSkinning` | `public void SetEnableSkinning(bool enable)` | method |
| `UsingSkinning` | `public bool UsingSkinning()` | method |
| `GetTexture` | `public Texture GetTexture(Material.MBTextureType textureType)` | method |
| `GetTextureWithSlot` | `public Texture GetTextureWithSlot(int textureSlot)` | method |
| `Name` | `public string Name` | property |
| `AddMaterialShaderFlag` | `public void AddMaterialShaderFlag(string flagName, bool showErrors)` | method |
| `RemoveMaterialShaderFlag` | `public void RemoveMaterialShaderFlag(string flagName)` | method |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |
| `Equals` | `public override bool Equals(object obj)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `Invalid` | `public static readonly WeakMaterial Invalid` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
