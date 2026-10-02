---
title: "ScenePropDecal"
description: "ScenePropDecal: a public class in TaleWorlds.MountAndBlade, inheriting ScriptComponentBehavior; 5 exposed members (3 methods, 0 properties, 2 fields). Source: TaleWorlds.MountAndBlade/ScenePropDecal.cs."
---
# ScenePropDecal

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ScenePropDecal : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/ScenePropDecal.cs`

## Overview

ScenePropDecal lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ScenePropDecal.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is ScenePropDecal → ScriptComponentBehavior. It exposes 5 public/protected members: 3 methods, 2 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ScenePropDecal is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain ScenePropDecal → ScriptComponentBehavior. The surface is method-led (methods 3/5, properties 0/5), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ScenePropDecal.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInit` | `protected internal override void OnInit()` | method |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `OnEditorVariableChanged` | `protected internal override void OnEditorVariableChanged(string variableName)` | method |
| `TilingSize` | `public float TilingSize` | field |
| `MaterialName` | `public string MaterialName` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
