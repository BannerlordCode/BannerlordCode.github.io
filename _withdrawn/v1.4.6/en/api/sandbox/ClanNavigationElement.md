---
title: "ClanNavigationElement"
description: "ClanNavigationElement: a public class in SandBox.View.Map.Navigation.NavigationElements, inheriting MapNavigationElementBase; 12 exposed members (7 methods, 4 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.View/Map/Navigation/NavigationElements/ClanNavigationElement.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanNavigationElement

**Namespace:** `SandBox.View.Map.Navigation.NavigationElements`
**Module:** `SandBox.View`
**Type:** `public class ClanNavigationElement : MapNavigationElementBase`
**File:** `SandBox.View/Map/Navigation/NavigationElements/ClanNavigationElement.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

ClanNavigationElement lives in the SandBox.View module, source file SandBox.View/Map/Navigation/NavigationElements/ClanNavigationElement.cs. It is a public class, implementing/inheriting MapNavigationElementBase; the inheritance chain is ClanNavigationElement → MapNavigationElementBase → INavigationElement. It exposes 12 public/protected members: 7 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanNavigationElement lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.View.Map.Navigation.NavigationElements`, inheritance chain ClanNavigationElement → MapNavigationElementBase → INavigationElement. The surface is method-led (methods 7/12, properties 4/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/Navigation/NavigationElements/ClanNavigationElement.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MapNavigationElementBase](../MapNavigationElementBase/)
- [same namespace CharacterDeveloperNavigationElement](../CharacterDeveloperNavigationElement/)
- [same namespace ClanScreenPermissionEvent](../ClanScreenPermissionEvent/)
- [same namespace EscapeMenuNavigationElement](../EscapeMenuNavigationElement/)
- [same namespace InventoryNavigationElement](../InventoryNavigationElement/)
