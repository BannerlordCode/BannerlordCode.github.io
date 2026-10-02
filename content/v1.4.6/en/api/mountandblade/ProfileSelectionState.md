---
title: "ProfileSelectionState"
description: "ProfileSelectionState: a public class in TaleWorlds.MountAndBlade, inheriting GameState; 6 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/ProfileSelectionState.cs."
---
# ProfileSelectionState

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ProfileSelectionState : GameState`
**File:** `TaleWorlds.MountAndBlade/ProfileSelectionState.cs`

## Overview

ProfileSelectionState lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ProfileSelectionState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is ProfileSelectionState → GameState. It exposes 6 public/protected members: 3 methods, 1 properties, 1 events, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ProfileSelectionState is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain ProfileSelectionState → GameState. The surface is method-led (methods 3/6, properties 1/6), so it mostly exposes operations. GameState on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ProfileSelectionState.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsDirectPlayPossible` | `public bool IsDirectPlayPossible` | property |
| `OnProfileSelection;` | `public event ProfileSelectionState.OnProfileSelectionEvent OnProfileSelection;` | event |
| `OnProfileSelected` | `public void OnProfileSelected()` | method |
| `StartGame` | `public void StartGame()` | method |
| `OnProfileSelectionEvent` | `public delegate void OnProfileSelectionEvent();` | method |
| `OnProfileSelectionEvent` | `public delegate void OnProfileSelectionEvent()` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
