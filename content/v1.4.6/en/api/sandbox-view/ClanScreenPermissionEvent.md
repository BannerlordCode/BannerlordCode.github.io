---
title: "ClanScreenPermissionEvent"
description: "ClanScreenPermissionEvent: a public class in SandBox.View, inheriting EventBase; 2 exposed members (0 methods, 1 properties, 0 fields). Source: SandBox.View/Map/Navigation/NavigationElements/ClanScreenPermissionEvent.cs."
---
# ClanScreenPermissionEvent

**Namespace:** `SandBox.View.Map.Navigation.NavigationElements`
**Module:** `SandBox.View`
**Type:** `public class ClanScreenPermissionEvent : EventBase`
**File:** `SandBox.View/Map/Navigation/NavigationElements/ClanScreenPermissionEvent.cs`

## Overview

ClanScreenPermissionEvent lives in the SandBox.View module, source file SandBox.View/Map/Navigation/NavigationElements/ClanScreenPermissionEvent.cs. It is a public class, implementing/inheriting EventBase; the inheritance chain is ClanScreenPermissionEvent → EventBase. It exposes 2 public/protected members: 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanScreenPermissionEvent is a top-level type in SandBox.View, namespace differing from (SandBox.View.Map.Navigation.NavigationElements) the module directory; inheritance chain ClanScreenPermissionEvent → EventBase. The surface is property-led (properties 1/2, methods 0/2), so it mostly exposes state for reading. EventBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/Navigation/NavigationElements/ClanScreenPermissionEvent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TextObject>IsClanScreenAvailable` | `public Action<bool, TextObject>IsClanScreenAvailable` | property |
| `ClanScreenPermissionEvent` | `public ClanScreenPermissionEvent(Action<bool, TextObject>isClanScreenAvailable)` | constructor |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterDeveloperNavigationElement](../CharacterDeveloperNavigationElement)
- [same namespace ClanNavigationElement](../ClanNavigationElement)
- [same namespace EscapeMenuNavigationElement](../EscapeMenuNavigationElement)
- [same namespace InventoryNavigationElement](../InventoryNavigationElement)
