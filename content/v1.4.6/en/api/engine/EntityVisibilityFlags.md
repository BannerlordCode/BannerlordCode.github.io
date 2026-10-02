---
title: "EntityVisibilityFlags"
description: "EntityVisibilityFlags: a public enum in TaleWorlds.Engine, inheriting uint; 5 exposed members (0 methods, 0 properties, 0 fields). Source: TaleWorlds.Engine/EntityVisibilityFlags.cs."
---
# EntityVisibilityFlags

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public enum EntityVisibilityFlags : uint`
**File:** `TaleWorlds.Engine/EntityVisibilityFlags.cs`

## Overview

EntityVisibilityFlags lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/EntityVisibilityFlags.cs. It is a public enum, implementing/inheriting uint; the inheritance chain is EntityVisibilityFlags → uint. It exposes 5 public/protected members: 5 enum values.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EntityVisibilityFlags is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain EntityVisibilityFlags → uint. The surface is method-led (methods 0/5, properties 0/5), so it mostly exposes operations. uint on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/EntityVisibilityFlags.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `0U` | `None == 0U` | enum value |
| `2U` | `VisibleOnlyWhenEditing == 2U` | enum value |
| `4U` | `NoShadow == 4U` | enum value |
| `8U` | `VisibleOnlyForEnvmap == 8U` | enum value |
| `16U` | `NotVisibleForEnvmap == 16U` | enum value |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)
