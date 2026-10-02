---
title: "BasicAreaIndicator"
description: "BasicAreaIndicator: a public class in SandBox, inheriting AreaMarker; 6 exposed members (4 methods, 1 properties, 1 fields). Source: SandBox/Objects/AreaMarkers/BasicAreaIndicator.cs."
---
# BasicAreaIndicator

**Namespace:** `SandBox.Objects.AreaMarkers`
**Module:** `SandBox`
**Type:** `public class BasicAreaIndicator : AreaMarker`
**File:** `SandBox/Objects/AreaMarkers/BasicAreaIndicator.cs`

## Overview

BasicAreaIndicator lives in the SandBox module, source file SandBox/Objects/AreaMarkers/BasicAreaIndicator.cs. It is a public class, implementing/inheriting AreaMarker; the inheritance chain is BasicAreaIndicator → AreaMarker. It exposes 6 public/protected members: 4 methods, 1 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BasicAreaIndicator is a top-level type in SandBox, namespace differing from (SandBox.Objects.AreaMarkers) the module directory; inheritance chain BasicAreaIndicator → AreaMarker. The surface is method-led (methods 4/6, properties 1/6), so it mostly exposes operations. AreaMarker on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/AreaMarkers/BasicAreaIndicator.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsActive` | `public bool IsActive` | property |
| `OnInit` | `protected override void OnInit()` | method |
| `SetIsActive` | `public void SetIsActive(bool isActive)` | method |
| `SetOverriddenName` | `public void SetOverriddenName(TextObject name)` | method |
| `GetName` | `public override TextObject GetName()` | method |
| `NameStringId` | `public string NameStringId` | field |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimatedBasicAreaIndicator](../AnimatedBasicAreaIndicator)
- [same namespace CommonAreaMarker](../CommonAreaMarker)
- [same namespace StealthAreaMarker](../StealthAreaMarker)
- [same namespace WorkshopAreaMarker](../WorkshopAreaMarker)
