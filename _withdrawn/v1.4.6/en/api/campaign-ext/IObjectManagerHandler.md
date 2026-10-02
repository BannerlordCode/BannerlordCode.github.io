---
title: "IObjectManagerHandler"
description: "IObjectManagerHandler: a public interface in TaleWorlds.ObjectSystem; 2 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.ObjectSystem/IObjectManagerHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IObjectManagerHandler

**Namespace:** `TaleWorlds.ObjectSystem`
**Module:** `TaleWorlds.ObjectSystem`
**Type:** `public interface IObjectManagerHandler`
**File:** `TaleWorlds.ObjectSystem/IObjectManagerHandler.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.ObjectSystem)

## Overview

IObjectManagerHandler lives in the TaleWorlds.ObjectSystem module, source file TaleWorlds.ObjectSystem/IObjectManagerHandler.cs. It is a public interface; the inheritance chain is IObjectManagerHandler. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IObjectManagerHandler lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.ObjectSystem`), namespace `TaleWorlds.ObjectSystem`, inheritance chain IObjectManagerHandler. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.ObjectSystem/IObjectManagerHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AfterCreateObject` | `void AfterCreateObject(MBObjectBase objectBase);` | method |
| `AfterUnregisterObject` | `void AfterUnregisterObject(MBObjectBase objectBase);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MBCanNotCreatePresumedObjectException](../MBCanNotCreatePresumedObjectException/)
- [same namespace MBGUID](../MBGUID/)
- [same namespace MBIllegalRegisterException](../MBIllegalRegisterException/)
- [same namespace MBInvalidReferenceException](../MBInvalidReferenceException/)
