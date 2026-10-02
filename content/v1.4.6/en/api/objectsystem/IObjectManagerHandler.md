---
title: "IObjectManagerHandler"
description: "IObjectManagerHandler: a public interface in TaleWorlds.ObjectSystem; 2 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.ObjectSystem/IObjectManagerHandler.cs."
---
# IObjectManagerHandler

**Namespace:** `TaleWorlds.ObjectSystem`
**Module:** `TaleWorlds.ObjectSystem`
**Type:** `public interface IObjectManagerHandler`
**File:** `TaleWorlds.ObjectSystem/IObjectManagerHandler.cs`

## Overview

IObjectManagerHandler lives in the TaleWorlds.ObjectSystem module, source file TaleWorlds.ObjectSystem/IObjectManagerHandler.cs. It is a public interface; the inheritance chain is IObjectManagerHandler. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IObjectManagerHandler is a top-level type in TaleWorlds.ObjectSystem, namespace matching the module directory; inheritance chain IObjectManagerHandler. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.ObjectSystem/IObjectManagerHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AfterCreateObject` | `void AfterCreateObject(MBObjectBase objectBase);` | method |
| `AfterUnregisterObject` | `void AfterUnregisterObject(MBObjectBase objectBase);` | method |

## See Also

- [↑ objectsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MBCanNotCreatePresumedObjectException](../MBCanNotCreatePresumedObjectException)
- [same namespace MBGUID](../MBGUID)
- [same namespace MBIllegalRegisterException](../MBIllegalRegisterException)
- [same namespace MBInvalidReferenceException](../MBInvalidReferenceException)
