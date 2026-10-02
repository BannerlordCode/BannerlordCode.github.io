---
title: "Controller"
description: "Controller: a public class in TaleWorlds.DotNet; 5 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.DotNet/Controller.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Controller

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public static class Controller`
**File:** `TaleWorlds.DotNet/Controller.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.DotNet)

## Overview

Controller lives in the TaleWorlds.DotNet module, source file TaleWorlds.DotNet/Controller.cs. It is a public class; the inheritance chain is Controller. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Controller lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.DotNet`), namespace `TaleWorlds.DotNet`, inheritance chain Controller. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.DotNet/Controller.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OverrideManagedDllFolder` | `public static void OverrideManagedDllFolder(IntPtr overridenFolderAsPointer)` | method |
| `LoadOnCurrentApplicationDomain` | `public static void LoadOnCurrentApplicationDomain(IntPtr gameDllNameAsPointer, IntPtr gameTypeNameAsPointer, int currentEngineAsInteger, int currentPlatformAsInteger)` | method |
| `SetEngineMethodsAsMono` | `public static void SetEngineMethodsAsMono(IntPtr passControllerMethods, IntPtr passManagedInitializeMethod, IntPtr passManagedCallbackMethod)` | method |
| `SetEngineMethodsAsHostedDotNetCore` | `public static void SetEngineMethodsAsHostedDotNetCore(IntPtr passControllerMethods, IntPtr passManagedInitializeMethod, IntPtr passManagedCallbackMethod)` | method |
| `SetEngineMethodsAsDotNet` | `public static void SetEngineMethodsAsDotNet(Delegate passControllerMethods, Delegate passManagedInitializeMethod, Delegate passManagedCallbackMethod)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CallbackDebugTool](../CallbackDebugTool/)
- [same namespace CallbackStringBufferManager](../CallbackStringBufferManager/)
- [same namespace CustomEngineStructMemberData](../CustomEngineStructMemberData/)
- [same namespace DefineAsEngineStruct](../DefineAsEngineStruct/)
