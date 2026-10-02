---
title: "IWarLog"
description: "IWarLog: a public interface in TaleWorlds.CampaignSystem; 1 exposed members (1 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/LogEntries/IWarLog.cs."
---
# IWarLog

**Namespace:** `TaleWorlds.CampaignSystem.LogEntries`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IWarLog`
**File:** `TaleWorlds.CampaignSystem/LogEntries/IWarLog.cs`

## Overview

IWarLog lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/LogEntries/IWarLog.cs. It is a public interface; the inheritance chain is IWarLog. It exposes 1 public/protected members: 1 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IWarLog is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.LogEntries) the module directory; inheritance chain IWarLog. The surface is method-led (methods 1/1, properties 0/1), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/LogEntries/IWarLog.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsRelatedToWar` | `bool IsRelatedToWar(StanceLink stance, out IFaction effector, out IFaction effected);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyCreationLogEntry](../ArmyCreationLogEntry)
- [same namespace ArmyDispersionLogEntry](../ArmyDispersionLogEntry)
- [same namespace BattleStartedLogEntry](../BattleStartedLogEntry)
- [same namespace BesiegeSettlementLogEntry](../BesiegeSettlementLogEntry)
