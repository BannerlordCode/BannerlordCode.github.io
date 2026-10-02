---
title: "TroopUsageFlags"
description: "TroopUsageFlags: a public enum in TaleWorlds.Core, inheriting ushort; 13 exposed members (0 methods, 0 properties, 0 fields). Source: TaleWorlds.Core/TroopUsageFlags.cs."
---
# TroopUsageFlags

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public enum TroopUsageFlags : ushort`
**File:** `TaleWorlds.Core/TroopUsageFlags.cs`

## Overview

TroopUsageFlags lives in the TaleWorlds.Core module, source file TaleWorlds.Core/TroopUsageFlags.cs. It is a public enum, implementing/inheriting ushort; the inheritance chain is TroopUsageFlags → ushort. It exposes 13 public/protected members: 13 enum values.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TroopUsageFlags is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain TroopUsageFlags → ushort. The surface is method-led (methods 0/13, properties 0/13), so it mostly exposes operations. ushort on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/TroopUsageFlags.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `0` | `None == 0` | enum value |
| `1` | `OnFoot == 1` | enum value |
| `2` | `Mounted == 2` | enum value |
| `4` | `Melee == 4` | enum value |
| `8` | `Ranged == 8` | enum value |
| `16` | `OneHandedUser == 16` | enum value |
| `32` | `ShieldUser == 32` | enum value |
| `64` | `TwoHandedUser == 64` | enum value |
| `128` | `PolearmUser == 128` | enum value |
| `256` | `BowUser == 256` | enum value |
| `512` | `ThrownUser == 512` | enum value |
| `1024` | `CrossbowUser == 1024` | enum value |
| `65535` | `Undefined == 65535` | enum value |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
