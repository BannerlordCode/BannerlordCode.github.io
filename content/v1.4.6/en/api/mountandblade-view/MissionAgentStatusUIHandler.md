---
title: "MissionAgentStatusUIHandler"
description: "MissionAgentStatusUIHandler: a public class in TaleWorlds.MountAndBlade.View, inheriting MissionBattleUIBaseView, IInteractionInterfaceHandler; 7 exposed members (7 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionAgentStatusUIHandler.cs."
---
# MissionAgentStatusUIHandler

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class MissionAgentStatusUIHandler : MissionBattleUIBaseView, IInteractionInterfaceHandler`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionAgentStatusUIHandler.cs`

## Overview

MissionAgentStatusUIHandler lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionAgentStatusUIHandler.cs. It is a public class, implementing/inheriting MissionBattleUIBaseView, IInteractionInterfaceHandler; the inheritance chain is MissionAgentStatusUIHandler → MissionBattleUIBaseView → MissionView → MissionBehavior. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionAgentStatusUIHandler is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.MissionViews) the module directory; inheritance chain MissionAgentStatusUIHandler → MissionBattleUIBaseView → MissionView → MissionBehavior. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. MissionBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionAgentStatusUIHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AddInteractionMessage` | `public virtual void AddInteractionMessage(MissionInteractionItemBaseVM message)` | method |
| `RemoveInteractionMessage` | `public virtual void RemoveInteractionMessage(MissionInteractionItemBaseVM message)` | method |
| `HasInteractionMessage` | `public virtual bool HasInteractionMessage(MissionInteractionItemBaseVM message)` | method |
| `OnCreateView` | `protected override void OnCreateView()` | method |
| `OnDestroyView` | `protected override void OnDestroyView()` | method |
| `OnSuspendView` | `protected override void OnSuspendView()` | method |
| `OnResumeView` | `protected override void OnResumeView()` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionBattleUIBaseView](../MissionBattleUIBaseView)
- [same namespace MissionAgentContourControllerView](../MissionAgentContourControllerView)
- [same namespace MissionAgentLabelView](../MissionAgentLabelView)
- [same namespace MissionBattleUIBaseView](../MissionBattleUIBaseView)
- [same namespace MissionBoundaryCrossingView](../MissionBoundaryCrossingView)
