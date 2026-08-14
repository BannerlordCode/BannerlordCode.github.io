---
title: "MonoNativeFunctionWrapperAttribute"
description: "MonoNativeFunctionWrapperAttribute 的自动生成类参考。"
---
# MonoNativeFunctionWrapperAttribute

**Namespace:** (global)
**Module:** (global)
**Type:** `public class MonoNativeFunctionWrapperAttribute : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.DotNet/MonoNativeFunctionWrapperAttribute.cs`

## 概述

`MonoNativeFunctionWrapperAttribute` 是一个 .NET 特性，用来给类型或成员打标签，让运行时或工具链按约定识别它。

## 心智模型

把 `MonoNativeFunctionWrapperAttribute` 当作一个 Attribute 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
[MonoNativeFunctionWrapperAttribute]
public class Example { }
```

## 参见

- [本区域目录](../)