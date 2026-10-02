---
title: "ILoadingWindowManager"
description: "ILoadingWindowManager: a public interface in TaleWorlds.Engine; 5 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.Engine/ILoadingWindowManager.cs."
---
# ILoadingWindowManager

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public interface ILoadingWindowManager`
**File:** `TaleWorlds.Engine/ILoadingWindowManager.cs`

## Overview

ILoadingWindowManager lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/ILoadingWindowManager.cs. It is a public interface; the inheritance chain is ILoadingWindowManager. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ILoadingWindowManager is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain ILoadingWindowManager. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/ILoadingWindowManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EnableLoadingWindow` | `void EnableLoadingWindow();` | method |
| `DisableLoadingWindow` | `void DisableLoadingWindow();` | method |
| `SetCurrentModeIsMultiplayer` | `void SetCurrentModeIsMultiplayer(bool isMultiplayer);` | method |
| `Initialize` | `void Initialize();` | method |
| `Destroy` | `void Destroy();` | method |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
