---
title: "HighlightsController"
description: "HighlightsController 的自动生成类参考。"
---
# HighlightsController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HighlightsController : MissionLogic `
**Base:** MissionLogic
**Source:** TaleWorlds.MountAndBlade/HighlightsController.cs

## 概述

`HighlightsController` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/HighlightsController.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### RemoveHighlights
`public static void RemoveHighlights() `

### GetHighlightTypeWithId
`public HighlightsController.HighlightType GetHighlightTypeWithId(string highlightId) `

### AfterStart
`public override void AfterStart() `

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow killingBlow) `

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent,Agent affectorAgent,WeaponComponentData attackerWeapon,bool isBlocked,bool isSiegeEngineHit,in Blow blow,in AttackCollisionData collisionData,float damagedHp,float hitDistance,float shotDifficulty) `

### OnMissionTick
`public override void OnMissionTick(float dt) `

### OnEndMission
`protected override void OnEndMission() `

### AddHighlightType
`public static void AddHighlightType(HighlightsController.HighlightType highlightType) `

### SaveHighlight
`public void SaveHighlight(HighlightsController.Highlight highlight) `
`public void SaveHighlight(HighlightsController.Highlight highlight,Vec3 position) `

### CanSaveHighlight
`public bool CanSaveHighlight(HighlightsController.HighlightType highlightType,Vec3 position) `

### GetPlayerIsLookingAtPositionScore
`public float GetPlayerIsLookingAtPositionScore(Vec3 position) `

### CanSeePosition
`public bool CanSeePosition(Vec3 position) `

### ShowSummary
`public void ShowSummary() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
