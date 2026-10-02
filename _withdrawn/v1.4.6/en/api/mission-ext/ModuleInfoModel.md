---
title: "ModuleInfoModel"
description: "ModuleInfoModel: a public class in TaleWorlds.MountAndBlade.Diamond; 9 exposed members (4 methods, 5 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/ModuleInfoModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ModuleInfoModel

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class ModuleInfoModel`
**File:** `TaleWorlds.MountAndBlade.Diamond/ModuleInfoModel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ModuleInfoModel lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/ModuleInfoModel.cs. It is a public class; the inheritance chain is ModuleInfoModel. It exposes 9 public/protected members: 4 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ModuleInfoModel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain ModuleInfoModel. The surface is property-led (properties 5/9, methods 4/9), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/ModuleInfoModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Id` | `public string Id` | property |
| `Name` | `public string Name` | property |
| `Category` | `public ModuleCategory Category` | property |
| `Version` | `public string Version` | property |
| `IsOptional` | `public bool IsOptional` | property |
| `ShouldIncludeInSession` | `public static bool ShouldIncludeInSession(ModuleInfo moduleInfo)` | method |
| `TryCreateForSession` | `public static bool TryCreateForSession(ModuleInfo moduleInfo, out ModuleInfoModel moduleInfoModel)` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
