---
title: "ICallbackManager"
description: "ICallbackManager: a public interface in TaleWorlds.DotNet; 5 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.DotNet/ICallbackManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ICallbackManager

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public interface ICallbackManager`
**File:** `TaleWorlds.DotNet/ICallbackManager.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.DotNet)

## Overview

ICallbackManager lives in the TaleWorlds.DotNet module, source file TaleWorlds.DotNet/ICallbackManager.cs. It is a public interface; the inheritance chain is ICallbackManager. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ICallbackManager lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.DotNet`), namespace `TaleWorlds.DotNet`, inheritance chain ICallbackManager. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.DotNet/ICallbackManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Initialize` | `void Initialize();` | method |
| `Delegate[]GetDelegates` | `Delegate[]GetDelegates();` | method |
| `object>GetScriptingInterfaceObjects` | `Dictionary<string, object>GetScriptingInterfaceObjects();` | method |
| `SetFunctionPointer` | `void SetFunctionPointer(int id, IntPtr pointer);` | method |
| `CheckSharedStructureSizes` | `void CheckSharedStructureSizes();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CallbackDebugTool](../CallbackDebugTool/)
- [same namespace CallbackStringBufferManager](../CallbackStringBufferManager/)
- [same namespace Controller](../Controller/)
- [same namespace CustomEngineStructMemberData](../CustomEngineStructMemberData/)
