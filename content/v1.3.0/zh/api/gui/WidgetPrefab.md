---
title: "WidgetPrefab"
description: "WidgetPrefab 的自动生成类参考。"
---
# WidgetPrefab

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetPrefab`
**Base:** 无
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetPrefab.cs`

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

**用途 / Purpose:** 从持久化存储或流中读取 「from」。

```csharp
// 静态调用，不需要实例
WidgetPrefab.LoadFrom(prefabExtensionContext, widgetAttributeContext, "example");
```

### Save
`public XmlDocument Save(PrefabExtensionContext prefabExtensionContext)`

**用途 / Purpose:** 将当前对象的数据写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 WidgetPrefab 实例
WidgetPrefab widgetPrefab = ...;
var result = widgetPrefab.Save(prefabExtensionContext);
```

### Instantiate
`public WidgetInstantiationResult Instantiate(WidgetCreationData widgetCreationData)`

**用途 / Purpose:** 处理与 「instantiate」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 WidgetPrefab 实例
WidgetPrefab widgetPrefab = ...;
var result = widgetPrefab.Instantiate(widgetCreationData);
```

### Instantiate
`public WidgetInstantiationResult Instantiate(WidgetCreationData widgetCreationData, Dictionary<string, WidgetAttributeTemplate> parameters)`

**用途 / Purpose:** 处理与 「instantiate」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 WidgetPrefab 实例
WidgetPrefab widgetPrefab = ...;
var result = widgetPrefab.Instantiate(widgetCreationData, dictionary<string, parameters);
```

### OnRelease
`public void OnRelease()`

**用途 / Purpose:** 在 「release」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 WidgetPrefab 实例
WidgetPrefab widgetPrefab = ...;
widgetPrefab.OnRelease();
```

### GetConstantValue
`public ConstantDefinition GetConstantValue(string name)`

**用途 / Purpose:** 读取并返回当前对象中 「constant value」 的结果。

```csharp
// 先通过子系统 API 拿到 WidgetPrefab 实例
WidgetPrefab widgetPrefab = ...;
var result = widgetPrefab.GetConstantValue("example");
```

### GetParameterDefaultValue
`public string GetParameterDefaultValue(string name)`

**用途 / Purpose:** 读取并返回当前对象中 「parameter default value」 的结果。

```csharp
// 先通过子系统 API 拿到 WidgetPrefab 实例
WidgetPrefab widgetPrefab = ...;
var result = widgetPrefab.GetParameterDefaultValue("example");
```

## 使用示例

```csharp
WidgetPrefab.LoadFrom(prefabExtensionContext, widgetAttributeContext, "example");
```

## 参见

- [本区域目录](../)