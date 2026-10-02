---
title: "IEncyclopediaLog"
description: "IEncyclopediaLog: a public interface in TaleWorlds.CampaignSystem.LogEntries; 3 exposed members (2 methods, 1 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/LogEntries/IEncyclopediaLog.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IEncyclopediaLog

**Namespace:** `TaleWorlds.CampaignSystem.LogEntries`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IEncyclopediaLog`
**File:** `TaleWorlds.CampaignSystem/LogEntries/IEncyclopediaLog.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

IEncyclopediaLog lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/LogEntries/IEncyclopediaLog.cs. It is a public interface; the inheritance chain is IEncyclopediaLog. It exposes 3 public/protected members: 2 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IEncyclopediaLog lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.LogEntries`, inheritance chain IEncyclopediaLog. The surface is method-led (methods 2/3, properties 1/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/LogEntries/IEncyclopediaLog.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsVisibleInEncyclopediaPageOf` | `bool IsVisibleInEncyclopediaPageOf<T>(T obj) where T : MBObjectBase;` | method |
| `GetEncyclopediaText` | `TextObject GetEncyclopediaText();` | method |
| `GameTime` | `CampaignTime GameTime` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ArmyCreationLogEntry](../ArmyCreationLogEntry/)
- [same namespace ArmyDispersionLogEntry](../ArmyDispersionLogEntry/)
- [same namespace BattleStartedLogEntry](../BattleStartedLogEntry/)
- [same namespace BesiegeSettlementLogEntry](../BesiegeSettlementLogEntry/)
