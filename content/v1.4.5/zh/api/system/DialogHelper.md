---
title: "DialogHelper"
description: "DialogHelper 的自动生成类参考。"
---
# DialogHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class DialogHelper`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/DialogHelper.cs`

## 概述

`DialogHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `DialogHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetDialogString
`public static void SetDialogString(string stringVariable, string gameTextId)`

**用途 / Purpose:** 为 dialog string 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
DialogHelper.SetDialogString("example", "example");
```

## 使用示例

```csharp
DialogHelper.Initialize();
```

## 参见

- [本区域目录](../)