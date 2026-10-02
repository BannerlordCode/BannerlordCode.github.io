---
title: "INavigationElement"
description: "INavigationElement: a public interface in TaleWorlds.CampaignSystem; 10 exposed members (3 methods, 7 properties, 0 fields). Source: TaleWorlds.CampaignSystem/INavigationElement.cs."
---
# INavigationElement

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface INavigationElement`
**File:** `TaleWorlds.CampaignSystem/INavigationElement.cs`

## Overview

INavigationElement lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/INavigationElement.cs. It is a public interface; the inheritance chain is INavigationElement. It exposes 10 public/protected members: 3 methods, 7 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: INavigationElement is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain INavigationElement. The surface is property-led (properties 7/10, methods 3/10), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/INavigationElement.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StringId` | `string StringId` | property |
| `Permission` | `NavigationPermissionItem Permission` | property |
| `IsLockingNavigation` | `bool IsLockingNavigation` | property |
| `IsActive` | `bool IsActive` | property |
| `OpenView` | `void OpenView();` | method |
| `OpenView` | `void OpenView(params object[]parameters);` | method |
| `GoToLink` | `void GoToLink();` | method |
| `Tooltip` | `TextObject Tooltip` | property |
| `HasAlert` | `bool HasAlert` | property |
| `AlertTooltip` | `TextObject AlertTooltip` | property |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
