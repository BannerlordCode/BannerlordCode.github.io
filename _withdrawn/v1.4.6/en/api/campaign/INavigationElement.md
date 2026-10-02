---
title: "INavigationElement"
description: "INavigationElement: a public interface in TaleWorlds.CampaignSystem; 10 exposed members (3 methods, 7 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/INavigationElement.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# INavigationElement

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface INavigationElement`
**File:** `TaleWorlds.CampaignSystem/INavigationElement.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

INavigationElement lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/INavigationElement.cs. It is a public interface; the inheritance chain is INavigationElement. It exposes 10 public/protected members: 3 methods, 7 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: INavigationElement lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem`, inheritance chain INavigationElement. The surface is property-led (properties 7/10, methods 3/10), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/INavigationElement.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionNotes](../ActionNotes/)
- [same namespace AIBehaviorData](../AIBehaviorData/)
- [same namespace Army](../Army/)
- [same namespace AtmosphereGrid](../AtmosphereGrid/)
