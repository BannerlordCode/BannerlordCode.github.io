---
title: "EngineStruct"
description: "EngineStruct: a public class in TaleWorlds.DotNet, inheriting Attribute; 9 exposed members (0 methods, 6 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.DotNet/EngineStruct.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EngineStruct

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public class EngineStruct : Attribute`
**File:** `TaleWorlds.DotNet/EngineStruct.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.DotNet)

## Overview

EngineStruct lives in the TaleWorlds.DotNet module, source file TaleWorlds.DotNet/EngineStruct.cs. It is a public class, implementing/inheriting Attribute; the inheritance chain is EngineStruct → Attribute. It exposes 9 public/protected members: 6 properties, 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EngineStruct lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.DotNet`), namespace `TaleWorlds.DotNet`, inheritance chain EngineStruct → Attribute. The surface is property-led (properties 6/9, methods 0/9), so it mostly exposes state for reading. Attribute on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.DotNet/EngineStruct.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CallbackDebugTool](../CallbackDebugTool/)
- [same namespace CallbackStringBufferManager](../CallbackStringBufferManager/)
- [same namespace Controller](../Controller/)
- [same namespace CustomEngineStructMemberData](../CustomEngineStructMemberData/)
