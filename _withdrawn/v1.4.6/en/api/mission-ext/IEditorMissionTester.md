---
title: "IEditorMissionTester"
description: "IEditorMissionTester: a public interface in TaleWorlds.MountAndBlade; 2 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/IEditorMissionTester.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IEditorMissionTester

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IEditorMissionTester`
**File:** `TaleWorlds.MountAndBlade/IEditorMissionTester.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

IEditorMissionTester lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/IEditorMissionTester.cs. It is a public interface; the inheritance chain is IEditorMissionTester. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IEditorMissionTester lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain IEditorMissionTester. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/IEditorMissionTester.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `StartMissionForEditor` | `void StartMissionForEditor(string missionName, string sceneName, string levels);` | method |
| `StartMissionForReplayEditor` | `void StartMissionForReplayEditor(string missionName, string sceneName, string levels, string fileName, bool record, float startTime, float endTime);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
