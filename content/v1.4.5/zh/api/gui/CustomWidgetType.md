---
title: "CustomWidgetType"
description: "CustomWidgetType 的自动生成类参考。"
---
# CustomWidgetType

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class CustomWidgetType`
**Base:** 无
**File:** `bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/CustomWidgetType.cs`

## 概述

`CustomWidgetType` 位于 `TaleWorlds.GauntletUI.PrefabSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.PrefabSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `WidgetPrefab` | `public WidgetPrefab WidgetPrefab { get; }` |
| `WidgetFactory` | `public WidgetFactory WidgetFactory { get; }` |
| `Name` | `public string Name { get; }` |

## 主要方法

### CheckForUpdate
`public bool CheckForUpdate()`

**用途 / Purpose:** 检查「for update」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 CustomWidgetType 实例
CustomWidgetType customWidgetType = ...;
var result = customWidgetType.CheckForUpdate();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CustomWidgetType customWidgetType = ...;
customWidgetType.CheckForUpdate();
```

## 参见

- [本区域目录](../)