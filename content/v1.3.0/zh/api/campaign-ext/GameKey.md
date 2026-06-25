---
title: "GameKey"
description: "GameKey 的自动生成类参考。"
---
# GameKey

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public class GameKey`
**Base:** 无
**File:** `TaleWorlds.InputSystem/GameKey.cs`

## 概述

`GameKey` 位于 `TaleWorlds.InputSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.InputSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; }` |
| `StringId` | `public string StringId { get; }` |
| `GroupId` | `public string GroupId { get; }` |
| `MainCategoryId` | `public string MainCategoryId { get; }` |
| `KeyboardKey` | `public Key KeyboardKey { get; }` |
| `DefaultKeyboardKey` | `public Key DefaultKeyboardKey { get; }` |
| `ControllerKey` | `public Key ControllerKey { get; set; }` |
| `DefaultControllerKey` | `public Key DefaultControllerKey { get; set; }` |

## 主要方法

### ToString
`public override string ToString()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 GameKey 实例
GameKey gameKey = ...;
var result = gameKey.ToString();
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** **用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 GameKey 实例
GameKey gameKey = ...;
var result = gameKey.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** **用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 GameKey 实例
GameKey gameKey = ...;
var result = gameKey.GetHashCode();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GameKey gameKey = ...;
gameKey.ToString();
```

## 参见

- [本区域目录](../)