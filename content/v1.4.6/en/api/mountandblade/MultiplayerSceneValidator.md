---
title: "MultiplayerSceneValidator"
description: "MultiplayerSceneValidator: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 2 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MultiplayerSceneValidator.cs."
---
# MultiplayerSceneValidator

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MultiplayerSceneValidator : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/MultiplayerSceneValidator.cs`

## Overview

MultiplayerSceneValidator lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MultiplayerSceneValidator.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is MultiplayerSceneValidator → ScriptComponentBehavior. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerSceneValidator is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MultiplayerSceneValidator → ScriptComponentBehavior. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MultiplayerSceneValidator.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnEditorVariableChanged` | `protected internal override void OnEditorVariableChanged(string variableName)` | method |
| `OnSceneSave` | `protected internal override void OnSceneSave(string saveFolder)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
