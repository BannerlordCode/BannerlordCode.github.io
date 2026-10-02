---
title: "TownHorseRaceAgentController"
description: "TownHorseRaceAgentController: a public class in SandBox, inheriting AgentController; 4 exposed members (4 methods, 0 properties, 0 fields). Source: SandBox/Tournaments/AgentControllers/TownHorseRaceAgentController.cs."
---
# TownHorseRaceAgentController

**Namespace:** `SandBox.Tournaments.AgentControllers`
**Module:** `SandBox`
**Type:** `public class TownHorseRaceAgentController : AgentController`
**File:** `SandBox/Tournaments/AgentControllers/TownHorseRaceAgentController.cs`

## Overview

TownHorseRaceAgentController lives in the SandBox module, source file SandBox/Tournaments/AgentControllers/TownHorseRaceAgentController.cs. It is a public class, implementing/inheriting AgentController; the inheritance chain is TownHorseRaceAgentController → AgentController. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TownHorseRaceAgentController is a top-level type in SandBox, namespace differing from (SandBox.Tournaments.AgentControllers) the module directory; inheritance chain TownHorseRaceAgentController → AgentController. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. AgentController on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Tournaments/AgentControllers/TownHorseRaceAgentController.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInitialize` | `public override void OnInitialize()` | method |
| `DisableMovement` | `public void DisableMovement()` | method |
| `Start` | `public void Start()` | method |
| `OnEnterCheckPoint` | `public void OnEnterCheckPoint(VolumeBox checkPoint)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArcheryTournamentAgentController](../ArcheryTournamentAgentController)
- [same namespace JoustingAgentController](../JoustingAgentController)
