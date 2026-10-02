---
title: "MessageDescription"
description: "MessageDescription: a public class in TaleWorlds.Diamond, inheriting Attribute; 4 exposed members (0 methods, 3 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Diamond/MessageDescription.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MessageDescription

**Namespace:** `TaleWorlds.Diamond`
**Module:** `TaleWorlds.Diamond`
**Type:** `public class MessageDescription : Attribute`
**File:** `TaleWorlds.Diamond/MessageDescription.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## Overview

MessageDescription lives in the TaleWorlds.Diamond module, source file TaleWorlds.Diamond/MessageDescription.cs. It is a public class, implementing/inheriting Attribute; the inheritance chain is MessageDescription → Attribute. It exposes 4 public/protected members: 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MessageDescription lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Diamond`), namespace `TaleWorlds.Diamond`, inheritance chain MessageDescription → Attribute. The surface is property-led (properties 3/4, methods 0/4), so it mostly exposes state for reading. Attribute on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Diamond/MessageDescription.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `To` | `public string To` | property |
| `From` | `public string From` | property |
| `EndSessionOnFail` | `public bool EndSessionOnFail` | property |
| `MessageDescription` | `public MessageDescription(string from, string to, bool endSessionOnFail = true)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AccessObject](../AccessObject/)
- [same namespace AccessObjectJsonConverter](../AccessObjectJsonConverter/)
- [same namespace AccessObjectResult](../AccessObjectResult/)
- [same namespace AesHelper](../AesHelper/)
