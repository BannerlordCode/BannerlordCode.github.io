---
title: "BannerIconGroup"
description: "BannerIconGroup: a public class in TaleWorlds.Core; 5 exposed members (2 methods, 3 properties, 0 fields). Source: TaleWorlds.Core/BannerIconGroup.cs."
---
# BannerIconGroup

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class BannerIconGroup`
**File:** `TaleWorlds.Core/BannerIconGroup.cs`

## Overview

BannerIconGroup lives in the TaleWorlds.Core module, source file TaleWorlds.Core/BannerIconGroup.cs. It is a public class; the inheritance chain is BannerIconGroup. It exposes 5 public/protected members: 2 methods, 3 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerIconGroup is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain BannerIconGroup. The surface is property-led (properties 3/5, methods 2/5), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/BannerIconGroup.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `public TextObject Name` | property |
| `IsPattern` | `public bool IsPattern` | property |
| `Id` | `public int Id` | property |
| `Deserialize` | `public void Deserialize(XmlNode xmlNode, MBList<BannerIconGroup>previouslyAddedGroups)` | method |
| `Merge` | `public void Merge(BannerIconGroup otherGroup)` | method |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
