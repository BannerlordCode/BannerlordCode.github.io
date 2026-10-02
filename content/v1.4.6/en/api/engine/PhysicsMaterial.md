---
title: "PhysicsMaterial"
description: "PhysicsMaterial: a public struct in TaleWorlds.Engine; 20 exposed members (17 methods, 2 properties, 1 fields). Source: TaleWorlds.Engine/PhysicsMaterial.cs."
---
# PhysicsMaterial

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public readonly struct PhysicsMaterial`
**File:** `TaleWorlds.Engine/PhysicsMaterial.cs`

## Overview

PhysicsMaterial lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/PhysicsMaterial.cs. It is a public struct; the inheritance chain is PhysicsMaterial. It exposes 20 public/protected members: 17 methods, 2 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PhysicsMaterial is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain PhysicsMaterial. The surface is method-led (methods 17/20, properties 2/20), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/PhysicsMaterial.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsValid` | `public bool IsValid` | property |
| `GetFlags` | `public PhysicsMaterialFlags GetFlags()` | method |
| `GetDynamicFriction` | `public float GetDynamicFriction()` | method |
| `GetStaticFriction` | `public float GetStaticFriction()` | method |
| `GetRestitution` | `public float GetRestitution()` | method |
| `GetLinearDamping` | `public float GetLinearDamping()` | method |
| `GetAngularDamping` | `public float GetAngularDamping()` | method |
| `Name` | `public string Name` | property |
| `Equals` | `public bool Equals(PhysicsMaterial m)` | method |
| `GetMaterialCount` | `public static int GetMaterialCount()` | method |
| `GetFromName` | `public static PhysicsMaterial GetFromName(string id)` | method |
| `GetNameAtIndex` | `public static string GetNameAtIndex(int index)` | method |
| `GetFlagsAtIndex` | `public static PhysicsMaterialFlags GetFlagsAtIndex(int index)` | method |
| `GetRestitutionAtIndex` | `public static float GetRestitutionAtIndex(int index)` | method |
| `GetDynamicFrictionAtIndex` | `public static float GetDynamicFrictionAtIndex(int index)` | method |
| `GetStaticFrictionAtIndex` | `public static float GetStaticFrictionAtIndex(int index)` | method |
| `GetLinearDampingAtIndex` | `public static float GetLinearDampingAtIndex(int index)` | method |
| `GetAngularDampingAtIndex` | `public static float GetAngularDampingAtIndex(int index)` | method |
| `GetFromIndex` | `public static PhysicsMaterial GetFromIndex(int index)` | method |
| `InvalidPhysicsMaterial` | `public static readonly PhysicsMaterial InvalidPhysicsMaterial` | field |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
