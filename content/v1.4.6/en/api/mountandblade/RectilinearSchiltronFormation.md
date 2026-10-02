---
title: "RectilinearSchiltronFormation"
description: "RectilinearSchiltronFormation: a public class in TaleWorlds.MountAndBlade, inheriting SquareFormation; 4 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/RectilinearSchiltronFormation.cs."
---
# RectilinearSchiltronFormation

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class RectilinearSchiltronFormation : SquareFormation`
**File:** `TaleWorlds.MountAndBlade/RectilinearSchiltronFormation.cs`

## Overview

RectilinearSchiltronFormation lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/RectilinearSchiltronFormation.cs. It is a public class, implementing/inheriting SquareFormation; the inheritance chain is RectilinearSchiltronFormation → SquareFormation → LineFormation → IFormationArrangement. It exposes 4 public/protected members: 2 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RectilinearSchiltronFormation is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain RectilinearSchiltronFormation → SquareFormation → LineFormation → IFormationArrangement. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/RectilinearSchiltronFormation.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RectilinearSchiltronFormation` | `public RectilinearSchiltronFormation(IFormation owner) : base(owner)` | constructor |
| `Clone` | `public override IFormationArrangement Clone(IFormation formation)` | method |
| `MaximumWidth` | `public override float MaximumWidth` | property |
| `Form` | `public void Form()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SquareFormation](../SquareFormation)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
