---
title: "UiStringHelper"
description: "UiStringHelper 的自动生成类参考。"
---
# UiStringHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class UiStringHelper`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/UiStringHelper.cs`

## 概述

`UiStringHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `UiStringHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsStringNoneOrEmptyForUi
`public static bool IsStringNoneOrEmptyForUi(string str)`

**用途 / Purpose:** 判断当前对象是否处于 「string none or empty for ui」 状态或条件。

```csharp
// 静态调用，不需要实例
UiStringHelper.IsStringNoneOrEmptyForUi("example");
```

## 使用示例

```csharp
UiStringHelper.Initialize();
```

## 参见

- [本区域目录](../)