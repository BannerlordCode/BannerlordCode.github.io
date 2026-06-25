---
title: "WidgetFactory"
description: "WidgetFactory 的自动生成类参考。"
---
# WidgetFactory

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetFactory`
**Base:** 无
**File:** `bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/WidgetFactory.cs`

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

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 WidgetFactory 实例
WidgetFactory widgetFactory = ...;
widgetFactory.Initialize(null);
```

### AddCustomType
`public void AddCustomType(string name, string path)`

**用途 / Purpose:** 将 「custom type」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 WidgetFactory 实例
WidgetFactory widgetFactory = ...;
widgetFactory.AddCustomType("example", "example");
```

### GetPrefabNames
`public IEnumerable<string> GetPrefabNames()`

**用途 / Purpose:** 读取并返回当前对象中 「prefab names」 的结果。

```csharp
// 先通过子系统 API 拿到 WidgetFactory 实例
WidgetFactory widgetFactory = ...;
var result = widgetFactory.GetPrefabNames();
```

### GetWidgetTypes
`public IEnumerable<string> GetWidgetTypes()`

**用途 / Purpose:** 读取并返回当前对象中 「widget types」 的结果。

```csharp
// 先通过子系统 API 拿到 WidgetFactory 实例
WidgetFactory widgetFactory = ...;
var result = widgetFactory.GetWidgetTypes();
```

### IsBuiltinType
`public bool IsBuiltinType(string name)`

**用途 / Purpose:** 判断当前对象是否处于 「builtin type」 状态或条件。

```csharp
// 先通过子系统 API 拿到 WidgetFactory 实例
WidgetFactory widgetFactory = ...;
var result = widgetFactory.IsBuiltinType("example");
```

### GetBuiltinType
`public Type GetBuiltinType(string name)`

**用途 / Purpose:** 读取并返回当前对象中 「builtin type」 的结果。

```csharp
// 先通过子系统 API 拿到 WidgetFactory 实例
WidgetFactory widgetFactory = ...;
var result = widgetFactory.GetBuiltinType("example");
```

### IsCustomType
`public bool IsCustomType(string typeName)`

**用途 / Purpose:** 判断当前对象是否处于 「custom type」 状态或条件。

```csharp
// 先通过子系统 API 拿到 WidgetFactory 实例
WidgetFactory widgetFactory = ...;
var result = widgetFactory.IsCustomType("example");
```

### GetCustomTypePath
`public string GetCustomTypePath(string name)`

**用途 / Purpose:** 读取并返回当前对象中 「custom type path」 的结果。

```csharp
// 先通过子系统 API 拿到 WidgetFactory 实例
WidgetFactory widgetFactory = ...;
var result = widgetFactory.GetCustomTypePath("example");
```

### CreateBuiltinWidget
`public Widget CreateBuiltinWidget(UIContext context, string typeName)`

**用途 / Purpose:** 构建一个新的 「builtin widget」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 WidgetFactory 实例
WidgetFactory widgetFactory = ...;
var result = widgetFactory.CreateBuiltinWidget(context, "example");
```

### GetCustomType
`public WidgetPrefab GetCustomType(string typeName)`

**用途 / Purpose:** 读取并返回当前对象中 「custom type」 的结果。

```csharp
// 先通过子系统 API 拿到 WidgetFactory 实例
WidgetFactory widgetFactory = ...;
var result = widgetFactory.GetCustomType("example");
```

### OnUnload
`public void OnUnload(string typeName)`

**用途 / Purpose:** 在 「unload」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 WidgetFactory 实例
WidgetFactory widgetFactory = ...;
widgetFactory.OnUnload("example");
```

### CheckForUpdates
`public void CheckForUpdates()`

**用途 / Purpose:** 检查「for updates」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 WidgetFactory 实例
WidgetFactory widgetFactory = ...;
widgetFactory.CheckForUpdates();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
WidgetFactory widgetFactory = ...;
widgetFactory.Initialize(null);
```

## 参见

- [本区域目录](../)