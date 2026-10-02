---
title: "IUsable"
description: "IUsable: a public interface in TaleWorlds.MountAndBlade; 2 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/IUsable.cs."
---
# IUsable

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IUsable`
**File:** `TaleWorlds.MountAndBlade/IUsable.cs`

## Overview

IUsable lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/IUsable.cs. It is a public interface; the inheritance chain is IUsable. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IUsable is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain IUsable. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/IUsable.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnUse` | `void OnUse(Agent userAgent, sbyte agentBoneIndex);` | method |
| `OnUseStopped` | `void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex);` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
