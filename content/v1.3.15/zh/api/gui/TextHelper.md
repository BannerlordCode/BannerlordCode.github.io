---
title: "TextHelper"
description: "TextHelper 的自动生成类参考。"
---
# TextHelper

**Namespace:** TaleWorlds.TwoDimension.BitmapFont
**Module:** TaleWorlds.TwoDimension
**Type:** `internal static class TextHelper`
**Base:** 无
**File:** `TaleWorlds.TwoDimension/BitmapFont/TextHelper.cs`

## 概述

`TextHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `TextHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
TextHelper.Initialize();
```

## 参见

- [本区域目录](../)