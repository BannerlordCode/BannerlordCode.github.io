---
title: "SettlementNotificationItemBaseVM"
description: "SettlementNotificationItemBaseVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 7 exposed members (1 methods, 5 properties, 0 fields). Source: SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationItemBaseVM.cs."
---
# SettlementNotificationItemBaseVM

**Namespace:** `SandBox.ViewModelCollection.Nameplate.NameplateNotifications`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class SettlementNotificationItemBaseVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationItemBaseVM.cs`

## Overview

SettlementNotificationItemBaseVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationItemBaseVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SettlementNotificationItemBaseVM → ViewModel. It exposes 7 public/protected members: 1 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementNotificationItemBaseVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Nameplate.NameplateNotifications) the module directory; inheritance chain SettlementNotificationItemBaseVM → ViewModel. The surface is property-led (properties 5/7, methods 1/7), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Nameplate/NameplateNotifications/SettlementNotificationItemBaseVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreatedTick` | `public int CreatedTick` | property |
| `SettlementNotificationItemBaseVM` | `public SettlementNotificationItemBaseVM(Action<SettlementNotificationItemBaseVM>onRemove, int createdTick)` | constructor |
| `ExecuteRemove` | `public void ExecuteRemove()` | method |
| `CharacterName` | `public string CharacterName` | property |
| `RelationType` | `public int RelationType` | property |
| `Text` | `public string Text` | property |
| `CharacterVisual` | `public CharacterImageIdentifierVM CharacterVisual` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
