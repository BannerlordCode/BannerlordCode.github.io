---
title: "GoldGainFlags"
description: "GoldGainFlags: a public enum in TaleWorlds.MountAndBlade, inheriting ushort; 12 exposed members (0 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/GoldGainFlags.cs."
---
# GoldGainFlags

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public enum GoldGainFlags : ushort`
**File:** `TaleWorlds.MountAndBlade/GoldGainFlags.cs`

## Overview

GoldGainFlags lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/GoldGainFlags.cs. It is a public enum, implementing/inheriting ushort; the inheritance chain is GoldGainFlags → ushort. It exposes 12 public/protected members: 12 enum values.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GoldGainFlags is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain GoldGainFlags → ushort. The surface is method-led (methods 0/12, properties 0/12), so it mostly exposes operations. ushort on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/GoldGainFlags.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `1` | `FirstRangedKill == 1` | enum value |
| `2` | `FirstMeleeKill == 2` | enum value |
| `4` | `FirstAssist == 4` | enum value |
| `8` | `SecondAssist == 8` | enum value |
| `16` | `ThirdAssist == 16` | enum value |
| `32` | `FifthKill == 32` | enum value |
| `64` | `TenthKill == 64` | enum value |
| `128` | `DefaultKill == 128` | enum value |
| `256` | `DefaultAssist == 256` | enum value |
| `512` | `ObjectiveCompleted == 512` | enum value |
| `1024` | `ObjectiveDestroyed == 1024` | enum value |
| `2048` | `PerkBonus == 2048` | enum value |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
