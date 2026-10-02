---
title: "BasicLeaveMissionLogic"
description: "BasicLeaveMissionLogic: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 5 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/BasicLeaveMissionLogic.cs."
---
# BasicLeaveMissionLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BasicLeaveMissionLogic : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BasicLeaveMissionLogic.cs`

## Overview

BasicLeaveMissionLogic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BasicLeaveMissionLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is BasicLeaveMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 5 public/protected members: 2 methods, 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BasicLeaveMissionLogic is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BasicLeaveMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 2/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BasicLeaveMissionLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BasicLeaveMissionLogic` | `public BasicLeaveMissionLogic() : this(false)` | constructor |
| `BasicLeaveMissionLogic` | `public BasicLeaveMissionLogic(bool askBeforeLeave) : this(askBeforeLeave, 5)` | constructor |
| `BasicLeaveMissionLogic` | `public BasicLeaveMissionLogic(bool askBeforeLeave, int minRetreatDistance)` | constructor |
| `MissionEnded` | `public override bool MissionEnded(ref MissionResult missionResult)` | method |
| `OnEndMissionRequest` | `public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
