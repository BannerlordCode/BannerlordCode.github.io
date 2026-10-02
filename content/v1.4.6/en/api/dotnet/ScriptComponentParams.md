---
title: "ScriptComponentParams"
description: "ScriptComponentParams: a public class in TaleWorlds.DotNet, inheriting Attribute; 3 exposed members (0 methods, 2 properties, 0 fields). Source: TaleWorlds.DotNet/ScriptComponentParams.cs."
---
# ScriptComponentParams

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public class ScriptComponentParams : Attribute`
**File:** `TaleWorlds.DotNet/ScriptComponentParams.cs`

## Overview

ScriptComponentParams lives in the TaleWorlds.DotNet module, source file TaleWorlds.DotNet/ScriptComponentParams.cs. It is a public class, implementing/inheriting Attribute; the inheritance chain is ScriptComponentParams → Attribute. It exposes 3 public/protected members: 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ScriptComponentParams is a top-level type in TaleWorlds.DotNet, namespace matching the module directory; inheritance chain ScriptComponentParams → Attribute. The surface is property-led (properties 2/3, methods 0/3), so it mostly exposes state for reading. Attribute on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.DotNet/ScriptComponentParams.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Tag` | `public string Tag` | property |
| `NameOverride` | `public string NameOverride` | property |
| `ScriptComponentParams` | `public ScriptComponentParams(string tag = "", string nameOverride = "")` | constructor |

## See Also

- [↑ dotnet module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CallbackDebugTool](../CallbackDebugTool)
- [same namespace CallbackStringBufferManager](../CallbackStringBufferManager)
- [same namespace Controller](../Controller)
- [same namespace CustomEngineStructMemberData](../CustomEngineStructMemberData)
