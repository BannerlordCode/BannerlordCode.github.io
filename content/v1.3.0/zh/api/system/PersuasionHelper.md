---
title: "PersuasionHelper"
description: "PersuasionHelper 的自动生成类参考。"
---
# PersuasionHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class PersuasionHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/PersuasionHelper.cs`

## 概述

`PersuasionHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `PersuasionHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ShowSuccess
`public static TextObject ShowSuccess(PersuasionOptionArgs optionArgs, bool showToPlayer = true)`

**用途 / Purpose:** 显示「success」对应的界面或元素。

```csharp
// 静态调用，不需要实例
PersuasionHelper.ShowSuccess(optionArgs, false);
```

### GetDefaultPersuasionOptionReaction
`public static TextObject GetDefaultPersuasionOptionReaction(PersuasionOptionResult optionResult)`

**用途 / Purpose:** 读取并返回当前对象中 「default persuasion option reaction」 的结果。

```csharp
// 静态调用，不需要实例
PersuasionHelper.GetDefaultPersuasionOptionReaction(optionResult);
```

## 使用示例

```csharp
PersuasionHelper.Initialize();
```

## 参见

- [本区域目录](../)