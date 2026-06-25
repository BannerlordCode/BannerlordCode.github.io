---
title: "INativeStringHelper"
description: "INativeStringHelper 的自动生成类参考。"
---
# INativeStringHelper

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `internal interface INativeStringHelper`
**Base:** 无
**File:** `TaleWorlds.DotNet/INativeStringHelper.cs`

## 概述

`INativeStringHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `INativeStringHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
// 通常通过依赖注入或工厂方法获得实现
IINativeStringHelper service = ...;
```

## 参见

- [本区域目录](../)