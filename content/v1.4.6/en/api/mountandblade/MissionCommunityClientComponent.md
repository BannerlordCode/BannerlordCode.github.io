---
title: "MissionCommunityClientComponent"
description: "MissionCommunityClientComponent: a public class in TaleWorlds.MountAndBlade, inheriting MissionLobbyComponent; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MissionCommunityClientComponent.cs."
---
# MissionCommunityClientComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionCommunityClientComponent : MissionLobbyComponent`
**File:** `TaleWorlds.MountAndBlade/MissionCommunityClientComponent.cs`

## Overview

MissionCommunityClientComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionCommunityClientComponent.cs. It is a public class, implementing/inheriting MissionLobbyComponent; the inheritance chain is MissionCommunityClientComponent → MissionLobbyComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionCommunityClientComponent is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionCommunityClientComponent → MissionLobbyComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionCommunityClientComponent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `SetServerEndingBeforeClientLoaded` | `public void SetServerEndingBeforeClientLoaded(bool isServerEndingBeforeClientLoaded)` | method |
| `QuitMission` | `public override void QuitMission()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLobbyComponent](../MissionLobbyComponent)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
