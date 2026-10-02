---
title: "EditorGame"
description: "EditorGame: a public class in TaleWorlds.MountAndBlade, inheriting GameType; 7 exposed members (6 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/EditorGame.cs."
---
# EditorGame

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class EditorGame : GameType`
**File:** `TaleWorlds.MountAndBlade/EditorGame.cs`

## Overview

EditorGame lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/EditorGame.cs. It is a public class, implementing/inheriting GameType; the inheritance chain is EditorGame → GameType. It exposes 7 public/protected members: 6 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EditorGame is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain EditorGame → GameType. The surface is method-led (methods 6/7, properties 1/7), so it mostly exposes operations. GameType on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/EditorGame.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static EditorGame Current` | property |
| `OnInitialize` | `protected override void OnInitialize()` | method |
| `BeforeRegisterTypes` | `protected override void BeforeRegisterTypes(MBObjectManager objectManager)` | method |
| `OnRegisterTypes` | `protected override void OnRegisterTypes(MBObjectManager objectManager)` | method |
| `DoLoadingForGameType` | `protected override void DoLoadingForGameType(GameTypeLoadingStates gameTypeLoadingState, out GameTypeLoadingStates nextState)` | method |
| `OnDestroy` | `public override void OnDestroy()` | method |
| `OnStateChanged` | `public override void OnStateChanged(GameState oldState)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
