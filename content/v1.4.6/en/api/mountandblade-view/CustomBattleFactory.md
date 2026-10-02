---
title: "CustomBattleFactory"
description: "CustomBattleFactory: a public class in TaleWorlds.MountAndBlade.View; 6 exposed members (6 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CustomBattle/CustomBattleFactory.cs."
---
# CustomBattleFactory

**Namespace:** `TaleWorlds.MountAndBlade.View.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public static class CustomBattleFactory`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CustomBattle/CustomBattleFactory.cs`

## Overview

CustomBattleFactory lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CustomBattle/CustomBattleFactory.cs. It is a public class; the inheritance chain is CustomBattleFactory. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleFactory is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.CustomBattle) the module directory; inheritance chain CustomBattleFactory. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CustomBattle/CustomBattleFactory.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterProvider` | `public static void RegisterProvider<T>() where T : ICustomBattleProvider, new()` | method |
| `StartCustomBattleWithProvider` | `public static void StartCustomBattleWithProvider<T>() where T : ICustomBattleProvider, new()` | method |
| `StartCustomBattle` | `public static void StartCustomBattle()` | method |
| `GetProviderCount` | `public static int GetProviderCount()` | method |
| `List` | `public static List<ICustomBattleProvider>CollectProviders()` | method |
| `CollectNextProvider` | `public static ICustomBattleProvider CollectNextProvider(Type currentProviderType)` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ICustomBattleProvider](../ICustomBattleProvider)
