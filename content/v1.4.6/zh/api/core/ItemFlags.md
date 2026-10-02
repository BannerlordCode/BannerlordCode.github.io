---
title: "ItemFlags"
description: "ItemFlags：TaleWorlds.Core 的 public 枚举，继承 uint；公开成员 21 个（方法 0、属性 0、字段 0）。源文件 TaleWorlds.Core/ItemFlags.cs。"
---
# ItemFlags

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public enum ItemFlags : uint`
**File:** `TaleWorlds.Core/ItemFlags.cs`

## 概述

ItemFlags 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/ItemFlags.cs。它是一个 public 枚举，实现/继承 uint，继承链为 ItemFlags → uint。public/protected 成员共 21 个：21 枚举值。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ItemFlags 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 ItemFlags → uint。成员构成以方法为主（方法 0/21，属性 0/21），对外主要以操作入口暴露。继承链上的 uint 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/ItemFlags.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `256U` | `ForceAttachOffHandPrimaryItemBone == 256U` | 枚举值 |
| `512U` | `ForceAttachOffHandSecondaryItemBone == 512U` | 枚举值 |
| `768U` | `AttachmentMask == 768U` | 枚举值 |
| `1024U` | `NotUsableByFemale == 1024U` | 枚举值 |
| `2048U` | `NotUsableByMale == 2048U` | 枚举值 |
| `4096U` | `DropOnWeaponChange == 4096U` | 枚举值 |
| `8192U` | `DropOnAnyAction == 8192U` | 枚举值 |
| `16384U` | `CannotBePickedUp == 16384U` | 枚举值 |
| `32768U` | `CanBePickedUpFromCorpse == 32768U` | 枚举值 |
| `65536U` | `QuickFadeOut == 65536U` | 枚举值 |
| `131072U` | `WoodenAttack == 131072U` | 枚举值 |
| `262144U` | `WoodenParry == 262144U` | 枚举值 |
| `524288U` | `HeldInOffHand == 524288U` | 枚举值 |
| `1048576U` | `HasToBeHeldUp == 1048576U` | 枚举值 |
| `2097152U` | `UseTeamColor == 2097152U` | 枚举值 |
| `4194304U` | `Civilian == 4194304U` | 枚举值 |
| `8388608U` | `DoNotScaleBodyAccordingToWeaponLength == 8388608U` | 枚举值 |
| `16777216U` | `DoesNotHideChest == 16777216U` | 枚举值 |
| `33554432U` | `NotStackable == 33554432U` | 枚举值 |
| `67108864U` | `Stealth == 67108864U` | 枚举值 |
| `134217728U` | `DoesNotSpawnWhenDropped == 134217728U` | 枚举值 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
