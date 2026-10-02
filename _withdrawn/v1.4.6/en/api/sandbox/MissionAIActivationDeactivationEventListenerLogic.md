---
title: "MissionAIActivationDeactivationEventListenerLogic"
description: "MissionAIActivationDeactivationEventListenerLogic: a public class in SandBox.Missions.MissionEvents, inheriting MissionLogic; 4 exposed members (1 methods, 0 properties, 2 fields). Canonical bucket sandbox. Source: SandBox/Missions/MissionEvents/MissionAIActivationDeactivationEventListenerLogic.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionAIActivationDeactivationEventListenerLogic

**Namespace:** `SandBox.Missions.MissionEvents`
**Module:** `SandBox`
**Type:** `public class MissionAIActivationDeactivationEventListenerLogic : MissionLogic`
**File:** `SandBox/Missions/MissionEvents/MissionAIActivationDeactivationEventListenerLogic.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionAIActivationDeactivationEventListenerLogic lives in the SandBox module, source file SandBox/Missions/MissionEvents/MissionAIActivationDeactivationEventListenerLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is MissionAIActivationDeactivationEventListenerLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 4 public/protected members: 1 methods, 2 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionAIActivationDeactivationEventListenerLogic lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.MissionEvents`, inheritance chain MissionAIActivationDeactivationEventListenerLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 1/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionEvents/MissionAIActivationDeactivationEventListenerLogic.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionAIActivationDeactivationEventListenerLogic` | `public MissionAIActivationDeactivationEventListenerLogic()` | constructor |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `ActivationEventId` | `public const string ActivationEventId` | field |
| `DeactivationEventId` | `public const string DeactivationEventId` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [same namespace OpenInventoryWithGivenItemsEventListenerLogic](../OpenInventoryWithGivenItemsEventListenerLogic/)
- [same namespace ShowQuickInformationEventListenerLogic](../ShowQuickInformationEventListenerLogic/)
