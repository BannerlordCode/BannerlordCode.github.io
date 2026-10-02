---
title: "TWException"
description: "TWException: a public class in TaleWorlds.Library, inheriting ApplicationException; 4 exposed members (0 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/TWException.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TWException

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class TWException : ApplicationException`
**File:** `TaleWorlds.Library/TWException.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

TWException lives in the TaleWorlds.Library module, source file TaleWorlds.Library/TWException.cs. It is a public class, implementing/inheriting ApplicationException; the inheritance chain is TWException → ApplicationException. It exposes 4 public/protected members: 4 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TWException lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain TWException → ApplicationException. The surface is method-led (methods 0/4, properties 0/4), so it mostly exposes operations. ApplicationException on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/TWException.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TWException` | `public TWException(string message, Exception innerException) : base(message, innerException)` | constructor |
| `TWException` | `public TWException(string message) : base(message)` | constructor |
| `TWException` | `public TWException()` | constructor |
| `TWException` | `public TWException(SerializationInfo info, StreamingContext context) : base(info, context)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
