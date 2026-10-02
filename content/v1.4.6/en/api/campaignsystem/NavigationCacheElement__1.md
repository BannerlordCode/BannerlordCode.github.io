---
title: "NavigationCacheElement<T>"
description: "NavigationCacheElement<T>: a public struct in TaleWorlds.CampaignSystem, inheriting IEquatable<NavigationCacheElement<T>>; 10 exposed members (6 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCacheElement.cs."
---
# NavigationCacheElement<T>

**Namespace:** `TaleWorlds.CampaignSystem.Map.DistanceCache`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public readonly struct NavigationCacheElement<T>: IEquatable<NavigationCacheElement<T>>where T : ISettlementDataHolder`
**File:** `TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCacheElement.cs`

## Overview

NavigationCacheElement<T> lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCacheElement.cs. It is a public struct, implementing/inheriting IEquatable<NavigationCacheElement<T>>; the inheritance chain is NavigationCacheElement → IEquatable. It exposes 10 public/protected members: 6 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NavigationCacheElement<T> is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Map.DistanceCache) the module directory; inheritance chain NavigationCacheElement → IEquatable. The surface is method-led (methods 6/10, properties 3/10), so it mostly exposes operations. IEquatable on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCacheElement.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PortPosition` | `public CampaignVec2 PortPosition` | property |
| `GatePosition` | `public CampaignVec2 GatePosition` | property |
| `StringId` | `public string StringId` | property |
| `NavigationCacheElement` | `public NavigationCacheElement(T settlement, bool isPortUsed)` | constructor |
| `Sort` | `public static void Sort(ref NavigationCacheElement<T>settlement1, ref NavigationCacheElement<T>settlement2, out bool isPairChanged)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `Equals` | `public bool Equals(NavigationCacheElement<T>other)` | method |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ISettlementDataHolder](../ISettlementDataHolder)
- [same namespace NavigationCache](../NavigationCache__1)
- [same namespace SandBoxNavigationCache](../SandBoxNavigationCache)
