---
title: "WindowsForm"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WindowsForm`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WindowsForm

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class WindowsForm`
**Base:** 无
**File:** `TaleWorlds.TwoDimension.Standalone/WindowsForm.cs`

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

**用途 / Purpose:** 设置 `parent` 的值或状态。

### Show
`public void Show()`

**用途 / Purpose:** 处理 `show` 相关逻辑。

### Hide
`public void Hide()`

**用途 / Purpose:** 处理 `hide` 相关逻辑。

### Destroy
`public void Destroy()`

**用途 / Purpose:** 处理 `destroy` 相关逻辑。

### AddMessageHandler
`public void AddMessageHandler(WindowsFormMessageHandler messageHandler)`

**用途 / Purpose:** 向当前集合/状态中添加 `message handler`。

## 使用示例

```csharp
var value = new WindowsForm();
value.SetParent(parentHandle);
```

## 参见

- [完整类目录](../catalog)