---
title: "GameMenuEventHandler"
description: "GameMenuEventHandler: a public class in TaleWorlds.CampaignSystem, inheriting Attribute; 6 exposed members (0 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameMenus/GameMenuEventHandler.cs."
---
# GameMenuEventHandler

**Namespace:** `TaleWorlds.CampaignSystem.GameMenus`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class GameMenuEventHandler : Attribute`
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuEventHandler.cs`

## Overview

GameMenuEventHandler lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameMenus/GameMenuEventHandler.cs. It is a public class, implementing/inheriting Attribute; the inheritance chain is GameMenuEventHandler → Attribute. It exposes 6 public/protected members: 4 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameMenuEventHandler is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameMenus) the module directory; inheritance chain GameMenuEventHandler → Attribute. The surface is property-led (properties 4/6, methods 0/6), so it mostly exposes state for reading. Attribute on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameMenus/GameMenuEventHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MenuId` | `public string MenuId` | property |
| `MenuOptionId` | `public string MenuOptionId` | property |
| `Type` | `public GameMenuEventHandler.EventType Type` | property |
| `GameMenuEventHandler` | `public GameMenuEventHandler(string menuId, string menuOptionId, GameMenuEventHandler.EventType type)` | constructor |
| `EventType` | `public enum EventType` | property |
| `EventType` | `public enum EventType` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GameMenu](../GameMenu)
- [same namespace GameMenuCallbackManager](../GameMenuCallbackManager)
- [same namespace GameMenuEventHandlerDelegate](../GameMenuEventHandlerDelegate)
- [same namespace GameMenuInitDelegate](../GameMenuInitDelegate)
