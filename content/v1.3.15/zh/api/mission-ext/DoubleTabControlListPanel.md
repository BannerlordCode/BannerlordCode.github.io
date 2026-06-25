---
title: "DoubleTabControlListPanel"
description: "DoubleTabControlListPanel 的自动生成类参考。"
---
# DoubleTabControlListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DoubleTabControlListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/DoubleTabControlListPanel.cs`

## 概述

`DoubleTabControlListPanel` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Widgets`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `FirstListButton` | `public ButtonWidget FirstListButton { get; set; }` |
| `SecondListButton` | `public ButtonWidget SecondListButton { get; set; }` |
| `FirstList` | `public Widget FirstList { get; set; }` |
| `SecondList` | `public Widget SecondList { get; set; }` |

## 主要方法

### OnFirstTabClick
`public void OnFirstTabClick(Widget widget)`

**用途 / Purpose:** **用途 / Purpose:** 在 first tab click 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DoubleTabControlListPanel 实例
DoubleTabControlListPanel doubleTabControlListPanel = ...;
doubleTabControlListPanel.OnFirstTabClick(widget);
```

### OnSecondTabClick
`public void OnSecondTabClick(Widget widget)`

**用途 / Purpose:** **用途 / Purpose:** 在 second tab click 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 DoubleTabControlListPanel 实例
DoubleTabControlListPanel doubleTabControlListPanel = ...;
doubleTabControlListPanel.OnSecondTabClick(widget);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
DoubleTabControlListPanel doubleTabControlListPanel = ...;
doubleTabControlListPanel.OnFirstTabClick(widget);
```

## 参见

- [本区域目录](../)