---
title: "ParameterFile"
description: "ParameterFile: a public class in TaleWorlds.Library; 6 exposed members (2 methods, 3 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/ParameterFile.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ParameterFile

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class ParameterFile`
**File:** `TaleWorlds.Library/ParameterFile.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

ParameterFile lives in the TaleWorlds.Library module, source file TaleWorlds.Library/ParameterFile.cs. It is a public class; the inheritance chain is ParameterFile. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ParameterFile lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain ParameterFile. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/ParameterFile.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Path` | `public string Path` | property |
| `LastCheckedTime` | `public DateTime LastCheckedTime` | property |
| `ParameterContainer` | `public ParameterContainer ParameterContainer` | property |
| `ParameterFile` | `public ParameterFile(string path)` | constructor |
| `CheckIfNeedsToBeRefreshed` | `public bool CheckIfNeedsToBeRefreshed()` | method |
| `Refresh` | `public void Refresh()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
