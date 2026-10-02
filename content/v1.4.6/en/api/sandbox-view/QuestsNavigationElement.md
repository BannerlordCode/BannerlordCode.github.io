---
title: "QuestsNavigationElement"
description: "QuestsNavigationElement: a public class in SandBox.View, inheriting MapNavigationElementBase; 11 exposed members (6 methods, 4 properties, 0 fields). Source: SandBox.View/Map/Navigation/NavigationElements/QuestsNavigationElement.cs."
---
# QuestsNavigationElement

**Namespace:** `SandBox.View.Map.Navigation.NavigationElements`
**Module:** `SandBox.View`
**Type:** `public class QuestsNavigationElement : MapNavigationElementBase`
**File:** `SandBox.View/Map/Navigation/NavigationElements/QuestsNavigationElement.cs`

## Overview

QuestsNavigationElement lives in the SandBox.View module, source file SandBox.View/Map/Navigation/NavigationElements/QuestsNavigationElement.cs. It is a public class, implementing/inheriting MapNavigationElementBase; the inheritance chain is QuestsNavigationElement → MapNavigationElementBase → INavigationElement. It exposes 11 public/protected members: 6 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: QuestsNavigationElement is a top-level type in SandBox.View, namespace differing from (SandBox.View.Map.Navigation.NavigationElements) the module directory; inheritance chain QuestsNavigationElement → MapNavigationElementBase → INavigationElement. The surface is method-led (methods 6/11, properties 4/11), so it mostly exposes operations. INavigationElement on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/Navigation/NavigationElements/QuestsNavigationElement.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StringId` | `public override string StringId` | property |
| `IsActive` | `public override bool IsActive` | property |
| `IsLockingNavigation` | `public override bool IsLockingNavigation` | property |
| `HasAlert` | `public override bool HasAlert` | property |
| `QuestsNavigationElement` | `public QuestsNavigationElement(MapNavigationHandler handler) : base(handler)` | constructor |
| `GetPermission` | `protected override NavigationPermissionItem GetPermission()` | method |
| `GetTooltip` | `protected override TextObject GetTooltip()` | method |
| `GetAlertTooltip` | `protected override TextObject GetAlertTooltip()` | method |
| `OpenView` | `public override void OpenView()` | method |
| `OpenView` | `public override void OpenView(params object[]parameters)` | method |
| `GoToLink` | `public override void GoToLink()` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MapNavigationElementBase](../MapNavigationElementBase)
- [same namespace CharacterDeveloperNavigationElement](../CharacterDeveloperNavigationElement)
- [same namespace ClanNavigationElement](../ClanNavigationElement)
- [same namespace ClanScreenPermissionEvent](../ClanScreenPermissionEvent)
- [same namespace EscapeMenuNavigationElement](../EscapeMenuNavigationElement)
