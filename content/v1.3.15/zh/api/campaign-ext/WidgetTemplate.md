---
title: "WidgetTemplate"
description: "WidgetTemplate 的自动生成类参考。"
---
# WidgetTemplate

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetTemplate`
**Base:** 无
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetTemplate.cs`

## 概述

`WidgetTemplate` 位于 `TaleWorlds.GauntletUI.PrefabSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.PrefabSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `LogicalChildrenLocation` | `public bool LogicalChildrenLocation { get; }` |
| `Id` | `public string Id { get; }` |
| `Type` | `public string Type { get; }` |
| `ChildCount` | `public int ChildCount { get; }` |
| `GivenParameters` | `public Dictionary<string, WidgetAttributeTemplate> GivenParameters { get; }` |
| `Prefab` | `public WidgetPrefab Prefab { get; }` |
| `RootTemplate` | `public WidgetTemplate RootTemplate { get; }` |
| `Attributes` | `public Dictionary<Type, Dictionary<string, WidgetAttributeTemplate>> Attributes { get; set; }` |
| `Tag` | `public object Tag { get; set; }` |
| `AllAttributes` | `public IEnumerable<WidgetAttributeTemplate> AllAttributes { get; }` |

## 主要方法

### AddExtensionData
`public void AddExtensionData(string name, object data)`

**用途 / Purpose:** 将 「extension data」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 WidgetTemplate 实例
WidgetTemplate widgetTemplate = ...;
widgetTemplate.AddExtensionData("example", data);
```

### RemoveExtensionData
`public void RemoveExtensionData(string name)`

**用途 / Purpose:** 从当前容器或状态中移除 「extension data」。

```csharp
// 先通过子系统 API 拿到 WidgetTemplate 实例
WidgetTemplate widgetTemplate = ...;
widgetTemplate.RemoveExtensionData("example");
```

### AddExtensionData
`public void AddExtensionData(object data)`

**用途 / Purpose:** 将 「extension data」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 WidgetTemplate 实例
WidgetTemplate widgetTemplate = ...;
widgetTemplate.AddExtensionData(data);
```

### SetAttribute
`public void SetAttribute(WidgetAttributeTemplate attribute)`

**用途 / Purpose:** 为 「attribute」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 WidgetTemplate 实例
WidgetTemplate widgetTemplate = ...;
widgetTemplate.SetAttribute(attribute);
```

### GetChildAt
`public WidgetTemplate GetChildAt(int i)`

**用途 / Purpose:** 读取并返回当前对象中 「child at」 的结果。

```csharp
// 先通过子系统 API 拿到 WidgetTemplate 实例
WidgetTemplate widgetTemplate = ...;
var result = widgetTemplate.GetChildAt(0);
```

### AddChild
`public void AddChild(WidgetTemplate child)`

**用途 / Purpose:** 将 「child」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 WidgetTemplate 实例
WidgetTemplate widgetTemplate = ...;
widgetTemplate.AddChild(child);
```

### RemoveChild
`public void RemoveChild(WidgetTemplate child)`

**用途 / Purpose:** 从当前容器或状态中移除 「child」。

```csharp
// 先通过子系统 API 拿到 WidgetTemplate 实例
WidgetTemplate widgetTemplate = ...;
widgetTemplate.RemoveChild(child);
```

### SwapChildren
`public void SwapChildren(WidgetTemplate child1, WidgetTemplate child2)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 WidgetTemplate 实例
WidgetTemplate widgetTemplate = ...;
widgetTemplate.SwapChildren(child1, child2);
```

### Instantiate
`public WidgetInstantiationResult Instantiate(WidgetCreationData widgetCreationData, Dictionary<string, WidgetAttributeTemplate> parameters)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 WidgetTemplate 实例
WidgetTemplate widgetTemplate = ...;
var result = widgetTemplate.Instantiate(widgetCreationData, dictionary<string, parameters);
```

### OnRelease
`public void OnRelease()`

**用途 / Purpose:** 在 「release」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 WidgetTemplate 实例
WidgetTemplate widgetTemplate = ...;
widgetTemplate.OnRelease();
```

### LoadFrom
`public static WidgetTemplate LoadFrom(PrefabExtensionContext prefabExtensionContext, WidgetAttributeContext widgetAttributeContext, XmlNode node)`

**用途 / Purpose:** 从持久化存储或流中读取 「from」。

```csharp
// 静态调用，不需要实例
WidgetTemplate.LoadFrom(prefabExtensionContext, widgetAttributeContext, node);
```

### SetRootTemplate
`public void SetRootTemplate(WidgetPrefab prefab)`

**用途 / Purpose:** 为 「root template」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 WidgetTemplate 实例
WidgetTemplate widgetTemplate = ...;
widgetTemplate.SetRootTemplate(prefab);
```

### AddAttributeTo
`public void AddAttributeTo(WidgetAttributeContext widgetAttributeContext, string name, string value)`

**用途 / Purpose:** 将 「attribute to」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 WidgetTemplate 实例
WidgetTemplate widgetTemplate = ...;
widgetTemplate.AddAttributeTo(widgetAttributeContext, "example", "example");
```

### RemoveAttributeFrom
`public void RemoveAttributeFrom(WidgetAttributeContext widgetAttributeContext, string fullName)`

**用途 / Purpose:** 从当前容器或状态中移除 「attribute from」。

```csharp
// 先通过子系统 API 拿到 WidgetTemplate 实例
WidgetTemplate widgetTemplate = ...;
widgetTemplate.RemoveAttributeFrom(widgetAttributeContext, "example");
```

### RemoveAttributeFrom
`public void RemoveAttributeFrom(WidgetAttributeKeyType keyType, string name)`

**用途 / Purpose:** 从当前容器或状态中移除 「attribute from」。

```csharp
// 先通过子系统 API 拿到 WidgetTemplate 实例
WidgetTemplate widgetTemplate = ...;
widgetTemplate.RemoveAttributeFrom(keyType, "example");
```

### Save
`public void Save(PrefabExtensionContext prefabExtensionContext, XmlNode parentNode)`

**用途 / Purpose:** 将当前对象的数据写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 WidgetTemplate 实例
WidgetTemplate widgetTemplate = ...;
widgetTemplate.Save(prefabExtensionContext, parentNode);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
WidgetTemplate widgetTemplate = ...;
widgetTemplate.AddExtensionData("example", data);
```

## 参见

- [本区域目录](../)