---
title: "SandBoxManager"
description: "SandBoxManager: a public class in TaleWorlds.CampaignSystem, inheriting GameHandler; 14 exposed members (9 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem/SandBoxManager.cs."
---
# SandBoxManager

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class SandBoxManager : GameHandler`
**File:** `TaleWorlds.CampaignSystem/SandBoxManager.cs`

## Overview

SandBoxManager lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/SandBoxManager.cs. It is a public class, implementing/inheriting GameHandler; the inheritance chain is SandBoxManager → GameHandler. It exposes 14 public/protected members: 9 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandBoxManager is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain SandBoxManager → GameHandler. The surface is method-led (methods 9/14, properties 5/14), so it mostly exposes operations. GameHandler on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/SandBoxManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
