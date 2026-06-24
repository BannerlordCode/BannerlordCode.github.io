<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PrefabDependencyContext`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PrefabDependencyContext

**Namespace:** TaleWorlds.GauntletUI.CodeGenerator
**Module:** TaleWorlds.GauntletUI
**Type:** `public class PrefabDependencyContext`
**Base:** 无
**File:** `TaleWorlds.GauntletUI.CodeGenerator/PrefabDependencyContext.cs`

## 概述

`PrefabDependencyContext` 位于 `TaleWorlds.GauntletUI.CodeGenerator`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.CodeGenerator` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RootClassName` | `public string RootClassName { get; }` |

## 主要方法

### GenerateDependencyName
`public string GenerateDependencyName()`

**用途 / Purpose:** 处理 `generate dependency name` 相关逻辑。

### AddDependentWidgetTemplateGenerateContext
`public void AddDependentWidgetTemplateGenerateContext(WidgetTemplateGenerateContext widgetTemplateGenerateContext)`

**用途 / Purpose:** 向当前集合/状态中添加 `dependent widget template generate context`。

### GetDependendPrefab
`public PrefabDependency GetDependendPrefab(string type, Dictionary<string, WidgetAttributeTemplate> givenParameters, Dictionary<string, object> data, bool isRoot)`

**用途 / Purpose:** 获取 `dependend prefab` 的当前值。

### GenerateInto
`public void GenerateInto(NamespaceCode namespaceCode)`

**用途 / Purpose:** 处理 `generate into` 相关逻辑。

### ContainsDependency
`public bool ContainsDependency(string type, Dictionary<string, WidgetAttributeTemplate> givenParameters, Dictionary<string, object> data, bool isRoot)`

**用途 / Purpose:** 处理 `contains dependency` 相关逻辑。

## 使用示例

```csharp
var value = new PrefabDependencyContext();
value.GenerateDependencyName();
```

## 参见

- [完整类目录](../catalog)