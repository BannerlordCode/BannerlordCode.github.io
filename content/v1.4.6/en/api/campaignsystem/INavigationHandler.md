---
title: "INavigationHandler"
description: "INavigationHandler: a public interface in TaleWorlds.CampaignSystem; 4 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/INavigationHandler.cs."
---
# INavigationHandler

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface INavigationHandler`
**File:** `TaleWorlds.CampaignSystem/INavigationHandler.cs`

## Overview

INavigationHandler lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/INavigationHandler.cs. It is a public interface; the inheritance chain is INavigationHandler. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: INavigationHandler is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain INavigationHandler. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/INavigationHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsNavigationLocked` | `bool IsNavigationLocked` | property |
| `INavigationElement[]GetElements` | `INavigationElement[]GetElements();` | method |
| `GetElement` | `INavigationElement GetElement(string id);` | method |
| `IsAnyElementActive` | `bool IsAnyElementActive();` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
