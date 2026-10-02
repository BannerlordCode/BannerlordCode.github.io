---
title: "GameMenuInitializationHandler"
description: "GameMenuInitializationHandler: a public class in TaleWorlds.CampaignSystem, inheriting Attribute; 2 exposed members (0 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameMenus/GameMenuInitializationHandler.cs."
---
# GameMenuInitializationHandler

**Namespace:** `TaleWorlds.CampaignSystem.GameMenus`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class GameMenuInitializationHandler : Attribute`
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuInitializationHandler.cs`

## Overview

GameMenuInitializationHandler lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameMenus/GameMenuInitializationHandler.cs. It is a public class, implementing/inheriting Attribute; the inheritance chain is GameMenuInitializationHandler → Attribute. It exposes 2 public/protected members: 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameMenuInitializationHandler is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameMenus) the module directory; inheritance chain GameMenuInitializationHandler → Attribute. The surface is property-led (properties 1/2, methods 0/2), so it mostly exposes state for reading. Attribute on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameMenus/GameMenuInitializationHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MenuId` | `public string MenuId` | property |
| `GameMenuInitializationHandler` | `public GameMenuInitializationHandler(string menuId)` | constructor |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GameMenu](../GameMenu)
- [same namespace GameMenuCallbackManager](../GameMenuCallbackManager)
- [same namespace GameMenuEventHandler](../GameMenuEventHandler)
- [same namespace GameMenuEventHandlerDelegate](../GameMenuEventHandlerDelegate)
