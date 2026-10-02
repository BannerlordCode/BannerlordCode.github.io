---
title: "MessageManagerBase"
description: "MessageManagerBase: a public class in TaleWorlds.Engine, inheriting DotNetObject; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.Engine/MessageManagerBase.cs."
---
# MessageManagerBase

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public abstract class MessageManagerBase : DotNetObject`
**File:** `TaleWorlds.Engine/MessageManagerBase.cs`

## Overview

MessageManagerBase lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/MessageManagerBase.cs. It is a public class (abstract), implementing/inheriting DotNetObject; the inheritance chain is MessageManagerBase → DotNetObject. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MessageManagerBase is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain MessageManagerBase → DotNetObject. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. DotNetObject on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/MessageManagerBase.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PostWarningLine` | `protected internal abstract void PostWarningLine(string text);` | method |
| `PostSuccessLine` | `protected internal abstract void PostSuccessLine(string text);` | method |
| `PostMessageLineFormatted` | `protected internal abstract void PostMessageLineFormatted(string text, uint color);` | method |
| `PostMessageLine` | `protected internal abstract void PostMessageLine(string text, uint color);` | method |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
