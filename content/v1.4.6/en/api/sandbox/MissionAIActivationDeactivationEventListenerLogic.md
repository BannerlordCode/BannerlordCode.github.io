---
title: "MissionAIActivationDeactivationEventListenerLogic"
description: "MissionAIActivationDeactivationEventListenerLogic: a public class in SandBox, inheriting MissionLogic; 4 exposed members (1 methods, 0 properties, 2 fields). Source: SandBox/Missions/MissionEvents/MissionAIActivationDeactivationEventListenerLogic.cs."
---
# MissionAIActivationDeactivationEventListenerLogic

**Namespace:** `SandBox.Missions.MissionEvents`
**Module:** `SandBox`
**Type:** `public class MissionAIActivationDeactivationEventListenerLogic : MissionLogic`
**File:** `SandBox/Missions/MissionEvents/MissionAIActivationDeactivationEventListenerLogic.cs`

## Overview

MissionAIActivationDeactivationEventListenerLogic lives in the SandBox module, source file SandBox/Missions/MissionEvents/MissionAIActivationDeactivationEventListenerLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is MissionAIActivationDeactivationEventListenerLogic → MissionLogic. It exposes 4 public/protected members: 1 methods, 2 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionAIActivationDeactivationEventListenerLogic is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionEvents) the module directory; inheritance chain MissionAIActivationDeactivationEventListenerLogic → MissionLogic. The surface is method-led (methods 1/4, properties 0/4), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionEvents/MissionAIActivationDeactivationEventListenerLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionAIActivationDeactivationEventListenerLogic` | `public MissionAIActivationDeactivationEventListenerLogic()` | constructor |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `ActivationEventId` | `public const string ActivationEventId` | field |
| `DeactivationEventId` | `public const string DeactivationEventId` | field |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace OpenInventoryWithGivenItemsEventListenerLogic](../OpenInventoryWithGivenItemsEventListenerLogic)
- [same namespace ShowQuickInformationEventListenerLogic](../ShowQuickInformationEventListenerLogic)
