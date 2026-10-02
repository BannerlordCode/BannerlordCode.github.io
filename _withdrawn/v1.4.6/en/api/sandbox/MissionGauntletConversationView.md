---
title: "MissionGauntletConversationView"
description: "MissionGauntletConversationView: a public class in SandBox.GauntletUI.Missions, inheriting MissionView, IConversationStateHandler; 7 exposed members (5 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/Missions/MissionGauntletConversationView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionGauntletConversationView

**Namespace:** `SandBox.GauntletUI.Missions`
**Module:** `SandBox.GauntletUI`
**Type:** `public class MissionGauntletConversationView : MissionView, IConversationStateHandler`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletConversationView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionGauntletConversationView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/Missions/MissionGauntletConversationView.cs. It is a public class, implementing/inheriting MissionView, IConversationStateHandler; the inheritance chain is MissionGauntletConversationView → MissionView → MissionBehavior → IMissionBehavior. It exposes 7 public/protected members: 5 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionGauntletConversationView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI.Missions`, inheritance chain MissionGauntletConversationView → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 5/7, properties 1/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/Missions/MissionGauntletConversationView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ConversationHandler` | `public MissionConversationLogic ConversationHandler` | property |
| `MissionGauntletConversationView` | `public MissionGauntletConversationView()` | constructor |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `OnMissionScreenActivate` | `public override void OnMissionScreenActivate()` | method |
| `OnMissionModeChange` | `public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionView](../../mission-ext/MissionView/)
- [base / interface IConversationStateHandler](../../campaign-ext/IConversationStateHandler/)
- [same namespace MissionGauntletAgentAlarmStateView](../MissionGauntletAgentAlarmStateView/)
- [same namespace MissionGauntletArenaPracticeFightView](../MissionGauntletArenaPracticeFightView/)
- [same namespace MissionGauntletBarterView](../MissionGauntletBarterView/)
- [same namespace MissionGauntletBoardGameView](../MissionGauntletBoardGameView/)
