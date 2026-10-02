---
title: "EngineMethod"
description: "EngineMethod: a public class in TaleWorlds.Library, inheriting Attribute; 5 exposed members (0 methods, 4 properties, 0 fields). Source: TaleWorlds.Library/EngineMethod.cs."
---
# EngineMethod

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class EngineMethod : Attribute`
**File:** `TaleWorlds.Library/EngineMethod.cs`

## Overview

EngineMethod lives in the TaleWorlds.Library module, source file TaleWorlds.Library/EngineMethod.cs. It is a public class, implementing/inheriting Attribute; the inheritance chain is EngineMethod → Attribute. It exposes 5 public/protected members: 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EngineMethod is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain EngineMethod → Attribute. The surface is property-led (properties 4/5, methods 0/5), so it mostly exposes state for reading. Attribute on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/EngineMethod.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EngineMethod` | `public EngineMethod(string engineMethodName, bool activateTelemetryProfiling = false, string[]conditionals = null, bool isMonoInline = false)` | constructor |
| `EngineMethodName` | `public string EngineMethodName` | property |
| `ActivateTelemetryProfiling` | `public bool ActivateTelemetryProfiling` | property |
| `string[]Conditionals` | `public string[]Conditionals` | property |
| `IsMonoInline` | `public bool IsMonoInline` | property |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
