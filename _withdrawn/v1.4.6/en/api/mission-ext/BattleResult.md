---
title: "BattleResult"
description: "BattleResult: a public class in TaleWorlds.MountAndBlade.Diamond; 12 exposed members (6 methods, 5 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/BattleResult.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BattleResult

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class BattleResult`
**File:** `TaleWorlds.MountAndBlade.Diamond/BattleResult.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BattleResult lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/BattleResult.cs. It is a public class; the inheritance chain is BattleResult. It exposes 12 public/protected members: 6 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleResult lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain BattleResult. The surface is method-led (methods 6/12, properties 5/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/BattleResult.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BattleResult` | `public BattleResult()` | constructor |
| `AddOrUpdatePlayerEntry` | `public void AddOrUpdatePlayerEntry(PlayerId playerId, int teamNo, string gameMode, Guid party, int overriddenInitialPlayTime = -1)` | method |
| `TryGetPlayerEntry` | `public bool TryGetPlayerEntry(PlayerId playerId, out BattlePlayerEntry battlePlayerEntry)` | method |
| `HandlePlayerDisconnect` | `public void HandlePlayerDisconnect(PlayerId playerId)` | method |
| `DebugPrint` | `public void DebugPrint()` | method |
| `SetBattleFinished` | `public void SetBattleFinished(int winnerTeamNo, bool isPremadeGame, PremadeGameType premadeGameType)` | method |
| `SetBattleCancelled` | `public void SetBattleCancelled()` | method |
| `IsCancelled` | `public bool IsCancelled` | property |
| `WinnerTeamNo` | `public int WinnerTeamNo` | property |
| `IsPremadeGame` | `public bool IsPremadeGame` | property |
| `PremadeGameType` | `public PremadeGameType PremadeGameType` | property |
| `BattlePlayerEntry>PlayerEntries` | `public Dictionary<string, BattlePlayerEntry>PlayerEntries` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
