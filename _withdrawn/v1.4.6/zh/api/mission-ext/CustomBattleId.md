---
title: "CustomBattleId"
description: "CustomBattleId：TaleWorlds.MountAndBlade.Diamond 的 public 结构体；公开成员 10 个（方法 7、属性 1、字段 1）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/CustomBattleId.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomBattleId

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public struct CustomBattleId`
**File:** `TaleWorlds.MountAndBlade.Diamond/CustomBattleId.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

CustomBattleId 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/CustomBattleId.cs。它是一个 public 结构体，继承链为 CustomBattleId。public/protected 成员共 10 个：7 方法、1 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CustomBattleId 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond`，继承链 CustomBattleId。成员构成以方法为主（方法 7/10，属性 1/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/CustomBattleId.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Guid` | `public Guid Guid` | 属性 |
| `CustomBattleId` | `public CustomBattleId(Guid guid)` | 构造函数 |
| `NewGuid` | `public static CustomBattleId NewGuid()` | 方法 |
| `ToString` | `public override string ToString()` | 方法 |
| `byte[]ToByteArray` | `public byte[]ToByteArray()` | 方法 |
| `operator` | `public static bool operator` | 运算符 |
| `!` | `public static bool operator !` | 运算符 |
| `Equals` | `public override bool Equals(object o)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `Empty` | `public static CustomBattleId Empty` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Announcement](../Announcement/)
- [同命名空间 AnnouncementType](../AnnouncementType/)
- [同命名空间 AnotherPlayerData](../AnotherPlayerData/)
- [同命名空间 AnotherPlayerState](../AnotherPlayerState/)
