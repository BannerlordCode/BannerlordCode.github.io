---
title: "ISaveManager"
description: "ISaveManager: a public interface in TaleWorlds.CampaignSystem; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ISaveManager.cs."
---
# ISaveManager

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface ISaveManager`
**File:** `TaleWorlds.CampaignSystem/ISaveManager.cs`

## Overview

ISaveManager lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ISaveManager.cs. It is a public interface; the inheritance chain is ISaveManager. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ISaveManager is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain ISaveManager. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ISaveManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetAutoSaveInterval` | `int GetAutoSaveInterval();` | method |
| `IsAutoSaveDisabled` | `bool IsAutoSaveDisabled();` | method |
| `OnSaveOver` | `void OnSaveOver(bool isSuccessful, string newSaveGameName);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
