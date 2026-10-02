---
title: "GameKey"
description: "GameKey：TaleWorlds.InputSystem 的 public 类；公开成员 13 个（方法 3、属性 8、字段 0）。canonical 桶 system。源文件 TaleWorlds.InputSystem/GameKey.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameKey

**Namespace:** `TaleWorlds.InputSystem`
**Module:** `TaleWorlds.InputSystem`
**Type:** `public class GameKey`
**File:** `TaleWorlds.InputSystem/GameKey.cs`
**Bucket:** `system` (rule:TaleWorlds.InputSystem)

## 概述

GameKey 位于 TaleWorlds.InputSystem 模块，源文件 TaleWorlds.InputSystem/GameKey.cs。它是一个 public 类，继承链为 GameKey。public/protected 成员共 13 个：3 方法、8 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameKey 落在 canonical 桶 `system`（命中规则 `rule:TaleWorlds.InputSystem`），命名空间 `TaleWorlds.InputSystem`，继承链 GameKey。成员构成以属性为主（属性 8/13，方法 3/13），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.InputSystem/GameKey.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Id` | `public int Id` | 属性 |
| `StringId` | `public string StringId` | 属性 |
| `GroupId` | `public string GroupId` | 属性 |
| `MainCategoryId` | `public string MainCategoryId` | 属性 |
| `KeyboardKey` | `public Key KeyboardKey` | 属性 |
| `DefaultKeyboardKey` | `public Key DefaultKeyboardKey` | 属性 |
| `ControllerKey` | `public Key ControllerKey` | 属性 |
| `DefaultControllerKey` | `public Key DefaultControllerKey` | 属性 |
| `GameKey` | `public GameKey(int id, string stringId, string groupId, InputKey defaultKeyboardKey, InputKey defaultControllerKey, string mainCategoryId = "")` | 构造函数 |
| `GameKey` | `public GameKey(int id, string stringId, string groupId, InputKey defaultKeyboardKey, string mainCategoryId = "")` | 构造函数 |
| `ToString` | `public override string ToString()` | 方法 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 EmptyInputContext](../EmptyInputContext/)
- [同命名空间 GameAxisKey](../GameAxisKey/)
- [同命名空间 GameKeyContext](../GameKeyContext/)
- [同命名空间 HotKey](../HotKey/)
