---
title: "EquipmentControllerLeaveLogic"
description: "EquipmentControllerLeaveLogic: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 3 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/EquipmentControllerLeaveLogic.cs."
---
# EquipmentControllerLeaveLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class EquipmentControllerLeaveLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/EquipmentControllerLeaveLogic.cs`

## Overview

EquipmentControllerLeaveLogic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/EquipmentControllerLeaveLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is EquipmentControllerLeaveLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 3 public/protected members: 2 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EquipmentControllerLeaveLogic is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain EquipmentControllerLeaveLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 2/3, properties 1/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/EquipmentControllerLeaveLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsEquipmentSelectionActive` | `public bool IsEquipmentSelectionActive` | property |
| `SetIsEquipmentSelectionActive` | `public void SetIsEquipmentSelectionActive(bool isActive)` | method |
| `OnEndMissionRequest` | `public override InquiryData OnEndMissionRequest(out bool canLeave)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
