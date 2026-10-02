---
title: "DestructableMissionObject"
description: "DestructableMissionObject: a public class in TaleWorlds.MountAndBlade, inheriting MissionObject; 2 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/DestructableMissionObject.cs."
---
# DestructableMissionObject

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DestructableMissionObject : MissionObject`
**File:** `TaleWorlds.MountAndBlade/DestructableMissionObject.cs`

## Overview

DestructableMissionObject lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/DestructableMissionObject.cs. It is a public class, implementing/inheriting MissionObject; the inheritance chain is DestructableMissionObject → MissionObject → ScriptComponentBehavior. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DestructableMissionObject is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain DestructableMissionObject → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/DestructableMissionObject.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `OnInit` | `protected internal override void OnInit()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionObject](../MissionObject)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
