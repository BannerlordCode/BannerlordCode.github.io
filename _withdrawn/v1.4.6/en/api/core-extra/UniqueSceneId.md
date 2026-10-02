---
title: "UniqueSceneId"
description: "UniqueSceneId: a public class in TaleWorlds.Library; 5 exposed members (2 methods, 2 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/UniqueSceneId.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# UniqueSceneId

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class UniqueSceneId`
**File:** `TaleWorlds.Library/UniqueSceneId.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

UniqueSceneId lives in the TaleWorlds.Library module, source file TaleWorlds.Library/UniqueSceneId.cs. It is a public class; the inheritance chain is UniqueSceneId. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: UniqueSceneId lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain UniqueSceneId. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/UniqueSceneId.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `UniqueToken` | `public string UniqueToken` | property |
| `Revision` | `public string Revision` | property |
| `UniqueSceneId` | `public UniqueSceneId(string uniqueToken, string revision)` | constructor |
| `Serialize` | `public string Serialize()` | method |
| `TryParse` | `public static bool TryParse(string uniqueMapId, out UniqueSceneId identifiers)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
