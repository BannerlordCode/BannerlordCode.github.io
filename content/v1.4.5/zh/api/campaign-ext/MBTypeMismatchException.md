---
title: "MBTypeMismatchException"
description: "MBTypeMismatchException 的自动生成类参考。"
---
# MBTypeMismatchException

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public class MBTypeMismatchException : ObjectSystemException`
**Base:** `ObjectSystemException`
**File:** `bin/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem/MBTypeMismatchException.cs`

## 概述

`MBTypeMismatchException` 是一个异常类型，用来表达某种明确的错误条件；调用方需要决定是捕获、转换还是让它继续向上抛出。

## 心智模型

把 `MBTypeMismatchException` 当作一个 Exception 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
try { /* 调用可能抛出该异常的分支 */ }
catch (MBTypeMismatchException ex) { /* 处理异常 */ }
```

## 参见

- [本区域目录](../)