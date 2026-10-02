---
title: "NavigationCacheElement<T>"
description: "NavigationCacheElement<T>: a public struct in TaleWorlds.CampaignSystem.Map.DistanceCache, inheriting IEquatable<NavigationCacheElement<T>>; 10 exposed members (6 methods, 3 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCacheElement.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NavigationCacheElement<T>

**Namespace:** `TaleWorlds.CampaignSystem.Map.DistanceCache`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public readonly struct NavigationCacheElement<T>: IEquatable<NavigationCacheElement<T>>where T : ISettlementDataHolder`
**File:** `TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCacheElement.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

NavigationCacheElement<T> lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCacheElement.cs. It is a public struct, implementing/inheriting IEquatable<NavigationCacheElement<T>>; the inheritance chain is NavigationCacheElement → IEquatable. It exposes 10 public/protected members: 6 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NavigationCacheElement<T> lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.Map.DistanceCache`, inheritance chain NavigationCacheElement → IEquatable. The surface is method-led (methods 6/10, properties 3/10), so it mostly exposes operations. IEquatable on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Map/DistanceCache/NavigationCacheElement.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ISettlementDataHolder](../ISettlementDataHolder/)
- [same namespace NavigationCache](../NavigationCache__1/)
- [same namespace SandBoxNavigationCache](../SandBoxNavigationCache/)
