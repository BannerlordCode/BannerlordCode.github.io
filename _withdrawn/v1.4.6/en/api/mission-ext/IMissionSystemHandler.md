---
title: "IMissionSystemHandler"
description: "IMissionSystemHandler: a public interface in TaleWorlds.MountAndBlade; 7 exposed members (7 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/IMissionSystemHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IMissionSystemHandler

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IMissionSystemHandler`
**File:** `TaleWorlds.MountAndBlade/IMissionSystemHandler.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

IMissionSystemHandler lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/IMissionSystemHandler.cs. It is a public interface; the inheritance chain is IMissionSystemHandler. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IMissionSystemHandler lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain IMissionSystemHandler. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/IMissionSystemHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnMissionAfterStarting` | `void OnMissionAfterStarting(Mission mission);` | method |
| `OnMissionLoadingFinished` | `void OnMissionLoadingFinished(Mission mission);` | method |
| `BeforeMissionTick` | `void BeforeMissionTick(Mission mission, float realDt);` | method |
| `AfterMissionTick` | `void AfterMissionTick(Mission mission, float realDt);` | method |
| `UpdateCamera` | `void UpdateCamera(Mission mission, float realDt);` | method |
| `RenderIsReady` | `bool RenderIsReady();` | method |
| `IEnumerable` | `IEnumerable<MissionBehavior>OnAddBehaviors(IEnumerable<MissionBehavior>behaviors, Mission mission, string missionName, bool addDefaultMissionBehaviors);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
