---
title: "ConsolesModuleExtension"
description: "ConsolesModuleExtension: a public class in TaleWorlds.MountAndBlade, inheriting IPlatformModuleExtension; 6 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/ConsolesModuleExtension.cs."
---
# ConsolesModuleExtension

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ConsolesModuleExtension : IPlatformModuleExtension`
**File:** `TaleWorlds.MountAndBlade/ConsolesModuleExtension.cs`

## Overview

ConsolesModuleExtension lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ConsolesModuleExtension.cs. It is a public class, implementing/inheriting IPlatformModuleExtension; the inheritance chain is ConsolesModuleExtension → IPlatformModuleExtension. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ConsolesModuleExtension is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain ConsolesModuleExtension → IPlatformModuleExtension. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. IPlatformModuleExtension on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ConsolesModuleExtension.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ConsolesModuleExtension` | `public ConsolesModuleExtension()` | constructor |
| `Initialize` | `public void Initialize(List<string>args)` | method |
| `string[]GetModulePaths` | `public string[]GetModulePaths()` | method |
| `Destroy` | `public void Destroy()` | method |
| `SetLauncherMode` | `public void SetLauncherMode(bool isLauncherModeActive)` | method |
| `CheckEntitlement` | `public bool CheckEntitlement(string title)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
