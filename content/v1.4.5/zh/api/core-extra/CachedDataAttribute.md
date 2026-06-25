---
title: "CachedDataAttribute"
description: "CachedDataAttribute 的自动生成类参考。"
---
# CachedDataAttribute

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class CachedDataAttribute : Attribute`
**Base:** `Attribute`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/CachedDataAttribute.cs`

## 概述

`CachedDataAttribute` 是一个 .NET 特性，用来给类型或成员打标签，让运行时或工具链按约定识别它。

## 心智模型

把 `CachedDataAttribute` 当作一个 Attribute 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
[CachedDataAttribute]
public class Example { }
```

## 参见

- [本区域目录](../)