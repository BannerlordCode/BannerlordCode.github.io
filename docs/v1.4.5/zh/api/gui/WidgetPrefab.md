<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WidgetPrefab`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WidgetPrefab

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetPrefab`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/WidgetPrefab.cs`

## 概述

`WidgetPrefab` 位于 `TaleWorlds.GauntletUI.PrefabSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.PrefabSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `VisualDefinitionTemplates` | `public Dictionary<string, VisualDefinitionTemplate> VisualDefinitionTemplates { get; set; }` |
| `Constants` | `public Dictionary<string, ConstantDefinition> Constants { get; set; }` |
| `Parameters` | `public Dictionary<string, string> Parameters { get; }` |
| `CustomElements` | `public Dictionary<string, XmlElement> CustomElements { get; }` |
| `RootTemplate` | `public WidgetTemplate RootTemplate { get; }` |

## 主要方法

### LoadFrom
`public static WidgetPrefab LoadFrom(PrefabExtensionContext prefabExtensionContext, WidgetAttributeContext widgetAttributeContext, string path)`

**用途 / Purpose:** 加载 `from` 数据。

### Save
`public XmlDocument Save(PrefabExtensionContext prefabExtensionContext)`

**用途 / Purpose:** 保存 `save` 数据。

### Instantiate
`public WidgetInstantiationResult Instantiate(WidgetCreationData widgetCreationData)`

**用途 / Purpose:** 处理 `instantiate` 相关逻辑。

### Instantiate
`public WidgetInstantiationResult Instantiate(WidgetCreationData widgetCreationData, Dictionary<string, WidgetAttributeTemplate> parameters)`

**用途 / Purpose:** 处理 `instantiate` 相关逻辑。

### OnRelease
`public void OnRelease()`

**用途 / Purpose:** 当 `release` 事件触发时调用此方法。

### GetConstantValue
`public ConstantDefinition GetConstantValue(string name)`

**用途 / Purpose:** 获取 `constant value` 的当前值。

### GetParameterDefaultValue
`public string GetParameterDefaultValue(string name)`

**用途 / Purpose:** 获取 `parameter default value` 的当前值。

## 使用示例

```csharp
WidgetPrefab.LoadFrom(prefabExtensionContext, widgetAttributeContext, "example");
```

## 参见

- [完整类目录](../catalog)