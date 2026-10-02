---
title: "SandBoxManager"
description: "SandBoxManager: a public class in TaleWorlds.CampaignSystem, inheriting GameHandler; 14 exposed members (9 methods, 5 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/SandBoxManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandBoxManager

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class SandBoxManager : GameHandler`
**File:** `TaleWorlds.CampaignSystem/SandBoxManager.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

SandBoxManager lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/SandBoxManager.cs. It is a public class, implementing/inheriting GameHandler; the inheritance chain is SandBoxManager → GameHandler → IEntityComponent. It exposes 14 public/protected members: 9 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandBoxManager lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem`, inheritance chain SandBoxManager → GameHandler → IEntityComponent. The surface is method-led (methods 9/14, properties 5/14), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/SandBoxManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SandBoxMissionManager` | `public ISandBoxMissionManager SandBoxMissionManager` | property |
| `AgentBehaviorManager` | `public IAgentBehaviorManager AgentBehaviorManager` | property |
| `SandBoxSaveManager` | `public ISaveManager SandBoxSaveManager` | property |
| `Instance` | `public static SandBoxManager Instance` | property |
| `GameStarter` | `public CampaignGameStarter GameStarter` | property |
| `Initialize` | `public void Initialize(CampaignGameStarter gameStarter)` | method |
| `OnCampaignStart` | `public void OnCampaignStart(CampaignGameStarter gameInitializer, GameManagerBase gameManager, bool isSavedCampaign)` | method |
| `OnGameStart` | `protected override void OnGameStart()` | method |
| `OnGameEnd` | `protected override void OnGameEnd()` | method |
| `InitializeSandboxXMLs` | `public void InitializeSandboxXMLs(bool isSavedCampaign)` | method |
| `InitializeCharactersAfterLoad` | `public void InitializeCharactersAfterLoad(bool isSavedCampaign)` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `OnBeforeSave` | `public override void OnBeforeSave()` | method |
| `OnAfterSave` | `public override void OnAfterSave()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameHandler](../../core-extra/GameHandler/)
- [same namespace ActionNotes](../ActionNotes/)
- [same namespace AIBehaviorData](../AIBehaviorData/)
- [same namespace Army](../Army/)
- [same namespace AtmosphereGrid](../AtmosphereGrid/)
