---
title: "Key"
description: "Key：TaleWorlds.InputSystem 的 public 类；公开成员 22 个（方法 13、属性 6、字段 0）。canonical 桶 system。源文件 TaleWorlds.InputSystem/Key.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Key

**Namespace:** `TaleWorlds.InputSystem`
**Module:** `TaleWorlds.InputSystem`
**Type:** `public class Key`
**File:** `TaleWorlds.InputSystem/Key.cs`
**Bucket:** `system` (rule:TaleWorlds.InputSystem)

## 概述

Key 位于 TaleWorlds.InputSystem 模块，源文件 TaleWorlds.InputSystem/Key.cs。它是一个 public 类，继承链为 Key。public/protected 成员共 22 个：13 方法、6 属性、2 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Key 落在 canonical 桶 `system`（命中规则 `rule:TaleWorlds.InputSystem`），命名空间 `TaleWorlds.InputSystem`，继承链 Key。成员构成以方法为主（方法 13/22，属性 6/22），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.InputSystem/Key.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsKeyboardInput` | `public bool IsKeyboardInput` | 属性 |
| `IsMouseButtonInput` | `public bool IsMouseButtonInput` | 属性 |
| `IsMouseWheelInput` | `public bool IsMouseWheelInput` | 属性 |
| `IsControllerInput` | `public bool IsControllerInput` | 属性 |
| `InputKey` | `public InputKey InputKey` | 属性 |
| `Key` | `public Key(InputKey key)` | 构造函数 |
| `Key` | `public Key()` | 构造函数 |
| `ChangeKey` | `public void ChangeKey(InputKey key)` | 方法 |
| `ToString` | `public override string ToString()` | 方法 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `operator` | `public static bool operator` | 运算符 |
| `!` | `public static bool operator !` | 运算符 |
| `IsLeftAnalogInput` | `public static bool IsLeftAnalogInput(InputKey key)` | 方法 |
| `IsLeftBumperOrTriggerInput` | `public static bool IsLeftBumperOrTriggerInput(InputKey key)` | 方法 |
| `IsRightBumperOrTriggerInput` | `public static bool IsRightBumperOrTriggerInput(InputKey key)` | 方法 |
| `IsFaceKeyInput` | `public static bool IsFaceKeyInput(InputKey key)` | 方法 |
| `IsRightAnalogInput` | `public static bool IsRightAnalogInput(InputKey key)` | 方法 |
| `IsDpadInput` | `public static bool IsDpadInput(InputKey key)` | 方法 |
| `GetInputType` | `public static Key.InputType GetInputType(InputKey key)` | 方法 |
| `InputType` | `public enum InputType` | 属性 |
| `InputType` | `public enum InputType` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 EmptyInputContext](../EmptyInputContext/)
- [同命名空间 GameAxisKey](../GameAxisKey/)
- [同命名空间 GameKey](../GameKey/)
- [同命名空间 GameKeyContext](../GameKeyContext/)
