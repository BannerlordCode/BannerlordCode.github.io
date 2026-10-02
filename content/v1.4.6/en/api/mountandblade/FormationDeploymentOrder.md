---
title: "FormationDeploymentOrder"
description: "FormationDeploymentOrder: a public struct in TaleWorlds.MountAndBlade; 6 exposed members (2 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade/FormationDeploymentOrder.cs."
---
# FormationDeploymentOrder

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct FormationDeploymentOrder`
**File:** `TaleWorlds.MountAndBlade/FormationDeploymentOrder.cs`

## Overview

FormationDeploymentOrder lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/FormationDeploymentOrder.cs. It is a public struct; the inheritance chain is FormationDeploymentOrder. It exposes 6 public/protected members: 2 methods, 3 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FormationDeploymentOrder is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain FormationDeploymentOrder. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/FormationDeploymentOrder.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Key` | `public int Key` | property |
| `Offset` | `public int Offset` | property |
| `GetDeploymentOrder` | `public static FormationDeploymentOrder GetDeploymentOrder(FormationClass fClass, int offset = 0)` | method |
| `GetComparer` | `public static FormationDeploymentOrder.DeploymentOrderComparer GetComparer()` | method |
| `IComparer` | `public class DeploymentOrderComparer : IComparer<FormationDeploymentOrder>` | property |
| `IComparer` | `public class DeploymentOrderComparer : IComparer<FormationDeploymentOrder>` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
