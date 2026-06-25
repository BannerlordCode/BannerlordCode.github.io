---
title: "NativeMessageBox"
description: "NativeMessageBox 的自动生成类参考。"
---
# NativeMessageBox

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class NativeMessageBox`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/NativeMessageBox.cs`

## 概述

`NativeMessageBox` 位于 `TaleWorlds.MountAndBlade.Launcher.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Launcher.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Show
`public static NativeMessageBox.Result Show(string text, string caption = "Message", NativeMessageBox.Buttons buttons = NativeMessageBox.Buttons.OK, NativeMessageBox.Icon icon = NativeMessageBox.Icon.None)`

**用途 / Purpose:** **用途 / Purpose:** 显示当前对象对应的界面或元素。

```csharp
// 静态调用，不需要实例
NativeMessageBox.Show("example", "example", nativeMessageBox.Buttons.OK, nativeMessageBox.Icon.None);
```

## 使用示例

```csharp
NativeMessageBox.Show("example", "example", nativeMessageBox.Buttons.OK, nativeMessageBox.Icon.None);
```

## 参见

- [本区域目录](../)