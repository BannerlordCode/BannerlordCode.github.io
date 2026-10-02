---
title: "SteamAccessObject"
description: "SteamAccessObject: a public class in TaleWorlds.Diamond, inheriting AccessObject; 5 exposed members (0 methods, 3 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Diamond/SteamAccessObject.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SteamAccessObject

**Namespace:** `TaleWorlds.Diamond`
**Module:** `TaleWorlds.Diamond`
**Type:** `public class SteamAccessObject : AccessObject`
**File:** `TaleWorlds.Diamond/SteamAccessObject.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## Overview

SteamAccessObject lives in the TaleWorlds.Diamond module, source file TaleWorlds.Diamond/SteamAccessObject.cs. It is a public class, implementing/inheriting AccessObject; the inheritance chain is SteamAccessObject → AccessObject. It exposes 5 public/protected members: 3 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SteamAccessObject lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Diamond`), namespace `TaleWorlds.Diamond`, inheritance chain SteamAccessObject → AccessObject. The surface is property-led (properties 3/5, methods 0/5), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Diamond/SteamAccessObject.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `UserName` | `public string UserName` | property |
| `ExternalAccessToken` | `public string ExternalAccessToken` | property |
| `AppId` | `public int AppId` | property |
| `SteamAccessObject` | `public SteamAccessObject()` | constructor |
| `SteamAccessObject` | `public SteamAccessObject(string userName, string externalAccessToken, int appId)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AccessObject](../AccessObject/)
- [same namespace AccessObject](../AccessObject/)
- [same namespace AccessObjectJsonConverter](../AccessObjectJsonConverter/)
- [same namespace AccessObjectResult](../AccessObjectResult/)
- [same namespace AesHelper](../AesHelper/)
