---
title: "ModuleNetworkData"
description: "ModuleNetworkData：TaleWorlds.MountAndBlade 的 public 类；公开成员 6 个（方法 6、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/ModuleNetworkData.cs。"
---
# ModuleNetworkData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class ModuleNetworkData`
**File:** `TaleWorlds.MountAndBlade/ModuleNetworkData.cs`

## 概述

ModuleNetworkData 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/ModuleNetworkData.cs。它是一个 public 类，继承链为 ModuleNetworkData。public/protected 成员共 6 个：6 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ModuleNetworkData 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 ModuleNetworkData。成员构成以方法为主（方法 6/6，属性 0/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/ModuleNetworkData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ReadItemReferenceFromPacket` | `public static EquipmentElement ReadItemReferenceFromPacket(MBObjectManager objectManager, ref bool bufferReadValid)` | 方法 |
| `WriteItemReferenceToPacket` | `public static void WriteItemReferenceToPacket(EquipmentElement equipElement)` | 方法 |
| `ReadWeaponReferenceFromPacket` | `public static MissionWeapon ReadWeaponReferenceFromPacket(MBObjectManager objectManager, ref bool bufferReadValid)` | 方法 |
| `WriteWeaponReferenceToPacket` | `public static void WriteWeaponReferenceToPacket(MissionWeapon weapon)` | 方法 |
| `ReadMissileWeaponReferenceFromPacket` | `public static MissionWeapon ReadMissileWeaponReferenceFromPacket(MBObjectManager objectManager, ref bool bufferReadValid)` | 方法 |
| `WriteMissileWeaponReferenceToPacket` | `public static void WriteMissileWeaponReferenceToPacket(MissionWeapon weapon)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
