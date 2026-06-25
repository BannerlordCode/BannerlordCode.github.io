---
title: "WidgetTemplate"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WidgetTemplate`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetTemplate

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetTemplate`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/WidgetTemplate.cs`

## 概述

`WidgetTemplate` 位于 `TaleWorlds.GauntletUI.PrefabSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.PrefabSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `LogicalChildrenLocation` | `public bool LogicalChildrenLocation { get; }` |
| `Id` | `public string Id { get; }` |
| `Prefab` | `public WidgetPrefab Prefab { get; }` |
| `Tag` | `public object Tag { get; set; }` |
| `AllAttributes` | `public IEnumerable<WidgetAttributeTemplate> AllAttributes { get; }` |

## 主要方法

### AddExtensionData
`public void AddExtensionData(string name, object data)`

**用途 / Purpose:** 向当前集合/状态中添加 `extension data`。

### RemoveExtensionData
`public void RemoveExtensionData(string name)`

**用途 / Purpose:** 从当前集合/状态中移除 `extension data`。

### AddExtensionData
`public void AddExtensionData(object data)`

**用途 / Purpose:** 向当前集合/状态中添加 `extension data`。

### SetAttribute
`public void SetAttribute(WidgetAttributeTemplate attribute)`

**用途 / Purpose:** 设置 `attribute` 的值或状态。

### GetChildAt
`public WidgetTemplate GetChildAt(int i)`

**用途 / Purpose:** 获取 `child at` 的当前值。

### AddChild
`public void AddChild(WidgetTemplate child)`

**用途 / Purpose:** 向当前集合/状态中添加 `child`。

### RemoveChild
`public void RemoveChild(WidgetTemplate child)`

**用途 / Purpose:** 从当前集合/状态中移除 `child`。

### SwapChildren
`public void SwapChildren(WidgetTemplate child1, WidgetTemplate child2)`

**用途 / Purpose:** 处理 `swap children` 相关逻辑。

### Instantiate
`public WidgetInstantiationResult Instantiate(WidgetCreationData widgetCreationData, Dictionary<string, WidgetAttributeTemplate> parameters)`

**用途 / Purpose:** 处理 `instantiate` 相关逻辑。

### OnRelease
`public void OnRelease()`

**用途 / Purpose:** 当 `release` 事件触发时调用此方法。

### LoadFrom
`public static WidgetTemplate LoadFrom(PrefabExtensionContext prefabExtensionContext, WidgetAttributeContext widgetAttributeContext, XmlNode node)`

**用途 / Purpose:** 加载 `from` 数据。

### SetRootTemplate
`public void SetRootTemplate(WidgetPrefab prefab)`

**用途 / Purpose:** 设置 `root template` 的值或状态。

### AddAttributeTo
`public void AddAttributeTo(WidgetAttributeContext widgetAttributeContext, string name, string value)`

**用途 / Purpose:** 向当前集合/状态中添加 `attribute to`。

### RemoveAttributeFrom
`public void RemoveAttributeFrom(WidgetAttributeContext widgetAttributeContext, string fullName)`

**用途 / Purpose:** 从当前集合/状态中移除 `attribute from`。

### RemoveAttributeFrom
`public void RemoveAttributeFrom(WidgetAttributeKeyType keyType, string name)`

**用途 / Purpose:** 从当前集合/状态中移除 `attribute from`。

### Save
`public void Save(PrefabExtensionContext prefabExtensionContext, XmlNode parentNode)`

**用途 / Purpose:** 保存 `save` 数据。

## 使用示例

```csharp
var value = new WidgetTemplate();
value.AddExtensionData("example", data);
```

## 参见

- [完整类目录](../catalog)