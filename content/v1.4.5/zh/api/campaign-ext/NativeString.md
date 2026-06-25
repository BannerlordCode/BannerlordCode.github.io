---
title: "NativeString"
description: "NativeString 的自动生成类参考。"
---
# NativeString

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public sealed class NativeString : NativeObject`
**Base:** `NativeObject`
**File:** `bin/TaleWorlds.DotNet/TaleWorlds.DotNet/NativeString.cs`

## 概述

`NativeString` 位于 `TaleWorlds.DotNet`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.DotNet` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Create
`public static NativeString Create()`

**用途 / Purpose:** **用途 / Purpose:** 创建当前对象的新实例或相关实体。

```csharp
// 静态调用，不需要实例
NativeString.Create();
```

### GetString
`public string GetString()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 string 的结果。

```csharp
// 先通过子系统 API 拿到 NativeString 实例
NativeString nativeString = ...;
var result = nativeString.GetString();
```

### SetString
`public void SetString(string newString)`

**用途 / Purpose:** **用途 / Purpose:** 为 string 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 NativeString 实例
NativeString nativeString = ...;
nativeString.SetString("example");
```

## 使用示例

```csharp
NativeString.Create();
```

## 参见

- [本区域目录](../)