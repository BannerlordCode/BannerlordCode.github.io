---
title: "MultiplayerGameManager"
description: "MultiplayerGameManager: a public class in TaleWorlds.MountAndBlade, inheriting MBGameManager; 7 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MultiplayerGameManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerGameManager

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade.Multiplayer`
**Type:** `public class MultiplayerGameManager : MBGameManager`
**File:** `TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MultiplayerGameManager.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MultiplayerGameManager lives in the TaleWorlds.MountAndBlade.Multiplayer module, source file TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MultiplayerGameManager.cs. It is a public class, implementing/inheriting MBGameManager; the inheritance chain is MultiplayerGameManager → MBGameManager → GameManagerBase. It exposes 7 public/protected members: 6 methods, 1 constructors. The decompiler split this type across 2 source files; the signatures are merged.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerGameManager lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MultiplayerGameManager → MBGameManager → GameManagerBase. The surface is method-led (methods 6/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MultiplayerGameManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MultiplayerGameManager` | `public MultiplayerGameManager()` | constructor |
| `DoLoadingForGameManager` | `protected override void DoLoadingForGameManager(GameManagerLoadingSteps gameManagerLoadingStep, out GameManagerLoadingSteps nextStep)` | method |
| `OnLoadFinished` | `public override void OnLoadFinished()` | method |
| `OnAfterCampaignStart` | `public override void OnAfterCampaignStart(Game game)` | method |
| `OnNewCampaignStart` | `public override void OnNewCampaignStart(Game game, object starterObject)` | method |
| `OnSessionInvitationAccepted` | `public override void OnSessionInvitationAccepted(SessionInvitationType sessionInvitationType)` | method |
| `OnPlatformRequestedMultiplayer` | `public override void OnPlatformRequestedMultiplayer()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameManager](../MBGameManager/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
