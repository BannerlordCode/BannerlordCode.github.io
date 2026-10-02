---
title: "NativeString"
description: "NativeString: a public class in TaleWorlds.DotNet, inheriting NativeObject; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.DotNet/NativeString.cs."
---
# NativeString

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public sealed class NativeString : NativeObject`
**File:** `TaleWorlds.DotNet/NativeString.cs`

## Overview

NativeString lives in the TaleWorlds.DotNet module, source file TaleWorlds.DotNet/NativeString.cs. It is a public class (sealed), implementing/inheriting NativeObject; the inheritance chain is NativeString → NativeObject. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NativeString is a top-level type in TaleWorlds.DotNet, namespace matching the module directory; inheritance chain NativeString → NativeObject. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.DotNet/NativeString.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Create` | `public static NativeString Create()` | method |
| `GetString` | `public string GetString()` | method |
| `SetString` | `public void SetString(string newString)` | method |

## See Also

- [↑ dotnet module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface NativeObject](../NativeObject)
- [same namespace CallbackDebugTool](../CallbackDebugTool)
- [same namespace CallbackStringBufferManager](../CallbackStringBufferManager)
- [same namespace Controller](../Controller)
- [same namespace CustomEngineStructMemberData](../CustomEngineStructMemberData)
