<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WidgetInstantiationResult`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetInstantiationResult

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetInstantiationResult`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/WidgetInstantiationResult.cs`

## 概述

`WidgetInstantiationResult` 位于 `TaleWorlds.GauntletUI.PrefabSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.PrefabSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Widget` | `public Widget Widget { get; }` |
| `Template` | `public WidgetTemplate Template { get; }` |
| `CustomWidgetInstantiationData` | `public WidgetInstantiationResult CustomWidgetInstantiationData { get; }` |
| `Children` | `public List<WidgetInstantiationResult> Children { get; }` |

## 主要方法

### AddExtensionData
`public void AddExtensionData(string name, object data, bool passToChildWidgetCreation = false)`

**用途 / Purpose:** 向当前集合/状态中添加 `extension data`。

### AddExtensionData
`public void AddExtensionData(object data, bool passToChildWidgetCreation = false)`

**用途 / Purpose:** 向当前集合/状态中添加 `extension data`。

### GetLogicalOrDefaultChildrenLocation
`public WidgetInstantiationResult GetLogicalOrDefaultChildrenLocation()`

**用途 / Purpose:** 获取 `logical or default children location` 的当前值。

## 使用示例

```csharp
var value = new WidgetInstantiationResult();
value.AddExtensionData("example", data, false);
```

## 参见

- [完整类目录](../catalog)