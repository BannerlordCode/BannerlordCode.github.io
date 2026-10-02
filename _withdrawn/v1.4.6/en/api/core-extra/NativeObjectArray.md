---
title: "NativeObjectArray"
description: "NativeObjectArray: a public class in TaleWorlds.DotNet, inheriting NativeObject, IEnumerable<NativeObject>; 5 exposed members (4 methods, 1 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.DotNet/NativeObjectArray.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NativeObjectArray

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public sealed class NativeObjectArray : NativeObject, IEnumerable<NativeObject>, IEnumerable`
**File:** `TaleWorlds.DotNet/NativeObjectArray.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.DotNet)

## Overview

NativeObjectArray lives in the TaleWorlds.DotNet module, source file TaleWorlds.DotNet/NativeObjectArray.cs. It is a public class (sealed), implementing/inheriting NativeObject, IEnumerable<NativeObject>, IEnumerable; the inheritance chain is NativeObjectArray → NativeObject. It exposes 5 public/protected members: 4 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NativeObjectArray lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.DotNet`), namespace `TaleWorlds.DotNet`, inheritance chain NativeObjectArray → NativeObject. The surface is method-led (methods 4/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.DotNet/NativeObjectArray.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Create` | `public static NativeObjectArray Create()` | method |
| `Count` | `public int Count` | property |
| `GetElementAt` | `public NativeObject GetElementAt(int index)` | method |
| `AddElement` | `public void AddElement(NativeObject nativeObject)` | method |
| `Clear` | `public void Clear()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface NativeObject](../NativeObject/)
- [same namespace CallbackDebugTool](../CallbackDebugTool/)
- [same namespace CallbackStringBufferManager](../CallbackStringBufferManager/)
- [same namespace Controller](../Controller/)
- [same namespace CustomEngineStructMemberData](../CustomEngineStructMemberData/)
