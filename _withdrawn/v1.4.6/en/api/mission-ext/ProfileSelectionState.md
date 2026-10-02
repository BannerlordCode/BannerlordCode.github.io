---
title: "ProfileSelectionState"
description: "ProfileSelectionState: a public class in TaleWorlds.MountAndBlade, inheriting GameState; 6 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/ProfileSelectionState.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ProfileSelectionState

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ProfileSelectionState : GameState`
**File:** `TaleWorlds.MountAndBlade/ProfileSelectionState.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ProfileSelectionState lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ProfileSelectionState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is ProfileSelectionState → GameState → MBObjectBase. It exposes 6 public/protected members: 3 methods, 1 properties, 1 events, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ProfileSelectionState lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain ProfileSelectionState → GameState → MBObjectBase. The surface is method-led (methods 3/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ProfileSelectionState.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsDirectPlayPossible` | `public bool IsDirectPlayPossible` | property |
| `OnProfileSelection;` | `public event ProfileSelectionState.OnProfileSelectionEvent OnProfileSelection;` | event |
| `OnProfileSelected` | `public void OnProfileSelected()` | method |
| `StartGame` | `public void StartGame()` | method |
| `OnProfileSelectionEvent` | `public delegate void OnProfileSelectionEvent();` | method |
| `OnProfileSelectionEvent` | `public delegate void OnProfileSelectionEvent()` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameState](../../core-extra/GameState/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
