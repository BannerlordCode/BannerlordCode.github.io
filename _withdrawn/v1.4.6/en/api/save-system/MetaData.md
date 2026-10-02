---
title: "MetaData"
description: "MetaData: a public class in TaleWorlds.SaveSystem; 7 exposed members (5 methods, 2 properties, 0 fields). Canonical bucket save-system. Source: TaleWorlds.SaveSystem/MetaData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MetaData

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class MetaData`
**File:** `TaleWorlds.SaveSystem/MetaData.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## Overview

MetaData lives in the TaleWorlds.SaveSystem module, source file TaleWorlds.SaveSystem/MetaData.cs. It is a public class; the inheritance chain is MetaData. It exposes 7 public/protected members: 5 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MetaData lands in canonical bucket `save-system` (matched rule `rule:TaleWorlds.SaveSystem`), namespace `TaleWorlds.SaveSystem`, inheritance chain MetaData. The surface is method-led (methods 5/7, properties 2/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.SaveSystem/MetaData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Add` | `public void Add(string key, string value)` | method |
| `Count` | `public int Count` | property |
| `TryGetValue` | `public bool TryGetValue(string key, out string value)` | method |
| `this[...]` | `public string this[string key]` | indexer |
| `Keys` | `public Dictionary<string, string>.KeyCollection Keys` | property |
| `Serialize` | `public void Serialize(Stream stream)` | method |
| `Deserialize` | `public static MetaData Deserialize(Stream stream)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AsyncFileSaveDriver](../AsyncFileSaveDriver/)
- [same namespace ContainerType](../ContainerType/)
- [same namespace EntryId](../EntryId/)
- [same namespace FileDriver](../FileDriver/)
