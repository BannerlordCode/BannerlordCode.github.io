---
title: "EngineStruct"
description: "EngineStruct: a public class in TaleWorlds.DotNet, inheriting Attribute; 9 exposed members (0 methods, 6 properties, 0 fields). Source: TaleWorlds.DotNet/EngineStruct.cs."
---
# EngineStruct

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public class EngineStruct : Attribute`
**File:** `TaleWorlds.DotNet/EngineStruct.cs`

## Overview

EngineStruct lives in the TaleWorlds.DotNet module, source file TaleWorlds.DotNet/EngineStruct.cs. It is a public class, implementing/inheriting Attribute; the inheritance chain is EngineStruct → Attribute. It exposes 9 public/protected members: 6 properties, 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EngineStruct is a top-level type in TaleWorlds.DotNet, namespace matching the module directory; inheritance chain EngineStruct → Attribute. The surface is property-led (properties 6/9, methods 0/9), so it mostly exposes state for reading. Attribute on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.DotNet/EngineStruct.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EngineType` | `public string EngineType` | property |
| `AlternateDotNetType` | `public string AlternateDotNetType` | property |
| `EngineEnumPrefix` | `public string EngineEnumPrefix` | property |
| `IgnoreMemberOffsetTest` | `public bool IgnoreMemberOffsetTest` | property |
| `string[]Conditionals` | `public string[]Conditionals` | property |
| `FirstCharacterUppercase` | `public bool FirstCharacterUppercase` | property |
| `EngineStruct` | `public EngineStruct(string engineType, bool ignoreMemberOffsetTest = false, string[]conditionals = null)` | constructor |
| `EngineStruct` | `public EngineStruct(string engineType, string alternateDotNetType, bool ignoreMemberOffsetTest = false, string[]conditionals = null)` | constructor |
| `EngineStruct` | `public EngineStruct(string engineType, bool isEnum, string engineEnumPrefix, bool ignoreMemberOffsetTest = false)` | constructor |

## See Also

- [↑ dotnet module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CallbackDebugTool](../CallbackDebugTool)
- [same namespace CallbackStringBufferManager](../CallbackStringBufferManager)
- [same namespace Controller](../Controller)
- [same namespace CustomEngineStructMemberData](../CustomEngineStructMemberData)
