---
title: "VirtualFileAttribute"
description: "VirtualFileAttribute: a public class in TaleWorlds.Library, inheriting Attribute; 3 exposed members (0 methods, 2 properties, 0 fields). Source: TaleWorlds.Library/VirtualFileAttribute.cs."
---
# VirtualFileAttribute

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class VirtualFileAttribute : Attribute`
**File:** `TaleWorlds.Library/VirtualFileAttribute.cs`

## Overview

VirtualFileAttribute lives in the TaleWorlds.Library module, source file TaleWorlds.Library/VirtualFileAttribute.cs. It is a public class, implementing/inheriting Attribute; the inheritance chain is VirtualFileAttribute → Attribute. It exposes 3 public/protected members: 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VirtualFileAttribute is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain VirtualFileAttribute → Attribute. The surface is property-led (properties 2/3, methods 0/3), so it mostly exposes state for reading. Attribute on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/VirtualFileAttribute.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `public string Name` | property |
| `Content` | `public string Content` | property |
| `VirtualFileAttribute` | `public VirtualFileAttribute(string name, string content)` | constructor |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
