---
title: "HighlightsController"
description: "HighlightsController: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 20 exposed members (14 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade/HighlightsController.cs."
---
# HighlightsController

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class HighlightsController : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/HighlightsController.cs`

## Overview

HighlightsController lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/HighlightsController.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is HighlightsController → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 20 public/protected members: 14 methods, 4 properties, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HighlightsController is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain HighlightsController → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 14/20, properties 4/20), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/HighlightsController.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsHighlightsInitialized` | `public static bool IsHighlightsInitialized` | property |
| `IsAnyHighlightSaved` | `public bool IsAnyHighlightSaved` | property |
| `RemoveHighlights` | `public static void RemoveHighlights()` | method |
| `GetHighlightTypeWithId` | `public HighlightsController.HighlightType GetHighlightTypeWithId(string highlightId)` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |
| `OnScoreHit` | `public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `AddHighlightType` | `public static void AddHighlightType(HighlightsController.HighlightType highlightType)` | method |
| `SaveHighlight` | `public void SaveHighlight(HighlightsController.Highlight highlight)` | method |
| `SaveHighlight` | `public void SaveHighlight(HighlightsController.Highlight highlight, Vec3 position)` | method |
| `CanSaveHighlight` | `public bool CanSaveHighlight(HighlightsController.HighlightType highlightType, Vec3 position)` | method |
| `GetPlayerIsLookingAtPositionScore` | `public float GetPlayerIsLookingAtPositionScore(Vec3 position)` | method |
| `CanSeePosition` | `public bool CanSeePosition(Vec3 position)` | method |
| `ShowSummary` | `public void ShowSummary()` | method |
| `HighlightType` | `public struct HighlightType` | property |
| `Highlight` | `public struct Highlight` | property |
| `HighlightType` | `public struct HighlightType` | nested type |
| `Highlight` | `public struct Highlight` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
