---
title: "BaseNetworkComponentData"
description: "BaseNetworkComponentData: a public class in TaleWorlds.MountAndBlade, inheriting UdpNetworkComponent; 3 exposed members (1 methods, 1 properties, 1 fields). Source: TaleWorlds.MountAndBlade/BaseNetworkComponentData.cs."
---
# BaseNetworkComponentData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BaseNetworkComponentData : UdpNetworkComponent`
**File:** `TaleWorlds.MountAndBlade/BaseNetworkComponentData.cs`

## Overview

BaseNetworkComponentData lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BaseNetworkComponentData.cs. It is a public class, implementing/inheriting UdpNetworkComponent; the inheritance chain is BaseNetworkComponentData → UdpNetworkComponent → IUdpNetworkHandler. It exposes 3 public/protected members: 1 methods, 1 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BaseNetworkComponentData is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain BaseNetworkComponentData → UdpNetworkComponent → IUdpNetworkHandler. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BaseNetworkComponentData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentBattleIndex` | `public int CurrentBattleIndex` | property |
| `UpdateCurrentBattleIndex` | `public void UpdateCurrentBattleIndex(int currentBattleIndex)` | method |
| `MaxIntermissionStateTime` | `public const float MaxIntermissionStateTime` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface UdpNetworkComponent](../UdpNetworkComponent)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
