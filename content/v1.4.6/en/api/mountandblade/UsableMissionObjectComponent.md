---
title: "UsableMissionObjectComponent"
description: "UsableMissionObjectComponent: a public class in TaleWorlds.MountAndBlade; 12 exposed members (12 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/UsableMissionObjectComponent.cs."
---
# UsableMissionObjectComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade/UsableMissionObjectComponent.cs`

## Overview

UsableMissionObjectComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/UsableMissionObjectComponent.cs. It is a public class (abstract); the inheritance chain is UsableMissionObjectComponent. It exposes 12 public/protected members: 12 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: UsableMissionObjectComponent is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain UsableMissionObjectComponent. The surface is method-led (methods 12/12, properties 0/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/UsableMissionObjectComponent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnAdded` | `protected internal virtual void OnAdded(Scene scene)` | method |
| `OnRemoved` | `protected internal virtual void OnRemoved()` | method |
| `OnFocusGain` | `protected internal virtual void OnFocusGain(Agent userAgent)` | method |
| `OnFocusLose` | `protected internal virtual void OnFocusLose(Agent userAgent)` | method |
| `IsOnTickRequired` | `public virtual bool IsOnTickRequired()` | method |
| `OnTick` | `protected internal virtual void OnTick(float dt)` | method |
| `OnEditorTick` | `protected internal virtual void OnEditorTick(float dt)` | method |
| `OnEditorValidate` | `protected internal virtual void OnEditorValidate()` | method |
| `OnUse` | `protected internal virtual void OnUse(Agent userAgent)` | method |
| `OnUseStopped` | `protected internal virtual void OnUseStopped(Agent userAgent, bool isSuccessful = true)` | method |
| `OnMissionReset` | `protected internal virtual void OnMissionReset()` | method |
| `OnMissionObjectDisabled` | `protected internal virtual void OnMissionObjectDisabled()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
