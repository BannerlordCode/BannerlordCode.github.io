---
title: "NativeStringHelper"
description: "NativeStringHelper 的自动生成类参考。"
---
# NativeStringHelper

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `internal static class NativeStringHelper`
**Base:** 无
**File:** `bin/TaleWorlds.DotNet/TaleWorlds.DotNet/NativeStringHelper.cs`

## 概述

`NativeStringHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `NativeStringHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
NativeStringHelper.Initialize();
```

## 参见

- [本区域目录](../)