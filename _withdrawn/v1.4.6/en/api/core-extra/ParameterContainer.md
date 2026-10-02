---
title: "ParameterContainer"
description: "ParameterContainer: a public class in TaleWorlds.Library; 17 exposed members (15 methods, 1 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/ParameterContainer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ParameterContainer

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class ParameterContainer`
**File:** `TaleWorlds.Library/ParameterContainer.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

ParameterContainer lives in the TaleWorlds.Library module, source file TaleWorlds.Library/ParameterContainer.cs. It is a public class; the inheritance chain is ParameterContainer. It exposes 17 public/protected members: 15 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ParameterContainer lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain ParameterContainer. The surface is method-led (methods 15/17, properties 1/17), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/ParameterContainer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ParameterContainer` | `public ParameterContainer()` | constructor |
| `AddParameter` | `public void AddParameter(string key, string value, bool overwriteIfExists)` | method |
| `AddParameterConcurrent` | `public void AddParameterConcurrent(string key, string value, bool overwriteIfExists)` | method |
| `AddParametersConcurrent` | `public void AddParametersConcurrent(IEnumerable<KeyValuePair<string, string>>parameters, bool overwriteIfExists)` | method |
| `ClearParameters` | `public void ClearParameters()` | method |
| `TryGetParameter` | `public bool TryGetParameter(string key, out string outValue)` | method |
| `TryGetParameterAsBool` | `public bool TryGetParameterAsBool(string key, out bool outValue)` | method |
| `TryGetParameterAsInt` | `public bool TryGetParameterAsInt(string key, out int outValue)` | method |
| `TryGetParameterAsUInt16` | `public bool TryGetParameterAsUInt16(string key, out ushort outValue)` | method |
| `TryGetParameterAsFloat` | `public bool TryGetParameterAsFloat(string key, out float outValue)` | method |
| `TryGetParameterAsByte` | `public bool TryGetParameterAsByte(string key, out byte outValue)` | method |
| `TryGetParameterAsSByte` | `public bool TryGetParameterAsSByte(string key, out sbyte outValue)` | method |
| `TryGetParameterAsVec3` | `public bool TryGetParameterAsVec3(string key, out Vec3 outValue)` | method |
| `TryGetParameterAsVec2` | `public bool TryGetParameterAsVec2(string key, out Vec2 outValue)` | method |
| `GetParameter` | `public string GetParameter(string key)` | method |
| `string>>Iterator` | `public IEnumerable<KeyValuePair<string, string>>Iterator` | property |
| `Clone` | `public ParameterContainer Clone()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
