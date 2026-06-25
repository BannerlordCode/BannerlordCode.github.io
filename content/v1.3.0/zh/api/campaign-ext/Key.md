---
title: "Key"
description: "Key 的自动生成类参考。"
---
# Key

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public class Key`
**Base:** 无
**File:** `TaleWorlds.InputSystem/Key.cs`

## 概述

`Key` 位于 `TaleWorlds.InputSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.InputSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsKeyboardInput` | `public bool IsKeyboardInput { get; }` |
| `IsMouseButtonInput` | `public bool IsMouseButtonInput { get; }` |
| `IsMouseWheelInput` | `public bool IsMouseWheelInput { get; }` |
| `IsControllerInput` | `public bool IsControllerInput { get; }` |
| `InputKey` | `public InputKey InputKey { get; }` |

## 主要方法

### ChangeKey
`public void ChangeKey(InputKey key)`

**用途 / Purpose:** 处理与 「change key」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Key 实例
Key key = ...;
key.ChangeKey(key);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Key 实例
Key key = ...;
var result = key.ToString();
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 Key 实例
Key key = ...;
var result = key.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 Key 实例
Key key = ...;
var result = key.GetHashCode();
```

### IsLeftAnalogInput
`public static bool IsLeftAnalogInput(InputKey key)`

**用途 / Purpose:** 判断当前对象是否处于 「left analog input」 状态或条件。

```csharp
// 静态调用，不需要实例
Key.IsLeftAnalogInput(key);
```

### IsLeftBumperOrTriggerInput
`public static bool IsLeftBumperOrTriggerInput(InputKey key)`

**用途 / Purpose:** 判断当前对象是否处于 「left bumper or trigger input」 状态或条件。

```csharp
// 静态调用，不需要实例
Key.IsLeftBumperOrTriggerInput(key);
```

### IsRightBumperOrTriggerInput
`public static bool IsRightBumperOrTriggerInput(InputKey key)`

**用途 / Purpose:** 判断当前对象是否处于 「right bumper or trigger input」 状态或条件。

```csharp
// 静态调用，不需要实例
Key.IsRightBumperOrTriggerInput(key);
```

### IsFaceKeyInput
`public static bool IsFaceKeyInput(InputKey key)`

**用途 / Purpose:** 判断当前对象是否处于 「face key input」 状态或条件。

```csharp
// 静态调用，不需要实例
Key.IsFaceKeyInput(key);
```

### IsRightAnalogInput
`public static bool IsRightAnalogInput(InputKey key)`

**用途 / Purpose:** 判断当前对象是否处于 「right analog input」 状态或条件。

```csharp
// 静态调用，不需要实例
Key.IsRightAnalogInput(key);
```

### IsDpadInput
`public static bool IsDpadInput(InputKey key)`

**用途 / Purpose:** 判断当前对象是否处于 「dpad input」 状态或条件。

```csharp
// 静态调用，不需要实例
Key.IsDpadInput(key);
```

### GetInputType
`public static Key.InputType GetInputType(InputKey key)`

**用途 / Purpose:** 读取并返回当前对象中 「input type」 的结果。

```csharp
// 静态调用，不需要实例
Key.GetInputType(key);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Key key = ...;
key.ChangeKey(key);
```

## 参见

- [本区域目录](../)