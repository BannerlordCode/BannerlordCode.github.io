---
title: "WindowsForm"
description: "WindowsForm 的自动生成类参考。"
---
# WindowsForm

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class WindowsForm`
**Base:** 无
**File:** `bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone/WindowsForm.cs`

## 概述

`WindowsForm` 位于 `TaleWorlds.TwoDimension.Standalone`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension.Standalone` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Width` | `public int Width { get; set; }` |
| `Height` | `public int Height { get; set; }` |
| `Text` | `public string Text { get; set; }` |
| `Handle` | `public IntPtr Handle { get; set; }` |

## 主要方法

### SetParent
`public void SetParent(IntPtr parentHandle)`

**用途 / Purpose:** 为 「parent」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 WindowsForm 实例
WindowsForm windowsForm = ...;
windowsForm.SetParent(parentHandle);
```

### Show
`public void Show()`

**用途 / Purpose:** 显示当前对象对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 WindowsForm 实例
WindowsForm windowsForm = ...;
windowsForm.Show();
```

### Hide
`public void Hide()`

**用途 / Purpose:** 隐藏当前对象对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 WindowsForm 实例
WindowsForm windowsForm = ...;
windowsForm.Hide();
```

### Destroy
`public void Destroy()`

**用途 / Purpose:** 处理与 「destroy」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 WindowsForm 实例
WindowsForm windowsForm = ...;
windowsForm.Destroy();
```

### AddMessageHandler
`public void AddMessageHandler(WindowsFormMessageHandler messageHandler)`

**用途 / Purpose:** 将 「message handler」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 WindowsForm 实例
WindowsForm windowsForm = ...;
windowsForm.AddMessageHandler(messageHandler);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
WindowsForm windowsForm = ...;
windowsForm.SetParent(parentHandle);
```

## 参见

- [本区域目录](../)