---
title: "ManagedDelegate"
description: "ManagedDelegate: a public class in TaleWorlds.DotNet, inheriting DotNetObject; 4 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.DotNet/ManagedDelegate.cs."
---
# ManagedDelegate

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public class ManagedDelegate : DotNetObject`
**File:** `TaleWorlds.DotNet/ManagedDelegate.cs`

## Overview

ManagedDelegate lives in the TaleWorlds.DotNet module, source file TaleWorlds.DotNet/ManagedDelegate.cs. It is a public class, implementing/inheriting DotNetObject; the inheritance chain is ManagedDelegate → DotNetObject. It exposes 4 public/protected members: 2 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ManagedDelegate is a top-level type in TaleWorlds.DotNet, namespace matching the module directory; inheritance chain ManagedDelegate → DotNetObject. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.DotNet/ManagedDelegate.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Instance` | `public ManagedDelegate.DelegateDefinition Instance` | property |
| `InvokeAux` | `public void InvokeAux()` | method |
| `DelegateDefinition` | `public delegate void DelegateDefinition();` | method |
| `DelegateDefinition` | `public delegate void DelegateDefinition()` | nested type |

## See Also

- [↑ dotnet module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface DotNetObject](../DotNetObject)
- [same namespace CallbackDebugTool](../CallbackDebugTool)
- [same namespace CallbackStringBufferManager](../CallbackStringBufferManager)
- [same namespace Controller](../Controller)
- [same namespace CustomEngineStructMemberData](../CustomEngineStructMemberData)
