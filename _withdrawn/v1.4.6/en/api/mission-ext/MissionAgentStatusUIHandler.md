---
title: "MissionAgentStatusUIHandler"
description: "MissionAgentStatusUIHandler: a public class in TaleWorlds.MountAndBlade.View.MissionViews, inheriting MissionBattleUIBaseView, IInteractionInterfaceHandler; 7 exposed members (7 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionAgentStatusUIHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionAgentStatusUIHandler

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class MissionAgentStatusUIHandler : MissionBattleUIBaseView, IInteractionInterfaceHandler`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionAgentStatusUIHandler.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionAgentStatusUIHandler lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionAgentStatusUIHandler.cs. It is a public class, implementing/inheriting MissionBattleUIBaseView, IInteractionInterfaceHandler; the inheritance chain is MissionAgentStatusUIHandler → MissionBattleUIBaseView → MissionView → MissionBehavior → IMissionBehavior. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionAgentStatusUIHandler lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.MissionViews`, inheritance chain MissionAgentStatusUIHandler → MissionBattleUIBaseView → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionAgentStatusUIHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AddInteractionMessage` | `public virtual void AddInteractionMessage(MissionInteractionItemBaseVM message)` | method |
| `RemoveInteractionMessage` | `public virtual void RemoveInteractionMessage(MissionInteractionItemBaseVM message)` | method |
| `HasInteractionMessage` | `public virtual bool HasInteractionMessage(MissionInteractionItemBaseVM message)` | method |
| `OnCreateView` | `protected override void OnCreateView()` | method |
| `OnDestroyView` | `protected override void OnDestroyView()` | method |
| `OnSuspendView` | `protected override void OnSuspendView()` | method |
| `OnResumeView` | `protected override void OnResumeView()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionBattleUIBaseView](../MissionBattleUIBaseView/)
- [base / interface IInteractionInterfaceHandler](../../viewmodel/IInteractionInterfaceHandler/)
- [same namespace MissionAgentContourControllerView](../MissionAgentContourControllerView/)
- [same namespace MissionAgentLabelView](../MissionAgentLabelView/)
- [same namespace MissionBattleUIBaseView](../MissionBattleUIBaseView/)
- [same namespace MissionBoundaryCrossingView](../MissionBoundaryCrossingView/)
