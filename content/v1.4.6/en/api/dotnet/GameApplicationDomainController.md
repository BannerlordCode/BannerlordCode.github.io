---
title: "GameApplicationDomainController"
description: "GameApplicationDomainController: a public class in TaleWorlds.DotNet, inheriting MarshalByRefObject; 4 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.DotNet/GameApplicationDomainController.cs."
---
# GameApplicationDomainController

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public class GameApplicationDomainController : MarshalByRefObject`
**File:** `TaleWorlds.DotNet/GameApplicationDomainController.cs`

## Overview

GameApplicationDomainController lives in the TaleWorlds.DotNet module, source file TaleWorlds.DotNet/GameApplicationDomainController.cs. It is a public class, implementing/inheriting MarshalByRefObject; the inheritance chain is GameApplicationDomainController → MarshalByRefObject. It exposes 4 public/protected members: 2 methods, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameApplicationDomainController is a top-level type in TaleWorlds.DotNet, namespace matching the module directory; inheritance chain GameApplicationDomainController → MarshalByRefObject. The surface is method-led (methods 2/4, properties 0/4), so it mostly exposes operations. MarshalByRefObject on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.DotNet/GameApplicationDomainController.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GameApplicationDomainController` | `public GameApplicationDomainController(bool newApplicationDomain)` | constructor |
| `GameApplicationDomainController` | `public GameApplicationDomainController()` | constructor |
| `LoadAsHostedByNative` | `public void LoadAsHostedByNative(IntPtr passManagedInitializeMethodPointer, IntPtr passManagedCallbackMethodPointer, string gameApiDllName, string gameApiTypeName, Platform currentPlatform)` | method |
| `Load` | `public void Load(Delegate passManagedInitializeMethod, Delegate passManagedCallbackMethod, string gameApiDllName, string gameApiTypeName, Platform currentPlatform)` | method |

## See Also

- [↑ dotnet module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CallbackDebugTool](../CallbackDebugTool)
- [same namespace CallbackStringBufferManager](../CallbackStringBufferManager)
- [same namespace Controller](../Controller)
- [same namespace CustomEngineStructMemberData](../CustomEngineStructMemberData)
