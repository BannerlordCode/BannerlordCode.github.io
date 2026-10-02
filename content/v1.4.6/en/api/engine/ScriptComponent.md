---
title: "ScriptComponent"
description: "ScriptComponent: a public class in TaleWorlds.Engine, inheriting NativeObject; 2 exposed members (1 methods, 0 properties, 0 fields). Source: TaleWorlds.Engine/ScriptComponent.cs."
---
# ScriptComponent

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public abstract class ScriptComponent : NativeObject`
**File:** `TaleWorlds.Engine/ScriptComponent.cs`

## Overview

ScriptComponent lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/ScriptComponent.cs. It is a public class (abstract), implementing/inheriting NativeObject; the inheritance chain is ScriptComponent → NativeObject. It exposes 2 public/protected members: 1 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ScriptComponent is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain ScriptComponent → NativeObject. The surface is method-led (methods 1/2, properties 0/2), so it mostly exposes operations. NativeObject on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/ScriptComponent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ScriptComponent` | `protected ScriptComponent()` | constructor |
| `GetName` | `public string GetName()` | method |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
