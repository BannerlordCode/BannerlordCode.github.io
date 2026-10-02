---
title: "Decal"
description: "Decal: a public class in TaleWorlds.Engine, inheriting GameEntityComponent; 17 exposed members (15 methods, 2 properties, 0 fields). Source: TaleWorlds.Engine/Decal.cs."
---
# Decal

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Decal : GameEntityComponent`
**File:** `TaleWorlds.Engine/Decal.cs`

## Overview

Decal lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/Decal.cs. It is a public class (sealed), implementing/inheriting GameEntityComponent; the inheritance chain is Decal → GameEntityComponent → NativeObject. It exposes 17 public/protected members: 15 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Decal is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain Decal → GameEntityComponent → NativeObject. The surface is method-led (methods 15/17, properties 2/17), so it mostly exposes operations. NativeObject on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/Decal.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreateDecal` | `public static Decal CreateDecal(string name = null)` | method |
| `CreateCopy` | `public Decal CreateCopy()` | method |
| `CheckAndRegisterToDecalSet` | `public void CheckAndRegisterToDecalSet()` | method |
| `SetIsVisible` | `public void SetIsVisible(bool value)` | method |
| `IsValid` | `public bool IsValid` | property |
| `GetFactor1` | `public uint GetFactor1()` | method |
| `OverrideRoadBoundaryP0` | `public void OverrideRoadBoundaryP0(Vec2 data)` | method |
| `OverrideRoadBoundaryP1` | `public void OverrideRoadBoundaryP1(Vec2 data)` | method |
| `SetFactor1Linear` | `public void SetFactor1Linear(uint linearFactorColor1)` | method |
| `SetFactor1` | `public void SetFactor1(uint factorColor1)` | method |
| `SetAlpha` | `public void SetAlpha(float alpha)` | method |
| `SetVectorArgument` | `public void SetVectorArgument(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)` | method |
| `SetVectorArgument2` | `public void SetVectorArgument2(float vectorArgument0, float vectorArgument1, float vectorArgument2, float vectorArgument3)` | method |
| `GetMaterial` | `public Material GetMaterial()` | method |
| `SetMaterial` | `public void SetMaterial(Material material)` | method |
| `SetFrame` | `public void SetFrame(MatrixFrame Frame)` | method |
| `Frame` | `public MatrixFrame Frame` | property |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface GameEntityComponent](../GameEntityComponent)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
