---
title: "MenuCallbackArgs"
description: "MenuCallbackArgs: a public class in TaleWorlds.CampaignSystem.GameMenus; 6 exposed members (0 methods, 2 properties, 1 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/GameMenus/MenuCallbackArgs.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MenuCallbackArgs

**Namespace:** `TaleWorlds.CampaignSystem.GameMenus`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class MenuCallbackArgs`
**File:** `TaleWorlds.CampaignSystem/GameMenus/MenuCallbackArgs.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

MenuCallbackArgs lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameMenus/MenuCallbackArgs.cs. It is a public class; the inheritance chain is MenuCallbackArgs. It exposes 6 public/protected members: 2 properties, 1 fields, 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MenuCallbackArgs lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.GameMenus`, inheritance chain MenuCallbackArgs. The surface is property-led (properties 2/6, methods 0/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameMenus/MenuCallbackArgs.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MenuContext` | `public MenuContext MenuContext` | property |
| `MapState` | `public MapState MapState` | property |
| `MenuCallbackArgs` | `public MenuCallbackArgs(MenuContext menuContext, TextObject text)` | constructor |
| `MenuCallbackArgs` | `public MenuCallbackArgs(MapState mapState, TextObject text)` | constructor |
| `MenuCallbackArgs` | `public MenuCallbackArgs(MapState mapState, TextObject text, float dt)` | constructor |
| `IsEnabled` | `public bool IsEnabled` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace GameMenu](../GameMenu/)
- [same namespace GameMenuCallbackManager](../GameMenuCallbackManager/)
- [same namespace GameMenuEventHandler](../GameMenuEventHandler/)
- [same namespace GameMenuEventHandlerDelegate](../GameMenuEventHandlerDelegate/)
