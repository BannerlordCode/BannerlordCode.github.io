---
title: "CustomBattleFactory"
description: "CustomBattleFactory: a public class in TaleWorlds.MountAndBlade.View.CustomBattle; 6 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CustomBattle/CustomBattleFactory.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomBattleFactory

**Namespace:** `TaleWorlds.MountAndBlade.View.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public static class CustomBattleFactory`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CustomBattle/CustomBattleFactory.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

CustomBattleFactory lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CustomBattle/CustomBattleFactory.cs. It is a public class; the inheritance chain is CustomBattleFactory. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleFactory lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.CustomBattle`, inheritance chain CustomBattleFactory. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CustomBattle/CustomBattleFactory.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterProvider` | `public static void RegisterProvider<T>() where T : ICustomBattleProvider, new()` | method |
| `StartCustomBattleWithProvider` | `public static void StartCustomBattleWithProvider<T>() where T : ICustomBattleProvider, new()` | method |
| `StartCustomBattle` | `public static void StartCustomBattle()` | method |
| `GetProviderCount` | `public static int GetProviderCount()` | method |
| `List` | `public static List<ICustomBattleProvider>CollectProviders()` | method |
| `CollectNextProvider` | `public static ICustomBattleProvider CollectNextProvider(Type currentProviderType)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ICustomBattleProvider](../ICustomBattleProvider/)
