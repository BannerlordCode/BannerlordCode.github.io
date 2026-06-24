<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WidgetFactory`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WidgetFactory

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetFactory`
**Base:** 无
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetFactory.cs`

## 概述

`WidgetFactory` 位于 `TaleWorlds.GauntletUI.PrefabSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.PrefabSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PrefabExtensionContext` | `public PrefabExtensionContext PrefabExtensionContext { get; }` |
| `WidgetAttributeContext` | `public WidgetAttributeContext WidgetAttributeContext { get; }` |
| `GeneratedPrefabContext` | `public GeneratedPrefabContext GeneratedPrefabContext { get; }` |

## 主要方法

### Initialize
`public void Initialize(List<string> assemblyOrder = null)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### AddCustomType
`public void AddCustomType(string name, string path)`

**用途 / Purpose:** 向当前集合/状态中添加 `custom type`。

### GetPrefabNames
`public IEnumerable<string> GetPrefabNames()`

**用途 / Purpose:** 获取 `prefab names` 的当前值。

### GetWidgetTypes
`public IEnumerable<string> GetWidgetTypes()`

**用途 / Purpose:** 获取 `widget types` 的当前值。

### IsBuiltinType
`public bool IsBuiltinType(string name)`

**用途 / Purpose:** 处理 `is builtin type` 相关逻辑。

### GetBuiltinType
`public Type GetBuiltinType(string name)`

**用途 / Purpose:** 获取 `builtin type` 的当前值。

### IsCustomType
`public bool IsCustomType(string typeName)`

**用途 / Purpose:** 处理 `is custom type` 相关逻辑。

### GetCustomTypePath
`public string GetCustomTypePath(string name)`

**用途 / Purpose:** 获取 `custom type path` 的当前值。

### CreateBuiltinWidget
`public Widget CreateBuiltinWidget(UIContext context, string typeName)`

**用途 / Purpose:** 创建一个 `builtin widget` 实例或对象。

### GetCustomType
`public WidgetPrefab GetCustomType(string typeName)`

**用途 / Purpose:** 获取 `custom type` 的当前值。

### OnUnload
`public void OnUnload(string typeName)`

**用途 / Purpose:** 当 `unload` 事件触发时调用此方法。

### CheckForUpdates
`public void CheckForUpdates()`

**用途 / Purpose:** 处理 `check for updates` 相关逻辑。

## 使用示例

```csharp
var value = new WidgetFactory();
value.Initialize(null);
```

## 参见

- [完整类目录](../catalog)