---
title: "ObjectInstanceTracker"
description: "ObjectInstanceTracker: a public class in TaleWorlds.Library; 2 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.Library/ObjectInstanceTracker.cs."
---
# ObjectInstanceTracker

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class ObjectInstanceTracker`
**File:** `TaleWorlds.Library/ObjectInstanceTracker.cs`

## Overview

ObjectInstanceTracker lives in the TaleWorlds.Library module, source file TaleWorlds.Library/ObjectInstanceTracker.cs. It is a public class; the inheritance chain is ObjectInstanceTracker. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ObjectInstanceTracker is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain ObjectInstanceTracker. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/ObjectInstanceTracker.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterTrackedInstance` | `public static void RegisterTrackedInstance(string name, WeakReference instance)` | method |
| `CheckBlacklistedTypeCounts` | `public static bool CheckBlacklistedTypeCounts(Dictionary<string, int>typeNameCounts, ref string outputLog)` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
