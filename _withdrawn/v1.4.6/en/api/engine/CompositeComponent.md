---
title: "CompositeComponent"
description: "CompositeComponent: a public class in TaleWorlds.Engine, inheriting GameEntityComponent; 20 exposed members (17 methods, 3 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/CompositeComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CompositeComponent

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class CompositeComponent : GameEntityComponent`
**File:** `TaleWorlds.Engine/CompositeComponent.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

CompositeComponent lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/CompositeComponent.cs. It is a public class (sealed), implementing/inheriting GameEntityComponent; the inheritance chain is CompositeComponent → GameEntityComponent → NativeObject. It exposes 20 public/protected members: 17 methods, 3 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CompositeComponent lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain CompositeComponent → GameEntityComponent → NativeObject. The surface is method-led (methods 17/20, properties 3/20), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/CompositeComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsValid` | `public bool IsValid` | property |
| `IsNull` | `public static bool IsNull(CompositeComponent component)` | method |
| `CreateCompositeComponent` | `public static CompositeComponent CreateCompositeComponent()` | method |
| `CreateCopy` | `public CompositeComponent CreateCopy()` | method |
| `AddComponent` | `public void AddComponent(GameEntityComponent component)` | method |
| `AddPrefabEntity` | `public void AddPrefabEntity(string prefabName, Scene scene)` | method |
| `Dispose` | `public void Dispose()` | method |
| `GetFactor1` | `public uint GetFactor1()` | method |
| `GetFactor2` | `public uint GetFactor2()` | method |
| `SetFactor1` | `public void SetFactor1(uint factorColor1)` | method |
| `SetFactor2` | `public void SetFactor2(uint factorColor2)` | method |
| `SetVectorArgument` | `public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)` | method |
| `SetMaterial` | `public void SetMaterial(Material material)` | method |
| `Frame` | `public MatrixFrame Frame` | property |
| `VectorUserData` | `public Vec3 VectorUserData` | property |
| `SetVisibilityMask` | `public void SetVisibilityMask(VisibilityMaskFlags visibilityMask)` | method |
| `GetFirstMetaMesh` | `public override MetaMesh GetFirstMetaMesh()` | method |
| `AddMultiMesh` | `public void AddMultiMesh(string MultiMeshName)` | method |
| `SetVisible` | `public void SetVisible(bool visible)` | method |
| `GetVisible` | `public bool GetVisible()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameEntityComponent](../GameEntityComponent/)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)
