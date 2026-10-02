---
title: "GOGAccessObject"
description: "GOGAccessObject: a public class in TaleWorlds.Diamond, inheriting AccessObject; 6 exposed members (0 methods, 4 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Diamond/GOGAccessObject.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GOGAccessObject

**Namespace:** `TaleWorlds.Diamond`
**Module:** `TaleWorlds.Diamond`
**Type:** `public class GOGAccessObject : AccessObject`
**File:** `TaleWorlds.Diamond/GOGAccessObject.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## Overview

GOGAccessObject lives in the TaleWorlds.Diamond module, source file TaleWorlds.Diamond/GOGAccessObject.cs. It is a public class, implementing/inheriting AccessObject; the inheritance chain is GOGAccessObject → AccessObject. It exposes 6 public/protected members: 4 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GOGAccessObject lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Diamond`), namespace `TaleWorlds.Diamond`, inheritance chain GOGAccessObject → AccessObject. The surface is property-led (properties 4/6, methods 0/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Diamond/GOGAccessObject.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GogId` | `public ulong GogId` | property |
| `OldId` | `public ulong OldId` | property |
| `UserName` | `public string UserName` | property |
| `Ticket` | `public string Ticket` | property |
| `GOGAccessObject` | `public GOGAccessObject()` | constructor |
| `GOGAccessObject` | `public GOGAccessObject(string userName, ulong gogId, ulong oldId, string ticket)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AccessObject](../AccessObject/)
- [same namespace AccessObject](../AccessObject/)
- [same namespace AccessObjectJsonConverter](../AccessObjectJsonConverter/)
- [same namespace AccessObjectResult](../AccessObjectResult/)
- [same namespace AesHelper](../AesHelper/)
