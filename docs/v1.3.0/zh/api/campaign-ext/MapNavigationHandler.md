<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapNavigationHandler`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapNavigationHandler

**Namespace:** SandBox.View.Map.Navigation
**Module:** SandBox.View
**Type:** `public class MapNavigationHandler : INavigationHandler`
**Base:** `INavigationHandler`
**File:** `SandBox.View/Map/Navigation/MapNavigationHandler.cs`

## 概述

`MapNavigationHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MapNavigationHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsNavigationLocked` | `public bool IsNavigationLocked { get; set; }` |
| `IsEscapeMenuActive` | `public bool IsEscapeMenuActive { get; }` |

## 主要方法

### GetElements
`public INavigationElement GetElements()`

**用途 / Purpose:** 获取 `elements` 的当前值。

### IsAnyElementActive
`public bool IsAnyElementActive()`

**用途 / Purpose:** 处理 `is any element active` 相关逻辑。

### GetElement
`public INavigationElement GetElement(string id)`

**用途 / Purpose:** 获取 `element` 的当前值。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new MapNavigationHandler());
```

## 参见

- [完整类目录](../catalog)