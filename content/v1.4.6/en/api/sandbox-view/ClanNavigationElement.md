---
title: "ClanNavigationElement"
description: "ClanNavigationElement: a public class in SandBox.View, inheriting MapNavigationElementBase; 12 exposed members (7 methods, 4 properties, 0 fields). Source: SandBox.View/Map/Navigation/NavigationElements/ClanNavigationElement.cs."
---
# ClanNavigationElement

**Namespace:** `SandBox.View.Map.Navigation.NavigationElements`
**Module:** `SandBox.View`
**Type:** `public class ClanNavigationElement : MapNavigationElementBase`
**File:** `SandBox.View/Map/Navigation/NavigationElements/ClanNavigationElement.cs`

## Overview

ClanNavigationElement lives in the SandBox.View module, source file SandBox.View/Map/Navigation/NavigationElements/ClanNavigationElement.cs. It is a public class, implementing/inheriting MapNavigationElementBase; the inheritance chain is ClanNavigationElement → MapNavigationElementBase → INavigationElement. It exposes 12 public/protected members: 7 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanNavigationElement is a top-level type in SandBox.View, namespace differing from (SandBox.View.Map.Navigation.NavigationElements) the module directory; inheritance chain ClanNavigationElement → MapNavigationElementBase → INavigationElement. The surface is method-led (methods 7/12, properties 4/12), so it mostly exposes operations. INavigationElement on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/Navigation/NavigationElements/ClanNavigationElement.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StringId` | `public override string StringId` | property |
| `IsActive` | `public override bool IsActive` | property |
| `IsLockingNavigation` | `public override bool IsLockingNavigation` | property |
| `HasAlert` | `public override bool HasAlert` | property |
| `ClanNavigationElement` | `public ClanNavigationElement(MapNavigationHandler handler) : base(handler)` | constructor |
| `GetPermission` | `protected override NavigationPermissionItem GetPermission()` | method |
| `GetTooltip` | `protected override TextObject GetTooltip()` | method |
| `GetAlertTooltip` | `protected override TextObject GetAlertTooltip()` | method |
| `OpenView` | `public override void OpenView()` | method |
| `OpenView` | `public override void OpenView(params object[]parameters)` | method |
| `GoToLink` | `public override void GoToLink()` | method |
| `OnClanScreenPermission` | `public void OnClanScreenPermission(bool isAvailable, TextObject reasonString)` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MapNavigationElementBase](../MapNavigationElementBase)
- [same namespace CharacterDeveloperNavigationElement](../CharacterDeveloperNavigationElement)
- [same namespace ClanScreenPermissionEvent](../ClanScreenPermissionEvent)
- [same namespace EscapeMenuNavigationElement](../EscapeMenuNavigationElement)
- [same namespace InventoryNavigationElement](../InventoryNavigationElement)
