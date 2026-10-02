---
title: "ConsolesModuleExtension"
description: "ConsolesModuleExtension: a public class in TaleWorlds.MountAndBlade, inheriting IPlatformModuleExtension; 6 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/ConsolesModuleExtension.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ConsolesModuleExtension

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ConsolesModuleExtension : IPlatformModuleExtension`
**File:** `TaleWorlds.MountAndBlade/ConsolesModuleExtension.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ConsolesModuleExtension lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ConsolesModuleExtension.cs. It is a public class, implementing/inheriting IPlatformModuleExtension; the inheritance chain is ConsolesModuleExtension → IPlatformModuleExtension. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ConsolesModuleExtension lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain ConsolesModuleExtension → IPlatformModuleExtension. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ConsolesModuleExtension.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ConsolesModuleExtension` | `public ConsolesModuleExtension()` | constructor |
| `Initialize` | `public void Initialize(List<string>args)` | method |
| `string[]GetModulePaths` | `public string[]GetModulePaths()` | method |
| `Destroy` | `public void Destroy()` | method |
| `SetLauncherMode` | `public void SetLauncherMode(bool isLauncherModeActive)` | method |
| `CheckEntitlement` | `public bool CheckEntitlement(string title)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IPlatformModuleExtension](../../modulemanager/IPlatformModuleExtension/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
