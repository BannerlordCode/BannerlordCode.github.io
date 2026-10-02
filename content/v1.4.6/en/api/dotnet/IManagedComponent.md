---
title: "IManagedComponent"
description: "IManagedComponent: a public interface in TaleWorlds.DotNet; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.DotNet/IManagedComponent.cs."
---
# IManagedComponent

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public interface IManagedComponent`
**File:** `TaleWorlds.DotNet/IManagedComponent.cs`

## Overview

IManagedComponent lives in the TaleWorlds.DotNet module, source file TaleWorlds.DotNet/IManagedComponent.cs. It is a public interface; the inheritance chain is IManagedComponent. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IManagedComponent is a top-level type in TaleWorlds.DotNet, namespace matching the module directory; inheritance chain IManagedComponent. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.DotNet/IManagedComponent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnCustomCallbackMethodPassed` | `void OnCustomCallbackMethodPassed(string name, Delegate method);` | method |
| `OnStart` | `void OnStart();` | method |
| `OnApplicationTick` | `void OnApplicationTick(float dt);` | method |

## See Also

- [↑ dotnet module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CallbackDebugTool](../CallbackDebugTool)
- [same namespace CallbackStringBufferManager](../CallbackStringBufferManager)
- [same namespace Controller](../Controller)
- [same namespace CustomEngineStructMemberData](../CustomEngineStructMemberData)
