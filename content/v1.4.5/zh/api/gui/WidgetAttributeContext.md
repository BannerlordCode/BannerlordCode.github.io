---
title: "WidgetAttributeContext"
description: "WidgetAttributeContext 的自动生成类参考。"
---
# WidgetAttributeContext

**Namespace:** TaleWorlds.GauntletUI.PrefabSystem
**Module:** TaleWorlds.GauntletUI
**Type:** `public class WidgetAttributeContext`
**Base:** 无
**File:** `bin/TaleWorlds.GauntletUI.PrefabSystem/TaleWorlds.GauntletUI.PrefabSystem/WidgetAttributeContext.cs`

## 概述

`WidgetAttributeContext` 位于 `TaleWorlds.GauntletUI.PrefabSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI.PrefabSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterKeyType
`public void RegisterKeyType(WidgetAttributeKeyType keyType)`

**用途 / Purpose:** 将「key type」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 WidgetAttributeContext 实例
WidgetAttributeContext widgetAttributeContext = ...;
widgetAttributeContext.RegisterKeyType(keyType);
```

### RegisterValueType
`public void RegisterValueType(WidgetAttributeValueType valueType)`

**用途 / Purpose:** 将「value type」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 WidgetAttributeContext 实例
WidgetAttributeContext widgetAttributeContext = ...;
widgetAttributeContext.RegisterValueType(valueType);
```

### GetKeyType
`public WidgetAttributeKeyType GetKeyType(string key)`

**用途 / Purpose:** 读取并返回当前对象中 「key type」 的结果。

```csharp
// 先通过子系统 API 拿到 WidgetAttributeContext 实例
WidgetAttributeContext widgetAttributeContext = ...;
var result = widgetAttributeContext.GetKeyType("example");
```

### GetValueType
`public WidgetAttributeValueType GetValueType(string value)`

**用途 / Purpose:** 读取并返回当前对象中 「value type」 的结果。

```csharp
// 先通过子系统 API 拿到 WidgetAttributeContext 实例
WidgetAttributeContext widgetAttributeContext = ...;
var result = widgetAttributeContext.GetValueType("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
WidgetAttributeContext widgetAttributeContext = ...;
widgetAttributeContext.RegisterKeyType(keyType);
```

## 参见

- [本区域目录](../)