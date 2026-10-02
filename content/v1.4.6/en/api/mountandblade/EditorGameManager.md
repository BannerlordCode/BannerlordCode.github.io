---
title: "EditorGameManager"
description: "EditorGameManager: a public class in TaleWorlds.MountAndBlade, inheriting MBGameManager; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/EditorGameManager.cs."
---
# EditorGameManager

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class EditorGameManager : MBGameManager`
**File:** `TaleWorlds.MountAndBlade/EditorGameManager.cs`

## Overview

EditorGameManager lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/EditorGameManager.cs. It is a public class, implementing/inheriting MBGameManager; the inheritance chain is EditorGameManager → MBGameManager → GameManagerBase. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EditorGameManager is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain EditorGameManager → MBGameManager → GameManagerBase. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. GameManagerBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/EditorGameManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DoLoadingForGameManager` | `protected override void DoLoadingForGameManager(GameManagerLoadingSteps gameManagerLoadingStep, out GameManagerLoadingSteps nextStep)` | method |
| `OnAfterCampaignStart` | `public override void OnAfterCampaignStart(Game game)` | method |
| `OnLoadFinished` | `public override void OnLoadFinished()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MBGameManager](../MBGameManager)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
