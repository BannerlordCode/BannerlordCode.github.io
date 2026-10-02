---
title: "IAnalyticsFlagInfo"
description: "IAnalyticsFlagInfo: a public interface in TaleWorlds.MountAndBlade, inheriting IMissionBehavior; 2 exposed members (1 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/IAnalyticsFlagInfo.cs."
---
# IAnalyticsFlagInfo

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IAnalyticsFlagInfo : IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/IAnalyticsFlagInfo.cs`

## Overview

IAnalyticsFlagInfo lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/IAnalyticsFlagInfo.cs. It is a public interface, implementing/inheriting IMissionBehavior; the inheritance chain is IAnalyticsFlagInfo → IMissionBehavior. It exposes 2 public/protected members: 1 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IAnalyticsFlagInfo is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain IAnalyticsFlagInfo → IMissionBehavior. The surface is method-led (methods 1/2, properties 1/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/IAnalyticsFlagInfo.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `MBReadOnlyList<FlagCapturePoint>AllCapturePoints` | property |
| `GetFlagOwnerTeam` | `Team GetFlagOwnerTeam(FlagCapturePoint flag);` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IMissionBehavior](../IMissionBehavior)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
