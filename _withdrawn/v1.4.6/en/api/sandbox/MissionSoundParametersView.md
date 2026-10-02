---
title: "MissionSoundParametersView"
description: "MissionSoundParametersView: a public class in SandBox.View.Missions, inheriting MissionView; 5 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.View/Missions/MissionSoundParametersView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionSoundParametersView

**Namespace:** `SandBox.View.Missions`
**Module:** `SandBox.View`
**Type:** `public class MissionSoundParametersView : MissionView`
**File:** `SandBox.View/Missions/MissionSoundParametersView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionSoundParametersView lives in the SandBox.View module, source file SandBox.View/Missions/MissionSoundParametersView.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is MissionSoundParametersView → MissionView → MissionBehavior → IMissionBehavior. It exposes 5 public/protected members: 3 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionSoundParametersView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.View.Missions`, inheritance chain MissionSoundParametersView → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Missions/MissionSoundParametersView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | method |
| `OnMissionModeChange` | `public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)` | method |
| `short` | `public enum SoundParameterMissionCulture : short` | property |
| `short` | `public enum SoundParameterMissionCulture : short` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionView](../../mission-ext/MissionView/)
- [same namespace EavesdroppingMissionCameraView](../EavesdroppingMissionCameraView/)
- [same namespace MissionAgentAlarmStateView](../MissionAgentAlarmStateView/)
- [same namespace MissionArenaPracticeFightView](../MissionArenaPracticeFightView/)
- [same namespace MissionAudienceHandler](../MissionAudienceHandler/)
