---
title: "WidgetInstantiationResultDatabindingExtension"
description: "WidgetInstantiationResultDatabindingExtension 的自动生成类参考。"
---
# WidgetInstantiationResultDatabindingExtension

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** `public static class WidgetInstantiationResultDatabindingExtension`
**Base:** 无
**File:** `TaleWorlds.GauntletUI.Data/WidgetInstantiationResultDatabindingExtension.cs`

## 概述

`WidgetInstantiationResultDatabindingExtension` 位于 `TaleWorlds.GauntletUI.Data`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.Data` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetGauntletView
`public static GauntletView GetGauntletView(this WidgetInstantiationResult widgetInstantiationResult)`

**用途 / Purpose:** 读取并返回当前对象中 gauntlet view 的结果。

```csharp
// 静态调用，不需要实例
WidgetInstantiationResultDatabindingExtension.GetGauntletView(widgetInstantiationResult);
```

## 使用示例

```csharp
WidgetInstantiationResultDatabindingExtension.GetGauntletView(widgetInstantiationResult);
```

## 参见

- [本区域目录](../)