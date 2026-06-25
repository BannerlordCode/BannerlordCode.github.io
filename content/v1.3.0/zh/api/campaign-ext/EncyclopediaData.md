---
title: "EncyclopediaData"
description: "EncyclopediaData 的自动生成类参考。"
---
# EncyclopediaData

**Namespace:** SandBox.GauntletUI.Encyclopedia
**Module:** SandBox.GauntletUI
**Type:** `public class EncyclopediaData`
**Base:** 无
**File:** `SandBox.GauntletUI/Encyclopedia/EncyclopediaData.cs`

## 概述

`EncyclopediaData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `EncyclopediaData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 EncyclopediaData 实例
EncyclopediaData encyclopediaData = ...;
encyclopediaData.OnFinalize();
```

### CloseEncyclopedia
`public void CloseEncyclopedia()`

**用途 / Purpose:** 关闭encyclopedia对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 EncyclopediaData 实例
EncyclopediaData encyclopediaData = ...;
encyclopediaData.CloseEncyclopedia();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
EncyclopediaData entry = ...;
```

## 参见

- [本区域目录](../)