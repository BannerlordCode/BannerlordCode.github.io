---
title: "MBExtensions"
description: "MBExtensions: a public class in TaleWorlds.MountAndBlade; 17 exposed members (17 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MBExtensions.cs."
---
# MBExtensions

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class MBExtensions`
**File:** `TaleWorlds.MountAndBlade/MBExtensions.cs`

## Overview

MBExtensions lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MBExtensions.cs. It is a public class; the inheritance chain is MBExtensions. It exposes 17 public/protected members: 17 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBExtensions is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MBExtensions. The surface is method-led (methods 17/17, properties 0/17), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MBExtensions.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetGlobalOrganicDirection` | `public static Vec2 GetGlobalOrganicDirection(this ColumnFormation columnFormation)` | method |
| `GetGlobalHeadDirection` | `public static Vec2 GetGlobalHeadDirection(this ColumnFormation columnFormation)` | method |
| `IEnumerable` | `public static IEnumerable<T>FindAllWithType<T>(this IEnumerable<GameEntity>entities) where T : ScriptComponentBehavior` | method |
| `IEnumerable` | `public static IEnumerable<T>FindAllWithType<T>(this IEnumerable<MissionObject>missionObjects) where T : MissionObject` | method |
| `List` | `public static List<GameEntity>FindAllWithCompatibleType(this IEnumerable<GameEntity>sceneProps, params Type[]types)` | method |
| `List` | `public static List<MissionObject>FindAllWithCompatibleType(this IEnumerable<MissionObject>missionObjects, params Type[]types)` | method |
| `MBList` | `public static MBList<T>CollectScriptComponentsIncludingChildrenRecursive<T>(this GameEntity entity) where T : ScriptComponentBehavior` | method |
| `MBList` | `public static MBList<T>CollectScriptComponentsIncludingChildrenRecursive<T>(this WeakGameEntity entity) where T : ScriptComponentBehavior` | method |
| `List` | `public static List<T>CollectScriptComponentsWithTagIncludingChildrenRecursive<T>(this GameEntity entity, string tag) where T : ScriptComponentBehavior` | method |
| `List` | `public static List<T>CollectScriptComponentsWithTagIncludingChildrenRecursive<T>(this WeakGameEntity entity, string tag) where T : ScriptComponentBehavior` | method |
| `List` | `public static List<GameEntity>CollectChildrenEntitiesWithTag(this GameEntity entity, string tag)` | method |
| `List` | `public static List<WeakGameEntity>CollectChildrenEntitiesWithTag(this WeakGameEntity entity, string tag)` | method |
| `GetFirstChildEntityWithName` | `public static WeakGameEntity GetFirstChildEntityWithName(this WeakGameEntity entity, string name)` | method |
| `GetFirstScriptInFamilyDescending` | `public static T GetFirstScriptInFamilyDescending<T>(this GameEntity entity) where T : ScriptComponentBehavior` | method |
| `GetFirstScriptInFamilyDescending` | `public static T GetFirstScriptInFamilyDescending<T>(this WeakGameEntity entity) where T : ScriptComponentBehavior` | method |
| `ElementAtOrValue` | `public static TSource ElementAtOrValue<TSource>(this IEnumerable<TSource>source, int index, TSource value)` | method |
| `IsOpponentOf` | `public static bool IsOpponentOf(this BattleSideEnum s, BattleSideEnum side)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
